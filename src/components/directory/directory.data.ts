interface SectionData {
  id: number;
  titleKey: string;
  imageUrl: string;
  linkUrl: string;
  size?: "large";
}

export const sections: Array<SectionData> = [
  {
    id: 1,
    titleKey: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    linkUrl: "hats",
  },
  {
    id: 2,
    titleKey: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    linkUrl: "",
  },
  {
    id: 3,
    titleKey: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    linkUrl: "",
  },
  {
    id: 4,
    titleKey: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    linkUrl: "",
  },
  {
    id: 5,
    titleKey: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    linkUrl: "",
  },
];
