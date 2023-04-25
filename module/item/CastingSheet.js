/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ItemSheet}
 */

export class CastingSheet extends ItemSheet {
    get template() {
        return `systems/dj-mythus/templates/item/CastingSheet.html`;
    }

    // Set item window title
    get title() {
        return super.title;
        //return this.object.name;
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.djmythus;
        return data;
    }
}
