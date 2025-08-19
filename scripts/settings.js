// scripts/settings.js

import { LazyGMPrepApp } from "./app.js";
export const MODULE_ID = "lazy-gm-prep";

/**
 * Registers the settings and menu for Lazy GM Prep.
 * The dummy setting with config:true makes the menu visible.
 */
export function registerSettings() {
  // 1) Dummy setting to anchor the menu in the UI
  game.settings.register(MODULE_ID, "dummy", {
    name: "Lazy GM Prep",
    hint: "Launch the Lazy GM Prep interface.",
    scope: "world",
    config: true,           // <-- makes this setting show up in Configure Settings
    type: Boolean,
    default: false
  });

  // 2) The actual menu entry that launches your application
  game.settings.registerMenu(MODULE_ID, "lazy-gm-prep-menu", {
    name: "Lazy GM Prep",
    label: "Lazy GM Prep",
    hint: "Launch the Lazy GM Prep interface.",
    icon: "fas fa-dungeon",
    type: LazyGMPrepApp,
    restricted: true        // only GMs see this
  });
}
