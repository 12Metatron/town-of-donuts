import React from "react";
import "./achievementcard.css";

function AchievementCard(props) {
    return (
        <div className="role ${ props.alignment }">
            <dt>
                <span className="rolename">{props.role}</span>
                <span className="achievement">{props.achievement}</span>
                <span className="details">{props.details}</span>
            </dt>
        </div>
    );

}

export default AchievementCard;