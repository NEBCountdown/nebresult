/**
 * NEB LAUNCH CALIBRATION TERMINAL
 * Clean, modular variables based on explicit client targets.
 */
const TARGET_HORIZON = new Date("June 24, 2026 00:00:00").getTime();
const START_HORIZON  = new Date("June 14, 2026 00:00:00").getTime();
const WINDOW_DURATION = TARGET_HORIZON - START_HORIZON;

// Cached Document Element Object Tree for optimal rendering loops
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
 * High frequency evaluation loop running on requestAnimationFrame.
 * Eliminates processing bottlenecks and handles smooth millisecond steps.
 */
function runQuantumCountdown() {
    const timeNow = Date.now();
    const deltaRemaining = TARGET_HORIZON - timeNow;

    // Check if the launch window has reached expiration parameters
    if (deltaRemaining <= 0) {
        executeSystemTermination();
        return;
    }

    // Mathematical translation of remaining time matrices
    const totalSeconds = Math.floor(deltaRemaining / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours   = Math.floor(totalMinutes / 60);
    
    const daysVal = Math.floor(totalHours / 24);
    const hoursVal = totalHours % 24;
    const minutesVal = totalMinutes % 60;
    const secondsVal = totalSeconds % 60;
    const msVal = Math.floor(deltaRemaining % 1000);

    // Apply exact visual updates to target structural slots
    DOM.days.textContent    = String(daysVal).padStart(2, '0');
    DOM.hours.textContent   = String(hoursVal).padStart(2, '0');
    DOM.minutes.textContent = String(minutesVal).padStart(2, '0');
    DOM.seconds.textContent = String(secondsVal).padStart(2, '0');
    DOM.milliseconds.textContent = String(msVal).padStart(3, '0');

    // Update conditional header badge with natural whole counting unit
    DOM.daysBadge.textContent = `${daysVal + 1} DAYS AWAY`;

    // Dynamic Trajectory Tracking Progress calculation
    const trackingElapsed = timeNow - START_HORIZON;
    let trajectoryProgress = (trackingElapsed / WINDOW_DURATION) * 100;
    
    // Safety boundaries clamping
    trajectoryProgress = Math.min(Math.max(trajectoryProgress, 0), 100);
    
    DOM.progressBar.style.width = `${trajectoryProgress.toFixed(4)}%`;
    DOM.progressPercent.textContent = `${trajectoryProgress.toFixed(4)}%`;

    // Re-queue frame render step immediately for lag-free performance
    requestAnimationFrame(runQuantumCountdown);
}

/**
 * Standard System clock runtime terminal tick. Updates once per second.
 * Hardcoded to replicate static contextual date constraints from the environment.
 */
function runSystemClock() {
    const temporalInstant = new Date();
    
    // Digital Time Execution (HH:MM:SS format using 24 hour telemetry display)
    const hours = String(temporalInstant.getHours()).padStart(2, '0');
    const minutes = String(temporalInstant.getMinutes()).padStart(2, '0');
    const seconds = String(temporalInstant.getSeconds()).padStart(2, '0');
    
    DOM.clock.textContent = `${hours}:${minutes}:${seconds}`;
}

/**
 * Triggers state-change visual frames when countdown calculation breaches absolute zero threshold.
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

// Instantiate core telemetry execution modules
setInterval(runSystemClock, 1000);
runSystemClock(); // Direct instant validation pass

// Initialize high fidelity rendering sequence
requestAnimationFrame(runQuantumCountdown);
