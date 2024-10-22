import React from "react";
import "./achievementcard.css";

function AchievementCard(props) {
    return (
        <div className={`${props.alignment} achievement`}>
            <dt>
                <p className="damion-regular name">{props.name}</p>
                <p className="rolerequirement">
                    <span className="bold">Role Requirement:</span> {props.role}</p>
                <p className="details">
                    <span className="bold">Details:</span> {props.details}</p>
            </dt>
        </div>
    );

}

export default AchievementCard;