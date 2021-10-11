import Slider from '@mui/material/Slider';
import CtrlDesc from '../UI/CtrlDesc';
import CtrlCheckBoxDesc from '../UI/CtrlCheckBoxDesc';

export default function CtrlCone(props) {

    function handleRadiusChange(event) {
        props.onChangeRadius(event.target.value);
    }
    function handleHeightChange(event) {
        props.onChangeHeight(event.target.value);
    }
    function handleThetaStartChange(event) {
        props.onChangeThetaStart(event.target.value);
    }
    function handleThetaLengthChange(event) {
        props.onChangeThetaLength(event.target.value);
    }
    function handleOpenEnded(event) {
        props.onChangeOpenEnded(event.target.checked);
    }

    return(
        <div className="controls">
            <h4 className="controls-title">{props.shapeName} configuration</h4>
            <div className="controls-row">
                <CtrlDesc helper="Radius of the cone base">Radius</CtrlDesc>
                <Slider 
                    onChange={handleRadiusChange} 
                    value={props.radius} 
                    step={0.1} 
                    marks 
                    min={0.1} 
                    max={1.5} 
                    valueLabelDisplay="auto"
                />
            </div>
            <div className="controls-row">
                <CtrlDesc helper="Height of the cone">Height</CtrlDesc>
                <Slider 
                    onChange={handleHeightChange} 
                    value={props.height} 
                    step={0.1} 
                    marks 
                    min={0.5} 
                    max={2} 
                    valueLabelDisplay="auto"
                />
            </div>
            <div className="controls-row">
                <CtrlDesc helper="Start angle for first segment, default = 0">Theta start</CtrlDesc>
                <Slider 
                    onChange={handleThetaStartChange} 
                    value={props.thetaStart} 
                    step={0.1} 
                    marks 
                    min={0} 
                    max={2} 
                    valueLabelDisplay="auto"
                />
            </div>
            <div className="controls-row">
                <CtrlDesc helper="The central angle, often called theta, of the circular sector.">Theta length</CtrlDesc>
                <Slider 
                    onChange={handleThetaLengthChange} 
                    value={props.thetaLength} 
                    step={0.1} 
                    marks 
                    min={0.1} 
                    max={2} 
                    valueLabelDisplay="auto"
                />
            </div>
            <div className="controls-row">
                <CtrlCheckBoxDesc 
                    label="Open ended" 
                    helper="Indication whether the ends of the cone is open or capped"
                    onChange={handleOpenEnded}
                    ifChecked={props.openEnded}
                />
            </div>
        </div>
    );
}