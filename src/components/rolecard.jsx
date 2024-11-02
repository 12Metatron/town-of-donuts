import React from "react";
import "./rolecard.css";
//import role_list from "../data/role_list";

function RoleCard(props) {
  const specialLines = props.special.split("\n");
  const abilityLines = props.abilities.split("\n");
  const informationLines = props.information.split("\n");
  return (
    <div className={`${props.alignment} role`}>
      <dt>
        <h3 className="londrina-sketch-regular rolename">{props.name}</h3>
        <p className="alignment">
          <span className="underline">Alignment:</span> {props.alignment}
        </p>
        <p className="immunities">
          <span className="underline">Immunities</span> - {props.immunities}
        </p>
        <p className="attack">
          <span className="underline">Attack</span> - {props.attack}
        </p>
        <p className="defence">
          <span className="underline">Defence</span> - {props.defence}
        </p>
        <p className="time">
          <span className="underline">Time</span> - {props.time}
        </p>
        <span className="special-body">
          <span className="underline">Special:</span>
          <ul>
            {specialLines.map((line) => (
              <li className="special">{line}</li>
            ))}
          </ul>
        </span>
        <p className="abilities-body">
          <span className="underline">Abilities:</span>
          <ul>
            {abilityLines.map((line) => (
              <li className="abilities">{line}</li>
            ))}
          </ul>
        </p>
        <p className="information-body">
          <span className="underline">Extra:</span>
          <ul>
            {informationLines.map((line) => (
              <li className="information">{line}</li>
            ))}
          </ul>
        </p>
        <p className="goal">
          <span className="underline">Goal:</span> {props.goal}
        </p>
      </dt>
    </div>
  );
}

export default RoleCard;
