import Calc from "./Calc";
import Graph from "./Graph";
import ErrorComp from "./ErrorComp";
import { React, useState, useEffect } from "react";
import axios from 'axios';

export default function SIPCalc() {
  const [monthlyInvestment, setValueMonthlyInvestment] = useState(10000);
  const [investmentPeriod, setValueInvestmentPeriod] = useState(5);
  const [rateOfReturn, setValueRateOfReturn] = useState(10);
  const [rateOfInflation, setValueRateOfInflation] = useState(2);
  const [sipGrowthResult,setSipGrowthResult] = useState();
  const [graph, setGraph] = useState();
  const [status, setStatus] = useState(0);
  const [err,setError]= useState();


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
          setError(true);
        }
        else{
          setSipGrowthResult(res.data.fresult.sipGrowthResult);
          setGraph(res.data.fresult.graph);
          setError(false);
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
          setValueMonthlyInvestment={setValueMonthlyInvestment}
          ip={investmentPeriod}
          setValueInvestmentPeriod={setValueInvestmentPeriod}
          ror={rateOfReturn}
          setValueRateOfReturn={setValueRateOfReturn}
          roi={rateOfInflation}
          setValueRateOfInflation={setValueRateOfInflation} />
      </div>
      <div className="rightPanel">
        {err ? <ErrorComp/> :<Graph sipGrowthResult = {sipGrowthResult} graph={graph} monthlyInvestment={monthlyInvestment} investmentPeriod={investmentPeriod} />}
      </div>
    </div>
  )
}
