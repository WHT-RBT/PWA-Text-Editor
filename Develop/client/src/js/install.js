const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    // storing  deferred prompt for later use
    deferredPrompt = event;
    // make install button visible here
    butInstall.style.display = 'block';

});


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // hide install button here
    butInstall.style.display = 'none';

    // show deferred install prompt here
    if (deferredPrompt) {
        deferredPrompt.prompt();

        // wait for user response here
        const { outcome } = await deferredPrompt.userChoice;

        // can do something based on user choice (accepted/dismissed)
        if (outcome === 'accepted') {
            console.log('User accepted the installation prompt');
        } else {
            console.log('User dismissed the installation prompt');
        }
    }

});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => { 
    // console log app has been installed successfully
    console.log('App has successfully installed:', event);

});
