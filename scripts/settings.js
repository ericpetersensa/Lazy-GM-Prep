// scripts/settings.js

export const MODULE_ID = "lazy-gm-prep";

/**
 * Register module settings
 */
export function registerSettings() {
  game.settings.register(MODULE_ID, "autoCreateJournal", {
    name: "Auto-Create Lazy GM Journal",
    hint: "Automatically create the Lazy GM Prep journal entry when the module loads.",
    scope: "world",         // Shared across all users in the world
    config: true,           // Show in the settings UI
    type: Boolean,
    default: true,
    requiresReload: false   // No need to reload when changed
  });
}
