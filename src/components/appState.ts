import Signal from '../common/signal';

export interface IAppState {
  view: string;
}

class AppState {
  private _data: IAppState;

  constructor(initialData: IAppState) {
    this._data = initialData;
  }

  get data() {
    return this._data;
  }

  set data(value: IAppState) {
    this._data = value;
    this.onChange.emit(this._data);
  }

  onChange = new Signal<IAppState>();
}

export default AppState;
