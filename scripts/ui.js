// scripts/ui.js

class LazyGMPrepApp extends ApplicationV2 {
  static get defaultOptions() {
    return {
      ...super.defaultOptions,
      id: "lazy-gm-prep-app",
      title: "Lazy GM Prep",
      width: 400,
      height: "auto",
      resizable: true,
      popOut: true,
      minimizable: false,
      classes: ["lazy-gm-prep"],
      template: "templates/lazy-gm-prep.html"
    };
  }

  async getData(options) {
    return {
      steps: [
        "Review the Adventure",
        "Create a Strong Start",
        "Outline Potential Scenes",
        "Define Secrets and Clues",
        "Develop Fantastic Locations",
        "Outline Important NPCs",
        "Choose Relevant Monsters",
        "Plan Magic Item Rewards"
      ]
    };
  }
}

// Make it globally accessible
window.LazyGMPrepApp = LazyGMPrepApp;

// Add a button to the journal sidebar to open the panel
Hooks.on("renderJournalSidebar", (app, html) => {
  const button = $(`<button class="lazy-gm-button"><i class="fas fa-scroll"></i> Lazy GM Prep</button>`);
  button.on("click", () => new LazyGMPrepApp().render(true));
  html.find(".header-actions").append(button);
});
