// keeps all the data for the website
const state = {
  activeMajors: new Set(), // majors the user is still consdering
  deselectedMajors: new Set(), // majors the user has removed from consideration
  pendingEliminations: new Set(), // majors that the current question recommends for elimination based on the user's answer
  currentQuestionIndex: 0, // current question index
  currentView: "main" // which view is currently shown
};

// these are the differenet views
const VIEWS = ["view-main", "view-question", "view-eliminations", "view-quiz-done"];

// hides all views and shows the one with the given id
function showView(id) {
  // hides all views
  VIEWS.forEach(v => document.getElementById(v).style.display = "none");
  // show the page with the given id
  document.getElementById(id).style.display = "block";
  // sets id as the current view in state
  state.currentView = id;
}

function renderMainPage() {
  const collegesContainer = document.getElementById("active-colleges-container");
  collegesContainer.innerHTML = "";

  MAJORS_DATA.forEach(collegeObj => {
    const activeMajorsInCollege = collegeObj.majors.filter(m => state.activeMajors.has(m.name));
    if (activeMajorsInCollege.length === 0) return;

    const section = document.createElement("div");
    section.className = "college-section";

    // College header
    const header = document.createElement("div");
    header.className = "college-header";

    const bar = document.createElement("div");
    bar.className = "gold-bar-short";

    const label = document.createElement("span");
    label.className = "college-label";
    label.textContent = collegeObj.college.toUpperCase();

    const count = document.createElement("span");
    count.className = "college-count";
    count.textContent = activeMajorsInCollege.length + " major" + (activeMajorsInCollege.length === 1 ? "" : "s");

    header.appendChild(bar);
    header.appendChild(label);
    header.appendChild(count);
    section.appendChild(header);

    // Major cards
    activeMajorsInCollege.forEach(major => {
      const card = document.createElement("div");
      card.className = "major-card";

      const nameEl = document.createElement("span");
      nameEl.className = "major-name";
      nameEl.textContent = major.name;

      const link = document.createElement("a");
      link.className = "major-link";
      link.href = major.url || "#";
      link.textContent = "Purdue Page ↗";
      link.target = "_blank";
      if (!major.url) link.style.visibility = "hidden";

      const btn = document.createElement("button");
      btn.className = "btn-deselect";
      btn.textContent = "Deselect";
      btn.onclick = () => deselect(major.name);

      card.appendChild(nameEl);
      card.appendChild(link);
      card.appendChild(btn);
      section.appendChild(card);
    });

    collegesContainer.appendChild(section);
  });

  // Deselected section
  const deselectedSection = document.getElementById("deselected-section");
  const deselectedContainer = document.getElementById("deselected-container");
  deselectedContainer.innerHTML = "";

  if (state.deselectedMajors.size === 0) {
    deselectedSection.style.display = "none";
    return;
  }

  deselectedSection.style.display = "block";
  document.getElementById("deselected-count").textContent =
    state.deselectedMajors.size + " hidden";

  state.deselectedMajors.forEach(name => {
    const card = document.createElement("div");
    card.className = "deselected-card";

    const nameEl = document.createElement("span");
    nameEl.className = "deselected-name";
    nameEl.textContent = name;

    const btn = document.createElement("button");
    btn.className = "btn-reselect";
    btn.textContent = "Re-select";
    btn.onclick = () => reselect(name);

    card.appendChild(nameEl);
    card.appendChild(btn);
    deselectedContainer.appendChild(card);
  });
}

// moves majors from activeMajors to deselectedMajors, then re-renders
function deselect(name) {
  state.activeMajors.delete(name);
  state.deselectedMajors.add(name);
  renderMainPage();
}

// moves majors from deselectedMajors to activeMajors, then re-renders
function reselect(name) {
  state.deselectedMajors.delete(name);
  state.activeMajors.add(name);
  renderMainPage();
}

function startQuiz() {
  if (state.activeMajors.size === 0) {
    alert("No majors are currently selected. Re-select some majors before starting the quiz.");
    return;
  }
  state.currentQuestionIndex = 0;
  state.pendingEliminations.clear();
  while (state.currentQuestionIndex < QUESTIONS.length && shouldSkipQuestion()) {
    state.currentQuestionIndex++;
  }
  showView("view-question");
  renderQuestion();
}

function renderQuestion() {
  // ends the quiz when there are no more questions to ask
  if (state.currentQuestionIndex >= QUESTIONS.length) {
    const remaining = state.activeMajors.size;
    document.getElementById("done-count-badge").textContent =
      remaining + " major" + (remaining === 1 ? "" : "s") + " left";
    showView("view-quiz-done");
    return;
  }

  // renders the current question
  showView("view-question");
  const q = QUESTIONS[state.currentQuestionIndex];

  document.getElementById("active-count").textContent =
    state.activeMajors.size + " major" + (state.activeMajors.size === 1 ? "" : "s") + " remaining";
  document.getElementById("question-text").textContent = q.text;

  // Progress bar
  const pct = Math.round((state.currentQuestionIndex / QUESTIONS.length) * 100);
  document.getElementById("progress-bar-fill").style.width = pct + "%";

}

// updates pendingEliminations and shows elimination view
function handleAnswer(answer) {
  const q = QUESTIONS[state.currentQuestionIndex];
  // finds candidates for elimination
  const candidates = answer === "yes" ? q.eliminateIfYes : q.eliminateIfNo;
  // filters candidates to only show majors that are candidates and active
  const filtered = candidates.filter(name => state.activeMajors.has(name));

  if (filtered.length === 0) {
    advanceQuestion();
    return;
  }

  state.pendingEliminations = new Set(filtered);
  renderEliminationsView(answer);
  showView("view-eliminations");
}

// returns the college name for a given major name
function getCollegeName(majorName) {
  for (const collegeObj of MAJORS_DATA) {
    if (collegeObj.majors.some(m => m.name === majorName)) {
      return collegeObj.college;
    }
  }
  return "";
}

// renders the elimination view
function renderEliminationsView(answer) {
  const q = QUESTIONS[state.currentQuestionIndex];
  const answerLabel = answer === "yes" ? "Yes" : "No";

  document.getElementById("elimination-context").textContent =
    'Based on your answer: "' + answerLabel + '" to "' + q.text + '"';

  const size = state.pendingEliminations.size;
  document.getElementById("elimination-count").textContent =
    size + " major" + (size === 1 ? "" : "s") + " recommended for elimination";

  const list = document.getElementById("elimination-list");
  list.innerHTML = "";

  state.pendingEliminations.forEach(name => {
    const college = getCollegeName(name);

    const item = document.createElement("div");
    item.className = "elim-item";
    item.dataset.major = name;

    const nameEl = document.createElement("span");
    nameEl.className = "elim-item-name";
    nameEl.textContent = name;

    const collegeEl = document.createElement("span");
    collegeEl.className = "elim-item-college";
    collegeEl.textContent = college;

    const btn = document.createElement("button");
    btn.className = "btn-deselect-this";
    btn.textContent = "Deselect This";
    btn.onclick = () => deselectSingle(name);

    item.appendChild(nameEl);
    item.appendChild(collegeEl);
    item.appendChild(btn);
    list.appendChild(item);
  });
}

// removes a single major with a fade animation, then advances if list is empty
function deselectSingle(name) {
  state.activeMajors.delete(name);
  state.deselectedMajors.add(name);
  state.pendingEliminations.delete(name);

  // Fade out the item, then remove it
  const item = document.querySelector('.elim-item[data-major="' + CSS.escape(name) + '"]');
  if (item) {
    item.classList.add("removing");
    setTimeout(() => {
      item.remove();
      updateEliminationCount();
      if (state.pendingEliminations.size === 0) advanceQuestion();
    }, 300);
  } else {
    updateEliminationCount();
    if (state.pendingEliminations.size === 0) advanceQuestion();
  }
}

function updateEliminationCount() {
  const size = state.pendingEliminations.size;
  document.getElementById("elimination-count").textContent =
    size + " major" + (size === 1 ? "" : "s") + " recommended for elimination";
}

function deselectAllRecommended() {
  state.pendingEliminations.forEach(name => {
    state.activeMajors.delete(name);
    state.deselectedMajors.add(name);
  });
  state.pendingEliminations.clear();
  advanceQuestion();
}

function confirmAndNext() {
  state.pendingEliminations.clear();
  advanceQuestion();
}

function advanceQuestion() {
  state.currentQuestionIndex++;
  state.pendingEliminations.clear();
  // Skip questions that can't eliminate any active major
  while (state.currentQuestionIndex < QUESTIONS.length && shouldSkipQuestion()) {
    state.currentQuestionIndex++;
  }
  renderQuestion();
}

function shouldSkipQuestion() {
  // gets the questions
  const q = QUESTIONS[state.currentQuestionIndex];
  const yesList = q.eliminateIfYes;
  const noList = q.eliminateIfNo;

  // Check if ANY active major appears in eliminateIfYes
  const affectsYes = yesList.some(m => state.activeMajors.has(m));

  // Check if ANY active major appears in eliminateIfNo
  const affectsNo = noList.some(m => state.activeMajors.has(m));

  // If neither list intersects with active majors → skip
  return !(affectsYes || affectsNo);
}

// resets quiz by clearing pendingEliminations, resetting index, and rendering the main page
function exitQuiz() {
  state.pendingEliminations.clear();
  state.currentQuestionIndex = 0;
  showView("view-main");
  renderMainPage();
}

// makes sure each major starts in activeMajors
function initApp() {
  MAJORS_DATA.forEach(collegeObj => {
    collegeObj.majors.forEach(major => {
      state.activeMajors.add(major.name);
    });
  });

  renderMainPage();

  document.getElementById("btn-start-quiz").addEventListener("click", startQuiz);
  document.getElementById("btn-answer-yes").addEventListener("click", () => handleAnswer("yes"));
  document.getElementById("btn-answer-no").addEventListener("click", () => handleAnswer("no"));
  document.getElementById("btn-exit-quiz").addEventListener("click", exitQuiz);
  document.getElementById("btn-deselect-all").addEventListener("click", deselectAllRecommended);
  document.getElementById("btn-confirm-next").addEventListener("click", confirmAndNext);
  document.getElementById("btn-exit-from-eliminations").addEventListener("click", exitQuiz);
  document.getElementById("btn-done-return").addEventListener("click", () => {
    showView("view-main");
    renderMainPage();
  });

  // Keyboard shortcuts for quiz question view
  document.addEventListener("keydown", (e) => {
    if (state.currentView !== "view-question") return;
    if (e.key === "y" || e.key === "Y") handleAnswer("yes");
    if (e.key === "n" || e.key === "N") handleAnswer("no");
  });
}

document.addEventListener("DOMContentLoaded", initApp);
