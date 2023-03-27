import React from "react";
import SliderPanel from "./sliderPanel";

export default function Calculator(props){
    return(
    <div>
        <SliderPanel 
            field="monthlyInvestment" 
            sliderLabel="Monthly Investment (Rs.)" 
            min={10000} 
            max={1000000}
            value={props.monthlyInvestment} 
            // changeValues={props.changeValues}
            handleSliderChange={props.handleSliderChange}
            handleInputChange={props.handleInputChange}
            handleBlur={props.handleBlur}
        />

        <SliderPanel 
            field="investmentPeriod" 
            sliderLabel="Investment Period (in years)" 
            min={0} 
            max={30} 
            value={props.investmentPeriod} 
            // changeValues={props.changeValues}
            handleSliderChange={props.handleSliderChange}
            handleInputChange={props.handleInputChange}
            handleBlur={props.handleBlur}
        />

        <SliderPanel 
            field="rateOfReturn" 
            sliderLabel="Expected Rate of Return(%p.a)" 
            min={0} 
            max={30}  
            value={props.rateOfReturn} 
            // changeValues={props.changeValues}
            handleSliderChange={props.handleSliderChange}
            handleInputChange={props.handleInputChange}
            handleBlur={props.handleBlur}
        />
        
        <SliderPanel 
            field="rateOfInflation" 
            sliderLabel="Expected Rate of Inflation(%p.a)" 
            min={0} 
            max={30} 
            value={props.rateOfInflation} 
            // changeValues={props.changeValues}
            handleSliderChange={props.handleSliderChange}
            handleInputChange={props.handleInputChange}
            handleBlur={props.handleBlur}
        />
    </div>
    )
}   