function periodThree(newPeriodThree, durations, changed_periods ) {
    
    if (newPeriodThree > durations[6]) {
        
        let timeTaken = newPeriodThree - Integer(durations[6]);
        let timeCounter = 0;
        
        while(timeCounter<=timeTaken) { 
            for(let i = 1; ((i<6 &&i>6) || (i<9)) && changed_periods[i]==false;i++) {
                
                timeCounter++;
                
                if(timeCounter>timeTaken)
               
                {
                    
                    break;
                    
                }
                
                durations[i]--;
                
                
            }
               
        }        
        
    }
    
     if (newPeriodThree < durations[6]) {

            let timeGiven = durations[6] - newPeriodThree;
            
            let timeCounter2 = 0;
            
            while (timeCounter2<=timeGiven) {
                
                for(let i = 1;(i<6 && i>6) ||(i<9)  && changed_periods[i]==false;i++)
                {
                    timeCounter2++;
                    
                    if( timeCounter2>timeGiven) {
                        break;
                        
                    }
                    
                    durations[i]++;
                    
                }
                
            }
            
        }
         
         changed_periods[6] = true;
         durations[6] = newPeriodThree;
    
    return durations;
    
}

const defaultDurations = [5, 13, 13, 13 , 42, 42, 42, 42, 42, 24, 24, 24, 24];
var changed_periods = [false, false, false, false, false, false, false, false, false];
let  output = periodThree(30, defaultDurations, changed_periods);

console.log(output);
