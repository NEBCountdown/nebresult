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
 * TRIPLE-STREAM TRINITY AUDIO CONSOLE (TRIPLE YOUTUBE HANDLER)
 * =============================================================
 */
let playerAarti, playerBell, playerSankha;
let isAartiMuted = true;

const audioButton = document.getElementById("audio-toggle");
const bellBtn     = document.getElementById("btn-bell");
const sankhaBtn   = document.getElementById("btn-sankha");

// Mount the YouTube API Framework Asynchronously 
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/**
 * Orchestrate the configuration nodes for all three YouTube media timelines
 */
function onYouTubeIframeAPIReady() {
    // 1. Core Background Aarti Stream (Jai Saraswati Mata)
    playerAarti = new YT.Player('youtube-player-aarti', {
        videoId: 'TTVAyS9wOV4',
        playerVars: { 'autoplay': 1, 'controls': 0, 'loop': 1, 'playlist': 'TTVAyS9wOV4', 'modestbranding': 1, 'rel': 0, 'showinfo': 0, 'mute': 1 },
        events: { 'onReady': (e) => e.target.playVideo() }
    });

    // 2. Interactive Temple Bell Sound FX Stream
    playerBell = new YT.Player('youtube-player-bell', {
        videoId: 'hw3vQ0_-Bgw',
        playerVars: { 'autoplay': 0, 'controls': 0, 'modestbranding': 1, 'rel': 0, 'showinfo': 0, 'mute': 0 },
        events: { 'onReady': (e) => e.target.setVolume(90) }
    });

    // 3. Interactive Divine Sankha Sound FX Stream
    playerSankha = new YT.Player('youtube-player-sankha', {
        videoId: 'Hc-jD3wn5o4',
        playerVars: { 'autoplay': 0, 'controls': 0, 'modestbranding': 1, 'rel': 0, 'showinfo': 0, 'mute': 0 },
        events: { 'onReady': (e) => e.target.setVolume(100) }
    });

    // Smart Setup Engine: Unmutes background song automatically on the user's first natural screen interaction click
    document.body.addEventListener("click", () => {
        if (isAartiMuted) { 
            unmuteAartiTrack(); 
        }
    }, { once: true });
}

function unmuteAartiTrack() {
    if (playerAarti && typeof playerAarti.unMute === 'function') {
        playerAarti.unMute();
        playerAarti.setVolume(40); // Comfortable mix layout volume balance
        isAartiMuted = false;
        audioButton.innerHTML = `<span class="audio-icon">🔊</span> SARASWATI MATA: ON`;
        audioButton.classList.add("playing");
    }
}

function muteAartiTrack() {
    if (playerAarti && typeof playerAarti.mute === 'function') {
        playerAarti.mute();
        isAartiMuted = true;
        audioButton.innerHTML = `<span class="audio-icon">🔇</span> SARASWATI MATA: OFF`;
        audioButton.classList.remove("playing");
    }
}

// 1. Main Background Aarti Channel Trigger
audioButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isAartiMuted) { unmuteAartiTrack(); } else { muteAartiTrack(); }
});

// 2. Overlapping Bell FX Trigger Handler
bellBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (playerBell && typeof playerBell.seekTo === 'function') {
        playerBell.seekTo(0); // Rewinds video back to the absolute beginning instantly
        playerBell.playVideo();
    }
});

// 3. Overlapping Sankha FX Trigger Handler
sankhaBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (playerSankha && typeof playerSankha.seekTo === 'function') {
        playerSankha.seekTo(0); // Forces playback to loop back to zero instantly
        playerSankha.playVideo();
    }
});
