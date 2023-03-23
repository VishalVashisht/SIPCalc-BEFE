import { React, useState, useEffect } from "react";
import axios from 'axios';
import Calculator from "../../../client/src/Components/calculator.jsx";
import ErrorComp from "../../../client/src/Components/errorComp.jsx";
import Graph from "../../../client/src/Components/graph.jsx";

export default function SIPCalc() {
  const [monthlyInvestment, setValueMonthlyInvestment] = useState(10000);
  const [investmentPeriod, setValueInvestmentPeriod] = useState(5);
  const [rateOfReturn, setValueRateOfReturn] = useState(10);
  const [rateOfInflation, setValueRateOfInflation] = useState(2);
  const [result, setResult] = useState();
  const [err, setError] = useState();


  function changeValues(name, val) {
    if(name==="monthlyInvestment"){
      setValueMonthlyInvestment(val);
    }
    else if(name==="investmentPeriod"){
      setValueInvestmentPeriod(val);
    }
    else if(name==="rateOfReturn"){
      setValueRateOfReturn(val);
    }
    else if(name==="rateOfInflation"){
      setValueRateOfInflation(val);
    }
  }


  // calling api
  useEffect(() => {
    axios.get('/api', {
      params: {
        monthlyInvestment: monthlyInvestment,
        investmentPeriod: investmentPeriod,
        rateOfReturn: rateOfReturn,
        rateOfInflation: rateOfInflation,
      },
    })
      .then((res) => {
        if (res.data.status === -1) {
          setError(true);
        }
        else {
          setResult(res.data.fresult);
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
        <Calculator
          monthlyInvestment={monthlyInvestment}
          investmentPeriod={investmentPeriod}
          rateOfReturn={rateOfReturn}
          rateOfInflation={rateOfInflation}
          changeValues={changeValues}
          // handleSliderChange={handleSliderChange}
          // handleInputChange={handleInputChange}
          // handleBlur={handleBlur}
        />
      </div>
      <div className="rightPanel">
        {err ? <ErrorComp /> : <Graph result={result} monthlyInvestment={monthlyInvestment} investmentPeriod={investmentPeriod} />}
      </div>
    </div>
  )
}
