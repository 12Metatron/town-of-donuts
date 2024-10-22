// const coven_roles = [];
//    ----template for copy paste-----
// id: 1,
// name: "Coroner",
// alignment: "Town Investigative",
// immunities: "None",
// attack: "None",
// defence: "None",
// time: "Day/Night",
// special: "None",
// abilities: "Select a dead player during the Day to perform an Autopsy on them.\nYour Autopsy does not count as a visit, which means that a Tracker does not see who you Autopsied.\nAutopsy information stacks and is permanently retained. If a body was killed by multiple people, each one of those killers can be found.\nAfter performing an Autopsy, you can Examine a living player at Night to learn if they are the killer of any of the players you Autopsied.",
// information: "None",
// goal: "Hang every criminal and evildoer"
// ---------

const role_list = [
 {
    id: 1,
    name: "Coroner",
    alignment: "Town Investigative",
    immunities: "None",
    attack: "None",
    defence: "None",
    time: "Day/Night",
    special: "None",
    abilities: "Select a dead player during the Day to perform an Autopsy on them.\nYour Autopsy does not count as a visit, which means that a Tracker does not see who you Autopsied.\nAutopsy information stacks and is permanently retained. If a body was killed by multiple people, each one of those killers can be found.\nAfter performing an Autopsy, you can Examine a living player at Night to learn if they are the killer of any of the players you Autopsied.",
    information: "None",
    goal: "Hang every criminal and evildoer"
 },
 {
   id: 2,
   name: "Dreamweaver",
   alignment: "Coven Deception",
   immunities: "None",
   attack: "Basic",
   defence: "None",
   time: "Night",
   special: "Unique\nNecronomicon priority - 7",
   abilities: "You may invade the dreams of your target and attempt to make them an Insomniac.\nWeave a dream of nightmares and prevent your target from resting at Night.\nIf your target is not visited by a Town member the following Night they will go Insomniac.\nInsomniac players cannot use their abilities.\nInsomnia is permanent, even postmortem. Only when you die or when you get Retrained will Insomniac and Dreamwoven players be cured.\nDreamweave only works on Town members. All other roles are immune.",
   information: "Necronomicon Info: \nSince you possess the Necronomicon you may deal a Basic Attack to your targets.\nWith the Necronomicon you will appear not suspicious to a Sheriff.",
   goal: "Kill all who would oppose the Coven."
 },
];

export default role_list;