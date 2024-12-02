// Example template data
const templates = [
    { name: "Business Template", img: "assets/images/business.jpg" },
    { name: "Social Media Template", img: "assets/images/social.jpg" },
    { name: "Personal Template", img: "assets/images/personal.jpg" }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
  
    // Populate the carousel
    templates.forEach(template => {
      const img = document.createElement("img");
      img.src = template.img;
      img.alt = template.name;
      carousel.appendChild(img);
    });
  
    // Auto-scroll logic
    setInterval(() => {
      carousel.scrollBy({
        left: 220, // Scroll the width of one image + gap
        behavior: "smooth"
      });
  
      // Reset scroll position to the beginning (infinite loop effect)
      if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3000); // Scroll every 3 seconds
  });
  
  // Smooth scroll to the next section
    document.getElementById("scroll-to-next").addEventListener("click", function() {
        document.getElementById("next-section").scrollIntoView({
        behavior: "smooth",
        block: "start"
        });
    });
  