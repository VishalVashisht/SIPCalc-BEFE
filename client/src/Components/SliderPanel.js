import {React, useState} from "react";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';


const mark1 = [{
    value: 50000,
    label: '50000',
},
{
    value: 240000,
    label: '240000',
},
{
    value: 430000,
    label: '430000',
},
{
    value: 620000,
    label: '620000',
},
{
    value: 810000,
    label: '810000',
},
{
    value: 1000000,
    label: '1000000',
},
];


const mark2 = [{
    value: 0,
    label: '0',
},
{
    value: 6,
    label: '6',
},
{
    value: 12,
    label: '12',
},
{
    value: 18,
    label: '18',
},
{
    value: 24,
    label: '24',
},
{
    value: 30,
    label: '30',
},
];

function valuetext(value) {
    return `${value}`;
}

const Input2 = styled(MuiInput)`width: 110px;`;


export default function SliderPanel(props) {

    const [inputVal, setInputVal] = useState(props.min);

    const handleSliderChange = (event, newValue) => {
        props.setVal(newValue);
        setInputVal(props.min)
    };

    const handleInputChange = (event) => {
        let val = event.target.value;
        
        if (Number(val) < props.min) {
            setInputVal(val);
            props.setVal(props.min);
          }
          if (Number(val) > props.max) {
            setInputVal(val);
            props.setVal(props.max);
          }

        props.setVal(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = (event) => {
        let val = event.target.value;
    
        if (val <= 0) {
          alert("Please enter valid value greater than zero");
          props.setVal(props.min);
          setInputVal(props.min);
          return;
        }
    
        val = Number(val);
    
        if (val < props.min) {
          props.setVal( props.min);
          setInputVal(props.min);
          return;
        }
        if (val > props.max) {
          props.setVal(props.max);
          setInputVal(props.max);
          return;
        }
      };
    return (
        <>
            <br />
            <div className={props.field}>
                <Box sx={{ width: 570, margin: 1 }}>

                    <div className="sliderhead">
                        <h3>{props.panelName}</h3>
                    </div>
                    <div className="Input">
                        <Grid className="demo" container>
                            <Input2
                                type="number"
                                value={props.value}
                                size="small"
                                onBlur={handleBlur}
                                onChange={handleInputChange}
                                inputProps={{
                                    step: 1,
                                    min: props.min,
                                    max: props.max
                                }}
                            />
                        </Grid>
                    </div>
                    <br />
                    <Grid className="slider">
                        <Slider
                            aria-label="Custom marks"
                            defaultValue={props.value}
                            getAriaValueText={valuetext}
                            min={props.min}
                            max={props.max}
                            step={1}
                            marks={props.field === 'monthlyInvestment' ? mark1 : mark2}
                            onChange={handleSliderChange}
                            valueLabelDisplay="auto"
                            value={props.value}
                        />
                    </Grid>
                </Box>
            </div>
        </>
    )
}