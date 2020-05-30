true === function () {

    const average = function (numOfDays) {

        let LowestLow = [ih][0].PriceMin;
        let highestHigh = [ih][0].PriceMax;

        for (let i = 0; i < numOfDays; i++) {
            if ([ih][i].PriceMin === 0) {
                numOfDays++;
            } else {
                if (LowestLow > [ih][i].PriceMin) {
                    LowestLow = [ih][i].PriceMin;
                } else if (highestHigh < [ih][i].PriceMax) {
                    highestHigh = [ih][i].PriceMax;
                }
            }
        }

        return [highestHigh,LowestLow];
    };

    const kijunSen = average(26);

    (cfield0) = "hh:" + kijunSen[0];
    (cfield1) = "av:" + ((kijunSen[0]+ kijunSen[1])/2);
    (cfield2) = "ll:" + kijunSen[1];


    return true;
}();