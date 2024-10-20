import React from "react";
import "./achievementcard.css";

function AchievementCard(props) {
    return (
        <div className="achievement ${ props.alignment }">
            <dt>
                <span className="rolename">Role Requirement: {props.role}</span>
                <span className="name"><br/> Name: {props.name}</span>
                <span className="details"><br/>Details: {props.details}</span>
            </dt>
        </div>
    );

}

export default AchievementCard;