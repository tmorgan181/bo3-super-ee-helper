const STORAGE_KEY = "bo3-super-ee-helper:gk:first-pass";

const RECOMMENDED_GOBBLEGUMS = [
  "Shopping Free",
  "Idle Eyes",
  "Shamblers",
  "Fire Sale",
  "Cache Back"
];

const STEP_DATA = [
  {
    id: "power",
    title: "Turn On Power and Build Shield",
    summary: "Open the map, activate power, collect all three Guard of Fafnir parts, and build at the Operations Bunker.",
    category: "Setup",
    risk: "Low",
    tags: ["Required", "Early game"],
    details: "Each shield part has three random spawn locations. Check all three spots per part as you open the map — they're on the route to power.",
    checkpoints: [
      "Power switch activated.",
      "All three Guard of Fafnir parts collected.",
      "Shield built at the Operations Bunker workbench.",
      "Map routes and perk locations noted."
    ],
    subtasks: [
      { title: "Open Route & Power", detail: "Buy through spawn toward the Operations Bunker, then continue to the power switch to activate it." },
      { title: "Part 1 — Operations Bunker", detail: "Check the shelves in the Bunker basement lab, the shelves opposite the workbench, or on a truck on the street between the Department Store and Bunker." },
      { title: "Part 2 — Infirmary", detail: "Check near the Stamin-Up machine, on a bed near the stairs, near a broken bookshelf, between boxes at the top of the stairs, or on the lower bunk beds." },
      { title: "Part 3 — Armory", detail: "Check next to the Wunderfizz machine on the bottom level, on the wall by the doorway to Supply Depot, or on a crate on the top level." },
      { title: "Build Shield", detail: "Bring all three parts to the lit wooden workbench with blueprints in the Operations Bunker to assemble the Guard of Fafnir." }
    ],
    hints: []
  },
  {
    id: "groph-modules",
    title: "Charge the Groph Modules",
    summary: "Kill zombies for colored Code Cylinders, insert each into its matching module, defend the pod, collect the Network Circuit.",
    category: "Setup",
    risk: "Medium",
    tags: ["Required", "Defense"],
    prerequisites: ["power"],
    details: "Each of the three modules requires a matching Code Cylinder (dropped by zombies in that area) and a pod defense. Once all three circuits are collected, insert them into the Network Console at Dragon Command.",
    checkpoints: [
      "Red Code Cylinder inserted into Tank Factory module.",
      "Blue Code Cylinder inserted into Supply Depot module.",
      "Green Code Cylinder inserted into Dragon Command module.",
      "All three pods defended and Network Circuits collected.",
      "All three circuits placed in the Network Console at Dragon Command."
    ],
    subtasks: [
      { title: "Collect Code Cylinders", detail: "Kill zombies in each area until a colored Code Cylinder drops. Red = Tank Factory, Blue = Supply Depot, Green = Dragon Command." },
      { title: "Insert Cylinders", detail: "Take each cylinder to its matching colored Groph Module console and insert it. A beam of light marks where the pod will land." },
      { title: "Defend the Pod", detail: "A Groph Pod drops from the sky at the marked location. Kill zombies that attack it for 30–90 seconds until it opens and reveals the Network Circuit." },
      { title: "Network Console", detail: "After all three circuits are collected, insert them all into the Network Console at Dragon Command to unlock the dragon transport." }
    ],
    hints: []
  },
  {
    id: "dragon-strike",
    title: "Ride the Dragon and Get Dragon Strike",
    summary: "Ride the dragon from Dragon Command to the PaP bunker, then go to the Hatchery, retrieve the egg, survive the lockdown, and claim Dragon Strike.",
    category: "Unlock",
    risk: "High",
    tags: ["Required", "Lockdown"],
    prerequisites: ["groph-modules"],
    details: "Two things happen here: the dragon transport unlocks Pack-a-Punch access, and the Hatchery lockdown rewards Dragon Strike. Do PaP upgrades before triggering the lockdown.",
    checkpoints: [
      "Dragon boarded at Dragon Command upper platform.",
      "Pack-a-Punch bunker accessed — weapons upgraded.",
      "Dragon Egg shot loose and picked up from Hatchery rafters.",
      "Egg placed in Hatchery incubator and lockdown triggered.",
      "Hatchery lockdown survived.",
      "Dragon Strike crystal interacted with — Dragon Strike claimed."
    ],
    subtasks: [
      { title: "Board Dragon at Dragon Command", detail: "After placing all 3 circuits in the Network Console, call and board the dragon at the upper platform in Dragon Command. It carries you to the PaP bunker entrance." },
      { title: "Upgrade at Pack-a-Punch", detail: "Head downstairs in the bunker to access Pack-a-Punch. Upgrade your primary weapon before proceeding." },
      { title: "Retrieve Egg from Hatchery", detail: "Go to the Hatchery. Locate the intact dragon egg hanging above the sewer grate in the basement. Shoot it to drop it, then pick it up." },
      { title: "Trigger Lockdown", detail: "Bring the egg to the Hatchery and place it in the incubator in the center of the basement. This triggers a lockdown — kill zombies near the egg to charge it." },
      { title: "Claim Dragon Strike", detail: "After the lockdown, go to the top floor of the Hatchery and interact with the glowing crystal to receive the Dragon Strike wonder weapon." }
    ],
    hints: []
  },
  {
    id: "egg-gauntlet",
    title: "Work the Dragon Egg",
    summary: "Burn egg at nest, complete three kill trials, incubate in bunker, claim the Gauntlet of Siegfried.",
    category: "Quest item",
    risk: "High",
    tags: ["Required", "Quest item"],
    prerequisites: ["dragon-strike"],
    details: "Two mandatory full-round cooldowns are required — one after the nest burn, one after bunker incubation. Plan your round flow around them.",
    checkpoints: [
      "Egg burned at Dragon's Nest — full round cooldown survived.",
      "Napalm kills trial complete.",
      "Penetrative kills trial complete.",
      "Melee kills trial complete.",
      "Egg incubated in PaP bunker — full round cooldown survived.",
      "Gauntlet of Siegfried claimed from Belinski Square Challenge Board."
    ],
    subtasks: [
      { title: "Burn at Dragon's Nest", detail: "Bring the egg to the Dragon's Nest at the bottom of the steps into Dragon Command, right of the wooden signpost by the ruined tank. Let the dragon breathe fire on it. Survive a full round before retrieving it." },
      { title: "Trial — Napalm Kills", detail: "Kill 8–10 zombies that have been set on fire by the dragon's breath. Lead zombies through the dragon fire path near Dragon Command." },
      { title: "Trial — Penetrative Kills", detail: "Kill 8–10 zombies with shots that pierce through multiple targets in one bullet. The mounted MG42 on the top floor of the Hatchery works well, or a sniper that chains 2+ kills per shot." },
      { title: "Trial — Melee Kills", detail: "Kill 8–10 zombies using melee. Use the knife, Bowie Knife, or the Guard of Fafnir's fireball melee attack." },
      { title: "Incubate in Bunker", detail: "Bring the egg to the PaP bunker basement and place it in the intact incubator near the generator. Kill zombies nearby to charge it with souls, then survive a full round before collecting." },
      { title: "Claim Gauntlet", detail: "Take the fully incubated egg to Belinski Square and place it on the leftmost Challenge Board to receive the Gauntlet of Siegfried specialist weapon." }
    ],
    hints: []
  },
  {
    id: "shield-trophies",
    title: "Collect Trophies",
    summary: "Find and collect all six hidden trophies across the map. Can be done in any order.",
    category: "Collectibles",
    risk: "Medium",
    tags: ["Required", "Collectibles"],
    prerequisites: ["dragon-strike"],
    details: "Trophies can be collected at any point after getting Dragon Strike and the Gauntlet. Knock out multiple in one route.",
    checkpoints: [
      "All six trophies collected."
    ],
    subtasks: [
      { title: "Dragon Command — Mural Soldier", detail: "Shoot the trophy out of the right-hand soldier's grip on the Russian mural above the tank in Dragon Command." },
      { title: "Tank Factory — Window", detail: "Near Double Tap. Blast the propped-open window with the Guard of Fafnir shield to knock the trophy loose." },
      { title: "Sewer House — Toilet", detail: "In the sewer beneath the PaP house, shoot the red switch until it turns green. Go upstairs and collect the trophy from the clogged toilet." },
      { title: "Supply Depot — Laser Trap", detail: "Activate the laser eye beam trap (1500 pts) inside Supply Depot. The trophy spawns where the laser hits the floor." },
      { title: "Speed Cola — Puddle", detail: "Use Dragon Strike on the puddle of water below the Speed Cola perch. The trophy spawns at the impact point on the ground." },
      { title: "Operations Bunker — Safe", detail: "Melee the safe next to the shield build table in the Operations Bunker using the Gauntlet of Siegfried fist attack to punch it open." }
    ],
    hints: []
  },
  {
    id: "valves",
    title: "Solve the Valve Network",
    summary: "Power the generator, identify the green and pink valves, use the solver to set all six, pull the Master Cylinder, and spell KRONOS for SOPHIA.",
    category: "Puzzle",
    risk: "High",
    tags: ["Required", "Puzzle"],
    prerequisites: ["egg-gauntlet", "shield-trophies"],
    details: "The valve puzzle is randomized every game. Use kronorium.com/blackops3/gorodkrovi/ — input the green-light valve and the pink-cylinder valve to get the exact settings. Valves stay active for ~5 minutes before resetting.",
    checkpoints: [
      "Generator in PaP bunker powered — Valkyrie killed nearby.",
      "Green start valve and pink cylinder valve identified.",
      "All six valves set correctly.",
      "Master Cylinder pulled from the pink valve.",
      "Master Cylinder inserted into SOPHIA's terminal.",
      "KRONOS spelled by shooting the correct letters."
    ],
    subtasks: [
      { title: "Power the Generator", detail: "Kill a Valkyrie near the generator in the PaP bunker basement to power it and activate the valve network." },
      { title: "Read the Valves", detail: "Walk the map to find which valve has a green light (start) and which has a pink cylinder trapped inside (destination). Note both locations." },
      { title: "Solve with Tool", detail: "Input the green valve location and the pink cylinder valve location into the solver at kronorium.com/blackops3/gorodkrovi/ to get the correct setting for all six valves." },
      { title: "Set All Six Valves", detail: "Go to each of the six valve locations (Armory, Department Store, Dragon Command, Supply Depot, Infirmary, Tank Factory) and set them per the solver output. You have ~5 minutes before they reset." },
      { title: "Retrieve Master Cylinder", detail: "Go to the pink cylinder valve and pick up the Master Cylinder that has been released." },
      { title: "Insert into SOPHIA and Spell KRONOS", detail: "Bring the Master Cylinder to SOPHIA in Dragon Command and insert it into her terminal. Shoot the letters on the board to spell K-R-O-N-O-S to progress." }
    ],
    hints: []
  },
  {
    id: "trials",
    title: "Complete SOPHIA's Trials",
    summary: "Insert all six trophies at SOPHIA's terminal, then clear all six trials in random order (except Trial 6 which is always last).",
    category: "Trials",
    risk: "High",
    tags: ["Required", "Execution"],
    prerequisites: ["valves"],
    details: "Trials 1–5 appear in a random order. Trial 6 (the keycard download) is always the final trial. If you fail any trial, wait until the next round and press the green button again to retry.",
    checkpoints: [
      "All six trophies inserted at SOPHIA's terminal.",
      "Capture Gersh trial cleared.",
      "Defuse the Bombs trial cleared.",
      "Escort the Mangler trial cleared.",
      "Escort the Valkyrie trial cleared.",
      "Secure the Pod trial cleared.",
      "Keycard Download trial cleared — Power Core obtained."
    ],
    subtasks: [
      { title: "Insert Trophies", detail: "Bring all six collected trophies to SOPHIA's terminal in Dragon Command and insert them to start the trials." },
      { title: "Trial — Capture Gersh", detail: "A yellow spark orb appears on the map. Shoot it continuously to make it move and speak. After it speaks 3 times, follow it back to Dragon Command where SOPHIA captures it with a teleporter pad." },
      { title: "Trial — Defuse the Bombs", detail: "Check 935 control panels on walls to identify which are bombs. The correct defuse order displays on the large monitor. Defuse them across all six locations in order. WARNING: failing this trial instantly kills nearby players." },
      { title: "Trial — Escort the Mangler", detail: "A friendly green-eyed Mangler spawns somewhere on the map (Spawn, Tank Factory, or Supply Depot). Do NOT kill it. Carefully escort it to the teleporter pad in Dragon Command." },
      { title: "Trial — Escort the Valkyrie", detail: "A friendly green-eyed Valkyrie spawns in Belinski Square. It has 1 HP — avoid Electric Cherry and AoE weapons. Escort it safely to the teleporter pad in Dragon Command without killing it." },
      { title: "Trial — Secure the Pod", detail: "A pod drops outside the map, marked by a green light on the monitor. Defend it from zombies. Use the Gauntlet of Siegfried to send the Whelp to retrieve the cargo, then grab it from where it lands and bring it back to SOPHIA." },
      { title: "Trial — Keycard Download (Final)", detail: "Pick up the red keycard from the monitor opposite SOPHIA. Go to the Hatchery and insert it into the red-screened computer. Survive 4 waves of Manglers during the download. Pick up the keycard again, sewer back, insert it into SOPHIA's terminal — the Power Core is dispensed." }
    ],
    hints: []
  },
  {
    id: "keycard",
    title: "Deliver the Power Core",
    summary: "Use the Gauntlet Whelp to carry the Power Core to Nikolai 1.0 at spawn, then enter the boss arena.",
    category: "Final prep",
    risk: "High",
    tags: ["Required", "Boss prep"],
    prerequisites: ["trials"],
    details: "After the keycard trial, SOPHIA dispenses the Power Core. Use the Gauntlet's Whelp to transport it — you cannot carry it directly.",
    checkpoints: [
      "Power Core dispensed from SOPHIA.",
      "Gauntlet Whelp used to carry Power Core.",
      "Power Core delivered to Nikolai 1.0 at spawn.",
      "Boss arena access triggered."
    ],
    subtasks: [
      { title: "Get the Power Core", detail: "After completing all six trials, the Power Core is ejected from SOPHIA's terminal in Dragon Command." },
      { title: "Use the Whelp", detail: "Equip the Gauntlet of Siegfried and use it to summon the Whelp near the Power Core. The Whelp will pick it up and carry it." },
      { title: "Deliver to Nikolai 1.0", detail: "Guide the Whelp carrying the Power Core to Nikolai 1.0, the friendly NPC located in Belinski Square (spawn area), to trigger the boss fight sequence." }
    ],
    hints: []
  },
  {
    id: "boss",
    title: "Defeat Nikolai",
    summary: "Survive the dragon fire phase by shooting exposed weak points, then destroy the glowing weak points on Nikolai's mech.",
    category: "Boss",
    risk: "Very High",
    tags: ["Required", "Boss fight"],
    prerequisites: ["keycard"],
    details: "The boss has two distinct phases. Use the corner trenches during the dragon fire phase to avoid taking damage.",
    checkpoints: [
      "Boss arena entered.",
      "All dragon weak points shot — dragon phase complete.",
      "Nikolai's shoulder and chest weak points destroyed.",
      "Easter egg complete — Love and War achievement unlocked."
    ],
    subtasks: [
      { title: "Dragon Fire Phase", detail: "A large dragon breathes fire across the center of the arena. Take cover in the corner trenches. Watch for glowing yellow weak points appearing on the dragon's chest, sides, shoulders, and neck. All players focus fire on each weak point as it appears. Repeat across multiple fire cycles." },
      { title: "Nikolai Mech Phase", detail: "After the dragon is sufficiently damaged, Nikolai engages in his mechanical suit. Target the glowing yellow weak points on both shoulders and under the glass cockpit on his chest. Avoid his turret fire, electric harpoon attacks, and R.A.P.S. deployments. Destroy all weak points to complete the Easter egg." }
    ],
    hints: []
  }
];

const BOMB_LOCATIONS = [
  "Department Store",
  "Infirmary",
  "Armory",
  "Tank Factory",
  "Supply Depot",
  "Dragon Command"
];

const VALVES = [
  "Armory",
  "Department Store",
  "Dragon Command",
  "Supply Depot",
  "Infirmary",
  "Tank Factory"
];

const VALVE_CONNECTIONS = {
  "Armory": ["Supply Depot", "Tank Factory", "Department Store"],
  "Department Store": ["Armory", "Infirmary", "Dragon Command"],
  "Dragon Command": ["Supply Depot", "Department Store", "Infirmary"],
  "Supply Depot": ["Dragon Command", "Armory", "Tank Factory"],
  "Infirmary": ["Department Store", "Tank Factory", "Dragon Command"],
  "Tank Factory": ["Infirmary", "Supply Depot", "Armory"]
};

const BUILDABLE_GROUPS = [
  {
    id: "shield",
    title: "Guard of Fafnir",
    description: "Dragon Shield assembly chain",
    parts: [
      { id: "shield-frame", code: "S1", name: "Frame", meta: "First part", hint: "Chair next to Jugg • truck door • bunker basement", shape: "shield" },
      { id: "shield-crest", code: "S2", name: "Crest", meta: "Second part", hint: "Infirmary bed • Infirmary wine • Infirmary roof concrete", shape: "shield" },
      { id: "shield-harness", code: "S3", name: "Harness", meta: "Last part", hint: "Armory roof crate • Armory roof wall • Armory perk-a-cola", shape: "shield" }
    ]
  },
  {
    id: "network",
    title: "Dragon Control",
    description: "Command cores and bunker feed",
    parts: [
      { id: "network-red", code: "N1", name: "Red Circuit", meta: "Dragon Command", hint: "Dropped from the completed Dragon Command module.", shape: "circuit" },
      { id: "network-blue", code: "N2", name: "Blue Circuit", meta: "Supply Depot", hint: "Dropped from the completed Supply Depot module.", shape: "circuit" },
      { id: "network-yellow", code: "N3", name: "Yellow Circuit", meta: "Tank Factory", hint: "Dropped from the completed Tank Factory module.", shape: "circuit" }
    ]
  }
];

const ARTIFACTS = [
  { id: "artifact-strike", code: "A1", name: "Dragon Strike", meta: "Wonder weapon", hint: "Interact with the glowing crystal on the top floor of the Hatchery after surviving the incubator lockdown.", shape: "core" },
  { id: "artifact-gauntlet", code: "A2", name: "Gauntlet of Siegfried", meta: "Specialist weapon", hint: "Claimed from the leftmost Challenge Board in Belinski Square after placing the fully incubated Dragon Egg.", shape: "gauntlet" },
  { id: "artifact-cylinder", code: "A3", name: "Master Cylinder", meta: "Valve network reward", hint: "Pulled from the pink-cylinder valve after solving the valve network puzzle.", shape: "cylinder" },
  { id: "artifact-keycard", code: "A4", name: "Red Keycard", meta: "Trial 6 item", hint: "Picked up from the monitor opposite SOPHIA in Dragon Command to start the keycard download trial.", shape: "keycard" },
  { id: "artifact-core", code: "A5", name: "Power Core", meta: "Boss access item", hint: "Dispensed by SOPHIA after completing all six trials. Carried to Nikolai 1.0 via the Gauntlet Whelp.", shape: "core" }
];

const TROPHIES = [
  { id: "trophy-1", code: "T1", name: "Mural Soldier Trophy", meta: "Dragon Command", hint: "Shoot the trophy out of the hand of the soldier on the right side of the Russian mural, above a tank in Dragon Command.", shape: "trophy" },
  { id: "trophy-2", code: "T2", name: "Tank Factory Window", meta: "Tank Factory", hint: "Near Double Tap. Blast the propped-open window with the Guard of Fafnir shield weapon to knock the trophy free.", shape: "trophy" },
  { id: "trophy-3", code: "T3", name: "Sewer House Toilet", meta: "Sewer / PaP House", hint: "Shoot the red switch in the sewer beneath the PaP house to turn it green, then go upstairs and collect the trophy from the clogged toilet.", shape: "trophy" },
  { id: "trophy-4", code: "T4", name: "Supply Depot Laser Trap", meta: "Supply Depot", hint: "Activate the laser eye beam trap (1500 pts) in Supply Depot — the trophy appears where the laser impacts the floor.", shape: "trophy" },
  { id: "trophy-5", code: "T5", name: "Speed Cola Puddle", meta: "Speed Cola area", hint: "Use Dragon Strike on the puddle of water below the Speed Cola perch. The trophy spawns on the ground where the strike lands.", shape: "trophy" },
  { id: "trophy-6", code: "T6", name: "Operations Bunker Safe", meta: "Operations Bunker", hint: "Use the Gauntlet of Siegfried melee attack to punch open the safe next to the shield build table in the Operations Bunker.", shape: "trophy" }
];

const DEFAULT_STATE = {
  selectedStepId: STEP_DATA[0].id,
  stepStatus: Object.fromEntries(STEP_DATA.map((step) => [step.id, false])),
  notes: "",
  inventoryExpanded: {
    buildables: false,
    "dragon-control": false,
    trophies: false,
    artifacts: false
  },
  bombs: [],
  valveSolver: {
    start: "",
    end: ""
  },
  buildables: Object.fromEntries(BUILDABLE_GROUPS.flatMap((group) => group.parts.map((part) => [part.id, false]))),
  artifacts: Object.fromEntries(ARTIFACTS.map((artifact) => [artifact.id, false])),
  trophies: Object.fromEntries(TROPHIES.map((trophy) => [trophy.id, false]))
};

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved) {
      return structuredClone(DEFAULT_STATE);
    }
    return mergeState(saved);
  } catch (error) {
    console.warn("Failed to load saved state", error);
    return structuredClone(DEFAULT_STATE);
  }
}

function mergeState(saved) {
  const next = structuredClone(DEFAULT_STATE);
  next.selectedStepId = saved.selectedStepId || next.selectedStepId;
  next.notes = typeof saved.notes === "string" ? saved.notes : next.notes;
  if (saved.inventoryExpanded && typeof saved.inventoryExpanded === "object") {
    Object.keys(next.inventoryExpanded).forEach((key) => {
      next.inventoryExpanded[key] = Boolean(saved.inventoryExpanded[key]);
    });
  }
  next.bombs = Array.isArray(saved.bombs) ? saved.bombs.filter((item) => BOMB_LOCATIONS.includes(item)) : next.bombs;

  for (const step of STEP_DATA) {
    next.stepStatus[step.id] = Boolean(saved.stepStatus && saved.stepStatus[step.id]);
  }

  next.valveSolver = {
    start: VALVES.includes(saved.valveSolver?.start) ? saved.valveSolver.start : "",
    end: VALVES.includes(saved.valveSolver?.end) ? saved.valveSolver.end : ""
  };

  for (const group of BUILDABLE_GROUPS) {
    for (const part of group.parts) {
      next.buildables[part.id] = Boolean(saved.buildables && saved.buildables[part.id]);
    }
  }

  for (const artifact of ARTIFACTS) {
    next.artifacts[artifact.id] = Boolean(saved.artifacts && saved.artifacts[artifact.id]);
  }

  for (const trophy of TROPHIES) {
    next.trophies[trophy.id] = Boolean(saved.trophies && saved.trophies[trophy.id]);
  }

  return next;
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function updateState(mutator) {
  const draft = structuredClone(state);
  mutator(draft);
  state = draft;
  persist();
  render();
}

function getStep(stepId) {
  return STEP_DATA.find((step) => step.id === stepId) || STEP_DATA[0];
}

function getRiskClass(risk) {
  if (risk === "Very High" || risk === "High") {
    return "badge--danger";
  }
  if (risk === "Medium") {
    return "badge--warning";
  }
  return "badge--info";
}

function render() {
  renderHero();
  renderSteps();
  renderActiveStep();
  renderActiveUtility();
  renderBuildables();
  renderArtifacts();
  renderTrophies();
  syncNotes();
}

function renderHero() {
  const completed = STEP_DATA.filter((step) => state.stepStatus[step.id]).length;
  const progress = Math.round((completed / STEP_DATA.length) * 100);
  const progressTip = completed === STEP_DATA.length
    ? "Quest marked complete."
    : "Track whichever objectives are active for the run.";

  document.getElementById("progress-text").textContent = `${completed} / ${STEP_DATA.length} complete`;
  document.getElementById("progress-fill").style.width = `${progress}%`;
  document.getElementById("progress-tip").textContent = progressTip;
  document.getElementById("gobblegum-loadout").innerHTML = RECOMMENDED_GOBBLEGUMS
    .map((gum) => `<span class="loadout-chip">${gum}</span>`)
    .join("");
}

function renderSteps() {
  const container = document.getElementById("steps-list");
  container.innerHTML = "";

  STEP_DATA.forEach((step, index) => {
    const card = document.createElement("article");
    card.className = [
      "timeline-button",
      state.selectedStepId === step.id ? "is-active" : "",
      state.stepStatus[step.id] ? "is-complete" : ""
    ].filter(Boolean).join(" ");

    card.innerHTML = `
      <button type="button" class="timeline-button__main" data-step-select="${step.id}">
        <div class="step-card__topline">
          <span class="step-card__index">
            <span class="step-card__index-number">${String(index + 1).padStart(2, "0")}</span>
            ${state.stepStatus[step.id] ? '<span class="step-card__index-check">✓</span>' : ""}
          </span>
          <div class="step-card__copy">
            <div class="step-card__title">${step.title}</div>
            ${step.summary ? `<p class="step-card__summary">${step.summary}</p>` : ""}
          </div>
        </div>
      </button>
      <div class="timeline-button__actions">
        <button type="button" class="timeline-complete-button ${state.stepStatus[step.id] ? "is-complete" : ""}" data-step-complete="${step.id}">
          ${state.stepStatus[step.id] ? "Complete" : "Mark Complete"}
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll("[data-step-complete]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const stepId = event.currentTarget.getAttribute("data-step-complete");
      updateState((draft) => {
        draft.stepStatus[stepId] = !draft.stepStatus[stepId];
      });
    });
  });

  container.querySelectorAll(".timeline-button").forEach((card) => {
    card.addEventListener("click", () => {
      const stepId = card.querySelector("[data-step-select]").getAttribute("data-step-select");
      updateState((draft) => { draft.selectedStepId = stepId; });
    });
  });
}

function renderActiveStep() {
  const step = getStep(state.selectedStepId);
  const container = document.getElementById("active-step");
  const complete = state.stepStatus[step.id];

  container.innerHTML = `
    <article class="step-detail__shell">
      <section class="step-detail__section step-detail__hero">
        <div class="step-detail__header">
          <div>
            <p class="panel__eyebrow">Current Phase</p>
            <h2 class="step-detail__title">${step.title}</h2>
          </div>
          <div class="step-tags">
          </div>
        </div>
      </section>

      <section class="step-detail__section">
        <ol class="subtask-list detail-list">
          ${step.subtasks.map((subtask) => {
            const item = normalizeChecklistItem(subtask);
            return `
            <li>
              <div class="checklist-copy">
                <span class="checklist-copy__title">${item.title}</span>
                ${item.detail ? `<span class="checklist-copy__detail">${item.detail}</span>` : ""}
              </div>
            </li>
          `;
          }).join("")}
        </ol>
      </section>

      ${step.id === "valves" ? renderValveSolverSection() : ""}
      ${step.id === "trials" ? renderBombUtilitySection() : ""}

      <footer class="step-detail__footer">
        <div class="step-detail__actions">
          <button type="button" class="action-button ${complete ? "" : "action-button--success"}" id="toggle-complete">
            ${complete ? "Mark Incomplete" : "Mark Complete"}
          </button>
        </div>
      </footer>
    </article>
  `;

  container.querySelector("#toggle-complete").addEventListener("click", () => {
    updateState((draft) => {
      draft.stepStatus[step.id] = !draft.stepStatus[step.id];
    });
  });

  if (step.id === "valves") {
    bindValveSolverEvents(container);
  }
  if (step.id === "trials") {
    bindBombUtilityEvents(container);
  }
}

function getValveSolverState() {
  const start = state.valveSolver.start;
  const end = state.valveSolver.end;
  const hasStart = VALVES.includes(start);
  const hasEnd = VALVES.includes(end);
  const sameValve = hasStart && hasEnd && start === end;
  const solution = hasStart && hasEnd && !sameValve ? solveValvePath(start, end) : null;

  let advisory = "Select the green start valve and the cylinder valve to generate the positions.";
  if (sameValve) {
    advisory = "The start valve and cylinder valve cannot be the same location.";
  } else if (solution) {
    advisory = `Set the valves exactly as shown below, then leave the cylinder valve for last.`;
  } else if (hasStart || hasEnd) {
    advisory = "One location is locked in. Add the other valve to compute the full route.";
  }

  return { start, end, hasStart, hasEnd, sameValve, solution, advisory };
}

function solveValvePath(start, end) {
  const route = [start];
  const visited = new Set(route);

  function backtrack(current) {
    if (current === end && route.length === VALVES.length) {
      return true;
    }
    for (const next of VALVE_CONNECTIONS[current]) {
      if (visited.has(next)) {
        continue;
      }
      route.push(next);
      visited.add(next);
      if (backtrack(next)) {
        return true;
      }
      route.pop();
      visited.delete(next);
    }
    return false;
  }

  if (!backtrack(start)) {
    return null;
  }

  const result = {};
  route.forEach((location, index) => {
    if (index === route.length - 1) {
      result[location] = null;
      return;
    }
    result[location] = VALVE_CONNECTIONS[location].indexOf(route[index + 1]) + 1;
  });
  return result;
}

function renderValveSolverSection() {
  const solver = getValveSolverState();
  const solvedEntries = solver.solution
    ? VALVES.map((location) => ({
        location,
        position: solver.solution[location]
      }))
    : [];

  return `
    <section class="step-detail__section">
      <div class="tool-card__header">
        <div>
          <h3>Valve Solver</h3>
          <p class="detail-meta">${solver.advisory}</p>
        </div>
        <button type="button" class="ghost-button ghost-button--small" id="reset-valves">Reset</button>
      </div>

      <div class="solver-controls">
        <label class="solver-control">
          <span>Green Start Valve</span>
          <select class="valve-select" id="solver-start">
            <option value="">Select start valve</option>
            ${VALVES.map((location) => `<option value="${location}" ${solver.start === location ? "selected" : ""}>${location}</option>`).join("")}
          </select>
        </label>
        <label class="solver-control">
          <span>Cylinder Valve</span>
          <select class="valve-select" id="solver-end">
            <option value="">Select cylinder valve</option>
            ${VALVES.map((location) => `<option value="${location}" ${solver.end === location ? "selected" : ""}>${location}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="solver-summary">
        <div class="solver-pill">
          <span class="badge badge--success">Start</span>
          <span>${solver.hasStart ? solver.start : "Unknown"}</span>
        </div>
        <div class="solver-pill">
          <span class="badge badge--info">Cylinder</span>
          <span>${solver.hasEnd ? solver.end : "Unknown"}</span>
        </div>
        <div class="solver-pill">
          <span class="badge badge--warning">Status</span>
          <span>${solver.sameValve ? "Pick two different valves" : solver.solution ? "Solution ready" : "Awaiting two inputs"}</span>
        </div>
      </div>

      <div class="solver-layout">
        <figure class="solver-reference">
          <img src="assets/valve-reference.svg" alt="Gorod Krovi valve reference map with locations for Dragon Command, Armory, Supply Depot, Infirmary, Tank Factory, and Department Store.">
        </figure>
        <div class="solver-results">
          ${solver.solution ? `
            <div class="solver-results__grid">
              ${solvedEntries.map((entry) => `
                <div class="solver-result-card">
                  <strong>${entry.location}</strong>
                  <span class="solver-result-card__value">${entry.position === null ? "END" : entry.position}</span>
                </div>
              `).join("")}
            </div>
          ` : `
            <p class="empty-state">Choose a start valve and cylinder valve to generate the exact dial positions.</p>
          `}
        </div>
      </div>
    </section>
  `;
}

function bindValveSolverEvents(container) {
  container.querySelector("#solver-start").addEventListener("change", (event) => {
    updateState((draft) => {
      draft.valveSolver.start = event.target.value;
    });
  });

  container.querySelector("#solver-end").addEventListener("change", (event) => {
    updateState((draft) => {
      draft.valveSolver.end = event.target.value;
    });
  });

  container.querySelector("#reset-valves").addEventListener("click", () => {
    updateState((draft) => {
      draft.valveSolver = structuredClone(DEFAULT_STATE.valveSolver);
    });
  });
}

function renderActiveUtility() {
  const container = document.getElementById("active-utility");
  container.innerHTML = "";
}

function renderBombUtilitySection() {
  return `
    <section class="step-detail__section utility-card">
      <div class="utility-card__header">
        <div>
          <p class="panel__eyebrow">Bomb Step</p>
          <h3>Bomb Route Tracker</h3>
        </div>
        <button type="button" class="ghost-button ghost-button--small" id="clear-bombs">Clear</button>
      </div>
      <p class="utility-text">Toggle locations in SOPHIA's flash order. Sequence runs left to right.</p>
      <div class="pill-grid" id="bomb-location-buttons"></div>
      <div class="bomb-sequence" id="bomb-sequence-list"></div>
    </section>
  `;
}

function bindBombUtilityEvents(container) {
  const buttonContainer = container.querySelector("#bomb-location-buttons");
  const list = container.querySelector("#bomb-sequence-list");

  BOMB_LOCATIONS.forEach((location) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `pill-button ${state.bombs.includes(location) ? "is-added" : ""}`;
    button.textContent = location;
    button.addEventListener("click", () => {
      updateState((draft) => {
        const idx = draft.bombs.indexOf(location);
        if (idx === -1) {
          if (draft.bombs.length < 6) draft.bombs.push(location);
        } else {
          draft.bombs.splice(idx, 1);
        }
      });
    });
    buttonContainer.appendChild(button);
  });

  if (state.bombs.length === 0) {
    list.innerHTML = '<span class="empty-state">No bomb order recorded yet.</span>';
  } else {
    state.bombs.forEach((location, index) => {
      if (index > 0) {
        const arrow = document.createElement("span");
        arrow.className = "bomb-sequence__arrow";
        arrow.textContent = "→";
        list.appendChild(arrow);
      }
      const step = document.createElement("span");
      step.className = "bomb-sequence__step";
      step.innerHTML = `<span class="bomb-sequence__num">${index + 1}</span>${location}`;
      list.appendChild(step);
    });
  }

  container.querySelector("#clear-bombs").addEventListener("click", () => {
    updateState((draft) => {
      draft.bombs = [];
    });
  });
}

function renderBuildables() {
  const shieldContainer = document.getElementById("buildables-grid");
  const dragonControlContainer = document.getElementById("dragon-control-grid");
  shieldContainer.innerHTML = "";
  dragonControlContainer.innerHTML = "";
  let shieldCompleteCount = 0;
  let shieldTotalCount = 0;
  let dragonCompleteCount = 0;
  let dragonTotalCount = 0;

  BUILDABLE_GROUPS.forEach((group) => {
    const groupComplete = group.parts.filter((part) => state.buildables[part.id]).length;
    const targetContainer = group.id === "network" ? dragonControlContainer : shieldContainer;

    if (group.id === "network") {
      dragonTotalCount += group.parts.length;
      dragonCompleteCount += groupComplete;
    } else {
      shieldTotalCount += group.parts.length;
      shieldCompleteCount += groupComplete;
    }

    group.parts.forEach((part) => {
      targetContainer.appendChild(createBoardCard(part, state.buildables[part.id], "buildable"));
    });
  });

  document.getElementById("buildable-count").textContent = `${shieldCompleteCount} / ${shieldTotalCount} marked`;
  document.getElementById("dragon-control-count").textContent = `${dragonCompleteCount} / ${dragonTotalCount} marked`;
  bindBoardToggles("buildable", (id, checked, draft) => {
    draft.buildables[id] = checked;
  });
}

function renderArtifacts() {
  const container = document.getElementById("artifacts-grid");
  container.innerHTML = "";
  let count = 0;

  ARTIFACTS.forEach((artifact) => {
    if (state.artifacts[artifact.id]) {
      count += 1;
    }
    container.appendChild(createBoardCard(artifact, state.artifacts[artifact.id], "artifact"));
  });

  document.getElementById("artifact-count").textContent = `${count} / ${ARTIFACTS.length} secured`;
  bindBoardToggles("artifact", (id, checked, draft) => {
    draft.artifacts[id] = checked;
  });
}

function renderTrophies() {
  const container = document.getElementById("trophy-grid");
  container.innerHTML = "";
  let count = 0;

  TROPHIES.forEach((trophy) => {
    if (state.trophies[trophy.id]) {
      count += 1;
    }
    container.appendChild(createBoardCard(trophy, state.trophies[trophy.id], "trophy"));
  });

  document.getElementById("trophy-count").textContent = `${count} / ${TROPHIES.length} collected`;
  bindBoardToggles("trophy", (id, checked, draft) => {
    draft.trophies[id] = checked;
  });
}

function createBoardCard(item, checked, kind) {
  const card = document.createElement("article");
  card.className = `board-card ${checked ? "is-complete" : ""}`;
  card.innerHTML = `
    <div class="silhouette silhouette--${item.shape}">
      <span class="silhouette__code">${item.code}</span>
    </div>
    <div class="board-card__copy">
      <p class="board-card__title">${item.name}</p>
      <p class="board-card__meta">${item.meta}</p>
      ${item.hint ? `<p class="board-card__hint">${item.hint}</p>` : ""}
    </div>
    <button type="button" class="silhouette-toggle ${checked ? "is-complete" : ""}" data-${kind}="${item.id}">
      ${checked ? "Secured" : "Mark"}
    </button>
  `;
  return card;
}

function normalizeChecklistItem(item) {
  if (typeof item === "string") {
    return { title: item, detail: "" };
  }
  return {
    title: item.title || "",
    detail: item.detail || ""
  };
}

function bindBoardToggles(kind, updater) {
  document.querySelectorAll(`[data-${kind}]`).forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute(`data-${kind}`);
      updateState((draft) => {
        let checked = false;
        if (kind === "buildable") {
          checked = !draft.buildables[id];
        } else if (kind === "artifact") {
          checked = !draft.artifacts[id];
        } else {
          checked = !draft.trophies[id];
        }
        updater(id, checked, draft);
      });
    });
  });
}

function syncNotes() {
  const notes = document.getElementById("run-notes");
  if (notes && notes.value !== state.notes) {
    notes.value = state.notes;
  }
}

function bindStaticEvents() {
  const resetModal = document.getElementById("reset-modal");
  const openResetModal = () => {
    resetModal.classList.remove("is-hidden");
    resetModal.setAttribute("aria-hidden", "false");
  };
  const closeResetModal = () => {
    resetModal.classList.add("is-hidden");
    resetModal.setAttribute("aria-hidden", "true");
  };
  const confirmResetRun = () => {
    state = structuredClone(DEFAULT_STATE);
    persist();
    render();
    closeResetModal();
  };

  function setInventoryPanelState(shell, expanded) {
    const button = shell.querySelector("[data-inventory-toggle]");
    const panel = shell.querySelector("[data-inventory-panel]");
    const panelId = button?.getAttribute("data-inventory-toggle");
    shell.classList.toggle("is-collapsed", !expanded);
    if (button) {
      button.setAttribute("aria-expanded", String(expanded));
    }
    if (panel) {
      panel.hidden = !expanded;
    }
    if (panelId && state.inventoryExpanded) {
      state.inventoryExpanded[panelId] = expanded;
      persist();
    }
  }

  document.querySelectorAll("[data-inventory-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const shell = button.closest(".inventory-panel");
      const isCollapsed = shell.classList.contains("is-collapsed");
      setInventoryPanelState(shell, isCollapsed);
    });
  });

  document.querySelectorAll(".inventory-panel").forEach((shell) => {
    const button = shell.querySelector("[data-inventory-toggle]");
    const panelId = button?.getAttribute("data-inventory-toggle");
    const expanded = panelId ? Boolean(state.inventoryExpanded?.[panelId]) : false;
    setInventoryPanelState(shell, expanded);
  });

  const inventoryToggleAllButton = document.getElementById("inventory-toggle-all");
  if (inventoryToggleAllButton) {
    const syncInventoryToggleAllLabel = () => {
      const shells = Array.from(document.querySelectorAll(".inventory-panel"));
      const hasExpanded = shells.some((shell) => !shell.classList.contains("is-collapsed"));
      inventoryToggleAllButton.textContent = hasExpanded ? "Collapse All" : "Expand All";
    };

    syncInventoryToggleAllLabel();
    inventoryToggleAllButton.addEventListener("click", () => {
      const shells = Array.from(document.querySelectorAll(".inventory-panel"));
      const hasExpanded = shells.some((shell) => !shell.classList.contains("is-collapsed"));
      const nextExpanded = !hasExpanded;
      shells.forEach((shell) => {
        setInventoryPanelState(shell, nextExpanded);
      });
      syncInventoryToggleAllLabel();
    });
  }

  document.getElementById("run-notes").addEventListener("input", (event) => {
    state.notes = event.target.value;
    persist();
  });

  document.getElementById("clear-notes").addEventListener("click", () => {
    updateState((draft) => {
      draft.notes = "";
    });
  });

  document.getElementById("reset-run").addEventListener("click", () => {
    openResetModal();
  });

  document.getElementById("reset-cancel").addEventListener("click", closeResetModal);
  document.getElementById("reset-confirm").addEventListener("click", confirmResetRun);
  resetModal.querySelectorAll("[data-modal-close]").forEach((node) => {
    node.addEventListener("click", closeResetModal);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !resetModal.classList.contains("is-hidden")) {
      closeResetModal();
    }
  });
}

bindStaticEvents();
render();
