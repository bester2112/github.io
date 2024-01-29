///////////////////////////////////////////////////////////
// Sticky navigation

//console.log("1");
const sectionHeroEl = document.querySelector(".backgroundImage-CSS");
const sectionNavBar = document.querySelector(".header-giphy");
//console.log("2");
const observer = new IntersectionObserver(
  function (entries) {
    //console.log("3");
    const ent = entries[0];
    //console.log(ent);

    if (ent.isIntersecting === false) {
      //console.log("4");
      //console.log("false case");

      document.body.classList.add("sticky");
      //sectionNavBar.className = "header-giphy";
      console.log("added hidden from NavBar");
    } else {
      //console.log("5");
      //console.log("true case");

      document.body.classList.remove("sticky");
      //sectionNavBar.className += " hidden";
      console.log("removed hidden to Navbar");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-96px",
  }
);
//console.log("6");
observer.observe(sectionHeroEl);
//console.log("7");

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
