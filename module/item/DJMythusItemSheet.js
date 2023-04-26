/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ItemSheet}
 */

export class DJMythusItemSheet extends ItemSheet {
    get template() {
        console.log(this);
        return `systems/dj-mythus/templates/item/${this.item.type}-sheet.html`;
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
