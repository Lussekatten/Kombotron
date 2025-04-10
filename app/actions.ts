import stats from '@/data/underlag-utdelningar.json';

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
    
    for (let index = 0; index < stats.length; index++) {
        firstWinAsString = stats[index]['7-rätt-vinst']; //number with a dot
        if (firstWinAsString.length == 1) {
            //it means the win is "0"
            arr[0] = 0;
        }
        else {
            var firstWinAsNumber: number = +firstWinAsString;
            var firstWinWinners: number = +stats[index]['7-rätt-antal'];
            let tempSum = firstWinAsNumber * firstWinWinners;
            winnersSeven += firstWinWinners;
            sumSeven += tempSum;
        }
        secondWinAsString = stats[index]['6-plus-vinst']; //number with a dot
        var secondWinAsNumber: number = +secondWinAsString;
        var secondWinWinners: number = +stats[index]['6-plus-antal'];
        winnersSixPlusOne += secondWinWinners;
        let tempSum = secondWinAsNumber * secondWinWinners;
        sumSixPlusOne += tempSum;

        thirdWinAsString = stats[index]['6-rätt-vinst']; //number with a dot
        var thirdWinAsNumber: number = +thirdWinAsString;
        var thirdWinWinners: number = +stats[index]['6-rätt-antal'];
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