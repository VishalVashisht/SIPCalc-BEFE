import React from "react";
import SliderPanel from "./sliderPanel";


export default function Calc(props){
    return(
    <div>
        <SliderPanel field="monthlyInvestment" panelName="Monthly Investment (Rs.)" min={10000} max={1000000} value={props.monthlyInvestment} setVal={props.setValueMonthlyInvestment}/>

        <SliderPanel field="investmentPeriod" panelName="Investment Period (in years)" min={0} max={30} value={props.investmentPeriod} setVal={props.setValueInvestmentPeriod} />

        <SliderPanel field="rateOfReturn" panelName="Expected Rate of Return(%p.a)" min={0} max={30}  value={props.rateOfReturn} setVal={props.setValueRateOfReturn} />
        
        <SliderPanel field="rateOfInflation" panelName="Expected Rate of Inflation(%p.a)" min={0} max={30} value={props.rateOfInflation} setVal={props.setValueRateOfInflation} />
    </div>
    )
}   