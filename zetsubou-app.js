const STORAGE_KEY = "bo3-super-ee-helper:zns:first-pass";

const RECOMMENDED_GOBBLEGUMS = [
  "Anywhere But Here",
  "In Plain Sight",
  "Perkaholic",
  "Alchemical Antithesis",
  "Aftertaste"
];

const RECOMMENDED_WEAPONS = [
  { name: "Masamune", wonder: true },
  { name: "Dingo" },
  { name: "Brecci" },
  { name: "HVK-30" }
];

const STEP_DATA = [
  {
    id: "power",
    title: "Power, Shield, and Gas Mask",
    summary: "Open the map, power both labs and the bunker, then build the Zombie Shield and Gas Mask as you move.",
    category: "Setup",
    risk: "Medium",
    tags: ["Required", "Early game"],
    details: "Zetsubou setup is smoother if you treat power, shield, and gas mask as one route. Most part spawns are directly on the way to the bunker and docks.",
    checkpoints: [
      "Lab A and Lab B generators activated.",
      "Power switch activated.",
      "All three Zombie Shield parts collected and built.",
      "All three Gas Mask parts collected and built."
    ],
    subtasks: [
      { title: "Open Route and Fill Bucket", detail: "Grab a bucket at spawn, fill blue water in Lab A, power Lab A, then cross to Lab B, fill again, and power Lab B to unlock the bunker." },
      { title: "Turn On Bunker Power", detail: "Open the bunker, clear the power-room lockdown, then flip the power switch." },
      { title: "Shield Part 1 — Lab A", detail: "Check underneath Lab A: on the pillar by the 115 canister, on the Kuda wall-buy pillar, or on the wall by the zombie barrier." },
      { title: "Shield Part 2 — Lab B", detail: "Check the three tree spawns around Lab B on the green-water side." },
      { title: "Shield Part 3 — AA Platform", detail: "Check the bunker AA room: upper-right ledge, by the broken rocks / window, or near the Mystery Box side." },
      { title: "Gas Mask Parts", detail: "Check the green-water Lab B crates/scaffolding for the mask, the AA / plane-crash platform for the cable, and the docks past power for the filter." },
      { title: "Build Both", detail: "Build the Shield and Gas Mask at the Lab A or Lab B workbench as soon as you have the full sets." }
    ],
    hints: []
  },
  {
    id: "skull",
    title: "Acquire Skull of Nan Sapwe",
    summary: "Cleanse the four ritual skulls, survive the chamber lockdown, and unlock mesmerize.",
    category: "Setup",
    risk: "Medium",
    tags: ["Required", "Specialist"],
    prerequisites: ["power"],
    details: "Each skull at the altar matches one pedestal symbol somewhere on the map. Finish all four cleanses, then complete the hidden chamber defense to claim the specialist weapon.",
    checkpoints: [
      "All four ritual skulls returned.",
      "Temple staircase opened.",
      "Skull of Nan Sapwe claimed.",
      "Hidden poster mesmerized in the bunker."
    ],
    subtasks: [
      { title: "Match Symbols", detail: "Read the four skull symbols at the shrine, then carry each matching skull to its pedestal." },
      { title: "Pedestal Locations", detail: "The four ritual pedestals are at Spawn, the Propeller Trap room, the Docks, and the lower bunker operations room across from Pack-a-Punch." },
      { title: "Defend Pedestals", detail: "Hold each skull ritual until it finishes, then return the cleansed skull to the shrine." },
      { title: "Claim Skull", detail: "Enter the revealed chamber, survive the lockdown, and take the Skull of Nan Sapwe." },
      { title: "Reveal Poster", detail: "Mesmerize the half poster across from purple water in the bunker. This unlocks the Anywhere But Here cog room later." }
    ],
    hints: []
  },
  {
    id: "kt4",
    title: "Build the KT-4",
    summary: "Collect the three KT-4 parts and build the wonder weapon in the bunker lab.",
    category: "Weapon",
    risk: "Medium",
    tags: ["Required", "Weapon"],
    prerequisites: ["skull"],
    details: "None of the KT-4 parts are random once the requirements are met, so this step is mostly about doing them in a clean order.",
    checkpoints: [
      "Glowing-zombie vial collected.",
      "Spider venom collected.",
      "Underwater plant collected.",
      "KT-4 assembled at the lab workbench."
    ],
    subtasks: [
      { title: "Spider Venom", detail: "During a spider round, lower the Lab A cage, lure a spider inside, raise the cage, and extract the venom." },
      { title: "Glowing Vial", detail: "After power is on, kill the special glowing green zombie and pick up the dropped vial." },
      { title: "Underwater Plant", detail: "Swim through the underwater tunnel past Mule Kick, use spores for air if needed, and collect the plant at the bottom." },
      { title: "Build", detail: "Build the KT-4 at the bunker workbench." }
    ],
    hints: []
  },
  {
    id: "masamune",
    title: "Upgrade to Masamune",
    summary: "Finish the challenge gate, collect the three upgrade parts, and build the Masamune.",
    category: "Weapon",
    risk: "High",
    tags: ["Required", "Upgrade"],
    prerequisites: ["kt4"],
    details: "This is the main midgame hurdle. Every player must finish their altar challenges before the electric-shield vial can be taken.",
    checkpoints: [
      "Skeleton vial collected from the hidden cage room.",
      "Spider fang collected after the boss fight.",
      "Rainbow-water plant grown and harvested.",
      "Masamune crafted."
    ],
    subtasks: [
      { title: "Finish Challenges", detail: "Complete all three shrine challenges for every player. Once done, lightning will start striking the altar." },
      { title: "Skeleton Vial", detail: "Charge the shield with lightning at the shrine, bash the Lab B cage panel, ride down, and take the vial from the skeleton." },
      { title: "Rainbow Plant", detail: "Ride the sewer pipe from the bunker and hold interact at the glowing 115 rocks to collect Rainbow Water. Mesmerize the hidden wall in the underwater tunnel, plant a seed, and water it with Rainbow Water for three consecutive rounds." },
      { title: "Spider Fang", detail: "Use the KT-4 to open the webbed cave near Lab A, beat the giant spider by shooting its glowing mouth, then collect the fang." },
      { title: "Build", detail: "Build the Masamune at the upgrade bench." }
    ],
    hints: []
  },
  {
    id: "cogs",
    title: "Recover the Three Cogs",
    summary: "Use the three hidden mechanics to recover the elevator cogs.",
    category: "Collectibles",
    risk: "High",
    tags: ["Required", "Collectibles"],
    prerequisites: ["masamune"],
    details: "The first cog is guaranteed if you have Anywhere But Here. The second is the risky zipline drop. The third depends on getting an AA shell plant and shooting the plane.",
    checkpoints: [
      "Anywhere But Here cog collected.",
      "Zipline dock cog collected.",
      "Plane-shot cog collected.",
      "All three cogs ready for the elevator."
    ],
    subtasks: [
      { title: "Cog 1 — Anywhere But Here", detail: "After the bunker poster has been revealed, use Anywhere But Here and grab the cog from the hidden egg room." },
      { title: "Cog 2 — Zipline Dock", detail: "Electrify the zipline panel with the shield. In solo, hit the panel and knife/melee while crossing over the dock to drop down. In co-op, have a teammate activate it for you." },
      { title: "Cog 3 — AA Shell", detail: "Plant a seed, water it with Blue Water, and shoot it with the KT-4 or Masamune for three rounds until you get an AA shell. Load the AA gun and shoot the passing plane." },
      { title: "Crash Locations", detail: "After the plane is shot down, the smoking cog lands near the bunker, near the zipline / blue-water side, or near green water." }
    ],
    hints: []
  },
  {
    id: "elevator",
    title: "Repair the Elevator",
    summary: "Reveal the hidden cog machine and use it to unlock the final elevator.",
    category: "Final prep",
    risk: "High",
    tags: ["Required", "Execution"],
    prerequisites: ["cogs"],
    details: "The elevator machine is hidden behind a mesmerize wall just inside the bunker entrance on the left side.",
    checkpoints: [
      "Hidden cog alcove revealed.",
      "Three cogs installed.",
      "Elevator ready."
    ],
    subtasks: [
      { title: "Reveal Panel", detail: "At the bunker entrance, mesmerize the wall beside the elevator with the Skull of Nan Sapwe." },
      { title: "Install Cogs", detail: "Place all three cogs into the mechanism." },
      { title: "Final Prep", detail: "Before going down, make sure you have the Masamune, a fresh Gas Mask, and the perks / ammo you want for the fight." }
    ],
    hints: []
  },
  {
    id: "boss",
    title: "Defeat Takeo",
    summary: "Enter the boss arena, clear the vines, and destroy the glowing weak points with the Masamune.",
    category: "Boss fight",
    risk: "Very High",
    tags: ["Required", "Boss kill"],
    prerequisites: ["elevator"],
    details: "Stay around the outside of the room, avoid the center slams, and wait for the orange weak points to appear before firing the Masamune.",
    checkpoints: [
      "Boss room entered.",
      "First glowing arm destroyed.",
      "Second glowing arm destroyed.",
      "Third glowing arm destroyed.",
      "Cutscene triggered."
    ],
    subtasks: [
      { title: "Open the Room", detail: "Use the Masamune to clear the vines after the elevator ride." },
      { title: "Damage Weak Point", detail: "When a tentacle or arm shows a glowing orange weak point, hit it with the Masamune." },
      { title: "Survive", detail: "Keep circling the arena while spiders and Thrashers spawn, and use the Skull if you get trapped." },
      { title: "Repeat", detail: "Repeat the damage cycle until all weak points are destroyed and the cutscene starts." }
    ],
    hints: []
  }
];

const SPORE_LOCATIONS = [
  "Anywhere But Here Room",
  "Zipline Dock",
  "AA Gun / Plane Crash"
];

const BUILDABLE_GROUPS = [
  {
    id: "shield",
    panel: "buildables",
    title: "Zombie Shield",
    description: "Three setup parts, built at Lab A or Lab B",
    parts: [
      { id: "shield-a", code: "S1", name: "Lab A Part", meta: "Under Lab A", hint: "Pillar by 115 canister, Kuda pillar, or wall by the barrier.", shape: "shield" },
      { id: "shield-b", code: "S2", name: "Lab B Part", meta: "Trees around green water", hint: "Always attached to one of the three trees around Lab B.", shape: "shield" },
      { id: "shield-c", code: "S3", name: "AA Platform Part", meta: "Bunker AA room", hint: "Upper-right ledge, by the broken rocks / window, or near the Mystery Box side.", shape: "shield" }
    ]
  },
  {
    id: "gasmask",
    panel: "buildables",
    title: "Gas Mask",
    description: "Needed for underwater routes and spore protection",
    parts: [
      { id: "mask-green", code: "G1", name: "Mask", meta: "Lab B / green water", hint: "Wooden crates by the rocks, scaffolding by the water, or crates near Double Tap.", shape: "core" },
      { id: "mask-cable", code: "G2", name: "Cable", meta: "AA / plane-crash platform", hint: "Rock left of the Mystery Box, beside the crashed fuselage, or nearby on the platform path.", shape: "circuit" },
      { id: "mask-filter", code: "G3", name: "Filter", meta: "Docks past power", hint: "By the zipline, on the rock near the wall-buy, or near the Mystery Box.", shape: "core" }
    ]
  },
  {
    id: "kt4",
    panel: "buildables",
    title: "KT-4",
    description: "Lab-crafted wonder weapon",
    parts: [
      { id: "kt4-vial", code: "K1", name: "Glowing-Zombie Vial", meta: "Drops after power is on", hint: "Kill the glowing green zombie when it appears.", shape: "cylinder" },
      { id: "kt4-venom", code: "K2", name: "Spider Venom", meta: "Lab A cage extraction", hint: "Lower the cage during a spider round and trap one spider inside.", shape: "core" },
      { id: "kt4-plant", code: "K3", name: "Underwater Plant", meta: "Bottom of the Mule Kick tunnel", hint: "Deep in the underwater cave past Mule Kick.", shape: "egg" }
    ]
  },
  {
    id: "masamune-kit",
    panel: "dragon-control",
    title: "Masamune Parts",
    description: "KT-4 upgrade ingredients",
    parts: [
      { id: "masa-vial", code: "M1", name: "Skeleton Vial", meta: "Hidden cage room under Lab B", hint: "Requires all player challenges complete and an electrified shield.", shape: "cylinder" },
      { id: "masa-fang", code: "M2", name: "Spider Fang", meta: "Spider boss reward", hint: "Open the webbed cave with the KT-4 and beat the giant spider.", shape: "core" },
      { id: "masa-plant", code: "M3", name: "Rainbow-Water Plant", meta: "Hidden underwater planter", hint: "Water a planted seed with Rainbow Water for three consecutive rounds.", shape: "egg" }
    ]
  }
];

const ARTIFACTS = [
  { id: "artifact-skull", code: "A1", name: "Skull of Nan Sapwe", meta: "Specialist weapon and mesmerize tool", hint: "Earned after cleansing all four skull rituals.", shape: "trophy" },
  { id: "artifact-kt4", code: "A2", name: "KT-4", meta: "Base wonder weapon", hint: "", shape: "cylinder" },
  { id: "artifact-masamune", code: "A3", name: "Masamune", meta: "Required boss-fight upgrade", hint: "", shape: "core" },
  { id: "artifact-shield", code: "A4", name: "Zombie Shield", meta: "Needed for electric cage and zipline steps", hint: "Charge it with lightning at the altar after all challenges are done.", shape: "circuit" },
  { id: "artifact-gasmask", code: "A5", name: "Gas Mask", meta: "Recommended before long underwater routes and boss", hint: "Buildable at Lab A or Lab B.", shape: "core" },
  { id: "artifact-shell", code: "A6", name: "AA Shell", meta: "Plant reward used to shoot the plane", hint: "Comes from a blue-water seed upgraded over multiple rounds.", shape: "egg" }
];

const TROPHIES = [
  { id: "cog-abh", code: "C1", name: "Anywhere But Here Cog", meta: "Teleported egg room", hint: "Requires the poster mesmerize to be done first.", shape: "trophy" },
  { id: "cog-zipline", code: "C2", name: "Zipline Cog", meta: "Dock below the electrified zipline", hint: "Solo: hit the panel, ride, then melee above the dock.", shape: "trophy" },
  { id: "cog-plane", code: "C3", name: "Plane Cog", meta: "Recovered after AA gun plane shot", hint: "Lands near bunker, zipline / blue water, or green water.", shape: "trophy" }
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
  spores: [],
  buildables: Object.fromEntries(BUILDABLE_GROUPS.flatMap((group) => group.parts.map((part) => [part.id, false]))),
  artifacts: Object.fromEntries(ARTIFACTS.map((artifact) => [artifact.id, false])),
  trophies: Object.fromEntries(TROPHIES.map((trophy) => [trophy.id, false]))
};

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved) return structuredClone(DEFAULT_STATE);
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
  next.spores = Array.isArray(saved.spores)
    ? saved.spores.filter((item) => SPORE_LOCATIONS.includes(item))
    : next.spores;

  for (const step of STEP_DATA) {
    next.stepStatus[step.id] = Boolean(saved.stepStatus && saved.stepStatus[step.id]);
  }
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
  if (risk === "Very High" || risk === "High") return "badge--danger";
  if (risk === "Medium") return "badge--warning";
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
  document.getElementById("weapon-loadout").innerHTML = RECOMMENDED_WEAPONS
    .map((weapon) => `<span class="loadout-chip ${weapon.wonder ? "loadout-chip--wonder" : ""}">${weapon.name}</span>`)
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
      updateState((draft) => { draft.stepStatus[stepId] = !draft.stepStatus[stepId]; });
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
          <div class="step-tags"></div>
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

      ${step.id === "cogs" ? renderSporeTrackerSection() : ""}

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
    updateState((draft) => { draft.stepStatus[step.id] = !draft.stepStatus[step.id]; });
  });

  if (step.id === "cogs") {
    bindSporeTrackerEvents(container);
  }
}

function renderSporeTrackerSection() {
  return `
    <section class="step-detail__section utility-card">
      <div class="utility-card__header">
        <div>
          <p class="panel__eyebrow">Cog Progress</p>
          <h3>Cog Method Tracker</h3>
        </div>
        <button type="button" class="ghost-button ghost-button--small" id="clear-spores">Clear</button>
      </div>
      <p class="utility-text">Toggle the three cog methods as you finish them. Sequence runs left to right.</p>
      <div class="pill-grid" id="spore-location-buttons"></div>
      <div class="bomb-sequence" id="spore-sequence-list"></div>
    </section>
  `;
}

function bindSporeTrackerEvents(container) {
  const buttonContainer = container.querySelector("#spore-location-buttons");
  const list = container.querySelector("#spore-sequence-list");

  SPORE_LOCATIONS.forEach((location) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `pill-button ${state.spores.includes(location) ? "is-added" : ""}`;
    button.textContent = location;
    button.addEventListener("click", () => {
      updateState((draft) => {
        const idx = draft.spores.indexOf(location);
        if (idx === -1) {
          if (draft.spores.length < 3) draft.spores.push(location);
        } else {
          draft.spores.splice(idx, 1);
        }
      });
    });
    buttonContainer.appendChild(button);
  });

  if (state.spores.length === 0) {
    list.innerHTML = '<span class="empty-state">No cog methods recorded yet.</span>';
  } else {
    state.spores.forEach((location, index) => {
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

  container.querySelector("#clear-spores").addEventListener("click", () => {
    updateState((draft) => { draft.spores = []; });
  });
}

function renderActiveUtility() {
  // Utility area reserved for future ZNS-specific tools
}

function renderBuildables() {
  const ktContainer = document.getElementById("buildables-grid");
  const canisterContainer = document.getElementById("dragon-control-grid");
  ktContainer.innerHTML = "";
  canisterContainer.innerHTML = "";
  let buildableCount = 0;
  let buildableTotal = 0;
  let upgradeCount = 0;
  let upgradeTotal = 0;

  BUILDABLE_GROUPS.forEach((group) => {
    const targetContainer = group.panel === "dragon-control" ? canisterContainer : ktContainer;
    const done = group.parts.filter((p) => state.buildables[p.id]).length;
    const wrap = document.createElement("div");
    wrap.className = "build-group";
    wrap.innerHTML = `
      <div class="build-group__header">
        <div>
          <h3 class="build-group__title">${group.title}</h3>
          <p class="build-group__progress">${done} / ${group.parts.length} collected</p>
        </div>
      </div>
      <div class="build-group__parts"></div>
    `;
    const partsEl = wrap.querySelector(".build-group__parts");
    group.parts.forEach((part) => {
      partsEl.appendChild(makeBoardCard(part, "buildable", state.buildables[part.id]));
    });
    targetContainer.appendChild(wrap);

    if (group.panel === "dragon-control") {
      upgradeTotal += group.parts.length;
      upgradeCount += done;
    } else {
      buildableTotal += group.parts.length;
      buildableCount += done;
    }
  });

  document.getElementById("buildable-count").textContent = `${buildableCount} / ${buildableTotal} marked`;
  document.getElementById("dragon-control-count").textContent = `${upgradeCount} / ${upgradeTotal} marked`;
  document.querySelector('[data-inventory-toggle="buildables"]').closest('.inventory-panel')
    .classList.toggle('is-complete', BUILDABLE_GROUPS.filter((g) => g.panel !== "dragon-control").every((g) => g.parts.every((p) => state.buildables[p.id])));
  document.querySelector('[data-inventory-toggle="dragon-control"]').closest('.inventory-panel')
    .classList.toggle('is-complete', BUILDABLE_GROUPS.filter((g) => g.panel === "dragon-control").every((g) => g.parts.every((p) => state.buildables[p.id])));

  bindBoardToggles("buildable", (id, checked, draft) => { draft.buildables[id] = checked; });
}

function renderArtifacts() {
  const container = document.getElementById("artifacts-grid");
  container.innerHTML = "";
  ARTIFACTS.forEach((item) => {
    container.appendChild(makeBoardCard(item, "artifact", state.artifacts[item.id]));
  });
  const count = ARTIFACTS.filter((a) => state.artifacts[a.id]).length;
  document.getElementById("artifact-count").textContent = `${count} / ${ARTIFACTS.length} secured`;
  document.querySelector('[data-inventory-toggle="artifacts"]').closest('.inventory-panel')
    .classList.toggle('is-complete', ARTIFACTS.every(a => state.artifacts[a.id]));
  bindBoardToggles("artifact", (id, checked, draft) => { draft.artifacts[id] = checked; });
}

function renderTrophies() {
  const container = document.getElementById("trophy-grid");
  container.innerHTML = "";
  TROPHIES.forEach((item) => {
    container.appendChild(makeBoardCard(item, "trophy", state.trophies[item.id]));
  });
  const count = TROPHIES.filter((t) => state.trophies[t.id]).length;
  document.getElementById("trophy-count").textContent = `${count} / ${TROPHIES.length} collected`;
  document.querySelector('[data-inventory-toggle="trophies"]').closest('.inventory-panel')
    .classList.toggle('is-complete', TROPHIES.every(t => state.trophies[t.id]));
  bindBoardToggles("trophy", (id, checked, draft) => { draft.trophies[id] = checked; });
}

function makeBoardCard(item, kind, checked) {
  const card = document.createElement("div");
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
  if (typeof item === "string") return { title: item, detail: "" };
  return { title: item.title || "", detail: item.detail || "" };
}

function bindBoardToggles(kind, updater) {
  document.querySelectorAll(`[data-${kind}]`).forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute(`data-${kind}`);
      updateState((draft) => {
        let checked = false;
        if (kind === "buildable") checked = !draft.buildables[id];
        else if (kind === "artifact") checked = !draft.artifacts[id];
        else checked = !draft.trophies[id];
        updater(id, checked, draft);
      });
    });
  });
}

function syncNotes() {
  const notes = document.getElementById("run-notes");
  if (notes && notes.value !== state.notes) notes.value = state.notes;
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
    if (!button || !panel) return;
    shell.classList.toggle("is-collapsed", !expanded);
    button.setAttribute("aria-expanded", String(expanded));
    updateState((draft) => { draft.inventoryExpanded[button.getAttribute("data-inventory-toggle")] = expanded; });
  }

  document.querySelectorAll(".inventory-panel").forEach((shell) => {
    const key = shell.querySelector("[data-inventory-toggle]")?.getAttribute("data-inventory-toggle");
    if (key && state.inventoryExpanded[key]) {
      shell.classList.remove("is-collapsed");
      shell.querySelector("[data-inventory-toggle]")?.setAttribute("aria-expanded", "true");
    }
    shell.querySelector(".hud-panel__toggle")?.addEventListener("click", () => {
      const expanded = shell.classList.contains("is-collapsed");
      setInventoryPanelState(shell, expanded);
    });
  });

  const inventoryToggleAllButton = document.getElementById("inventory-toggle-all");
  if (inventoryToggleAllButton) {
    const syncLabel = () => {
      const shells = Array.from(document.querySelectorAll(".inventory-panel"));
      const hasExpanded = shells.some((s) => !s.classList.contains("is-collapsed"));
      inventoryToggleAllButton.textContent = hasExpanded ? "Collapse All" : "Expand All";
    };
    syncLabel();
    inventoryToggleAllButton.addEventListener("click", () => {
      const shells = Array.from(document.querySelectorAll(".inventory-panel"));
      const hasExpanded = shells.some((s) => !s.classList.contains("is-collapsed"));
      shells.forEach((s) => setInventoryPanelState(s, !hasExpanded));
      syncLabel();
    });
  }

  document.getElementById("run-notes").addEventListener("input", (event) => {
    state.notes = event.target.value;
    persist();
  });

  document.getElementById("clear-notes").addEventListener("click", () => {
    updateState((draft) => { draft.notes = ""; });
  });

  document.getElementById("reset-run").addEventListener("click", openResetModal);
  document.getElementById("reset-cancel").addEventListener("click", closeResetModal);
  document.getElementById("reset-confirm").addEventListener("click", confirmResetRun);
  resetModal.querySelectorAll("[data-modal-close]").forEach((node) => {
    node.addEventListener("click", closeResetModal);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !resetModal.classList.contains("is-hidden")) closeResetModal();
  });
}

bindStaticEvents();
render();
