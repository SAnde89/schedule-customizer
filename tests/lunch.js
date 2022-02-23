

function lunchEditor(newLunchPeriod, durations, changed_periods) {
    
    let currentLunchTime = durations[9];
    
    if(newLunchPeriod > currentLunchTime) {
        let timeTaken = (newLunchPeriod * 4) - (currentLunchTime *4);
        let timeCounter2 = 0;
        
        while(timeCounter2<=timeTaken) {
        
            for(let i = 1;i<4 ;i++)	 {
                timeCounter2++;
                
                if(timeCounter2>timeTaken)
                {
                    break;
                    
                }
                durations[i]--;
                
            }
            
            
        }
        
    }

    if (newLunchPeriod < currentLunchTime)
    
    {

        let timeGiven = (currentLunchTime *4) - (newLunchPeriod * 4) ;

        let timeCounter2 = 0;
        
        while(timeCounter2<=timeGiven)
        
        {
            
            for(let i = 1;i<4 ;i++)					
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
    
    durations[9] = newLunchTime;
    durations[10] = newLunchTime;
    durations[11] =newLunchTime;
    durations[12] = newLunchTime;
    
    return durations;

}

let ans = lunchEditor()
