// Import actors & items
import { HeroicPersonaSheet } from "./module/actor/HeroicPersonaSheet.js";
import { djmythus } from "./module/config.js";
import { DJMythusItemSheet } from "./module/item/DJMythusItemSheet.js";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", async function () {
    console.log("Initializing Dangerous Journeys - Mythus");

    CONFIG.djmythus = djmythus;

    // game.djmythus = {
    //     // Actor sheets
    //     HeroicPersonaActor,
    // };

    //On init, we initialise any settings and settings menus and HUD overrides as required.
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("djmythus", HeroicPersonaSheet, {
        types: ["hp"],
        makeDefault: true,
    });
    Items.registerSheet("djmythus", DJMythusItemSheet, {
        types: ["casting", "ksarea"],
        makeDefault: true,
    });
});

//Pre-load HTML templates
// preloadHandlebarsTemplates();

// async function preloadHandlebarsTemplates() {
//     const templatePaths = [
//         "systems/dj-mythus/templates/actor/HeroicPersonaSheet.html",
//     ];
// }
