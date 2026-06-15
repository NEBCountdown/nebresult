/**
 * ==========================================
 * NEB SPACE-LAUNCH SYSTEM CHRONOMETER ENGINE
 * ==========================================
 */

const TARGET_HORIZON = new Date("June 24, 2026 00:00:00").getTime();
const START_HORIZON  = new Date("June 14, 2026 00:00:00").getTime();
const WINDOW_DURATION = TARGET_HORIZON - START_HORIZON;

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
    celebrationZone: document.getElementById("celebration-zone")
};

function runQuantumCountdown() {
    const timeNow = Date.now();
    const deltaRemaining = TARGET_HORIZON - timeNow;

    if (deltaRemaining <= 0) {
        executeSystemTermination();
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

    const trackingElapsed = timeNow - START_HORIZON;
    let trajectoryProgress = (trackingElapsed / WINDOW_DURATION) * 100;
    trajectoryProgress = Math.min(Math.max(trajectoryProgress, 0), 100);
    
    DOM.progressBar.style.width = `${trajectoryProgress.toFixed(4)}%`;
    DOM.progressPercent.textContent = `${trajectoryProgress.toFixed(4)}%`;

    requestAnimationFrame(runQuantumCountdown);
}

function runSystemClock() {
    const temporalInstant = new Date();
    const hours = String(temporalInstant.getHours()).padStart(2, '0');
    const minutes = String(temporalInstant.getMinutes()).padStart(2, '0');
    const seconds = String(temporalInstant.getSeconds()).padStart(2, '0');
    DOM.clock.textContent = `${hours}:${minutes}:${seconds}`;
}

function executeSystemTermination() {
    DOM.days.textContent = "00"; DOM.hours.textContent = "00"; DOM.minutes.textContent = "00"; DOM.seconds.textContent = "00"; DOM.milliseconds.textContent = "000";
    DOM.progressBar.style.width = "100%"; DOM.progressPercent.textContent = "100.0000%"; DOM.daysBadge.textContent = "LAUNCH ACTIVE";
    DOM.countdownBoard.classList.add("hidden"); DOM.celebrationZone.classList.remove("hidden");
}

setInterval(runSystemClock, 1000);
runSystemClock();
requestAnimationFrame(runQuantumCountdown);


/**
 * =============================================================
 * ANTI-AD TRINITY AUDIO CONSOLE (UNIFIED DESIGN: ON / OFF SYSTEM)
 * =============================================================
 */
let playerAarti, playerBell, playerSankha;
let isAartiMuted = true;
let isBellMuted = true;
let isSankhaMuted = true;

const audioButton = document.getElementById("audio-toggle");
const bellBtn     = document.getElementById("btn-bell");
const sankhaBtn   = document.getElementById("btn-sankha");

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    playerAarti = new YT.Player('youtube-player-aarti', {
        videoId: 'TTVAyS9wOV4',
        host: 'https://www.youtube-nocookie.com', 
        playerVars: { 'autoplay': 1, 'controls': 0, 'loop': 1, 'playlist': 'TTVAyS9wOV4', 'modestbranding': 1, 'rel': 0, 'showinfo': 0, 'mute': 1 },
        events: { 'onReady': (e) => e.target.playVideo() }
    });

    playerBell = new YT.Player('youtube-player-bell', {
        videoId: 'hw3vQ0_-Bgw',
        host: 'https://www.youtube-nocookie.com',
        playerVars: { 'autoplay': 1, 'controls': 0, 'loop': 1, 'playlist': 'hw3vQ0_-Bgw', 'modestbranding': 1, 'rel': 0, 'showinfo': 0, 'mute': 1 },
        events: { 'onReady': (e) => e.target.playVideo() }
    });

    playerSankha = new YT.Player('youtube-player-sankha', {
        videoId: 'Hc-jD3wn5o4',
        host: 'https://www.youtube-nocookie.com',
        playerVars: { 'autoplay': 1, 'controls': 0, 'loop': 1, 'playlist': 'Hc-jD3wn5o4', 'modestbranding': 1, 'rel': 0, 'showinfo': 0, 'mute': 1 },
        events: { 'onReady': (e) => e.target.playVideo() }
    });

    document.body.addEventListener("click", () => {
        if (isAartiMuted) { unmuteAartiTrack(); }
    }, { once: true });
}

function unmuteAartiTrack() {
    if (playerAarti && typeof playerAarti.unMute === 'function') {
        playerAarti.unMute(); playerAarti.setVolume(45); isAartiMuted = false;
        audioButton.innerHTML = `<span class="audio-icon">🔊</span> SARASWATI MATA: ON`;
        audioButton.classList.add("playing");
    }
}
function muteAartiTrack() {
    if (playerAarti && typeof playerAarti.mute === 'function') {
        playerAarti.mute(); isAartiMuted = true;
        audioButton.innerHTML = `<span class="audio-icon">🔇</span> SARASWATI MATA: OFF`;
        audioButton.classList.remove("playing");
    }
}

function unmuteBellTrack() {
    if (playerBell && typeof playerBell.unMute === 'function') {
        playerBell.unMute(); playerBell.setVolume(75); isBellMuted = false;
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
        playerSankha.unMute(); playerSankha.setVolume(90); isSankhaMuted = false;
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

audioButton.addEventListener("click", (e) => { e.stopPropagation(); if (isAartiMuted) { unmuteAartiTrack(); } else { muteAartiTrack(); } });
bellBtn.addEventListener("click", (e) => { e.stopPropagation(); if (isBellMuted) { unmuteBellTrack(); } else { muteBellTrack(); } });
sankhaBtn.addEventListener("click", (e) => { e.stopPropagation(); if (isSankhaMuted) { unmuteSankhaTrack(); } else { muteSankhaTrack(); } });


/**
 * =========================================================================
 * REAL TIME TELEMETRY TRAFFIC COUNTER (HYLIA HIGH-VOLUME ARCHITECTURE)
 * =========================================================================
 */
function monitorRealTimeTraffic() {
    // Unique data room parameters assigned to prevent collision logs
    const nameSpaceKey = "aavash_neb_countdown_2026_ledger";
    const hyliaEndpoint = `https://count.getloli.com/get/@${nameSpaceKey}`;

    // Read and atomically push the live hit metric onto your footer module
    fetch(hyliaEndpoint)
        .then(res => {
            if (!res.ok) throw new Error("Telemetry channel link error");
            return res.json();
        })
        .then(data => {
            const displayField = document.getElementById("visitor-count");
            if (displayField && data && typeof data.value !== "undefined") {
                // Renders the real hit record complete with commas formatting
                displayField.textContent = data.value.toLocaleString();
            }
        })
        .catch(err => {
            console.warn("Traffic telemetry error:", err);
            const displayField = document.getElementById("visitor-count");
            if (displayField) {
                displayField.textContent = "ONLINE";
                displayField.style.color = "#00f2fe"; 
            }
        });
}

// Instantiate traffic logging loop on page load
monitorRealTimeTraffic();
