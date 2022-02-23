function homeroomEditor(newHomeroom) {

    const defaultDurations = [5, 13, 13, 13 , 42, 42, 42, 42, 42];
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

let ans = homeroomEditor(40);
console.log(ans);