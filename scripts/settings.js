// scripts/settings.js

export const MODULE_ID = "lazy-gm-prep";

/**
 * Register module settings
 */
export function registerSettings() {
  game.settings.register("lazy-gm-prep", "dummy", {
    name: "Lazy GM Prep",
    hint: "Launch the Lazy GM Prep interface.",
    scope: "world",
    config: true,
    type: Boolean,
    default: false
  });

  game.settings.registerMenu("lazy-gm-prep", "lazy-gm-prep-menu", {
    name: "Lazy GM Prep",
    label: "Lazy GM Prep",
    hint: "Launch the Lazy GM Prep interface.",
    icon: "fas fa-dungeon",
    type: LazyGMPrepApp,
    restricted: true
  });
}
