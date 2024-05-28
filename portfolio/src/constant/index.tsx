import { work, projects, about } from "@/constant/logo";

import taskTracker from "@/assets/image/taskTracker.png";
import weatherTracker from "@/assets/image/weatherApp.png";
import urlShorterner from "@/assets/image/urlShortener.png";
import pomodoro from "@/assets/image/pomodoro.png";

export type NavBarTitle = "About" | "Professional Experience" | "Projects";

export type ProfessionalExpObj = {
  title: string;
  subTitle: string;
  desc: string[];
  year: string;
};

export type NavBarItems = {
  title: NavBarTitle;
  logo: string;
  id: string;
};

export const navBarItems: NavBarItems[] = [
  { title: "About", logo: about, id: "about" },
  { title: "Professional Experience", logo: work, id: "experience" },
  { title: "Projects", logo: projects, id: "projects" },
];

export const professionalExperience: ProfessionalExpObj[] = [
  {
    title: "Standard Chartered Bank",
    subTitle: "Front End Web Developer - Information Technology",
    desc: [
      "• Revamped part of the credit card loan journey to new technology stack React JS.",
      "• Debugged and resolved application issues to improve user experience.",
      "• Collaborated with cross-functional teams to ensure timely delivery of project milestone.",
      "• Well versed in the bank legacy code Ember JS for enhancement of certain features which has yet to be migrated to the new technology stack.",
      "• Designed reusable component for country integration.",
      "• Developed new features and enhancements for the application using React and Typescript to increase user engagement.",
      "• Improved application performance by optimizing REST API calls and reducing load times resulting in a increase in page speed.",
      "• Helped increase the overall Unit test coverage in React Typescript and Ember JS to ensure application will not break with new changes.",
      "• Promoted better component lifecycle practices, which helps the team with easier and faster integration",
    ],
    year: "2023 - 2024",
  },
  {
    title: "NTUC Income",
    subTitle: "Software Developer – Information Technology",
    desc: [
      "• Implemented easy to use UI component for building carousel, accordion, modal windows etc.",
      "• Used the built-in React toolkit to build user-facing features.",
      "• Integrated designs and wireframes with the application code",
      "• Optimized app components and improving the product’s performance.",
      "• Collaborated with software developers, designer, and product owner.",
      "• Designed a scalable app architecture, as well as the APIs to support it continuously.",
      "• Built a website to facilitate agents in their sales conversations with potential clients.",
    ],
    year: "2020 - 2022",
  },
  {
    title: "DBS Bank",
    subTitle: "Software Test Lead – Consumer Banking Group, Digital Banking",
    desc: [
      "• Gathered and understand business requirements together with product owners and business stakeholders.",
      "• Worked with technical business analysts based on given requirements to craft a story that is consumable by the development team.",
      "• Attended Scrum activities and update the management with daily and weekly status reports of all the testing activities.",
      "• Collaborated with Project Managers, Business Analysts, System Architects and Developers for testing activities.",
      "• Attended sprint planning to understand the sprint goal and commitment of the user stories for the upcoming sprint.",
      "• Managed a team and keep track of their daily KPI, progress and to unblock blockers.",
      "• Drafted test plan for each sprint and release.",
    ],
    year: "2017 - 2020",
  },
];

type ProjectArr = {
  img: string;
  demo: string;
  githubFE: string;
  githubBE: string;
  desc: string;
};
export const projectArr: ProjectArr[] = [
  {
    img: urlShorterner,
    demo: "https://url-shortener-fe-ten.vercel.app/",
    githubFE: "https://github.com/alvislim/UrlShortenerFE",
    githubBE: "https://github.com/alvislim/UrlShortenerBE",
    desc: "A simple and fast URL Shortener. With integrated backend and cache to allow more meaningful user experience.",
  },
  {
    img: pomodoro,
    demo: "https://pomodoro-one-xi.vercel.app/",
    githubBE: "",
    githubFE: "https://github.com/alvislim/pomodoro/tree/main/pomodoro-timer",
    desc: "A Pomodoro timer application built with next JS as base and chakra UI for the design.",
  },
  {
    img: weatherTracker,
    demo: "https://65f00c9314f07b8859056f59--subtle-begonia-5d4e32.netlify.app/",
    githubBE: "",
    githubFE: "https://github.com/alvislim/WeatherTracker",
    desc: "A working application that allows user to track the weather information of certain countries, while caching the search history with the ability to delete, or search.",
  },
  {
    img: taskTracker,
    demo: "https://65c06c9599ee79e7047e992c--stupendous-queijadas-e8a7d2.netlify.app/",
    githubFE: "https://github.com/alvislim/task-tracker",
    githubBE: "",
    desc: "A simple task tracker which allows you to create tasks and epics. Uses  zustand as state management and zustand router for routing. Work in progress..",
  },
];
