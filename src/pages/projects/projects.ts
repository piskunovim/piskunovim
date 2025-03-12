export interface Project {
  name: string;
  demoLink?: string;
  tags?: string[];
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  websiteLink: string;
  websiteLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: "use-memo-reducer",
    description:
      "A React hook engineered to efficiently manage state within a React Context",
    websiteLink: "https://github.com/piskunovim/useMemoReducer",
    demoLink:
      "https://codesandbox.io/p/sandbox/use-memo-reducer-context-example-pcv676",
    tags: ["npm-package"],
  },
];
