true === function () {

    const average = function (numOfDays) {

        let LowestLow = (pmin);
        let highestHigh = (pmax);

        for (let i = 0; i < numOfDays; i++) {
            if ([ih][i].PriceMin === 0 && [ih][i].PriceMax === 0) {
                numOfDays++;
            } else {
                if (LowestLow > [ih][i].PriceMin) {
                    LowestLow = [ih][i].PriceMin;
                } else if (highestHigh < [ih][i].PriceMax) {
                    highestHigh = [ih][i].PriceMax;
                }
            }
        }
        let addition = LowestLow + highestHigh;
        return [addition / 2 , numOfDays]
    };


    const kijunSen = average(26);
    const tenkanSen = average(9);

    (cfield0) = 'ks:' + kijunSen[0];
    (cfield1) = 'Ichimoku';
    (cfield2) = 'days:' + kijunSen[1] + '|' + tenkanSen[1]  ;


    return kijunSen[0] === tenkanSen[0];
}();