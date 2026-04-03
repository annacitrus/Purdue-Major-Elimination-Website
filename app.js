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
    if (activeMajorsInCollege.length === 0) return; // no header for colleges without majors left

    // creates section for each college with active majors
    const section = document.createElement("section");
    const heading = document.createElement("h2");
    heading.textContent = collegeObj.college;
    section.appendChild(heading);

    // loops to create a card for each active major in the college
    activeMajorsInCollege.forEach(major => {
      const card = document.createElement("div");
      const nameSpan = document.createElement("span");
      nameSpan.textContent = major.name + " ";
      const link = document.createElement("a");
      link.href = major.url || "#";
      link.textContent = "[Purdue Page]";
      link.target = "_blank";
      const btn = document.createElement("button");
      btn.textContent = "Deselect";
      btn.onclick = () => deselect(major.name);
      card.appendChild(nameSpan);
      card.appendChild(link);
      card.appendChild(document.createTextNode(" "));
      card.appendChild(btn);
      section.appendChild(card);
    });

    collegesContainer.appendChild(section);
  });

// creates the deselected majors section
  const deselectedSection = document.getElementById("deselected-section");
  const deselectedContainer = document.getElementById("deselected-container");
  deselectedContainer.innerHTML = "";

  // hides the deselected majors section if there are no majors deselected
  if (state.deselectedMajors.size === 0) {
    deselectedSection.style.display = "none";
    return;
  }

  // shows the deselected majors section
  deselectedSection.style.display = "block";
  // creates a card for each deselected major
  state.deselectedMajors.forEach(name => {
    const card = document.createElement("div");
    const nameSpan = document.createElement("span");
    nameSpan.textContent = name + " ";
    const btn = document.createElement("button");
    btn.textContent = "Re-select";
    btn.onclick = () => reselect(name);
    card.appendChild(nameSpan);
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
  showView("view-question");
  renderQuestion();
}

function renderQuestion() {
  // ends the quiz when there are no more questions to ask
  if (state.currentQuestionIndex >= QUESTIONS.length) {
    showView("view-quiz-done");
    return;
  }

  // renders the current question
  showView("view-question");
  const q = QUESTIONS[state.currentQuestionIndex];
  document.getElementById("quiz-progress").textContent =
    "Question " + (state.currentQuestionIndex + 1) + " of " + QUESTIONS.length;
  document.getElementById("active-count").textContent =
    state.activeMajors.size + " major(s) remaining in your list";
  document.getElementById("question-text").textContent = q.text;
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

function renderEliminationsView(answer) {
  const q = QUESTIONS[state.currentQuestionIndex];
  document.getElementById("elimination-context").textContent =
    'You answered "' + (answer || "Yes/No") + '" to: ' + q.text;
  document.getElementById("elimination-count").textContent =
    state.pendingEliminations.size + " major(s) recommended for elimination:";

  const list = document.getElementById("elimination-list");
  list.innerHTML = "";
  state.pendingEliminations.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name + " ";
    const btn = document.createElement("button");
    btn.textContent = "Deselect This";
    btn.onclick = () => deselectSingle(name);
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function deselectSingle(name) {
  state.activeMajors.delete(name);
  state.deselectedMajors.add(name);
  state.pendingEliminations.delete(name);

  // Rebuild list in place
  const list = document.getElementById("elimination-list");
  list.innerHTML = "";
  state.pendingEliminations.forEach(n => {
    const li = document.createElement("li");
    li.textContent = n + " ";
    const btn = document.createElement("button");
    btn.textContent = "Deselect This";
    btn.onclick = () => deselectSingle(n);
    li.appendChild(btn);
    list.appendChild(li);
  });
  document.getElementById("elimination-count").textContent =
    state.pendingEliminations.size + " major(s) recommended for elimination:";

  if (state.pendingEliminations.size === 0) {
    advanceQuestion();
  }
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
  // Skip questions that can't eliminate any active major, using a loop instead of recursion
  while (state.currentQuestionIndex < QUESTIONS.length && shouldSkipQuestion()) {
    state.currentQuestionIndex++;
  }
  advanceQuestion();
}

function advanceQuestion() {
  state.currentQuestionIndex++;
  state.pendingEliminations.clear();
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
}

document.addEventListener("DOMContentLoaded", initApp);
