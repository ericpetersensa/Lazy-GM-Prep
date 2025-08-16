// scripts/app.js

import { createLazyGMJournal } from "./steps.js";

export class LazyGMPrepApp extends Application {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "lazy-gm-prep",
      title: "🧠 Lazy GM Prep",
      template: "modules/lazy-gm-prep/templates/lazy-gm-prep.html",
      width: 400,
      height: "auto",
      resizable: true,
      classes: ["lazy-gm-prep"],
    });
  }

  async getData(options = {}) {
    return {
      steps: [
        "Review the characters",
        "Create a strong start",
        "Outline potential scenes",
        "Define secrets and clues",
        "Develop fantastic locations",
        "Identify important NPCs",
        "Choose relevant monsters",
        "Select magic items and rewards"
      ]
    };
  }

  activateListeners(html) {
    super.activateListeners(html);

    html.find(".open-journal").on("click", async () => {
      const journal = await createLazyGMJournal();
      journal.sheet.render(true);
    });
  }
}
