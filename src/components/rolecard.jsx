import React from "react";
import "./rolecard.css";
//import role_list from "../data/role_list";

function RoleCard(props) {
    const specialLines = props.special.split('\n');
    const abilityLines = props.abilities.split('\n');
    const informationLines = props.information.split('\n');
    return (
        <div className={`${props.alignment} role`}>
            <dt>
                <h3 className="londrina-sketch-regular rolename">{props.name}</h3>
                <p className="alignment"><span className="underline">Alignment:</span> {props.alignment}</p>
                <p className="immunities"><span className="underline">Immunities</span> - {props.immunities}</p>
                <p className="attack"><span className="underline">Attack</span> - {props.attack}</p>
                <p className="defence"><span className="underline">Defence</span> - {props.defence}</p>
                <p className="time"><span className="underline">Time</span> - {props.time}</p>
                <span className="special-body"><span className="underline">Special:</span> 
                {specialLines.map((line, index) => (<p className="special">• {line}</p>))}
                </span>
                <p className="abilities-body"><span className="underline">Abilities:</span>
                {abilityLines.map((line, index) => (<p className="abilities">• {line}</p>))}
                 </p>
                <p className="information-body"><span className="underline">Extra:</span> 
                {informationLines.map((line, index) => (<p className="information">• {line}</p>))}
                </p>
                <p className="goal"><span className="underline">Goal:</span> {props.goal}</p>
            </dt>
        </div>
    );
}

export default RoleCard;