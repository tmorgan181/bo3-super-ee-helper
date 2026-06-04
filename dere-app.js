const STORAGE_KEY = "bo3-super-ee-helper:de:first-pass";

const RECOMMENDED_GOBBLEGUMS = [
  "Danger Closest",
  "In Plain Sight",
  "Perkaholic",
  "Near Death Experience",
  "Cache Back"
];

const STEP_DATA = [
  {
    id: "power",
    title: "Restore Power",
    summary: "Open the map, turn on power, and get the Undercroft online.",
    category: "Setup",
    risk: "Low",
    tags: ["Required", "Early game"],
    details: "Your first priority is opening to the Undercroft, activating power, and getting the anti-gravity room usable for Pack-a-Punch access and later quest steps.",
    checkpoints: [
      "Power switch activated.",
      "Undercroft opened.",
      "Death Ray reachable.",
      "Pack-a-Punch route understood."
    ],
    subtasks: [
      { title: "Open the Castle", detail: "Buy through the courtyard and church path until you can reach the lower levels of the castle." },
      { title: "Turn on Power", detail: "Activate the power switch in the Undercroft beneath the pyramid room." },
      { title: "Enable Movement", detail: "Use or at least locate the Death Ray and the Wunderspheres because later steps depend on both." },
      { title: "Prep Pack-a-Punch", detail: "Hit all four blue wall plates in the anti-gravity room when ready so the Pack-a-Punch path is available." }
    ],
    hints: []
  },
  {
    id: "dragons",
    title: "Feed Dragons and Claim the Base Bow",
    summary: "Wake all three dragon statues and earn Wrath of the Ancients.",
    category: "Weapon",
    risk: "Medium",
    tags: ["Required", "Weapon", "Bow"],
    prerequisites: ["power"],
    details: "Der Eisendrache's base bow is earned by feeding all three stone dragons enough zombie souls, then claiming Wrath of the Ancients from the Undercroft altar.",
    checkpoints: [
      "All three dragons filled.",
      "Wrath of the Ancients claimed.",
      "Bow altar available for upgrades."
    ],
    subtasks: [
      { title: "Find the Three Dragons", detail: "One is near Double Tap, one is by Speed Cola / church, and one is in the courtyard above the rocket shield bench." },
      { title: "Feed Each Dragon", detail: "Get zombie kills beside a dragon until it crumbles and stops accepting souls." },
      { title: "Claim Wrath of the Ancients", detail: "Return to the bow altar in the Undercroft and pick up the base bow." }
    ],
    hints: []
  },
  {
    id: "upgrade-bows",
    title: "Upgrade the Bows You Actually Need",
    summary: "Make the elemental bows required for your player count and lobby type.",
    category: "Upgrade",
    risk: "Medium",
    tags: ["Required", "Upgrade", "Bow"],
    prerequisites: ["dragons"],
    details: "The main quest only needs upgraded bows, not all four in every match. Ranked solo needs one upgraded bow. Ranked co-op generally needs one upgraded bow per player. Non-ranked private games require all four bows.",
    checkpoints: [
      "Required bow quests chosen.",
      "At least one upgraded bow completed.",
      "Extra bows upgraded if lobby rules need them."
    ],
    subtasks: [
      { title: "Storm Bow", detail: "Shoot the weather vane, collect the arrow at the broken wall, charge urns, then finish the lightning quest at the pyramid." },
      { title: "Wolf Bow", detail: "Hit the four paintings in order, grab the arrow, shoot the rocket-pad flag, escort the wolf to dig sites, then finish at the wolf box." },
      { title: "Void Bow", detail: "Collect the purple quest item from the symbol wall, do the urn / symbol ritual, collect six skulls, then finish at the void box." },
      { title: "Fire Bow", detail: "Start at the clock tower, hit the launch pad circles with the Wundersphere, light the fireplaces, then feed the fire circles and finish the forge." }
    ],
    hints: []
  },
  {
    id: "ragnarok",
    title: "Build Ragnarok DG-4",
    summary: "Collect all three Ragnarok parts before the late quest and boss fight.",
    category: "Buildable",
    risk: "Medium",
    tags: ["Required", "Specialist"],
    prerequisites: ["dragons"],
    details: "Ragnarok DG-4 is mandatory. One part drops from the first Panzer, one comes from surviving the rocket test tunnel, and one is grabbed mid-flight from a Wundersphere after the Death Ray has been activated at least once.",
    checkpoints: [
      "Panzer part collected.",
      "Rocket test part collected.",
      "Death Ray / Wundersphere part collected.",
      "Ragnarok built at the workbench."
    ],
    subtasks: [
      { title: "Kill the First Panzer", detail: "The first Panzersoldat drops one Ragnarok part when killed." },
      { title: "Rocket Test Part", detail: "When the green lever behind the rocket becomes active, pull it, survive in the bunker, then hit the console by the teleporter before the lights go dark." },
      { title: "Wundersphere Part", detail: "After using the Death Ray at least once, ride the Bastion Wundersphere routes and grab the floating part in midair." },
      { title: "Assemble the DG-4", detail: "Build Ragnarok at the workbench once all three pieces are in hand." }
    ],
    hints: []
  },
  {
    id: "beacons",
    title: "Charge the Teleporter Beacons",
    summary: "Swap back to the base bow and prime the teleporter step in the Undercroft.",
    category: "Quest",
    risk: "Medium",
    tags: ["Required", "Main quest"],
    prerequisites: ["upgrade-bows", "ragnarok"],
    details: "When at least one upgraded bow is ready, return that upgraded bow to its altar, take back the base Wrath of the Ancients, and shoot the four glowing rods above the teleporter until all are charged.",
    checkpoints: [
      "Base bow reclaimed.",
      "All four teleporter rods charged.",
      "Margwa audio cue heard."
    ],
    subtasks: [
      { title: "Swap Bows", detail: "Put your upgraded bow back in its altar and pull the plain Wrath of the Ancients from the knight tomb." },
      { title: "Shoot the Rods", detail: "In the teleporter room above the pyramid, hit each electrified rod hanging above the teleporter." },
      { title: "Listen for Success", detail: "Once all rods are lit correctly, the orange glow fades and you hear the progress audio cue." }
    ],
    hints: []
  },
  {
    id: "wisps",
    title: "Complete the Wisp Step",
    summary: "Switch back to an upgraded bow and clear all four sparks in one round.",
    category: "Quest",
    risk: "High",
    tags: ["Required", "Timed"],
    prerequisites: ["beacons"],
    details: "A single sparking object appears at a time among eight possible map objects. You must shoot four wisps in one round, in time, with an upgraded bow only. A missed upgraded-bow shot or too much delay fails the attempt until next round.",
    checkpoints: [
      "Four wisps shot in one round.",
      "Purple teleporter ready light active.",
      "No failure audio cue triggered."
    ],
    subtasks: [
      { title: "Know the Eight Spawns", detail: "Check the Quick Revive phone, Double Tap truck tire, box above Double Tap, Samantha room globe, power-room phone pillar, barracks clock, church radio, and church fireplace clock." },
      { title: "Use an Upgraded Bow", detail: "Only upgraded bows work here. Do not test-shot random spots, because a wrong upgraded-bow shot fails the step." },
      { title: "Clear Four Wisps", detail: "Each correct hit triggers another Margwa growl. Finish all four before the timer expires." }
    ],
    hints: []
  },
  {
    id: "time-travel-1",
    title: "First Time Travel",
    summary: "Teleport to the past, collect the canister and fuse, and memorize the safe code.",
    category: "Quest",
    risk: "Very High",
    tags: ["Required", "Timed"],
    prerequisites: ["wisps"],
    details: "Once the teleporter light turns purple, all players must enter together. In the past, grab the glowing blue soul canister, collect the small fuse by the teleporter, and memorize the three safe symbols from top to bottom before being sent back.",
    checkpoints: [
      "Blue canister collected.",
      "Small fuse collected.",
      "Safe symbols memorized in order."
    ],
    subtasks: [
      { title: "Enter Together", detail: "When the bottom teleporter light is purple, every player in the match needs to be inside before activating it." },
      { title: "Grab Both Pickups", detail: "Take the glowing blue canister near Groph and the small fuse on the wooden crate beside the teleporter." },
      { title: "Read the Safe", detail: "Watch Groph's safe and remember the three symbols exactly from top to bottom." }
    ],
    hints: []
  },
  {
    id: "safe",
    title: "Open Groph's Safe",
    summary: "Use the Death Ray in Protect mode and enter the safe symbols correctly.",
    category: "Quest",
    risk: "Very High",
    tags: ["Required", "Code"],
    prerequisites: ["time-travel-1"],
    details: "Back in the present, a Panzer usually spawns. Insert the small fuse at the Death Ray, switch it to Protect, and enter the three safe symbols at the terminal outside the Clock Tower. Then open the safe in the laboratory to collect the keycard and the pair of large fuses.",
    checkpoints: [
      "Death Ray switched to Protect.",
      "Clock tower terminal code accepted.",
      "Safe opened.",
      "Keycard and big fuses collected."
    ],
    subtasks: [
      { title: "Handle the Return Panzer", detail: "Be ready for a forced Panzer spawn when the first time-travel trip ends." },
      { title: "Power the Death Ray Step", detail: "Insert the small fuse on the Clock Tower side of the Death Ray and flip the lever so the machine is set to Protect." },
      { title: "Input the Safe Code", detail: "Use the Clock Tower terminal and enter the three symbols in the exact top-to-bottom safe order." },
      { title: "Loot the Safe", detail: "Run to the lab safe and grab the keycard plus both large fuses from the opened shelf." }
    ],
    hints: []
  },
  {
    id: "sabotage",
    title: "Simon Says and Rocket Sabotage",
    summary: "Install the big fuses, beat both terminals, then grab the Vril Generator.",
    category: "Quest",
    risk: "High",
    tags: ["Required", "Memory"],
    prerequisites: ["safe"],
    details: "Put the two large fuses into the Death Ray towers, set the Death Ray back to Destroy, and complete both Simon Says terminals. After both are cleared, press the green button at the back of the Death Ray to crash the rocket into the clock tower and spawn the Vril Generator in the courtyard snow.",
    checkpoints: [
      "Both big fuses installed.",
      "Rocket pad terminal cleared.",
      "Clock tower terminal cleared.",
      "Vril Generator picked up."
    ],
    subtasks: [
      { title: "Install the Big Fuses", detail: "Place one large fuse into each Death Ray tower where the vertical current is visible." },
      { title: "Set Destroy Mode", detail: "Flip the Death Ray back to Destroy before starting the monitor puzzles." },
      { title: "Beat Both Terminals", detail: "Clear the symbol memory game outside Clock Tower and on Rocket Pad. If you fail the second, redo both." },
      { title: "Press the Green Button", detail: "Use the rear Death Ray button, then pick up the Vril Generator beside the crashed rocket in the Upper Courtyard." }
    ],
    hints: []
  },
  {
    id: "time-travel-2",
    title: "Second Time Travel and Tablet",
    summary: "Repeat the wisp cycle, return to the past, and pull the Keeper tablet.",
    category: "Quest",
    risk: "High",
    tags: ["Required", "Timed"],
    prerequisites: ["sabotage"],
    details: "Repeat the exact wisp process to reactivate the purple teleporter. Back in the past, use the keycard in the computer beside the Kronorium, then grab the stone tablet revealed near the blocked Undercroft doorway.",
    checkpoints: [
      "Wisps repeated successfully.",
      "Keycard computer used.",
      "Stone tablet collected."
    ],
    subtasks: [
      { title: "Repeat the Wisp Route", detail: "Another full successful four-wisp round is required before you can revisit the past." },
      { title: "Use the Keycard", detail: "In the past lab, insert the keycard into the computer to the left of the Kronorium." },
      { title: "Take the Tablet", detail: "Grab the Keeper-marked stone tablet from the newly opened case by the blocked doorway." }
    ],
    hints: []
  },
  {
    id: "keeper",
    title: "Escort the Ghost Keeper",
    summary: "Spawn the keeper, fill four soul circles, and place the tablet at Double Tap.",
    category: "Quest",
    risk: "Very High",
    tags: ["Required", "Escort"],
    prerequisites: ["time-travel-2"],
    details: "Insert the Vril Generator into the knight tomb in the Family Crypt to spawn the ghost keeper. It will travel to four random stops. Stand in each white circle and get kills with the bow color shown on screen. At the Double Tap stop, you must place the stone tablet in the wall slot first.",
    checkpoints: [
      "Vril Generator placed.",
      "Four keeper circles completed.",
      "Tablet placed at Double Tap.",
      "Keeper reaches the pyramid."
    ],
    subtasks: [
      { title: "Spawn the Keeper", detail: "Place the Vril Generator in the crypt slab under the resting knight to start the escort." },
      { title: "Match the Bow Color", detail: "Blue is Storm, teal is Wolf, orange is Fire, and purple is Void. Only the matching bow charges that circle in co-op." },
      { title: "Remember the Double Tap Slot", detail: "At the Double Tap stop, interact with the wall slot beside the keeper to place the tablet before kills will count." },
      { title: "Finish All Four Stops", detail: "Once every soul circle is filled, the keeper becomes corporeal and heads to the pyramid room." }
    ],
    hints: []
  },
  {
    id: "mpd",
    title: "Summon the MPD",
    summary: "Let the keeper pull the MPD from the Moon, then insert the blue canister.",
    category: "Boss prep",
    risk: "High",
    tags: ["Required", "Prep"],
    prerequisites: ["keeper"],
    details: "After the escort completes, the keeper teleports the MPD into the Undercroft. One corner is damaged and empty. Put the blue soul canister from your first time-travel trip into that empty corner to open the MPD and start the boss fight sequence.",
    checkpoints: [
      "Keeper cutscene triggered.",
      "MPD arrives in the Undercroft.",
      "Blue canister inserted."
    ],
    subtasks: [
      { title: "Watch the Transition", detail: "Zombies briefly despawn while the keeper finishes the ritual at the pyramid." },
      { title: "Find the Empty Corner", detail: "The MPD appears with one damaged corner missing its canister." },
      { title: "Insert the Blue Canister", detail: "Place the soul canister from Step 7 to open the MPD and reveal the corrupted keeper." }
    ],
    hints: []
  },
  {
    id: "boss",
    title: "Defeat the Corrupted Keeper",
    summary: "Use Ragnarok during the electric slam and burn each chest-damage phase cleanly.",
    category: "Boss",
    risk: "Very High",
    tags: ["Required", "Boss fight"],
    prerequisites: ["mpd"],
    details: "During each damage cycle, wait for the keeper's electric ball / slam cue, plant Ragnarok under it, then hide behind a pillar and shoot the exposed chest weak point. Between damage phases, kill the waves of Panzersoldats and skeletons to advance the fight.",
    checkpoints: [
      "First chest damage phase completed.",
      "Panzer wave cleared.",
      "Final keeper phase completed."
    ],
    subtasks: [
      { title: "Watch for the Electric Cue", detail: "When the keeper charges the arena-wide electric attack, run in and plant Ragnarok beneath it before taking cover." },
      { title: "Use the Pillars", detail: "Blue pillars protect you from the sweeping electric attack while the keeper is trapped." },
      { title: "Shoot the Chest", detail: "Unload into the glowing chest rift while it is exposed, then prepare for Panzer phases between damage rounds." },
      { title: "Use Safer Loadouts", detail: "Danger Closest is especially strong here because it removes explosive self-damage and helps against Panzer pressure." }
    ],
    hints: []
  },
  {
    id: "finish",
    title: "Charge the Summoning Key and Finish",
    summary: "Take the key to the Clock Tower terminal to trigger the ending cutscene.",
    category: "Finale",
    risk: "Medium",
    tags: ["Required", "Complete"],
    prerequisites: ["boss"],
    details: "After the boss dies, grab the Summoning Key from the blue floor circle at the MPD and take it to the Clock Tower terminal used earlier for Simon Says. Interact to begin the final launch sequence and ending cutscene.",
    checkpoints: [
      "Summoning Key collected.",
      "Clock Tower terminal charged.",
      "Ending cutscene triggered.",
      "Gateworm reward earned."
    ],
    subtasks: [
      { title: "Pick Up the Key", detail: "Back at the MPD, interact with the blue imprint to spawn and collect the Summoning Key." },
      { title: "Return to Clock Tower", detail: "Use the same terminal outside the Clock Tower that you used during the monitor puzzle step." },
      { title: "Start the Finale", detail: "Place the key, watch the rockets hit the Moon, and let the cutscene finish for completion credit." }
    ],
    hints: []
  }
];

const BUILDABLE_GROUPS = [
  {
    id: "shield",
    title: "Rocket Shield",
    description: "Shield parts and workshop build",
    parts: [
      { id: "shield-part-courtyard", code: "S1", name: "Shield Part: Courtyard", meta: "Spawn / courtyard route", hint: "", shape: "shield" },
      { id: "shield-part-church", code: "S2", name: "Shield Part: Church", meta: "Church / lower hall route", hint: "", shape: "shield" },
      { id: "shield-part-undercroft", code: "S3", name: "Shield Part: Undercroft", meta: "Pyramid / lower route", hint: "", shape: "shield" },
      { id: "shield-built", code: "S4", name: "Rocket Shield", meta: "Built at a workbench", hint: "", shape: "shield" }
    ]
  },
  {
    id: "ragnarok",
    title: "Ragnarok DG-4",
    description: "Specialist parts and assembly",
    parts: [
      { id: "dg4-panzer", code: "R1", name: "Ragnarok Part: Panzer", meta: "Dropped by first Panzer", hint: "", shape: "core" },
      { id: "dg4-rocket", code: "R2", name: "Ragnarok Part: Rocket Test", meta: "Tunnel console after test fire", hint: "", shape: "core" },
      { id: "dg4-flight", code: "R3", name: "Ragnarok Part: Wundersphere", meta: "Grab in midair after Death Ray use", hint: "", shape: "core" },
      { id: "dg4-built", code: "R4", name: "Ragnarok DG-4", meta: "Built at the workbench", hint: "", shape: "core" }
    ]
  }
];

const ARTIFACTS = [
  { id: "artifact-canister", code: "Q1", name: "Blue Soul Canister", meta: "Picked up in first time travel", hint: "", shape: "core" },
  { id: "artifact-small-fuse", code: "Q2", name: "Small Death Ray Fuse", meta: "Past-lab pickup for Protect mode", hint: "", shape: "core" },
  { id: "artifact-keycard", code: "Q3", name: "Keycard", meta: "Taken from Groph's safe", hint: "", shape: "core" },
  { id: "artifact-big-fuses", code: "Q4", name: "Large Fuses", meta: "Safe reward for Simon Says step", hint: "", shape: "core" },
  { id: "artifact-vril", code: "Q5", name: "Vril Generator", meta: "Picked up beside the crashed rocket", hint: "", shape: "core" },
  { id: "artifact-tablet", code: "Q6", name: "Stone Tablet", meta: "Pulled from the past with the keycard", hint: "", shape: "core" },
  { id: "artifact-key", code: "Q7", name: "Summoning Key", meta: "Collected after the boss", hint: "", shape: "core" }
];

const DEFAULT_STATE = {
  selectedStepId: STEP_DATA[0].id,
  stepStatus: Object.fromEntries(STEP_DATA.map((step) => [step.id, false])),
  notes: "",
  inventoryExpanded: {
    buildables: false,
    artifacts: false
  },
  buildables: Object.fromEntries(BUILDABLE_GROUPS.flatMap((group) => group.parts.map((part) => [part.id, false]))),
  artifacts: Object.fromEntries(ARTIFACTS.map((artifact) => [artifact.id, false]))
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
  syncNotes();
}

function renderHero() {
  const completed = STEP_DATA.filter((step) => state.stepStatus[step.id]).length;
  const progress = Math.round((completed / STEP_DATA.length) * 100);
  const progressTip = completed === STEP_DATA.length
    ? "Quest marked complete."
    : "Track bow upgrades and keeper trials as you progress.";

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
}

function renderActiveUtility() {}

function renderBuildables() {
  const buildContainer = document.getElementById("buildables-grid");
  buildContainer.innerHTML = "";

  BUILDABLE_GROUPS.forEach((group) => {
    if (!group) return;
    const wrap = document.createElement("div");
    wrap.className = "build-group";
    const done = group.parts.filter((p) => state.buildables[p.id]).length;
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
    buildContainer.appendChild(wrap);
  });

  const allParts = BUILDABLE_GROUPS.flatMap((group) => group.parts);
  const buildableCount = allParts.filter((p) => state.buildables[p.id]).length;
  const buildableTotal = allParts.length;
  document.getElementById("buildable-count").textContent = `${buildableCount} / ${buildableTotal} marked`;
  document.querySelector('[data-inventory-toggle="buildables"]').closest('.inventory-panel')
    .classList.toggle('is-complete', allParts.every((p) => state.buildables[p.id]));
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
        else checked = !draft.artifacts[id];
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
