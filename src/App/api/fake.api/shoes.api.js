import { typesObject as types } from "./types.api";

const sizes = {
  forty: {
    id: "67rdca3eeb7f6fgeed40",
    title: 40
  },
  fortyOne: {
    id: "67rdca3eeb7f6fgeed41",
    title: 41
  },
  fortyTwo: {
    id: "67rdca3eeb7f6fgeed42",
    title: 42
  },
  fortyThree: {
    id: "67rdca3eeb7f6fgeed43",
    title: 43
  },
  fortyFour: {
    id: "67rdca3eeb7f6fgeed44",
    title: 44
  },
  fortyFive: {
    id: "67rdca3eeb7f6fgeed45",
    title: 45
  }
};

const brands = {
  officineCreative: {
    id: "67rdca3eeb7f6fgeed50",
    title: "OFFICINE CREATIVE"
  },
  vagabond: {
    id: "67rdca3eeb7f6fgeed51",
    title: "VAGABOND"
  },
  tommyHilgiger: {
    id: "67rdca3eeb7f6fgeed52",
    title: "TOMMY HILFIGER"
  },
  crispiniano: {
    id: "67rdca3eeb7f6fgeed53",
    title: "CRISPINIANO"
  },
  tendance: {
    id: "67rdca3eeb7f6fgeed54",
    title: "TENDANCE"
  },
  maisonDavid: {
    id: "67rdca3eeb7f6fgeed55",
    title: "MAISON DAVID"
  },
  ernesto: {
    id: "67rdca3eeb7f6fgeed56",
    title: "ERNESTO DOLANI"
  },
  calvinKlein: {
    id: "67rdca3eeb7f6fgeed57",
    title: "CALVIN KLEIN"
  }
};

const shoes = [
  {
    id: "67rdca3eeb7f6fgeed47001",
    title: "Мужские ботинки",
    type: types.boots,
    price: 21650,
    imgUrl: "/img/shoes/boots/botinki_officine_creative.jpg",
    size: [sizes.forty, sizes.fortyTwo, sizes.fortyThree],
    rate: 4.3,
    brand: brands.officineCreative,
    searchReq: "Мужские ботинки OFFICINE CREATIVE"
  },
  {
    id: "67rdca3eeb7f6fgeed47002",
    title: "Мужские ботинки",
    type: types.boots,
    price: 10970,
    imgUrl: "/img/shoes/boots/botinki_vagabond.jpg",
    size: [sizes.forty, sizes.fortyOne, sizes.fortyTwo, sizes.fortyFour],
    rate: 4.1,
    brand: brands.vagabond,
    searchReq: "Мужские ботинки VAGABOND"
  },
  {
    id: "67rdca3eeb7f6fgeed47003",
    title: "Мужские ботинки",
    type: types.boots,
    price: 14030,
    imgUrl: "/img/shoes/boots/botinki_tommy_hilfiger.jpg",
    size: [sizes.fortyOne, sizes.fortyTwo, sizes.fortyThree, sizes.fortyFive],
    rate: 4.5,
    brand: brands.tommyHilgiger,
    searchReq: "Мужские ботинки TOMMY HILFIGER"
  },
  {
    id: "67rdca3eeb7f6fgeed47004",
    title: "Мужские ботинки",
    type: types.boots,
    price: 11820,
    imgUrl: "/img/shoes/boots/botinki_crispiniano.jpg",
    size: [sizes.forty, sizes.fortyOne, sizes.fortyThree, sizes.fortyFour],
    rate: 4.6,
    brand: brands.crispiniano,
    searchReq: "Мужские ботинки CRISPINIANO"
  },
  {
    id: "67rdca3eeb7f6fgeed47005",
    title: "Мужские ботинки",
    type: types.boots,
    price: 22620,
    imgUrl: "/img/shoes/boots/botinki_officine_creative_accademia.jpg",
    size: [sizes.fortyOne, sizes.fortyTwo, sizes.fortyThree, sizes.fortyFour],
    rate: 4.9,
    brand: brands.officineCreative,
    searchReq: "Мужские ботинки OFFICINE CREATIVE"
  },
  {
    id: "67rdca3eeb7f6fgeed47006",
    title: "Мужские полуботинки",
    type: types.lowShoes,
    price: 10490,
    imgUrl: "/img/shoes/lowShoes/polubotinki_tendance_t_2817d.jpg",
    size: [sizes.forty, sizes.fortyOne, sizes.fortyThree, sizes.fortyFive],
    rate: 4.2,
    brand: brands.tendance,
    searchReq: "Мужские полуботинки TENDANCE"
  },
  {
    id: "67rdca3eeb7f6fgeed47007",
    title: "Мужские полуботинки",
    type: types.lowShoes,
    price: 10990,
    imgUrl: "/img/shoes/lowShoes/polubotinki_maison_david_m_2278f.jpg",
    size: [sizes.forty, sizes.fortyOne, sizes.fortyTwo, sizes.fortyFour],
    rate: 4.9,
    brand: brands.maisonDavid,
    searchReq: "Мужские полуботинки MAISON DAVID"
  },
  {
    id: "67rdca3eeb7f6fgeed47008",
    title: "Мужские полуботинки",
    type: types.lowShoes,
    price: 9590,
    imgUrl: "/img/shoes/lowShoes/polubotinki_tendance_ya_9092.jpg",
    size: [sizes.fortyOne, sizes.fortyTwo, sizes.fortyThree, sizes.fortyFour],
    rate: 4.0,
    brand: brands.tendance,
    searchReq: "Мужские полуботинки TENDANCE"
  },
  {
    id: "67rdca3eeb7f6fgeed47009",
    title: "Мужские полуботинки",
    type: types.lowShoes,
    price: 17290,
    imgUrl: "/img/shoes/lowShoes/polubotinki_ernesto_dolani.jpg",
    size: [sizes.forty, sizes.fortyOne, sizes.fortyTwo, sizes.fortyFour],
    rate: 4.7,
    brand: brands.ernesto,
    searchReq: "Мужские полуботинки ERNESTO DOLANI"
  },
  {
    id: "67rdca3eeb7f6fgeed47010",
    title: "Мужские полуботинки",
    type: types.lowShoes,
    price: 36190,
    imgUrl: "/img/shoes/lowShoes/polubotinki_officine_creative_hive_001.jpg",
    size: [
      sizes.forty,
      sizes.fortyOne,
      sizes.fortyTwo,
      sizes.fortyThree,
      sizes.fortyFour,
      sizes.fortyFive
    ],
    rate: 3.8,
    brand: brands.officineCreative,
    searchReq: "Мужские полуботинки OFFICINE CREATIVE"
  },
  {
    id: "67rdca3eeb7f6fgeed47011",
    title: "Мужские лоферы",
    type: types.loafers,
    price: 10700,
    imgUrl: "/img/shoes/loafers/loafer_tendance_t_2005f.jpg",
    size: [
      sizes.forty,
      sizes.fortyOne,
      sizes.fortyTwo,
      sizes.fortyThree,
      sizes.fortyFour
    ],
    rate: 4.4,
    brand: brands.tendance,
    searchReq: "Мужские лоферы TENDANCE"
  },
  {
    id: "67rdca3eeb7f6fgeed47012",
    title: "Мужские лоферы",
    type: types.loafers,
    price: 6470,
    imgUrl: "/img/shoes/loafers/loafer_tendance_y112a.jpg",
    size: [sizes.fortyOne, sizes.fortyTwo, sizes.fortyThree, sizes.fortyFour],
    rate: 4.7,
    brand: brands.tendance,
    searchReq: "Мужские лоферы TENDANCE"
  },
  {
    id: "67rdca3eeb7f6fgeed47013",
    title: "Мужские лоферы",
    type: types.loafers,
    price: 35290,
    imgUrl: "/img/shoes/loafers/loafer_officine_creative_lucien_015.jpg",
    size: [
      sizes.forty,
      sizes.fortyOne,
      sizes.fortyTwo,
      sizes.fortyThree,
      sizes.fortyFive
    ],
    rate: 4.9,
    brand: brands.officineCreative,
    searchReq: "Мужские лоферы OFFICINE CREATIVE"
  },
  {
    id: "67rdca3eeb7f6fgeed47014",
    title: "Мужские лоферы",
    type: types.loafers,
    price: 13090,
    imgUrl: "/img/shoes/loafers/loafer_ernesto_dolani_uchu06.jpg",
    size: [sizes.fortyOne, sizes.fortyTwo, sizes.fortyThree, sizes.fortyFive],
    rate: 4.7,
    brand: brands.ernesto,
    searchReq: "Мужские лоферы ERNESTO DOLANI"
  },
  {
    id: "67rdca3eeb7f6fgeed47015",
    title: "Мужские лоферы",
    type: types.loafers,
    price: 21190,
    imgUrl: "/img/shoes/loafers/loafer_ernesto_dolani_uzan01.jpg",
    size: [sizes.fortyOne, sizes.fortyTwo, sizes.fortyThree],
    rate: 4.8,
    brand: brands.ernesto,
    searchReq: "Мужские лоферы ERNESTO DOLANI"
  },
  {
    id: "67rdca3eeb7f6fgeed47016",
    title: "Мужские мокасины",
    type: types.moccasin,
    price: 10490,
    imgUrl: "/img/shoes/mocassin/mokasiny_tendance_td21f19ap.jpg",
    size: [
      sizes.forty,
      sizes.fortyOne,
      sizes.fortyTwo,
      sizes.fortyThree,
      sizes.fortyFour,
      sizes.fortyFive
    ],
    rate: 4.4,
    brand: brands.tendance,
    searchReq: "Мужские мокасины TENDANCE"
  },
  {
    id: "67rdca3eeb7f6fgeed47017",
    title: "Мужские мокасины",
    type: types.moccasin,
    price: 9290,
    imgUrl: "/img/shoes/mocassin/mokasiny_tendance_sm45578.jpg",
    size: [sizes.fortyOne, sizes.fortyTwo, sizes.fortyThree, sizes.fortyFour],
    rate: 4.7,
    brand: brands.tendance,
    searchReq: "Мужские мокасины TENDANCE"
  },
  {
    id: "67rdca3eeb7f6fgeed47018",
    title: "Мужские мокасины",
    type: types.moccasin,
    price: 11190,
    imgUrl: "/img/shoes/mocassin/mokasiny_calvin_klein_kwinten.jpg",
    size: [sizes.forty, sizes.fortyOne, sizes.fortyTwo, sizes.fortyThree],
    rate: 5.0,
    brand: brands.calvinKlein,
    searchReq: "Мужские мокасины CALVIN KLEIN"
  },
  {
    id: "67rdca3eeb7f6fgeed47019",
    title: "Мужские мокасины",
    type: types.moccasin,
    price: 29890,
    imgUrl: "/img/shoes/mocassin/mokasiny_officine_creative_newindi_002.jpg",
    size: [sizes.forty, sizes.fortyOne, sizes.fortyTwo, sizes.fortyThree],
    rate: 4.6,
    brand: brands.officineCreative,
    searchReq: "Мужские мокасины OFFICINE CREATIVE"
  },
  {
    id: "67rdca3eeb7f6fgeed47020",
    title: "Мужские мокасины",
    type: types.moccasin,
    price: 10690,
    imgUrl: "/img/shoes/mocassin/mokasiny_maison_david_m_2619f_1a.jpg",
    size: [
      sizes.forty,
      sizes.fortyOne,
      sizes.fortyTwo,
      sizes.fortyThree,
      sizes.fortyFour
    ],
    rate: 4.4,
    brand: brands.maisonDavid,
    searchReq: "Мужские мокасины MAISON DAVID"
  }
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(shoes);
    }, 2000);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(shoes.find((shoe) => shoe.id === id));
    }, 1000);
  });

export default { fetchAll, getById };
