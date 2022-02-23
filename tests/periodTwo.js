function periodTwo(newPeriodTwo, durations, changed_periods) {
		
    if (newPeriodTwo > durations[5])
    
    {
        
        let timeTaken = newPeriodTwo - durations[5];

        let timeCounter = 0;
        
        while (timeCounter <= timeTaken)
        
        {
            for(let i = 1; ((i<5 &&i>5) || (i < durations.length)) && changed_periods[i] == false; i++)
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
    
     if (newPeriodTwo < durations[5])
        
     {
            //time needed to be given to the other periods
            let timeGiven = durations[5] - newPeriodTwo;
            
            let timeCounter2 = 0;
            
            while (timeCounter2 <= timeGiven)
            
            {
                
                for(let i = 1;(i<5 && i>5) ||(i < durations.length)  && changed_periods[i] == false; i++)
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
         changed_periods[5] = true;
         durations[5] = newPeriodOne;
    
    
    
    return durations;
    
}

function periodTwo(newPeriodTwo ,durations, changed_periods) {
		
    if (newPeriodTwo > durations[5])
    
    {
        
        let timeTaken = newPeriodTwo - durations[5];

        let timeCounter = 0;
        
        while (timeCounter <= timeTaken)
        
        {
            for(let i = 1; ((i<5 &&i>5) || (i < durations.length)) && changed_periods[i] == false; i++)
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
    
     if (newPeriodTwo < durations[5])
        
     {
            //time needed to be given to the other periods
            let timeGiven = durations[5] - newPeriodTwo;
            
            let timeCounter2 = 0;
            
            while (timeCounter2 <= timeGiven)
            
            {
                
                for(let i = 1;(i<5 && i>5) ||(i < durations.length)  && changed_periods[i] == false; i++)
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
         changed_periods[5] = true;
         durations[5] = newPeriodOne;
    
    
    
    return durations;
    
}
function periodTwo(newPeriodTwo ,durations, changed_periods) {
		
    if (newPeriodTwo > durations[5])
    
    {
        
        let timeTaken = newPeriodTwo - durations[5];

        let timeCounter = 0;
        
        while (timeCounter <= timeTaken)
        
        {
            for(let i = 1; ((i<5 &&i>5) || (i < durations.length)) && changed_periods[i] == false; i++)
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
    
     if (newPeriodTwo < durations[5])
        
     {
            //time needed to be given to the other periods
            let timeGiven = durations[5] - newPeriodTwo;
            
            let timeCounter2 = 0;
            
            while (timeCounter2 <= timeGiven)
            
            {
                
                for(let i = 1;(i<5 && i>5) ||(i < durations.length)  && changed_periods[i] == false; i++)
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
         changed_periods[5] = true;
         durations[5] = newPeriodTwo;
    
    
    
    return durations;
    
}

const defaultDurations = [5, 13, 13, 13 , 42, 42, 42, 42, 42];
var changed_periods = [false, false, false, false, false, false, false, false, false];

let ans = periodTwo(30, defaultDurations, changed_periods)
console.log(ans)