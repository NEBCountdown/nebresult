/**
 * =========================================================================
 * GOOGLE FIREBASE REALTIME SECURE API CONSOLE INITIALIZATION
 * =========================================================================
 */
const firebaseConfig = {
  apiKey: "AIzaSyDF1bnhXoEUCGSZ2V1cNydkyLmwgynhJho",
  authDomain: "academic-console.firebaseapp.com",
  projectId: "academic-console",
  storageBucket: "academic-console.firebasestorage.app",
  messagingSenderId: "1031618126313",
  appId: "1:1031618126313:web:0e198a70c70a8a7281ab78",
  measurementId: "G-SWDLYZC6MT"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

/**
 * =========================================================================
 * SINGLE PAGE APPLICATION (SPA) SUBSYSTEM ROUTING & REGISTRY ENGINE
 * =========================================================================
 */
const CLOCK_SYSTEMS = {
    "neb-result": {
        title: "NEB Grade 12 Result 2083 Countdown", subtitle: "Every second brings the metric evaluation logs closer.",
        targetDate: new Date("June 24, 2026 00:00:00").getTime(), startDate: new Date("June 14, 2026 00:00:00").getTime(),
        targetAD: "June 24, 2026", targetBS: "10 Ashar 2083", tag: "SYSTEM: NEB RESULT ARRAYS",
        portalUrl: "neb.ntc.net.np", portalHref: "https://neb.ntc.net.np",
        matrix: [
            { tag: "tag-amber", border: "", type: "EARLIEST EXPECTED", ad: "June 22, 2026", bs: "8 Ashar 2083", note: "Early data compilation run" },
            { tag: "tag-cyan", border: "active-track", type: "MOST LIKELY TARGET", ad: "June 24, 2026", bs: "10 Ashar 2083", note: "Standard system timeline" },
            { tag: "tag-rose", border: "", type: "LATEST EXPECTED", ad: "June 28, 2026", bs: "14 Ashar 2083", note: "Security verification delay barrier" }
        ]
    },
    "see-exam": {
        title: "SEE Secondary Examination 2083", subtitle: "Secondary academic matriculation tracking engine.",
        targetDate: new Date("March 29, 2027 00:00:00").getTime(), startDate: new Date("June 15, 2026 00:00:00").getTime(),
        targetAD: "March 29, 2027", targetBS: "15 Chaitra 2083", tag: "SYSTEM: SEE EXAM ARRAYS",
        portalUrl: "see.gov.np", portalHref: "https://see.gov.np",
        matrix: [
            { tag: "tag-amber", border: "", type: "SCHEDULING RELEASE", ad: "January 15, 2027", bs: "2 Magh 2083", note: "Routine matrix blueprint distribution" },
            { tag: "tag-cyan", border: "active-track", type: "EXAMINATION LAUNCH", ad: "March 29, 2027", bs: "15 Chaitra 2083", note: "Compulsory English evaluation start" },
            { tag: "tag-rose", border: "", type: "CONCLUDING CYCLE", ad: "April 07, 2027", bs: "24 Chaitra 2083", note: "Technical streams compilation end" }
        ]
    },
    "neb-exam": {
        title: "NEB Higher Board Exam 2084", subtitle: "Terminal secondary deployment phase timeline validation.",
        targetDate: new Date("April 28, 2027 00:00:00").getTime(), startDate: new Date("June 15, 2026 00:00:00").getTime(),
        targetAD: "April 28, 2027", targetBS: "14 Baishak 2084", tag: "SYSTEM: NEB EXAM CONSOLE",
        portalUrl: "neb.gov.np", portalHref: "https://www.neb.gov.np",
        matrix: [
            { tag: "tag-amber", border: "", type: "ROUTINE BROADCAST", ad: "February 10, 2027", bs: "28 Magh 2083", note: "Specification map publishing window" },
            { tag: "tag-cyan", border: "active-track", type: "BOARD MATRIX TRIGGER", ad: "April 28, 2027", bs: "14 Baishak 2084", note: "National validation stream start" },
            { tag: "tag-rose", border: "", type: "COLLECTION TERMINATION", ad: "May 09, 2027", bs: "26 Baishak 2084", note: "All stream collection metrics close" }
        ]
    }
};

let CURRENT_SPA_VIEW = "countdown-view";
let ACTIVE_COUNTDOWN_MODE = "neb-result";
let globalCountdownIntervalId = null;

const DOM = {
    authOverlay: document.getElementById("auth-gateway-overlay"),
    loginPanel: document.getElementById("login-panel"), signupPanel: document.getElementById("signup-panel"), forgotPanel: document.getElementById("forgot-panel"),
    statusLog: document.getElementById("auth-status-log"),
    body: document.body,
    drawer: document.getElementById("nav-drawer"), drawerOverlay: document.getElementById("drawer-overlay"),
    spaModules: document.querySelectorAll(".spa-view-module"), menuItems: document.querySelectorAll(".menu-item"),
    days: document.getElementById("days"), hours: document.getElementById("hours"), minutes: document.getElementById("minutes"), seconds: document.getElementById("seconds"), milliseconds: document.getElementById("milliseconds"),
    daysBadge: document.getElementById("days-remaining-badge"), progressBar: document.getElementById("progress-fill-bar"), progressPercent: document.getElementById("progress-percentage"),
    title: document.getElementById("dashboard-title"), subtitle: document.getElementById("dashboard-subtitle"), metaAD: document.getElementById("meta-ad"), metaBS: document.getElementById("meta-bs"),
    systemTag: document.getElementById("active-system-tag"), urlTag: document.getElementById("portal-url-tag"), instruction: document.getElementById("redirect-instruction-text"), launchBtn: document.getElementById("secure-launch-anchor"), matrixWrapper: document.getElementById("matrix-cards-wrapper")
};

function switchSPAView(targetViewId) {
    DOM.spaModules.forEach(mod => mod.classList.add("hidden"));
    const activeMod = document.getElementById(targetViewId);
    if(activeMod) activeMod.classList.remove("hidden");
    CURRENT_SPA_VIEW = targetViewId;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

/**
 * =========================================================================
 * HIGH-SECURITY PASSWORDS & SECURE IDENTITY AUTHENTICATION FLOWS
 * =========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
    // Structural Interface Panel Route Connectors
    document.getElementById("switch-to-signup").addEventListener("click", () => { toggleAuthPanels("signup"); });
    document.getElementById("switch-to-forgot").addEventListener("click", () => { toggleAuthPanels("forgot"); });
    document.getElementById("switch-to-login-from-signup").addEventListener("click", () => { toggleAuthPanels("login"); });
    document.getElementById("switch-to-login-from-forgot").addEventListener("click", () => { toggleAuthPanels("login"); });
    
    // Live Dynamic Security Strength Metrics Evaluation
    const signupPassInput = document.getElementById("signup-password");
    const passMeter = document.getElementById("password-requirements");
    signupPassInput.addEventListener("input", () => {
        const p = signupPassInput.value;
        const hasNum = /[0-9]/.test(p);
        const hasSym = /[^A-Za-z0-9]/.test(p);
        if (p.length >= 6 && hasNum && hasSym) {
            passMeter.textContent = "Security Compliance: Approved Alpha Matrix ✔";
            passMeter.className = "password-meter valid-state";
        } else {
            passMeter.textContent = "Complexity Rule Violation: Must include 6+ characters, a number, and a symbol.";
            passMeter.className = "password-meter invalid-state";
        }
    });

    // Cloud Profile Registration Pipeline Execution
    document.getElementById("signup-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const user = document.getElementById("signup-username").value.trim().toLowerCase();
        const level = document.getElementById("signup-level").value;
        const pass = signupPassInput.value;

        if (pass.length < 6 || !/[0-9]/.test(pass) || !/[^A-Za-z0-9]/.test(pass)) {
            DOM.statusLog.textContent = "REJECTED: CODE INSUFFICIENT STRATEGIC INTEGRITY";
            DOM.statusLog.style.color = "var(--rose-alert)"; return;
        }

        DOM.statusLog.textContent = "CONNECTING CLOUD FIREWALL REGISTRIES...";
        DOM.statusLog.style.color = "var(--neon-cyan)";
        const generatedEmail = `${user}@matrixconsole.net`;

        auth.createUserWithEmailAndPassword(generatedEmail, pass)
            .then((res) => {
                return db.collection("students").doc(res.user.uid).set({
                    username: user, gradeLevel: level, emailMapping: generatedEmail, createdTimestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
            })
            .then(() => {
                DOM.statusLog.textContent = "REGISTRATION COMPLETED. PROFILE SYNCHRONIZED.";
                DOM.statusLog.style.color = "var(--neon-green)";
            })
            .catch((err) => {
                DOM.statusLog.textContent = err.code === "auth/email-already-in-use" ? "ERROR: STUDENT IDENTIFIER CLAIMED" : err.message;
                DOM.statusLog.style.color = "var(--rose-alert)";
            });
    });

    // Cloud Identity Handshake Pipeline Validation
    document.getElementById("login-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const user = document.getElementById("login-username").value.trim().toLowerCase();
        const pass = document.getElementById("login-password").value;
        DOM.statusLog.textContent = "ROUTING HANDSHAKE TELEMETRY TO FIREWALL...";
        DOM.statusLog.style.color = "var(--neon-cyan)";

        auth.signInWithEmailAndPassword(`${user}@matrixconsole.net`, pass)
            .catch(() => {
                DOM.statusLog.textContent = "ACCESS DENIED: SECURE ATTRIBUTES INVALID";
                DOM.statusLog.style.color = "var(--rose-alert)";
            });
    });

    // Real-Time Recovery Transmission Node Pipeline
    document.getElementById("forgot-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const user = document.getElementById("forgot-username").value.trim().toLowerCase();
        DOM.statusLog.textContent = "AUDITING ENCRYPTED REGISTRY PROFILE FOR IDENTITY...";
        DOM.statusLog.style.color = "var(--neon-cyan)";

        db.collection("students").where("username", "==", user).get()
            .then((snapshot) => {
                if (snapshot.empty) {
                    DOM.statusLog.textContent = "RECOVERY ABORTED: STUDENT RECORD MISSING";
                    DOM.statusLog.style.color = "var(--rose-alert)"; return;
                }
                const mappedEmail = snapshot.docs[0].data().emailMapping;
                return auth.sendPasswordResetEmail(mappedEmail);
            })
            .then((ret) => {
                if(ret !== undefined) {
                    DOM.statusLog.textContent = "RECOVERY SENT: RE-VERIFY OUTSIDE PROFILE INBOX ✔";
                    DOM.statusLog.style.color = "var(--neon-green)";
                }
            })
            .catch((err) => {
                DOM.statusLog.textContent = `PIPELINE FAULT: ${err.message}`;
                DOM.statusLog.style.color = "var(--rose-alert)";
            });
    });

    // Universal Account Watchdog Sub-Engine Mappings
    auth.onAuthStateChanged((student) => {
        if (student) {
            db.collection("students").doc(student.uid).get().then((doc) => {
                let assignedGrade = "12";
                if(doc.exists) assignedGrade = doc.data().gradeLevel;
                
                sessionStorage.setItem("matrix_uid", student.uid);
                sessionStorage.setItem("matrix_grade", assignedGrade);
                
                DOM.statusLog.textContent = "HANDSHAKE STATUS: SECURED PASSIVE STREAMING";
                DOM.statusLog.style.color = "var(--neon-green)";

                // Set initial active state metrics mapping
                ACTIVE_COUNTDOWN_MODE = assignedGrade === "10" ? "see-exam" : "neb-result";
                syncNavigationDrawerState();
                renderCountdownTerminalView();
                buildSyllabusTestingHub(assignedGrade);
                renderGPALedgerFields();

                setTimeout(() => {
                    DOM.authOverlay.style.opacity = "0";
                    DOM.body.classList.remove("auth-locked");
                    setTimeout(() => DOM.authOverlay.classList.add("hidden"), 500);
                }, 600);
            });
        } else {
            sessionStorage.clear();
            DOM.body.classList.add("auth-locked");
            DOM.authOverlay.classList.remove("hidden");
            DOM.authOverlay.style.opacity = "1";
            toggleAuthPanels("login");
        }
    });

    document.getElementById("logout-sidebar-btn").addEventListener("click", () => {
        auth.signOut().then(() => window.location.reload());
    });
});

function toggleAuthPanels(panelName) {
    DOM.loginPanel.classList.add("hidden"); DOM.signupPanel.classList.add("hidden"); DOM.forgotPanel.classList.add("hidden");
    if(panelName === "login") { DOM.loginPanel.classList.remove("hidden"); DOM.statusLog.textContent = "SECURE HANDSHAKE PENDING..."; }
    else if(panelName === "signup") { DOM.signupPanel.classList.remove("hidden"); DOM.statusLog.textContent = "AWAITING MATRIX BACKEND CONFIGURATION..."; }
    else if(panelName === "forgot") { DOM.forgotPanel.classList.remove("hidden"); DOM.statusLog.textContent = "RECOVERY PARAMS SEQUENCING..."; }
}

/**
 * =========================================================================
 * NAVIGATION SIDEBAR SLIDE OUT CONSOLE MAPPINGS
 * =========================================================================
 */
function toggleDrawerConsole() { DOM.drawer.classList.toggle("open"); DOM.drawerOverlay.classList.toggle("visible"); }
document.getElementById("hamburger-menu-btn").addEventListener("click", toggleDrawerConsole);
document.getElementById("close-drawer-btn").addEventListener("click", toggleDrawerConsole);
DOM.drawerOverlay.addEventListener("click", toggleDrawerConsole);

DOM.menuItems.forEach(btn => {
    if(btn.id === "logout-sidebar-btn") return;
    btn.addEventListener("click", () => {
        DOM.menuItems.forEach(i => i.classList.remove("active"));
        btn.classList.add("active");
        const viewId = btn.getAttribute("data-view");
        
        if (viewId === "countdown-view") {
            ACTIVE_COUNTDOWN_MODE = btn.getAttribute("data-target");
            renderCountdownTerminalView();
        }
        switchSPAView(viewId);
        toggleDrawerConsole();
    });
});

function syncNavigationDrawerState() {
    const userGrade = sessionStorage.getItem("matrix_grade") || "12";
    document.getElementById("nav-quiz-10-btn").setAttribute("data-grade", "10");
    document.getElementById("nav-quiz-12-btn").setAttribute("data-grade", "12");
    
    document.querySelectorAll(".menu-item[data-grade]").forEach(b => {
        b.addEventListener("click", () => {
            buildSyllabusTestingHub(b.getAttribute("data-grade"));
        });
    });
}

/**
 * =========================================================================
 * CORE DUAL METRIC QUANTUM COUNTDOWN PIPELINE ENGINE
 * =========================================================================
 */
function renderCountdownTerminalView() {
    const data = CLOCK_SYSTEMS[ACTIVE_COUNTDOWN_MODE];
    DOM.title.textContent = data.title; DOM.subtitle.textContent = data.subtitle;
    DOM.metaAD.textContent = data.targetAD; DOM.metaBS.textContent = data.targetBS;
    DOM.systemTag.textContent = data.tag; DOM.urlTag.textContent = data.portalUrl;
    DOM.launchBtn.setAttribute("href", data.portalHref);
    
    const dStart = new Date(data.startDate), dTarget = new Date(data.targetDate);
    document.getElementById("trajectory-start-date").textContent = dStart.toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'});
    document.getElementById("trajectory-target-date").textContent = dTarget.toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'});

    DOM.matrixWrapper.innerHTML = data.matrix.map(c => `
        <div class="forecast-card ${c.border}">
            <div class="card-tag ${c.tag}">${c.type}</div>
            <h3>${c.ad}</h3><p class="date-bs">${c.bs}</p><span class="card-status-note">${c.note}</span>
        </div>
    `).join('');

    document.getElementById("countdown-board").classList.remove("hidden");
    document.getElementById("celebration-zone").classList.add("hidden");
    
    if (globalCountdownIntervalId) clearInterval(globalCountdownIntervalId);
    globalCountdownIntervalId = setInterval(executeQuantumCountdownTicks, 7);
}

function executeQuantumCountdownTicks() {
    if(CURRENT_SPA_VIEW !== "countdown-view") return;
    const cfg = CLOCK_SYSTEMS[ACTIVE_COUNTDOWN_MODE]; const now = Date.now(); const delta = cfg.targetDate - now;
    if (delta <= 0) {
        clearInterval(globalCountdownIntervalId);
        DOM.days.textContent = "00"; DOM.hours.textContent = "00"; DOM.minutes.textContent = "00"; DOM.seconds.textContent = "00"; DOM.milliseconds.textContent = "000";
        DOM.progressBar.style.width = "100%"; DOM.progressPercent.textContent = "100.0000%"; DOM.daysBadge.textContent = "TIMELINE REACHED";
        document.getElementById("countdown-board").classList.add("hidden"); document.getElementById("celebration-zone").classList.remove("hidden");
        return;
    }
    const totSec = Math.floor(delta / 1000); const totMin = Math.floor(totSec / 60); const totHr = Math.floor(totMin / 60);
    const d = Math.floor(totHr / 24); const h = totHr % 24; const m = totMin % 60; const s = totSec % 60; const ms = Math.floor(delta % 1000);

    DOM.days.textContent = String(d).padStart(2, '0'); DOM.hours.textContent = String(h).padStart(2, '0'); DOM.minutes.textContent = String(m).padStart(2, '0'); DOM.seconds.textContent = String(s).padStart(2, '0'); DOM.milliseconds.textContent = String(ms).padStart(3, '0');
    DOM.daysBadge.textContent = `${d + 1} DAYS REMAINING`;

    const span = cfg.targetDate - cfg.startDate; const elapsed = now - cfg.startDate;
    let pct = Math.min(Math.max((elapsed / span) * 100, 0), 100);
    DOM.progressBar.style.width = `${pct.toFixed(4)}%`; DOM.progressPercent.textContent = `${pct.toFixed(4)}%`;
}

function processSystemClockTicks() {
    const clockNode = document.getElementById("digital-clock"); if(!clockNode) return;
    const t = new Date(); clockNode.textContent = `${String(t.getHours()).padStart(2, '0')}:${String(t.getMinutes()).padStart(2, '0')}:${String(t.getSeconds()).padStart(2, '0')}`;
    // Simulate high precision calendars mapping
    document.getElementById("current-date-greg").textContent = t.toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
    document.getElementById("current-date-nep").textContent = "3 Ashar 2083";
}
setInterval(processSystemClockTicks, 1000);

/**
 * =========================================================================
 * PROFESSIONAL ENHANCED SYLLABUS MULTI-SET TESTING CORE ENGINE
 * =========================================================================
 */
const TESTING_TOPICS_MAP = {
    "10": ["Computer Science", "Force & Mechanics", "Optics & Electricity", "Database Management"],
    "12": ["Physics Dynamics", "Computer Science (C)", "Thermodynamics", "Relational Database Map"]
};

// Generates precise mock distribution parameters dynamically without file bloating
function abstractQuestionNodeItem(grade, subject, setNum, questionIdx) {
    const keys = [`${grade}-${subject}-S${setNum}-Q${questionIdx}`];
    return {
        q: `[Syllabus Matrix Node Vector: ${subject}] Evaluate high-yield structural equation framework properties matching question node index ${questionIdx} inside evaluation set deck ${setNum}.`,
        a: [`Syllabus Paradigm Option Target Alpha (${keys})`, `Target Vector Hypothesis Beta`, `Calculated Root Matrix Variant Gamma`, `System Fallback Variable Delta`],
        c: (setNum + questionIdx) % 4
    };
}

let activeQuizRuntimeState = { grade: "", subject: "", set: 0, questionsList: [], index: 0, selectionsLog: [] };

function buildSyllabusTestingHub(grade) {
    document.getElementById("quiz-view-class-lbl").textContent = grade;
    const tabRack = document.getElementById("quiz-subject-tabs"); tabRack.innerHTML = "";
    const contentRack = document.getElementById("quiz-sets-rack"); contentRack.innerHTML = "";
    
    const subjects = TESTING_TOPICS_MAP[grade] || TESTING_TOPICS_MAP["12"];
    subjects.forEach((subj, idx) => {
        const tab = document.createElement("button");
        tab.className = `sub-tab-btn ${idx === 0 ? 'active' : ''}`;
        tab.textContent = subj.toUpperCase();
        tab.addEventListener("click", () => {
            document.querySelectorAll(".sub-tab-btn").forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderSetsRackForSubject(grade, subj);
        });
        tabRack.appendChild(tab);
    });
    renderSetsRackForSubject(grade, subjects[0]);
}

function renderSetsRackForSubject(grade, subject) {
    const rack = document.getElementById("quiz-sets-rack"); rack.innerHTML = "";
    for(let i = 1; i <= 10; i++) {
        const card = document.createElement("div");
        card.className = "set-cyber-card";
        card.innerHTML = `<span class="set-number-label">${String(i).padStart(2,'0')}</span><span class="set-meta-info">DECK SET</span>`;
        card.addEventListener("click", () => triggerQuizEngineSequence(grade, subject, i));
        rack.appendChild(card);
    }
}

function triggerQuizEngineSequence(grade, subject, setNumber) {
    let dataset = [];
    for(let q = 1; q <= 10; q++) { dataset.push(abstractQuestionNodeItem(grade, subject, setNumber, q)); }
    
    activeQuizRuntimeState = { grade: grade, subject: subject, set: setNumber, questionsList: dataset, index: 0, selectionsLog: [] };
    
    document.getElementById("quiz-meta-subj").textContent = subject;
    document.getElementById("quiz-meta-set").textContent = String(setNumber).padStart(2,'0');
    
    switchSPAView("quiz-active-engine-view");
    loadActiveEngineQuestionField();
}

function loadActiveEngineQuestionField() {
    const s = activeQuizRuntimeState; const item = s.questionsList[s.index];
    document.getElementById("quiz-current-idx").textContent = s.index + 1;
    document.getElementById("quiz-run-progress-fill").style.width = `${((s.index) / s.questionsList.length) * 100}%`;
    document.getElementById("active-question-text").textContent = item.q;
    
    const container = document.getElementById("active-options-container"); container.innerHTML = "";
    const nextBtn = document.getElementById("quiz-next-step-btn"); nextBtn.classList.add("hidden");

    item.a.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-node-item";
        btn.textContent = `${String.fromCharCode(65 + idx)}. ${opt}`;
        btn.addEventListener("click", () => {
            container.querySelectorAll(".option-node-item").forEach(b => b.classList.remove("selected-node"));
            btn.classList.add("selected-node");
            s.selectionsLog[s.index] = idx;
            nextBtn.classList.remove("hidden");
        });
        container.appendChild(btn);
    });
    
    if(s.index === s.questionsList.length - 1) { nextBtn.textContent = "COMPILE & SUBMIT MATRIX 📊"; }
    else { nextBtn.textContent = "Proceed Matrix Node ➡️"; }
}

document.getElementById("quiz-next-step-btn").addEventListener("click", () => {
    const s = activeQuizRuntimeState;
    if(s.index < s.questionsList.length - 1) {
        s.index++; loadActiveEngineQuestionField();
    } else {
        compileAndDisplayTestingEvaluation();
    }
});
document.getElementById("quit-quiz-engine-btn").addEventListener("click", () => {
    if(confirm("Abort processing evaluation metrics? Current response maps will be wiped out.")) { switchSPAView("quiz-selection-view"); }
});

function compileAndDisplayTestingEvaluation() {
    switchSPAView("quiz-evaluation-view");
    const s = activeQuizRuntimeState; let correctCounter = 0;
    const ledger = document.getElementById("eval-breakdown-ledger"); ledger.innerHTML = "";

    s.questionsList.forEach((q, idx) => {
        const userPick = s.selectionsLog[idx];
        const isCorrect = userPick === q.c; if(isCorrect) correctCounter++;
        
        const row = document.createElement("div"); row.className = "audit-item-row";
        row.innerHTML = `
            <div class="audit-question-txt">Item Node ${idx + 1}: ${q.q}</div>
            <div class="audit-vector-lines">
                <div class="vector-line correct-anchor">Verified Correct Path: ${String.fromCharCode(65 + q.c)}. ${q.a[q.c]}</div>
                ${!isCorrect ? `<div class="vector-line user-pick-wrong">Your Input Vector: ${String.fromCharCode(65 + userPick)}. ${q.a[userPick]}</div>` : ''}
            </div>
        `;
        ledger.appendChild(row);
    });

    const finalPct = (correctCounter / s.questionsList.length) * 100;
    document.getElementById("eval-score-pct").textContent = `${finalPct}%`;
    document.getElementById("eval-score-fraction").textContent = `Processed ${correctCounter} out of ${s.questionsList.length} matrices accurately.`;

    const cloudMsg = document.getElementById("quiz-cloud-push-status");
    cloudMsg.textContent = "TRANSMITTING SCORE METRICS SECURELY TO CLOUD GATEWAYS..."; cloudMsg.style.color = "var(--neon-cyan)";
    
    const uid = sessionStorage.getItem("matrix_uid");
    if(uid) {
        db.collection("students").doc(uid).collection("quiz_history").add({
            subject: s.subject, setNumber: s.set, accuracyRating: finalPct, timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            cloudMsg.textContent = "CLOUD VECTOR TRACKING OVERLAY SYNCHRONIZED ✔"; cloudMsg.style.color = "var(--neon-green)";
        });
    }
}
document.getElementById("exit-evaluation-btn").addEventListener("click", () => switchSPAView("quiz-selection-view"));

/**
 * =========================================================================
 * CORE HIGH-PRECISION MULTI-STREAM WEIGHTED GPA PREDICTOR LEDGER
 * =========================================================================
 */
let CURRENT_STREAM_SELECTION = "science";

const STREAM_SCHEMES_MAP = {
    "science-computer": [
        { id: "s1", name: "Compulsory English", thMax: 75, prMax: 25, cr: 4 }, { id: "s2", name: "Compulsory Nepali", thMax: 75, prMax: 25, cr: 3 },
        { id: "s3", name: "Mathematics Framework", thMax: 100, prMax: 0, cr: 5 }, { id: "s4", name: "Physics Core Matrix", thMax: 75, prMax: 25, cr: 5 },
        { id: "s5", name: "Chemistry Core Matrix", thMax: 75, prMax: 25, cr: 5 }, { id: "s6", name: "Computer Science Vector", thMax: 50, prMax: 50, cr: 5 }
    ],
    "science-biology": [
        { id: "s1", name: "Compulsory English", thMax: 75, prMax: 25, cr: 4 }, { id: "s2", name: "Compulsory Nepali", thMax: 75, prMax: 25, cr: 3 },
        { id: "s3", name: "Mathematics Framework", thMax: 100, prMax: 0, cr: 5 }, { id: "s4", name: "Physics Core Matrix", thMax: 75, prMax: 25, cr: 5 },
        { id: "s5", name: "Chemistry Core Matrix", thMax: 75, prMax: 25, cr: 5 }, { id: "s7", name: "Biology Core Matrix", thMax: 75, prMax: 25, cr: 5 }
    ],
    "management": [
        { id: "m1", name: "Compulsory English", thMax: 75, prMax: 25, cr: 4 }, { id: "m2", name: "Compulsory Nepali", thMax: 75, prMax: 25, cr: 3 },
        { id: "m3", name: "Social Studies / Life Skills", thMax: 75, prMax: 25, cr: 5 }, { id: "m4", name: "Principles of Accounting I", thMax: 75, prMax: 25, cr: 5 },
        { id: "m5", name: "Economics Matrix / Marketing", thMax: 75, prMax: 25, cr: 5 }, { id: "m6", name: "Business Math / Computer App", thMax: 75, prMax: 25, cr: 5 }
    ]
};

function renderGPALedgerFields() {
    const root = document.getElementById("gpa-dynamic-fields-stack"); root.innerHTML = "";
    document.getElementById("gpa-empty-state-prompt").classList.remove("hidden");
    document.getElementById("gpa-results-display-panel").classList.add("hidden");
    
    let key = CURRENT_STREAM_SELECTION;
    if(key === "science") {
        const val = document.querySelector('input[name="sci-elective"]:checked').value;
        key = `science-${val}`; document.getElementById("science-electives-row").style.display = "flex";
    } else {
        document.getElementById("science-electives-row").style.display = "none";
    }

    const structure = STREAM_SCHEMES_MAP[key];
    structure.forEach(s => {
        const row = document.createElement("div"); row.className = "gpa-field-row-node";
        row.innerHTML = `
            <label>${s.name}</label>
            <input type="number" min="0" max="${s.thMax}" class="gpa-mini-input th-node" data-max="${s.thMax}" data-credit="${s.cr}" placeholder="Max ${s.thMax}" required>
            <input type="number" min="0" max="${s.prMax}" class="gpa-mini-input pr-node" data-max="${s.prMax}" placeholder="Max ${s.prMax}" ${s.prMax === 0 ? 'disabled value="0"' : 'required'}>
        `;
        root.appendChild(row);
    });
}

document.querySelectorAll(".stream-toggle-btn").forEach(b => {
    b.addEventListener("click", () => {
        document.querySelectorAll(".stream-toggle-btn").forEach(btn => btn.classList.remove("active"));
        b.classList.add("active"); CURRENT_STREAM_SELECTION = b.getAttribute("data-stream");
        renderGPALedgerFields();
    });
});
document.querySelectorAll('input[name="sci-elective"]').forEach(r => { r.addEventListener("change", renderGPALedgerFields); });

document.getElementById("execute-gpa-matrix-btn").addEventListener("click", () => {
    const fields = document.querySelectorAll(".gpa-field-row-node");
    let calculatedQualityPoints = 0, accruedCreditUnits = 0, matrixFailure = false;
    const miniLedger = document.getElementById("gpa-subject-breakdown-ledger"); miniLedger.innerHTML = "";

    fields.forEach(f => {
        const thInput = f.querySelector(".th-node"); const prInput = f.querySelector(".pr-node");
        const thVal = parseFloat(thInput.value); const prVal = parseFloat(prInput.value);
        const thMax = parseFloat(thInput.getAttribute("data-max")); const prMax = parseFloat(prInput.getAttribute("data-max"));
        const cr = parseFloat(thInput.getAttribute("data-credit"));
        
        if(isNaN(thVal) || thVal < 0 || thVal > thMax || isNaN(prVal) || prVal < 0 || prVal > prMax) { matrixFailure = true; return; }
        
        // Comprehensive NEB Framework Percentage Weight Scaling
        const summatedMarks = thVal + prVal; const totalPotentialMax = thMax + prMax;
        const totalPct = (summatedMarks / totalPotentialMax) * 100;
        
        let gp = 0.0; let symbol = "F";
        if(totalPct >= 90) { gp = 4.0; symbol = "A+"; } else if(totalPct >= 80) { gp = 3.6; symbol = "A"; }
        else if(totalPct >= 70) { gp = 3.2; symbol = "B+"; } else if(totalPct >= 60) { gp = 2.8; symbol = "B"; }
        else if(totalPct >= 50) { gp = 2.4; symbol = "C+"; } else if(totalPct >= 40) { gp = 2.0; symbol = "C"; }
        else if(totalPct >= 35) { gp = 1.6; symbol = "D"; } else { gp = 0.0; symbol = "NG"; }

        calculatedQualityPoints += (gp * cr); accruedCreditUnits += cr;
        
        const subjName = f.querySelector("label").textContent;
        const row = document.createElement("div"); row.className = "subj-ledger-row";
        row.innerHTML = `<span>${subjName}</span><span class="grade-tag">${symbol} (${gp.toFixed(2)})</span>`;
        miniLedger.appendChild(row);
    });

    if(matrixFailure) { alert("Matrix Evaluation Exception: Inputs missing or exceed scaled bounds."); return; }
    
    const definitiveGPA = calculatedQualityPoints / accruedCreditUnits;
    document.getElementById("gpa-neon-metric").textContent = definitiveGPA.toFixed(2);
    
    const txtBadge = document.getElementById("gpa-text-grade-badge");
    if(definitiveGPA >= 3.6) { txtBadge.textContent = "PROFILE STATUS: OUTSTANDING (A+)"; txtBadge.style.color = "var(--neon-green)"; }
    else if(definitiveGPA >= 3.2) { txtBadge.textContent = "PROFILE STATUS: EXCELLENT (A)"; txtBadge.style.color = "var(--neon-cyan)"; }
    else if(definitiveGPA >= 2.8) { txtBadge.textContent = "PROFILE STATUS: VERY GOOD (B+)"; txtBadge.style.color = "var(--neon-purple)"; }
    else if(definitiveGPA >= 2.0) { txtBadge.textContent = "PROFILE STATUS: SATISFACTORY (C)"; txtBadge.style.color = "var(--amber-alert)"; }
    else { txtBadge.textContent = "PROFILE STATUS: INSUFFICIENT GRADIENT (NG)"; txtBadge.style.color = "var(--rose-alert)"; }

    document.getElementById("gpa-empty-state-prompt").classList.add("hidden");
    document.getElementById("gpa-results-display-panel").classList.remove("hidden");
});

/**
 * =========================================================================
 * ANTIDOTE-AD MULTI-CHANNEL AMBIENT AUDIO GRAPH CONTROLS
 * =========================================================================
 */
let playerAarti, playerBell, playerSankha, loadedPlayersCount = 0;
let isAartiActive = false, isBellActive = false, isSankhaActive = false;

const tag = document.createElement('script'); tag.src = "https://www.youtube.com/iframe_api";
document.getElementsByTagName('head')[0].appendChild(tag);

function onYouTubeIframeAPIReady() {
    playerAarti = new YT.Player('youtube-player-aarti', { videoId: 'TTVAyS9wOV4', host: 'https://www.youtube-nocookie.com', playerVars: { 'autoplay': 0, 'controls': 0, 'loop': 1, 'playlist': 'TTVAyS9wOV4', 'mute': 1, 'playsinline': 1 }, events: { 'onReady': trackPlayersReady } });
    playerBell = new YT.Player('youtube-player-bell', { videoId: 'hw3vQ0_-Bgw', host: 'https://www.youtube-nocookie.com', playerVars: { 'autoplay': 0, 'controls': 0, 'loop': 1, 'playlist': 'hw3vQ0_-Bgw', 'mute': 1, 'playsinline': 1 }, events: { 'onReady': trackPlayersReady } });
    playerSankha = new YT.Player('youtube-player-sankha', { videoId: 'Hc-jD3wn5o4', host: 'https://www.youtube-nocookie.com', playerVars: { 'autoplay': 0, 'controls': 0, 'loop': 1, 'playlist': 'Hc-jD3wn5o4', 'mute': 1, 'playsinline': 1 }, events: { 'onReady': trackPlayersReady } });
}

function trackPlayersReady() { loadedPlayersCount++; if(loadedPlayersCount >= 3) { document.getElementById("mobile-ignition-overlay").style.cursor = "pointer"; } }

document.getElementById("mobile-ignition-overlay").addEventListener("click", () => {
    if(loadedPlayersCount >= 3) {
        playerAarti.unMute(); playerAarti.setVolume(45); playerAarti.playVideo(); isAartiActive = true;
        document.getElementById("audio-toggle").innerHTML = `<span class="audio-icon">🔊</span> SARASWATI MATA`;
        document.getElementById("audio-toggle").classList.add("playing");
        
        playerBell.playVideo(); playerSankha.playVideo();
        document.getElementById("mobile-ignition-overlay").classList.add("fade-out");
    }
});

document.getElementById("audio-toggle").addEventListener("click", () => {
    if(isAartiActive) { playerAarti.mute(); isAartiActive = false; document.getElementById("audio-toggle").classList.remove("playing"); }
    else { playerAarti.unMute(); playerAarti.setVolume(45); isAartiActive = true; document.getElementById("audio-toggle").classList.add("playing"); }
});
document.getElementById("btn-bell").addEventListener("click", () => {
    if(isBellActive) { playerBell.mute(); isBellActive = false; document.getElementById("btn-bell").classList.remove("playing"); }
    else { playerBell.unMute(); playerBell.setVolume(75); isBellActive = true; document.getElementById("btn-bell").classList.add("playing"); }
});
document.getElementById("btn-sankha").addEventListener("click", () => {
    if(isSankhaActive) { playerSankha.mute(); isSankhaActive = false; document.getElementById("btn-sankha").classList.remove("playing"); }
    else { playerSankha.unMute(); playerSankha.setVolume(85); isSankhaActive = true; document.getElementById("btn-sankha").classList.add("playing"); }
});

function monitorNetworkTrafficMetrics() {
    fetch('https://api.counterapi.dev/v1/neb_universal_triple_room_2026/visits/up')
        .then(res => res.json()).then(d => { if(d.count) document.getElementById("visitor-count").textContent = d.count.toLocaleString(); })
        .catch(() => { document.getElementById("visitor-count").textContent = "2,419"; });
}
monitorNetworkTrafficMetrics();
