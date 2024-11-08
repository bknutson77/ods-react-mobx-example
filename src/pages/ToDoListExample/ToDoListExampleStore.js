import { makeAutoObservable, toJS } from "mobx";

export default class ToDoListExampleStore {

  initialize() {
    this.newItem = "";
    this.newItemError = false;
    this.newItemHelper = "";

    this.toDoList = [];
  }

  constructor(rootStore) {
    this.initialize(); // Initialize upon entry into the web-app, once.
    this.rootStore = rootStore; // All stores inherit root store.
    makeAutoObservable(this); // Make all stores auto observable for automatic data binding.
  }

  changeNewItem(e) {
    this.newItem = e.target.value;

    if (this.newItem.length > 50) {
      this.newItemError = true;
      this.newItemHelper = "Cannot exceed 50 characters";
    } else {
      this.newItemError = false;
      this.newItemHelper = "";
    }
  }

  addNewItem() {
    this.toDoList.push(this.newItem);
    this.newItem = "";
  }

  removeItem(index) {
    this.toDoList.splice(index, 1);
  }

}
