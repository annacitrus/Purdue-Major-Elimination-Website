const MAJORS_DATA = [
  {
    college: "College of Agriculture",
    majors: [
      { name: "Agribusiness", url: "" },
      { name: "Agricultural Economics", url: "" },
      { name: "Agricultural Education", url: "" },
      { name: "Agriculture Systems Management", url: "" },
      { name: "Agronomy", url: "" },
      { name: "Animal Sciences", url: "" },
      { name: "Aquatic Sciences", url: "" },
      { name: "Biochemistry (Agriculture)", url: "" },
      { name: "Crop Science", url: "" },
      { name: "Digital Agronomy", url: "" },
      { name: "Farm Management", url: "" },
      { name: "Fermentation Science", url: "" },
      { name: "Food Science", url: "" },
      { name: "Forestry", url: "" },
      { name: "Horticulture", url: "" },
      { name: "Insect Biology", url: "" },
      { name: "Landscape Architecture (pre)", url: "" },
      { name: "Natural Resources and Environmental Science", url: "" },
      { name: "Plant Genetics, Breeding, and Biotechnology", url: "" },
      { name: "Plant Science", url: "" },
      { name: "Plant Studies, Exploratory (Pre)", url: "" },
      { name: "Pre-Veterinary Medicine", url: "" },
      { name: "Sales and Marketing (Agriculture)", url: "" },
      { name: "Soil and Water Sciences", url: "" },
      { name: "Sustainable Food and Farming Systems", url: "" },
      { name: "Turf Management and Science", url: "" },
      { name: "Wildlife", url: "" },
      { name: "Veterinary Nursing", url: "" }
    ]
  },
  {
    college: "College of Engineering",
    majors: [
      { name: "Aeronautical and Astronautical Engineering", url: "" },
      { name: "Agricultural Engineering", url: "" },
      { name: "Biological Engineering", url: "" },
      { name: "Biomedical Engineering", url: "" },
      { name: "Chemical Engineering", url: "" },
      { name: "Civil Engineering", url: "" },
      { name: "Computer Engineering", url: "" },
      { name: "Construction Engineering", url: "" },
      { name: "Electrical Engineering", url: "" },
      { name: "Environmental and Ecological Engineering", url: "" },
      { name: "Environmental and Natural Resources Engineering", url: "" },
      { name: "Industrial Engineering", url: "" },
      { name: "Interdisciplinary Engineering Studies", url: "" },
      { name: "Materials Engineering", url: "" },
      { name: "Mechanical Engineering", url: "" },
      { name: "Motorsports Engineering", url: "" },
      { name: "Multidisciplinary Engineering", url: "" },
      { name: "Nuclear Engineering", url: "" }
    ]
  },
  {
    college: "College of Science",
    majors: [
      { name: "Actuarial Science", url: "" },
      { name: "Artificial Intelligence (Science)", url: "" },
      { name: "Astrophysics", url: "" },
      { name: "Atmospheric Science", url: "" },
      { name: "Biochemistry (Chemistry)", url: "" },
      { name: "Biology", url: "" },
      { name: "Biomolecular Design", url: "" },
      { name: "Brain and Behavioral Sciences", url: "" },
      { name: "Chemical Biology and Biochemistry", url: "" },
      { name: "Chemistry", url: "" },
      { name: "Chemistry – American Chemical Society", url: "" },
      { name: "Cognitive Science", url: "" },
      { name: "Computer Science", url: "" },
      { name: "Data Science", url: "" },
      { name: "Ecology, Evolution and Environmental Sciences", url: "" },
      { name: "Genetics, Cell, Molecular, and Developmental Biology", url: "" },
      { name: "Geology and Geophysics", url: "" },
      { name: "Mathematics", url: "" },
      { name: "Mathematics Applied", url: "" },
      { name: "Mathematics Business", url: "" },
      { name: "Mathematics Statistics", url: "" },
      { name: "Mathematics – Education", url: "" },
      { name: "Neurobiology and Physiology", url: "" },
      { name: "Physics", url: "" },
      { name: "Physics Applied", url: "" },
      { name: "Environmental Geosciences", url: "" },
      { name: "Planetary Sciences", url: "" },
      { name: "Psychological Sciences", url: "" },
      { name: "Statistics", url: "" },
      { name: "Statistics Applied", url: "" },
      { name: "Statistics, Math Emphasis", url: "" }
    ]
  },
  {
    college: "Krannert School of Management",
    majors: [
      { name: "Accounting", url: "" },
      { name: "Business Analytics and Information Management", url: "" },
      { name: "Economics (Business)", url: "" },
      { name: "Finance", url: "" },
      { name: "Financial Counseling and Planning", url: "" },
      { name: "General Management", url: "" },
      { name: "Integrated Business and Engineering", url: "" },
      { name: "Marketing", url: "" },
      { name: "Quantitative Business Economics", url: "" },
      { name: "Retail Management", url: "" },
      { name: "Selling and Sales Management", url: "" },
      { name: "Supply Chain and Operations Management", url: "" }
    ]
  },
  {
    college: "College of Liberal Arts",
    majors: [
      { name: "African American Studies", url: "" },
      { name: "American Studies", url: "" },
      { name: "Anthropology", url: "" },
      { name: "Artificial Intelligence (Liberal Arts)", url: "" },
      { name: "Asian Studies", url: "" },
      { name: "Chinese Studies", url: "" },
      { name: "Classical Studies", url: "" },
      { name: "Communication", url: "" },
      { name: "Comparative Literature", url: "" },
      { name: "Creative Writing", url: "" },
      { name: "Digital Criminology", url: "" },
      { name: "English", url: "" },
      { name: "Film and Video", url: "" },
      { name: "French", url: "" },
      { name: "German", url: "" },
      { name: "Global Studies", url: "" },
      { name: "History", url: "" },
      { name: "History of Science, Technology and Medicine", url: "" },
      { name: "Human Resource Development", url: "" },
      { name: "Interdisciplinary Performance", url: "" },
      { name: "Italian Studies", url: "" },
      { name: "Japanese", url: "" },
      { name: "Jewish Studies", url: "" },
      { name: "Law and Society", url: "" },
      { name: "Linguistics", url: "" },
      { name: "Music", url: "" },
      { name: "Organizational Leadership", url: "" },
      { name: "Philosophy", url: "" },
      { name: "Political Science", url: "" },
      { name: "Professional Writing", url: "" },
      { name: "Religious Studies", url: "" },
      { name: "Russian", url: "" },
      { name: "Sociology", url: "" },
      { name: "Sound for the Performing Arts", url: "" },
      { name: "Spanish", url: "" },
      { name: "Studio Arts and Technology", url: "" },
      { name: "Theatre", url: "" },
      { name: "Visual Communication Design", url: "" },
      { name: "Women's, Gender and Sexuality Studies", url: "" },
      { name: "Integrated Studio Arts (Portfolio Required)", url: "" }
    ]
  },
  {
    college: "College of Education",
    majors: [
      { name: "Early Childhood Education and Exceptional Needs", url: "" },
      { name: "Elementary Education", url: "" },
      { name: "English Education", url: "" },
      { name: "Engineering Technology Education", url: "" },
      { name: "Family and Consumer Sciences Education", url: "" },
      { name: "General Education: Curriculum and Instruction (non-licensure)", url: "" },
      { name: "General Education: Educational Studies (non-licensure)", url: "" },
      { name: "Inclusion: Dual License in Special Education (K-6) and Elementary Education", url: "" },
      { name: "Science Education", url: "" },
      { name: "Social Studies Education", url: "" },
      { name: "Special Education: Mild and Intense Intervention P-12", url: "" },
      { name: "Visual Arts Education", url: "" },
      { name: "Visual Arts Design Education", url: "" }
    ]
  },
  {
    college: "College of Health and Human Sciences",
    majors: [
      { name: "Hospitality and Tourism Management", url: "" },
      { name: "Biomedical Health Sciences", url: "" },
      { name: "Developmental and Family Science", url: "" },
      { name: "Health and Disease", url: "" },
      { name: "Human Services", url: "" },
      { name: "Kinesiology", url: "" },
      { name: "Medical Laboratory Sciences", url: "" },
      { name: "Nursing", url: "" },
      { name: "Nutrition and Dietetics", url: "" },
      { name: "Nutrition and Dietetics/Nutrition, Fitness and Health (dual major)", url: "" },
      { name: "Nutrition, Fitness and Health", url: "" },
      { name: "Nutrition Science", url: "" },
      { name: "Occupational and Environmental Health Sciences", url: "" },
      { name: "Public Health", url: "" },
      { name: "Radiological Health Sciences", url: "" },
      { name: "Speech, Language and Hearing Sciences", url: "" }
    ]
  },
  {
    college: "College of Pharmacy",
    majors: [
      { name: "Pharmaceutical Sciences", url: "" }
    ]
  },
  {
    college: "Purdue Polytechnic Institute",
    majors: [
      { name: "Aeronautical Engineering Technology", url: "" },
      { name: "Aviation Management", url: "" },
      { name: "Building Information Modeling, Design and Construction Integration", url: "" },
      { name: "Computer and Information Technology", url: "" },
      { name: "Computer Engineering Technology", url: "" },
      { name: "Construction Management Technology", url: "" },
      { name: "Cybersecurity", url: "" },
      { name: "Data Analytics, Technologies and Applications", url: "" },
      { name: "Design Studies", url: "" },
      { name: "Digital Enterprise Systems", url: "" },
      { name: "Electrical Engineering Technology", url: "" },
      { name: "Flight (Professional Flight Technology)", url: "" },
      { name: "Game Development", url: "" },
      { name: "Industrial (Consumer Product) Design", url: "" },
      { name: "Industrial Engineering Technology", url: "" },
      { name: "Interior Architecture", url: "" },
      { name: "Interior (Space Planning) Design", url: "" },
      { name: "Mechatronics Engineering Technology", url: "" },
      { name: "Mechanical Engineering Technology", url: "" },
      { name: "Robotics Engineering Technology", url: "" },
      { name: "Smart Manufacturing Industrial Informatics", url: "" },
      { name: "Supply Chain and Sales Engineering Technology", url: "" },
      { name: "Themed Entertainment Design", url: "" },
      { name: "Unmanned Aerial Systems", url: "" },
      { name: "UX Design", url: "" },
      { name: "Web Programming and Design", url: "" },
      { name: "Computing Systems Analysis and Design", url: "" },
      { name: "Animation and Visual Effects", url: "" }
    ]
  }
];

const QUESTIONS = [
  {
    id: 1,
    text: "Do you enjoy working with numbers, equations, or quantitative data as a central part of your studies?",
    tag: "math",
    eliminateIfNo: [
      "Aeronautical and Astronautical Engineering", "Agricultural Engineering", "Biological Engineering",
      "Biomedical Engineering", "Chemical Engineering", "Civil Engineering", "Computer Engineering",
      "Construction Engineering", "Electrical Engineering", "Environmental and Ecological Engineering",
      "Environmental and Natural Resources Engineering", "Industrial Engineering",
      "Interdisciplinary Engineering Studies", "Materials Engineering", "Mechanical Engineering",
      "Motorsports Engineering", "Multidisciplinary Engineering", "Nuclear Engineering",
      "Computer Science", "Data Science", "Artificial Intelligence (Science)", "Actuarial Science",
      "Mathematics", "Mathematics Applied", "Mathematics Statistics", "Mathematics Business",
      "Mathematics – Education", "Statistics Applied", "Statistics", "Statistics, Math Emphasis",
      "Physics", "Physics Applied", "Astrophysics", "Atmospheric Science",
      "Accounting", "Finance", "Quantitative Business Economics", "Business Analytics and Information Management",
      "Computer Engineering Technology", "Mechatronics Engineering Technology", "Robotics Engineering Technology",
      "Cybersecurity", "Data Analytics, Technologies and Applications", "Computing Systems Analysis and Design"
    ],
    eliminateIfYes: [
      "Theatre", "Music", "Sound for the Performing Arts", "Interdisciplinary Performance",
      "Creative Writing", "Film and Video", "Integrated Studio Arts (Portfolio Required)",
      "Visual Arts Education", "Visual Arts Design Education", "Studio Arts and Technology",
      "Visual Communication Design", "English", "Comparative Literature", "Religious Studies",
      "Classical Studies", "History", "History of Science, Technology and Medicine", "Philosophy",
      "African American Studies", "American Studies", "Asian Studies", "Chinese Studies",
      "Italian Studies", "French", "German", "Japanese", "Russian", "Spanish", "Jewish Studies",
      "Global Studies", "Women's, Gender and Sexuality Studies", "Professional Writing", "Linguistics",
      "Organizational Leadership", "Human Resource Development", "Family and Consumer Sciences Education",
      "General Education: Curriculum and Instruction (non-licensure)",
      "General Education: Educational Studies (non-licensure)", "Hospitality and Tourism Management",
      "Themed Entertainment Design"
    ]
  },
  {
    id: 2,
    text: "Are you interested in agriculture, food systems, or working with plants, animals, or natural ecosystems as your primary career focus?",
    tag: "agriculture",
    eliminateIfNo: [
      "Agribusiness", "Agricultural Economics", "Agricultural Education", "Agriculture Systems Management",
      "Agronomy", "Animal Sciences", "Aquatic Sciences", "Biochemistry (Agriculture)", "Crop Science",
      "Digital Agronomy", "Farm Management", "Fermentation Science", "Food Science", "Forestry",
      "Horticulture", "Insect Biology", "Landscape Architecture (pre)",
      "Natural Resources and Environmental Science", "Plant Genetics, Breeding, and Biotechnology",
      "Plant Science", "Plant Studies, Exploratory (Pre)", "Pre-Veterinary Medicine",
      "Sales and Marketing (Agriculture)", "Soil and Water Sciences", "Sustainable Food and Farming Systems",
      "Turf Management and Science", "Wildlife", "Veterinary Nursing"
    ],
    eliminateIfYes: [
      "Accounting", "Finance", "General Management", "Marketing", "Supply Chain and Operations Management",
      "Economics (Business)", "Business Analytics and Information Management", "Quantitative Business Economics",
      "Integrated Business and Engineering", "Aeronautical and Astronautical Engineering",
      "Computer Engineering", "Electrical Engineering", "Mechanical Engineering", "Nuclear Engineering",
      "Motorsports Engineering", "Materials Engineering", "Computer Science", "Cybersecurity",
      "Web Programming and Design", "Game Development", "Animation and Visual Effects", "UX Design",
      "Digital Enterprise Systems", "Pharmaceutical Sciences", "Mathematics", "Physics", "Astrophysics",
      "Planetary Sciences", "Statistics Applied", "Statistics, Math Emphasis",
      "Theatre", "Music", "Film and Video", "Creative Writing", "Interdisciplinary Performance",
      "Sound for the Performing Arts", "Visual Arts Education", "Visual Arts Design Education",
      "Philosophy", "History", "Religious Studies", "Classical Studies", "Comparative Literature",
      "African American Studies", "French", "German", "Spanish", "Chinese Studies", "Japanese", "Russian",
      "Italian Studies", "Jewish Studies", "Women's, Gender and Sexuality Studies", "Law and Society",
      "Digital Criminology", "Political Science", "Linguistics", "Nursing",
      "Hospitality and Tourism Management", "Retail Management", "Selling and Sales Management",
      "Themed Entertainment Design"
    ]
  },
  {
    id: 3,
    text: "Are you interested in pursuing a career in healthcare, medicine, or human wellness?",
    tag: "healthcare",
    eliminateIfNo: [
      "Nursing", "Kinesiology", "Medical Laboratory Sciences", "Radiological Health Sciences",
      "Biomedical Health Sciences", "Occupational and Environmental Health Sciences", "Public Health",
      "Nutrition and Dietetics", "Nutrition and Dietetics/Nutrition, Fitness and Health (dual major)",
      "Nutrition Science", "Nutrition, Fitness and Health", "Speech, Language and Hearing Sciences",
      "Pre-Veterinary Medicine", "Pharmaceutical Sciences", "Veterinary Nursing", "Health and Disease",
      "Biomedical Engineering"
    ],
    eliminateIfYes: [
      "Aeronautical and Astronautical Engineering", "Civil Engineering", "Electrical Engineering",
      "Mechanical Engineering", "Nuclear Engineering", "Motorsports Engineering",
      "Construction Engineering", "Materials Engineering", "Industrial Engineering",
      "Agronomy", "Crop Science", "Farm Management", "Turf Management and Science",
      "Sustainable Food and Farming Systems", "Computer Science", "Game Development",
      "Animation and Visual Effects", "Web Programming and Design",
      "Flight (Professional Flight Technology)", "Aviation Management",
      "Accounting", "Finance", "Theatre", "Music", "Sound for the Performing Arts",
      "Creative Writing", "Film and Video", "Visual Arts Education",
      "History", "Philosophy", "Political Science", "African American Studies",
      "French", "Spanish", "Russian", "Classical Studies", "Italian Studies", "Jewish Studies",
      "Agricultural Education"
    ]
  },
  {
    id: 4,
    text: "Do you enjoy creative expression through visual art, design, music, writing, or performance?",
    tag: "creative",
    eliminateIfNo: [
      "Theatre", "Music", "Sound for the Performing Arts", "Interdisciplinary Performance",
      "Creative Writing", "Film and Video", "Visual Arts Education",
      "Visual Arts Design Education", "Visual Communication Design", "Studio Arts and Technology",
      "Industrial (Consumer Product) Design", "Interior (Space Planning) Design", "Design Studies",
      "Interior Architecture", "UX Design", "Themed Entertainment Design"
    ],
    eliminateIfYes: [
      "Chemical Engineering", "Civil Engineering", "Electrical Engineering",
      "Environmental and Ecological Engineering", "Environmental and Natural Resources Engineering",
      "Industrial Engineering", "Materials Engineering", "Mechanical Engineering",
      "Motorsports Engineering", "Nuclear Engineering",
      "Physics", "Physics Applied", "Astrophysics", "Atmospheric Science",
      "Mathematics", "Mathematics Applied", "Mathematics Statistics", "Mathematics Business",
      "Statistics Applied", "Statistics", "Statistics, Math Emphasis", "Actuarial Science",
      "Accounting", "Finance", "Quantitative Business Economics",
      "Medical Laboratory Sciences", "Radiological Health Sciences",
      "Genetics, Cell, Molecular, and Developmental Biology", "Neurobiology and Physiology"
    ]
  },
  {
    id: 5,
    text: "Are you interested in business — including management, marketing, entrepreneurship, or finance?",
    tag: "business",
    eliminateIfNo: [
      "Accounting", "Finance", "General Management", "Marketing", "Quantitative Business Economics",
      "Supply Chain and Operations Management", "Economics (Business)",
      "Business Analytics and Information Management", "Integrated Business and Engineering",
      "Financial Counseling and Planning", "Retail Management", "Selling and Sales Management",
      "Human Resource Development", "Organizational Leadership"
    ],
    eliminateIfYes: [
      "Physics", "Physics Applied", "Astrophysics", "Atmospheric Science", "Mathematics", "Chemistry",
      "Chemistry – American Chemical Society", "Classical Studies", "Comparative Literature", "English",
      "History", "Philosophy", "Religious Studies", "Theatre", "Music", "Sound for the Performing Arts",
      "Creative Writing", "Film and Video", "Forestry", "Wildlife", "Aquatic Sciences", "Insect Biology",
      "Genetics, Cell, Molecular, and Developmental Biology", "Planetary Sciences",
      "Geology and Geophysics", "Environmental Geosciences", "Neurobiology and Physiology",
      "Special Education: Mild and Intense Intervention P-12"
    ]
  },
  {
    id: 6,
    text: "Are you interested in working with computers, software, or digital technology as the primary focus of your career?",
    tag: "technology",
    eliminateIfNo: [
      "Computer Science", "Data Science", "Artificial Intelligence (Science)",
      "Artificial Intelligence (Liberal Arts)", "Computer Engineering", "Cybersecurity",
      "Computer and Information Technology", "Computer Engineering Technology",
      "Web Programming and Design", "Game Development", "UX Design",
      "Data Analytics, Technologies and Applications", "Digital Enterprise Systems",
      "Computing Systems Analysis and Design", "Mechatronics Engineering Technology",
      "Robotics Engineering Technology", "Smart Manufacturing Industrial Informatics"
    ],
    eliminateIfYes: [
      "Agricultural Education", "Elementary Education", "English Education", "Social Studies Education",
      "Special Education: Mild and Intense Intervention P-12",
      "General Education: Curriculum and Instruction (non-licensure)",
      "General Education: Educational Studies (non-licensure)",
      "Inclusion: Dual License in Special Education (K-6) and Elementary Education",
      "Music", "Theatre", "Sound for the Performing Arts", "Interdisciplinary Performance",
      "Creative Writing", "Visual Arts Education", "Philosophy", "History",
      "Religious Studies", "Classical Studies", "Comparative Literature", "English",
      "African American Studies", "French", "German", "Spanish", "Japanese", "Russian",
      "Italian Studies", "Chinese Studies", "Jewish Studies", "Global Studies",
      "Women's, Gender and Sexuality Studies", "Developmental and Family Science", "Human Services",
      "Early Childhood Education and Exceptional Needs", "Family and Consumer Sciences Education",
      "Hospitality and Tourism Management", "Retail Management", "Nursing",
      "Speech, Language and Hearing Sciences", "Kinesiology", "Radiological Health Sciences",
      "Agronomy", "Crop Science", "Farm Management", "Forestry", "Wildlife", "Aquatic Sciences",
      "Turf Management and Science", "Soil and Water Sciences", "Landscape Architecture (pre)"
    ]
  },
  {
    id: 7,
    text: "Do you prefer working outdoors in natural settings over offices, labs, or studios?",
    tag: "outdoor",
    eliminateIfNo: [
      "Wildlife", "Forestry", "Agronomy", "Crop Science", "Farm Management",
      "Sustainable Food and Farming Systems", "Horticulture", "Turf Management and Science",
      "Natural Resources and Environmental Science", "Soil and Water Sciences", "Aquatic Sciences",
      "Digital Agronomy", "Landscape Architecture (pre)", "Ecology, Evolution and Environmental Sciences",
      "Geology and Geophysics", "Atmospheric Science", "Plant Science"
    ],
    eliminateIfYes: [
      "Accounting", "Finance", "Marketing", "General Management", "Theatre", "Music", "Film and Video",
      "Game Development", "UX Design", "Web Programming and Design", "Visual Arts Education",
      "Business Analytics and Information Management", "Law and Society", "Political Science",
      "Nursing", "Radiological Health Sciences", "Medical Laboratory Sciences",
      "Speech, Language and Hearing Sciences", "Computer Science", "Data Science",
      "Digital Criminology", "Interior (Space Planning) Design", "Interior Architecture",
      "Organizational Leadership", "Human Resource Development"
    ]
  },
  {
    id: 8,
    text: "Are you interested in teaching or working in an educational setting as your primary career goal?",
    tag: "education",
    eliminateIfNo: [
      "Elementary Education", "English Education", "Social Studies Education",
      "Special Education: Mild and Intense Intervention P-12",
      "General Education: Curriculum and Instruction (non-licensure)",
      "General Education: Educational Studies (non-licensure)",
      "Inclusion: Dual License in Special Education (K-6) and Elementary Education",
      "Agricultural Education", "Science Education", "Visual Arts Education",
      "Visual Arts Design Education", "Family and Consumer Sciences Education",
      "Engineering Technology Education", "Early Childhood Education and Exceptional Needs"
    ],
    eliminateIfYes: [
      "Aeronautical and Astronautical Engineering", "Computer Engineering", "Electrical Engineering",
      "Mechanical Engineering", "Nuclear Engineering", "Motorsports Engineering",
      "Materials Engineering", "Civil Engineering", "Computer Science", "Data Science", "Cybersecurity",
      "Accounting", "Finance", "General Management", "Marketing", "Supply Chain and Operations Management",
      "Pharmaceutical Sciences", "Nursing", "Medical Laboratory Sciences", "Radiological Health Sciences",
      "Film and Video", "Creative Writing", "Game Development", "UX Design",
      "Web Programming and Design", "Flight (Professional Flight Technology)", "Aviation Management",
      "Agronomy", "Farm Management", "Wildlife", "Forestry", "Aquatic Sciences",
      "Soil and Water Sciences", "Natural Resources and Environmental Science"
    ]
  },
  {
    id: 9,
    text: "Do you prefer working directly with people — patients, clients, students, or community members — over working with systems, data, or technical problems?",
    tag: "people-oriented",
    eliminateIfNo: [
      "Elementary Education", "English Education", "Social Studies Education",
      "Special Education: Mild and Intense Intervention P-12",
      "Early Childhood Education and Exceptional Needs", "Developmental and Family Science",
      "Human Services", "Speech, Language and Hearing Sciences", "Nursing", "Kinesiology",
      "Selling and Sales Management", "Hospitality and Tourism Management",
      "Psychological Sciences", "Communication", "Human Resource Development", "Organizational Leadership"
    ],
    eliminateIfYes: [
      "Computer Science", "Mathematics", "Mathematics Applied", "Physics", "Physics Applied",
      "Statistics Applied", "Statistics, Math Emphasis", "Astrophysics", "Atmospheric Science",
      "Chemistry", "Chemistry – American Chemical Society", "Accounting", "Civil Engineering",
      "Electrical Engineering", "Materials Engineering", "Nuclear Engineering", "Game Development",
      "Cybersecurity", "Data Science", "Artificial Intelligence (Science)",
      "Data Analytics, Technologies and Applications", "Digital Enterprise Systems",
      "Genetics, Cell, Molecular, and Developmental Biology", "Geology and Geophysics"
    ]
  },
  {
    id: 10,
    text: "Are you primarily motivated by scientific research and advancing human knowledge, rather than applying that knowledge in a practical or commercial setting?",
    tag: "research",
    eliminateIfNo: [
      "Actuarial Science", "Mathematics", "Physics", "Astrophysics", "Planetary Sciences",
      "Statistics, Math Emphasis", "Comparative Literature", "Philosophy", "Classical Studies",
      "History of Science, Technology and Medicine", "Geology and Geophysics",
      "Ecology, Evolution and Environmental Sciences"
    ],
    eliminateIfYes: [
      "Agribusiness", "Agricultural Education", "Farm Management", "Turf Management and Science",
      "Sales and Marketing (Agriculture)", "Selling and Sales Management", "Retail Management",
      "Organizational Leadership", "Human Resource Development", "Themed Entertainment Design",
      "Construction Management Technology", "Aviation Management",
      "Flight (Professional Flight Technology)", "Hospitality and Tourism Management",
      "General Management", "Supply Chain and Operations Management",
      "Supply Chain and Sales Engineering Technology",
      "Building Information Modeling, Design and Construction Integration", "Digital Enterprise Systems"
    ]
  },
  {
    id: 11,
    text: "Are you interested in social issues, human behavior, or cultural dynamics from a research or advocacy standpoint?",
    tag: "social-sciences",
    eliminateIfNo: [
      "Anthropology", "Sociology", "Political Science", "Psychological Sciences",
      "Brain and Behavioral Sciences", "Cognitive Science", "Women's, Gender and Sexuality Studies",
      "African American Studies", "Law and Society", "Global Studies", "Communication",
      "Digital Criminology"
    ],
    eliminateIfYes: [
      "Aeronautical and Astronautical Engineering", "Agricultural Engineering", "Chemical Engineering",
      "Civil Engineering", "Computer Engineering", "Construction Engineering", "Electrical Engineering",
      "Industrial Engineering", "Materials Engineering", "Mechanical Engineering",
      "Motorsports Engineering", "Nuclear Engineering", "Computer Science", "Data Science",
      "Chemistry", "Chemistry – American Chemical Society", "Biochemistry (Chemistry)",
      "Chemical Biology and Biochemistry", "Mathematics", "Physics", "Physics Applied",
      "Statistics Applied", "Statistics, Math Emphasis", "Actuarial Science",
      "Astrophysics", "Planetary Sciences", "Geology and Geophysics",
      "Genetics, Cell, Molecular, and Developmental Biology", "Neurobiology and Physiology"
    ]
  },
  {
    id: 12,
    text: "Do you enjoy writing, storytelling, or working extensively with language as a core activity in your studies?",
    tag: "writing",
    eliminateIfNo: [
      "Creative Writing", "English", "Comparative Literature", "Professional Writing", "Linguistics",
      "English Education", "Communication", "Philosophy", "History", "Religious Studies",
      "Film and Video", "Theatre", "Classical Studies"
    ],
    eliminateIfYes: [
      "Mathematics", "Statistics Applied", "Statistics, Math Emphasis", "Physics", "Physics Applied",
      "Astrophysics", "Atmospheric Science", "Chemistry", "Biochemistry (Chemistry)",
      "Genetics, Cell, Molecular, and Developmental Biology", "Actuarial Science", "Accounting",
      "Finance", "Quantitative Business Economics", "Medical Laboratory Sciences",
      "Radiological Health Sciences", "Computer Engineering Technology",
      "Mechatronics Engineering Technology", "Robotics Engineering Technology",
      "Smart Manufacturing Industrial Informatics", "Electrical Engineering Technology"
    ]
  },
  {
    id: 13,
    text: "Are you interested in foreign languages, international cultures, or global perspectives as a focus of your studies?",
    tag: "languages",
    eliminateIfNo: [
      "French", "German", "Spanish", "Chinese Studies", "Japanese", "Russian", "Italian Studies",
      "Asian Studies", "Classical Studies", "Comparative Literature", "Global Studies", "Linguistics",
      "African American Studies", "Jewish Studies"
    ],
    eliminateIfYes: [
      "Aeronautical and Astronautical Engineering", "Agricultural Engineering", "Biological Engineering",
      "Biomedical Engineering", "Chemical Engineering", "Civil Engineering", "Computer Engineering",
      "Construction Engineering", "Electrical Engineering", "Environmental and Ecological Engineering",
      "Environmental and Natural Resources Engineering", "Industrial Engineering",
      "Materials Engineering", "Mechanical Engineering", "Motorsports Engineering", "Nuclear Engineering",
      "Mathematics", "Statistics", "Statistics Applied", "Statistics, Math Emphasis",
      "Physics", "Computer Science", "Accounting", "Cybersecurity",
      "Medical Laboratory Sciences", "Radiological Health Sciences",
      "Agronomy", "Crop Science", "Turf Management and Science", "Digital Agronomy",
      "Farm Management", "Game Development", "Web Programming and Design",
      "Mechatronics Engineering Technology", "Robotics Engineering Technology",
      "Smart Manufacturing Industrial Informatics"
    ]
  },
  {
    id: 14,
    text: "Are you drawn to psychology, human development, or understanding the mind and behavior scientifically?",
    tag: "psychology",
    eliminateIfNo: [
      "Psychological Sciences", "Brain and Behavioral Sciences", "Cognitive Science",
      "Neurobiology and Physiology", "Developmental and Family Science", "Human Services",
      "Speech, Language and Hearing Sciences", "Special Education: Mild and Intense Intervention P-12",
      "Early Childhood Education and Exceptional Needs"
    ],
    eliminateIfYes: [
      "Civil Engineering", "Electrical Engineering", "Mechanical Engineering", "Nuclear Engineering",
      "Materials Engineering", "Agronomy", "Crop Science", "Plant Science",
      "Chemistry", "Statistics", "Mathematics", "Geology and Geophysics", "Astrophysics",
      "Atmospheric Science", "Accounting", "Finance", "Supply Chain and Operations Management",
      "Construction Engineering", "Visual Arts Education", "Music", "Sound for the Performing Arts"
    ]
  },
  {
    id: 15,
    text: "Are you interested in law, governance, policy, or civic engagement as a career focus?",
    tag: "law-policy",
    eliminateIfNo: [
      "Law and Society", "Political Science", "Digital Criminology",
      "Women's, Gender and Sexuality Studies", "African American Studies", "History",
      "Agricultural Economics", "Public Health", "Economics (Business)"
    ],
    eliminateIfYes: [
      "Aeronautical and Astronautical Engineering", "Electrical Engineering", "Civil Engineering",
      "Nuclear Engineering", "Materials Engineering", "Chemistry", "Physics", "Statistics Applied",
      "Mathematics", "Agriculture Systems Management", "Agronomy", "Crop Science", "Farm Management",
      "Game Development", "UX Design", "Web Programming and Design",
      "Themed Entertainment Design", "Retail Management", "Selling and Sales Management",
      "Accounting", "Finance"
    ]
  },
  {
    id: 16,
    text: "Do animals — their health, behavior, production, or conservation — play a central role in your career interests?",
    tag: "animals",
    eliminateIfNo: [
      "Animal Sciences", "Pre-Veterinary Medicine", "Veterinary Nursing", "Wildlife",
      "Aquatic Sciences", "Insect Biology"
    ],
    eliminateIfYes: [
      "Agronomy", "Crop Science", "Plant Science", "Plant Genetics, Breeding, and Biotechnology",
      "Plant Studies, Exploratory (Pre)", "Horticulture", "Turf Management and Science",
      "Soil and Water Sciences", "Digital Agronomy", "Forestry", "Civil Engineering",
      "Construction Engineering", "Materials Engineering", "Nuclear Engineering",
      "Motorsports Engineering", "Computer Science", "Accounting", "Finance", "Marketing",
      "History", "Philosophy", "Music", "Theatre", "Film and Video", "Creative Writing",
      "Linguistics", "Sociology", "French", "German", "Spanish", "Japanese", "Russian",
      "Italian Studies", "Chinese Studies", "Jewish Studies", "Retail Management",
      "Selling and Sales Management", "Aviation Management", "Flight (Professional Flight Technology)",
      "Game Development", "Web Programming and Design"
    ]
  },
  {
    id: 17,
    text: "Are you passionate about environmental sustainability, climate change, or conservation as a primary career focus?",
    tag: "environment",
    eliminateIfNo: [
      "Natural Resources and Environmental Science", "Environmental and Ecological Engineering",
      "Environmental and Natural Resources Engineering", "Ecology, Evolution and Environmental Sciences",
      "Soil and Water Sciences", "Aquatic Sciences", "Forestry", "Sustainable Food and Farming Systems",
      "Wildlife", "Atmospheric Science", "Geology and Geophysics"
    ],
    eliminateIfYes: [
      "Motorsports Engineering", "Nuclear Engineering", "Computer Science", "Game Development",
      "UX Design", "Theatre", "Music", "Sound for the Performing Arts", "Creative Writing",
      "Film and Video", "Visual Arts Education", "Accounting", "Finance", "Marketing",
      "General Management", "Retail Management", "Selling and Sales Management", "Nursing",
      "Radiological Health Sciences", "Medical Laboratory Sciences", "History", "Philosophy",
      "Classical Studies", "Italian Studies", "Japanese", "Russian", "Astrophysics",
      "Planetary Sciences", "Mathematics", "Pharmaceutical Sciences"
    ]
  },
  {
    id: 18,
    text: "Do you enjoy chemistry and laboratory-based sciences as a core part of your studies?",
    tag: "chemistry",
    eliminateIfNo: [
      "Chemistry", "Chemistry – American Chemical Society", "Biochemistry (Agriculture)",
      "Biochemistry (Chemistry)", "Chemical Biology and Biochemistry", "Chemical Engineering",
      "Fermentation Science", "Pharmaceutical Sciences", "Biomolecular Design"
    ],
    eliminateIfYes: [
      "Theatre", "Music", "Film and Video", "Creative Writing", "Visual Arts Education",
      "History", "Philosophy", "Political Science", "Sociology", "African American Studies",
      "French", "German", "Spanish", "Japanese", "Russian", "Italian Studies", "Chinese Studies",
      "Classical Studies", "Law and Society", "Economics (Business)", "Accounting", "Finance",
      "Marketing", "General Management", "Construction Management Technology",
      "Building Information Modeling, Design and Construction Integration",
      "Hospitality and Tourism Management", "Retail Management", "Selling and Sales Management",
      "Flight (Professional Flight Technology)", "Game Development", "Web Programming and Design",
      "UX Design", "Themed Entertainment Design", "Organizational Leadership",
      "Human Resource Development"
    ]
  },
  {
    id: 19,
    text: "Do you have a strong interest in space, astronomy, the physical earth, or planetary sciences?",
    tag: "space-earth",
    eliminateIfNo: [
      "Astrophysics", "Planetary Sciences", "Atmospheric Science", "Physics Applied",
      "Geology and Geophysics", "Aeronautical and Astronautical Engineering"
    ],
    eliminateIfYes: [
      "Accounting", "Finance", "General Management", "Marketing", "Supply Chain and Operations Management",
      "Economics (Business)", "Business Analytics and Information Management",
      "Quantitative Business Economics", "Integrated Business and Engineering",
      "Elementary Education", "English Education", "Social Studies Education",
      "Special Education: Mild and Intense Intervention P-12", "Family and Consumer Sciences Education",
      "General Education: Curriculum and Instruction (non-licensure)",
      "French", "German", "Spanish", "Japanese", "Russian", "Italian Studies",
      "Nursing", "Retail Management", "Selling and Sales Management",
      "Hospitality and Tourism Management", "Game Development", "UX Design",
      "Web Programming and Design", "Themed Entertainment Design"
    ]
  },
  {
    id: 20,
    text: "Is food — its production, safety, nutrition, or science — your primary area of interest?",
    tag: "food",
    eliminateIfNo: [
      "Food Science", "Fermentation Science", "Nutrition and Dietetics", "Nutrition Science",
      "Nutrition, Fitness and Health",
      "Nutrition and Dietetics/Nutrition, Fitness and Health (dual major)",
      "Sustainable Food and Farming Systems"
    ],
    eliminateIfYes: [
      "Aeronautical and Astronautical Engineering", "Computer Engineering", "Electrical Engineering",
      "Mechanical Engineering", "Nuclear Engineering", "Civil Engineering", "Motorsports Engineering",
      "Materials Engineering", "Computer Science", "Cybersecurity", "Data Science",
      "Theatre", "Music", "Film and Video", "Creative Writing", "Visual Arts Education",
      "History", "Philosophy", "Political Science", "African American Studies",
      "French", "German", "Spanish", "Japanese", "Russian", "Italian Studies", "Chinese Studies",
      "Law and Society", "Digital Criminology", "Sociology", "Anthropology",
      "Mathematics", "Physics", "Statistics", "Astrophysics", "Planetary Sciences",
      "Geology and Geophysics", "Medical Laboratory Sciences", "Radiological Health Sciences",
      "Game Development", "Web Programming and Design", "Themed Entertainment Design",
      "Accounting", "Finance", "Marketing", "General Management"
    ]
  },
  {
    id: 21,
    text: "Among technology careers, do you prefer designing user-facing digital products — apps, websites, or interfaces — over back-end systems, networks, or security?",
    tag: "frontend-tech",
    eliminateIfNo: [
      "UX Design", "Web Programming and Design", "Game Development",
      "Industrial (Consumer Product) Design", "Visual Communication Design"
    ],
    eliminateIfYes: [
      "Cybersecurity", "Computer and Information Technology", "Computer Engineering Technology",
      "Computing Systems Analysis and Design", "Electrical Engineering Technology",
      "Smart Manufacturing Industrial Informatics", "Mechatronics Engineering Technology",
      "Robotics Engineering Technology"
    ]
  },
  {
    id: 22,
    text: "Are you interested in aviation, flight, aircraft systems, or unmanned aerial vehicles?",
    tag: "aviation",
    eliminateIfNo: [
      "Aeronautical and Astronautical Engineering", "Aeronautical Engineering Technology",
      "Aviation Management", "Flight (Professional Flight Technology)", "Unmanned Aerial Systems"
    ],
    eliminateIfYes: []
  },
  {
    id: 23,
    text: "Do you prefer studying from a humanities or social science perspective — exploring ideas, culture, history, or society — over natural or applied sciences?",
    tag: "humanities",
    eliminateIfNo: [
      "History", "Philosophy", "Religious Studies", "Classical Studies", "Comparative Literature",
      "English", "African American Studies", "American Studies", "Asian Studies", "French", "German",
      "Spanish", "Japanese", "Russian", "Italian Studies", "Chinese Studies", "Jewish Studies",
      "Women's, Gender and Sexuality Studies", "Global Studies", "Linguistics", "Anthropology",
      "Sociology", "Political Science", "Law and Society", "History of Science, Technology and Medicine"
    ],
    eliminateIfYes: [
      "Chemistry", "Biology", "Physics", "Mathematics", "Statistics",
      "Biochemistry (Agriculture)", "Biochemistry (Chemistry)", "Geology and Geophysics",
      "Atmospheric Science", "Genetics, Cell, Molecular, and Developmental Biology",
      "Neurobiology and Physiology",
      "Aeronautical and Astronautical Engineering", "Agricultural Engineering",
      "Biological Engineering", "Biomedical Engineering", "Chemical Engineering", "Civil Engineering",
      "Computer Engineering", "Construction Engineering", "Electrical Engineering",
      "Environmental and Ecological Engineering", "Environmental and Natural Resources Engineering",
      "Industrial Engineering", "Materials Engineering", "Mechanical Engineering",
      "Motorsports Engineering", "Nuclear Engineering",
      "Computer Science", "Cybersecurity", "Pharmaceutical Sciences", "Astrophysics",
      "Planetary Sciences"
    ]
  },
  {
    id: 24,
    text: "Among engineering disciplines, are you more interested in software and digital systems than in physical, structural, or mechanical systems?",
    tag: "software-engineering",
    eliminateIfNo: [
      "Computer Engineering", "Interdisciplinary Engineering Studies"
    ],
    eliminateIfYes: [
      "Civil Engineering", "Construction Engineering", "Mechanical Engineering",
      "Motorsports Engineering", "Materials Engineering", "Nuclear Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    id: 25,
    text: "Are you interested in designing physical products, spaces, or built environments as a career?",
    tag: "design-built",
    eliminateIfNo: [
      "Industrial (Consumer Product) Design", "Interior (Space Planning) Design",
      "Interior Architecture", "Design Studies", "Landscape Architecture (pre)",
      "Visual Communication Design", "Building Information Modeling, Design and Construction Integration",
      "Civil Engineering", "Construction Engineering", "Construction Management Technology"
    ],
    eliminateIfYes: [
      "Chemistry", "Mathematics", "Physics", "Statistics", "Accounting", "Finance", "Nursing",
      "Kinesiology", "Medical Laboratory Sciences", "Theatre", "Music", "Creative Writing",
      "Film and Video", "Political Science", "History", "Sociology", "Wildlife", "Agronomy",
      "Crop Science", "Data Science", "Cybersecurity"
    ]
  },
  {
    id: 26,
    text: "In agriculture, are you more drawn to the business and management side than to scientific research or hands-on field production?",
    tag: "ag-business",
    eliminateIfNo: [
      "Agribusiness", "Agricultural Economics", "Farm Management",
      "Sales and Marketing (Agriculture)", "Agriculture Systems Management"
    ],
    eliminateIfYes: [
      "Agronomy", "Crop Science", "Plant Science", "Plant Genetics, Breeding, and Biotechnology",
      "Plant Studies, Exploratory (Pre)", "Insect Biology", "Aquatic Sciences", "Forestry",
      "Soil and Water Sciences", "Wildlife"
    ]
  },
  {
    id: 27,
    text: "Do you prefer hands-on lab experiments over computational modeling, simulation, or data analysis?",
    tag: "hands-on-lab",
    eliminateIfNo: [
      "Biochemistry (Agriculture)", "Biochemistry (Chemistry)", "Chemical Biology and Biochemistry",
      "Genetics, Cell, Molecular, and Developmental Biology", "Fermentation Science",
      "Biomolecular Design", "Chemistry", "Chemistry – American Chemical Society", "Biology",
      "Plant Genetics, Breeding, and Biotechnology"
    ],
    eliminateIfYes: [
      "Data Science", "Statistics Applied", "Statistics, Math Emphasis", "Mathematics Statistics",
      "Business Analytics and Information Management", "Data Analytics, Technologies and Applications",
      "Computer Science", "Actuarial Science", "Mathematics Applied", "Digital Agronomy",
      "Artificial Intelligence (Science)"
    ]
  },
  {
    id: 28,
    text: "Do you prefer the applied, career-focused approach of an engineering technology degree over the more theoretical foundation of a traditional engineering degree?",
    tag: "engineering-technology",
    eliminateIfNo: [
      "Aeronautical Engineering Technology", "Mechanical Engineering Technology",
      "Electrical Engineering Technology", "Computer Engineering Technology",
      "Industrial Engineering Technology", "Mechatronics Engineering Technology",
      "Robotics Engineering Technology", "Engineering Technology Education"
    ],
    eliminateIfYes: [
      "Aeronautical and Astronautical Engineering", "Mechanical Engineering", "Electrical Engineering",
      "Computer Engineering", "Industrial Engineering", "Materials Engineering", "Nuclear Engineering",
      "Chemical Engineering", "Civil Engineering", "Environmental and Ecological Engineering",
      "Environmental and Natural Resources Engineering", "Biological Engineering", "Biomedical Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    id: 29,
    text: "Are you specifically interested in cybersecurity, digital forensics, or protecting networks and information systems?",
    tag: "cybersecurity",
    eliminateIfNo: [
      "Cybersecurity", "Digital Criminology", "Computing Systems Analysis and Design"
    ],
    eliminateIfYes: []
  },
  {
    id: 30,
    text: "Are you interested in robotics, automation, or mechatronics — combining mechanical, electrical, and computing systems?",
    tag: "robotics",
    eliminateIfNo: [
      "Robotics Engineering Technology", "Mechatronics Engineering Technology",
      "Smart Manufacturing Industrial Informatics", "Unmanned Aerial Systems"
    ],
    eliminateIfYes: [
      "History", "Philosophy", "Religious Studies", "Classical Studies", "Comparative Literature",
      "English", "African American Studies", "French", "German", "Spanish", "Japanese", "Russian",
      "Italian Studies", "Chinese Studies", "Jewish Studies", "Women's, Gender and Sexuality Studies",
      "Global Studies", "Linguistics", "Anthropology", "Sociology",
      "Elementary Education", "English Education", "Social Studies Education",
      "Special Education: Mild and Intense Intervention P-12", "Family and Consumer Sciences Education",
      "Nursing", "Human Services", "Retail Management", "Selling and Sales Management",
      "Hospitality and Tourism Management", "Agronomy", "Crop Science", "Farm Management",
      "Forestry", "Wildlife", "Turf Management and Science", "Sustainable Food and Farming Systems",
      "Theatre", "Music", "Creative Writing"
    ]
  },
  {
    id: 31,
    text: "Do you want a career in the performing or visual arts — theatre, music, film, fine arts, or studio arts?",
    tag: "performing-arts",
    eliminateIfNo: [
      "Theatre", "Music", "Sound for the Performing Arts", "Interdisciplinary Performance",
      "Film and Video", "Visual Arts Education", "Visual Arts Design Education",
      "Studio Arts and Technology"
    ],
    eliminateIfYes: [
      "Aeronautical and Astronautical Engineering", "Agricultural Engineering", "Biological Engineering",
      "Biomedical Engineering", "Chemical Engineering", "Civil Engineering", "Computer Engineering",
      "Construction Engineering", "Electrical Engineering", "Environmental and Ecological Engineering",
      "Environmental and Natural Resources Engineering", "Industrial Engineering",
      "Materials Engineering", "Mechanical Engineering", "Motorsports Engineering", "Nuclear Engineering",
      "Mathematics", "Physics", "Chemistry", "Statistics", "Computer Science",
      "Accounting", "Finance",
      "Agribusiness", "Agricultural Economics", "Agronomy", "Animal Sciences", "Crop Science",
      "Farm Management", "Forestry", "Wildlife", "Food Science",
      "Nursing", "Medical Laboratory Sciences", "Radiological Health Sciences",
      "Elementary Education", "English Education", "Social Studies Education",
      "Special Education: Mild and Intense Intervention P-12"
    ]
  },
  {
    id: 32,
    text: "In the life sciences, are you more interested in ecology and natural systems than in molecular or cellular biology?",
    tag: "ecology",
    eliminateIfNo: [
      "Ecology, Evolution and Environmental Sciences", "Wildlife", "Aquatic Sciences", "Forestry",
      "Natural Resources and Environmental Science", "Soil and Water Sciences"
    ],
    eliminateIfYes: [
      "Biochemistry (Chemistry)", "Chemical Biology and Biochemistry",
      "Genetics, Cell, Molecular, and Developmental Biology", "Biomolecular Design",
      "Pharmaceutical Sciences", "Chemistry", "Chemistry – American Chemical Society",
      "Neurobiology and Physiology"
    ]
  },
  {
    id: 33,
    text: "Are you interested in manufacturing, supply chain management, or industrial systems as a career focus?",
    tag: "manufacturing",
    eliminateIfNo: [
      "Industrial Engineering", "Supply Chain and Operations Management",
      "Supply Chain and Sales Engineering Technology", "Smart Manufacturing Industrial Informatics",
      "Mechanical Engineering Technology", "Industrial Engineering Technology",
      "Business Analytics and Information Management"
    ],
    eliminateIfYes: [
      "History", "Philosophy", "Religious Studies", "Classical Studies", "Comparative Literature",
      "English", "African American Studies", "French", "German", "Spanish", "Japanese", "Russian",
      "Italian Studies", "Chinese Studies", "Theatre", "Music", "Film and Video", "Creative Writing",
      "Elementary Education", "English Education", "Social Studies Education",
      "Special Education: Mild and Intense Intervention P-12", "Family and Consumer Sciences Education",
      "Nursing", "Human Services", "Developmental and Family Science", "Psychological Sciences",
      "Agribusiness", "Agricultural Economics", "Agronomy", "Crop Science", "Horticulture",
      "Forestry", "Wildlife", "Aquatic Sciences", "Natural Resources and Environmental Science",
      "Actuarial Science", "Astrophysics", "Planetary Sciences", "Atmospheric Science",
      "Geology and Geophysics"
    ]
  },
  {
    id: 34,
    text: "In the quantitative sciences, do you prefer statistical and data-driven work over pure mathematical theory?",
    tag: "statistics",
    eliminateIfNo: [
      "Statistics Applied", "Statistics, Math Emphasis", "Mathematics Statistics", "Actuarial Science",
      "Data Science", "Business Analytics and Information Management",
      "Data Analytics, Technologies and Applications", "Agricultural Economics"
    ],
    eliminateIfYes: [
      "Mathematics", "Physics", "Astrophysics", "Planetary Sciences"
    ]
  },
  {
    id: 35,
    text: "Are you interested in video games, interactive media, immersive entertainment, or animation?",
    tag: "gaming",
    eliminateIfNo: [
      "Game Development", "Themed Entertainment Design", "Film and Video"
    ],
    eliminateIfYes: [
      "Aeronautical and Astronautical Engineering", "Agricultural Engineering", "Biological Engineering",
      "Biomedical Engineering", "Chemical Engineering", "Civil Engineering", "Construction Engineering",
      "Electrical Engineering", "Environmental and Ecological Engineering",
      "Environmental and Natural Resources Engineering", "Industrial Engineering",
      "Materials Engineering", "Mechanical Engineering", "Nuclear Engineering",
      "Chemistry", "Biology", "Physics", "Mathematics", "Statistics",
      "Biochemistry (Agriculture)", "Biochemistry (Chemistry)",
      "Geology and Geophysics", "Atmospheric Science",
      "Genetics, Cell, Molecular, and Developmental Biology", "Neurobiology and Physiology",
      "Agribusiness", "Agricultural Economics", "Agronomy", "Animal Sciences", "Crop Science",
      "Farm Management", "Forestry", "Wildlife", "Food Science",
      "Nursing", "Medical Laboratory Sciences", "Radiological Health Sciences", "Kinesiology",
      "Public Health", "Pharmaceutical Sciences",
      "Elementary Education", "English Education", "Social Studies Education",
      "Special Education: Mild and Intense Intervention P-12", "Family and Consumer Sciences Education",
      "Accounting", "Finance", "Marketing", "General Management", "Supply Chain and Operations Management",
      "History", "Philosophy", "Religious Studies", "Classical Studies", "Comparative Literature",
      "English", "French", "German", "Spanish", "Linguistics"
    ]
  },
  {
    id: 36,
    text: "Among health careers, do you prefer public health and community wellness programs over direct clinical patient care?",
    tag: "public-health",
    eliminateIfNo: [
      "Public Health", "Occupational and Environmental Health Sciences", "Health and Disease",
      "Brain and Behavioral Sciences"
    ],
    eliminateIfYes: [
      "Nursing", "Radiological Health Sciences", "Medical Laboratory Sciences",
      "Veterinary Nursing", "Kinesiology"
    ]
  },
  {
    id: 37,
    text: "Are you interested in working at the intersection of biology and engineering — designing biological systems, biomedical devices, or biotechnology processes?",
    tag: "bioengineering",
    eliminateIfNo: [
      "Biological Engineering", "Biomedical Engineering", "Biomolecular Design",
      "Chemical Biology and Biochemistry", "Fermentation Science"
    ],
    eliminateIfYes: [
      "Civil Engineering", "Materials Engineering", "Nuclear Engineering", "Motorsports Engineering",
      "Construction Engineering", "Accounting", "Finance", "General Management", "Marketing",
      "Supply Chain and Operations Management", "Economics (Business)",
      "Business Analytics and Information Management", "Quantitative Business Economics",
      "History", "Philosophy", "Religious Studies", "Classical Studies", "Comparative Literature",
      "English", "African American Studies", "French", "German", "Spanish", "Japanese", "Russian",
      "Elementary Education", "English Education", "Social Studies Education",
      "Family and Consumer Sciences Education", "Early Childhood Education and Exceptional Needs",
      "Agribusiness", "Agricultural Economics", "Farm Management", "Turf Management and Science",
      "Sales and Marketing (Agriculture)", "Agronomy", "Horticulture"
    ]
  },
  {
    id: 38,
    text: "Among health majors, do you prefer direct patient or client care over laboratory diagnostics or health research?",
    tag: "clinical-care",
    eliminateIfNo: [
      "Nursing", "Speech, Language and Hearing Sciences", "Kinesiology",
      "Occupational and Environmental Health Sciences"
    ],
    eliminateIfYes: [
      "Medical Laboratory Sciences", "Radiological Health Sciences", "Biomedical Health Sciences",
      "Health and Disease", "Neurobiology and Physiology"
    ]
  },
  {
    id: 39,
    text: "In the plant sciences, are you more interested in the molecular biology and genetics of plants than in growing, managing, or marketing crops?",
    tag: "plant-molecular",
    eliminateIfNo: [
      "Plant Genetics, Breeding, and Biotechnology", "Biochemistry (Agriculture)", "Biomolecular Design"
    ],
    eliminateIfYes: [
      "Agronomy", "Horticulture", "Farm Management", "Digital Agronomy", "Turf Management and Science",
      "Sustainable Food and Farming Systems", "Agribusiness", "Sales and Marketing (Agriculture)"
    ]
  },
  {
    id: 40,
    text: "Do you prefer a structured corporate or organizational work environment over outdoor, field-based, or farm settings?",
    tag: "corporate",
    eliminateIfNo: [
      "Accounting", "Finance", "General Management", "Marketing",
      "Supply Chain and Operations Management", "Business Analytics and Information Management",
      "Quantitative Business Economics", "Economics (Business)", "Integrated Business and Engineering",
      "Organizational Leadership", "Human Resource Development"
    ],
    eliminateIfYes: [
      "Wildlife", "Forestry", "Agronomy", "Crop Science", "Farm Management",
      "Sustainable Food and Farming Systems", "Horticulture", "Turf Management and Science",
      "Natural Resources and Environmental Science", "Soil and Water Sciences", "Aquatic Sciences",
      "Landscape Architecture (pre)", "Plant Science", "Plant Genetics, Breeding, and Biotechnology",
      "Ecology, Evolution and Environmental Sciences", "Geology and Geophysics", "Atmospheric Science"
    ]
  }
];
