/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */

export default class HeroicPersonaSheet extends ActorSheet {
    get template() {
        return `systems/dj-mythus/templates/actor/HeroicPersonaSheet.html`;
    }
}
/*
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["heroic", "sheet", "actor"],
      template: "systems/heroic/templates/actor/heroic-persona-sheet.html",
      width: 600,
      height: 700,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }],
    });
  }

  getData() {
    const data = super.getData();
    data.config = CONFIG.heroic;
    data.dtypes = ["String", "Number", "Boolean"];

    // Prepare items.
    if (this.actor.data.type == "heroic-persona") {
      this._prepareCharacterItems(data);
    }

    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);

    if (!this.options.editable) return;

    // Everything below here is only needed if the sheet is editable

    // Add Inventory Item
    html.find(".item-create").click(this._onItemCreate.bind(this));

    // Update Inventory Item
    html.find(".item-edit").click(ev => {
      const li = $(ev.currentTarget).parents(".item");
      const item = this.actor.getOwnedItem(li.data("itemId"));
      item.sheet.render(true);
    });

    // Delete Inventory Item
    html.find(".item-delete").click(ev => {
      const li = $(ev.currentTarget).parents(".item");
      this.actor.deleteOwnedItem(li.data("itemId"));
      li.slideUp(200, () => this.render(false));
    });

    // Rollable abilities.
    html.find(".rollable").click(this._onRoll.bind(this));

    // Drag events for macros.
    if (this.actor.isOwner) {
      let handler = ev => this._onDragItemStart(ev);
      html.find("li.item").each((i, li) => {
        if (li.classList.contains("inventory-header")) return;
        li.setAttribute("draggable", true);
        li.addEventListener("dragstart", handler, false);
      });
    }
  }

  _prepareCharacterItems(sheetData) {
    const actorData = sheetData.actor;

    // Initialize containers.
    const gear = [];
    const weapons = [];
    const spells = [];
    const features = [];

    // Iterate through items, allocating to containers
    // let totalWeight = 0;
    for (let i of
        */
