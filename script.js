// all cases work for timeFrameCalculation  

function timeFrameCalculation(durations) {
    let startTime = 740; 
    const passingTime = 5; 
    let endTimeAdded; 
    let timeFrames = [];

    for (let i = 0; i < durations.length; i++) {
        
        endTimeAdded = startTime + durations[i];

        if (endTimeAdded % 100 >= 60 || durations[i] >= 60) {

            let u = (endTimeAdded % 100); 
            endTimeAdded -= (endTimeAdded % 100);
            endTimeAdded += 100; 
            endTimeAdded += (u - 60);

        }

        if ( ((endTimeAdded/100) | 0) > 12) {

            endTimeAdded -= 1200;

        } 

        timeFrames.push(((startTime | 0) + " - " + (endTimeAdded | 0)));

        startTime = endTimeAdded + passingTime;

        if (startTime % 100 >= 60) {
            
            let h = (startTime % 100); 
            startTime -= (startTime % 100);
            startTime += 100; 
            startTime += (h - 60);

        }

        if (((startTime/100) | 0) > 12) {
            startTime -= 1200;
        }

    }    

    return timeFrames;

}



////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////



function homeroomEditor(newHomeroom) {


    const defaultDurations = [5, 42, 42, 42, 13, 13, 13, 42, 42];
    const defaultHomeroom = defaultDurations[0];

    if (newHomeroom > defaultHomeroom) {
       
        let timeTaken = (newHomeroom - defaultHomeroom);
        let timeCounter = 0;

        while (timeCounter <= timeTaken) {
        for (let i = 1; i < defaultDurations.length; i++) {

            timeCounter++;

            if (timeCounter > timeTaken) {
            break;
            }

            defaultDurations[i]--;

        }

        }

    }

    else if (defaultHomeroom > newHomeroom) {
        
        let timeGiven = (defaultHomeroom - newHomeroom);
        let timeCounter2 = 0;

        while  (timeCounter <= timeGiven) {

        for (let i = 0; i < defaultDurations.length; i++) {
            timeCounter2++;

            if (timeCounter2 > timeGiven) {
            break;
            }

            defaultDurations[i]++;

        }

        }

    }

    else {}

    defaultDurations[0] = newHomeroom;

    return defaultDurations;

}



////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////



// useless ass functions

function removeLunches(item) {
    if (item != 24) {
        return item
    }
}

function insertLunchPeriods(durations) {
    
    const lunchDurations = 24; 
    const lunchPeriods = [4, 6, 8, 10];
    
    // didn't use a for loop because i get a TypeError and im lazy as fuck to change it
    durations.splice(lunchPeriods[0], 0, lunchDurations);
    
    durations.splice(lunchPeriods[1], 0, lunchDurations);
    
    durations.splice(lunchPeriods[2], 0, lunchDurations);
    
    durations.splice(lunchPeriods[3], 0, lunchDurations);

    return durations;
    
}

// inserts a colon thing
function timeFrameFormat(timeFrames) {

    let formattedTimeFrames = [];
    
    const insert = (str, index, value) => {
        return str.substr(0, index) + value + str.substr(index);
    }

    for (let i = 0; i < timeFrames.length; i++) {

        let framesSep = timeFrames[i].split(" ");
        
        if (framesSep[0].length == 3) {

            framesSep[0] = insert(framesSep[0], 1, ":")
            
        }

        else if (framesSep[0].length == 4) {
            
            framesSep[0] = insert(framesSep[0], 2, ":");

        }

        if (framesSep[2].length == 3) {

            framesSep[2] = insert(framesSep[2], 1, ":");

        }

        else if (framesSep[2].length == 4) {

            framesSep[2] = insert(framesSep[2], 2, ":");

        }

        formattedTimeFrames.push(framesSep.join(" "))

    }


    return formattedTimeFrames;

}



////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////



// *** function linked for onclick() *** //

function calculate() {
    var durationInputs = [];
    var inputs = document.getElementsByTagName('input');
     
    for (var index = 0; index < inputs.length; ++index) {
        let strippedDuration = Number(((inputs[index].value).split(" "))[0]);
        durationInputs.push(strippedDuration);
    }

    // filtered out lunches for homeroomEditor method
    durationInputs = durationInputs.filter(removeLunches); 

    // changed all period durations based on updated homeroom duration
    let updatedDurations = homeroomEditor(durationInputs[0]);

    // inserting lunch periods for frame calculation method
    updatedDurations = insertLunchPeriods(updatedDurations);

    // converting durations into timeframes
    let updatedTimeFrames = timeFrameCalculation(updatedDurations);
    updatedTimeFrames = timeFrameFormat(updatedTimeFrames);


    // updating frontend with variables 
    const trList = document.querySelectorAll("tr");

    for (let i = 0; i < trList.length; i++) {
        trList[i + 1].children[1].innerHTML = updatedTimeFrames[i]
        console.log(trList[i + 1].children[2].firstChild.value = updatedDurations[i] + " minutes")
    }


}