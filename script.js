const slides = Array.from(document.querySelectorAll(".slide"));
const progress = document.querySelector(".slider-progress span");
const controls = Array.from(document.querySelectorAll(".slider-button"));
const hubTrack = document.querySelector("[data-hub-track]");
const hubViewport = document.querySelector("[data-hub-viewport]");
const hubButtons = Array.from(document.querySelectorAll("[data-hub-dir]"));
const hubProgress = document.querySelector("[data-hub-progress]");
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
    kicker: "Latest Article / Food Note",
    title: "Fried snacks and coffee in hand, framed by the warmth of a small restaurant at night.",
    sector: "Food Culture",
    region: "Lisbon",
    timespan: "2026",
    contact: "Travel notes desk\nhello@cloudocloud.com",
    services: "Photo curation\nEditorial writing\nAtmosphere mapping",
    client: "Hub archive",
    summary:
      "A food note built from one handheld scene: hot fried snacks, a paper cup of coffee, and the glow of a small counter space behind them.",
    image: "./Images/hub01.jpeg",
    imageAlt: "Paper cup and fried snacks held inside a warm restaurant",
    paragraphs: [
      "What makes this image memorable is its closeness. The viewer is not looking at a plated meal from a distance but holding it, which makes the scene feel immediate and lived rather than arranged.",
      "The crisp texture of the fried snacks, the paper cup, and the wood-and-shelf backdrop turn a simple purchase into a fuller travel memory. It captures the feeling of stepping into a small place, ordering quickly, and carrying warmth away in your hands.",
      "In the Hub, this kind of image works as a compact fragment of city life, where food becomes a way of remembering atmosphere as much as taste."
    ]
  },
  "digital-observation": {
    kicker: "Latest Article / Portrait",
    title: "A doorway portrait where the restaurant entrance, pavement, and pose all shape the image.",
    sector: "Travel Portrait",
    region: "Lisbon",
    timespan: "2026",
    contact: "Field journal desk\nhello@cloudocloud.com",
    services: "Portrait framing\nTravel editing\nLocation notes",
    client: "Hub archive",
    summary:
      "A portrait note about how a person, a doorway, and the surrounding street can work together to describe a place.",
    image: "./Images/hub02.jpeg",
    imageAlt: "Portrait in front of a restaurant entrance at night",
    paragraphs: [
      "The photograph is strongest because it does not isolate the subject from the setting. The restaurant sign, textured wall, open doorway, and patterned pavement all stay visible enough to build context around the pose.",
      "Instead of reading as a generic portrait, the image feels tied to a specific night and a specific address. The entrance behind the subject gives the frame both depth and a clear sense of arrival.",
      "That balance between person and place is what makes the image useful in the Hub, where travel is recorded through recognizable scenes rather than abstract impressions."
    ]
  },
  "city-gap": {
    kicker: "Latest Article / Live Scene",
    title: "Blue-green stage light, a night crowd, and the temporary architecture of a live concert.",
    sector: "Music Culture",
    region: "Coimbra",
    timespan: "2026",
    contact: "Culture notes desk\nhello@cloudocloud.com",
    services: "Event photography\nLight study\nEditorial sequencing",
    client: "Hub archive",
    summary:
      "A live scene focused on stage light, crowd silhouettes, and the way a concert moment reorganizes public space.",
    image: "./Images/hub03.jpeg",
    imageAlt: "Live concert stage with green and blue lights at night",
    paragraphs: [
      "The image reads first through color. Blue and green light spill across the stage canopy, screen, and crowd, turning the whole venue into a temporary field of brightness and shadow.",
      "Just as important are the audience silhouettes in the foreground. They anchor the scale of the performance and make the concert feel collective, not just observed from afar.",
      "In the Hub, the photograph expands the archive from meals and interiors into public cultural life, showing how a trip is also remembered through sound, light, and shared attention."
    ]
  },
  "field-journal": {
    kicker: "Latest Article / Shared Table",
    title: "Seafood paella, lemon wedges, and a shared table arranged around one large dish.",
    sector: "Dining Note",
    region: "Lisbon",
    timespan: "2026",
    contact: "Food journal desk\nhello@cloudocloud.com",
    services: "Travel archive\nPhoto editing\nNarrative curation",
    client: "Hub archive",
    summary:
      "A dining note about color, abundance, and the visual choreography created when one pan anchors the whole table.",
    image: "./Images/hub04.jpeg",
    imageAlt: "Seafood paella with lemons on a dining table",
    paragraphs: [
      "The paella fills the frame with strong visual structure: a black pan, warm rice tones, shellfish, prawns, and bright wedges of lemon placed across the surface. It is a dish that almost composes itself.",
      "The surrounding details matter too. The serving spoons, side plate, and cropped table edges suggest a meal already being shared, which gives the image social movement instead of still-life distance.",
      "That sense of gathering is what makes the photograph fit naturally in the Hub, where everyday scenes are kept for their atmosphere as much as their subject."
    ]
  },
  "warm-interior": {
    kicker: "Latest Article / Interior Mood",
    title: "Globe lamps, green tile, and a bar interior layered with warmth, order, and hospitality.",
    sector: "Interior Study",
    region: "Lisbon",
    timespan: "2026",
    contact: "Interior notes desk\nhello@cloudocloud.com",
    services: "Spatial observation\nMaterial reading\nEditorial curation",
    client: "Hub archive",
    summary:
      "An interior study of a classic bar where hanging lights, tiled counters, and wood surfaces build a rich but comfortable atmosphere.",
    image: "./Images/hub05.jpeg",
    imageAlt: "Classic bar interior with hanging lamps and tiled counter",
    paragraphs: [
      "This room stands out because its details repeat with confidence. Globe pendant lights, dark timber framing, green tile, and patterned flooring give the interior a clear rhythm without making it feel rigid.",
      "The bar counter anchors the foreground while shelving, mirrors, and seating deepen the image behind it. Even in a busy setting, the organization of the room remains easy to read.",
      "As a Hub entry, the photograph works as a reminder that hospitality interiors often feel memorable not because of one dramatic gesture, but because many materials and lighting choices work together."
    ]
  }
};

let currentIndex = 0;
let autoplayId = null;
let currentArticleId = null;
let revealObserver = null;
let currentHubIndex = 0;
let hubScrollTimeoutId = null;

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

function getHubItems() {
  if (!hubTrack) {
    return [];
  }

  return Array.from(hubTrack.querySelectorAll(".article-card"));
}

function getHubVisibleCount() {
  if (window.matchMedia("(max-width: 760px)").matches) {
    return 1;
  }

  if (window.matchMedia("(max-width: 1100px)").matches) {
    return 2;
  }

  return 4;
}

function syncHubControls() {
  const hubItems = getHubItems();

  if (!hubItems.length || !hubProgress) {
    return;
  }

  const visibleCount = Math.min(getHubVisibleCount(), hubItems.length);
  const maxIndex = Math.max(hubItems.length - visibleCount, 0);
  const safeIndex = Math.min(currentHubIndex, maxIndex);
  const progressRatio = visibleCount / hubItems.length;
  const progressWidth = `${progressRatio * 100}%`;
  const progressOffset = maxIndex === 0 ? 0 : (((safeIndex / maxIndex) * (1 - progressRatio)) / progressRatio) * 100;

  currentHubIndex = safeIndex;
  hubProgress.style.width = progressWidth;
  hubProgress.style.transform = `translateX(${progressOffset}%)`;

  hubButtons.forEach((button) => {
    const direction = Number(button.dataset.hubDir);
    button.disabled = maxIndex === 0 || (direction < 0 ? safeIndex === 0 : safeIndex === maxIndex);
  });
}

function scrollHubTo(index, behavior = "smooth") {
  const hubItems = getHubItems();

  if (!hubTrack || !hubItems.length) {
    return;
  }

  const visibleCount = Math.min(getHubVisibleCount(), hubItems.length);
  const maxIndex = Math.max(hubItems.length - visibleCount, 0);
  const nextIndex = Math.max(0, Math.min(index, maxIndex));
  const targetItem = hubItems[nextIndex];

  currentHubIndex = nextIndex;

  if (targetItem) {
    hubTrack.scrollTo({
      left: targetItem.offsetLeft,
      behavior
    });
  }

  syncHubControls();
}

function moveHub(direction) {
  const step = getHubVisibleCount();
  scrollHubTo(currentHubIndex + direction * step);
}

function updateHubFromScroll() {
  const hubItems = getHubItems();

  if (!hubTrack || !hubItems.length) {
    return;
  }

  let nearestIndex = 0;
  let nearestDistance = Number.POSITIVE_INFINITY;

  hubItems.forEach((item, index) => {
    const distance = Math.abs(item.offsetLeft - hubTrack.scrollLeft);

    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = index;
    }
  });

  currentHubIndex = nearestIndex;
  syncHubControls();
}

function setupHubCarousel() {
  if (!hubTrack || !hubViewport) {
    return;
  }

  hubButtons.forEach((button) => {
    button.addEventListener("click", () => {
      moveHub(Number(button.dataset.hubDir));
    });
  });

  hubTrack.addEventListener("scroll", () => {
    window.clearTimeout(hubScrollTimeoutId);
    hubScrollTimeoutId = window.setTimeout(updateHubFromScroll, 90);
  }, { passive: true });

  scrollHubTo(0, "auto");
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

setupHubCarousel();
setupSatelliteGlobes();

setupScrollReveal();
updateParallax();

window.addEventListener("scroll", updateParallax, { passive: true });
window.addEventListener("resize", () => {
  updateParallax();
  scrollHubTo(currentHubIndex, "auto");
});
