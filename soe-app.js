const STORAGE_KEY = "bo3-super-ee-helper:soe:first-pass";

const RECOMMENDED_GOBBLEGUMS = [
  "Anywhere But Here",
  "Perkaholic",
  "Beast Mode",
  "Aftertaste",
  "Kill Joy"
];

const STEP_DATA = [
  {
    id: "orientation",
    title: "Map Orientation",
    summary: "Learn the four districts and the beast mode mechanics.",
    category: "Setup",
    risk: "Low",
    tags: ["Required", "Early game"],
    details: "Shadows of Evil is divided into four districts: Canal, Waterfront, Footlight, and Junction. Beast Mode is essential throughout the entire easter egg.",
    checkpoints: [
      "Four districts identified.",
      "Beast Mode activated at least once.",
      "Pack-a-Punch room location learned.",
      "GobbleGum loadout locked in."
    ],
    subtasks: [
      { title: "Districts", detail: "Learn Canal (tentacle ritual), Waterfront (fire ritual), Footlight (fish ritual), Junction (central hub)." },
      { title: "Beast Mode", detail: "Pick up a red gumball from a glowing pile to enter Beast Mode. Used to charge pylons, flip switches, and open doors." },
      { title: "Perk Locations", detail: "Juggernog is in the Junction. Double Tap and Speed Cola are in districts." },
      { title: "Pack-a-Punch", detail: "Requires completing all three rituals to unlock the portal to the PaP chamber." }
    ],
    hints: []
  },
  {
    id: "beast-pylons",
    title: "Beast Mode Pylon Charging",
    summary: "Charge all four district pylons using Beast Mode.",
    category: "Setup",
    risk: "Low",
    tags: ["Required", "Beast Mode"],
    prerequisites: ["orientation"],
    details: "Each district has a pylon that must be charged using Beast Mode. This opens locked doors and enables ritual progress.",
    checkpoints: [
      "Canal pylon charged.",
      "Waterfront pylon charged.",
      "Footlight pylon charged.",
      "Junction pylon charged."
    ],
    subtasks: [
      { title: "Enter Beast Mode", detail: "Pick up the beast gumball. You have limited time — prioritize pylons." },
      { title: "Charge Each Pylon", detail: "Sprint to each district pylon and hold interact. One per Beast Mode activation." },
      { title: "Repeat", detail: "Each pylon requires a separate Beast Mode activation." }
    ],
    hints: []
  },
  {
    id: "ritual-canal",
    title: "Canal District Ritual",
    summary: "Complete the tentacle ritual by offering a zombie at the altar.",
    category: "Ritual",
    risk: "Medium",
    tags: ["Required", "Ritual"],
    prerequisites: ["beast-pylons"],
    details: "Each district ritual requires drawing in a zombie near the altar and triggering the ritual sacrifice.",
    checkpoints: [
      "Canal altar activated.",
      "Zombie sacrificed at Canal altar.",
      "Canal ritual seal broken."
    ],
    subtasks: [
      { title: "Activate Altar", detail: "In Beast Mode, charge the altar socket in the Canal district." },
      { title: "Draw Zombie", detail: "Lead a zombie into the ritual circle. The tentacle will grab it." },
      { title: "Seal Broken", detail: "Watch for the ritual circle to change color. Collect the reward item." }
    ],
    hints: []
  },
  {
    id: "ritual-waterfront",
    title: "Waterfront District Ritual",
    summary: "Complete the fire ritual near the docks.",
    category: "Ritual",
    risk: "Medium",
    tags: ["Required", "Ritual"],
    prerequisites: ["beast-pylons"],
    details: "The Waterfront ritual uses a fire glyph. Activate in Beast Mode and feed the altar.",
    checkpoints: [
      "Waterfront altar activated.",
      "Zombie sacrificed at Waterfront altar.",
      "Waterfront ritual seal broken."
    ],
    subtasks: [
      { title: "Activate Altar", detail: "Use Beast Mode to charge the Waterfront altar socket near the docks." },
      { title: "Lure Zombie", detail: "Bring a zombie into the fire circle near the water's edge." },
      { title: "Seal Broken", detail: "Collect the reward glyph shard after the ritual completes." }
    ],
    hints: []
  },
  {
    id: "ritual-footlight",
    title: "Footlight District Ritual",
    summary: "Complete the fish/squid ritual in the entertainment district.",
    category: "Ritual",
    risk: "Medium",
    tags: ["Required", "Ritual"],
    prerequisites: ["beast-pylons"],
    details: "The Footlight ritual is in the theater area and involves the squid altar.",
    checkpoints: [
      "Footlight altar activated.",
      "Zombie sacrificed at Footlight altar.",
      "Footlight ritual seal broken."
    ],
    subtasks: [
      { title: "Activate Altar", detail: "Enter Beast Mode and charge the Footlight altar behind the theater stage." },
      { title: "Feed Altar", detail: "Lead a zombie into the squid ritual circle." },
      { title: "Seal Broken", detail: "The third glyph shard appears. Collect it." }
    ],
    hints: []
  },
  {
    id: "civil-protector",
    title: "Civil Protector",
    summary: "Summon and upgrade the Civil Protector robot.",
    category: "Setup",
    risk: "Medium",
    tags: ["Optional", "Support"],
    prerequisites: ["ritual-canal", "ritual-waterfront", "ritual-footlight"],
    details: "The Civil Protector is an automated defense robot. It can be summoned after all three ritual seals are broken.",
    checkpoints: [
      "Civil Protector summoned.",
      "Civil Protector upgraded at least once.",
      "Robot defending Junction area."
    ],
    subtasks: [
      { title: "Activation", detail: "With all three seals broken, interact with the Civil Protector station in Junction." },
      { title: "Feed Points", detail: "Insert points into the robot's slot to upgrade it. Four tiers available." },
      { title: "Defense Value", detail: "The robot clears zombie clusters and provides breathing room during hard steps." }
    ],
    hints: []
  },
  {
    id: "pap-unlock",
    title: "Pack-a-Punch Access",
    summary: "Complete all three rituals to unlock the portal and access PaP.",
    category: "Setup",
    risk: "Low",
    tags: ["Required", "PaP"],
    prerequisites: ["ritual-canal", "ritual-waterfront", "ritual-footlight"],
    details: "After all three district rituals, a portal opens in Junction leading to the PaP chamber.",
    checkpoints: [
      "All three ritual seals broken.",
      "Junction portal open.",
      "Pack-a-Punch accessed."
    ],
    subtasks: [
      { title: "Portal Opens", detail: "Return to Junction after the third ritual. A glowing portal appears." },
      { title: "Enter Portal", detail: "Step through to reach the PaP chamber. Upgrade primary weapons now." },
      { title: "Upgrade Priority", detail: "Upgrade your primary before proceeding. The final ritual is demanding." }
    ],
    hints: []
  },
  {
    id: "final-ritual",
    title: "Final Summoning Ritual",
    summary: "Perform the final ritual to summon and defeat the Shadow Man.",
    category: "Final prep",
    risk: "Very High",
    tags: ["Required", "Execution"],
    prerequisites: ["pap-unlock"],
    details: "Use the three glyph shards to complete the final ritual in Junction and confront the Shadow Man.",
    checkpoints: [
      "All three glyph shards deposited.",
      "Shadow Man summoned.",
      "Shadow Man defeated.",
      "Easter egg complete."
    ],
    subtasks: [
      { title: "Deposit Shards", detail: "Bring all three glyph shards to the central altar in Junction and place them." },
      { title: "Shadow Man Phase 1", detail: "The Shadow Man spawns with a shield. Use the Summoning Key to break his immunity phase." },
      { title: "Shadow Man Phase 2", detail: "Unshielded, the Shadow Man is vulnerable. All players focus fire." },
      { title: "Completion", detail: "After the Shadow Man falls, interact with the Summoning Key to complete the easter egg." }
    ],
    hints: []
  }
];

const BUILDABLE_GROUPS = [
  {
    id: "gateworm",
    title: "Gateworm",
    description: "Ritual reward items used to unlock PaP",
    parts: [
      { id: "gw-canal", code: "G1", name: "Canal Gateworm", meta: "Canal ritual reward", hint: "Awarded after completing the Canal district tentacle ritual.", shape: "egg" },
      { id: "gw-waterfront", code: "G2", name: "Waterfront Gateworm", meta: "Waterfront ritual reward", hint: "Awarded after completing the Waterfront fire ritual.", shape: "egg" },
      { id: "gw-footlight", code: "G3", name: "Footlight Gateworm", meta: "Footlight ritual reward", hint: "Awarded after completing the Footlight squid ritual.", shape: "egg" }
    ]
  },
  {
    id: "glyphs",
    title: "Glyph Shards",
    description: "Three shards needed for the final summoning ritual",
    parts: [
      { id: "glyph-1", code: "S1", name: "Glyph Shard I", meta: "Canal ritual drop", hint: "Drops from completing the Canal ritual seal.", shape: "core" },
      { id: "glyph-2", code: "S2", name: "Glyph Shard II", meta: "Waterfront ritual drop", hint: "Drops from completing the Waterfront ritual seal.", shape: "core" },
      { id: "glyph-3", code: "S3", name: "Glyph Shard III", meta: "Footlight ritual drop", hint: "Drops from completing the Footlight ritual seal.", shape: "core" }
    ]
  }
];

const ARTIFACTS = [
  { id: "artifact-key", code: "A1", name: "Summoning Key", meta: "Final ritual item", hint: "Used to break the Shadow Man's immunity shield in phase 1.", shape: "core" },
  { id: "artifact-pap", code: "A2", name: "Pack-a-Punch Access", meta: "Post-ritual unlock", hint: "Portal opens in Junction after all three rituals complete.", shape: "core" },
  { id: "artifact-protector", code: "A3", name: "Civil Protector", meta: "Junction defense robot", hint: "Summoned at the Junction station after all seals are broken.", shape: "cylinder" }
];

const TROPHIES = [
  { id: "trophy-margwa", code: "T1", name: "Margwa Trophy", meta: "Margwa kill", hint: "Kill a Margwa in the Junction while the Civil Protector is active.", shape: "trophy" },
  { id: "trophy-beast", code: "T2", name: "Beast Skull", meta: "Beast Mode kill streak", hint: "Kill 10 zombies in a single Beast Mode activation.", shape: "trophy" },
  { id: "trophy-ritual", code: "T3", name: "Ritual Seal Fragment", meta: "All three rituals", hint: "Drops after completing the third and final district ritual.", shape: "trophy" },
  { id: "trophy-shadow", code: "T4", name: "Shadow Relic", meta: "Shadow Man kill", hint: "Drops from the Shadow Man after the final ritual defeat.", shape: "trophy" },
  { id: "trophy-protector", code: "T5", name: "Protector Crest", meta: "Civil Protector max tier", hint: "Upgrade the Civil Protector to tier 4.", shape: "trophy" },
  { id: "trophy-wisp", code: "T6", name: "Wisp Fragment", meta: "Wisp collection", hint: "Collect all six wisps floating in the PaP chamber.", shape: "trophy" }
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
    : "Complete all three district rituals to access Pack-a-Punch.";

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
  const glyphContainer = document.getElementById("dragon-control-grid");
  buildContainer.innerHTML = "";
  glyphContainer.innerHTML = "";

  const gwGroup = BUILDABLE_GROUPS.find((g) => g.id === "gateworm");
  const glGroup = BUILDABLE_GROUPS.find((g) => g.id === "glyphs");

  [{ group: gwGroup, el: buildContainer }, { group: glGroup, el: glyphContainer }].forEach(({ group, el }) => {
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
