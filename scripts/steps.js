// scripts/steps.js

export const LazyGMPrepSteps = [
  "1. Review the characters",
  "2. Create a strong start",
  "3. Outline potential scenes",
  "4. Define secrets and clues",
  "5. Develop fantastic locations",
  "6. Identify important NPCs",
  "7. Choose relevant monsters",
  "8. Select magic items and rewards"
];

/**
 * Creates a JournalEntry with the Lazy GM Prep steps.
 * If an entry with the same name exists, it won't duplicate.
 */
export async function createLazyGMJournal() {
  const entryName = "🧠 Lazy GM Prep Steps";

  // Check if entry already exists
  const existing = game.journal.getName(entryName);
  if (existing) {
    ui.notifications.info("Lazy GM Prep Journal already exists.");
    return existing;
  }

  // Format content as HTML
  const content = `
    <h2>Lazy GM Prep</h2>
    <p>Based on the method by Michael E. Shea</p>
    <ol>
      ${LazyGMPrepSteps.map(step => `<li>${step}</li>`).join("")}
    </ol>
  `;

  // Create the journal entry
  const journal = await JournalEntry.create({
    name: entryName,
    content,
    folder: null, // Optional: assign to a folder
    flags: {
      "lazy-gm-prep": {
        source: "auto-generated"
      }
    }
  });

  ui.notifications.info("Lazy GM Prep Journal created.");
  return journal;
}
