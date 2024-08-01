const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let defferedPrompt;
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    defferedPrompt = event;
    butInstall.style.display = 'block';
    console.log('beforeinstallprompt event fired');
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (defferedPrompt) {
        defferedPrompt.prompt();
        const { outcome } = await defferedPrompt.userchoice;
        console.log('User response to the install prompt: ${outcome');
        defferedPrompt = null;
        butInstall.style.display = 'none';
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA was installed', event);
    butInstall.style.display = 'none';
});
