class Control<NodeType extends HTMLElement = HTMLElement> {
  public node: NodeType;

  constructor(parentNode: HTMLElement | Control | null, tagName = 'div', className = '', content = '') {
    const el = document.createElement(tagName);
    el.className = className;
    el.innerHTML = content;

    if (parentNode) {
      (parentNode as HTMLElement).append(el);
    }

    this.node = el as NodeType;
  }

  destroy(): void {
    this.node.remove();
  }
}

export default Control;
