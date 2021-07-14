import * as mobx from "mobx";

export class Store<T = any> {
  private _sections: mobx.IObservableArray<T> = mobx.observable.array();

  @mobx.action.bound
  addSection(section: T) {
    this._sections.push(section);
  }

  @mobx.computed
  get sections() {
    return this._sections;
  }
}

// const store = new Store<string>();

// store.addSection("Hello");

// mobx.autorun(() => {
//   console.log("autorun:");
//   console.log(store.sections.join(""));
// });

// setTimeout(() => {
//   store.addSection(", ");
//   store.addSection("world");
//   store.addSection("!");
// }, 100);
