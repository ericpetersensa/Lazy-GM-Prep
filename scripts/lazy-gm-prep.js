// lazy-gm-prep.js

import { registerSettings } from "./scripts/settings.js";
import { createLazyGMJournal } from "./scripts/steps.js";
import { LazyGMPrepApp } from "./scripts/app.js"; // Assuming you have this already

Hooks.once("init", () => {
  console.log("Lazy GM Prep | Initializing module");

  registerSettings();

  game.settings.registerMenu("lazy-gm-prep", "openApp", {
    name: "Lazy GM Prep",
    label: "Open Prep Tool",
    icon: "fas fa-scroll", // You can change this to any Font Awesome icon
    type: LazyGMPrepApp,
    restricted: true
  });

Hooks.once("ready", () => {
  if (game.user.isGM && game.settings.get("lazy-gm-prep", "autoCreateJournal")) {
    createLazyGMJournal();
  }

  new LazyGMPrepApp().render(true);
});
