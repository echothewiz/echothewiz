import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import {
  faYoutube,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

type MediaDataType = {
  name?: string;
  path: string;
  icon: IconDefinition;
};

export const mediaData: MediaDataType[] = [
  {
    name: "YouTube",
    path: "#",
    icon: faYoutube,
  },
  {
    name: "TikTok",
    path: "#",
    icon: faTiktok,
  },
  {
    name: "Imstagram",
    path: "#",
    icon: faInstagram,
  },
];
