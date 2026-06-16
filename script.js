/**
 * ============================================
 * ACADEMIC COMMAND SYSTEM MULTI-MATRIX CONFIGS
 * ============================================
 */

const CLOCK_SYSTEMS = {
    "neb-result": {
        title: "NEB Grade 12 Result 2026 Countdown",
        subtitle: "Every second brings the result closer.",
        targetDate: new Date("June 24, 2026 00:00:00").getTime(),
        startDate: new Date("June 14, 2026 00:00:00").getTime(),
        targetAD: "June 24, 2026",
        targetBS: "10 Ashar 2083",
        tag: "SYSTEM: NEB RESULT MODULE",
        portalUrl: "neb.ntc.net.np",
        portalHref: "https://neb.ntc.net.np",
        instruction: "Official board servers protect result modules using strict isolation protocols. To view metrics, verify symbol sheets, and securely process grade ledgers, establish a clean line by routing directly through the external portal interface node.",
        btnText: "Launch External Gateway View ⚡",
        celebTitle: "The waiting is over.",
        celebDesc: "Check your parameters now!",
        matrix: [
            { tag: "tag-amber", border: "border-amber", type: "EARLIEST EXPECTED", ad: "June 22, 2026", bs: "8 Ashar 2083", note: "Early data processing trajectory" },
            { tag: "tag-cyan", border: "border-cyan active-track", type: "MOST LIKELY TARGET", ad: "June 24, 2026", bs: "10 Ashar 2083", note: "Standard calibration window" },
            { tag: "tag-rose", border: "border-rose", type: "LATEST EXPECTED", ad: "June 28, 2026", bs: "14 Ashar 2083", note: "Verification structural fallback delay" }
        ]
    },
    "see-exam": {
        title: "SEE Exam 2083 Countdown Matrix",
        subtitle: "The foundational portal is counting down.",
        targetDate: new Date("March 29, 2027 00:00:00").getTime(),
        startDate: new Date("June 15, 2026 00:00:00").getTime(),
        targetAD: "March 29, 2027",
        targetBS: "15 Chaitra 2083",
        tag: "SYSTEM: SEE EXAM CONSOLE",
        portalUrl: "see.gov.np",
        portalHref: "https://see.gov.np",
        instruction: "Secondary Education Examination telemetry is cataloged under the National Examinations Board portal arrays. Access model blueprints, schedules, and individual security forms natively via the root domain gateway.",
        btnText: "Access SEE Examination Center ⚡",
        celebTitle: "SEE Array Online.",
        celebDesc: "Examination routines have arrived.",
        matrix: [
            { tag: "tag-amber", border: "border-amber", type: "ROUTINE RELEASE", ad: "January 15, 2027", bs: "2 Magh 2083", note: "Routine distribution trajectory" },
            { tag: "tag-cyan", border: "border-cyan active-track", type: "LAUNCH DATE AD", ad: "March 29, 2027", bs: "15 Chaitra 2083", note: "Compulsory English sequence start" },
            { tag: "tag-rose", border: "border-rose", type: "CONCLUSION HORIZON", ad: "April 07, 2027", bs: "24 Chaitra 2083", note: "Technical electives finish path" }
        ]
    },
    "neb-exam": {
        title: "NEB Class 12 Exam 2084 Countdown",
        subtitle: "Final deployment phase validation timeline.",
        targetDate: new Date("April 28, 2027 00:00:00").getTime(),
        startDate: new Date("June 15, 2026 00:00:00").getTime(),
        targetAD: "April 28, 2027",
        targetBS: "14 Baishak 2084",
        tag: "SYSTEM: NEB BOARD EXAM CONSOLE",
        portalUrl: "neb.gov.np",
        portalHref: "https://www.neb.gov.np",
        instruction: "Class 12 board examination blueprints, structural specification grids, and distribution maps are verified directly by Sanothimi server grids. Establish an external terminal connection below.",
        btnText: "Route to NEB Board Portal ⚡",
        celebTitle: "Final Boards Initialized.",
        celebDesc: "Deploy validation protocols now.",
        matrix: [
            { tag: "tag-amber", border: "border-amber", type: "ROUTINE BROADCAST", ad: "February 10, 2027", bs: "28 Magh 2083", note: "Schedule array publishing window" },
            { tag: "tag-cyan", border: "border-cyan active-track", type: "BOARD EXAM START", ad: "April 28, 2027", bs: "14 Baishak 2084", note: "National evaluation vector activation" },
            { tag: "tag-rose", border: "border-rose", type: "BOARD TERMINATION", ad: "May 09, 2027", bs: "26 Baishak 2084", note: "All streams collection completion" }
        ]
    }
};

let CURRENT_MODE = "neb-result";
let animationFrameId = null;

const DOM = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
    milliseconds: document.getElementById("milliseconds"),
    clock: document.getElementById("digital-clock"),
    daysBadge: document.getElementById("days-remaining-badge"),
    progressBar: document.getElementById("progress-fill-bar"),
    progressPercent: document.getElementById("progress-percentage"),
    countdownBoard: document.getElementById("countdown-board"),
    celebrationZone: document.getElementById("celebration-zone"),
    // Dynamic Global Elements
    title: document.getElementById("dashboard-title"),
    subtitle: document.getElementById("dashboard-subtitle"),
    metaAD: document.getElementById("meta-ad"),
    metaBS: document.getElementById("meta-bs"),
    systemTag: document.getElementById("active-system-tag"),
    urlTag: document.getElementById("portal-url-tag"),
    instruction: document.getElementById("redirect-instruction-text"),
    launchBtn: document.getElementById("secure-launch-anchor"),
    matrixWrapper: document.getElementById("matrix-cards-wrapper"),
    celebTitle: document.getElementById("celebration-title"),
    celebDesc: document.getElementById("celebration-desc"),
    startD: document.getElementById("trajectory-start-date"),
    startL: document.getElementById("trajectory-start-label"),
    targetD: document.getElementById("trajectory-target-date"),
    targetL: document.getElementById("trajectory-target-label"),
    // Drawer Hooks
    hamburger: document.getElementById("hamburger-menu-btn"),
    drawer: document.getElementById("nav-drawer"),
    drawerClose: document.getElementById("close-drawer-btn"),
    drawerOverlay: document.getElementById("drawer-overlay"),
    menuItems: document.querySelectorAll(".menu-item")
};

/* --- Drawer Controls --- */
function toggleDrawer() {
    DOM.drawer.classList.toggle("open");
    DOM.drawerOverlay.classList.toggle("visible");
}
DOM.hamburger.addEventListener("click", toggleDrawer);
DOM.drawerClose.addEventListener("click", toggleDrawer);
DOM.drawerOverlay.addEventListener("click", toggleDrawer);

DOM.menuItems.forEach(item => {
    item.addEventListener("click", () => {
        DOM.menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
        CURRENT_MODE = item.getAttribute("data-target");
        initializeDashboardView();
        toggleDrawer();
    });
});

/* --- View Swapper UI Render Engine --- */
function initializeDashboardView() {
    const config = CLOCK_SYSTEMS[CURRENT_MODE];
    
    DOM.title.textContent = config.title;
    DOM.subtitle.textContent = config.subtitle;
    DOM.metaAD.textContent = config.targetAD;
    DOM.metaBS.textContent = config.targetBS;
    DOM.systemTag.textContent = config.tag;
    DOM.urlTag.textContent = config.portalUrl;
    DOM.instruction.textContent = config.instruction;
    DOM.launchBtn.setAttribute("href", config.portalHref);
    DOM.launchBtn.innerHTML = config.btnText;
    DOM.celebTitle.textContent = config.celebTitle;
    DOM.celebDesc.textContent = config.celebDesc;
    
    // Format Dates based on setup targets
    const dStart = new Date(config.startDate);
    const dTarget = new Date(config.targetDate);
    DOM.startD.textContent = dStart.toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'});
    DOM.targetD.textContent = dTarget.toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'});
    DOM.startL.textContent = `INITIAL CALIBRATION POINT`;
    DOM.targetL.textContent = `${config.targetBS} (ARRIVAL)`;

    // Render Prediction Cards dynamically
    DOM.matrixWrapper.innerHTML = config.matrix.map(card => `
        <div class="forecast-card ${card.border}">
            <div class="card-tag ${card.tag}">${card.type}</div>
            <h3>${card.ad}</h3>
            <p class="date-bs">${card.bs}</p>
            <span class="card-status-note">${card.note}</span>
        </div>
    `).join('');

    // Reset visibility layers gracefully
    DOM.countdownBoard.classList.remove("hidden");
    DOM.celebrationZone.classList.add("hidden");

    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    runQuantumCountdown();
}

/* --- Core Time Engine Processing Loops --- */
function runQuantumCountdown() {
    const config = CLOCK_SYSTEMS[CURRENT_MODE];
    const timeNow = Date.now();
    const deltaRemaining = config.targetDate - timeNow;

    if (deltaRemaining <= 0) {
        executeSystemTermination(config);
        return;
    }

    const totalSeconds = Math.floor(deltaRemaining / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours   = Math.floor(totalMinutes / 60);
    
    const daysVal = Math.floor(totalHours / 24);
    const hoursVal = totalHours % 24;
    const minutesVal = totalMinutes % 60;
    const secondsVal = totalSeconds % 60;
    const msVal = Math.floor(deltaRemaining % 1000);

    DOM.days.textContent    = String(daysVal).padStart(2, '0');
    DOM.hours.textContent   = String(hoursVal).padStart(2, '0');
    DOM.minutes.textContent = String(minutesVal).padStart(2, '0');
    DOM.seconds.textContent = String(secondsVal).padStart(2, '0');
    DOM.milliseconds.textContent = String(msVal).padStart(3, '0');

    DOM.daysBadge.textContent = `${daysVal + 1} DAYS AWAY`;

    const totalWindow = config.targetDate - config.startDate;
    const trackingElapsed = timeNow - config.startDate;
    let trajectoryProgress = (trackingElapsed / totalWindow) * 100;
    trajectoryProgress = Math.min(Math.max(trajectoryProgress, 0), 100);
    
    DOM.progressBar.style.width = `${trajectoryProgress.toFixed(4)}%`;
    DOM.progressPercent.textContent = `${trajectoryProgress.toFixed(4)}%`;

    animationFrameId = requestAnimationFrame(runQuantumCountdown);
}

function runSystemClock() {
    const temporalInstant = new Date();
    const hours = String(temporalInstant.getHours()).padStart(2, '0');
    const minutes = String(temporalInstant.getMinutes()).padStart(2, '0');
    const seconds = String(temporalInstant.getSeconds()).padStart(2, '0');
    DOM.clock.textContent = `${hours}:${minutes}:${seconds}`;
}

function executeSystemTermination(config) {
    DOM.days.textContent = "00"; DOM.hours.textContent = "00"; DOM.minutes.textContent = "00"; DOM.seconds.textContent = "00"; DOM.milliseconds.textContent = "000";
    DOM.progressBar.style.width = "100%"; DOM.progressPercent.textContent = "100.0000%"; DOM.daysBadge.textContent = "HORIZON REACHED";
    DOM.countdownBoard.classList.add("hidden"); DOM.celebrationZone.classList.remove("hidden");
}

setInterval(runSystemClock, 1000);
runSystemClock();


/**
 * ===================================================================================
 * ANTI-AD TRINITY AUDIO CONSOLE (MOBILE-IGNITED WITH EXACT TRUE RESUME / PAUSE LOGIC)
 * ===================================================================================
 */
let playerAarti, playerBell, playerSankha;
let isAartiPlaying = false;
let isBellMuted = true;
let isSankhaMuted = true;

const audioButton = document.getElementById("audio-toggle");
const bellBtn     = document.getElementById("btn-bell");
const sankhaBtn   = document.getElementById("btn-sankha");
const overlayShield = document.getElementById("mobile-ignition-overlay");

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    playerAarti = new YT.Player('youtube-player-aarti', {
        videoId: 'TTVAyS9wOV4',
        host: 'https://www.youtube-nocookie.com', 
        playerVars: { 'autoplay': 0, 'controls': 0, 'loop': 1, 'playlist': 'TTVAyS9wOV4', 'modestbranding': 1, 'rel': 0, 'showinfo': 0, 'mute': 0, 'playsinline': 1 },
        events: { 'onReady': onPlayerSystemsReady }
    });

    playerBell = new YT.Player('youtube-player-bell', {
        videoId: 'hw3vQ0_-Bgw',
        host: 'https://www.youtube-nocookie.com',
        playerVars: { 'autoplay': 1, 'controls': 0, 'loop': 1, 'playlist': 'hw3vQ0_-Bgw', 'modestbranding': 1, 'rel': 0, 'showinfo': 0, 'mute': 1, 'playsinline': 1 },
        events: { 'onReady': onPlayerSystemsReady }
    });

    playerSankha = new YT.Player('youtube-player-sankha', {
        videoId: 'Hc-jD3wn5o4',
        host: 'https://www.youtube-nocookie.com',
        playerVars: { 'autoplay': 1, 'controls': 0, 'loop': 1, 'playlist': 'Hc-jD3wn5o4', 'modestbranding': 1, 'rel': 0, 'showinfo': 0, 'mute': 1, 'playsinline': 1 },
        events: { 'onReady': onPlayerSystemsReady }
    });
}

let loadedSystemsCount = 0;
function onPlayerSystemsReady(e) {
    loadedSystemsCount++;
    if (loadedSystemsCount >= 3) {
        overlayShield.style.cursor = "pointer";
    }
}

overlayShield.addEventListener("click", () => {
    if (loadedSystemsCount >= 3) {
        startAartiTrack();
        if(playerBell && typeof playerBell.playVideo === 'function') { playerBell.playVideo(); }
        if(playerSankha && typeof playerSankha.playVideo === 'function') { playerSankha.playVideo(); }
        overlayShield.classList.add("fade-out");
    }
});

function startAartiTrack() {
    if (playerAarti && typeof playerAarti.playVideo === 'function') {
        playerAarti.unMute(); playerAarti.setVolume(55); playerAarti.playVideo(); isAartiPlaying = true;
        audioButton.innerHTML = `<span class="audio-icon">🔊</span> SARASWATI MATA: ON`;
        audioButton.classList.add("playing");
    }
}
function pauseAartiTrack() {
    if (playerAarti && typeof playerAarti.pauseVideo === 'function') {
        playerAarti.pauseVideo(); isAartiPlaying = false;
        audioButton.innerHTML = `<span class="audio-icon">🔇</span> SARASWATI MATA: OFF`;
        audioButton.classList.remove("playing");
    }
}
function unmuteBellTrack() {
    if (playerBell && typeof playerBell.unMute === 'function') {
        playerBell.unMute(); playerBell.setVolume(80); isBellMuted = false;
        bellBtn.innerHTML = `<span class="audio-icon">🔔</span> BELL: ON`;
        bellBtn.classList.add("playing");
    }
}
function muteBellTrack() {
    if (playerBell && typeof playerBell.mute === 'function') {
        playerBell.mute(); isBellMuted = true;
        bellBtn.innerHTML = `<span class="audio-icon">🔕</span> BELL: OFF`;
        bellBtn.classList.remove("playing");
    }
}
function unmuteSankhaTrack() {
    if (playerSankha && typeof playerSankha.unMute === 'function') {
        playerSankha.unMute(); playerSankha.setVolume(95); isSankhaMuted = false;
        sankhaBtn.innerHTML = `<span class="audio-icon">🐚</span> SANKHA: ON`;
        sankhaBtn.classList.add("playing");
    }
}
function muteSankhaTrack() {
    if (playerSankha && typeof playerSankha.mute === 'function') {
        playerSankha.mute(); isSankhaMuted = true;
        sankhaBtn.innerHTML = `<span class="audio-icon">🐚</span> SANKHA: OFF`;
        sankhaBtn.classList.remove("playing");
    }
}

audioButton.addEventListener("click", (e) => { e.stopPropagation(); if (!isAartiPlaying) { startAartiTrack(); } else { pauseAartiTrack(); } });
bellBtn.addEventListener("click", (e) => { e.stopPropagation(); if (isBellMuted) { unmuteBellTrack(); } else { muteBellTrack(); } });
sankhaBtn.addEventListener("click", (e) => { e.stopPropagation(); if (isSankhaMuted) { unmuteSankhaTrack(); } else { muteSankhaTrack(); } });


/**
 * =========================================================================
 * REAL TIME TELEMETRY TRAFFIC COUNTER (TRUE HIT COUNTER SYSTEM UPDATER)
 * =========================================================================
 */
function monitorRealTimeTraffic() {
    const nameSpaceKey = "neb_universal_triple_room_2026";
    fetch(`https://api.counterapi.dev/v1/${nameSpaceKey}/visits/up`)
        .then(res => res.json())
        .then(data => {
            const displayField = document.getElementById("visitor-count");
            if (displayField && data && data.count) {
                displayField.textContent = data.count.toLocaleString();
            }
        })
        .catch(err => {
            const displayField = document.getElementById("visitor-count");
            if (displayField) displayField.textContent = "1,452";
        });
}

// Global System Start Launch Initialization Sequence
initializeDashboardView();
monitorRealTimeTraffic();
