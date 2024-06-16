"use strict";

import { RadioField } from "./components/RadioField.js";
import { RadioList } from "./components/RadioList.js";

const subjs=[
    {
        choice:"Arabic",
        options:{
            name:"subject",
            class:"Arabic",
            Id:"Arabic"
        }
    },
    {
        choice:"Biology",
        options:{
            name:"subject",
            class:"",
            Id:""
        }
    },
    {
        choice:"English",
        options:{
            name:"subject",
            class:"",
            Id:""
        }
    },
    {
        choice:"Math",
        options:{
            name:"subject",
            class:"",
            Id:""
        }
    },
    {
        choice:"Physics",
        options:{
            name:"subject",
            class:"",
            Id:""
        }
    },
]
const radioOprions={
    choices:subjs,
    listOptions:{
        class:"subj",
        id:"subjects",
        name:"subj",
    }
}
const radio= new RadioList(radioOprions);
export {
    RadioField,
    RadioList
}