import { awesomebook, tvshowbox, todolist, guesstheword, tictactoe, mathmagician, metricwebapp, spacetravelers, recipeapp, awesomebook1, awesomebook2, awesomebook3, guesstheword1, guesstheword2, guesstheword3, spacetravelers1, spacetravelers2, spacetravelers3, tictactoe1, tictactoe2, tictactoe3, tvshow1, tvshow2, tvshow3, metricswebapp1, metricswebapp2, recipeapp1, recipeapp2, recipeapp3, recipeapp4, recipeapp5, recipeapp6, trackbudget, trackbuget1, trackbuget2, trackbuget3, trackbuget4, trackbuget5 } from '../assets';

const technologies = [
    {
      stack: "languages",
      name: "HTML 5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
    },
    {
      stack: "languages",
      name: "CSS 3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" ,
    },
    {
      stack: "languages",
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    },
    {
      stack: "languages",
      name: "Ruby",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg",
    },
    {
      stack: "frameworks",
      name: "React JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      stack: "frameworks",
      name: "Ruby on Rails",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
    },
    {
      stack: "frameworks",
      name: "Redux Toolkit",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      stack: "frameworks",
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    },
    {
      stack: "frameworks",
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      stack: "tools",
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
    },
    {
      stack: "tools",
      name: "git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    },
    {
      stack: "tools",
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      stack: "tools",
      name: "Webpack",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg",
    },
    {
      stack: "tools",
      name: "Figma",
      icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    },
    {
      stack: "tools",
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
  ];

const projects = [
  {
    id: 1,
    name: "TV Shows Box",
    desc: "TVshows Box is a web application showing multiple TV shows with the help of TVmaze API which contains both mobile and desktop versions. The webapp have 3 interfaces: - A home page, a popup window, and a contact page.",
    tech: ["HTML5", "CSS3", "JavaScript", "TVmaze API"],
    img: tvshowbox,
    carousel: [tvshow1, tvshow2, tvshow3],
    source_link: "https://github.com/Rhaegar121/TVshows_Box",
    live_link: "https://tvshowbox.netlify.app/",
  },
  {
    id: 2,
    name: "Metrics Webapp",
    desc: "Metrics Webapp is a mobile web application showing the current weather data of the cities using the Openweather API. It has two interfaces - city page and detail page based on the design of Nelson Sakwa on Behance. Built during the Microverse Module 3 React Captone Project.",
    tech: ["React", "Redux", "Openweather API"],
    img: metricwebapp,
    carousel: [metricwebapp, metricswebapp1, metricswebapp2],
    source_link: "https://github.com/Rhaegar121/Metrics-Webapp",
    live_link: "https://metrics-webapp121.netlify.app/",
  },
  {
    id: 3,
    name: "Space Travelers' Hub",
    desc: "Space Travelers' Hub is a web application that provides commercial and scientific space travel services using the real live data from the SpaceX API. The application will allow users to book rockets and join selected space missions.",
    tech: ["React", "Redux", "SpaceX API"],
    img: spacetravelers,
    carousel: [spacetravelers1, spacetravelers2, spacetravelers3],
    source_link: "https://github.com/Rhaegar121/React-Group-Project",
    live_link: "https://space-travelers-hub121.netlify.app/",
  },
  {
    id: 4,
    name: "To Do List",
    desc: "To Do List Project is a tool that helps to organize your day with light and dark theme. It simply lists the things that you need to do and allows you to mark them as complete. Mainly built with javascript in Microverse Module 2.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    img: todolist,
    carousel: [todolist],
    source_link: "https://github.com/Rhaegar121/To-Do-list",
    live_link: "https://rhaegar121.github.io/To-Do-list/dist/",
  },
  {
    id: 5,
    name: "Track Budget App",
    desc: "Track Budget is a mobile web application where you can manage your budget: you have a list of purchases associated with a category, so that you can see how much money you spent and on what category.",
    tech: ["Ruby", "Ruby on Rails", "Postgresql"],
    img: trackbudget,
    carousel: [trackbudget, trackbuget1, trackbuget2, trackbuget3, trackbuget4, trackbuget5],
    source_link: "https://github.com/Rhaegar121/Track-Budget",
    live_link: "https://track-budget.onrender.com/",
  },
  {
    id: 6,
    name: "Math Magicians",
    desc: "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.",
    tech: ["React"],
    img: mathmagician,
    carousel: [mathmagician],
    source_link: "https://github.com/Rhaegar121/Math-Magicians",
    live_link: "https://math-magicians121.netlify.app/",
  },
  {
    id: 7,
    name: "Tic Tac Toe",
    desc: "Tic Tac Toe is a simple and classic game that is played on a 3x3 grid. The game is typically played with two players, one using “X” and the other using “O”. Mainly built with JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    img: tictactoe,
    carousel: [tictactoe1, tictactoe2, tictactoe3],
    source_link: "https://github.com/Rhaegar121/Tic-Tac-Toe",
    live_link: "https://rhaegar121.github.io/Tic-Tac-Toe/",
  },
  {
    id: 8,
    name: "Awesome Books",
    desc: "Awesome Books Project is a simple website that displays a list of books and allows you to add and remove books from that list. Mainly built with javascript in Microverse Module 2.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    img: awesomebook,
    carousel: [awesomebook1, awesomebook2, awesomebook3],
    source_link: "https://github.com/Rhaegar121/Awesome-Books-ES6",
    live_link: "https://rhaegar121.github.io/Awesome-Books-ES6/",
  },
  {
    id: 9,
    name: "Guess the word",
    desc: "Guess The Word is a fun letter puzzle game where the player have to guess the hidden word using the clues that the game gives. The game ends if the player guesses the correct word or if he chooses the wrong letter 8 times. Mainly built with Javascript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    img: guesstheword,
    carousel: [guesstheword1, guesstheword2, guesstheword3],
    source_link: "https://github.com/Rhaegar121/Guess-the-word",
    live_link: "https://rhaegar121.github.io/Guess-the-word/",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Wai Yan Phyo",
    text: "I highly recommend Barry for any software development role. During our recent collaboration, he consistently demonstrated exceptional coding skills and a strong work ethic. He is a pleasure to work with and his attention to detail and commitment to quality make him an excellent candidate for any software development team.",
    country: "Myanmar",
    linkedIn: "https://www.linkedin.com/in/oyhpnayiaw/"
  },
  {
    id: 2,
    name: "Nwadinigwe Victor",
    text: "Barry is one of the brightest software developers I've ever met. I worked alongside him while building a single-page Web Application for movie display, and in that time he proved his commitment and determination over and over again. Barry is always challenging himself-- he's the type of person who reads documentation for fun, and his attention to detail is evident in all of the projects I've worked with him on.",
    country: "Nigeria",
    linkedIn: "https://www.linkedin.com/in/victornwadinigwe/"
  },
  {
    id: 3,
    name: "Ahmed Hasan Rony",
    text: "Barry was my first coding partner. I remember how glad I was passing a week and spent creating a project and solving lots of programming challenges together. I really am comfortable with collaborating and coding with Barry. His ingenious ideas give me a lot of ideas solving a problem multiple ways.",
    country: "India",
    linkedIn: "https://www.linkedin.com/in/ahroniy/"
  }
]

export { technologies, projects, testimonials };