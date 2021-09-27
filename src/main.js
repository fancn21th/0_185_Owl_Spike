import { utils, mount } from "@odoo/owl";
import { App } from "./components/App";

function setup() {
  mount(App, { target: document.body });
}

utils.whenReady(setup);
