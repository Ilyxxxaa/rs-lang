import Control from '../common/control';

class Output extends Control {
  constructor(parentNode: HTMLElement, tagName: string) {
    super(parentNode, tagName);

    this.node.textContent = '';
  }

  set content(value: string) {
    this.node.textContent = value;
  }
}

export default Output;
