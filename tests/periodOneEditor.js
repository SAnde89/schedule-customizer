var changed_periods = [false, false, false, false, false, false, false, false];
var newPeriodOne = 40; 
const defaultDurations = [5, 42, 42, 42, 13, 13, 13, 42, 42];


function periodOne(newPeriodOne, durations, changed_periods) {

    let new_periodOne = newPeriodOne;

    //int originalP1Time = 42;
    //slot 3 currently holds period 1
    if (new_periodOne > durations[4])
    {

        //time that needs to be taken from other periods
        //slot 3 currently holds period 1
        let timeTaken = new_periodOne - durations[4];
        let timeCounter = 0;

        while (timeCounter <= timeTaken) {

            for(let i = 1; (i<=3 || (i > 4 && i < durations.length) ) && changed_periods[4] == false; i++) {

                timeCounter++;

                if (timeCounter > timeTaken)
                {

                    break;
                }

                durations[i]--;
            }
        }

        changed_periods[4] = true;

    }
    // end of first if statement

    if (new_periodOne < durations[4])
    {
        //time needed to be given to the other periods
        let timeGiven = durations[4] - new_periodOne;

        let timeCounter2 = 0;

        while ( timeCounter2 <= timeGiven) {


            for (let i = 1; i<=3 || (i>4 && i < durations.length);i++)
            {
                timeCounter2++;

                if (timeCounter2 > timeGiven)
                {
                    break;

                }

                durations[i]++;


            }


        }

        changed_periods[4] = true;

    }

    durations[4] = new_periodOne;

    return durations;

}

output = periodOne(newPeriodOne, defaultDurations, changed_periods)
console.log(output)