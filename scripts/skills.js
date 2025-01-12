const projectsSection = document.querySelector('.projects-section-horizontal');
const projects = projectsSection.innerHTML; // Get the content of the section

// Clone the content to make it infinite
projectsSection.innerHTML += projects;

function animateScroll() {
  // Divide by 2 for the total scrollable width (since we're duplicating the content)
  const totalWidth = projectsSection.scrollWidth / 2;
  let currentScroll = 0;

  setInterval(() => {
    // Scroll the section
    projectsSection.scrollLeft = currentScroll;
    currentScroll++;

    // When it reaches the end, reset to start
    if (currentScroll >= totalWidth) {
      currentScroll = 0;
    }
  }, 20); // Adjust the speed by changing the interval
}

// Start the animation
animateScroll();