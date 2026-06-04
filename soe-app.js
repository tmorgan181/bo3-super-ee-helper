const STORAGE_KEY = "bo3-super-ee-helper:soe:first-pass";

const RECOMMENDED_GOBBLEGUMS = [
  "Anywhere But Here",
  "Fear in Headlights",
  "Alchemical Antithesis",
  "In Plain Sight",
  "Immolation Liquidation"
];

const STEP_DATA = [
  {
    id: "spawn-setup",
    title: "Summoning Key And Ritual Setup",
    summary: "Grab the Summoning Key, open the city, and collect the four ritual items.",
    category: "Setup",
    risk: "Medium",
    tags: ["Required", "Early game"],
    details: "Start in spawn by entering Beast Mode, smashing the truck crate for the Summoning Key, and opening the ritual routes into Easy Street, Canal, Footlight, and Waterfront.",
    checkpoints: [
      "Summoning Key collected.",
      "Easy Street route opened.",
      "District ritual items located.",
      "All four ritual rooms reachable."
    ],
    subtasks: [
      { title: "Grab The Key", detail: "Use Beast Mode in spawn, smash the crate on the truck, then collect the Summoning Key in human form." },
      { title: "Open Ritual Paths", detail: "Use Beast Mode to unlock doors, stairs, and grapples that reach each ritual room and district." },
      { title: "Collect Ritual Items", detail: "Pick up the Lawyer's Pen, Police Badge, Hair Piece, and Championship Belt after knocking their crates down in Beast Mode." },
      { title: "Know The Rule", detail: "Shadows of Evil can be advanced solo up through trapping the Shadowman, but the true final completion still requires four players." }
    ],
    hints: [
      "Best early-round shortcut: one spawn Beast can smash the Summoning Key crate, zap the crane for Nero's item, open the upstairs stairs, and break the spawn door if you route it cleanly.",
      "Do not over-open the map early. Keeping loops tight makes the first rituals, Margwa spawns, and later flag routes much easier to control."
    ]
  },
  {
    id: "rituals-pap",
    title: "All Four Rituals And Pack-a-Punch",
    summary: "Finish Easy Street, Canal, Footlight, and Waterfront, then use the four gateworms in the Rift.",
    category: "Quest",
    risk: "High",
    tags: ["Required", "Rituals"],
    prerequisites: ["spawn-setup"],
    details: "Each ritual uses the Summoning Key plus its district item. Survive the ritual, collect the Gateworm, then place all four Gateworms in the Rift to unlock Pack-a-Punch.",
    checkpoints: [
      "Easy Street ritual complete.",
      "Canal ritual complete.",
      "Footlight ritual complete.",
      "Waterfront ritual complete.",
      "Pack-a-Punch unlocked."
    ],
    subtasks: [
      { title: "Run Every Ritual", detail: "Easy Street uses the Lawyer's Pen, Canal uses the Police Badge, Footlight uses the Hair Piece, and Waterfront uses the Championship Belt." },
      { title: "Collect Gateworms", detail: "Take the Gateworm from each altar after the ritual finishes. Expect Margwas after later ritual completions." },
      { title: "Open The Rift", detail: "Use a Beast doorway into the underground Rift, then wait for the back wall to open in the subway area." },
      { title: "Unlock PaP", detail: "Place the four Gateworms on the pedestals, wall-run across, then place the Summoning Key on the altar to finish Pack-a-Punch access." }
    ],
    hints: [
      "If you can, finish the fourth ritual at the end of a round so the Margwa spawns into a cleaner map state.",
      "Pack-a-Punch is worth opening as soon as possible because the hardest sections are flag defense and the Shadowman trap, not the early rituals."
    ]
  },
  {
    id: "apothicon-sword",
    title: "Apothicon Sword",
    summary: "Ride the trains for symbols, reveal the sword room, then charge the egg at four hidden statues.",
    category: "Quest",
    risk: "High",
    tags: ["Required", "Sword"],
    prerequisites: ["rituals-pap"],
    details: "Every player must complete the sword sequence. Learn the three red train symbols, zap the matching wall in the subway, claim the egg, and charge it at the four Cthulhu statues.",
    checkpoints: [
      "Three train symbols found.",
      "Sword wall opened.",
      "Apothicon Egg charged at four statues.",
      "Base sword claimed."
    ],
    subtasks: [
      { title: "Read The Train Windows", detail: "Ride Waterfront to Footlight for two symbols, then Footlight to Canal for the last one. The symbols change every game." },
      { title: "Reveal The Sword Room", detail: "In Beast Mode inside the subway, zap the three matching red symbols on the wall under the stairs." },
      { title: "Charge The Egg", detail: "Place the egg on the four hidden statues in Rift, Canal, Footlight, and Waterfront, killing nearby zombies until each charge is complete." },
      { title: "Claim The Sword", detail: "Return the filled egg to the sword room and take the Apothicon Sword." }
    ],
    hints: [
      "Fast symbol method: use a 1-9 symbol cheat sheet and translate each train symbol into a number so you only remember three numbers instead of three shapes.",
      "You do not need to zap the symbols in district order. Hit the correct three symbols on the subway wall in one Beast activation.",
      "If your team already knows the fixed wall layout, call out symbols by district and number before anyone drops into Beast Mode."
    ]
  },
  {
    id: "upgraded-sword",
    title: "Upgraded Sword",
    summary: "Every player must upgrade their sword through their character altar and four Margwa trials.",
    category: "Quest",
    risk: "Very High",
    tags: ["Required", "Execution"],
    prerequisites: ["apothicon-sword"],
    details: "Return to the ritual room tied to your character, accept the Arch-Ovum from the ghost Keeper, and complete one red-circle sword ritual per round until all four are done.",
    checkpoints: [
      "Arch-Ovum taken.",
      "Four sword rituals completed.",
      "Margwas cleared.",
      "Upgraded sword claimed."
    ],
    subtasks: [
      { title: "Match Your Character", detail: "Nero upgrades at Easy Street, Jessica at Footlight, Jack Vincent at Canal, and Floyd at Waterfront." },
      { title: "Take The Arch-Ovum", detail: "Visit your character ritual room and interact with the ghost Keeper on the altar." },
      { title: "Run The Red Circles", detail: "Place the Arch-Ovum at the four red ritual circles around the map, survive the encounter, and kill the spawned Margwa. Only one circle can be finished each round." },
      { title: "Claim The Sword Upgrade", detail: "Return the Arch-Ovum to the Keeper in your ritual room to receive the upgraded sword." }
    ],
    hints: [
      "This is much safer if every player gets their upgraded sword before rounds climb too high.",
      "Leave one zombie when possible. The Arch-Ovum step is slower than it looks because only one red-circle ritual can be finished per round."
    ]
  },
  {
    id: "flag-step",
    title: "Flag Escort Step",
    summary: "Start the book in Nero's room and escort the flag through all four ritual routes.",
    category: "Quest",
    risk: "Very High",
    tags: ["Required", "Defense"],
    prerequisites: ["upgraded-sword"],
    details: "Activate the floating book in Nero's ritual room. The flag appears in the subway, and each area has two street placements plus the ritual altar defense at the end.",
    checkpoints: [
      "Book activated.",
      "Flag taken from subway.",
      "All defense spots cleared.",
      "Every ritual altar route finished."
    ],
    subtasks: [
      { title: "Start The Book", detail: "Interact with the open book near the bookshelf in Nero's room above Easy Street." },
      { title: "Carry The Flag", detail: "Pick the flag up in the subway and place it at the sparking locations that lead toward each ritual room." },
      { title: "Defend Every Stop", detail: "Protect the flag from Meatballs while Parasites harass the team. When the flag glows red, grab the Max Ammo and move deeper into the route." },
      { title: "Finish All Four Routes", detail: "Each district path ends at its ritual altar. Use the Civil Protector and Apothicon Servant if you have them." }
    ],
    hints: [
      "The Rocket Shield is real on Shadows and is highly recommended here. Build it before the flag step if possible.",
      "Best support setup: one player with Apothicon Servant protects the flag, everyone else watches Meatballs and instantly shoots the Shadowman when he appears.",
      "Pre-position the team in the district before the carrier plants the flag. That cuts the most dangerous transition time out of the step.",
      "Fear in Headlights makes the hardest flag plants dramatically safer if you have it."
    ]
  },
  {
    id: "shadowman-fight",
    title: "Trap The Shadowman",
    summary: "Begin the Pack-a-Punch fight, break his aura, and capture him over the altar.",
    category: "Boss",
    risk: "Very High",
    tags: ["Required", "Boss"],
    prerequisites: ["flag-step"],
    details: "All four players need to interact with the Keepers in Pack-a-Punch to begin the boss encounter. Damage the Shadowman only while he has no circular aura.",
    checkpoints: [
      "Keeper pedestals activated.",
      "Shadowman vulnerable windows used.",
      "Shadowman pulled above altar.",
      "Shadowman trapped in Summoning Key."
    ],
    subtasks: [
      { title: "Start The Encounter", detail: "Go into Pack-a-Punch and interact with the four Keepers near the Gateworm pedestals." },
      { title: "Watch The Aura", detail: "Ignore him while the circular aura is up. As soon as it drops, all players focus him with automatic fire." },
      { title: "Force The Capture", detail: "With enough fast damage, the Shadowman moves closer to the altar." },
      { title: "Trap Him", detail: "When he hovers above the altar, interact immediately to pull him into the Summoning Key." }
    ],
    hints: [
      "Go in with fresh ammo and high-DPS weapons. Fast automatic damage matters more here than general-round comfort.",
      "If the Shadowman starts charging his purple Summoning Key attack, get the Keepers reactivated immediately so the setup does not fall apart.",
      "As soon as the shield breaks, everyone should commit to dragging him to the altar instead of splitting damage across the room."
    ]
  },
  {
    id: "flaming-basins",
    title: "Flaming Basins And Beast Setup",
    summary: "Survive the purple glyph phase, kill Margwas to recharge basins, and ready all four Beast positions.",
    category: "Final prep",
    risk: "Very High",
    tags: ["Required", "Execution"],
    prerequisites: ["shadowman-fight"],
    details: "After trapping the Shadowman, the map fills with purple glyphs and repeated red-screen checks. Kill a Margwa to relight a basin, then get all four players into Beast Mode for the ending setup.",
    checkpoints: [
      "Purple glyph hazards managed.",
      "White orb timing understood.",
      "Red basins recharged.",
      "All four players positioned in Beast Mode."
    ],
    subtasks: [
      { title: "Avoid The Glyphs", detail: "Purple glyphs on the ground deal damage. Keep moving and avoid clipping them while rotating the map." },
      { title: "Hit The White Orbs", detail: "When the screen turns red, touch a floating white orb quickly or you will go down." },
      { title: "Recharge Beast", detail: "Basins now burn red and cannot be used until at least one Margwa dies." },
      { title: "Take Final Positions", detail: "Three players should be ready at Canal, Footlight, and Waterfront train stations, while the fourth prepares to work the center of the map." }
    ],
    hints: [
      "Always know where your next white orb is before the red screen starts. The free cleanse at the ritual table is the easiest emergency reset.",
      "Kill a Margwa near the part of the map you want to use next so the newly lit Beast basins help your rotation instead of forcing one."
    ]
  },
  {
    id: "gateworm-finale",
    title: "Giant Gateworm Finale",
    summary: "Hold the three rails blue, zap the Keepers in the center, and kill the Giant Gateworm for the ending.",
    category: "Finale",
    risk: "Very High",
    tags: ["Required", "4 Players"],
    prerequisites: ["flaming-basins"],
    details: "This last step is the part that truly requires four players. One player calls the train and re-enters Beast Mode, three station players hold the blue rails active, and the center player zaps the Keepers before the train passes.",
    checkpoints: [
      "Train called correctly.",
      "All three station rails glowing blue.",
      "Center Keepers zapped in time.",
      "Giant Gateworm killed and cutscene triggered."
    ],
    subtasks: [
      { title: "Call The Train", detail: "A player at one station should return to human form long enough to call the train, then immediately re-enter Beast Mode using a charged basin." },
      { title: "Hold The Rails", detail: "The three station players must repeatedly zap the train-line box on the top corner of each station to keep every rail blue." },
      { title: "Zap The Keepers", detail: "Before the train passes through the center, the middle player must zap all three Keepers around the Giant Gateworm." },
      { title: "Finish The EE", detail: "If the timing is correct, the passing train kills the Giant Gateworm and the final cutscene begins." }
    ],
    hints: [
      "Use fixed roles: three rail players and one center Keeper player. Do not improvise this step mid-attempt.",
      "The train caller should be the only player briefly leaving Beast to summon the train; everyone else stays on their assignment and spams their shocks."
    ]
  }
];

const BUILDABLE_GROUPS = [
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
  },
  {
    id: "support",
    title: "Support Gear",
    description: "Optional but high-value tools for the hard sections",
    parts: [
      { id: "gear-shield", code: "S1", name: "Rocket Shield", meta: "Built from Canal, Footlight, and Waterfront parts", hint: "", shape: "core" },
      { id: "gear-servant", code: "S2", name: "Apothicon Servant", meta: "Margwa Heart, Xenomatter, and Tentacle build", hint: "", shape: "core" },
      { id: "gear-protector", code: "S3", name: "Civil Protector", meta: "Fuse box support for flags and revives", hint: "", shape: "core" }
    ]
  }
];

const ARTIFACTS = [
  { id: "artifact-key", code: "A1", name: "Summoning Key", meta: "Spawn pickup and ritual anchor", hint: "", shape: "core" },
  { id: "artifact-egg", code: "A2", name: "Apothicon Egg", meta: "Charged through four statue soul boxes", hint: "", shape: "egg" },
  { id: "artifact-sword", code: "A3", name: "Upgraded Swords", meta: "All players ready for book, flags, and boss", hint: "", shape: "core" },
  { id: "artifact-flag", code: "A4", name: "Flag", meta: "Book step item for all four district routes", hint: "", shape: "cylinder" }
];

const DEFAULT_STATE = {
  selectedStepId: STEP_DATA[0].id,
  stepStatus: Object.fromEntries(STEP_DATA.map((step) => [step.id, false])),
  notes: "",
  inventoryExpanded: {
    buildables: false,
    "dragon-control": false,
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
    : "Finish the rituals, swords, flag, Shadowman trap, and 4-player finale.";

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
            ${step.summary ? `<p class="step-detail__summary">${step.summary}</p>` : ""}
          </div>
          <div class="step-tags"></div>
        </div>
      </section>

      <section class="step-detail__section">
        ${step.details ? `<p class="tool-copy">${step.details}</p>` : ""}
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

  const gwGroup = BUILDABLE_GROUPS.find((g) => g.id === "gateworm");
  const glGroup = BUILDABLE_GROUPS.find((g) => g.id === "support");

  [{ group: gwGroup, el: buildContainer }, { group: glGroup, el: glyphContainer }].forEach(({ group, el }) => {
    if (!group) return;
    const wrap = document.createElement("div");
    wrap.className = "build-group";
    const done = group.parts.filter((p) => state.buildables[p.id]).length;
    wrap.innerHTML = `
      <div class="build-group__header">
        <div>
          <h3 class="build-group__title">${group.title}</h3>
          <p class="build-group__progress">${done} / ${group.parts.length} ${group.id === "support" ? "built" : "collected"}</p>
        </div>
      </div>
      <div class="build-group__parts"></div>
    `;
    const partsEl = wrap.querySelector(".build-group__parts");
    group.parts.forEach((part) => {
      partsEl.appendChild(makeBoardCard(part, "buildable", state.buildables[part.id]));
    });
    el.appendChild(wrap);
  });

  const gatewormDone = gwGroup.parts.filter((p) => state.buildables[p.id]).length;
  document.getElementById("buildable-count").textContent = `${gatewormDone} / ${gwGroup.parts.length} secured`;
  document.getElementById("dragon-control-count").textContent = `${glGroup.parts.filter((p) => state.buildables[p.id]).length} / ${glGroup.parts.length} built`;
  document.querySelector('[data-inventory-toggle="buildables"]').closest('.inventory-panel')
    .classList.toggle('is-complete', gwGroup.parts.every(p => state.buildables[p.id]));
  if (glGroup) document.querySelector('[data-inventory-toggle="dragon-control"]').closest('.inventory-panel')
    .classList.toggle('is-complete', glGroup.parts.every(p => state.buildables[p.id]));
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
