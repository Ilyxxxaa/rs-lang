import Control from './common/control';
import AppState, { IAppState } from './components/appState';
import Output from './components/output';
import SideMenu from './components/sideMenu';

class App extends Control {
  sideMenu: SideMenu;
  output: Output;

  constructor(parentNode: HTMLElement, state: AppState) {
    super(parentNode);

    this.sideMenu = new SideMenu(this.node, 'aside', 'menu', state);
    this.output = new Output(this.node, 'div');

    const updateView = (value: IAppState) => {
      this.output.content = value.view;
    };

    state.onChange.add(updateView);

    // this.button.node.onclick = () => {
    //   state.name = (this.input.node as HTMLInputElement).value;
    //   (this.input.node as HTMLInputElement).value = '';
    // };

    // this.button1.node.onclick = () => {
    //   state.surname = (this.input1.node as HTMLInputElement).value;
    //   (this.input1.node as HTMLInputElement).value = '';
    // };

    // state.onNameChange.add(nameUpdate);
    // state.onSurnameChange.add(surnameUpdate);
  }
}

export default App;
