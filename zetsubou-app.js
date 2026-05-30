const STORAGE_KEY = "bo3-super-ee-helper:zns:first-pass";

const RECOMMENDED_GOBBLEGUMS = [
  "Anywhere But Here",
  "Kill Joy",
  "Perkaholic",
  "Sword Flay",
  "Aftertaste"
];

const STEP_DATA = [
  {
    id: "power",
    title: "Restore Power",
    summary: "Open the map, locate the power switch, and learn the three ritual sites.",
    category: "Setup",
    risk: "Low",
    tags: ["Required", "Early game"],
    details: "Open the map, locate the power switch, and learn the three ritual sites.",
    checkpoints: [
      "Power switch activated.",
      "Spawn beach, lab, and waterfall areas are accessible.",
      "Three spore ritual sites located.",
      "GobbleGum loadout agreed before wave three."
    ],
    subtasks: [
      { title: "Open Routes", detail: "Buy through spawn side toward the lab complex." },
      { title: "Power", detail: "Activate the power switch in the underground lab." },
      { title: "Locate Rituals", detail: "Note the three active spore mound sites. They rotate each game." },
      { title: "Perk Route", detail: "Identify Juggernog and Quick Revive locations." }
    ],
    hints: []
  },
  {
    id: "kt4-parts",
    title: "Collect KT-4 Components",
    summary: "Gather the three components hidden across the island.",
    category: "Setup",
    risk: "Medium",
    tags: ["Required", "Buildable"],
    prerequisites: ["power"],
    details: "Gather the three KT-4 components from the lab, spider lair, and power areas.",
    checkpoints: [
      "Spore sample retrieved from the testing lab.",
      "Battery cell found near the power room.",
      "Test tube set recovered from the spider lair."
    ],
    subtasks: [
      { title: "Spore Sample", detail: "Check the specimen shelf in the underground testing lab. Respawns each round." },
      { title: "Battery Cell", detail: "Found on the generator platform near the power switch." },
      { title: "Test Tube Set", detail: "Drops from killing a Banshee inside the spider lair." },
      { title: "Blue Spore Canister", detail: "Shoot the blue spore mound above the power switch to collect the canister." }
    ],
    hints: []
  },
  {
    id: "kt4-craft",
    title: "Craft the KT-4",
    summary: "Assemble the KT-4 at the lab workbench.",
    category: "Weapon",
    risk: "Low",
    tags: ["Required", "Weapon"],
    prerequisites: ["kt4-parts"],
    details: "Take all four components to the workbench in the underground lab and assemble the KT-4.",
    checkpoints: [
      "All three KT-4 components in inventory.",
      "Blue spore canister collected.",
      "KT-4 assembled at the lab workbench."
    ],
    subtasks: [
      { title: "Workbench", detail: "Find the assembly workbench in the main underground lab room." },
      { title: "Craft", detail: "Interact to assemble. The KT-4 replaces your secondary slot." }
    ],
    hints: []
  },
  {
    id: "spore-rituals",
    title: "Spore Purification Rituals",
    summary: "Complete all three spore mound rituals using the KT-4.",
    category: "Ritual",
    risk: "High",
    tags: ["Required", "Ritual", "KT-4"],
    prerequisites: ["kt4-craft"],
    details: "Each of the three spore mound sites must be purified with the KT-4 in a set order. Note which site activates first.",
    checkpoints: [
      "First spore site purified.",
      "Second spore site purified.",
      "Third spore site purified.",
      "All three ritual flames lit."
    ],
    subtasks: [
      { title: "Identify Active Site", detail: "Watch for the glowing mound at round start. Shoot it with the KT-4." },
      { title: "Defend the Mound", detail: "Hold the area while the purification completes. Spores will spawn." },
      { title: "Collect Essence", detail: "Grab the ritual flame token before it despawns." },
      { title: "Repeat x3", detail: "Each ritual activates at a different site. Track order with the spore tracker below." }
    ],
    hints: []
  },
  {
    id: "skull-collect",
    title: "Skull Collection",
    summary: "Kill marked enemy types to collect the six ritual skulls.",
    category: "Collectibles",
    risk: "Medium",
    tags: ["Required", "Collectibles"],
    prerequisites: ["spore-rituals"],
    details: "Specific enemy kills yield ritual skulls. Each skull type drops from a different enemy.",
    checkpoints: [
      "Margwa skull collected.",
      "Bomber skull collected.",
      "Banshee skull collected.",
      "Spore zombie skull collected.",
      "Parasitic skull collected.",
      "Keeper skull collected."
    ],
    subtasks: [
      { title: "Margwa", detail: "Kill a Margwa with the KT-4 charged shot to its open head." },
      { title: "Bomber", detail: "Kill a Bomber while it is mid-charge." },
      { title: "Banshee", detail: "Headshot a Banshee in the spider lair." },
      { title: "Parasite", detail: "Kill a Parasite with melee while it is attached." },
      { title: "Spore Zombie", detail: "Kill a spore-infected zombie while it is still in the plant." },
      { title: "Keeper", detail: "Kill a Keeper near the waterfall shrine." }
    ],
    hints: []
  },
  {
    id: "masamune",
    title: "Upgrade to Masamune",
    summary: "Complete the upgrade ritual to transform the KT-4 into the Masamune.",
    category: "Weapon",
    risk: "High",
    tags: ["Required", "Upgrade"],
    prerequisites: ["skull-collect"],
    details: "The Masamune upgrade requires placing all six skulls and completing a defense ritual at the waterfall shrine.",
    checkpoints: [
      "All six skulls deposited at the shrine.",
      "Waterfall ritual defense survived.",
      "Masamune claimed from the shrine."
    ],
    subtasks: [
      { title: "Shrine Deposit", detail: "Take all six skulls to the waterfall shrine. Deposit in order displayed." },
      { title: "Ritual Defense", detail: "A lockdown begins. Hold the shrine against three waves of infected zombies." },
      { title: "Claim Masamune", detail: "Pick up the upgraded weapon from the altar after the lockdown clears." }
    ],
    hints: []
  },
  {
    id: "margwa-heart",
    title: "Margwa Heart Ritual",
    summary: "Lure and kill a Margwa at the altar. Extract and place its heart.",
    category: "Ritual",
    risk: "Very High",
    tags: ["Required", "Boss kill"],
    prerequisites: ["masamune"],
    details: "A special Margwa spawns and must be led to the altar. Kill it there and extract the heart before it decays.",
    checkpoints: [
      "Special Margwa appeared.",
      "Margwa lured to the altar platform.",
      "Margwa killed at the altar.",
      "Margwa heart extracted.",
      "Heart placed in the altar vessel."
    ],
    subtasks: [
      { title: "Lure", detail: "Shoot the special Margwa (glowing orange core) toward the altar. Do not kill it away from the altar." },
      { title: "Kill at Altar", detail: "Finish the Margwa on the platform. Use the Masamune charged shot for the final hit." },
      { title: "Extract", detail: "Interact with the Margwa body to pull the heart. Timer starts immediately." },
      { title: "Place", detail: "Run to the altar vessel and deposit the heart before the timer expires." }
    ],
    hints: []
  },
  {
    id: "final",
    title: "Final Escape Sequence",
    summary: "Activate the gate, survive the final ritual, escape the island.",
    category: "Final prep",
    risk: "Very High",
    tags: ["Required", "Execution"],
    prerequisites: ["margwa-heart"],
    details: "Activate the teleporter sequence, survive the final zombie onslaught, and escape Zetsubou no Shima.",
    checkpoints: [
      "Gate sigil activated.",
      "Final ritual wave survived.",
      "Teleporter charged.",
      "Easter egg complete."
    ],
    subtasks: [
      { title: "Sigil Activation", detail: "Interact with the altar with the charged heart. All three flames must be lit." },
      { title: "Final Defense", detail: "Hold the altar area through the last wave. Margwas and spore zombies spawn simultaneously." },
      { title: "Teleport", detail: "All players interact with the teleporter gate to complete the easter egg." }
    ],
    hints: []
  }
];

const SPORE_LOCATIONS = [
  "Spawn Beach",
  "Lab Testing",
  "Spider Lair",
  "Waterfall",
  "Underground",
  "Bunker East"
];

const BUILDABLE_GROUPS = [
  {
    id: "kt4",
    title: "KT-4",
    description: "Lab-crafted wonder weapon",
    parts: [
      { id: "kt4-spore", code: "K1", name: "Spore Sample", meta: "Testing lab shelf", hint: "Underground testing lab — specimen shelf on the east wall. Respawns each round.", shape: "egg" },
      { id: "kt4-battery", code: "K2", name: "Battery Cell", meta: "Power room platform", hint: "Generator platform next to the main power switch.", shape: "circuit" },
      { id: "kt4-tubes", code: "K3", name: "Test Tube Set", meta: "Spider lair drop", hint: "Banshee kill inside the spider lair. May take several attempts.", shape: "cylinder" }
    ]
  },
  {
    id: "spore-canister",
    title: "Blue Spore Canister",
    description: "Required for KT-4 assembly",
    parts: [
      { id: "canister-blue", code: "B1", name: "Blue Canister", meta: "Power room ceiling", hint: "Shoot the glowing blue spore mound above the power switch with any weapon.", shape: "core" },
      { id: "canister-seal", code: "B2", name: "Seal the Sample", meta: "Lab workbench", hint: "Bring the canister and the three KT-4 parts to the workbench to seal and assemble.", shape: "core" }
    ]
  }
];

const ARTIFACTS = [
  { id: "artifact-kt4", code: "A1", name: "KT-4", meta: "Wonder weapon", hint: "Assembled at the underground lab workbench from three components.", shape: "cylinder" },
  { id: "artifact-masamune", code: "A2", name: "Masamune", meta: "KT-4 upgrade", hint: "Claimed from the waterfall shrine after the skull deposit ritual.", shape: "core" },
  { id: "artifact-heart", code: "A3", name: "Margwa Heart", meta: "Altar ritual item", hint: "Extracted from the special Margwa killed on the altar platform.", shape: "egg" },
  { id: "artifact-flame1", code: "F1", name: "Flame Token I", meta: "First spore ritual", hint: "Dropped after completing the first spore mound purification.", shape: "core" },
  { id: "artifact-flame2", code: "F2", name: "Flame Token II", meta: "Second spore ritual", hint: "Dropped after the second purification site is cleansed.", shape: "core" },
  { id: "artifact-flame3", code: "F3", name: "Flame Token III", meta: "Third spore ritual", hint: "Dropped after all three purifications. Lights the final altar flame.", shape: "core" }
];

const TROPHIES = [
  { id: "skull-margwa", code: "S1", name: "Margwa Skull", meta: "KT-4 headshot", hint: "Kill a Margwa with the KT-4 charged shot to its open head.", shape: "trophy" },
  { id: "skull-bomber", code: "S2", name: "Bomber Skull", meta: "Mid-charge kill", hint: "Kill a Bomber while it is actively charging toward a player.", shape: "trophy" },
  { id: "skull-banshee", code: "S3", name: "Banshee Skull", meta: "Spider lair headshot", hint: "Headshot a Banshee inside the spider lair corridor.", shape: "trophy" },
  { id: "skull-parasite", code: "S4", name: "Parasite Skull", meta: "Melee while attached", hint: "Melee kill a Parasite while it is latched onto a player.", shape: "trophy" },
  { id: "skull-spore", code: "S5", name: "Spore Skull", meta: "Kill in-plant", hint: "Kill a spore-infected zombie before it fully emerges from the plant.", shape: "trophy" },
  { id: "skull-keeper", code: "S6", name: "Keeper Skull", meta: "Waterfall kill", hint: "Kill a Keeper near the waterfall shrine with the Masamune.", shape: "trophy" }
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
      updateState((draft) => { draft.selectedStepId = stepId; });
    });
  });

  container.querySelectorAll("[data-step-complete]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const stepId = event.currentTarget.getAttribute("data-step-complete");
      updateState((draft) => { draft.stepStatus[stepId] = !draft.stepStatus[stepId]; });
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

      ${step.id === "spore-rituals" ? renderSporeTrackerSection() : ""}

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

  if (step.id === "spore-rituals") {
    bindSporeTrackerEvents(container);
  }
}

function renderSporeTrackerSection() {
  return `
    <section class="step-detail__section utility-card">
      <div class="utility-card__header">
        <div>
          <p class="panel__eyebrow">Ritual Step</p>
          <h3>Spore Order Tracker</h3>
        </div>
        <button type="button" class="ghost-button ghost-button--small" id="clear-spores">Clear</button>
      </div>
      <p class="utility-text">Toggle spore sites in activation order. Sequence runs left to right.</p>
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
    list.innerHTML = '<span class="empty-state">No spore order recorded yet.</span>';
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

  const ktGroup = BUILDABLE_GROUPS.find((g) => g.id === "kt4");
  const caniGroup = BUILDABLE_GROUPS.find((g) => g.id === "spore-canister");

  if (ktGroup) {
    const wrap = document.createElement("div");
    wrap.className = "build-group";
    const done = ktGroup.parts.filter((p) => state.buildables[p.id]).length;
    wrap.innerHTML = `
      <div class="build-group__header">
        <div>
          <h3 class="build-group__title">${ktGroup.title}</h3>
          <p class="build-group__progress">${done} / ${ktGroup.parts.length} collected</p>
        </div>
      </div>
      <div class="build-group__parts"></div>
    `;
    const partsEl = wrap.querySelector(".build-group__parts");
    ktGroup.parts.forEach((part) => {
      partsEl.appendChild(makeBoardCard(part, "buildable", state.buildables[part.id]));
    });
    ktContainer.appendChild(wrap);
  }

  if (caniGroup) {
    const wrap = document.createElement("div");
    wrap.className = "build-group";
    const done = caniGroup.parts.filter((p) => state.buildables[p.id]).length;
    wrap.innerHTML = `
      <div class="build-group__header">
        <div>
          <h3 class="build-group__title">${caniGroup.title}</h3>
          <p class="build-group__progress">${done} / ${caniGroup.parts.length} collected</p>
        </div>
      </div>
      <div class="build-group__parts"></div>
    `;
    const partsEl = wrap.querySelector(".build-group__parts");
    caniGroup.parts.forEach((part) => {
      partsEl.appendChild(makeBoardCard(part, "buildable", state.buildables[part.id]));
    });
    canisterContainer.appendChild(wrap);
  }

  const buildableCount = BUILDABLE_GROUPS.flatMap((g) => g.parts).filter((p) => state.buildables[p.id]).length;
  const buildableTotal = BUILDABLE_GROUPS.flatMap((g) => g.parts).length;
  document.getElementById("buildable-count").textContent = `${buildableCount} / ${buildableTotal} marked`;
  document.getElementById("dragon-control-count").textContent = "";

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
