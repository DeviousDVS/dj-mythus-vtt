// Import actors & items
import { HeroicPersonaActor } from "./module/actor/HeroicPersonaSheet.js";

// Import actor & item sheets
//import { HeroicPersonaActorSheet } from "./actor/actor-sheet.js";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", async function () {
    console.log("Initializing Dangerous Journeys - Mythus");

    game.djmythus = {
        // Actor sheets
        HeroicPersonaActor,
    };
});

//Pre-load HTML templates
preloadHandlebarsTemplates();

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/dj-mythus/templates/actor/HeroicPersonaSheet.html",
    ];
}
