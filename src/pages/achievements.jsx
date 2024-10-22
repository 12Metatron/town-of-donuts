import React from "react";
import achievement_list from "../data/achievement_list";
import AchievementCard from "../components/achievementcard";

function createAchievementCard(achievement_data) {
    return (
        <AchievementCard
        key={achievement_data.id}
        role={achievement_data.role}
        name={achievement_data.name}
        details={achievement_data.details}
        />

    );
}

function Achievments() {
    return (
        <>
            <h1 id="achievement-header" className="title bold londrina-sketch-regular">Achievements</h1>
            <dl>{achievement_list.map(createAchievementCard)}</dl>
        </>
    );
}

export default Achievments;