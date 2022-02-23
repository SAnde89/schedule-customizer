function rearrangeDurations(durations) {
    
    let output_durations = [];

    output_durations[1] = durations[4];
    output_durations[2] = durations[5];
    output_durations[3] = durations[6];
    output_durations[5] = durations[1];
    output_durations[7] = durations[2];
    output_durations[9] = durations[3];
    output_durations[11] = durations[7];
    output_durations[12] = durations[8];
    output_durations[0] = durations[0]

    const filtered = output_durations.filter(function (el) {
        return el != null;
    });
    

    return filtered;

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




let ans = rearrangeDurations([5, 15, 15, 15, 44, 30, 43, 43, 43])
console.log(ans)
let other_ans = insertLunchPeriods(ans);

console.log(ans.toString());