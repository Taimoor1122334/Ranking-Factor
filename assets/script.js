
 
 document.addEventListener("DOMContentLoaded", (event) => {

const tl = gsap.timeline({
  paused: true
});
let path = document.querySelector("path");
gsap.set(".menu", { visibility: "hidden" });

  function revealMenu() {
    revealMenuItems();

    const toggleBtn = document.getElementById("toggle-btn");
    const overlay = document.querySelector(".overlay");
    const menu = document.querySelector(".menu");

    toggleBtn.onclick = (e) => {
      if (toggleBtn.classList.contains("active")) {
        toggleBtn.classList.remove("active");
        menu.classList.remove("active");
        tl.reverse();
        setTimeout(() => {
          overlay.classList.remove("active");
        }, 1000);
      } else {
        toggleBtn.classList.add("active");
        menu.classList.add("active");
        overlay.classList.add("active");
        tl.reversed(!tl.reversed());
      }
    };
  }
  revealMenu();

function revealMenuItems() {
  const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const end = "M0, 1005S175, 995, 500, 995s500, 5, 500, 5V0H0Z";

  const power2 = "power2.inout";

  tl.to("#toggle-btn", 1.25, {
    marginTop: "-5px",
    x: -40,
    y: 40,
    ease: power2
  });
  tl.to(
    "#nav-image",
    1,
    {
     
      ease: power2
    },
    "<"
  );


  tl.to(
    path,
    0.8,
    {
      attr: {
        d: start
      },
      ease: power2
    },
    "<"
  ).to(
    path,
    0.8,
    {
      attr: { d: end },
      ease: power2
    },
    "-=0.5"
  );

  tl.to(
    ".menu",
    0.5,
    {
      visibility: "visible"
    },
    "-=0.5"
  );

  tl.to(
    ".menu-item>a",
    0.5,
    {
      top: 0,
      ease: "power3.in",
      stagger: {
        amount: 0.5
      }
    },
    "-=1"
  ).reverse();
}


  gsap.to(".upper-text h3", {
    x: 0,
    opacity: 1,
    duration: 4, 
    ease: "power3.out"
  });
  gsap.to(".lower-text h3", {
    x: 0,
    opacity: 1,
    duration: 4,
    ease: "power3.out",
    
  });

  gsap.to(".loader", {
  opacity: 0,
  pointerEvents: "none",
  duration: 1,
  delay: 3.5,
  onComplete: () => {
    document.querySelector(".loader").style.display = "none";
    // Animate hero section
    gsap.to(".hero", {
      scale: 1,
      opacity: 1,
      gap: 20, 
      duration: 1.2,
      ease: "power3.out"
    });
  }
});



 });

//Local Seo Service--
  const imagePanels = document.querySelectorAll('.image-panel');
  const textContents = document.querySelectorAll('.text-content');
  let currentPanel = 1;

  // Show initial content
  showTextContent(1);

  function showTextContent(panelNumber) {
    textContents.forEach(content => {
      content.classList.remove('active');
    });
    const activeContent = document.querySelector(`.text-content[data-panel="${panelNumber}"]`);
    if (activeContent) {
      activeContent.classList.add('active');
    }
  }

  function expandPanel(panel) {
    imagePanels.forEach(p => p.classList.remove('expanded'));
    panel.classList.add('expanded');
    const panelNumber = panel.getAttribute('data-panel');
    showTextContent(panelNumber);
    currentPanel = parseInt(panelNumber);
  }

  function resetPanels() {
    imagePanels.forEach(panel => {
      panel.classList.remove('expanded');
    });
  }

  imagePanels.forEach(panel => {
    panel.addEventListener('mouseenter', () => {
      expandPanel(panel);
    });
  });

  document.querySelector('.images-container').addEventListener('mouseleave', () => {
    setTimeout(() => {
      resetPanels();
      showTextContent(1);
    }, 100);
  });


//question --------

  const tabs = document.querySelectorAll('.tab-item');
  const images = document.querySelectorAll('[data-image]');

  function setActive(index) {
    // Images
    images.forEach((img, i) => {
      img.style.opacity = i === index ? '1' : '0';
      img.style.zIndex = i === index ? '10' : '0';
    });
    // Tabs
    tabs.forEach((tab, i) => {
      if (i === index) {
        tab.classList.add('bg-[#2a57f8]');
        tab.classList.remove('bg-transparent');
      } else {
        tab.classList.remove('bg-[#2a57f8]');
        tab.classList.add('bg-transparent');
      }
    });
  }

  // Hover to activate
  tabs.forEach((tab, i) => {
    tab.addEventListener('mouseenter', () => setActive(i));
  });

  // Default active state
  setActive(0);
