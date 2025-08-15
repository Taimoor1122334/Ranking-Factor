
 
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

// Backlink Strategies Section Functionality
const strategyItems = document.querySelectorAll('.strategy-item');
const imageOverlay = document.getElementById('imageOverlay');
const overlayImage = document.getElementById('overlayImage');
const overlayTitle = document.getElementById('overlayTitle');

// Function to show image overlay
function showImageOverlay(imageSrc, title) {
  if (overlayImage) {
    overlayImage.src = imageSrc;
  }
  if (overlayTitle) {
    overlayTitle.textContent = title;
  }
  if (imageOverlay) {
    imageOverlay.classList.add('active');
  }
}

// Function to set active strategy
function setActiveStrategy(strategyItem) {
  // Remove active class from all items
  strategyItems.forEach(item => {
    item.classList.remove('active');
  });
  
  // Add active class to selected item
  strategyItem.classList.add('active');
}

// Function to hide image overlay
function hideImageOverlay() {
  if (imageOverlay) {
    imageOverlay.classList.remove('active');
  }
}

// Track if user is hovering over any strategy item
let isHoveringStrategy = false;

// Add event listeners to strategy items
strategyItems.forEach(item => {
  const imageSrc = item.getAttribute('data-image');
  const title = item.getAttribute('data-title');
  
  item.addEventListener('mouseenter', () => {
    isHoveringStrategy = true;
    showImageOverlay(imageSrc, title);
    setActiveStrategy(item);
  });
  
  item.addEventListener('mouseleave', () => {
    isHoveringStrategy = false;
    // Show default first image when not hovering any strategy
    setTimeout(() => {
      if (!isHoveringStrategy && strategyItems.length > 0) {
        const defaultImage = strategyItems[0].getAttribute('data-image');
        const defaultTitle = strategyItems[0].getAttribute('data-title');
        showImageOverlay(defaultImage, defaultTitle);
        setActiveStrategy(strategyItems[0]);
      }
    }, 100);
  });
  
  item.addEventListener('click', () => {
    showImageOverlay(imageSrc, title);
    setActiveStrategy(item);
  });
});

// Initialize with first strategy active
if (strategyItems.length > 0) {
  const firstStrategy = strategyItems[0];
  const imageSrc = firstStrategy.getAttribute('data-image');
  const title = firstStrategy.getAttribute('data-title');
  showImageOverlay(imageSrc, title);
  setActiveStrategy(firstStrategy);
}

// Add subtle animation to the trading time
function updateTime() {
  const timeElement = document.getElementById('tradingTime');
  if (timeElement) {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    timeElement.textContent = timeString;
  }
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();

// Add some random data updates to make it look more realistic
function updateTradingData() {
  const dataValues = document.querySelectorAll('.data-value');
  dataValues.forEach(value => {
    if (Math.random() > 0.5) {
      const change = (Math.random() * 10 - 5).toFixed(2);
      const isPositive = change > 0;
      value.textContent = `${isPositive ? '+' : ''}${change}%`;
      value.className = isPositive ? 'data-value positive' : 'data-value negative';
    }
  });
}

// Update trading data every 3 seconds
setInterval(updateTradingData, 3000);
