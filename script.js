// IMPORT FOR CALCULATING TIME PHRASES

const { homeroomEditor } = require('./schedule');
const schedule = require('./schedule')

homeroomEditor = schedule.homeroomEditor

// USELESS FUNC 

function removeLunches(item) {
    if (item != 24) {
        return item
    }
}

// DOM CODE 

function calculate() {
    var durationInputs = [];
    var inputs = document.getElementsByTagName('input');
     
    for (var index = 0; index < inputs.length; ++index) {
        let strippedDuration = Number(((inputs[index].value).split(" "))[0]);
        durationInputs.push(strippedDuration);
    }

    durationInputs = durationInputs.filter(removeLunches)

    


}

