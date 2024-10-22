import React from "react";
import RoleCard from "../components/rolecard";
import role_list from "../data/role_list";

function createRoleCard(role_data) {
    return (
        <RoleCard
        key={role_data.id}
        name={role_data.name}
        alignment={role_data.alignment}
        immunities={role_data.immunities}
        attack={role_data.attack}
        defence={role_data.defence}
        time={role_data.time}
        special={role_data.special}
        abilities={role_data.abilities}
        information={role_data.information}
        goal={role_data.goal}
        />

    );
}

function Roles() {
    return (
        <>
            <h1 id="role-header" className="title bold londrina-sketch-regular">Roles</h1>
            <dl>{role_list.map(createRoleCard)}</dl>
        </>
    );
}

export default Roles;