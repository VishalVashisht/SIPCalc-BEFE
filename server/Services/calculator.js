  async function calculate(props){
    try{
      const rate = (props.rateOfReturn - props.rateOfInflation) / 12
    const months = props.investmentPeriod*12;
    let sipGrowthResult = 0;

    const graph = [{
        year: 0,
        investment: 0,
        value: 0,
      }]
      for (let i = 1; i <= months; i++) {
        sipGrowthResult += props.monthlyInvestment * Math.pow(1 + rate / 100, i)
        if(i%12 == 0){
          const obj = {
            year: i/12,
            investment: props.monthlyInvestment * i,
            value: Math.round(sipGrowthResult)
          }
          graph.push(obj)
        }
      }
      sipGrowthResult = sipGrowthResult.toFixed(0);

      fObj = {
        graph,
        sipGrowthResult
      }
    return fObj;
    }
    catch(error){
        res.send(error);
    }
}

module.exports = {calculate};