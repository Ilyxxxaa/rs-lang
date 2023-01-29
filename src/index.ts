import App from './app';
import AppState, { IAppState } from './components/appState';

const initialState: IAppState = {
  view: 'main',
};

const state = new AppState(initialState);

const app = new App(document.body, state);
