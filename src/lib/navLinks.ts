import { ComponentType, SVGProps } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faPerson,
  faSuitcase,
  faPhone,
  faBookAtlas,
} from "@fortawesome/free-solid-svg-icons";

type NavLinksType = {
  name?: string;
  path: string;
  icon: ComponentType<SVGProps<SVGSVGElement>> | IconDefinition;
};

export const navLinks: NavLinksType[] = [
  {
    name: "Home",
    path: "/",
    icon: faHome,
  },
  {
    name: "Who am I?",
    path: "/about_me",
    icon: faPerson,
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    icon: faSuitcase,
  },
  {
    name: "Contact Me",
    path: "/contact_me",
    icon: faPhone,
  },
  {
    name: "Library",
    path: "/echouix",
    icon: faBookAtlas,
  },
];
