// IMPORT FOR CALCULATING TIME PHRASES

const schedule = require('./schedule')

// DOM CODE 

function get_scheduleVars() {
    var inputs = document.getElementsByTagName('input');
     
    for (var index = 0; index < inputs.length; ++index) {
        console.log(inputs[index].value)
    }
}

