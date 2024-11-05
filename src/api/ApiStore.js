import { makeAutoObservable } from "mobx";

export default class ApiStore {
  initialize() {
    this.url = "http://localhost:8080";
    this.token = sessionStorage.getItem("token") ? sessionStorage.getItem("token") : "";
  }

  constructor(rootStore) {
    this.initialize(); // Initialize upon entry into the web-app, once.
    this.rootStore = rootStore; // All stores inherit root store.
    makeAutoObservable(this); // Make all stores auto observable for automatic data binding.
  }

  async sendRequest(request) {
    return await fetch(request)
      .then(response => 
        response.json()
      )
      .then((data) => {
        console.log(data);
        if (data.detail && data.detail == "Invalid credentials") {
          sessionStorage.removeItem("token"); // If token is invalid/expired, invalidate
          window.location.reload(); // Trigger a reload (once authenticated should return)
          throw data.detail; // Throw exception to surface error so caller store can respond
        }
        return data;
      })
      .catch(function(error) {
        console.log(error);
        return {"error": error};
      });
  }

  async signup(user) {
    var request = new Request(this.url + "/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(user)
    });
    return await this.sendRequest(request);
  }

  async login(username, password) {
    var request = new Request(this.url + "/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({"user_name": username, "user_password": password})
    });
    return await this.sendRequest(request);
  }

  async getCurrentUser() {
    var request = new Request(this.url + "/user/get_current_user", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "bearer": this.token
      }
    });
    return await this.sendRequest(request);
  }

}