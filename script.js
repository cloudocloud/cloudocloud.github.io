const slides = Array.from(document.querySelectorAll(".slide"));
const progress = document.querySelector(".slider-progress span");
const controls = Array.from(document.querySelectorAll(".slider-button"));
const articleCards = Array.from(document.querySelectorAll(".article-card"));
const modal = document.querySelector(".article-modal");
const modalPanel = document.querySelector(".article-modal__panel");
const closeTargets = Array.from(document.querySelectorAll("[data-close-modal]"));
const shareButtons = Array.from(document.querySelectorAll(".share-button"));
const globeScenes = Array.from(document.querySelectorAll("[data-globe-scene]"));
const revealElements = Array.from(document.querySelectorAll("[data-reveal]"));
const parallaxElements = Array.from(document.querySelectorAll("[data-parallax]"));
const slideCount = slides.length || 1;

const articleFields = {
  kicker: document.getElementById("article-kicker"),
  title: document.getElementById("article-title"),
  sector: document.getElementById("article-sector"),
  region: document.getElementById("article-region"),
  timespan: document.getElementById("article-timespan"),
  contact: document.getElementById("article-contact"),
  services: document.getElementById("article-services"),
  client: document.getElementById("article-client"),
  summary: document.getElementById("article-summary"),
  image: document.getElementById("article-image"),
  paragraphs: document.getElementById("article-paragraphs"),
};

const articles = {
  "waterside-atlas": {
    kicker: "Recent Work / Waterside Atlas",
    title: "Waterside Atlas explores how a residential edge can feel slower, softer, and more public.",
    sector: "Architecture",
    region: "Seoul Waterfront",
    timespan: "2024 - 2025",
    contact: "cloudocloud studio\nhello@cloudocloud.com",
    services: "Spatial direction\nBrand narrative\nEditorial web design",
    client: "Independent concept commission",
    summary:
      "This article follows the early design logic for a waterfront housing concept, where public movement, visual calm, and layered density are balanced through sequencing rather than spectacle.",
    image: "./Images/work_sample01.jpeg",
    imageAlt: "Coffee bar interior",
    paragraphs: [
      "The project began with a simple question: how can a large residential development feel composed from the perspective of someone walking slowly through it? Instead of treating the site as a singular object, the concept breaks the massing into moments of arrival, pause, and framed views.",
      "Public thresholds became the real design generator. Arcades, terraces, planted setbacks, and low-intensity gathering zones were considered as important as the buildings themselves. This let the scheme feel open without losing structure.",
      "In the portfolio context, the article acts as a demonstration of how cloudocloud presents work. Large images carry the atmosphere, while short factual layers keep the story readable and specific."
    ]
  },
  "chromatic-pavilion": {
    kicker: "Recent Work / Chromatic Pavilion",
    title: "Chromatic Pavilion turns shade, color, and translucency into a social landmark.",
    sector: "Exhibition Design",
    region: "Asia Pacific",
    timespan: "2023 - 2025",
    contact: "cloudocloud studio\nhello@cloudocloud.com",
    services: "Spatial concept\nVisual identity\nContent editing",
    client: "Culture and place initiative",
    summary:
      "A temporary pavilion can act as a public invitation. This article studies how color, canopy, and visual porosity make a site feel less formal and more immediately accessible.",
    image: "./Images/work_sample02.jpeg",
    imageAlt: "Red architectural building",
    paragraphs: [
      "Rather than using a pavilion as a closed statement object, the proposal treats it like a filter for light and social movement. The layered surface creates a shifting atmosphere through the day, which changes how the public reads scale and openness.",
      "The circular image treatment on the archive page hints at the project's softer, more sculptural identity. Once opened, the article expands into a more structured layout that introduces sector, timeframe, and supporting narrative.",
      "This balance between expressive previews and disciplined long-form reading is central to the site direction."
    ]
  },
  "play-loop": {
    kicker: "Recent Work / Play Loop",
    title: "Play Loop imagines healthier daily routines through visibility, movement, and informal play.",
    sector: "Public Space",
    region: "North America",
    timespan: "2024 - 2025",
    contact: "cloudocloud studio\nhello@cloudocloud.com",
    services: "Research framing\nExperience mapping\nEditorial storytelling",
    client: "Urban wellbeing pilot",
    summary:
      "The article maps how family-centered urban space can encourage more everyday movement by connecting play moments, sightlines, and clear transitions into one readable system.",
    image: "./Images/work_sample03.jpeg",
    imageAlt: "Garden courtyard architecture",
    paragraphs: [
      "Instead of treating play as a destination alone, the concept distributes activity across smaller linked moments. Slides, edges, seating, and circulation routes create an environment that stays legible to children and caregivers at the same time.",
      "The work also demonstrates how research-heavy projects can be presented without feeling academic or distant. Key information is separated into metadata, a summary, and body text so the reader can enter at different depths.",
      "This detail layout is designed to feel close to a printed feature while remaining responsive on the web."
    ]
  },
  "urban-texture": {
    kicker: "Recent Work / Urban Texture Notes",
    title: "Urban Texture Notes documents local color systems, signage, and facades as living identity.",
    sector: "Urban Archive",
    region: "Latin America",
    timespan: "2022 - 2025",
    contact: "cloudocloud studio\nhello@cloudocloud.com",
    services: "Photography curation\nArchive design\nWeb presentation",
    client: "Independent field study",
    summary:
      "This article gathers observations from streets shaped by density, layered maintenance, and strong visual character, then turns them into an archive that can inform future design work.",
    image: "./Images/work_sample04.jpeg",
    imageAlt: "Portrait in interior setting",
    paragraphs: [
      "The project is less about preservation in a traditional sense and more about attention. It records surfaces, signs, colors, and small modifications that reveal how people keep a place active over time.",
      "Presented as an article, the archive becomes easier to browse, cite, and revisit. It reads as both a visual essay and a sourcebook for later branding and spatial work.",
      "That flexibility made it a strong model for the Works section, where each card now opens into a richer editorial view."
    ]
  },
  "studio-letter": {
    kicker: "Latest Article / Our Story",
    title: "A message from the studio on building a softer, clearer portfolio for cloudocloud.",
    sector: "Editorial",
    region: "Seoul",
    timespan: "March 2026",
    contact: "Editor, cloudocloud\nhello@cloudocloud.com",
    services: "Writing direction\nArt direction\nPortfolio strategy",
    client: "cloudocloud",
    summary:
      "This letter explains why the site prioritizes atmosphere, sequencing, and visual calm. It frames the portfolio not as a static gallery but as a readable publication.",
    image: "./Images/2_work 06.png",
    imageAlt: "Studio editorial portrait",
    paragraphs: [
      "Many portfolio sites can feel either too minimal to be informative or too dense to be memorable. This approach tries to hold both: strong mood on first contact, followed by structured detail once a reader chooses to go deeper.",
      "The new article view supports that strategy. Overview cards remain light and image-driven, but the modal opens into a layout with enough hierarchy to carry real text.",
      "This makes the site more useful not only for browsing but also for presentations, submissions, and sharing individual stories."
    ]
  },
  "digital-observation": {
    kicker: "Latest Article / Urban Quality Assessment",
    title: "Measuring what we care about through images, notes, and digital observation tools.",
    sector: "Research",
    region: "Global",
    timespan: "2025 - 2026",
    contact: "Research desk\nhello@cloudocloud.com",
    services: "Data storytelling\nResearch editing\nInterface design",
    client: "Internal publication",
    summary:
      "A recent article on how field observations can remain human and situational even when supported by digital systems, tags, and structured archives.",
    image: "./Images/2_work 04.png",
    imageAlt: "Research visual",
    paragraphs: [
      "The point of digital tooling is not to flatten urban experience into metrics, but to help retain patterns that might otherwise disappear after a site visit. Images, notes, and tags become a memory structure.",
      "For the portfolio, this topic also mirrors the interface design. The article detail layout keeps key facts close to the title while allowing longer narrative text to breathe below.",
      "It is a format meant for revisiting, not just scanning."
    ]
  },
  "city-gap": {
    kicker: "Latest Article / City Making",
    title: "Closing the gap between cinematic presentation and practical, useful information.",
    sector: "City Making",
    region: "Middle East / Asia",
    timespan: "2024 - 2026",
    contact: "Editorial team\nhello@cloudocloud.com",
    services: "Narrative systems\nContent architecture\nCase study layout",
    client: "Knowledge hub series",
    summary:
      "This piece explores how immersive interfaces can still support everyday comprehension by pairing strong imagery with clear metadata and concise language.",
    image: "./Images/1_front 01.png",
    imageAlt: "Architectural city scene",
    paragraphs: [
      "Readers often decide within seconds whether a portfolio feels trustworthy. Much of that judgment comes from rhythm: how titles break, how space is used, and whether details appear when expected.",
      "The detailed article view makes that rhythm explicit. It lets the portfolio hold larger ideas without forcing everything into the overview cards.",
      "As a result, the homepage stays elegant while deeper pages remain genuinely informative."
    ]
  },
  "field-journal": {
    kicker: "Latest Article / Field Journal",
    title: "Trip fragments become a visual system for future stories, pages, and project narratives.",
    sector: "Field Journal",
    region: "Europe / East Asia",
    timespan: "2023 - 2026",
    contact: "Journal desk\nhello@cloudocloud.com",
    services: "Travel archive\nEditorial curation\nImage sequencing",
    client: "cloudocloud trips",
    summary:
      "A compact article on how travel notes move from private reference material into a usable visual language for the wider portfolio.",
    image: "./Images/2_work 05.png",
    imageAlt: "Field journal visual",
    paragraphs: [
      "Photographs taken in motion often reveal compositional instincts before a formal project does. Repeated colors, shapes, and edges accumulate into a vocabulary.",
      "This article explains how those fragments are sorted and reused later across case studies, article cards, and the wider site identity.",
      "It also connects the Hub and Trip sections, making the portfolio feel more continuous."
    ]
  }
};

let currentIndex = 0;
let autoplayId = null;
let currentArticleId = null;
let revealObserver = null;

function setupScrollReveal() {
  if (!revealElements.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

function updateParallax() {
  if (!parallaxElements.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const viewportHeight = window.innerHeight || 1;

  parallaxElements.forEach((element) => {
    const depth = Number(element.dataset.depth || 0.1);
    const rect = element.getBoundingClientRect();
    const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
    const progress = Math.max(-1, Math.min(1, centerOffset / viewportHeight));
    element.style.setProperty("--parallax-y", `${progress * depth * -120}px`);
  });
}

function createPins() {
  const europeBase = [
    [-0.1276, 51.5072], [2.3522, 48.8566], [4.9041, 52.3676], [13.405, 52.52],
    [11.582, 48.1351], [16.3738, 48.2082], [14.4378, 50.0755], [21.0122, 52.2297],
    [18.0686, 59.3293], [10.7522, 59.9139], [12.5683, 55.6761], [24.9384, 60.1699],
    [18.6435, 60.1282], [6.1432, 46.2044], [8.5417, 47.3769], [9.19, 45.4642],
    [12.4964, 41.9028], [-3.7038, 40.4168], [2.1734, 41.3851], [-9.1393, 38.7223],
    [-6.2603, 53.3498], [23.7275, 37.9838], [19.0402, 47.4979], [26.1025, 44.4268],
    [20.4489, 44.7866], [15.9819, 45.815], [30.5234, 50.4501], [28.9784, 41.0082],
    [24.7536, 59.437], [25.2797, 54.6872]
  ];

  const seaBase = [
    [100.5018, 13.7563], [103.8198, 1.3521], [106.8456, -6.2088], [101.6869, 3.139],
    [105.8342, 21.0278]
  ];

  const japanBase = [
    [139.6917, 35.6895], [135.5023, 34.6937], [141.3545, 43.0618]
  ];

  return [
    ...europeBase.map(([lon, lat]) => ({ lon, lat, region: "europe" })),
    ...seaBase.map(([lon, lat]) => ({ lon, lat, region: "sea" })),
    ...japanBase.map(([lon, lat]) => ({ lon, lat, region: "japan" }))
  ];
}

const globePins = createPins();

function setupSatelliteGlobes() {
  if (!globeScenes.length || typeof window.Globe !== "function") {
    return;
  }

  const regionColors = {
    europe: "#f2a17c",
    sea: "#ffcf70",
    japan: "#141414"
  };

  globeScenes.forEach((element) => {
    const globe = window
      .Globe()(element)
      .width(element.clientWidth || 540)
      .height(element.clientHeight || 540)
      .backgroundColor("rgba(0,0,0,0)")
      .showAtmosphere(true)
      .atmosphereColor("#9fd3ff")
      .atmosphereAltitude(0.16)
      .globeImageUrl("https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg")
      .bumpImageUrl("https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png")
      .pointsData(globePins)
      .pointLat("lat")
      .pointLng("lon")
      .pointAltitude(0.015)
      .pointRadius(0.44)
      .pointResolution(18)
      .pointColor((d) => regionColors[d.region]);

    const controls = globe.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minDistance = 230;
    controls.maxDistance = 230;

    globe.pointOfView({ lat: 22, lng: 12, altitude: 2.1 }, 0);

    const resizeGlobe = () => {
      const size = Math.min(element.clientWidth || 540, element.clientHeight || 540);
      globe.width(size).height(size);
    };

    resizeGlobe();
    window.addEventListener("resize", resizeGlobe);
  });
}

function renderSlide(index) {
  if (!progress || !slides.length) {
    return;
  }

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === index);
  });

  progress.style.width = `${100 / slideCount}%`;
  progress.style.transform = `translateX(${index * 100}%)`;
}

function moveSlide(direction) {
  if (!slides.length) {
    return;
  }

  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  renderSlide(currentIndex);
  restartAutoplay();
}

function restartAutoplay() {
  if (!slides.length) {
    return;
  }

  window.clearInterval(autoplayId);
  autoplayId = window.setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    renderSlide(currentIndex);
  }, 5500);
}

function fillArticle(article) {
  if (!articleFields.kicker) {
    return;
  }

  articleFields.kicker.textContent = article.kicker;
  articleFields.title.textContent = article.title;
  articleFields.sector.textContent = article.sector;
  articleFields.region.textContent = article.region;
  articleFields.timespan.textContent = article.timespan;
  articleFields.contact.textContent = article.contact;
  articleFields.services.textContent = article.services;
  articleFields.client.textContent = article.client;
  articleFields.summary.textContent = article.summary;
  articleFields.image.src = article.image;
  articleFields.image.alt = article.imageAlt;
  articleFields.paragraphs.replaceChildren(
    ...article.paragraphs.map((paragraph) => {
      const element = document.createElement("p");
      element.textContent = paragraph;
      return element;
    })
  );
}

function openArticle(articleId) {
  const article = articles[articleId];

  if (!article || !modal || !modalPanel) {
    return;
  }

  currentArticleId = articleId;
  fillArticle(article);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalPanel.scrollTop = 0;
}

function closeArticle() {
  if (!modal) {
    return;
  }

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  currentArticleId = null;
}

controls.forEach((button) => {
  button.addEventListener("click", () => {
    moveSlide(Number(button.dataset.dir));
  });
});

articleCards.forEach((card) => {
  card.addEventListener("click", () => {
    openArticle(card.dataset.article);
  });
});

closeTargets.forEach((target) => {
  target.addEventListener("click", closeArticle);
});

document.addEventListener("keydown", (event) => {
  if (modal && event.key === "Escape" && modal.classList.contains("is-open")) {
    closeArticle();
  }
});

shareButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    if (!currentArticleId) {
      return;
    }

    const shareUrl = `${window.location.origin}${window.location.pathname}#${currentArticleId}`;
    const shareText = articles[currentArticleId].title;

    if (button.dataset.share === "copy") {
      try {
        await navigator.clipboard.writeText(shareUrl);
        button.textContent = "✓";
        window.setTimeout(() => {
          button.textContent = "⤴";
        }, 1200);
      } catch (error) {
        button.textContent = "!";
      }
      return;
    }

    if (button.dataset.share === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
        "_blank",
        "noopener,noreferrer"
      );
      return;
    }

    if (button.dataset.share === "x") {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  });
});

if (slides.length) {
  renderSlide(currentIndex);
  restartAutoplay();
}

setupSatelliteGlobes();

setupScrollReveal();
updateParallax();

window.addEventListener("scroll", updateParallax, { passive: true });
window.addEventListener("resize", updateParallax);
