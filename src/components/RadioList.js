"use strict";

import { RadioField } from "./RadioField.js";

export class RadioList{
    constructor(options){
        this.class = options.listOptions.class || "";
        this.id = options.listOptions.id || "";
        this.name = options.listOptions.class || "";
        this.choicesList = [];
        this.choicesValus = [];
        this.container=this.id?document.getElementById(options.listOptions.id):null;
        this.#_insertList(options.choices)
    }
    #_insertList(choices){
        if(choices.length>0){
            for(let choice of choices){
                this.choicesList.push(new RadioField(choice))
            }
        }
        this.#_renderList(this.container)
    }
    #_renderList(container="body"){
        if(container)this.container=  $(container);
        else this.container=$("body")
        if(this.choicesList.length>0){
            for(let choice of this.choicesList){
                choice.element.appendTo(container)
            }
            this.container.addClass(this.class);
        }
    }
}