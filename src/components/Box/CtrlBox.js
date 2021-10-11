import Slider from '@mui/material/Slider';
import CtrlDesc from '../UI/CtrlDesc';
import { HexColorPicker, HexColorInput } from "react-colorful";

export default function CtrlBox(props) {

    function handleWidthChange(event) {
        props.onChangeWidth(event.target.value);
    }
    function handleHeightChange(event) {
        props.onChangeHeight(event.target.value);
    }
    
    return(
        <div className="controls">
            <h4 className="controls-title">{props.shapeName} configuration</h4>
            <div className="controls-row">
                <CtrlDesc helper="Width; that is, the length of the edges parallel to the X axis.">Width</CtrlDesc>
                <Slider 
                    onChange={handleWidthChange} 
                    value={props.defaultWidthValue} 
                    step={0.1} 
                    marks 
                    min={0.1} 
                    max={2} 
                    valueLabelDisplay="auto"
                />
            </div>
            <div className="controls-row">
                <CtrlDesc helper="Height; that is, the length of the edges parallel to the Y axis.">Height</CtrlDesc>
                <Slider 
                    onChange={handleHeightChange} 
                    value={props.defaultHeightValue} 
                    step={0.1} 
                    marks 
                    min={0.1} 
                    max={2} 
                    valueLabelDisplay="auto"
                />
            </div>
            <div className="controls-row">
                <CtrlDesc helper="Change geometry color">Change color</CtrlDesc>
                <div className="colorpicker">
                    <HexColorPicker color={props.defaultColor} onChange={props.onChangeColor} />
                    <HexColorInput  color={props.defaultColor} onChange={props.onChangeColor} prefixed alpha />
                </div>
            </div>
        </div>
    );
}