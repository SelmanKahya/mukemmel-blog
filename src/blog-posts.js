export const getPosts = () => {
  return [
    {
      title: "1500TL ödül! Sen de yarışmaya katıl!",
      slug: "yarisma",
      details: require("./posts/yarisma.md").default,
      date: "5 Aralık 2019",
      category: "Etkinlik",
      images: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2lUVHuICoIWJiv52YQ_k8RI-mIash48Sn8LLB_3HVJfjDRgHu"
    },
    {
      title: "Örnek yazı",
      slug: "ornek-yazi",
      details: require("./posts/ornek-yazi.md").default,
      date: "3 Aralık 2019",
      category: "Java",
      images: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9tWV4rAfo5y9xuw7SHZUV-8gUzTA7UeW4lbatWiSPJRNM1cDA"
    },
    {
      title: "Merhaba dünya!",
      slug: "merhaba",
      details: require("./posts/merhaba.md").default,
      date: "1 Aralık 2019",
      category: "Android",
      images: "https://media.metrolatam.com/2019/08/23/android-7e75316baedb458e540cc84150b3f7b4-600x400.jpg"
    }
  ];
};
