import type { Config } from "vike/types";
import vikeReact from "vike-react/config";
import logo from "./assets/logo.svg";

const config: Config = {
  title: "Mentors Arts  Centre  ",
  description: "Home of creativity",
prerender:true,
  extends: [vikeReact],
};

export default config;

