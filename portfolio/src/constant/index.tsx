import { work, projects, about } from "@/constant/logo";

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
