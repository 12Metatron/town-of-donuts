import React from "react";
import achievement_list from "../data/achievement_list";
import AchievementCard from "../components/achievementcard";

function createAchievementCard(achievement_data) {
    return (
        <AchievementCard
        key={achievement_data.id}
        role={achievement_data.role}
        achievement={achievement_data.achievement}
        details={achievement_data.details}
        />

    );
}

function Achievments() {
    return (
        <>
            <h1 className="title bold londrina-sketch-regular">Achievements</h1>
            <dl>{achievement_list.map(createAchievementCard)}</dl>
        </>
    );
}

export default Achievments;