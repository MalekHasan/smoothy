"use strict";
export class RadioField {
  constructor(options) {
    if (options.choice) this.choice = options.choice;
    this.class = options.options.class || "";
    this.id = options.options.id || "";
    this.name = options.options.name || "";
    this.value = false;

    this.element = null;
    this.#_render();
  }
  #_render() {
    const label = $(`
        <label>
            <input
            type="radio"
            class="${this.class}"
            id="${this.id}"
            value="${this.value}"
            name="${this.name}" />
                ${this.choice}
        </label>`);
    this.element = label;
    // label.appendTo("body");
  }
}
