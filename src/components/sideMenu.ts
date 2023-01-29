import Control from '../common/control';
import AppState from './appState';
import sideMenuData from '../data/sideMenu';

class SideMenu extends Control {
  burgerButton: Control;
  menuList: Control;
  state: AppState;
  menuButtons: Control[];

  constructor(parentNode: HTMLElement, tagName: string, className: string, state: AppState) {
    super(parentNode, tagName, className);
    this.state = state;
    this.burgerButton = new Control(this.node, 'div', 'menu__bnt');
    this.menuList = new Control(this.node, 'ul', 'menu__list');

    this.menuButtons = sideMenuData.map((item) => new Control(this.menuList.node, 'li', 'menu__item', item.innerHTML));

    this.menuButtons.forEach((item, index) => {
      item.node.onclick = () => this.menuItemHandler(item, index);
    });
  }

  menuItemHandler = (item: Control<HTMLElement>, index: number) => {
    this.menuButtons.forEach((item1) => item1.node.classList.remove('menu__item--active'));
    this.state.data = {
      ...this.state.data,
      view: sideMenuData[index].data__id,
    };
    item.node.classList.add('menu__item--active');
  };
}

export default SideMenu;
