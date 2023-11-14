    const storyData = {
    "start": {
        text: "You wake up in a dark forest, with no memory of how you got there. What do you do?",
        choices: [
            { text: "Explore the forest", consequence: "exploreForest" },
            { text: "Find shelter", consequence: "findShelter" }
        ],
        image: "https://picsum.photos/200/300?image=100"
    },
    "exploreForest": {
        text: "You venture deeper into the forest. Suddenly, you hear a rustling sound. What do you do?",
        choices: [
            { text: "Investigate the sound", consequence: "investigateSound" },
            { text: "Continue walking", consequence: "continueWalking" }
        ],
        image: "https://picsum.photos/200/300?image=101"
    },
    "findShelter": {
        text: "You search for a place to stay safe. You find an old abandoned cabin. What do you do?",
        choices: [
            { text: "Enter the cabin", consequence: "enterCabin" },
            { text: "Keep searching for shelter", consequence: "keepSearching" }
        ],
        image: "https://picsum.photos/200/300?image=102"
    },
    "investigateSound": {
        text: "You cautiously approach the sound. You see a pair of glowing eyes. What do you do?",
        choices: [
            { text: "Attack the creature", consequence: "attackCreature" },
            { text: "Run away", consequence: "runAway" }
        ],
        image: "https://picsum.photos/200/300?image=103"
    },
    "continueWalking": {
        text: "You continue walking. You stumble upon a clearing with a strange object. What do you do?",
        choices: [
            { text: "Approach the object", consequence: "approachObject" },
            { text: "Avoid the object", consequence: "avoidObject" }
        ],
        image: "https://picsum.photos/200/300?image=104"
    },
    "approachObject": {
        text: "You approach the object and discover it's a portal to another realm. What do you do?",
        choices: [
            { text: "Step through the portal", consequence: "stepThroughPortal" },
            { text: "Leave the portal and continue walking", consequence: "leavePortal" }
        ],
        image: "https://picsum.photos/200/300?image=105"
    },
    "avoidObject": {
        text: "You decide to avoid the strange object and continue walking through the forest. After a while, you come across a fork in the path. Which way do you go?",
        choices: [
            { text: "Go to the left", consequence: "goLeft" },
            { text: "Go to the right", consequence: "goRight" }
        ],
        image: "https://picsum.photos/200/300?image=106"
    },
    "enterCabin": {
        text: "You enter the cabin and find it surprisingly cozy. What do you do now?",
        choices: [
            { text: "Rest for the night", consequence: "restForNight" },
            { text: "Search the cabin", consequence: "searchCabin" }
        ],
        image: "https://picsum.photos/200/300?image=105"
    },
    "keepSearching": {
        text: "You decide to keep searching for a better shelter. As you explore, you find a hidden cave. What do you do?",
        choices: [
            { text: "Enter the cave", consequence: "enterCave" },
            { text: "Keep searching", consequence: "keepSearchingCaves" }
        ],
        image: "https://picsum.photos/200/300?image=106"
    },
    "restForNight": {
        text: "You rest in the cabin for the night, feeling safe and warm. What do you do in the morning?",
        choices: [
            { text: "Explore the surroundings", consequence: "exploreSurroundings" },
            { text: "Leave the cabin and continue your journey", consequence: "leaveCabin" }
        ],
        image: "https://picsum.photos/200/300?image=107"
    },
    "searchCabin": {
        text: "You search the cabin and find a hidden trapdoor. What do you do?",
        choices: [
            { text: "Open the trapdoor", consequence: "openTrapdoor" },
            { text: "Ignore the trapdoor and leave the cabin", consequence: "ignoreTrapdoor" }
        ],
        image: "https://picsum.photos/200/300?image=108"
    },
    "enterCave": {
        text: "You enter the cave and discover it's a bear's den. What do you do?",
        choices: [
            { text: "Confront the bear", consequence: "confrontBear" },
            { text: "Quietly leave the cave", consequence: "leaveCaveQuietly" }
        ],
        image: "https://picsum.photos/200/300?image=109"
    },
    "keepSearchingCaves": {
        text: "You continue searching the area and find a network of caves. What do you do?",
        choices: [
            { text: "Enter one of the caves", consequence: "enterCave" },
            { text: "Keep exploring the forest", consequence: "keepExploringForest" }
        ],
        image: "https://picsum.photos/200/300?image=110"
    },
    "enterCave": {
        text: "You decide to enter one of the caves, drawn by the mysterious aura emanating from within. As you explore the depths, you encounter ancient artifacts and rare crystals. Congratulations! You've discovered the secrets of the cave and reached an adventurous ending.",
        choices: [],
        image: "https://picsum.photos/200/300?image=151"
    },
    "keepExploringForest": {
        text: "You continue exploring the forest, fascinated by the various flora and fauna. As you walk, you come across a magical portal. What do you do?",
        choices: [
            { text: "Step through the portal", consequence: "stepThroughPortal" },
            { text: "Avoid the portal and keep exploring", consequence: "avoidPortal" }
        ],
        image: "https://picsum.photos/200/300?image=152"
    },
    "avoidPortal": {
        text: "You decide to avoid the portal and keep exploring the forest. After a while, you encounter a friendly forest spirit. What do you do?",
        choices: [
            { text: "Befriend the spirit", consequence: "befriendSpirit" },
            { text: "Politely decline and continue your journey", consequence: "continueJourney" }
        ],
        image: "https://picsum.photos/200/300?image=153"
    },
    "attackCreature": {
        text: "You decide to attack the creature. It turns out to be a friendly forest spirit. What do you do?",
        choices: [
            { text: "Apologize and befriend the spirit", consequence: "befriendSpirit" },
            { text: "Continue your journey", consequence: "continueJourney" }
        ],
        image: "https://picsum.photos/200/300?image=111"
    },
    "runAway": {
        text: "You choose to run away from the creature. As you run, you find a hidden path. What do you do?",
        choices: [
            { text: "Follow the path", consequence: "followPath" },
            { text: "Return to the clearing", consequence: "returnToClearing" }
        ],
        image: "https://picsum.photos/200/300?image=112"
    },
    "leaveArtifact": {
        text: "You decide to leave the artifact and continue walking. After a while, you come across a river. What do you do?",
        choices: [
        	{ text: "Cross the river", consequence: "crossRiver" },
        	{ text: "Follow the riverbank", consequence: "followRiverbank" }
    	  ],
    	  image: "https://picsum.photos/200/300?image=113"
    },
    "crossRiver": {
    	  text: "You carefully cross the river, using a fallen log as a bridge. On the other side, you see a trail leading up a mountain. What do you do?",
        choices: [
        	{ text: "Climb the mountain", consequence: "climbMountain" },
        	{ text: "Continue on your journey along the riverbank", consequence: "continueJourneyAlongRiverbank" }
        ],
        image: "https://picsum.photos/200/300?image=114"
    },
    "followRiverbank": {
        text: "You follow the riverbank for a while, until you come across a waterfall. What do you do?",
        choices: [
        	{ text: "Swim up the waterfall", consequence: "swimUpWaterfall" },
        	{ text: "Find another way around the waterfall", consequence: "findWayAroundWaterfall" }
        ],
    	  image: "https://picsum.photos/200/300?image=115"
    },
    "findWayAroundWaterfall": {
        text: "You search for another way around the waterfall. After a while, you find a narrow path leading up the cliffside. What do you do?",
        choices: [
        	{ text: "Take the path up the cliffside", consequence: "takePathUpCliffside" },
        	{ text: "Turn back and continue along the riverbank", consequence: "turnBackAndContinueAlongRiverbank" }
        ],
        image: "https://picsum.photos/200/300?image=116"
    },
    "takePathUpCliffside": {
        text: "You carefully take the path up the cliffside. The path is narrow and dangerous, but you eventually make it to the top. You find yourself on a plateau overlooking the forest. What do you do?",
        choices: [
        	{ text: "Explore the plateau", consequence: "explorePlateau" },
        	{ text: "Descend the cliffside and continue on your journey", consequence: "descendCliffsideAndContinueJourney" }
        ],
        image: "https://picsum.photos/200/300?image=117"
    },
    "turnBackAndContinueAlongRiverbank": {
        text: "You decide to turn back and continue along the riverbank. After a while, you come to a fork in the river. Which way do you go?",
        choices: [
        	{ text: "Go to the left", consequence: "goToLeftFork" },
        	{ text: "Go to the right", consequence: "goToRightFork" }
        ],
        image: "https://picsum.photos/200/300?image=118"
    },
    "explorePlateau": {
        text: "You explore the plateau and find a hidden cave. Inside the cave, you see a treasure chest. What do you do?",
        choices: [
        	{ text: "Open the treasure chest", consequence: "openTreasureChest" },
        	{ text: "Leave the treasure chest and continue exploring", consequence: "leaveTreasureChest" }
        ],
        image: "https://picsum.photos/200/300?image=119"
    },
    "descendCliffsideAndContinueJourney": {
        text: "You carefully descend the cliffside and continue on your journey. After a while, you come across a meadow filled with wildflowers. What do you do?",
        choices: [
        	{ text: "Relax in the meadow", consequence: "relaxInMeadow" },
        	{ text: "Continue on your journey", consequence: "continueOnJourney" }
        ],
        image: "https://picsum.photos/200/300?image=120"
    },
    "openTreasureChest": {
        text: "You open the treasure chest and find a magical sword. You decide to take the sword with you on your journey. What do you do now?",
        choices: [
        	{ text: "Continue exploring the plateau", consequence: "continueExploringPlateauWithSword" },
        	{ text: "Descend the cliffside and continue on your journey", consequence: "descendCliffsideAndContinueJourneyWithSword" }
        ],
    	  image: "https://picsum.photos/200/300?image=121"
    },
    "leaveTreasureChest": {
        text: "You leave the treasure chest and continue exploring the plateau. After a while, you come across a group of travelers. What do you do?",
        choices: [
        	{ text: "Join the travelers", consequence: "joinTravelers" },
        	{ text: "Continue on your journey alone", consequence: "continueOnJourneyAlone" }
        ],
        image: "https://picsum.photos/200/300?image=122"
    },
    "relaxInMeadow": {
        text: "You relax in the meadow for a while, enjoying the peace and quiet. After a while, you decide to continue on your journey. What do you do now?",
        choices: [
            { text: "Continue along the riverbank", consequence: "continueAlongRiverbankFromMeadow" },
            { text: "Explore the meadow further", consequence: "exploreMeadowFurther" }
        ],
        image: "https://picsum.photos/200/300?image=123"
    },
    "continueOnJourney": {
    	  text: "You continue on your journey, following the riverbank. After a while, you come across a bridge that crosses the river. What do you do?",
    	  choices: [
        	{ text: "Cross the bridge", consequence: "crossBridge" },
        	{ text: "Continue along the riverbank", consequence: "continueAlongRiverbankFromBridge" }
        ],
    	  image: "https://picsum.photos/200/300?image=124"
    },
    "crossBridge": {
    	  text: "You cross the bridge and find yourself on a different path. You follow the path for a while, until you come across a town. What do you do?",
    	  choices: [
        	{ text: "Enter the town", consequence: "enterTown" },
        	{ text: "Continue on your journey, avoiding the town", consequence: "continueOnJourneyAvoidingTown" }
        ],
        image: "https://picsum.photos/200/300?image=125"
    },
    "continueAlongRiverbankFromBridge": {
        text: "You continue along the riverbank, leaving the bridge behind. After a while, you come across a fork in the river. Which way do you go?",
        choices: [
        	{ text: "Go to the left", consequence: "goToLeftForkFromBridge" },
        	{ text: "Go to the right", consequence: "goToRightForkFromBridge" }
        ],
        image: "https://picsum.photos/200/300?image=126"
    },
    "enterTown": {
        text: "You enter the town and find it to be bustling with activity. You decide to explore and see what you can find. What do you want to do first?",
        choices: [
        	{ text: "Visit the tavern", consequence: "visitTavern" },
        	{ text: "Explore the shops", consequence: "exploreShops" }
        ],
        image: "https://picsum.photos/200/300?image=127"
    },
    "continueOnJourneyAvoidingTown": {
        text: "You decide to continue on your journey, avoiding the town. After a while, you come across a mountain range. What do you do?",
        choices: [
        	{ text: "Cross the mountains", consequence: "crossMountains" },
        	{ text: "Find a way around the mountains", consequence: "findWayAroundMountains" }
        ],
        image: "https://picsum.photos/200/300?image=128"
    },
    "goToLeftForkFromBridge": {
        text: "You go to the left and find yourself on a path that leads deeper into the forest. After a while, you come across a clearing with a strange, glowing object in the center. What do you do?",
        choices: [
            { text: "Investigate the glowing object", consequence: "investigateGlowingObjectFromLeftFork" },
            { text: "Continue walking", consequence: "continueWalkingFromLeftFork" }
        ],
        image: "https://picsum.photos/200/300?image=129"
    },
    "goToRightForkFromBridge": {
        text: "You go to the right and find yourself on a path that leads towards the coast. After a while, you come to a cliff overlooking the ocean. What do you do?",
        choices: [
        	{ text: "Climb down the cliff and explore the shore", consequence: "climbDownCliffAndExploreShore" },
        	{ text: "Continue walking along the cliffside", consequence: "continueWalkingAlongCliffsideFromRightFork" }
        ],
        image: "https://picsum.photos/200/300?image=130"
    },
    "befriendSpirit": {
        text: "You apologize to the spirit, and it graciously accepts. The spirit offers to guide you through the forest. What do you do?",
        choices: [
            { text: "Accept the spirit's guidance", consequence: "acceptGuidance" },
            { text: "Politely decline and continue on your own", consequence: "declineGuidance" }
        ],
        image: "https://picsum.photos/200/300?image=142"
    },
    "continueJourney": {
        text: "You choose to continue your journey without befriending the spirit. As you walk deeper into the forest, you come across a mysterious portal. What do you do?",
        choices: [
            { text: "Step through the portal", consequence: "stepThroughPortal" },
            { text: "Ignore the portal and keep walking", consequence: "ignorePortal" }
        ],
        image: "https://picsum.photos/200/300?image=143"
    },
    "askOwlForGuidance": {
        text: "You ask the owl for guidance, and it imparts ancient wisdom. You gain a deeper understanding of the forest and your journey. Congratulations! You've received the guidance of the wise owl and reached an enlightened ending.",
        choices: [],
        image: "https://picsum.photos/200/300?image=156"
    },
    "acceptGuidance": {
        text: "You accept the spirit's guidance. It leads you to a hidden path that takes you deeper into the heart of the forest. What do you do next?",
        choices: [
            { text: "Follow the hidden path", consequence: "followHiddenPath" },
            { text: "Express gratitude and continue on your own", consequence: "expressGratitude" }
        ],
        image: "https://picsum.photos/200/300?image=144"
    },
    "declineGuidance": {
        text: "You politely decline the spirit's guidance and choose to continue your journey on your own. As you walk, you come across a mysterious portal. What do you do?",
        choices: [
            { text: "Step through the portal", consequence: "stepThroughPortal" },
            { text: "Ignore the portal and keep walking", consequence: "ignorePortal" }
        ],
        image: "https://picsum.photos/200/300?image=143"
    },
    "followHiddenPath": {
        text: "You decide to follow the hidden path. It twists and turns through the dense forest, revealing the beauty of nature. After a while, you reach a tranquil meadow. What do you do?",
        choices: [
            { text: "Rest in the meadow", consequence: "restInMeadow" },
            { text: "Continue exploring the forest", consequence: "continueExploringForest" }
        ],
        image: "https://picsum.photos/200/300?image=145"
    },
    "expressGratitude": {
        text: "You express gratitude to the spirit and decide to continue your journey on your own. As you walk, you come across a mysterious portal. What do you do?",
        choices: [
            { text: "Step through the portal", consequence: "stepThroughPortal" },
            { text: "Ignore the portal and keep walking", consequence: "ignorePortal" }
        ],
        image: "https://picsum.photos/200/300?image=143"
    },
    "restInMeadow": {
        text: "You choose to rest in the meadow, surrounded by the vibrant colors of wildflowers. The peaceful atmosphere allows you to reflect on your journey. What insights have you gained?",
        choices: [
            { text: "Appreciate the beauty of the moment", consequence: "appreciateBeauty" },
            { text: "Contemplate the mysteries of the forest", consequence: "contemplateMysteries" }
        ],
        image: "https://picsum.photos/200/300?image=146"
    },
    "appreciateBeauty": {
        text: "You appreciate the beauty of the moment and find solace in the simplicity of nature. Your journey has brought you a sense of inner peace. Congratulations! You've reached a peaceful ending.",
        choices: [],
        image: "https://picsum.photos/200/300?image=148"
    },
    "contemplateMysteries": {
        text: "As you contemplate the mysteries of the forest, you feel a deep connection to the natural world. The forest spirits reveal themselves, offering you guidance. Congratulations! You've reached a mystical ending.",
        choices: [],
        image: "https://picsum.photos/200/300?image=149"
    },
    "continueExploringForest": {
        text: "You continue exploring the forest, fascinated by the various flora and fauna. As you walk, you come across a mysterious cave entrance. What do you do?",
        choices: [
            { text: "Enter the cave", consequence: "enterCave" },
            { text: "Keep exploring the forest", consequence: "keepExploringForest" }
        ],
        image: "https://picsum.photos/200/300?image=147"
    },
    "enterCave": {
        text: "You decide to enter the cave, uncovering hidden wonders within. Congratulations! You've discovered the secrets of the ancient cave and reached an adventurous ending.",
        choices: [],
        image: "https://picsum.photos/200/300?image=150"
    },
    "befriendSpirit": {
        text: "You decide to befriend the spirit, and it happily joins you on your journey. Together, you embark on countless adventures, creating a deep bond. Congratulations! You've found a lifelong companion and reached a heartwarming ending.",
        choices: [],
        image: "https://picsum.photos/200/300?image=157"
    },
    "continueJourney": {
        text: "You politely decline the spirit's company and continue your journey alone. As you explore further, you come across a hidden treasure. Congratulations! You've discovered a hidden fortune and reached a prosperous ending.",
        choices: [],
        image: "https://picsum.photos/200/300?image=158"
    },
    "openTrapdoor": {
        text: "You decide to open the trapdoor, revealing a hidden passage beneath the cabin. As you descend, you uncover a secret underground world filled with ancient artifacts. Congratulations! You've discovered a hidden realm and reached a mysterious ending.",
        choices: [],
        image: "https://picsum.photos/200/300?image=159"
    },
    "ignoreTrapdoor": {
        text: "You choose to ignore the trapdoor and leave the cabin. As you venture back into the forest, you come across a mystical portal. What do you do?",
        choices: [
            { text: "Step through the portal", consequence: "stepThroughPortal" },
            { text: "Continue your journey without the portal", consequence: "continueJourneyWithoutPortal" }
        ],
        image: "https://picsum.photos/200/300?image=160"
    },
    "continueJourneyWithoutPortal": {
        text: "You decide to continue your journey without the portal. Along the way, you encounter a group of friendly travelers who offer you companionship. Congratulations! You've found a community and reached a fulfilling ending.",
        choices: [],
        image: "https://picsum.photos/200/300?image=161"
    },
    "stepThroughPortal": {
        text: "You take a deep breath and step through the portal. You find yourself in a realm of eternal bliss and magical wonders. Congratulations! You've transcended reality and reached an enchanting ending.",
        choices: [],
        image: "https://picsum.photos/200/300?image=162"
    },
    "leavePortal": {
        text: "You decide to leave the portal and continue walking. As you explore the fantastical realm beyond the portal, you encounter a wise guide who imparts ancient knowledge. Congratulations! You've gained wisdom and reached an enlightened ending.",
        choices: [],
        image: "https://picsum.photos/200/300?image=163"
    },
    "exploreSurroundings": {
        text: "You decide to explore the surroundings. As you wander through the magical realm, you uncover hidden treasures and encounter mythical creatures. Congratulations! You've become a legendary adventurer and reached an epic ending.",
        choices: [],
        image: "https://picsum.photos/200/300?image=164"
    },
};

let currentStage = "start";

function startGame() {
    currentStage = "start";
    updatePage();
}

function updatePage() {
    const stage = storyData[currentStage];
    document.getElementById("story-text").innerText = stage.text;

    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    stage.choices.forEach((choice) => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.addEventListener("click", () => makeChoice(choice.consequence));
        choicesContainer.appendChild(button);
    });

    document.getElementById("image-display").src = stage.image;
}

function makeChoice(consequence) {
    if (storyData.hasOwnProperty(consequence)) {
        currentStage = consequence;
        updatePage();
    } else {
        console.error("Invalid consequence:", consequence);
        currentStage = "start";
        updatePage();
    }
}

startGame();