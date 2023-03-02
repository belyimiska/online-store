export const typesObject = {
  boots: {
    id: "67rdca3eeb7f6fgeed30",
    title: "Ботинки"
  },
  lowShoes: {
    id: "67rdca3eeb7f6fgeed31",
    title: "Полуботинки"
  },
  loafers: {
    id: "67rdca3eeb7f6fgeed32",
    title: "Лоферы"
  },
  moccasin: {
    id: "67rdca3eeb7f6fgeed33",
    title: "Мокасины"
  }
};

export const types = [
  { id: "67rdca3eeb7f6fgeed30", title: "Ботинки" },
  { id: "67rdca3eeb7f6fgeed31", title: "Полуботинки" },
  { id: "67rdca3eeb7f6fgeed32", title: "Лоферы" },
  { id: "67rdca3eeb7f6fgeed33", title: "Мокасины" }
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(types);
    }, 2000);
  });

export default { fetchAll };
