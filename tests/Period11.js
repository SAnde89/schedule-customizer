
function period11(newPeriodEleven, durations, changed_periods) {
		
    if (newPeriodEleven > durations[7])
    {
        
        let timeTaken = newPeriodEleven - durations[7];
        let timeCounter = 0;
        
        while (timeCounter<=timeTaken)
        {

            for(let i = 1;( (i<7 &&i>7) || (i<9)) && changed_periods[i]==false;i++) {
                
                timeCounter++;
                
                if(timeCounter>timeTaken)
                {
                    
                    break;
                    
                }
                
                durations[i]--;
                
                
            }

        }
        
    }
    
     if (newPeriodEleven < durations[7])
        {

            let timeGiven = durations[7] - newPeriodEleven;
            
            let timeCounter2 = 0;
            
            while (timeCounter2<=timeGiven) {
                
                //System.out.println("lengt:h: " + per.length);
                for(let i = 1;(i<7 && i>7) ||(i<9)  && changed_periods[i]==false;i++)
                {
                    timeCounter2++;
                    
                    if(timeCounter2>timeGiven)
                    {
                        break;
                        
                    }
                    durations[i]++;
                    
                    
                }
                
                
            }
            
            
        }
         
         //per[5] = newP2;
         changed_periods[7] = true;
         durations[7] = newPeriodEleven;
    
    
    return durations;
}


const defaultDurations = [5, 13, 13, 13 , 42, 42, 42, 42, 42, 24, 24, 24, 24];
var changed_periods = [false, false, false, false, false, false, false, false, false];
let  output = period11(40, defaultDurations, changed_periods);

console.log(output);