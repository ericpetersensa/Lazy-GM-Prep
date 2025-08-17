// scripts/settings.js

import { LazyGMPrepApp } from "./app.js";

export const MODULE_ID = "lazy-gm-prep";

/**
 * Registers the settings and menu for Lazy GM Prep.
 * Ensures visibility in Game Settings > Configure Settings.
 */
export function registerSettings() {
  // Dummy setting to anchor the settings menu in the UI
  game.settings.register(MODULE_ID, "dummy", {
    name: "Lazy GM Prep",
    hint: "Launch the Lazy GM Prep interface.",
    scope: "world",
    config: true,
    type: Boolean,
    default: false
  });

  // Menu registration for launching the Lazy GM Prep app
  game.settings.registerMenu(MODULE_ID, "lazy-gm-prep-menu", {
    name: "Lazy GM Prep",
    label: "Lazy GM Prep",
    hint: "Launch the Lazy GM Prep interface.",
    icon: "fas fa-dungeon",
    type: LazyGMPrepApp,
    restricted: true
  });
}
