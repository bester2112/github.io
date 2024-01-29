///////////////////////////////////////////////////////////
// Update year (in Footer)

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      console.log("false case");
      document.body.classList.add("sticky");
    } else {
      console.log("true case");
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Smoth Scrolling animation

const allLinks = document.querySelectorAll("a:link");
//console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener("click", function (eventEl) {
    //console.log(eventEl);
    eventEl.preventDefault();
    const href = link.getAttribute("href");
    //console.log(href);

    //Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      //console.log(href);
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
