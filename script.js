/**
 * ==========================================
 * NEB SPACE-LAUNCH SYSTEM CHRONOMETER ENGINE
 * ==========================================
 */

// Target calibration timelines based on explicit client profiles
const TARGET_HORIZON = new Date("June 24, 2026 00:00:00").getTime();
const START_HORIZON  = new Date("June 14, 2026 00:00:00").getTime();
const WINDOW_DURATION = TARGET_HORIZON - START_HORIZON;

// Cached Document Tree Elements for high-performance UI rendering loops
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
 * High-performance counting thread driven by requestAnimationFrame.
 * This handles the 3rd-digit millisecond roll smoothly without CPU lag.
 */
function runQuantumCountdown() {
    const timeNow = Date.now();
    const deltaRemaining = TARGET_HORIZON - timeNow;

    // Trigger terminal celebration sequence if the launch timeline hits absolute zero
    if (deltaRemaining <= 0) {
        executeSystemTermination();
        return;
    }

    // Mathematical breakdown of precision time matrix units
    const totalSeconds = Math.floor(deltaRemaining / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours   = Math.floor(totalMinutes / 60);
    
    const daysVal = Math.floor(totalHours / 24);
    const hoursVal = totalHours % 24;
    const minutesVal = totalMinutes % 60;
    const secondsVal = totalSeconds % 60;
    const msVal = Math.floor(deltaRemaining % 1000);

    // Apply values instantly to the tracking board cards
    DOM.days.textContent    = String(daysVal).padStart(2, '0');
    DOM.hours.textContent   = String(hoursVal).padStart(2, '0');
    DOM.minutes.textContent = String(minutesVal).padStart(2, '0');
    DOM.seconds.textContent = String(secondsVal).padStart(2, '0');
    DOM.milliseconds.textContent = String(msVal).padStart(3, '0');

    // Update the live header coordinates box
    DOM.daysBadge.textContent = `${daysVal + 1} DAYS AWAY`;

    // Dynamic linear progress calculation across the 10-day window
    const trackingElapsed = timeNow - START_HORIZON;
    let trajectoryProgress = (trackingElapsed / WINDOW_DURATION) * 100;
    trajectoryProgress = Math.min(Math.max(trajectoryProgress, 0), 100);
    
    DOM.progressBar.style.width = `${trajectoryProgress.toFixed(4)}%`;
    DOM.progressPercent.textContent = `${trajectoryProgress.toFixed(4)}%`;

    // Continuous recall thread
    requestAnimationFrame(runQuantumCountdown);
}

/**
 * Standard 24-hour live telemetry hardware clock
 */
function runSystemClock() {
    const temporalInstant = new Date();
    const hours = String(temporalInstant.getHours()).padStart(2, '0');
    const minutes = String(temporalInstant.getMinutes()).padStart(2, '0');
    const seconds = String(temporalInstant.getSeconds()).padStart(2, '0');
    DOM.clock.textContent = `${hours}:${minutes}:${seconds}`;
}

/**
 * Changes states and throws celebration frames when zero is breached
 */
function executeSystemTermination() {
    DOM.days.textContent = "00"; 
    DOM.hours.textContent = "00"; 
    DOM.minutes.textContent = "00"; 
    DOM.seconds.textContent = "00"; 
    DOM.milliseconds.textContent = "000";
    
    DOM.progressBar.style.width = "100%"; 
    DOM.progressPercent.textContent = "100.0000%"; 
    DOM.daysBadge.textContent = "LAUNCH ACTIVE";
    
    DOM.countdownBoard.classList.add("hidden"); 
    DOM.celebrationZone.classList.remove("hidden");
}

// Instantiate internal clocks
setInterval(runSystemClock, 1000);
runSystemClock();
requestAnimationFrame(runQuantumCountdown);


/**
 * ========================================================
 * AUTOMATIC YOUTUBE AUDIO BACKGROUND ENGINE (BYPASS TRACK)
 * ========================================================
 */
let player;
let isVideoMuted = true;
const audioButton = document.getElementById("audio-toggle");

// Inject YouTube Asynchronous API Core Scripts
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/**
 * Runs automatically the second the YouTube client network handshake establishes
 */
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        videoId: 'TTVAyS9wOV4', // Target Aarti Link Signature
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'loop': 1,
            'playlist': 'TTVAyS9wOV4', // Infinite loop initialization parameter
            'modestbranding': 1,
            'rel': 0,
            'showinfo': 0,
            'mute': 1 // Forces initialization to happen muted to satisfy device rules
        },
        events: { 'onReady': onPlayerReady }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    
    // --- SMART AUTOMATIC PLAYBACK ENGINE ---
    // Instead of forcing users to look for the music button, the sound turns ON 
    // automatically on their absolute first natural click or phone tap anywhere on the app frame!
    document.body.addEventListener("click", () => {
        if (isVideoMuted) { 
            unmutePortalAudio(); 
        }
    }, { once: true }); // Destroys itself immediately after executing once
}

function unmutePortalAudio() {
    if (player && typeof player.unMute === 'function') {
        player.unMute();
        player.setVolume(45); // Comfortable, non-clashing spatial sound amplitude
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

// Manual overlay action fallback handle
audioButton.addEventListener("click", (e) => {
    e.stopPropagation(); // Shield logic pipeline from breaking body listener properties
    if (isVideoMuted) { unmutePortalAudio(); } else { mutePortalAudio(); }
});
