// scripts/init.js

const MODULE_ID = "lazy-gm-prep";

Hooks.once("init", function () {
  console.log(`${MODULE_ID} | Initializing Lazy GM Prep`);
  // Future: Register settings, preload templates, etc.
});

Hooks.once("setup", function () {
  console.log(`${MODULE_ID} | Setup phase`);
  // Future: Prepare data, link dependencies, etc.
});

Hooks.once("ready", async function () {
  console.log(`${MODULE_ID} | Ready to go!`);

  // Optional: Create journal if it doesn't exist
  // await createLazyGMJournal();

  // Optional: Launch UI or sidebar
  // LazyGMPrepApp.render(true);
});
