// Expected time in minutes that the lasagna should be in the oven
export const EXPECTED_MINUTES_IN_OVEN = 40;

// Actual minutes the lasagna has been in the oven so far
const actualMinutesInOven = 30;

// Function to calculate the remaining minutes in the oven
function remainingMinutesInOven(actualMinutesInOven){
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven

};

// Number of layers in the lasagna
const numberOfLayers = 2;

// Function to calculate preparation time in minutes (2 minutes per layer)
function preparationTimeInMinutes (numberOfLayers){
    return numberOfLayers * 2;

};

// Function to calculate total time in minutes (preparation + actual oven time)
function totalTimeInMinutes (numberOfLayers, actualMinutesInOven) {

   return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
};

// Calculate the total time spent
const timeSpent = totalTimeInMinutes(numberOfLayers, actualMinutesInOven)

// Log the total time to the console
console.log(timeSpent)