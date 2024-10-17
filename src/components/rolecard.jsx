import React from "react";
import "./rolecard.css";

function RoleCard(props) {
    return (
        <div className="role ${ props.alignment }">
            <dt>
                <span className="rolename">{props.name}</span>
                <span className="alignment">{props.alignment}</span>
            </dt>
        </div>
    );

}

export default RoleCard;