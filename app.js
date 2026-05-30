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
    summary: "Open to power. Collect all shield parts. Build in bunker.",
    category: "Setup",
    risk: "Low",
    tags: ["Required", "Early game"],
    details: "Open to power. Collect all shield parts. Build in bunker.",
    checkpoints: [
      "Power switch is active.",
      "Armory, Infirmary, Supply, Tank, Dragon, and Department routes are familiar.",
      "Shield part routes are being watched while the map opens.",
      "GobbleGum setup is agreed before the run speeds up."
    ],
    subtasks: [
      { title: "Open Route", detail: "Buy through spawn side, then right side to power." },
      { title: "Shield Part 1", detail: "Chair next to Jugg, truck door, or bunker basement." },
      { title: "Power", detail: "Turn power on." },
      { title: "Shield Parts 2-3", detail: "Part 2: Infirmary bed, wine, or roof concrete. Part 3: Armory roof crate, wall, or perk-a-cola." },
      { title: "Build Shield", detail: "Build in bunker." }
    ],
    hints: []
  },
  {
    id: "groph-modules",
    title: "Charge the Groph Modules",
    summary: "Collect command cores. Finish Dragon, Supply, and Tank. Pull GKZ.",
    category: "Setup",
    risk: "Medium",
    tags: ["Required", "Defense"],
    prerequisites: ["power"],
    details: "Collect command cores. Finish Dragon, Supply, and Tank modules. Pull GKZ.",
    checkpoints: [
      "Dragon Command module complete.",
      "Supply Depot module complete.",
      "Tank Factory module complete.",
      "All three network circuits inserted into the bunker terminal."
    ],
    subtasks: [
      { title: "Command Cores", detail: "Collect the three command cores." },
      { title: "Run Cylinders", detail: "Dragon normal. Supply trap next to terminal. Tank normal." },
      { title: "GKZ", detail: "Hit box whenever possible." }
    ],
    hints: []
  },
  {
    id: "dragon-strike",
    title: "Ride the Dragon",
    summary: "Use bunker terminal, fly from Supply, take egg, hit red light.",
    category: "Unlock",
    risk: "High",
    tags: ["Required", "Lockdown"],
    prerequisites: ["groph-modules"],
    details: "Use bunker terminal, fly from Supply, take the egg, and hit the red light.",
    checkpoints: [
      "Dragon ride completed.",
      "Hatchery lockdown survived.",
      "Dragon Strike collected."
    ],
    subtasks: [
      { title: "Bunker to Egg", detail: "Interact with bunker basement computer. Call dragon at Supply Depot." },
      { title: "Egg Route", detail: "Shoot egg, grab it, sewer back, shoot the red light." }
    ],
    hints: []
  },
  {
    id: "egg-gauntlet",
    title: "Work the Dragon Egg",
    summary: "Heat egg, clear napalm trial, run lockdown, incubate.",
    category: "Quest item",
    risk: "High",
    tags: ["Required", "Quest item"],
    prerequisites: ["dragon-strike"],
    details: "Heat the egg, complete the napalm trial, clear lockdown, then incubate.",
    checkpoints: [
      "Dragon egg collected.",
      "Egg placed and warmed at the nest.",
      "Three challenge board tasks completed.",
      "Egg incubated and cooled.",
      "Gauntlet of Siegfried claimed."
    ],
    subtasks: [
      { title: "Dragon Fire", detail: "Place egg in fire. Recover after cooldown." },
      { title: "Egg Trial", detail: "Kill Napalm Zombies." },
      { title: "Tank Trophy", detail: "Use dragon shield fire attack at Tank Factory." },
      { title: "Lockdown Prep", detail: "Call dragon and fly to Hatchery." },
      { title: "Lockdown", detail: "Start lockdown. Use turret. Penetrative multi-kills with Hatchery MG42. Melee kills with Guard of Fafnir." },
      { title: "Exit", detail: "Claim Dragon Strike controller. Incubate egg in basement. Kill Valkyrie near vent. Sewer out." }
    ],
    hints: []
  },
  {
    id: "shield-trophies",
    title: "Collect Trophies",
    summary: "Collect all six while setting up valves and gauntlet.",
    category: "Support",
    risk: "Medium",
    tags: ["Required", "Collectibles"],
    prerequisites: ["dragon-strike"],
    details: "Collect all six trophies while setting up valves and gauntlet.",
    checkpoints: [
      "All six trophies collected."
    ],
    subtasks: [
      { title: "Valve Track", detail: "Keep green and pink valve locations." },
      { title: "Trophies", detail: "Dragon strike nuke. Laser trap. Statue outside power." },
      { title: "Kronos Route", detail: "Fly to KRONOS." },
      { title: "GKZ Pass", detail: "PaP GKZ. Grab egg. Sewer out." },
      { title: "Safe Trophy", detail: "Release dragon, then use fist on bunker basement safe." },
      { title: "Challenges", detail: "Go to power to start world challenges." }
    ],
    hints: []
  },
  {
    id: "valves",
    title: "Solve the Valve Network",
    summary: "Kill Hatchery Valkyrie. Solve path. Pull cylinder. Enter KRONOS.",
    category: "Puzzle",
    risk: "High",
    tags: ["Required", "Puzzle"],
    prerequisites: ["egg-gauntlet", "shield-trophies"],
    details: "Kill the Valkyrie at Hatchery, solve the path, pull the cylinder, and enter KRONOS.",
    checkpoints: [
      "Generator powered in the Hatchery.",
      "Start valve identified.",
      "Route solved.",
      "Master Command Cylinder collected."
    ],
    subtasks: [
      { title: "Generator", detail: "Kill Valkyrie near generator." },
      { title: "Valve Read", detail: "Find green start and cylinder valve. Enter both into solver." },
      { title: "Cylinder", detail: "Set valves, recover cylinder, insert into SOPHIA, spell KRONOS." }
    ],
    hints: []
  },
  {
    id: "trials",
    title: "Complete SOPHIA's Trials",
    summary: "Insert trophies and clear all six trials.",
    category: "Trials",
    risk: "High",
    tags: ["Required", "Execution"],
    prerequisites: ["valves"],
    details: "Insert trophies and clear all six trials.",
    checkpoints: [
      "Trophies inserted.",
      "Valkyrie escort cleared.",
      "Nuke trial cleared.",
      "Gersh trial cleared.",
      "Module defense cleared.",
      "Mangler escort cleared.",
      "Download trial cleared."
    ],
    subtasks: [
      { title: "Start Trials", detail: "Insert trophies at the opposite terminal." },
      { title: "Escort the Valkyrie", detail: "Spawn, Tank Factory, or Supply Depot. Escort and destroy at Power." },
      { title: "Gersh Trial", detail: "Shoot the wisp three times." },
      { title: "Module Defense", detail: "Kill in the yard, release the whelp for the trophy, then place it in SOPHIA." },
      { title: "Escort the Mangler", detail: "Spawn, Tank Factory, or Supply Depot. Shoot arm off. Kite to Dragon Command. Bait onto platform." },
      { title: "Download Trial", detail: "Teleport to lockdown, start download, hold the last Mangler, kill midway, hold the last Mangler again, kill at finish, take the card, sewer back, place it." },
      { title: "Nuke Trial", detail: "Disable bombs in flash order." }
    ],
    hints: []
  },
  {
    id: "keycard",
    title: "Finish the Final Lockdown",
    summary: "Take power core, release whelp, return to SOPHIA, enter boss fight.",
    category: "Final prep",
    risk: "High",
    tags: ["Required", "Defense"],
    prerequisites: ["trials"],
    details: "Take the power core, release the whelp, return to SOPHIA, and enter boss fight.",
    checkpoints: [
      "Keycard recovered.",
      "Hatchery lockdown completed.",
      "Power core claimed from SOPHIA."
    ],
    subtasks: [
      { title: "Power Core", detail: "Take power core from SOPHIA to spawn." },
      { title: "Boss Entry", detail: "Release whelp. Return to SOPHIA. Interact and sewer to boss fight." }
    ],
    hints: []
  },
  {
    id: "boss",
    title: "Defeat Nikolai",
    summary: "Clear dragon phase, then break Nikolai's cockpit.",
    category: "Boss",
    risk: "Very High",
    tags: ["Required", "Boss fight"],
    prerequisites: ["keycard"],
    details: "Clear dragon phase, then break Nikolai's cockpit.",
    checkpoints: [
      "Power core delivered.",
      "Arena access triggered.",
      "Boss arena entered.",
      "Nikolai defeated."
    ],
    subtasks: [
      { title: "Dragon Fight", detail: "Press button in center. Use shield on fire. Shoot weak points Nikolai opens. Use GKZ. Repeat three times." },
      { title: "Nikolai Fight", detail: "Spam glowing sides of cockpit." }
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
  { id: "artifact-egg", code: "A1", name: "Dragon Egg", meta: "Quest carrier item", hint: "Shot loose on the Hatchery sewer route.", shape: "egg" },
  { id: "artifact-strike", code: "A2", name: "Dragon Strike", meta: "Hatchery lockdown reward", hint: "Earned after the Hatchery lockdown.", shape: "core" },
  { id: "artifact-gauntlet", code: "A3", name: "Gauntlet", meta: "Siegfried specialist item", hint: "Claimed after the incubated egg cools down.", shape: "gauntlet" },
  { id: "artifact-cylinder", code: "A4", name: "Master Cylinder", meta: "Valve step reward", hint: "Recovered from the completed valve network.", shape: "cylinder" },
  { id: "artifact-keycard", code: "A5", name: "Keycard", meta: "Final lockdown item", hint: "Pulled from the trial terminal before the Hatchery lockdown.", shape: "keycard" },
  { id: "artifact-core", code: "A6", name: "Power Core", meta: "Boss access item", hint: "Taken from SOPHIA after the final lockdown.", shape: "core" }
];

const TROPHIES = [
  { id: "trophy-1", code: "T1", name: "Supply Trap Cubby", meta: "Supply Depot", hint: "Open the trap cubby in Supply after activating it.", shape: "trophy" },
  { id: "trophy-2", code: "T2", name: "Pack Toilet", meta: "Bunker", hint: "Check the toilet inside the Pack-a-Punch bunker.", shape: "trophy" },
  { id: "trophy-3", code: "T3", name: "Statue Shot", meta: "Dragon Command", hint: "Shoot the small statue in Dragon Command.", shape: "trophy" },
  { id: "trophy-4", code: "T4", name: "Puddle Strike", meta: "Supply Depot", hint: "Use Dragon Strike on the puddle by Supply.", shape: "trophy" },
  { id: "trophy-5", code: "T5", name: "Safe Gauntlet", meta: "Bunker", hint: "Use the Gauntlet on the bunker safe.", shape: "trophy" },
  { id: "trophy-6", code: "T6", name: "Pipe Flame", meta: "Tank Factory", hint: "Use shield flame on the Tank Factory pipe.", shape: "trophy" }
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

  container.querySelectorAll("[data-step-select]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const stepId = event.currentTarget.getAttribute("data-step-select");
      updateState((draft) => {
        draft.selectedStepId = stepId;
      });
    });
  });

  container.querySelectorAll("[data-step-complete]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const stepId = event.currentTarget.getAttribute("data-step-complete");
      updateState((draft) => {
        draft.stepStatus[stepId] = !draft.stepStatus[stepId];
      });
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
