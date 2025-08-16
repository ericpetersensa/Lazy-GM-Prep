// lazy-gm-prep.js

import { registerSettings } from "./scripts/settings.js";
import { createLazyGMJournal } from "./scripts/steps.js";
import { LazyGMPrepApp } from "./scripts/app.js"; // Assuming you have this already

Hooks.once("init", () => {
  console.log("Lazy GM Prep | Initializing module");
  registerSettings();
});

Hooks.once("ready", () => {
  if (game.user.isGM && game.settings.get("lazy-gm-prep", "autoCreateJournal")) {
    createLazyGMJournal();
  }

  new LazyGMPrepApp().render(true);
});
