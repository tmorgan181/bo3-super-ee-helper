const STORAGE_KEY = "bo3-super-ee-helper:de:first-pass";

const RECOMMENDED_GOBBLEGUMS = [
  "Anywhere But Here",
  "Perkaholic",
  "Firing On All Cylinders",
  "Aftertaste",
  "Killing Time"
];

const STEP_DATA = [
  {
    id: "power",
    title: "Restore Power",
    summary: "Activate the castle's power and unlock the main areas.",
    category: "Setup",
    risk: "Low",
    tags: ["Required", "Early game"],
    details: "Navigate the castle exterior and interior to locate and activate the main power switch.",
    checkpoints: [
      "Power switch activated.",
      "Castle interior areas unlocked.",
      "Pack-a-Punch teleporter pad located.",
      "Arrow upgrade bench found."
    ],
    subtasks: [
      { title: "Open Routes", detail: "Buy through the courtyard toward the undercroft and upper ramparts." },
      { title: "Power Switch", detail: "Activate the power in the undercroft beneath the castle." },
      { title: "Wrath of the Ancients", detail: "Locate the bow wall-buy in the keep — you'll need it immediately." },
      { title: "Perk Route", detail: "Note Juggernog, Mule Kick, and Quick Revive positions." }
    ],
    hints: []
  },
  {
    id: "wota",
    title: "Obtain Wrath of the Ancients",
    summary: "Acquire the base wonder bow from the keep wall.",
    category: "Weapon",
    risk: "Low",
    tags: ["Required", "Weapon"],
    prerequisites: ["power"],
    details: "The Wrath of the Ancients is a wall-buy in the keep area. It is required for all four elemental bow upgrades.",
    checkpoints: [
      "Wrath of the Ancients purchased from wall.",
      "Four dragon souls noted for upgrade paths."
    ],
    subtasks: [
      { title: "Purchase", detail: "Find the bow on the wall in the keep. Costs 1000 points." },
      { title: "Ammo", detail: "Arrows are replenished by killing zombies. No ammo purchase needed." }
    ],
    hints: []
  },
  {
    id: "bow-fire",
    title: "Upgrade: Fire Bow",
    summary: "Complete the fire dragon's soul trial to unlock the fire bow upgrade.",
    category: "Upgrade",
    risk: "Medium",
    tags: ["Required", "Upgrade", "Bow"],
    prerequisites: ["wota"],
    details: "Each dragon at the castle has an associated elemental bow upgrade. The fire dragon trial requires shooting specific braziers in order.",
    checkpoints: [
      "Fire dragon activated.",
      "Brazier sequence solved.",
      "Fire bow upgrade collected."
    ],
    subtasks: [
      { title: "Activate Dragon", detail: "Shoot the fire dragon statue with the base bow to begin the trial." },
      { title: "Brazier Order", detail: "Shoot the four lit braziers around the courtyard in the order they flash." },
      { title: "Collect Upgrade", detail: "The upgraded fire bow spawns at the altar near the fire dragon." }
    ],
    hints: []
  },
  {
    id: "bow-wolf",
    title: "Upgrade: Wolf Bow",
    summary: "Solve the wolf shadow puzzle and collect wolf bow souls.",
    category: "Upgrade",
    risk: "Medium",
    tags: ["Required", "Upgrade", "Bow"],
    prerequisites: ["wota"],
    details: "The wolf bow upgrade requires casting wolf shadows on the chamber walls using mounted torches.",
    checkpoints: [
      "Wolf shadow puzzle solved.",
      "Wolf souls collected from spectral wolves.",
      "Wolf bow upgrade obtained."
    ],
    subtasks: [
      { title: "Shadow Puzzle", detail: "In the round room near the undercroft, shoot the mounted torches to cast wolf shadow silhouettes matching the wall carvings." },
      { title: "Spectral Wolves", detail: "After the puzzle, spectral wolves spawn. Kill them to collect wolf souls." },
      { title: "Claim Upgrade", detail: "Return to the altar and interact to receive the wolf bow." }
    ],
    hints: []
  },
  {
    id: "bow-void",
    title: "Upgrade: Void Bow",
    summary: "Collect void orbs across the map and charge them in the undercroft.",
    category: "Upgrade",
    risk: "Medium",
    tags: ["Required", "Upgrade", "Bow"],
    prerequisites: ["wota"],
    details: "Void orbs must be shot off specific pedestals and redirected through the undercroft portal stones.",
    checkpoints: [
      "Three void orb locations found.",
      "Orbs redirected through portal stones.",
      "Void bow upgrade collected."
    ],
    subtasks: [
      { title: "Orb Locations", detail: "Void orbs sit on glowing pedestals in the library, ramparts, and crypt." },
      { title: "Redirect Orbs", detail: "Shoot each orb into the undercroft. Stand at the portal stone and shoot the orb toward it." },
      { title: "Charge and Collect", detail: "Once all three are redirected, the void bow spawns at the undercroft altar." }
    ],
    hints: []
  },
  {
    id: "bow-storm",
    title: "Upgrade: Storm Bow",
    summary: "Charge the storm orb through repeated lightning strikes.",
    category: "Upgrade",
    risk: "High",
    tags: ["Required", "Upgrade", "Bow"],
    prerequisites: ["wota"],
    details: "The storm bow requires shooting a floating orb through a lightning storm sequence in the upper ramparts.",
    checkpoints: [
      "Storm orb located.",
      "Lightning sequence triggered three times.",
      "Storm bow upgrade obtained."
    ],
    subtasks: [
      { title: "Locate Orb", detail: "The storm orb floats near the tallest tower. Use the base bow to interact with it." },
      { title: "Lightning Triggers", detail: "Shoot the orb during each lightning flash. Requires three successful hits on separate rounds." },
      { title: "Collect Upgrade", detail: "Storm bow spawns at the high tower altar after the third successful charge." }
    ],
    hints: []
  },
  {
    id: "keeper-trial",
    title: "Keeper Protector Trial",
    summary: "Charge the four upgrade pedestals using the four elemental bows.",
    category: "Ritual",
    risk: "Very High",
    tags: ["Required", "Boss prep"],
    prerequisites: ["bow-fire", "bow-wolf", "bow-void", "bow-storm"],
    details: "Each of the four bows must charge its corresponding pedestal in the keep. All four must be done before the boss ritual begins.",
    checkpoints: [
      "Fire pedestal charged.",
      "Wolf pedestal charged.",
      "Void pedestal charged.",
      "Storm pedestal charged.",
      "Keeper ritual ready."
    ],
    subtasks: [
      { title: "Fire Pedestal", detail: "Shoot the fire pedestal near the dragon statue with the fire bow." },
      { title: "Wolf Pedestal", detail: "Charge the wolf pedestal with the wolf bow near the round room." },
      { title: "Void Pedestal", detail: "Fire the void bow at the void pedestal in the undercroft." },
      { title: "Storm Pedestal", detail: "Charge the storm pedestal at the tallest tower with the storm bow." }
    ],
    hints: []
  },
  {
    id: "rocket",
    title: "Final Rocket Launch",
    summary: "Launch the rocket and defeat the Panzersoldat boss to complete the easter egg.",
    category: "Final prep",
    risk: "Very High",
    tags: ["Required", "Execution"],
    prerequisites: ["keeper-trial"],
    details: "Activate the rocket launch sequence and defend through the final Panzersoldat encounter.",
    checkpoints: [
      "Launch codes entered.",
      "Rocket countdown survived.",
      "Panzersoldat boss defeated.",
      "Easter egg complete."
    ],
    subtasks: [
      { title: "Enter Launch Codes", detail: "Interact with the control terminal in the keep after all pedestals are charged." },
      { title: "Defend Countdown", detail: "Survive waves of zombies and Keepers during the launch countdown." },
      { title: "Boss Fight", detail: "Defeat the empowered Panzersoldat. Use charged arrow shots for efficient damage." },
      { title: "Completion", detail: "All players must be alive when the rocket launches to receive the easter egg cutscene." }
    ],
    hints: []
  }
];

const BUILDABLE_GROUPS = [
  {
    id: "wota",
    title: "Wrath of the Ancients",
    description: "Base wonder bow — required for all upgrades",
    parts: [
      { id: "wota-bow", code: "W1", name: "Wrath of the Ancients", meta: "Keep wall-buy", hint: "", shape: "core" }
    ]
  },
  {
    id: "bows",
    title: "Elemental Bows",
    description: "All four elemental bow upgrades",
    parts: [
      { id: "bow-fire-u", code: "E1", name: "Fire Bow", meta: "Dragon brazier trial", hint: "", shape: "core" },
      { id: "bow-wolf-u", code: "E2", name: "Wolf Bow", meta: "Shadow puzzle + wolf souls", hint: "", shape: "core" },
      { id: "bow-void-u", code: "E3", name: "Void Bow", meta: "Void orb redirect", hint: "", shape: "core" },
      { id: "bow-storm-u", code: "E4", name: "Storm Bow", meta: "Lightning strike charge", hint: "", shape: "core" }
    ]
  }
];

const ARTIFACTS = [
  { id: "artifact-wota", code: "A1", name: "Wrath of the Ancients", meta: "Wonder bow", hint: "", shape: "core" },
  { id: "artifact-fire", code: "A2", name: "Fire Bow Upgrade", meta: "Dragon trial", hint: "", shape: "core" },
  { id: "artifact-wolf", code: "A3", name: "Wolf Bow Upgrade", meta: "Shadow puzzle", hint: "", shape: "core" },
  { id: "artifact-void", code: "A4", name: "Void Bow Upgrade", meta: "Orb redirect", hint: "", shape: "core" },
  { id: "artifact-storm", code: "A5", name: "Storm Bow Upgrade", meta: "Lightning charge", hint: "", shape: "core" }
];

const TROPHIES = [
  { id: "trophy-panzer", code: "T1", name: "Panzersoldat Gage Tag", meta: "Boss kill", hint: "", shape: "trophy" },
  { id: "trophy-keeper", code: "T2", name: "Keeper Soul Shard", meta: "Keeper kill with charged bow", hint: "", shape: "trophy" },
  { id: "trophy-fire", code: "T3", name: "Brazier Ember", meta: "Fire trial drop", hint: "", shape: "trophy" },
  { id: "trophy-wolf", code: "T4", name: "Wolf Fang", meta: "Spectral wolf kill", hint: "", shape: "trophy" },
  { id: "trophy-void", code: "T5", name: "Void Shard", meta: "Void orb collect", hint: "", shape: "trophy" },
  { id: "trophy-storm", code: "T6", name: "Storm Rune", meta: "Lightning orb charge", hint: "", shape: "trophy" }
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
  const bowContainer = document.getElementById("dragon-control-grid");
  buildContainer.innerHTML = "";
  bowContainer.innerHTML = "";

  const wotaGroup = BUILDABLE_GROUPS.find((g) => g.id === "wota");
  const bowsGroup = BUILDABLE_GROUPS.find((g) => g.id === "bows");

  [{ group: wotaGroup, el: buildContainer }, { group: bowsGroup, el: bowContainer }].forEach(({ group, el }) => {
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
