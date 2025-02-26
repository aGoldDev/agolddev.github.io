


document.addEventListener("DOMContentLoaded", function () {

    // CUSTOM CURSOR

    const cursor = document.querySelector('.cursor-gradient');

    // Store previous mouse position
    let lastX = 0;
    let lastY = 0;

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Update the cursor position
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;

        // Create a new trail dot
        const trail = document.createElement('div');
        trail.classList.add('trail');
        trail.style.left = `${mouseX}px`;
        trail.style.top = `${mouseY}px`;

        // Add the trail dot to the body
        document.body.appendChild(trail);

        // Remove trail dot after animation ends
        setTimeout(() => {
            trail.remove();
        }, 1000); // Duration of the animation (matches keyframe duration)
    });


    // Sidebar functions inside window for global access
    window.showSidebar = function () {
        const sidebar = document.querySelector('.sidebar');
        const mb = document.querySelector('.menu-button');
        sidebar.classList.add('show');
        mb.style.display = 'none';
    };

    window.hideSidebar = function () {
        const sidebar = document.querySelector('.sidebar');
        const mb = document.querySelector('.menu-button');
        sidebar.classList.remove('show');
        mb.style.display = 'block';
    };

    // DARK MODE
    const toggleButton = document.getElementById("theme-toggle");
    const sun = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path></svg>`;
    const moon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>`;


    // Check localStorage for user's last theme preference
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        toggleButton.innerHTML = sun; // Switch to dark mode icon
    } else {
        toggleButton.innerHTML = moon; // Default dark mode icon
    }

    // Toggle theme when button is clicked
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        // Save user preference
        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            toggleButton.innerHTML = sun; // Switch to dark mode
        } else {
            localStorage.setItem("theme", "dark");
            toggleButton.innerHTML = moon; // Switch to light mode
        }
    });
});
