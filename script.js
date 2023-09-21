const items = [
  {
    title: "Игрушка мячик",
    description: "Ваш питомец будет счастлив!",
    tags: ["cat", "dog"],
    price: 500,
    img: "./img/1.jpeg",
  },
  {
    title: "Игрушка лабиринт",
    description: "Поможет в развитии интеллекта!",
    tags: ["cat", "dog"],
    price: 900,
    img: "./img/2.jpeg",
  },
  {
    title: "Игрушка для котят",
    description: "Отвлечет вашего питомца!",
    tags: ["cat"],
    price: 300,
    img: "./img/3.jpeg",
  },
  {
    title: "Миска «Котик»",
    description: "Подойдет и для собак!",
    tags: ["cat", "dog"],
    price: 660,
    img: "./img/4.jpeg",
  },
  {
    title: "Лоток розовый",
    description: "Теперь вы можете забыть о проблемах с туалетом",
    tags: ["cat"],
    price: 400,
    img: "./img/5.jpeg",
  },
  {
    title: "Сухой корм для кошек",
    description: "Специальная формула для милых усатиков!",
    tags: ["cat"],
    price: 200,
    img: "./img/6.jpeg",
  },
  {
    title: "Сухой корм для собак",
    description: "Содержит полный комплекс витаминов",
    tags: ["dog"],
    price: 300,
    img: "./img/7.jpeg",
  },
  {
    title: "Игрушка для собак",
    description: "Теперь вы можете не переживать за личные вещи",
    tags: ["dog"],
    price: 500,
    img: "./img/8.jpeg",
  },
  {
    title: "Лежанка",
    description: "Идеальное место для отдыха!",
    tags: ["cat", "dog"],
    price: 1500,
    img: "./img/9.jpeg",
  },
  {
    title: "Поилка для собак",
    description: "Возьмите с собой в путешествие",
    tags: ["dog"],
    price: 800,
    img: "./img/10.jpeg",
  },
  {
    title: "Переноска",
    description: "Путешествуйте с комфортом!",
    tags: ["cat", "dog"],
    price: 3500,
    img: "./img/11.jpeg",
  },
  {
    title: "Поводок для собак",
    description: "Для чудесных прогулок вместе",
    tags: ["dog"],
    price: 800,
    img: "./img/12.jpeg",
  },
];

const itemTemplate = document.querySelector('#item-template');
const shopItems = document.querySelector('#shop-items'); 
 
const firstCard = document.createElement('div'); 
firstCard.classList.add('price'); 
firstCard.classList.add('tags'); 


function makeСardByTemplate(title, description, tags, price, img) {
    const myCard = itemTemplate.content.cloneNode(true); 
    myCard.querySelector('h1').textContent = title;
    myCard.querySelector('p').textContent = description;
    myCard.querySelector('.tags').textContent = tags;
    myCard.querySelector('span').textContent = price;
    myCard.querySelector('img').src = img;

    return myCard; 
}

items.forEach(function(item) {
    const card = makeСardByTemplate(item.title, item.description, item.tags, item.price, item.img); 
    shopItems.append(card); 
});

const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const nothingFound = document.querySelector('#nothing-found');

searchBtn.addEventListener('click', function() {
  const text = sendInput.value;

  const filterItem = items.filter(item => item.title.trim().toLowerCase() == text.trim().toLowerCase());
  nothingFound.textContent = "";

  if (filterItem == "") {
    nothingFound.textContent = "Ничего не найдено";
  } else {
    filterItem.forEach(function(item) {
      const card = makeСardByTemplate(item.title, item.description, item.tags, item.price, item.img); 
      shopItems.append(card)
    });
  };
});

//дальше не понимаю:(