// VERSION 1.0

// function getEditedDurations(durationInputs) {

//     let customPeriods = [];
//     let customPeriodDurations = [];

//     // durationInputs = removeLunches(durationInputs);
//     const defaultDurations = [5, 42, 42, 42, 13, 13, 13, 42, 42];

//     if (defaultDurations.length != durationInputs.length) {
//         return console.error("Cannot compare durations because they are not the same length ");
//     }

//     else {
//         for (let i = 0; i < defaultDurations.length; i++) {

//             if ((defaultDurations[i] - durationInputs[i]) != 0) {
                
//                 customPeriods.push(i);
//                 customPeriodDurations.push(durationInputs[i])

//             }

//         }
//     }

//     return [customPeriods, customPeriodDurations];
// }

// console.log(getEditedDurations([40, 30, 42, 42, 13, 13, 13, 42, 42]))

// VERSION 2.0 


function getEditedDurations(durationInputs, compareDurationInputs) {

    let customPeriods = [];
    let customPeriodDurations = [];

    // durationInputs = removeLunches(durationInputs);

    if (compareDurationInputs.length != durationInputs.length) {
        return console.error("Cannot compare durations because they are not the same length ");
    }

    else {
        for (let i = 0; i < compareDurationInputs.length; i++) {

            if ((compareDurationInputs[i] - durationInputs[i]) != 0) {
                
                customPeriods.push(i);
                customPeriodDurations.push(durationInputs[i])

            }

        }
    }

    return [customPeriods, customPeriodDurations];
}

let output = getEditedDurations([40,40,40,40,24,8,24,8,24,8,24,38,38], [40,38,38,38,24,8,24,8,24,8,24,38,38])
console.log(output);