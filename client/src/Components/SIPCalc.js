import Calc from "./Calc";
import Graph from "./Graph";
import { React, useState, useEffect } from "react";
import axios from 'axios';

export default function SIPCalc() {
  const [monthlyInvestment, setValueMonthlyInvestment] = useState(10000);
  const [investmentPeriod, setValueInvestmentPeriod] = useState(5);
  const [rateOfReturn, setValueRateOfReturn] = useState(10);
  const [rateOfInflation, setValueRateOfInflation] = useState(2);


  // const [data, setData] = useState(null);
  const [sipGrowthResult,setSipGrowthResult] = useState();
  const [graph, setGraph] = useState();


  // const [result, setResult] = useState();
  const [status, setStatus] = useState(0);


  useEffect(() => {
    axios.get('/api', {
      params: {
        monthlyInvestment: monthlyInvestment,
        investmentPeriod: investmentPeriod,
        rateOfReturn: rateOfReturn,
        rateOfInflation: rateOfInflation,
      },
    })
    .then((res) =>{
        if(res.data.status === -1){
          // alert(res.data.message);

        }
        else{
          setSipGrowthResult(res.data.fresult.sipGrowthResult);
          setGraph(res.data.fresult.graph);
          }    
      }
    )
  }, [monthlyInvestment, investmentPeriod, rateOfReturn, rateOfInflation]);


  return (
    <div className='white-div'>
      <br />
      <div className="whiteDivHeader">
        <h2>{"SIP Calculator"}</h2>
        <p>{"It tells you how much wealth you can create by making monthly investment"}</p>
      </div>
      <div className="leftPanel">
        <Calc
          mi={monthlyInvestment}
          handleMi={setValueMonthlyInvestment}
          ip={investmentPeriod}
          handleIp={setValueInvestmentPeriod}
          ror={rateOfReturn}
          handleRor={setValueRateOfReturn}
          roi={rateOfInflation}
          handleRoi={setValueRateOfInflation} />
      </div>
      <div className="rightPanel">
        <Graph sipGrowthResult = {sipGrowthResult} graph={graph} monthlyInvestment={monthlyInvestment} investmentPeriod={investmentPeriod} />
      </div>
    </div>
  )
}
