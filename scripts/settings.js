// scripts/settings.js

import { LazyGMPrepApp } from "./app.js";

export const MODULE_ID = "lazy-gm-prep";

export function registerSettings() {
  game.settings.registerMenu(MODULE_ID, "lazy-gm-prep-menu", {
    name: "Lazy GM Prep",
    label: "Lazy GM Prep",
    hint: "Launch the Lazy GM Prep interface.",
    icon: "fas fa-dungeon",
    type: LazyGMPrepApp,
    restricted: true
  });
}
