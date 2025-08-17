// lazy-gm-prep.js

import { registerSettings } from "./settings.js";
import { createLazyGMJournal } from "./steps.js";
import { LazyGMPrepApp } from "./app.js";

Hooks.once("init", () => {
  console.log("Lazy GM Prep | Initializing module");

  registerSettings();

  game.settings.registerMenu("lazy-gm-prep", "openApp", {
    name: "Lazy GM Prep",
    label: "Open Prep Tool",
    icon: "fas fa-scroll",
    type: LazyGMPrepApp,
    restricted: true
  });

Hooks.once("ready", () => {
  if (game.user.isGM && game.settings.get("lazy-gm-prep", "autoCreateJournal")) {
    createLazyGMJournal();
  }

  new LazyGMPrepApp().render(true);
});
