let authorM = {
  authorId: 1,
  name: "แก้วเก้า",
  //url:"https://th.wikipedia.org/wiki/",
  url: "https://th.wikipedia.org/wiki/%E0%B8%A7%E0%B8%B4%E0%B8%99%E0%B8%B4%E0%B8%95%E0%B8%B2_%E0%B8%94%E0%B8%B4%E0%B8%96%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B9%8C",
  address: {
    houseNo: "123/4",
    street: "ถนนพหลโยธิน",
    country: "Thailand",
    postcode: "10900",
  },
};

console.log("authorId =", authorM.authorId);
console.log("นามปากกา =", authorM.name);
console.log("URL =", authorM.url);
console.log(
  "ที่อยู่ =",
  authorM.address.houseNo,
  authorM.address.street,
  authorM.address.country,
  authorM.address.postcode
);
