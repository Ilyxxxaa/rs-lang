import Control from '../common/control';

class Button extends Control {
  constructor(parentNode: HTMLElement, tagName: string) {
    super(parentNode, tagName);

    this.node.textContent = 'Сменить имя';

    this.node.onclick = () => {};
  }
}

export default Button;
