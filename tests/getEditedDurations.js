
function getEditedDurations(durationInputs) {

    let customPeriods = [];
    let customPeriodDurations = [];

    // durationInputs = removeLunches(durationInputs);
    const defaultDurations = [5, 42, 42, 42, 13, 13, 13, 42, 42];

    if (defaultDurations.length != durationInputs.length) {
        return console.error("Cannot compare durations because they are not the same length ");
    }

    else {
        for (let i = 0; i < defaultDurations.length; i++) {

            if ((defaultDurations[i] - durationInputs[i]) != 0) {
                
                customPeriods.push(i);
                customPeriodDurations.push(durationInputs[i])

            }

        }
    }

    return [customPeriods, customPeriodDurations];
}

console.log(getEditedDurations([40, 30, 42, 42, 13, 13, 13, 42, 42]))