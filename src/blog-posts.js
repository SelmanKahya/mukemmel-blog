export const getPosts = () => {
  return [
    {
      id: "5",
      title: "1500TL ödül! Sen de yarışmaya katıl!",
      slug: "yarisma",
      details: require("./posts/yarisma.md").default,
      date: "5 Aralık 2019"
    },
    {
      id: "1",
      title: "Yazı Bir",
      slug: "yazi-bir",
      details: require("./posts/yazi_bir.md").default,
      date: "5 Aralık 2019"
    },
    {
      id: "2",
      title: "Yazı İki",
      slug: "yazi-iki",
      details: require("./posts/yazi_iki.md").default,
      date: "10 Ocak 2019"
    },
    {
      id: "3",
      title: "Yazı Üç",
      slug: "yazi-uc",
      details: require("./posts/yazi_uc.md").default,
      date: "10 Ocak 2019"
    },
    {
      id: "4",
      title: "Yazı Dört",
      slug: "yazi-dort",
      details: require("./posts/yazi_dort.md").default,
      date: "10 Ocak 2019"
    },
    {
      id: "6",
      title: "Örnek yazı",
      slug: "ornek-yazi",
      details: require("./posts/ornek-yazi.md").default,
      date: "10 Ocak 2019"
    },

    {
      id: "7",
      title: "Merhaba dünya!",
      slug: "merhaba",
      details: require("./posts/merhaba.md").default,
      date: "1 Aralık 2019"
    }
  ];
};
