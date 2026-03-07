const user = {
  name: "Gadzimurad",
  surname: "Gasanov",
  age: 19, 
  city: "Makhachkala",
  country: "Russia",
  email: "gadzimurad.gasanov.06@list.ru",
}

const auto = {
  brand: "Porsche",
  model: "911 TurboS",
  year: 2021,
  color: "wine red", 
  transmission: "PdK",
}

auto.owner = user; 

function addMaxSpeed(auto) {
  if (auto.maxSpeed === undefined) {
    auto.maxSpeed = 300;
  }
}

function getProperty(obj, property) {
  console.log(obj[property]);
}

console.log(getProperty(user, "name"));
console.log(getProperty(auto, "brand"));

const products = ["Молоко", "Хлеб", "Яйца", "Масло", "Сыр"]; 

const libraryBooks = [
  {
    title: "Код. Тайный язык информатики",
    author: "Чарльз Петцольд",
    year: 1999,
    coverColor: "Белый",
    genre: "Научно-популярная литература",
  },
  {
    title: "Личное дело",
    author: "Эдвард Сноуден",
    year: 2014,
    coverColor: "Чёрный",
    genre: "Биография",
  },
]; 

libraryBooks.push({
  title: "JavaScript с нуля до профи",
  author: "Лоренс Ларс Свекис, Майке ван, и Роб Персиваль",
  year: 2023,
  coverColor: "Чёрный",
  genre: "Программирование",
});

const universebooks = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "Красный",
    genre: "Фэнтези",
  },
  {
    title: "Властелин колец: Братство кольца",
    author: "Дж. Р. Р. Толкин",
    year: 1954,
    coverColor: "Зелёный",
    genre: "Фэнтези",
  },
  {
    title: "Гари Поттер и тайная комната",
    author: "Дж. К. Роулинг",
    year: 1998,
    coverColor: "Синий",
    genre: "Фэнтези",
  },];
  
const allBooks = [
  ...libraryBooks,
  ...universebooks, 
]

const booksWithRare = allBooks.map(book => {
  if (book.year < 2000) {
    return { ...book, isRare: true };
  }
  return book;
});

console.log(booksWithRare);