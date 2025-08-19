// scripts/module.js

import { registerSettings } from "./settings.js";

Hooks.once("init", () => {
  console.log("Lazy GM Prep | Initializing");
  registerSettings();
});
