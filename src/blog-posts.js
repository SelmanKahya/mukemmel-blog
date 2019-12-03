export const getPosts = () => {
  return [
    {
      title: "en guncel baslik",
      slug: "en-guncel",
      details: require("./posts/en-guncel.md").default,
      date: "20 Aralik 2019"
    },
    {
      title: "yeni baslik",
      slug: "yeni-baslik",
      details: require("./posts/yeni-baslik.md").default,
      date: "1 Aralik 2019"
    },
    {
      title: "İyi bir mühendisin 10 özelliği",
      slug: "iyi-bir-muhendis",
      details: require("./posts/iyi-bir-muhendis.md").default,
      date: "8 Haziran 2019"
    },
    {
      title: "Merhaba dunya!",
      slug: "merhaba",
      details: require("./posts/merhaba.md").default,
      date: "8 Haziran 2019"
    }
  ];
};
