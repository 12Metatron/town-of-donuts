/* eslint jsx-a11y/accessible-emoji: "off" */
import React from "react";

function Rules() {
	return (
		<>
			<div className="text-body">
				<h1 className="title underline londrina-sketch-regular">
					Town of Donuts Rules
				</h1>
				<h2 className="subtitle habibi-regular">Overview</h2>
				<p className="desc">
					{" "}
					Town of Donuts is a discord variation of Town of Salem. If you are
					familiar with the gameplay of ToS, this should be very familiar to
					you.
					<br />
					There will be some key things to note in the commands and some of the
					processes which we will be using; so regardless of if you are
					experienced at ToS or not, please skim the rules and make sure you
					understand.
				</p>
				<h2 className="subtitle habibi-regular">Day/Night</h2>
				<p>
					The game will start on Day 1 followed by Night 1. These phases will be
					for players to familiarize themselves with their roles and also to get
					early game reads on others based on social aspects.
				</p>
				<h3 className="subtitle habibi-regular"> Day </h3>
				<p>
					During the day time, players may create whisper channels to
					communicate with others (this will be explained in more detail later).
					<span className="underline">
						{" "}
						All whisper channels will be deleted at night.
					</span>
					You will have to recreate the channels in the following day.
				</p>
				<h3 className="subtitle habibi-regular"> Night </h3>
				<p>
					{" "}
					The night phase is when most roles use their abilities.
					<span className="bold">
						{" "}
						There is a command for submitting actions{" "}
					</span>
					(detailed later){" "}
				</p>
				<h2 className="subtitle habibi-regular">Deaths</h2>
				<p>
					All deaths will occur during the night phase and be announced at the
					beginning of the day phase. When announced; the player that died's
					role (if applicable) will be revealed as well as the cause of death.
					We will then release their
					<span className="bold">Last will and a Death note</span>
					(if applicable) to the announcement channel. The dead will then be
					sent to The Graveyard.
				</p>
				<h2 className="subtitle habibi-regular">Last Will & Death Note</h2>
				<p>
					Players may ask for a seperate thread in order to keep things seperate
					from their private channel
					<br />
					<br />
					<span className="bold">The Last Will</span> is given to each player
					and is shown to the Town upon that player's death. It has a 400
					character limit. A player's Last Will often includes critical
					information and is updated by each player as the game goes on.
					<br />
					<br />
					<span className="bold">A Death Note</span> is a piece of paper shown
					to the Town after a killing role other than Town Killing kills
					somebody, such as a Serial Killer or Mafioso. The Jailor has a
					separate Death Note but with multiple select choices. (400 character
					limit)
				</p>
				<h2 className="subtitle habibi-regular">Lynching</h2>
				<p>
					Lynching is an action that can be performed by anyone during the day
					phase of the game. It involves a player being voted onto the gallows
					and then being voted as to whether they are Guilty or Innocent.
				</p>
				<h3 className="subtitle habibi-regular">Accusing</h3>
				<p>
					Players must input the following command in any channel to put someone
					on trial;
					<br />
					<code className="g-highlight">!nominate [player] </code>
					<br />
					Example: !nominate Jeff
					<br />
					This command will send a message to the announcement channel in the
					format of;
					<br />
					<span className="bold"> TRIAL NOMINATION</span> AllSeeingDonut
					nominates Jeff <br /> Players will then react to this message with a
					✅ or a ❌
				</p>
				<p>
					In order to successfully execute someone, votes must be at least 50%
					of the living players eg.
					<blockquote>
						<p>
							if there are 12 players if ✅ receives 6 votes, Jeff will be
							executed at phase change.
						</p>
						<p> if ✅ receives 5 votes, Jeff will NOT be executed.</p>
					</blockquote>
				</p>
				<p>
					Multiple nomination may happen during the day phase.
					<br />
					<span className="bold">
						Players may only have 1 vote total and one nomination
					</span>
					<br />
					If a player has more than 1 vote on a nomination during the trial, the
					vote will go to the first nomination in that phase.
					<br />
					<br />
					<span className="bold">
						Nominations will close 2 hours before phase change
					</span>
					<br />
					<br />
					In the rare situation where 2 players exceed 50% of votes for
					execution, the player with the most votes will be executed. If there
					is a tie for votes, the first player to be nominated will be executed.
				</p>
				<h2 className="subtitle habibi-regular">Whispers</h2>
				<p>
					This is the equivalent of making a private channel with{" "}
					<span className="bold">1 other person.</span> <br />
					Instructions on the command to do this are explained by entering{" "}
					<code className="g-highlight">!whisper</code>
				</p>
				<h2 className="subtitle habibi-regular">Submitting Actions</h2>
				<p>
					An action submission command has been added to this game. <br />
					<span className="bold">
						Players must submit actions by entering{" "}
						<code className="g-highlight">!action [details]</code> in their
						private channel
					</span>
				</p>

				<h2 className="subtitle habibi-regular">Win Conditions</h2>
				<p>
					{" "}
					All roles will have a mention of your own individual win condition{" "}
				</p>
				<h2 className="subtitle habibi-regular">Coven Priority</h2>
				<p>
					The coven will start every game in possession of the necronomicon.
					This will boost their primary abilities and will allow whoever holds
					the necronomicon to attack on each night.
					<br />
					<br />
					Every member of the coven has a priority number associated with the
					role. This number indicates when they will receive it.
					<br />
					The necronomicon can only be passed upon the death of the current
					holder and may not be passed in any other way.
					<br />
					<br />
					Passing is automatic.
				</p>
				<h2 className="subtitle habibi-regular">Unique Roles</h2>
				<p>
					This will be listed under special in the role description.
					<br />
					Unique means that there can only be one of these roles in the role
					list.{" "}
				</p>
			</div>
		</>
	);
}

export default Rules;
