true === function () {

    const average = function (numOfDays) {

        let LowestLow = [ih][0].PriceMin;
        let highestHigh = [ih][0].PriceMax;

        for (let i = 0; i < numOfDays; i++) {
            if ([ih][i].PriceMin == 0 && [ih][i].PriceMax == 0) {
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

    const tenkanSen= average(9);

    (cfield0) = "hh:" + tenkanSen[0];
    (cfield1) = "av:" + ((tenkanSen[0]+ tenkanSen[1])/2);
    (cfield2) = "ll:" + tenkanSen[1];


    return true;
}();