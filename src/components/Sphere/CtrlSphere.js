import Slider from '@mui/material/Slider';
import CtrlDesc from '../UI/CtrlDesc';
import { HexColorPicker, HexColorInput } from "react-colorful";

export default function CtrlSphere(props) {

    function handleSizeChange(event) {
        props.onChangeSize(event.target.value);
    }

    function handleWidthSegments(event) {
        props.onChangeWidthSegments(event.target.value);
    }

    function handleHeightSegments(event) {
        props.onChangeHeightSegments(event.target.value);
    }
    
    return(
        <div className="controls">
            <h4 className="controls-title">{props.shapeName} configuration</h4>
            <div className="controls-row">
                <CtrlDesc helper="Sphere radius">Radius</CtrlDesc>
                <Slider 
                    onChange={handleSizeChange} 
                    value={props.defaultValue} 
                    step={0.1} 
                    marks 
                    min={0.1} 
                    max={1} 
                    valueLabelDisplay="auto"
                />
            </div>

            <div className="controls-row">
                <CtrlDesc helper="Number of horizontal segments. Minimum value is 3, and the default is 32.">Width segments</CtrlDesc>
                <Slider 
                    onChange={handleWidthSegments} 
                    value={props.defaultWidthSegmentsValue} 
                    step={1} 
                    marks 
                    min={3} 
                    max={32} 
                    valueLabelDisplay="auto"
                />
            </div>

            <div className="controls-row">
                <CtrlDesc helper="Number of vertical segments. Minimum value is 2, and the default is 16.">Height segments</CtrlDesc>
                <Slider 
                    onChange={handleHeightSegments} 
                    value={props.defaultHeightSegmnetsValue} 
                    step={1} 
                    marks 
                    min={2} 
                    max={32} 
                    valueLabelDisplay="auto"
                />
            </div>
            <div className="controls-row">
                <CtrlDesc helper="Change geometry color">Change color</CtrlDesc>
                <div className="resposive colorpicker">
                    <HexColorPicker color={props.defaultColor} onChange={props.onChangeColor} />
                    <HexColorInput  color={props.defaultColor} onChange={props.onChangeColor} prefixed alpha />
                </div>
            </div>
        </div>
    );
}