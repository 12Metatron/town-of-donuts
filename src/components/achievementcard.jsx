import React from "react";
import "./achievementcard.css";

function AchievementCard(props) {
    return (
        <div className="achievement ${ props.role }">
            <dt>
                <p className="damion-regular name">{props.name}</p>
                <span className="rolename">
                    <span className="bold">Role Requirement:</span> {props.role}</span>
                <span className="details">
                    <br/><span className="bold">Details:</span> {props.details}</span>
            </dt>
        </div>
    );

}

export default AchievementCard;