import book from '../assets/icons/book-icon.svg';
import main from '../assets/icons/home-icon.svg';
import games from '../assets/icons/game-icon.svg';
import stats from '../assets/icons/stats-icon.svg';

const sideMenuData = [
  {
    data__id: 'main',
    innerHTML: ` <button class="menu__item-btn">
        <div class="menu__item-img">
            <img src=${main} alt="home">
        </div>
        <div class="menu__item-text">Главная</div>
    </button>`,
  },

  {
    data__id: 'book',
    innerHTML: ` <button class="menu__item-btn">
        <div class="menu__item-img">
            <img src=${book}>
        </div>
        <div class="menu__item-text">Словарь</div>
    </button>`,
  },

  {
    data__id: 'games',
    innerHTML: ` <button class="menu__item-btn">
        <div class="menu__item-img">
            <img src=${games}>
        </div>
        <div class="menu__item-text">Игры</div>
    </button>`,
  },

  {
    data__id: 'stats',
    innerHTML: ` <button class="menu__item-btn">
        <div class="menu__item-img">
            <img src=${stats}>
        </div>
        <div class="menu__item-text">Игры</div>
    </button>`,
  },
];

export default sideMenuData;
