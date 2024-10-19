import React from "react";

function Rules() {
    return (
        <>
        <div className="text-body">
            <h1 className="title underline londrina-sketch-regular">Town of Donuts Rules</h1>
            <h2 className="subtitle habibi-regular">Overview</h2>
            <p className="desc"> Town of Donuts is a discord variation of Town of Salem. If you are familiar with the gameplay of ToS, this should be very familiar to you.
                <br/>There will be some key things to note in the commands and some of the processes which we will be using; so regardless of if you are experienced at ToS or not, please skim the rules and make sure you understand.
            </p>
            <h2 className="subtitle habibi-regular">Day/Night</h2>
            <p>The game will start on Day 1 followed by Night 1. These phases will be for players to familiarize themselves with their roles and also to get early game reads on others based on social aspects.</p>
            <h3 className="subtitle habibi-regular"> Day </h3>
            <p>During the day time, players may create whisper channels to communicate with others (this will be explained in more detail later). 
                <span className="underline"> All whisper channels will be deleted at night.</span>
                 You will have to recreate the channels in the following day.</p>
            <h3 className="subtitle habibi-regular"> Night </h3>
            <p> The night phase is when most roles use their abilities. 
            <span className="bold"> There is a command for submitting actions </span>
             (detailed later) </p>
             <h2 className="subtitle habibi-regular">Deaths</h2>
             <p>All deaths will occur during the night phase and be announced at the beginning of the day phase. When announced; the player that died's role (if applicable) will be revealed as well as the cause of death. We will then release their 
                <span className="bold">Last will and a Death note</span>
                (if applicable) to the announcement channel.  The dead will then be sent to The Graveyard.</p>
            <h2 className="subtitle habibi-regular">Last Will & Death Note</h2>
            <h2 className="subtitle habibi-regular">Lynching</h2>
            <h3 className="subtitle habibi-regular">Accusing</h3>
            <h2 className="subtitle habibi-regular">Whispers</h2>
            <h2 className="subtitle habibi-regular">Submitting Actions</h2>
            <h2 className="subtitle habibi-regular">Win Conditions</h2>
            <p> All roles will have a mention of your own individual win condition </p>
            <h2 className="subtitle habibi-regular">Coven Priority</h2>
            <p>The coven will start every game in possession of the necronomicon. This will boost their primary abilities and will allow whoever holds the necronomicon to attack on each night.
                <br/><br/>
                Every member of the coven has a priority number associated with the role. This number indicates when they will receive it.
                <br/>The necronomicon can only be passed upon the death of the current holder and may not be passed in any other way.
                <br/><br/>
                Passing is automatic. 
            </p>
            <h2 className="subtitle habibi-regular">Unique Roles</h2>
            <p>This will be listed under special in the role description.<br/>
            Unique means that there can only be one of these roles in the role list. </p>
        </div>
        </>
    );
}

export default Rules;