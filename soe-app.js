const STORAGE_KEY = "bo3-super-ee-helper:soe:first-pass";

const RECOMMENDED_GOBBLEGUMS = [
  "Anywhere But Here",
  "Fear in Headlights",
  "Alchemical Antithesis",
  "In Plain Sight",
  "Immolation Liquidation"
];

const RECOMMENDED_WEAPONS = [
  { name: "Apothicon Servant", wonder: true },
  { name: "Haymaker 12" },
  { name: "KRM-262" },
  { name: "Dingo" }
];

const STEP_DATA = [
  {
    id: "spawn-setup",
    title: "Open And Prep",
    summary: "Grab the Summoning Key, a fumigator, and all three shield checks while opening the map.",
    category: "Setup",
    risk: "Medium",
    tags: ["Required", "Early game"],
    details: "Open toward Junction early, grab a fumigator for pods, and check each district's shield part while the doors are still fresh in your head. This front-loads the two biggest quality-of-life items for the rest of the run.",
    checkpoints: [
      "Summoning Key collected.",
      "Core route to the first districts opened.",
      "Fumigator picked up.",
      "Canal shield part checked.",
      "Footlight shield part checked.",
      "Waterfront shield part checked."
    ],
    subtasks: [
      { title: "Summoning Key", detail: "Use Beast Mode in spawn, smash the crate on the truck, then collect the Summoning Key in human form before leaving spawn." },
      { title: "Fumigator Spawns", detail: "Check spawn and Junction first: box in front of spawn by the Beast fountain, chair by the fountain, stand behind the GobbleGum machine, broken bottle side near Stamin-Up, or the crate near the Footlight entrance." },
      { title: "Start Pod Cycling", detail: "Open pods whenever you can once you have a fumigator. The Apothicon Servant is optional, but it makes flags and the Shadowman step much safer." },
      { title: "Canal Shield Part", detail: "After opening the Canal perk side, check all three Canal shield spots: leaning against the wall on your right as you enter the Four Lions room, on the outside bridge rail toward the perk room, or directly across from the perk machine by the 1250 door." },
      { title: "Footlight Shield Part", detail: "After opening the Footlight perk side, check next to the perk machine, leaning against the fence left of the perk, or on the chair in the stairs room right of the Mystery Box path." },
      { title: "Waterfront Shield Part", detail: "After opening the Waterfront perk side, check at the top of the powered stairs, inside the perk room under the window across from the Beast fountain, or in the room with the ritual-item crate on the floor left of the outside door." },
      { title: "Build Shield", detail: "Once all three parts are found, build the Rocket Shield at Waterfront behind the gym, Canals in front of the Ruby Rabbit, or Footlight below the train station." }
    ],
    hints: []
  },
  {
    id: "rituals-pap",
    title: "Rituals And PaP",
    summary: "Complete all four rituals and unlock Pack-a-Punch in the Rift.",
    category: "Quest",
    risk: "High",
    tags: ["Required", "Rituals"],
    prerequisites: ["spawn-setup"],
    details: "Every ritual needs the Summoning Key, the district item knocked down in Beast Mode, and the ritual door opened in Beast. After all four Gateworms are collected, use them in the Sacred Place to unlock Pack-a-Punch.",
    checkpoints: [
      "District ritual items collected.",
      "Easy Street ritual complete.",
      "Canal ritual complete.",
      "Footlight ritual complete.",
      "Waterfront ritual complete.",
      "Pack-a-Punch unlocked."
    ],
    subtasks: [
      { title: "Open Ritual Doors And Grab Items", detail: "Use Beast in each area to unlock the ritual room and knock down its item: Lawyer's Pen for Easy Street, Police Badge for Canals, Hair Piece for Footlight, and Championship Belt for Waterfront." },
      { title: "Run Every Ritual", detail: "Complete the four rituals and take the Gateworm from each altar. Later rituals can spawn Margwas, so do not linger in cramped rooms." },
      { title: "Open The Sacred Place", detail: "Use the Rift entrance and head into the underground Sacred Place behind the subway wall." },
      { title: "Unlock Pack-a-Punch", detail: "Place the four Gateworms on the pedestals, wall-run across the gap, then place the Summoning Key on the altar to finish the final ritual and open Pack-a-Punch." },
      { title: "Keep Pod Pressure", detail: "Keep opening pods during normal rounds if you still want the Apothicon Servant before flags." }
    ],
    hints: []
  },
  {
    id: "apothicon-servant",
    title: "Build Servant",
    summary: "Keep opening pods until you pull the Apothicon Servant before the harder defense steps.",
    category: "Setup",
    risk: "Medium",
    tags: ["Recommended", "Wonder Weapon"],
    prerequisites: ["rituals-pap"],
    details: "The Apothicon Servant is not hard-required by the quest, but this guide assumes you want it before flags and the Shadowman trap because it makes both steps much safer.",
    checkpoints: [
      "Pods opened through normal round flow.",
      "Margwa Heart collected.",
      "Margwa Tentacle collected.",
      "Xenomatter collected.",
      "Apothicon Servant built."
    ],
    subtasks: [
      { title: "Margwa Heart", detail: "Kill a Margwa and pick up the heart it drops." },
      { title: "Margwa Tentacle", detail: "Keep opening pods until a high-tier pod gives you the Margwa Tentacle." },
      { title: "Xenomatter", detail: "After round 12, kill Parasites or Insanity Elementals for a chance at Xenomatter." },
      { title: "Build It", detail: "Take all three parts to a workbench and build the Apothicon Servant before flags if possible." }
    ],
    hints: [
      "Do not hold rounds just for pods. Fold this into your normal setup so it does not slow the run down."
    ]
  },
  {
    id: "apothicon-sword",
    title: "Apothicon Sword",
    summary: "Read the train symbols, open the wall, and charge the egg at all four statues.",
    category: "Quest",
    risk: "High",
    tags: ["Required", "Sword"],
    prerequisites: ["apothicon-servant"],
    details: "Every player needs their own sword. Read the three red tram symbols, zap the matching wall in the Rift, take an egg, and fill it at all four statue spots.",
    checkpoints: [
      "Three train symbols found.",
      "Sword wall opened.",
      "Apothicon Egg charged at four statues.",
      "Base sword claimed."
    ],
    subtasks: [
      { title: "Read The Train Windows", detail: "Best route is Waterfront to Footlight for two symbols, then Footlight to Canals for the third. The symbols randomize every game." },
      { title: "Reveal The Sword Room", detail: "In Beast Mode in the Rift, zap the three matching symbols on the wall under the stairs near the Mystery Box side." },
      { title: "Charge The Egg", detail: "Place the egg at all four statue crates: the Rift, behind the Ruby Rabbit stairs in Canals, under the perk alley in Footlight, and in the destroyed building past the perk room in Waterfront. Each statue needs 12 nearby zombie souls." },
      { title: "Claim The Sword", detail: "After the fourth statue, return the blue egg to the sword room and claim the Apothicon Sword. Every player must finish their own egg, but teammates can charge eggs at the same statue together." }
    ],
    hints: [
      "Fast symbol method: use a 1-9 symbol cheat sheet and translate each train symbol into a number so you only remember three numbers instead of three shapes.",
      "You do not need to zap the symbols in district order. Hit the correct three symbols on the subway wall in one Beast activation.",
      "Advanced community shortcut: some speedrun routes peek symbol windows during Beast movement instead of doing a full train read. I could verify community references to that shortcut, but not a clean primary-source route map, so keep the train as the default method unless your team already knows the peek lines."
    ]
  },
  {
    id: "upgraded-sword",
    title: "Upgrade Swords",
    summary: "Take the Arch-Ovum and clear the four Margwa circles for the Reborn Keeper Sword.",
    category: "Quest",
    risk: "Very High",
    tags: ["Required", "Execution"],
    prerequisites: ["apothicon-sword"],
    details: "Each player upgrades at their own ritual room, then completes all four red-circle Margwa trials. This is required before the flag step.",
    checkpoints: [
      "Arch-Ovum taken.",
      "Four sword rituals completed.",
      "Margwas cleared.",
      "Upgraded sword claimed."
    ],
    subtasks: [
      { title: "Match Your Character", detail: "Nero upgrades at Easy Street, Jessica at Footlight, Jack Vincent at Canal, and Floyd at Waterfront." },
      { title: "Take The Arch-Ovum", detail: "Visit your character ritual room and interact with the Keeper spirit above the altar to receive the Arch-Ovum." },
      { title: "Run The Red Circles", detail: "Complete the four red circles at Easy Street, in front of the Black Lace Burlesque in Footlight, by the Ruby Rabbit workbench in Canals, and in front of The Anvil in Waterfront. Kill the spawned Margwas to finish each circle." },
      { title: "Know The Round Limit", detail: "Each player can only finish one circle per round, but teammates can do the same circle in the same round if no other Arch-Ovum Margwas are still alive." },
      { title: "Claim The Sword Upgrade", detail: "Return the finished Arch-Ovum to your ritual room to receive the Reborn Keeper Sword." }
    ],
    hints: []
  },
  {
    id: "flag-step",
    title: "Flag Step",
    summary: "Start the book, then complete each district's two flag plants and altar finish.",
    category: "Quest",
    risk: "Very High",
    tags: ["Required", "Defense"],
    prerequisites: ["upgraded-sword"],
    details: "After the book is activated in Nero's ritual room, the flag drops by Widow's Wine and resets to the Rift after each success. For each character route, you defend two purple street plants, then carry it to that ritual altar to turn the spirit into a Keeper.",
    checkpoints: [
      "Book activated.",
      "Flag taken from subway.",
      "All defense spots cleared.",
      "Every ritual altar route finished."
    ],
    subtasks: [
      { title: "Start The Book", detail: "Interact with the open book next to the shelves in Nero's ritual room above Easy Street. The flag drops near Widow's Wine and can then be taken from the Rift." },
      { title: "Do One Full District Route", detail: "Carry the flag from the Rift to the two purple street plants leading toward a ritual room, defend both, then bring it to that ritual altar. Example: Junction route goes near Stamin-Up by the Footlight entrance, then to the Easy Street entrance, then back to Nero's altar." },
      { title: "Repeat For All Four Characters", detail: "Each successful route ends at a ritual altar and turns that spirit into a Keeper. After success, expect a Margwa and normal rounds to resume before you start the next route." },
      { title: "Retry If Needed", detail: "If the flag breaks or the carrier goes down, the flag returns underground and can be picked up again immediately, but only one successful district route can be completed per round." }
    ],
    hints: [
      "Build the Rocket Shield and, if possible, the Civil Protector before starting flags.",
      "Best support setup: one player with Apothicon Servant protects the flag, everyone else watches Meatballs and instantly shoots the Shadowman when he appears.",
      "Each successful street plant drops a Max Ammo, so commit to finishing both plants in the same district route.",
      "Pre-position the team in the district before the carrier plants the flag. That cuts the most dangerous transition time out of the step.",
      "Fear in Headlights makes the hardest flag plants dramatically safer if you have it."
    ]
  },
  {
    id: "shadowman-fight",
    title: "Trap The Shadowman",
    summary: "Start the Pack-a-Punch fight and trap him over the altar.",
    category: "Boss",
    risk: "Very High",
    tags: ["Required", "Boss"],
    prerequisites: ["flag-step"],
    details: "All four players must interact with the Keepers in Pack-a-Punch to remove the Shadowman's shield. This is also the furthest point a team below four players can reach.",
    checkpoints: [
      "Keeper pedestals activated.",
      "Shadowman vulnerable windows used.",
      "Shadowman pulled above altar.",
      "Shadowman trapped in Summoning Key."
    ],
    subtasks: [
      { title: "Start The Encounter", detail: "Go into Pack-a-Punch and interact with the four Keepers near the Gateworm pedestals." },
      { title: "Break The Shield", detail: "Once every Keeper is active, the Shadowman's shield drops. If you fail the capture, reactivate the Keepers and try again." },
      { title: "Force The Capture", detail: "As soon as he is vulnerable, everyone unloads on him with high-DPS weapons to drag him toward the altar." },
      { title: "Trap Him", detail: "When he hovers directly above the altar, interact immediately to trap him in the Summoning Key." }
    ],
    hints: [
      "Go in with fresh ammo and high-DPS weapons. Fast automatic damage matters more here than general-round comfort.",
      "Every failed damage cycle spawns a Margwa, so clean adds quickly before trying again.",
      "As soon as the shield breaks, everyone should commit to dragging him to the altar instead of splitting damage across the room."
    ]
  },
  {
    id: "flaming-basins",
    title: "Infection Phase",
    summary: "Cleanse with white orbs and kill Margwas to relight Beast pedestals.",
    category: "Final prep",
    risk: "Very High",
    tags: ["Required", "Execution"],
    prerequisites: ["shadowman-fight"],
    details: "After the Shadowman is trapped, the round pauses, purple Margwas keep spawning, Beast pedestals shut off, and the team gets periodic infection pulses that must be cleansed with white orbs.",
    checkpoints: [
      "Purple glyph hazards managed.",
      "White orb timing understood.",
      "Red basins recharged.",
      "All four players positioned in Beast Mode."
    ],
    subtasks: [
      { title: "Avoid The Purple Hazards", detail: "Keep moving around the map and stay off the purple circles on the ground while clearing Margwas." },
      { title: "Cleanse Infection", detail: "Whenever the screen gains the magenta infection effect, pass through a glowing white orb in a district before the damage downs you." },
      { title: "Relight Beast Pedestals", detail: "Every time a purple Margwa dies, another Beast pedestal reactivates. Plan your kills so the next pedestal is near the player who needs it." },
      { title: "Prep The Finale", detail: "You usually need at least four Margwa kills to get enough pedestal access for the full ending attempt." }
    ],
    hints: [
      "Always know where your next white orb is before the infection becomes dangerous.",
      "Kill a Margwa near the part of the map you want to use next so the newly lit Beast basins help your rotation instead of forcing one."
    ]
  },
  {
    id: "gateworm-finale",
    title: "Final Tram Step",
    summary: "With four players, light all three rails and shock the center Keepers after the tram moves the worm.",
    category: "Finale",
    risk: "Very High",
    tags: ["Required", "4 Players"],
    prerequisites: ["flaming-basins"],
    details: "This is the true four-player-only finish. The reliable first-clear method is two players at station boxes, one player waiting in center Beast, and one player in human form to call the tram and then shock the third station box.",
    checkpoints: [
      "Train called correctly.",
      "All three station rails glowing blue.",
      "Center Keepers zapped in time.",
      "Giant Gateworm killed and cutscene triggered."
    ],
    subtasks: [
      { title: "Assign Fixed Roles", detail: "Put one Beast player at Canal station, one at Footlight station, one in center Beast by the Keepers, and one human player at Waterfront station ready to call the tram." },
      { title: "Light All Three Rails", detail: "After the tram is called, shock the electrical box high on the wall at each tram station so all three rails glow blue." },
      { title: "Shock Center Keepers", detail: "Once the tram knocks the giant Gateworm out of center, the player already waiting in Beast at the middle must immediately shock all three Keepers." },
      { title: "Finish The EE", detail: "If the timing is correct, the Keeper beams fire into the sky and the final cutscene begins. If the worm reappears first, kill more Margwas, relight pedestals, and retry." }
    ],
    hints: [
      "Do not improvise this step mid-attempt. Call out roles before anyone enters Beast.",
      "The station boxes sit high on the wall near the ceiling, so line up where each player needs to aim before starting the run."
    ]
  }
];

const BUILDABLE_GROUPS = [
  {
    id: "shield",
    title: "Rocket Shield",
    description: "Three random district parts",
    parts: [
      { id: "shield-canal", code: "S1", name: "Canal Part", meta: "One of the three random Canal spawns", hint: "", shape: "core" },
      { id: "shield-footlight", code: "S2", name: "Footlight Part", meta: "One of the three random Footlight spawns", hint: "", shape: "core" },
      { id: "shield-waterfront", code: "S3", name: "Waterfront Part", meta: "One of the three random Waterfront spawns", hint: "", shape: "core" }
    ]
  },
  {
    id: "gateworm",
    title: "Gateworms",
    description: "Four ritual reward items used to unlock Pack-a-Punch",
    parts: [
      { id: "gw-easy", code: "G1", name: "Easy Street Gateworm", meta: "Lawyer's Pen ritual reward", hint: "", shape: "egg" },
      { id: "gw-canal", code: "G2", name: "Canal Gateworm", meta: "Police Badge ritual reward", hint: "", shape: "egg" },
      { id: "gw-footlight", code: "G3", name: "Footlight Gateworm", meta: "Hair Piece ritual reward", hint: "", shape: "egg" },
      { id: "gw-waterfront", code: "G4", name: "Waterfront Gateworm", meta: "Championship Belt ritual reward", hint: "", shape: "egg" }
    ]
  }
];

const ARTIFACTS = [
  { id: "artifact-fumigator", code: "A1", name: "Fumigator", meta: "For pods", hint: "", shape: "core" },
  { id: "artifact-key", code: "A2", name: "Summoning Key", meta: "Spawn pickup and ritual anchor", hint: "", shape: "core" },
  { id: "artifact-egg", code: "A3", name: "Apothicon Egg", meta: "Charge at four statues", hint: "", shape: "egg" },
  { id: "artifact-sword", code: "A4", name: "Upgraded Swords", meta: "Needed before flags", hint: "", shape: "core" },
  { id: "artifact-flag", code: "A5", name: "Flag", meta: "Used for all four routes", hint: "", shape: "cylinder" }
];

const SERVANT_PARTS = [
  { id: "servant-heart", code: "SV1", name: "Margwa Heart", meta: "Drops from a Margwa", hint: "", shape: "core" },
  { id: "servant-tentacle", code: "SV2", name: "Margwa Tentacle", meta: "From a high-tier pod", hint: "", shape: "core" },
  { id: "servant-xenomatter", code: "SV3", name: "Xenomatter", meta: "From Parasites or Insanity Elementals after round 12", hint: "", shape: "egg" }
];

const TROPHIES = [
  { id: "cop-canal", code: "C1", name: "Canal Fuse", meta: "Grab before flags", hint: "", shape: "trophy" },
  { id: "cop-footlight", code: "C2", name: "Footlight Fuse", meta: "Grab before flags", hint: "", shape: "trophy" },
  { id: "cop-waterfront", code: "C3", name: "Waterfront Fuse", meta: "Grab before flags", hint: "", shape: "trophy" }
];

const DEFAULT_STATE = {
  selectedStepId: STEP_DATA[0].id,
  stepStatus: Object.fromEntries(STEP_DATA.map((step) => [step.id, false])),
  notes: "",
  inventoryExpanded: {
    buildables: false,
    "dragon-control": false,
    servant: false,
    trophies: false,
    artifacts: false
  },
  buildables: Object.fromEntries(BUILDABLE_GROUPS.flatMap((group) => group.parts.map((part) => [part.id, false]))),
  artifacts: Object.fromEntries(ARTIFACTS.map((artifact) => [artifact.id, false])),
  servantParts: Object.fromEntries(SERVANT_PARTS.map((part) => [part.id, false])),
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
  for (const part of SERVANT_PARTS) {
    next.servantParts[part.id] = Boolean(saved.servantParts && saved.servantParts[part.id]);
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

function render() {
  renderHero();
  renderSteps();
  renderActiveStep();
  renderActiveUtility();
  renderBuildables();
  renderServant();
  renderArtifacts();
  renderTrophies();
  syncNotes();
}

function renderHero() {
  const completed = STEP_DATA.filter((step) => state.stepStatus[step.id]).length;
  const progress = Math.round((completed / STEP_DATA.length) * 100);
  const progressTip = completed === STEP_DATA.length
    ? "Quest marked complete."
    : "Finish rituals, swords, flags, the Shadowman trap, then the 4-player tram finale.";

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

      ${step.hints?.length ? `
      <section class="step-detail__section">
        <p class="panel__eyebrow">Quick Tips</p>
        <ul class="detail-list">
          ${step.hints.map((hint) => `<li><span class="checklist-copy__detail">${hint}</span></li>`).join("")}
        </ul>
      </section>
      ` : ""}

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
  const glyphContainer = document.getElementById("dragon-control-grid");
  buildContainer.innerHTML = "";
  glyphContainer.innerHTML = "";

  const shieldGroup = BUILDABLE_GROUPS.find((g) => g.id === "shield");
  const gwGroup = BUILDABLE_GROUPS.find((g) => g.id === "gateworm");

  [{ group: shieldGroup, el: buildContainer }, { group: gwGroup, el: glyphContainer }].forEach(({ group, el }) => {
    if (!group) return;
    group.parts.forEach((part) => {
      el.appendChild(makeBoardCard(part, "buildable", state.buildables[part.id]));
    });
  });

  const shieldDone = shieldGroup.parts.filter((p) => state.buildables[p.id]).length;
  const gatewormDone = gwGroup.parts.filter((p) => state.buildables[p.id]).length;
  document.getElementById("buildable-count").textContent = `${shieldDone} / ${shieldGroup.parts.length} built`;
  document.getElementById("dragon-control-count").textContent = `${gatewormDone} / ${gwGroup.parts.length} secured`;
  document.querySelector('[data-inventory-toggle="buildables"]').closest('.inventory-panel')
    .classList.toggle('is-complete', shieldGroup.parts.every(p => state.buildables[p.id]));
  if (gwGroup) document.querySelector('[data-inventory-toggle="dragon-control"]').closest('.inventory-panel')
    .classList.toggle('is-complete', gwGroup.parts.every(p => state.buildables[p.id]));
  bindBoardToggles("buildable", (id, checked, draft) => { draft.buildables[id] = checked; });
}

function renderServant() {
  const container = document.getElementById("servant-grid");
  container.innerHTML = "";
  SERVANT_PARTS.forEach((part) => {
    container.appendChild(makeBoardCard(part, "servantpart", state.servantParts[part.id]));
  });
  const count = SERVANT_PARTS.filter((part) => state.servantParts[part.id]).length;
  document.getElementById("servant-count").textContent = `${count} / ${SERVANT_PARTS.length} secured`;
  document.querySelector('[data-inventory-toggle="servant"]').closest('.inventory-panel')
    .classList.toggle('is-complete', SERVANT_PARTS.every((part) => state.servantParts[part.id]));
  bindBoardToggles("servantpart", (id, checked, draft) => { draft.servantParts[id] = checked; });
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
  document.getElementById("trophy-count").textContent = `${count} / ${TROPHIES.length} built`;
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
        else if (kind === "servantpart") checked = !draft.servantParts[id];
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
