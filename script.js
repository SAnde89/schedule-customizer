////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
    /// CODE CREDIT: Pranav Viayananth, Sairam Ande ///
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

// default durations
const defaultDurations = [5, 42, 42, 42, 24, 13, 24, 13, 24, 13, 24, 42, 42];

// setting global compare durations variable
var  compareDurations = defaultDurations;

// universal array to keep track of main schedule durations
var mainScheduleDurations = [5, 13, 13, 13, 42, 42, 42, 42, 42, 24, 24, 24, 24];

// tracking changed periods 
var changed_periods = [false, false, false, false, false, false, false, false, false];

// all cases work for timeFrameCalculation  

function timeFrameCalculation(durations) {
    let startTime = 740; 
    const passingTime = 5; 
    let endTimeAdded; 
    let timeFrames = [];

    for (let i = 0; i < durations.length; i++) {
        
        endTimeAdded = startTime + durations[i];

        if (endTimeAdded % 100 >= 60 || durations[i] >= 60) {

            let u = (endTimeAdded % 100); 
            endTimeAdded -= (endTimeAdded % 100);
            endTimeAdded += 100; 
            endTimeAdded += (u - 60);

        }

        if ( ((endTimeAdded/100) | 0) > 12) {

            endTimeAdded -= 1200;

        } 

        timeFrames.push(((startTime | 0) + " - " + (endTimeAdded | 0)));

        startTime = endTimeAdded + passingTime;

        if (startTime % 100 >= 60) {
            
            let h = (startTime % 100); 
            startTime -= (startTime % 100);
            startTime += 100; 
            startTime += (h - 60);

        }

        if (((startTime/100) | 0) > 12) {
            startTime -= 1200;
        }

    }    

    return timeFrames;

}



////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////



function homeroomEditor(newHomeroom) {

    const defaultDurations = [5, 13, 13, 13 , 42, 42, 42, 42, 42];
    const defaultHomeroom = defaultDurations[0];

    if (newHomeroom > defaultHomeroom) {
       
        let timeTaken = (newHomeroom - defaultHomeroom);
        let timeCounter = 0;

        while (timeCounter <= timeTaken) {
        for (let i = 1; i < 9; i++) {

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

        for (let i = 0; i < 9; i++) {
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



////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


function getEditedDurations(durationInputs, compareDurationInputs) {

    let customPeriods = [];
    let customPeriodDurations = [];

    // durationInputs = removeLunches(durationInputs);

    if (compareDurationInputs.length != durationInputs.length) {
        return console.error("Cannot compare durations because they are not the same length ");
    }

    else {
        for (let i = 0; i < compareDurationInputs.length; i++) {

            if ((compareDurationInputs[i] - durationInputs[i]) != 0) {
                
                customPeriods.push(i);
                customPeriodDurations.push(durationInputs[i])

            }

        }
    }

    return [customPeriods, customPeriodDurations];
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////



function periodOne(newPeriodOne, durations, changed_periods) {

    let new_periodOne = newPeriodOne;

    if (new_periodOne > durations[4])
    
    {

        let timeTaken = new_periodOne - durations[4];
        let timeCounter = 0;

        while (timeCounter <= timeTaken) {

            for (let i = 1; (i<=3 || (i > 4 && i < 9) ) && changed_periods[i] == false; i++) {

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

    if (new_periodOne < durations[4])
    {

        let timeGiven = durations[4] - new_periodOne;

        let timeCounter2 = 0;

        while ( timeCounter2 <= timeGiven) {


            for (let i = 1; i<=3 || (i>4 && i < 9) && changed_periods[i] == false; i++)
            
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



////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////



function periodTwo(newPeriodTwo, durations, changed_periods) {
		
		if (newPeriodTwo > durations[5])
		
        {
			
			let timeTaken = newPeriodTwo - durations[5];

			let timeCounter = 0;
			
			while (timeCounter <= timeTaken)
			
            {
				for(let i = 1; ((i<5 &&i>5) || (i < 9)) && changed_periods[i] == false; i++)
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
					
					for(let i = 1;(i<5 && i>5) ||(i < 9)  && changed_periods[i] == false; i++)
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



////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////



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



////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////



function periodEleven(newPeriodEleven, durations, changed_periods) {
		
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



///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////



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

function periodOdd(newOddPeriod, durations, changed_periods) {
    
        let currentOddTime = durations[1];
		
		if (newOddPeriod > currentOddTime) {
            let timeTaken = (newOddPeriod*3)  - (currentOddTime*3) ;
			
			
			let timeCounter2 = 0;
			
			while (timeCounter2<=timeTaken)
			
            {
				
				
				for(let i = 9; i < durations.length; i++)	
				{
					timeCounter2++;
					
					if(timeCounter2>timeTaken)
					
                    {
						break;
						
					}
				
                    durations[i]--;
					
					
				}
				
				
			}
			
		}
		
		if(newOddPeriod < currentOddTime) {

			let timeGiven = (currentOddTime *3) - (newOddPeriod * 3);

			let timeCounter2 = 0;
			
			while (timeCounter2<=timeGiven) {

				
				for(let i = 9; i < durations.length ;i++) {
					
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


///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


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
    
    durations[9] = newLunchPeriod;
    durations[10] = newLunchPeriod;
    durations[11] = newLunchPeriod;
    durations[12] = newLunchPeriod;
    
    return durations;

}


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////



/// useless ass functions

function removeLunches(item) {
    if (item != 24) {
        return item
    }
}

/// inserts lunch periods into respective index

function insertLunchPeriods(durations) {

    for (let i = 0; i < 4; i++) {
        durations.push(24); 
    
    }

    return durations;
    
}

// inserts a colon thing

function timeFrameFormat(timeFrames) {

    let formattedTimeFrames = [];
    
    const insert = (str, index, value) => {
        return str.substr(0, index) + value + str.substr(index);
    }

    for (let i = 0; i < timeFrames.length; i++) {

        let framesSep = timeFrames[i].split(" ");
        
        if (framesSep[0].length == 3) {

            framesSep[0] = insert(framesSep[0], 1, ":")
            
        }

        else if (framesSep[0].length == 4) {
            
            framesSep[0] = insert(framesSep[0], 2, ":");

        }

        if (framesSep[2].length == 3) {

            framesSep[2] = insert(framesSep[2], 1, ":");

        }

        else if (framesSep[2].length == 4) {

            framesSep[2] = insert(framesSep[2], 2, ":");

        }

        formattedTimeFrames.push(framesSep.join(" "))

    }


    return formattedTimeFrames;

}

/// rearranges the durations for proper output

function rearrangeDurations(durations) {
    
    let output_durations = [];

    output_durations[0] = durations[0];
    output_durations[1] = durations[4];
    output_durations[2] = durations[5];
    output_durations[3] = durations[6];
    output_durations[5] = durations[1];
    output_durations[7] = durations[2];
    output_durations[9] = durations[3];
    output_durations[11] = durations[7];
    output_durations[12] = durations[8];
    
    // rearranging lunches

    output_durations[4] = durations[9];
    output_durations[6] = durations[10]; 
    output_durations[8] = durations[11];
    output_durations[10] = durations[12]
     
    const filtered = output_durations.filter(function (el) {
        return el != null;
    });
    
    return filtered;

}  

/// inserts lunches at the end of the array for calculation

function insertLunchforCalculation(durations) {

    for (let i = 0; i < 4; i++) {
        durations.push(24);
    }

    return durations;

}



////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////



function calculate() {

    var durationInputs = [];
    var inputs = document.getElementsByTagName('input');
     
    for (var index = 0; index < inputs.length; ++index) {
        let strippedDuration = Number(((inputs[index].value).split(" "))[0]);
        durationInputs.push(strippedDuration);
    }

    console.log("Initial duration inputs: " + durationInputs)

    // getting list of edited periods
    let listOfEditedPeriods = getEditedDurations(durationInputs, compareDurations);
    console.log("These are all the periods that were changed and their duration change: " + listOfEditedPeriods);
    
    // universal array for the schedule output 
    // let mainScheduleDurations = [5, 13, 13, 13 , 42, 42, 42, 42, 42, 24, 24, 24, 24];

    //logic for changing the schedule based on period changes
    for (let i = 0; i < listOfEditedPeriods[0].length; i++) { 
 
        if (listOfEditedPeriods[0][i] == 0) {
            mainScheduleDurations = homeroomEditor(listOfEditedPeriods[1][i])
            mainScheduleDurations = insertLunchPeriods(mainScheduleDurations);
            continue;
        }

        if (listOfEditedPeriods[0][i] == 1) {

            mainScheduleDurations = periodOne(

                listOfEditedPeriods[1][i],
                mainScheduleDurations, 
                changed_periods

            )
            
            continue;
        }

        if (listOfEditedPeriods[0][i] == 2) {
            mainScheduleDurations = periodTwo(
                listOfEditedPeriods[1][i],
                mainScheduleDurations, 
                changed_periods
                
            )
            
            continue;
        }

        if (listOfEditedPeriods[0][i] ==  3) {
            mainScheduleDurations = periodThree(
                listOfEditedPeriods[1][i],
                mainScheduleDurations,
                changed_periods
            )
            
            continue;
        }

        if (listOfEditedPeriods[0][i] == 4) {
            mainScheduleDurations = lunchEditor(
                listOfEditedPeriods[1][i], 
                mainScheduleDurations, 
                changed_periods
            )

            continue;
        }

        if (listOfEditedPeriods[0][i] == 5) {
            mainScheduleDurations = periodOdd(
                listOfEditedPeriods[1][i],
                mainScheduleDurations,
                changed_periods
            )
           
            continue;

        }

        if (listOfEditedPeriods[0][i] == 6) {
            mainScheduleDurations = lunchEditor(
                listOfEditedPeriods[1][i], 
                mainScheduleDurations, 
                changed_periods
            )

            continue;
        }

        if (listOfEditedPeriods[0][i] == 7) {
            mainScheduleDurations = periodOdd(
                listOfEditedPeriods[1][i],
                mainScheduleDurations,
                changed_periods
            )
           
            continue;
        }

        if (listOfEditedPeriods[0][i] == 8) {
            mainScheduleDurations = lunchEditor(
                listOfEditedPeriods[1][i], 
                mainScheduleDurations, 
                changed_periods
            )

            continue;
        }

        if (listOfEditedPeriods[0][i] == 9) {
            mainScheduleDurations = periodOdd(
                listOfEditedPeriods[1][i],
                mainScheduleDurations,
                changed_periods
            )
         
            continue;
        }
    
        if (listOfEditedPeriods[0][i] == 10) {
            mainScheduleDurations = lunchEditor(
                listOfEditedPeriods[1][i], 
                mainScheduleDurations, 
                changed_periods
            )

            continue;
        }

        if (listOfEditedPeriods[0][i] == 11) {
            mainScheduleDurations = periodEleven(
                listOfEditedPeriods[1][i], 
                mainScheduleDurations,
                changed_periods
            )
            continue;
        }

        if (listOfEditedPeriods[0][i] == 12) {
            mainScheduleDurations = periodTwelve(
                listOfEditedPeriods[1][i],
                mainScheduleDurations,
                changed_periods
            )
            continue;
        }

     

        else {
            
            break
        
        }
   
    } 
  
    // printing out raw durations without any function changes
    console.log("This is the raw schedule durations without any function changes " + mainScheduleDurations);

    
    // rearrange order of durations for printing to website 
    let rearrangedDurations = rearrangeDurations(mainScheduleDurations);
    console.log("These are the rearranged durations: " + rearrangedDurations)
    
    // setting the new schedule durations to the compare durations variable
    compareDurations = rearrangedDurations;

    // converting durations into time frames
    let updatedTimeFrames = timeFrameCalculation(rearrangedDurations);
    updatedTimeFrames = timeFrameFormat(updatedTimeFrames);
    console.log("The time frames for each period: " + updatedTimeFrames);

    // updating frontend with all local variables 
    const trList = document.querySelectorAll("tr");

      for (let i = 0; i < trList.length; i++) {
        trList[i + 1].children[1].innerHTML = updatedTimeFrames[i];
        trList[i + 1].children[2].firstChild.value = rearrangedDurations[i] + " minutes";
    } 

}
