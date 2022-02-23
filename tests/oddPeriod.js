function periodOdd(newOddPeriod, durations, changed_periods) {

		let currentOddTime = durations[1];
		
		
		//need to subtract from the odd periods
		if (newOddPeriod > currentOddTime)
		{
			let timeTaken = (newOddPeriod * 3)  - (currentOddTime*3) ;
			
			
			let timeCounter2 = 0;
			
			while(timeCounter2<=timeTaken)
			
			{
				
				
				for(let i = 9; i < durations.length;i++)	
				{
					timeCounter2++;
					
					if(timeCounter2>timeTaken)
					{
						break;
						
					}
					durations[i]--;
					
					
				}
				
				
			}
			
		}//end of first if statement
		
		//need to add to the odd periods
		if(newOddPeriod < currentOddTime)
		{
			//System.out.println("hhdhd");
            let timeGiven = (currentOddTime *3) - (newOddPeriod * 3) ;

			let timeCounter2 = 0;
			
			while(timeCounter2 >= timeGiven)
			{
				//System.out.println("hfhf");
				
				for(let i = 9; i<durations.length ;i++)					
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
		
		durations[1] = newOddPeriod;
		durations[2] = newOddPeriod;
		durations[3] = newOddPeriod;
	
		return durations;
		
		
}

let ans = periodOdd(15,  [5, 13, 13, 13, 42, 42, 42, 42, 42], null)

