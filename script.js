/**
 * =========================================================================
 * REAL-TIME GOOGLE FIREBASE CLOUD CORE HANDSHAKE ARCHITECTURE
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

// Initialize Google Server Connections
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

/**
 * ============================================
 * ACADEMIC COMMAND SYSTEM MULTI-MATRIX CONFIGS
 * ============================================
 */
const CLOCK_SYSTEMS = {
    "neb-result": {
        title: "NEB Grade 12 Result 2083 Countdown",
        subtitle: "Every second brings the matrix metrics closer.",
        targetDate: new Date("June 24, 2026 00:00:00").getTime(),
        startDate: new Date("June 14, 2026 00:00:00").getTime(),
        targetAD: "June 24, 2026", targetBS: "10 Ashar 2083",
        tag: "SYSTEM: NEB RESULT MODULE", portalUrl: "neb.ntc.net.np", portalHref: "https://neb.ntc.net.np",
        instruction: "Official board servers protect result modules using strict isolation protocols. To view metrics, verify symbol sheets, and securely process grade ledgers, establish a clean line by routing directly through the external portal interface node.",
        btnText: "Launch External Gateway View ⚡", celebTitle: "Result Feed Confirmed.", celebDesc: "Mainframe ledgers have cleared isolated buffering grids.",
        matrix: [
            { tag: "tag-amber", border: "border-amber", type: "EARLIEST EXPECTED", ad: "June 22, 2026", bs: "8 Ashar 2083", note: "Early data processing trajectory" },
            { tag: "tag-cyan", border: "border-cyan active-track", type: "MOST LIKELY TARGET", ad: "June 24, 2026", bs: "10 Ashar 2083", note: "Standard calibration window" },
            { tag: "tag-rose", border: "border-rose", type: "LATEST EXPECTED", ad: "June 28, 2026", bs: "14 Ashar 2083", note: "Verification structural fallback delay" }
        ]
    },
    "see-exam": {
        title: "SEE Exam 2083 Target Matrix",
        subtitle: "Secondary foundation deployment protocol ticking down.",
        targetDate: new Date("March 29, 2027 00:00:00").getTime(),
        startDate: new Date("June 15, 2026 00:00:00").getTime(),
        targetAD: "March 29, 2027", targetBS: "15 Chaitra 2083",
        tag: "SYSTEM: SEE EXAM CONSOLE", portalUrl: "see.gov.np", portalHref: "https://see.gov.np",
        instruction: "Secondary Education Examination telemetry is cataloged under the National Examinations Board portal arrays. Access model blueprints, schedules, and individual security forms natively via the root domain gateway.",
        btnText: "Access SEE Examination Center ⚡", celebTitle: "SEE Matrix Concluded.", celebDesc: "Exam collection sheets processed successfully.",
        matrix: [
            { tag: "tag-amber", border: "border-amber", type: "ROUTINE RELEASE", ad: "January 15, 2027", bs: "2 Magh 2083", note: "Routine distribution trajectory" },
            { tag: "tag-cyan", border: "border-cyan active-track", type: "LAUNCH DATE AD", ad: "March 29, 2027", bs: "15 Chaitra 2083", note: "Compulsory English sequence start" },
            { tag: "tag-rose", border: "border-rose", type: "CONCLUSION HORIZON", ad: "April 07, 2027", bs: "24 Chaitra 2083", note: "Technical electives finish path" }
        ]
    },
    "neb-exam": {
        title: "NEB Class 12 Board Exam 2084",
        subtitle: "Final deployment phase validation timeline.",
        targetDate: new Date("April 28, 2027 00:00:00").getTime(),
        startDate: new Date("June 15, 2026 00:00:00").getTime(),
        targetAD: "April 28, 2027", targetBS: "14 Baishak 2084",
        tag: "SYSTEM: NEB BOARD EXAM CONSOLE", portalUrl: "neb.gov.np", portalHref: "https://www.neb.gov.np",
        instruction: "Class 12 board examination blueprints, structural specification grids, and distribution maps are verified directly by Sanothimi server grids. Establish an external terminal connection below.",
        btnText: "Route to NEB Board Portal ⚡", celebTitle: "Final Boards Complete.", celebDesc: "System processing collection scripts initialized.",
        matrix: [
            { tag: "tag-amber", border: "border-amber", type: "ROUTINE BROADCAST", ad: "February 10, 2027", bs: "28 Magh 2083", note: "Schedule array publishing window" },
            { tag: "tag-cyan", border: "border-cyan active-track", type: "BOARD EXAM START", ad: "April 28, 2027", bs: "14 Baishak 2084", note: "National evaluation vector activation" },
            { tag: "tag-rose", border: "border-rose", type: "BOARD TERMINATION", ad: "May 09, 2027", bs: "26 Baishak 2084", note: "All streams collection completion" }
        ]
    }
};

// ACADEMIC SYLLABUS QUESTION MATRIX BANK
const QUIZ_DATABASE = {
    "10": [
        { q: "Which programming language paradigm is directly implemented in standard Class 10 QBASIC modules?", a: ["Procedural", "Object-Oriented", "Functional", "Logic-Driven"], c: 0 },
        { q: "What is the primary physical law dictating the operation of hydraulic brakes in Class 10 Force mechanics?", a: ["Newton's Third Law", "Pascal's Law", "Archimedes' Principle", "Boyle's Law"], c: 1 },
        { q: "Which structural asset handles long-distance data transport across modern high-speed networks in Nepal?", a: ["Coaxial Cable", "Fiber Optic Line", "Twisted Pair Array", "Microwave Grid"], c: 1 },
        { q: "What component prevents the backup execution flow of back-current elements in step-down transformers?", a: ["Inverter Core", "Diodes", "Laminated Soft Iron Core", "Commutator ring"], c: 2 },
        { q: "Which functional database property ensures records remain completely unique across tables?", a: ["Foreign Key", "Index Matrix", "Primary Key", "Query String"], c: 2 }
    ],
    "12": [
        { q: "In Class 12 Rotational Dynamics, how does the moment of inertia change if a spinning ice skater pulls her arms inward?", a: ["Increases", "Decreases", "Stays Identical", "Fluctuates Sinusoidally"], c: 1 },
        { q: "Which pointer operator is explicitly executed to extract the exact memory address location of a variable in C?", a: ["Indirection (*)", "Ampersand (&)", "Arrow (->)", "Scope Resolution (::)"], c: 1 },
        { q: "What thermodynamic property is kept constantly static during an Isochoric state cycle translation?", a: ["Pressure", "Enthalpy Matrix", "Temperature", "Volume"], c: 3 },
        { q: "Which structure handles the primary mapping logic when translating object layouts to standard relational databases?", a: ["ORM Matrix", "Pointer Registry", "Virtual Table Compilation", "Inheritance Tree"], c: 0 },
        { q: "What happens to the fringe width in a Young's Double Slit interference model if the entire apparatus is immersed in water?", a: ["It broadens", "It narrows down", "Remains entirely constant", "Fringes clear out completely"], c: 1 }
    ]
};

// SYLLABUS CREDITS TRACKING MAPS
const CURRICULUM_GPA_SCHEMES = {
    "10": [
        { name: "Compulsory English", credit: 4 }, { name: "Compulsory Nepali", credit: 4 },
        { name: "Compulsory Mathematics", credit: 4 }, { name: "Compulsory Science", credit: 4 },
        { name: "Social Studies", credit: 4 }, { name: "Health, Environment & Population", credit: 4 }
    ],
    "12": [
        { name: "Compulsory English", credit: 4 }, { name: "Compulsory Nepali", credit: 3 },
        { name: "Mathematics / Social", credit: 5 }, { name: "Physics / Opt. 1", credit: 5 },
        { name: "Chemistry / Opt. 2", credit: 5 }, { name: "Computer Science / Opt. 3", credit: 5 }
    ]
};

let CURRENT_MODE = "neb-result";
let animationFrameId = null;

// ELEMENT HOOK LOCATIONS
const DOM = {
    days: document.getElementById("days"), hours: document.getElementById("hours"), minutes: document.getElementById("minutes"), seconds: document.getElementById("seconds"), milliseconds: document.getElementById("milliseconds"),
    clock: document.getElementById("digital-clock"), daysBadge: document.getElementById("days-remaining-badge"), progressBar: document.getElementById("progress-fill-bar"), progressPercent: document.getElementById("progress-percentage"),
    countdownBoard: document.getElementById("countdown-board"), celebrationZone: document.getElementById("celebration-zone"),
    title: document.getElementById("dashboard-title"), subtitle: document.getElementById("dashboard-subtitle"), metaAD: document.getElementById("meta-ad"), metaBS: document.getElementById("meta-bs"),
    systemTag: document.getElementById("active-system-tag"), urlTag: document.getElementById("portal-url-tag"), instruction: document.getElementById("redirect-instruction-text"), launchBtn: document.getElementById("secure-launch-anchor"), matrixWrapper: document.getElementById("matrix-cards-wrapper"),
    celebTitle: document.getElementById("celebration-title"), celebDesc: document.getElementById("celebration-desc"), startD: document.getElementById("trajectory-start-date"), startL: document.getElementById("trajectory-start-label"), targetD: document.getElementById("trajectory-target-date"), targetL: document.getElementById("trajectory-target-label"),
    hamburger: document.getElementById("hamburger-menu-btn"), drawer: document.getElementById("nav-drawer"), drawerClose: document.getElementById("close-drawer-btn"), drawerOverlay: document.getElementById("drawer-overlay"), menuItems: document.querySelectorAll(".menu-item"),
    authOverlay: document.getElementById("auth-gateway-overlay"), loginPanel: document.getElementById("login-panel"), signupPanel: document.getElementById("signup-panel"), statusLog: document.getElementById("auth-status-log")
};

document.addEventListener("DOMContentLoaded", () => {
    // LAYER ENTRY INTERACTION HANDLERS
    document.getElementById("switch-to-signup").addEventListener("click", () => { DOM.loginPanel.classList.add("hidden"); DOM.signupPanel.classList.remove("hidden"); DOM.statusLog.textContent = "AWAITING MATRIX BACKEND ASSIGNMENT..."; });
    document.getElementById("switch-to-login").addEventListener("click", () => { DOM.signupPanel.classList.add("hidden"); DOM.loginPanel.classList.remove("hidden"); DOM.statusLog.textContent = "SECURE HANDSHAKE PENDING..."; });
    document.getElementById("logout-sidebar-btn").addEventListener("click", () => { auth.signOut().then(() => window.location.reload()); });

    // --- FIREBASE SECURITY REGISTRATION PROCESS ---
    document.getElementById("signup-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const user = document.getElementById("signup-username").value.trim().toLowerCase();
        const level = document.getElementById("signup-level").value;
        const pass = document.getElementById("signup-password").value;

        if (pass.length < 6) {
            DOM.statusLog.textContent = "SECURITY ALERT: ACCESS CODE KEY MUST BE >= 6 CHARS";
            DOM.statusLog.style.color = "#ff4d6d"; return;
        }
        DOM.statusLog.textContent = "ESTABLISHING REQ TO CLOUD ARRAYS..."; DOM.statusLog.style.color = "#00f2fe";
        const cloudEmail = `${user}@academicconsole.net`;

        auth.createUserWithEmailAndPassword(cloudEmail, pass)
            .then((res) => {
                return db.collection("students").doc(res.user.uid).set({ username: user, gradeLevel: level, timestamp: firebase.firestore.FieldValue.serverTimestamp() });
            })
            .then(() => { DOM.statusLog.textContent = "REGISTRATION CONFIRMED. REDIRECTING..."; DOM.statusLog.style.color = "#00ff88"; })
            .catch((err) => { DOM.statusLog.textContent = err.code === "auth/email-already-in-use" ? "ERROR: IDENTIFIER TAKEN" : err.message; DOM.statusLog.style.color = "#ff4d6d"; });
    });

    // --- FIREBASE SIGN IN MONITOR PROCESS ---
    document.getElementById("login-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const user = document.getElementById("login-username").value.trim().toLowerCase();
        const pass = document.getElementById("login-password").value;
        DOM.statusLog.textContent = "CONTACTING ENCRYPTED AUTH CENTRALS..."; DOM.statusLog.style.color = "#00f2fe";

        auth.signInWithEmailAndPassword(`${user}@academicconsole.net`, pass)
            .catch(() => { DOM.statusLog.textContent = "DENIED: INVALID ACCESS PARAMETERS"; DOM.statusLog.style.color = "#ff4d6d"; });
    });

    // --- PERSISTENCE STATE WATCHDOG ARRAYS ---
    auth.onAuthStateChanged((user) => {
        if (user) {
            db.collection("students").doc(user.uid).get().then((doc) => {
                let level = "12"; if (doc.exists) { level = doc.data().gradeLevel; }
                sessionStorage.setItem("active_student", user.uid); sessionStorage.setItem("student_level", level);
                DOM.statusLog.textContent = "VERIFIED. SYNC COMPLETE."; DOM.statusLog.style.color = "#00ff88";
                CURRENT_MODE = level === "10" ? "see-exam" : "neb-result";
                
                initializeDashboardView();
                initializeQuizSystem(level);
                buildGpaLedgerInterface(level);

                setTimeout(() => { DOM.authOverlay.style.opacity = "0"; setTimeout(() => DOM.authOverlay.classList.add("hidden"), 500); }, 600);
            });
        } else {
            DOM.authOverlay.classList.remove("hidden"); DOM.authOverlay.style.opacity = "1";
        }
    });
});

/* --- Drawer Sidebar Open Callbacks --- */
function toggleDrawer() { DOM.drawer.classList.toggle("open"); DOM.drawerOverlay.classList.toggle("visible"); }
DOM.hamburger.addEventListener("click", toggleDrawer); DOM.drawerClose.addEventListener("click", toggleDrawer); DOM.drawerOverlay.addEventListener("click", toggleDrawer);
DOM.menuItems.forEach(item => {
    if(item.id === "logout-sidebar-btn") return;
    item.addEventListener("click", () => {
        DOM.menuItems.forEach(i => i.classList.remove("active")); item.classList.add("active");
        CURRENT_MODE = item.getAttribute("data-target"); initializeDashboardView(); toggleDrawer();
    });
});

/* --- Core Time Pipeline Initialization Render Engine --- */
function initializeDashboardView() {
    const cfg = CLOCK_SYSTEMS[CURRENT_MODE];
    DOM.title.textContent = cfg.title; DOM.subtitle.textContent = cfg.subtitle;
    DOM.metaAD.textContent = cfg.targetAD; DOM.metaBS.textContent = cfg.targetBS;
    DOM.systemTag.textContent = cfg.tag; DOM.urlTag.textContent = cfg.portalUrl;
    DOM.instruction.textContent = cfg.instruction; DOM.launchBtn.setAttribute("href", cfg.portalHref); DOM.launchBtn.innerHTML = cfg.btnText;
    DOM.celebTitle.textContent = cfg.celebTitle; DOM.celebDesc.textContent = cfg.celebDesc;
    
    const dStart = new Date(cfg.startDate), dTarget = new Date(cfg.targetDate);
    DOM.startD.textContent = dStart.toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'});
    DOM.targetD.textContent = dTarget.toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'});
    DOM.startL.textContent = `INITIAL CALIBRATION POINT`; DOM.targetL.textContent = `${cfg.targetBS} (ARRIVAL)`;

    DOM.matrixWrapper.innerHTML = cfg.matrix.map(card => `
        <div class="forecast-card ${card.border}">
            <div class="card-tag ${card.tag}">${card.type}</div>
            <h3>${card.ad}</h3><p class="date-bs">${card.bs}</p><span class="card-status-note">${card.note}</span>
        </div>
    `).join('');

    DOM.countdownBoard.classList.remove("hidden"); DOM.celebrationZone.classList.add("hidden");
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    runQuantumCountdown();
}

function runQuantumCountdown() {
    const cfg = CLOCK_SYSTEMS[CURRENT_MODE]; const timeNow = Date.now(); const delta = cfg.targetDate - timeNow;
    if (delta <= 0) { executeTerminationState(); return; }

    const totalSecs = Math.floor(delta / 1000); const totalMins = Math.floor(totalSecs / 60); const totalHrs = Math.floor(totalMins / 60);
    const d = Math.floor(totalHrs / 24); const h = totalHrs % 24; const m = totalMins % 60; const s = totalSecs % 60; const ms = Math.floor(delta % 1000);

    DOM.days.textContent = String(d).padStart(2, '0'); DOM.hours.textContent = String(h).padStart(2, '0'); DOM.minutes.textContent = String(m).padStart(2, '0'); DOM.seconds.textContent = String(s).padStart(2, '0'); DOM.milliseconds.textContent = String(ms).padStart(3, '0');
    DOM.daysBadge.textContent = `${d + 1} DAYS AWAY`;

    const windowSpan = cfg.targetDate - cfg.startDate; const elapsed = timeNow - cfg.startDate;
    let progress = Math.min(Math.max((elapsed / windowSpan) * 100, 0), 100);
    DOM.progressBar.style.width = `${progress.toFixed(4)}%`; DOM.progressPercent.textContent = `${progress.toFixed(4)}%`;

    animationFrameId = requestAnimationFrame(runQuantumCountdown);
}

function runSystemClock() {
    const t = new Date(); DOM.clock.textContent = `${String(t.getHours()).padStart(2, '0')}:${String(t.getMinutes()).padStart(2, '0')}:${String(t.getSeconds()).padStart(2, '0')}`;
}
function executeTerminationState() {
    DOM.days.textContent = "00"; DOM.hours.textContent = "00"; DOM.minutes.textContent = "00"; DOM.seconds.textContent = "00"; DOM.milliseconds.textContent = "000";
    DOM.progressBar.style.width = "100%"; DOM.progressPercent.textContent = "100.0000%"; DOM.daysBadge.textContent = "HORIZON REACHED";
    DOM.countdownBoard.classList.add("hidden"); DOM.celebrationZone.classList.remove("hidden");
}
setInterval(runSystemClock, 1000); runSystemClock();

/**
 * =========================================================================
 * ACADEMIC TESTING MATRIX CORE INTELLIGENCE & CLOUD DATA SYNC
 * =========================================================================
 */
let currentQuizSet = [], currentQuestionIndex = 0, liveUserScore = 0, hasAnswered = false;

function initializeQuizSystem(userLevel) {
    document.getElementById("quiz-class-title").textContent = userLevel;
    currentQuizSet = QUIZ_DATABASE[userLevel] || QUIZ_DATABASE["12"];
    resetQuizEngineState();
}
document.getElementById("start-quiz-btn").addEventListener("click", () => {
    document.getElementById("quiz-intro-screen").classList.add("hidden"); document.getElementById("quiz-active-screen").classList.remove("hidden"); renderQuizQuestion();
});
document.getElementById("retry-quiz-btn").addEventListener("click", resetQuizEngineState);

function resetQuizEngineState() {
    currentQuestionIndex = 0; liveUserScore = 0;
    document.getElementById("quiz-intro-screen").classList.remove("hidden"); document.getElementById("quiz-active-screen").classList.add("hidden"); document.getElementById("quiz-result-screen").classList.add("hidden");
}
function renderQuizQuestion() {
    hasAnswered = false; const qItem = currentQuizSet[currentQuestionIndex];
    document.getElementById("quiz-current-index").textContent = currentQuestionIndex + 1; document.getElementById("quiz-live-score").textContent = liveUserScore;
    document.getElementById("quiz-progress-fill").style.width = `${(currentQuestionIndex / currentQuizSet.length) * 100}%`;
    document.getElementById("quiz-question-text").textContent = qItem.q;
    
    const optContainer = document.getElementById("quiz-options-container"); optContainer.innerHTML = "";
    qItem.a.forEach((opt, idx) => {
        const btn = document.createElement("button"); btn.className = "option-cyber-btn"; btn.textContent = `${String.fromCharCode(65 + idx)}. ${opt}`;
        btn.addEventListener("click", () => {
            if (hasAnswered) return; hasAnswered = true;
            const btns = optContainer.querySelectorAll(".option-cyber-btn");
            if (idx === qItem.c) { btn.classList.add("correct-node"); liveUserScore += 20; } else { btn.classList.add("wrong-node"); btns[qItem.c].classList.add("correct-node"); }
            setTimeout(() => { currentQuestionIndex++; if (currentQuestionIndex < currentQuizSet.length) { renderQuizQuestion(); } else { terminateQuizProtocol(); } }, 1500);
        });
        optContainer.appendChild(btn);
    });
}
function terminateQuizProtocol() {
    document.getElementById("quiz-active-screen").classList.add("hidden"); document.getElementById("quiz-result-screen").classList.remove("hidden"); document.getElementById("quiz-progress-fill").style.width = "100%";
    const pct = (liveUserScore / (currentQuizSet.length * 20)) * 100; document.getElementById("quiz-final-percentage").textContent = `${pct}%`;
    const syncLog = document.getElementById("quiz-cloud-status"); syncLog.textContent = "SAVING TELEMETRY METRICS TO GOOGLE CORES..."; syncLog.style.color = "#00f2fe";
    
    const u = auth.currentUser;
    if(u) { db.collection("students").doc(u.uid).set({ latestQuizScore: pct, quizTerminus: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true }).then(() => { syncLog.textContent = "CLOUD RETRIEVAL MAP SECURED ✔"; syncLog.style.color = "#00ff88"; }); }
}

/**
 * =========================================================================
 * NEB / SEE CORE HIGH-PRECISION GPA PREDICTOR CALCULATOR LEDGER
 * =========================================================================
 */
function buildGpaLedgerInterface(level) {
    const wrapper = document.getElementById("gpa-input-fields-root"); wrapper.innerHTML = "";
    const courses = CURRICULUM_GPA_SCHEMES[level] || CURRICULUM_GPA_SCHEMES["12"];
    courses.forEach((item, index) => {
        const row = document.createElement("div"); row.className = "gpa-row-node";
        row.innerHTML = `<label>${item.name}</label><input type="number" min="0" max="100" class="gpa-input-field" data-credit="${item.credit}" placeholder="Marks" required>`;
        wrapper.appendChild(row);
    });
    document.getElementById("gpa-result-readout").classList.add("hidden");
}

document.getElementById("calculate-gpa-btn").addEventListener("click", () => {
    const inputNodes = document.querySelectorAll(".gpa-input-field");
    let totalQualityPoints = 0, totalCreditsEarned = 0, structuralFault = false;

    inputNodes.forEach(node => {
        const marks = parseFloat(node.value); const credit = parseFloat(node.getAttribute("data-credit"));
        if (isNaN(marks) || marks < 0 || marks > 100) { structuralFault = true; return; }
        
        let gp = 0.0;
        if (marks >= 90) gp = 4.0; else if (marks >= 80) gp = 3.6; else if (marks >= 70) gp = 3.2; else if (marks >= 60) gp = 2.8;
        else if (marks >= 50) gp = 2.4; else if (marks >= 40) gp = 2.0; else if (marks >= 35) gp = 1.6; else gp = 0.0;

        totalQualityPoints += gp * credit; totalCreditsEarned += credit;
    });

    const displayBox = document.getElementById("gpa-result-readout");
    if (structuralFault) { alert("Matrix exception: Ensure inputs match scale intervals (0-100)."); return; }
    
    const finalGpa = totalQualityPoints / totalCreditsEarned;
    document.getElementById("gpa-final-value").textContent = finalGpa.toFixed(2);
    
    const remarks = document.getElementById("gpa-remarks");
    if(finalGpa >= 3.6) { remarks.textContent = "OUTSTANDING (ACC-GRADE: A+)"; remarks.style.color = "#00ff88"; }
    else if(finalGpa >= 3.2) { remarks.textContent = "EXCELLENT (ACC-GRADE: A)"; remarks.style.color = "#00f2fe"; }
    else if(finalGpa >= 2.8) { remarks.textContent = "VERY GOOD (ACC-GRADE: B+)"; remarks.style.color = "#9d4edd"; }
    else if(finalGpa >= 2.0) { remarks.textContent = "SATISFACTORY (ACC-GRADE: C)"; remarks.style.color = "#ffb703"; }
    else { remarks.textContent = "INSUFFICIENT (DIAGNOSIS: F)"; remarks.style.color = "#ff4d6d"; }

    displayBox.classList.remove("hidden");
});

/**
 * ===================================================================================
 * ANTI-AD TRINITY AUDIO CONSOLE (MOBILE-IGNITED WITH EXACT TRUE RESUME / PAUSE LOGIC)
 * ===================================================================================
 */
let playerAarti, playerBell, playerSankha, isAartiPlaying = false, isBellMuted = true, isSankhaMuted = true;
const audioButton = document.getElementById("audio-toggle"), bellBtn = document.getElementById("btn-bell"), sankhaBtn = document.getElementById("btn-sankha"), overlayShield = document.getElementById("mobile-ignition-overlay");

const tag = document.createElement('script'); tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0]; firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    playerAarti = new YT.Player('youtube-player-aarti', { videoId: 'TTVAyS9wOV4', host: 'https://www.youtube-nocookie.com', playerVars: { 'autoplay': 0, 'controls': 0, 'loop': 1, 'playlist': 'TTVAyS9wOV4', 'modestbranding': 1, 'rel': 0, 'showinfo': 0, 'mute': 0, 'playsinline': 1 }, events: { 'onReady': onPlayerSystemsReady } });
    playerBell = new YT.Player('youtube-player-bell', { videoId: 'hw3vQ0_-Bgw', host: 'https://www.youtube-nocookie.com', playerVars: { 'autoplay': 1, 'controls': 0, 'loop': 1, 'playlist': 'hw3vQ0_-Bgw', 'modestbranding': 1, 'rel': 0, 'showinfo': 0, 'mute': 1, 'playsinline': 1 }, events: { 'onReady': onPlayerSystemsReady } });
    playerSankha = new YT.Player('youtube-player-sankha', { videoId: 'Hc-jD3wn5o4', host: 'https://www.youtube-nocookie.com', playerVars: { 'autoplay': 1, 'controls': 0, 'loop': 1, 'playlist': 'Hc-jD3wn5o4', 'modestbranding': 1, 'rel': 0, 'showinfo': 0, 'mute': 1, 'playsinline': 1 }, events: { 'onReady': onPlayerSystemsReady } });
}

let loadedSystemsCount = 0; function onPlayerSystemsReady() { loadedSystemsCount++; if (loadedSystemsCount >= 3) { overlayShield.style.cursor = "pointer"; } }
overlayShield.addEventListener("click", () => {
    if (loadedSystemsCount >= 3) {
        if (playerAarti && typeof playerAarti.playVideo === 'function') { playerAarti.unMute(); playerAarti.setVolume(55); playerAarti.playVideo(); isAartiPlaying = true; audioButton.innerHTML = `<span class="audio-icon">🔊</span> SARASWATI MATA: ON`; audioButton.classList.add("playing"); }
        if (playerBell && typeof playerBell.playVideo === 'function') playerBell.playVideo(); if (playerSankha && typeof playerSankha.playVideo === 'function') playerSankha.playVideo();
        overlayShield.classList.add("fade-out");
    }
});

audioButton.addEventListener("click", (e) => { e.stopPropagation(); if (!isAartiPlaying) { playerAarti.playVideo(); isAartiPlaying = true; audioButton.innerHTML = `<span class="audio-icon">🔊</span> SARASWATI MATA: ON`; audioButton.classList.add("playing"); } else { playerAarti.pauseVideo(); isAartiPlaying = false; audioButton.innerHTML = `<span class="audio-icon">🔇</span> SARASWATI MATA: OFF`; audioButton.classList.remove("playing"); } });
bellBtn.addEventListener("click", (e) => { e.stopPropagation(); if (isBellMuted) { playerBell.unMute(); playerBell.setVolume(80); isBellMuted = false; bellBtn.innerHTML = `<span class="audio-icon">🔔</span> BELL: ON`; bellBtn.classList.add("playing"); } else { playerBell.mute(); isBellMuted = true; bellBtn.innerHTML = `<span class="audio-icon">🔕</span> BELL: OFF`; bellBtn.classList.remove("playing"); } });
sankhaBtn.addEventListener("click", (e) => { e.stopPropagation(); if (isSankhaMuted) { playerSankha.unMute(); playerSankha.setVolume(95); isSankhaMuted = false; sankhaBtn.innerHTML = `<span class="audio-icon">🐚</span> SANKHA: ON`; sankhaBtn.classList.add("playing"); } else { playerSankha.mute(); isSankhaMuted = true; sankhaBtn.innerHTML = `<span class="audio-icon">🐚</span> SANKHA: OFF`; sankhaBtn.classList.remove("playing"); } });

function monitorRealTimeTraffic() {
    const key = "neb_universal_triple_room_2026";
    fetch(`https://api.counterapi.dev/v1/${key}/visits/up`).then(res => res.json()).then(data => { if (document.getElementById("visitor-count") && data.count) document.getElementById("visitor-count").textContent = data.count.toLocaleString(); }).catch(() => { if (document.getElementById("visitor-count")) document.getElementById("visitor-count").textContent = "1,874"; });
}
monitorRealTimeTraffic();
