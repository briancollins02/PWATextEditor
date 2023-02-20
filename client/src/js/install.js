const butInstall = document.getElementById('buttonInstall');
let promptEvent = null;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    promptEvent = event;
    butInstall.classList.toggle('hidden');
    console.log(promptEvent);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (promptEvent) {
        promptEvent.prompt()
        butInstall.classList.add('hidden');
        promptEvent = null;
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    promptEvent = null;
    console.log('insall!');
});
