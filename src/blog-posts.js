export const getPosts = () => {
  return [
    {
      id: 0,
      title: "1500TL ödül! Sen de yarışmaya katıl!",
      slug: "yarisma",
      details: require("./posts/yarisma.md").default,
      image: "https://picsum.photos/600/320",
      date: "5 Aralık 2019",
      user: {
        name: "Muhammed Kaplan",
        profile_picture: "https://picsum.photos/320/320"
      }
    },
    {
      id: 1,
      title: "Örnek yazı",
      slug: "ornek-yazi",
      details: require("./posts/ornek-yazi.md").default,
      image: "https://picsum.photos/600/320",
      date: "3 Aralık 2019",
      user: {
        name: "Muhammed Kaplan",
        profile_picture: "https://picsum.photos/320/320"
      }
    },
    {
      id: 2,
      title: "Merhaba dünya!",
      slug: "merhaba",
      details: require("./posts/merhaba.md").default,
      image: "https://picsum.photos/600/320",
      date: "1 Aralık 2019",
      user: {
        name: "Muhammed Kaplan",
        profile_picture: "https://picsum.photos/320/320"
      }
    }
  ];
};
