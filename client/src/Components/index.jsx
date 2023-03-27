import Calc from "./calculator";
import Graph from "../../../client/src/Components/graph";
import ErrorComp from "../../../client/src/Components/errorComp";
import { React, useState, useEffect } from "react";
import axios from 'axios';

export default function SIPCalc() {
  const [monthlyInvestment, setValueMonthlyInvestment] = useState(10000);
  const [investmentPeriod, setValueInvestmentPeriod] = useState(5);
  const [rateOfReturn, setValueRateOfReturn] = useState(10);
  const [rateOfInflation, setValueRateOfInflation] = useState(2);
  const [err,setError]= useState();
  const [result, setResult] = useState();

  function changeValues(name, val) {
    switch (name) {
      case "monthlyInvestment": 
        setValueMonthlyInvestment(val);
        break;
      case "investmentPeriod":
        setValueInvestmentPeriod(val);
        break;
      case "rateOfReturn":
        setValueRateOfReturn(val);
        break;
      case "rateOfInflation":
        setValueRateOfInflation(val);
        break;
    }
  }

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
          setResult(res.data.fresult);
          setError(false);
          }    
      }
    )
  }, [monthlyInvestment, investmentPeriod, rateOfReturn, rateOfInflation]);

  return (
    <div className='rightMain'>
      
      <br />
      <div className="calculatorText">
        <h2>{"SIP Calculator"}</h2>
        <p>{"It tells you how much wealth you can create by making monthly investment"}</p>
      </div>

      <div className="leftContainer">
        <Calc
          monthlyInvestment={monthlyInvestment}
          investmentPeriod ={investmentPeriod}
          rateOfReturn ={rateOfReturn}
          rateOfInflation ={rateOfInflation}
          changeValues={changeValues}
          />
      </div>

      <div className="rightContainer">
        {err ? <ErrorComp/> : <Graph result={result} monthlyInvestment={monthlyInvestment} investmentPeriod={investmentPeriod} />}
      </div>
    </div>
  )
}
