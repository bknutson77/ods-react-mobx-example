import { GPU } from 'gpu.js';
import AuthenticationStore from "./authentication/AuthenticationStore";
import ApiStore from "./api/ApiStore";
import RoutesStore from "./routes/RoutesStore";
import LoginStore from "./pages/Login/LoginStore";
import ExampleStore from "./pages/Example/ExampleStore";

export default class RootStore {
  constructor() {

    // INFRA:
    this.authenticationStore = new AuthenticationStore(this);
    this.apiStore = new ApiStore(this);
    this.routesStore = new RoutesStore(this);
    this.loginStore = new LoginStore(this);

    // PAGES:
    this.exampleStore = new ExampleStore(this);
  }
}
