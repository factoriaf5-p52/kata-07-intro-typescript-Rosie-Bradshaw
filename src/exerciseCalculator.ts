interface ResultObject {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number 
}

let trainingHoursArray:number[]=[3, 0, 2, 4.5, 0, 3, 1];
let target:number = 2;


//period length
let periodLength = trainingHoursArray.length;
console.log(periodLength);

//training days
function trainingDays(trainingHoursArray:number[]){
    let totalTrainingDays:number = 0;
    for (let trainingHours of trainingHoursArray) {
        if (trainingHours !=0) {
            totalTrainingDays += 1;
        }
    }
    console.log(totalTrainingDays);  
    return totalTrainingDays;
}
trainingDays(trainingHoursArray);


//average = periodTrainingHours/periodLength
function periodTrainingHours(trainingHoursArray:number[]){
    let totalTrainingHours:number = 0;
    for (let trainingHours of trainingHoursArray) {
        totalTrainingHours += trainingHours;
    }
    return totalTrainingHours;
}
periodTrainingHours(trainingHoursArray);

let average = periodTrainingHours(trainingHoursArray)/periodLength;
console.log(average);


//success
function success(trainingHoursArray:number[], target:number):boolean{
    if (average>target || average === target) return true; 
    else return false;
    
};
success(trainingHoursArray, target);
console.log(success(trainingHoursArray, target));

//rating
function rating(trainingHoursArray:number[], target:number):number{
    if (average>target || average === target) return 3; 
    else if (average > target-1 && average < target) return 2; 
    else return 1;
};
rating(trainingHoursArray, target);
console.log(rating(trainingHoursArray, target));


//rating description
function ratingDescription(trainingHoursArray:number[], target:number):string{
    if (rating(trainingHoursArray, target) == 3) return 'well done';
    else if (rating(trainingHoursArray, target) == 2) return 'not too bad but could be better';
    else if (rating(trainingHoursArray, target) == 1) return 'try harder';
    else return 'undefined';
}
ratingDescription(trainingHoursArray, target);
console.log(ratingDescription(trainingHoursArray, target));


//calculate exercises
function calculateExercises (trainingHoursArray:number[], target:number) : ResultObject {
    this.periodLength=periodLength, this.trainingDays=trainingDays, this.success=success, this.rating=rating, this.ratingDescription=ratingDescription, this.target=target, this.average=average};
    console.log(calculateExercises(trainingHoursArray, target));

calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2);



// 9.2 Exercise calculator
// Create the code of this exercise in file exerciseCalculator.ts.

// Write a function calculateExercises that calculates the average time of daily exercise hours and compares it to the target amount of daily hours and returns an object that includes the following values:

// the number of days
// the number of training days
// the original target value
// the calculated average time
// boolean value describing if the target was reached
// a rating between the numbers 1-3 that tells how well the hours are met. You can decide on the metric on your own.
// a text value explaining the rating
// The daily exercise hours are given to the function as an array that contains the number of exercise hours for each day in the training period. Eg. a week with 3 hours of training on Monday, none on Tuesday, 2 hours on Wednesday, 4.5 hours on Thursday and so on would be represented by the following array:

// [3, 0, 2, 4.5, 0, 3, 1]
// For the Result object, you should create an interface.

// If you call the function with parameters [3, 0, 2, 4.5, 0, 3, 1] and 2, it should return:

// { periodLength: 7,
//   trainingDays: 5,
//   success: false,
//   rating: 2,
//   ratingDescription: 'not too bad but could be better',
//   target: 2,
//   average: 1.9285714285714286 }
// Create a npm script, npm run calculateExercises, to call the function with hard-coded values.

