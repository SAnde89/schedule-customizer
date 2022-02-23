function periodTwelve(newPeriodTwelve, durations, changed_periods) {
		
    if(newPeriodTwelve > durations[8]) {
        
        let timeTaken = newPeriodTwelve - durations[8];
        let timeCounter = 0;
        
        while(timeCounter<=timeTaken) {

            for(let i = 1;( (i<8 &&i>8) || (i<9)) && changed_periods[i]==false;i++)
            {
                
                timeCounter++;
                
                if(timeCounter>timeTaken)
                {
                    
                    break;
                    
                }
                
                durations[i]--;
                
                
            }
            
            
            
        }
        
        
    }
    
     if(newPeriodTwelve < durations[8]) {

            let timeGiven = durations[8] - newPeriodTwelve;
            
            let timeCounter2 = 0;
            
            while (timeCounter2<=timeGiven) {
                
                for (let i = 1;(i<8 && i>8) ||(i<9)  && changed_periods[i]==false;i++)
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
         
         changed_periods[8] = true;
         durations[8] = newPeriodTwelve;
    
    
    return durations;
}

const defaultDurations = [5, 13, 13, 13 , 42, 42, 42, 42, 42, 24, 24, 24, 24];
var changed_periods = [false, false, false, false, false, false, false, false, false];
let output = periodTwelve(30, defaultDurations, changed_periods);
console.log(output)