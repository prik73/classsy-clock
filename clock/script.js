let clock = document.getElementById('clock');

setInterval(() => {
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let ampm = hrs >= 12 ? 'PM' : 'AM';

    hrs = hrs % 12;
    hrs = hrs ? hrs : 12; // Handle midnight (0 hours)

    secs = (secs < 10) ? '0' + secs : secs;
    mins = (mins < 10) ? '0' + mins : mins;
    hrs = (hrs < 10) ? '0' + hrs : hrs;

    clock.innerHTML = `${hrs}:${mins}:${secs} ${ampm}`;
}, 1000);



toggleButton.addEventListener('click', () => {
    toggleColors();
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'x') {
        // Toggle colors
        document.body.classList.toggle('invert-colors-x');
        clock.classList.toggle('invert-colors-x');
    }
});