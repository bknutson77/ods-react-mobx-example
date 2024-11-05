import { makeAutoObservable, toJS } from "mobx";

export default class ExampleStore {

  initialize() {
    this.myNumber = 1;
  }

  constructor(rootStore) {
    this.initialize(); // Initialize upon entry into the web-app, once.
    this.rootStore = rootStore; // All stores inherit root store.
    makeAutoObservable(this); // Make all stores auto observable for automatic data binding.
  }

  incrementMyNumber() {
    this.myNumber = this.myNumber + 1;
  }

  decrementNumber() {
    this.myNumber = this.myNumber - 1;
  }

}
