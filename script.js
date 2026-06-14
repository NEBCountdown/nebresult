/**
 * NEB SPACE-LAUNCH DATA PARAMETERS
 */
const TARGET_HORIZON = new Date("June 24, 2026 00:00:00").getTime();
const START_HORIZON  = new Date("June 14, 2026 00:00:00").getTime();
const WINDOW_DURATION = TARGET_HORIZON - START_HORIZON;

// Cached Document Tree Elements
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

/**
 * High-performance processing ticking module using requestAnimationFrame loops
 */
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

// Initialize clock cycles
setInterval(runSystemClock, 1000);
runSystemClock();
requestAnimationFrame(runQuantumCountdown);

// --- ASYNCHRONOUS YOUTUBE STREAMING AUDIO MODULE ---
let player;
let isVideoMuted = true;
const audioButton = document.getElementById("audio-toggle");

// Request streaming framework injection
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        videoId: 'TTVAyS9wOV4',
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'loop': 1,
            'playlist': 'TTVAyS9wOV4',
            'modestbranding': 1,
            'rel': 0,
            'showinfo': 0,
            'mute': 1
        },
        events: { 'onReady': onPlayerReady }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    
    // Auto-Activation: Detects user interaction anywhere to trigger play state seamlessly
    document.addEventListener("click", () => {
        if (isVideoMuted) { unmutePortalAudio(); }
    }, { once: true });
}

function unmutePortalAudio() {
    if (player && typeof player.unMute === 'function') {
        player.unMute();
        player.setVolume(35);
        isVideoMuted = false;
        audioButton.innerHTML = `<span class="audio-icon">🔊</span> MUSIC ON`;
        audioButton.classList.add("playing");
    }
}

function mutePortalAudio() {
    if (player && typeof player.mute === 'function') {
        player.mute();
        isVideoMuted = true;
        audioButton.innerHTML = `<span class="audio-icon">🔇</span> MUSIC OFF`;
        audioButton.classList.remove("playing");
    }
}

audioButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isVideoMuted) { unmutePortalAudio(); } else { mutePortalAudio(); }
});
