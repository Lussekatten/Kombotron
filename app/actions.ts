import statsWinnings from '@/data/underlag-utdelningar.json';
import statsNumbers from '@/data/latest1000drawings.json';

export default function getAverageStats(): number[] {
    let arr: Array<number> = [0, 0, 0];
    let sumSeven: number = 0;
    let winnersSeven: number = 0;
    let avgSeven: number = 0;
    let firstWinAsString: string;

    let sumSixPlusOne: number = 0;
    let winnersSixPlusOne: number = 0;
    let avgSixPlusOne: number = 0;
    let secondWinAsString: string;

    let sumSix: number = 0;
    let winnersSix: number = 0;
    let avgSix: number = 0;
    let thirdWinAsString: string;

    for (let index = 0; index < statsWinnings.length; index++) {
        firstWinAsString = statsWinnings[index]['7-rätt-vinst']; //number with a dot
        if (firstWinAsString.length == 1) {
            //it means the win is "0"
            arr[0] = 0;
        }
        else {
            var firstWinAsNumber: number = +firstWinAsString;
            var firstWinWinners: number = +statsWinnings[index]['7-rätt-antal'];
            let tempSum = firstWinAsNumber * firstWinWinners;
            winnersSeven += firstWinWinners;
            sumSeven += tempSum;
        }
        secondWinAsString = statsWinnings[index]['6-plus-vinst']; //number with a dot
        var secondWinAsNumber: number = +secondWinAsString;
        var secondWinWinners: number = +statsWinnings[index]['6-plus-antal'];
        winnersSixPlusOne += secondWinWinners;
        let tempSum = secondWinAsNumber * secondWinWinners;
        sumSixPlusOne += tempSum;

        thirdWinAsString = statsWinnings[index]['6-rätt-vinst']; //number with a dot
        var thirdWinAsNumber: number = +thirdWinAsString;
        var thirdWinWinners: number = +statsWinnings[index]['6-rätt-antal'];
        winnersSix += thirdWinWinners;
        let temp3Sum = thirdWinAsNumber * thirdWinWinners;
        sumSix += temp3Sum;
    }
    avgSeven = sumSeven / winnersSeven;
    avgSixPlusOne = sumSixPlusOne / winnersSixPlusOne;
    avgSix = sumSix / winnersSix;
    arr[0] = avgSeven;
    arr[1] = avgSixPlusOne;
    arr[2] = avgSix;
    return arr;
}

export function getStatsForNumber(nr: string = '1'): number {
    let counter = 0;
    for (let i = 0; i < statsNumbers.length; i++) {
        //Split string into array of numbers;
        let arr: Array<string> = statsNumbers[i].combination.split(',');
        //Detect if number 1 is in there
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == nr) {
                counter++;
            }
        }
    }
    return counter;
}

export function getAbsenceStatsForNumber(nr: string = '1'): number {
    //let counter = 0;
    let maxAbsenceCounter: number = 0;
    let currentAbsenceCounter: number = 0;
    let found: boolean = false;
    let currentIndex: number = 0;

    for (let i = 0; i < statsNumbers.length; i++) {
        //Split string into array of numbers;
        let arr: Array<string> = statsNumbers[i].combination.split(',');
        //Detect if number 1 is in there
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == nr) {
                found = true;
                break;
            }
        }
        if (found) {
            //Reset the absence counter
            //Check which one is bigger and update the max value if needed
            if (maxAbsenceCounter < currentAbsenceCounter) {
                maxAbsenceCounter = currentAbsenceCounter;
                currentIndex = i;
            }
            found = false;
            currentAbsenceCounter = 0;
        }
        else {
            currentAbsenceCounter++;
        }
    }
    return maxAbsenceCounter;
}

export function getAbsencePatternForNumber(nr: string = '1'): string {
    //let counter = 0;
    let maxAbsenceCounter: number = 0;
    let currentAbsenceCounter: number = 0;
    let found: boolean = false;
    let counterSkip: number = 0;
    let absencePattern: string = '';

    for (let i = 0; i < statsNumbers.length; i++) {
        //Split string into array of numbers;
        let arr: Array<string> = statsNumbers[i].combination.split(',');
        //Detect if number 1 is in there
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == nr) {
                found = true;
                break;
            }
        }
        if (found) {
            //Reset the absence counter
            //Check which one is bigger and update the max value if needed
            if (maxAbsenceCounter < currentAbsenceCounter) {
                maxAbsenceCounter = currentAbsenceCounter;
            }
            //Add the new absence period to the pattern
            absencePattern += currentAbsenceCounter;
            absencePattern += ' ';
            found = false;
            currentAbsenceCounter = 0;
        }
        else {
            currentAbsenceCounter++;
        }
        //Save the last absence period as well
        if (i == statsNumbers.length - 1) {
            absencePattern += currentAbsenceCounter;
        }
    }
    return absencePattern;
}

export function getGroupingStats(): string[] {
    let arr: Array<string> = [];
    let sumSeven: number = 0;
    let winnersSeven: number = 0;
    let counterSkip: number = statsNumbers.length - 10;
    let absencePattern: string = '';

    for (let i = 0; i < statsNumbers.length; i++) {
        //Skip until 100 left, when i becomes larger or equal to counterSkip
        if (i >= counterSkip) {
            //unprocessed
            arr[i] = statsNumbers[i].combination;
        }
    }
    return arr;
}