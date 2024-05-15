import Javascript from "@/assets/icon/logo-javascript.svg";
import ReactJS from "@/assets/icon/react-2.svg";
import NodeJS from "@/assets/icon/nodejs-1.svg";
import AWS from "@/assets/icon/aws-2.svg";
import AngularJS from "@/assets/icon/angular-icon-1.svg";
import Docker from "@/assets/icon/docker-4.svg";
import Ember from "@/assets/icon/ember.svg";
import ExpressJS from "@/assets/icon/express-109.svg";
import Git from "@/assets/icon/git-icon.svg";
import jQuery from "@/assets/icon/jquery-2.svg";
import mongoDB from "@/assets/icon/mongodb-icon-1.svg";
import mySQL from "@/assets/icon/mysql-logo-svgrepo-com.svg";
import about from "@/assets/icon/about.svg";
import work from "@/assets/icon/work.svg";
import projects from "@/assets/icon/projects.svg";
import typescript from "@/assets/icon/typescript.svg";

export {
  Javascript,
  typescript,
  ReactJS,
  NodeJS,
  AWS,
  AngularJS,
  Docker,
  Ember,
  ExpressJS,
  Git,
  jQuery,
  mongoDB,
  mySQL,
  about,
  work,
  projects,
};

type SkillsIconObj = {
  src: string;
  title: string;
};

export const skillsIcon: SkillsIconObj[] = [
  { src: Javascript, title: "Javascript" },
  { src: typescript, title: "Typescript" },
  { src: ReactJS, title: "ReactJS" },
  { src: NodeJS, title: "NodeJS" },
  { src: AWS, title: "AWS" },
  { src: AngularJS, title: "AngularJS" },
  { src: Docker, title: "Docker" },
  { src: Ember, title: "EmberJS" },
  //   { src: ExpressJS, title: "ExpressJS" },
  { src: Git, title: "Git" },
  { src: jQuery, title: "jQuery" },
  { src: mongoDB, title: "mongoDB" },
  { src: mySQL, title: "mySQL" },
];
