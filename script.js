document.addEventListener('DOMContentLoaded', () => {
    // Interactivity Target Selection Handles
    const heroPortalTrigger = document.getElementById('hero-portal-trigger');
    const navPortalTrigger = document.getElementById('nav-portal-trigger');
    const portalCloseBtn = document.getElementById('portal-close-btn');
    const portalSection = document.getElementById('portal-section');
    
    // Auth View Switching Matrix Handles
    const viewLogin = document.getElementById('view-login');
    const viewSignup = document.getElementById('view-signup');
    const linkToSignup = document.getElementById('link-to-signup');
    const linkToLogin = document.getElementById('link-to-login');

    /**
     * Logic Core: Opens portal, resets views automatically
     */
    const activateIdentityPortal = () => {
        // Expose portal element container
        portalSection.classList.remove('hidden');
        
        // Always force primary Login view state first
        viewLogin.classList.remove('hidden');
        viewSignup.classList.add('hidden');
        
        // Fluid window alignment focusing user smoothly on any platform device
        portalSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    /**
     * Logic Core: Closes portal element container
     */
    const collapseIdentityPortal = () => {
        portalSection.classList.add('hidden');
    };

    // Global Event Binding Configurations
    if (heroPortalTrigger) heroPortalTrigger.addEventListener('click', activateIdentityPortal);
    if (navPortalTrigger) navPortalTrigger.addEventListener('click', activateIdentityPortal);
    if (portalCloseBtn) portalCloseBtn.addEventListener('click', collapseIdentityPortal);

    /**
     * Screen State Modifiers: Shift to Sign Up Space
     */
    if (linkToSignup) {
        linkToSignup.addEventListener('click', (event) => {
            event.preventDefault();
            viewLogin.classList.add('hidden');
            viewSignup.classList.remove('hidden');
        });
    }

    /**
     * Screen State Modifiers: Shift to Login Space
     */
    if (linkToLogin) {
        linkToLogin.addEventListener('click', (event) => {
            event.preventDefault();
            viewSignup.classList.add('hidden');
            viewLogin.classList.remove('hidden');
        });
    }
});
