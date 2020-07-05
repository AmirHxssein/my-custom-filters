true === function () {

    const h = function (startDay) { //تابع بیشترین قیمت

        let highestPrice;

        if (startDay === 'today') {
            highestPrice = (pmax); //بیشترین قیمت امروز
        } else {
            highestPrice = [ih][parseInt(startDay)-1].PriceMax //بیشترین قیمت روزی که خودمون میخوایم
        }

        for (let i = (startDay === 'today' ? 0 : parseInt(startDay)); i < 13 + (startDay === 'today' ? 0 : parseInt(startDay)); i++) { //چرخه از دیروز شروع میکنه و تا روزایی کخ میخوایم میچرخه
            if (highestPrice < [ih][i].PriceMax) {
                highestPrice = [ih][i].PriceMax;  //چرخه بهمون بیشترین قیمت رو میده
            }
        }

        return highestPrice;
    };

    const l = function (startDay) {  //تابع کمترین قیمت

        let lowestPrice;

        if (startDay === 'today') {
            lowestPrice = (pmin); //کمترین قیمت امروز
        } else {
            lowestPrice = [ih][parseInt(startDay)-1].PriceMin //کمترین قیمت روزی که خودمون میخوایم
        }

        for (let i = (startDay === 'today' ? 0 : parseInt(startDay)); i < 13 + (startDay === 'today' ? 0 : parseInt(startDay)); i++) { //چرخه از دیروز شروع میکنه و تا روزایی کخ میخوایم میچرخه
            if (lowestPrice > [ih][i].PriceMin) {
                lowestPrice = [ih][i].PriceMin;  //چرخه بهمون کمترین قیمت رو میده
            }
        }

        return lowestPrice;
    };

    const kPercentCalc = function (startDay) {
        return  100 * ((pc) - l(startDay)) / (h(startDay) - l(startDay));
    }
    const slowStochastic =  kPercentCalc('today');//today's kpercent
    const K1 =  kPercentCalc(1);//yesterday's's kpercent
    const K2 =  kPercentCalc(2);//2 days ago kpercent
    const fastStochastic = (slowStochastic + K1 + K2)/3;

    (cfield0) = 'SlowS:' + Math.round(slowStochastic);
    (cfield1) = slowStochastic === fastStochastic;
    (cfield2) = 'FastS:' + Math.round(fastStochastic);

    return (slowStochastic < 20 || fastStochastic < 20);

}();