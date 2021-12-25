interface SectionData {
  id: number;
  titleKey: string;
  imageUrl: string;
  linkUrl: string;
  size?: "large";
}

export const getSections = (): Array<SectionData> => [
  {
    id: 1,
    titleKey: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    linkUrl: "shop/hats",
  },
  {
    id: 2,
    titleKey: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    linkUrl: "shop/jackets",
  },
  {
    id: 3,
    titleKey: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    linkUrl: "shop/sneakers",
  },
  {
    id: 4,
    titleKey: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    linkUrl: "shop/womens",
  },
  {
    id: 5,
    titleKey: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    linkUrl: "shop/mens",
  },
];
