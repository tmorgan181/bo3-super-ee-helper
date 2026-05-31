const STORAGE_KEY = "bo3-super-ee-helper:rev:first-pass";

const RECOMMENDED_GOBBLEGUMS = [
  "Perkaholic",
  "Anywhere But Here",
  "Aftertaste",
  "Cache Back",
  "Killing Time"
];

const STEP_DATA = [
  {
    id: "orientation",
    title: "Map Orientation",
    summary: "Learn the six Revelations zones and their map-of-origin mechanics.",
    category: "Setup",
    risk: "Low",
    tags: ["Required", "Early game"],
    details: "Revelations stitches together sections of Nacht, Kino, Shangri-La, Mob of the Dead, Origins, and Der Eisendrache into a single map. Each zone has a unique mechanic.",
    checkpoints: [
      "All six zone entrances located.",
      "Apothicon Servant wall location found.",
      "Pack-a-Punch accessible.",
      "GobbleGum loadout confirmed."
    ],
    subtasks: [
      { title: "Zones", detail: "Nacht (center), Kino (theater), Shangri-La (jungle), Mob (bridge), Origins (excavation), Der Eisendrache (ramparts)." },
      { title: "Power", detail: "No main power switch — zones are open from spawn. Focus on PaP access early." },
      { title: "Apothicon Servant", detail: "Wonder weapon. Note the purple growth locations on your first walk-through." },
      { title: "Keeper Protectors", detail: "Four Keeper statues must be upgraded to guard the summoning circles." }
    ],
    hints: []
  },
  {
    id: "power-fragments",
    title: "Collect Power Fragments",
    summary: "Destroy the six Apothicon growths to collect power fragments.",
    category: "Setup",
    risk: "Low",
    tags: ["Required", "Collectibles"],
    prerequisites: ["orientation"],
    details: "Each of the six zones has a purple Apothicon growth. Destroying them with melee or explosives yields power fragments needed for the Keeper upgrades.",
    checkpoints: [
      "Nacht growth destroyed.",
      "Kino growth destroyed.",
      "Shangri-La growth destroyed.",
      "Mob growth destroyed.",
      "Origins growth destroyed.",
      "Der Eisendrache growth destroyed."
    ],
    subtasks: [
      { title: "Find Growths", detail: "Each growth is a pulsing purple organic mass on a wall or surface in its zone." },
      { title: "Destroy", detail: "Melee or shoot the growth. Each yields one power fragment on destruction." },
      { title: "Collect All Six", detail: "You need all six before activating the keeper statues." }
    ],
    hints: []
  },
  {
    id: "keeper-protectors",
    title: "Upgrade Keeper Protectors",
    summary: "Feed power fragments to the four Keeper statues to upgrade them.",
    category: "Ritual",
    risk: "Medium",
    tags: ["Required", "Ritual"],
    prerequisites: ["power-fragments"],
    details: "Four Keeper statues are spread across the map. Each requires a power fragment and a zombie kill near the statue to charge.",
    checkpoints: [
      "Keeper 1 upgraded.",
      "Keeper 2 upgraded.",
      "Keeper 3 upgraded.",
      "Keeper 4 upgraded."
    ],
    subtasks: [
      { title: "Locate Statues", detail: "Keeper statues are at Nacht center, Kino theater, Origins excavation, and the bridge zone." },
      { title: "Feed Fragment", detail: "Hold interact on each statue to deposit a power fragment." },
      { title: "Charge with Kill", detail: "Kill a zombie within a few meters of the statue to complete the charging process." }
    ],
    hints: []
  },
  {
    id: "eggs",
    title: "Apothicon Eggs",
    summary: "Collect and charge the three Apothicon eggs.",
    category: "Collectibles",
    risk: "Medium",
    tags: ["Required", "Collectibles"],
    prerequisites: ["keeper-protectors"],
    details: "Three Apothicon eggs are hidden in specific zones. They must be charged by holding them near zombie kills.",
    checkpoints: [
      "Egg 1 found and charged.",
      "Egg 2 found and charged.",
      "Egg 3 found and charged."
    ],
    subtasks: [
      { title: "Egg Locations", detail: "Check Shangri-La jungle (hidden in foliage), Mob bridge overhang, and Der Eisendrache rampart chest." },
      { title: "Charge Eggs", detail: "Hold each egg near zombie kill locations — it pulses when absorbing energy. Roughly 10 kills per egg." },
      { title: "Fully Charged", detail: "Egg glows bright when fully charged. Carry all three to the soul box step." }
    ],
    hints: []
  },
  {
    id: "soul-boxes",
    title: "Soul Boxes",
    summary: "Fill three soul boxes with zombie kills.",
    category: "Ritual",
    risk: "Medium",
    tags: ["Required", "Ritual"],
    prerequisites: ["eggs"],
    details: "Three glowing soul boxes appear in the map. Kill zombies near each box to fill it with souls.",
    checkpoints: [
      "Soul box 1 filled.",
      "Soul box 2 filled.",
      "Soul box 3 filled."
    ],
    subtasks: [
      { title: "Locate Boxes", detail: "Soul boxes appear near the Kino stage, Origins trench, and Nacht center room after the eggs are charged." },
      { title: "Fill with Kills", detail: "Kill 20–25 zombies within a few feet of each glowing box. The box pulses faster as it fills." },
      { title: "Collection", detail: "Interact with the filled box to collect the soul orb." }
    ],
    hints: []
  },
  {
    id: "gauntlet",
    title: "Gauntlet of Sorrow",
    summary: "Complete the three-round gauntlet challenge in the Nacht area.",
    category: "Ritual",
    risk: "Very High",
    tags: ["Required", "Execution"],
    prerequisites: ["soul-boxes"],
    details: "The Gauntlet of Sorrow is a timed challenge arena. All players must survive three rounds inside the enclosed arena.",
    checkpoints: [
      "Gauntlet entered.",
      "Round 1 survived.",
      "Round 2 survived.",
      "Round 3 survived.",
      "Gauntlet reward collected."
    ],
    subtasks: [
      { title: "Activate Gauntlet", detail: "Deposit all three soul orbs into the Nacht center altar to open the Gauntlet portal." },
      { title: "Round 1", detail: "Standard zombie wave with increased speed. Stay mobile." },
      { title: "Round 2", detail: "Margwas and zombie wave. Focus the Margwas first — aim for the open heads." },
      { title: "Round 3", detail: "Keeper and elite wave. Use GobbleGums and PaP'd weapons." }
    ],
    hints: []
  },
  {
    id: "summoning-key",
    title: "Summoning Key Charge",
    summary: "Charge the Summoning Key using the four upgraded Keeper statues.",
    category: "Ritual",
    risk: "High",
    tags: ["Required", "Boss prep"],
    prerequisites: ["gauntlet"],
    details: "After the gauntlet, the four Keeper statues fully charge and emit beams. Run the Summoning Key through each beam to power it.",
    checkpoints: [
      "Summoning Key charged at Keeper 1.",
      "Summoning Key charged at Keeper 2.",
      "Summoning Key charged at Keeper 3.",
      "Summoning Key charged at Keeper 4.",
      "Summoning Key fully powered."
    ],
    subtasks: [
      { title: "Keepers Emit Beams", detail: "After the gauntlet, upgraded Keeper statues project beams of light upward." },
      { title: "Charge Key", detail: "Stand in each beam while holding the Summoning Key. Hold interact for several seconds per statue." },
      { title: "Full Charge", detail: "The key pulses white when fully charged across all four statues." }
    ],
    hints: []
  },
  {
    id: "boss",
    title: "Final Boss: Shadowman",
    summary: "Confront and defeat the Shadowman in the Apothicon realm.",
    category: "Final prep",
    risk: "Very High",
    tags: ["Required", "Execution"],
    prerequisites: ["summoning-key"],
    details: "With the Summoning Key fully charged, activate the final portal to enter the Apothicon realm and confront the Shadowman.",
    checkpoints: [
      "Apothicon realm entered.",
      "Shadowman Phase 1 survived.",
      "Shadowman Phase 2 defeated.",
      "Summoning Key used for final blow.",
      "Easter egg complete."
    ],
    subtasks: [
      { title: "Enter Realm", detail: "Interact with the central altar at Nacht center to open the final portal. All players enter." },
      { title: "Phase 1 — Shield", detail: "The Shadowman's shield must be broken by throwing the charged Summoning Key at him." },
      { title: "Phase 2 — Exposed", detail: "Unshielded, focus all fire. Use PaP'd primary and Apothicon Servant." },
      { title: "Final Key", detail: "When the Shadowman is nearly dead, a prompt appears to use the Summoning Key as the killing blow. All players must be alive." }
    ],
    hints: []
  }
];

const BUILDABLE_GROUPS = [
  {
    id: "apothicon-servant",
    title: "Apothicon Servant",
    description: "Revelations wonder weapon — parts scattered across zones",
    parts: [
      { id: "as-tentacle", code: "AS1", name: "Tentacle Module", meta: "Mob zone drop", hint: "", shape: "egg" },
      { id: "as-eye", code: "AS2", name: "Apothicon Eye", meta: "Shangri-La zone", hint: "", shape: "core" },
      { id: "as-body", code: "AS3", name: "Servant Cavity", meta: "Origins excavation", hint: "", shape: "cylinder" }
    ]
  },
  {
    id: "keeper-charges",
    title: "Keeper Charge Fragments",
    description: "Power fragments used to upgrade Keeper statues",
    parts: [
      { id: "kc-nacht", code: "KC1", name: "Nacht Fragment", meta: "Nacht growth destroy", hint: "", shape: "core" },
      { id: "kc-kino", code: "KC2", name: "Kino Fragment", meta: "Kino growth destroy", hint: "", shape: "core" },
      { id: "kc-shangri", code: "KC3", name: "Shangri-La Fragment", meta: "Jungle growth destroy", hint: "", shape: "core" },
      { id: "kc-mob", code: "KC4", name: "Mob Fragment", meta: "Bridge growth destroy", hint: "", shape: "core" },
      { id: "kc-origins", code: "KC5", name: "Origins Fragment", meta: "Trench growth destroy", hint: "", shape: "core" },
      { id: "kc-dere", code: "KC6", name: "DE Fragment", meta: "Rampart growth destroy", hint: "", shape: "core" }
    ]
  }
];

const ARTIFACTS = [
  { id: "artifact-servant", code: "A1", name: "Apothicon Servant", meta: "Wonder weapon", hint: "", shape: "core" },
  { id: "artifact-key", code: "A2", name: "Summoning Key", meta: "Final ritual weapon", hint: "", shape: "core" },
  { id: "artifact-egg1", code: "E1", name: "Apothicon Egg I", meta: "Shangri-La foliage", hint: "", shape: "egg" },
  { id: "artifact-egg2", code: "E2", name: "Apothicon Egg II", meta: "Mob bridge overhang", hint: "", shape: "egg" },
  { id: "artifact-egg3", code: "E3", name: "Apothicon Egg III", meta: "DE rampart chest", hint: "", shape: "egg" }
];

const TROPHIES = [
  { id: "trophy-margwa", code: "T1", name: "Margwa Core", meta: "Margwa kill in gauntlet", hint: "", shape: "trophy" },
  { id: "trophy-keeper", code: "T2", name: "Keeper Relic", meta: "Keeper kill while charged", hint: "", shape: "trophy" },
  { id: "trophy-shadow", code: "T3", name: "Shadow Shard", meta: "Shadowman phase 1", hint: "", shape: "trophy" },
  { id: "trophy-growth", code: "T4", name: "Apothicon Spore", meta: "All six growths", hint: "", shape: "trophy" },
  { id: "trophy-gauntlet", code: "T5", name: "Gauntlet Token", meta: "Gauntlet completion", hint: "", shape: "trophy" },
  { id: "trophy-servant", code: "T6", name: "Servant Crystal", meta: "Apothicon Servant kill streak", hint: "", shape: "trophy" }
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
    : "Destroy all six Apothicon growths before upgrading Keepers.";

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
  const fragContainer = document.getElementById("dragon-control-grid");
  buildContainer.innerHTML = "";
  fragContainer.innerHTML = "";

  const servantGroup = BUILDABLE_GROUPS.find((g) => g.id === "apothicon-servant");
  const keeperGroup = BUILDABLE_GROUPS.find((g) => g.id === "keeper-charges");

  [{ group: servantGroup, el: buildContainer }, { group: keeperGroup, el: fragContainer }].forEach(({ group, el }) => {
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
    el.appendChild(wrap);
  });

  const buildableCount = BUILDABLE_GROUPS.flatMap((g) => g.parts).filter((p) => state.buildables[p.id]).length;
  const buildableTotal = BUILDABLE_GROUPS.flatMap((g) => g.parts).length;
  document.getElementById("buildable-count").textContent = `${buildableCount} / ${buildableTotal} marked`;
  document.getElementById("dragon-control-count").textContent = "";
  document.querySelector('[data-inventory-toggle="buildables"]').closest('.inventory-panel')
    .classList.toggle('is-complete', BUILDABLE_GROUPS[0].parts.every(p => state.buildables[p.id]));
  if (BUILDABLE_GROUPS[1]) document.querySelector('[data-inventory-toggle="dragon-control"]').closest('.inventory-panel')
    .classList.toggle('is-complete', BUILDABLE_GROUPS[1].parts.every(p => state.buildables[p.id]));
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
