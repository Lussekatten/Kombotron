import statsWinnings from '@/data/underlag-utdelningar.json';
import statsNumbers from '@/data/latest1000drawings.json';
import utdelningar from '@/data/underlag-utdelningar.json';
import { Group } from './types';

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

export function getGroupingStats(): Group[] {

    let counterSkip: number = statsNumbers.length - 20;
    let grpArr: Group[] = [];
    let chainEnded: boolean = true;
    let foundCounter = 0;


    for (let i = 0; i < statsNumbers.length; i++) {
        //Skip until the last 2 drawings, when "i" becomes larger or equal to "counterSkip"
        if (i >= counterSkip) {
            let grpCounter = 0;
            let clearToPrint = false;

            //unprocessed
            let grp: Group = new Group;
            let theChain: string[] = [];

            //Discover where the group is (if any)
            let numbers: Array<string> = statsNumbers[i].combination.split(',');
            for (let j = 0; j < numbers.length - 1; j++) {
                // startChaining = false;
                chainEnded = true;
                let currElem: number = +numbers[j];
                let nextElem: number = +numbers[j + 1];

                if ((currElem + 1) == nextElem) {
                    // startChaining = true;
                    clearToPrint = true;
                    chainEnded = false;
                    grpCounter++;
                    //If we are just starting a new chain, then add both numbers, otherwise only the second one
                    if (grpCounter == 1) {
                        theChain[grpCounter-1] = numbers[j] + '-' + numbers[j + 1];
                        // startChaining = false;
                    }
                    else {
                        theChain[grpCounter-2] += '-';
                        theChain[grpCounter-2] += numbers[j + 1];
                    }
                    //If we reached the end of the combination (where a comparison makes sense)
                    if (j == numbers.length - 2) {
                        chainEnded = true;
                        // startChaining = false;
                        if (theChain.length > 0) {
                            for (let n = 0; n < theChain.length; n++) {
                               grp.processed += theChain[n];
                            }
                        }
                        else {
                            grp.processed = ' - ';
                        }
                        break;
                    }
                }
                else {
                    chainEnded = true;
                    // startChaining = false;
                    if (chainEnded && clearToPrint) {
                        for (let t = 0; t < theChain.length; t++) {
                            grp.processed += theChain[t];
                            grp.processed += ', ';
                        }
                        // //trim the last ',  '
                        // let temp = grp.processed.slice(0, -1);
                        // // grp.processed = grp.processed.trimEnd();
                        // if (temp[temp.length-1]===',') {
                        //     grp.processed = temp.slice(0, -1);
                        // }
                        // else{
                        //     grp.processed = temp;
                        // }
                        clearToPrint = false;
                    }
                    grpCounter = 0;
                }
            }
            grp.id = foundCounter;
            grp.date = statsNumbers[i].date;
            grp.dragning = utdelningar[foundCounter].dragning;
            grp.original = statsNumbers[i].combination;
            grp.date = statsNumbers[i].date;      
            grpArr.push(grp);
            foundCounter++;
        }
    }
    return grpArr;
}