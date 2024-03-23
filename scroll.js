function scrollDown() {
    // Adjust the value (in pixels) based on how much you want to scroll down
    const scrollAmount = 300;
    
    // Smooth scroll animation
    window.scrollBy({
        top: 1000,
        left: 0,
        behavior: 'smooth'
    });
}
