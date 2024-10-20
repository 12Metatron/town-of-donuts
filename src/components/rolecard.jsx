import React from "react";
import "./rolecard.css";
//import role_list from "../data/role_list";

function RoleCard(props) {
    return (
        <div className="role ${ props.alignment }">
            <dt>
                <span className="rolename">{props.name}</span>
                <span className="alignment">{props.alignment}</span>
                <span className="immunities">{props.immunities}</span>
                <span className="attack">{props.attack}</span>
                <span className="defence">{props.defence}</span>
                <span className="time">{props.time}</span>
                <span className="special">{props.special}</span>
                <span className="abilities">{props.abilities}</span>
                <span className="information">{props.information}</span>
                <span className="goal">{props.goal}</span>
            </dt>
        </div>
    );
}

export default RoleCard;