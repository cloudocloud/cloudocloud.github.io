const slides = Array.from(document.querySelectorAll(".slide"));
const progress = document.querySelector(".slider-progress span");
const controls = Array.from(document.querySelectorAll(".slider-button"));
const siteHeader = document.querySelector(".site-header");
const heroSection = document.querySelector(".hero");
const hubTrack = document.querySelector("[data-hub-track]");
const hubViewport = document.querySelector("[data-hub-viewport]");
const hubButtons = Array.from(document.querySelectorAll("[data-hub-dir]"));
const hubProgress = document.querySelector("[data-hub-progress]");
const articleCards = Array.from(document.querySelectorAll("button.article-card[data-article]"));
const worksGrid = document.querySelector("[data-works-grid]");
const worksFilterButtons = Array.from(document.querySelectorAll("[data-works-filter]"));
const worksAccordionTriggers = Array.from(document.querySelectorAll("[data-works-accordion-trigger]"));
const worksSortSelect = document.querySelector("[data-works-sort]");
const worksClearButton = document.querySelector("[data-works-clear]");
const worksCount = document.querySelector("[data-works-count]");
const publicationGrid = document.querySelector("[data-publication-grid]");
const publicationPagination = document.querySelector("[data-publication-pagination]");
const modal = document.querySelector(".article-modal");
const modalPanel = document.querySelector(".article-modal__panel");
const closeTargets = Array.from(document.querySelectorAll("[data-close-modal]"));
const shareButtons = Array.from(document.querySelectorAll(".share-button"));
const globeScenes = Array.from(document.querySelectorAll("[data-globe-scene]"));
const revealElements = Array.from(document.querySelectorAll("[data-reveal]"));
const parallaxElements = Array.from(document.querySelectorAll("[data-parallax]"));
const slideCount = slides.length || 1;

function supportsSmoothScroll() {
  return "scrollBehavior" in document.documentElement.style;
}

function scrollElementTo(element, left, behavior = "smooth") {
  if (!element) {
    return;
  }

  const safeBehavior = behavior === "smooth" && supportsSmoothScroll() ? "smooth" : "auto";

  try {
    element.scrollTo({
      left,
      behavior: safeBehavior
    });
  } catch (error) {
    element.scrollLeft = left;
  }
}

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
  "braga-stadium": {
    kicker: "Latest Article / Brique",
    title: "시민에게 사랑받는 축구 클럽과 채석장 위에 세워진 경기장, 브라가 시립 경기장.",
    sector: "Architecture / Urban Culture",
    region: "Braga, Portugal",
    timespan: "2025",
    contact: "Brique\n2025.08.04\nhttps://magazine.brique.co/article/record-of-wanderings-in-the-iberian_a-pedreira/",
    services: "Writing\nField observation\nArchitectural criticism\nTravel essay",
    client: "Brique",
    summary:
      "포르투에서 브라가로 향한 여정 속에서 만난 브라가 시립 경기장은, 시민의 자산으로 운영되는 축구 경기장이자 채석장의 지형과 건축이 강하게 맞물린 도시의 상징으로 읽힌다.",
    image: "./Images/braga-article/29.jpeg",
    imageAlt: "Architectural cover image for Braga stadium article",
    paragraphs: [
      "포르투 주변에는 가볼 만한 도시가 많다. 포르투갈 북부 거점 도시 포르투 주변에는 매력적인 소도시들이 많이 있다. 포르투에서 머무는 기간이 길어지면서 차츰 주변 도시에도 관심이 가기 시작했다. 대표적인 예로, 페냐성지, 공작성 등 오래된 건축물이 잘 보존된 기마랑이스 Guimaraes, 아기자기한 타일 장식이 돋보이는 건축물과 운하로 포르투갈의 작은 베네치아로 불리는 아베이루 Aveiro, 줄무늬 주택들이 줄지어 서 있는 마을 코스타 노바 Cosa Nova, 상 곤사루 Sao Goncalo 축제가 매년 유월에 열리는 산속 도시 아마란치 Amarante, 지금까지 언급한 도시보다 조금 더 먼 차량으로 2시간 거리에 있는 가톨릭 성지 파티마 Fatima까지. 여기서 모두 언급하지 못했지만, 도시마다 매력과 개성을 가지고 있다.",
      "이번에는 브라가 Braga에 관해 이야기하고자 한다. 그저 포르투갈 대표적인 건축가 에두아르두 소우토 데 모우라 Eduardo Souto de Moura의 건축물이 눈에 들어왔기 때문이다. 바로 브라가 시립 경기장, Estadio Municipal de Braga이다.",
      "이슈따지우 무니시파우 Estadio Municipal는 번역하면 시에서 설립하고 시의회를 통해 운영하는 시립 경기장이라는 뜻이다. 이번에 만날 곳은 여기에 de Braga, 브라가의, 를 붙여 브라가 시립 경기장이라는 의미가 된다. 시립 경기장은 주로 축구 경기장으로 기능하며, 육상 트랙 및 다목적 시설물이 포함되어 때때로 다른 목적으로 사용되기도 한다. 시의회의 주도로 공공예산, EU 기금, 민간 투자 등으로 재원을 마련해 건설된다. 준공 후에는 시에서 직영하거나 지역 클럽이 장기 임대해 운영한다.",
      "브라가는 지역 클럽 SC Braga에서 사용 및 운영하고 있다. 스타디움은 지역에서 축구 경기장 이상의 의미가 있다. 도시 정체성의 상징, 즉 랜드마크이자 시민들이 누구나 이용할 수 있는 공공장소이며 지역 경제 활성화에도 이바지하는 시민들에게 자부심을 주는 건축물이다.",
      "브라가 시립 경기장의 운영 주체인 SC Braga, 공식 명칭 Sporting Clube de Braga는 1921년 창단해 포르투갈 북구 지역의 대표적인 프로축구 클럽이다. 프리메이라 리가 Primeira Liga에서 활약하고 있다. 1965-1966 시즌 포르투갈 컵을 시작으로 총 3회 우승, 리그컵 3회, 2008 UEFA 인터토토 컵 우승, 2009-2010 시즌 챔피언스 리그 2위로 진출, 2010-2011 UEFA 유로파리그에서 준우승하는 등 꾸준히 좋은 성적을 내고 있는 팀이다.",
      "또한 2016년 재창단된 미뉴의 여전사들, 게헤이라스 두 미뉴 Guerreiras do Minho라 불리는 여성 축구단의 기세도 대단하다고 평가받는다. 경기장 투어 중 가이드도 매우 강조했는데, 포르투갈 여자 축구 1부리그 Campeonato Nacional Feminino 2018-2019 시즌을 무패로 챔피언으로 등극한 것을 시작으로, 포르투갈 여자 컵 Taca de Portugal Feminina 2019-2020 시즌 우승, 포르투갈 여자 리그컵 Taca da Liga Feminina 2021-2022 시즌 우승, 슈퍼컵 Supertaca de Portugal Feminina 2018년 우승, UEFA 여자 챔피언스리그 2019-2020 시즌에서 32강에 진출했다. 2024-2025 시즌 포르투갈 1부리그를 3위로 마감하고, UEFA 챔피언스 리그 2025-2026 시즌 진출권을 확보한 상태이다.",
      "브라가 시립 경기장은 시민 모두의 자산이다. 열렬한 서포터즈가 될 뿐만 아니라, 관심이 높은 또 다른 이유는 건설한 이후의 유지 관리 비용을 세금으로 충당하기 때문이기도 하다. SC Braga가 매월 약 500유로의 상징적인 임대료를 지불하는 것에 비해 시의 재정적 부담이 상당하다. 건축 비용으로 초기 예측했던 비용의 7배에 달하는 200백만 유로, 유지 보수비용은 연간 13만 유로 이상 소요됐다.",
      "이에 시의회는 클럽 측에 구장의 매각 또는 양도를 검토해 오다가 2023년 10월 공식적으로 매각 계획을 발표했다. 2025년 현재, 매수 조건을 클럽 또는 투자자와 논의 중이다. 합의점에 도달한다면 2026년 전반기에 최종 매각이 될 것으로 보인다. 경기장이 매각되면 다양한 상업적 활용이라는 운영상의 유연성이 높아지리라 기대된다. 또한 지역 커뮤니티의 활성화, 시민들에게 적극적인 개방과 같은 시립 경기장으로서의 공공성을 이어 나가길 바란다. 브라가 시립 경기장이 클럽 팬들에게 한정되지 않고, 처음 시작한 그때처럼 브라가 시민들 모두에게 사랑받기를 바란다. 가장 열정적인 서포터가 되어줄 사람들은 바로 시민들이기 때문이다.",
      "미뉴 Minho는 포르투갈 북서부 지역을 일컫는 전통적인 이름이다. 오늘날의 행정구역으로는 브라가 Braga, 비아나 두 카스텔루 Viana do Castelo, 기마랑이스 Guimaraes 등을 포함한다. 특히 이 지역은 풍부한 자연경관과 함께 비뉴 베르드 Vinho Verde의 산지와 미뉴 강 Rio Minho로 유명하다. 참고로 북부 최대 라이벌 SC Braga와 기마랑이스를 연고지로 둔 Vitoria SC의 경기를 미뉴 더비 Derby do Minho라 부르는 것도 지역명에서 따온 것이다.",
      "브라가는 포르투에서 버스를 타고 약 1시간 10분 정도 걸린다. 거점을 옮기는 이동이기 때문에 모든 짐을 다 들고 움직였다. 브라가에서 숙박하지 않고 바로 이동할 계획이었기 때문에 짐을 보관할 장소가 필요했다. 기차역은 멀리 떨어져 있고, 버스터미널의 락커는 신뢰가 되지 않았다. 그래서 별도로 운영되고 있는 온라인 짐 보관 서비스 플랫폼을 선택했다. 애플리케이션을 통해 해당 지역에서 게스트 하우스나 카페와 같은 제휴된 공간에 짐을 보관하는 방식이다. 결제도 플랫폼을 통해서 진행된다. 보관 과정에서 좋은 경험을 했다면 팁을 드릴 수 있는 선택도 가능하다. 다만 세금 및 별도 서비스비가 부과되어 합리적인 가격인가에 대한 의심이 드는 서비스였다.",
      "스타디움 가이드 투어는 오후 3시, 짐을 맡기고 나오니 오전 11시 30분이었다. 언제나처럼 발길 닿는 대로 거닐었다. 포르투에 익숙해져 있다가 오랜만에 느끼는 거리의 낯섦이었다. 그렇게 우연히 만난 브라가 시립 시장, 한가운데 오래된 분수가 있는 것으로 추측건대 본래 광장이었던 곳에 지붕을 씌워 시장으로 만든 것으로 보였다. 또 다른 광장에는 지하를 파서 입체적으로 점포를 만들었다. 옛 도시 가운데 현대적인 요소들이 살짝 가미돼 있는 부분이 흥미로웠다.",
      "바다와 강을 끼고 있는 포르투와 내륙에 있는 7월 초 브라가의 날씨는 많이 달랐다. 오후 2시 기준 섭씨 33도에 육박하고 강렬한 햇살이 내리쬐었다. 미지의 도시로의 이동에 긴장한 탓일까, 탈수 증세를 보여서 걸어서 스타디움까지 걸어갈 계획을 변경해 볼트 Bolt를 호출했다. 볼트는 유럽권에서 많이 쓰는 호출 택시다. 유사한 것으로 우버, 카카오택시가 있다.",
      "큰 부지가 하나의 주소로 되어 있는 것일까. 볼트 기사님이 다른 골목으로 들어가는 바람에 한참을 더듬어서 길을 거슬러 올라갔다. 브라가의 축구 클럽 SC Braga를 알리는 거대한 사이니지와 깃발이 없었다면 찾아갈 수 없었을 것이다. 경기장의 모습은 전혀 보이지 않는 곳, 대부분 사람은 이곳에 차량을 이용해서 온다. 걸어오는 사람은 참 드물었을 것이다. 직원용, 설비용 차량을 위한 입구로 보이는 곳이었다. 트럭에 탄 사람들과 컨테이너 박스로 보이는 곳에 서서 대화를 나누는 경비원이 보였다. 그들이 대화를 마치길 기다렸다가 가이드 투어를 하러 왔다고 이야기하니 잠깐 기다리란다. 경기장 사무실 직원에게 확인하고 나서 출입증을 하나 써 주었다. 그리고 안쪽으로 쭈욱 들어가라고 했다. 모든 대화는 적당한 눈치로 이루어졌다. 그는 영어를 하실 줄 몰랐던 것이다.",
      "조금 안쪽으로 들어가니 높게 솟아 위용을 자랑하고 있는 스탠드가 보였다. 그제야 안심이 되었다. 그런데 길을 따라가는데 입구가 보이지 않았다. 오른쪽 길로는 터널이, 왼쪽 길로는 공사 자재들이 널브러져 있었다. 감으로 왼쪽을 선택했다. 하지만 정답은 오른쪽 터널이었다. 조금 전 이야기했다시피 걸어서 오는 길이 아니었다. 그 터널은 지하 주차장으로 이어져 있었고, 갑자기 어두워진 탓에 천천히 눈이 적응하길 기다려야 했다. 클럽의 상징색, 붉은 간판 빛을 따라 입구에 도달했다. 시간이 다 되었지만 투어에 참가하는 사람들은 보이지 않았다. 나 혼자인가라는 생각을 하고 있던 차에 아버지와 아들 사이라는 포르투갈 사람들이 합류했다. 그렇게 셋과 가이드님과 함께 길을 나섰다. 포르투갈어와 영어로 설명을 시작했다.",
      "무수히 많은 트로피가 진열된 곳이 첫 번째 장소, 클럽 뮤지엄이다. 오래된 역사를 가진 클럽답게 이곳을 거쳐 간 사람들과 트로피마다의 이야기들이 무궁무진하리라. 그에 비해 뮤지엄의 공간 구성은 단순하다. 한쪽 벽엔 설립자부터 운영자들의 사진이 걸려 있고, 중앙 박스에는 우승 트로피들이, 벽면에는 연도별로 크고 작은 트로피들이 당시 사용했던 축구공, 선수 단체 사진과 함께 전시되어 있다. 유로파가 한창 진행되고 있던 기간이기도 했고, 유럽 축구에 대한 흥미가 있다면 더 재미있게 들었을 것 같다. 가이드님과 한 참가자가 활발히 대화를 나누는 도중에도 나는 빨리 이동하길 바라고 있었다.",
      "채석장 위에 세워진 건축, 채석장 Pedreira. 옛 석회암 채석장이라는 독특한 매력을 가진 건축 부지를 삼아 가능한 기존 자연의 형상에 손을 대지 않고 건축물을 그 위에 띄워 만들었다. 엘리베이터를 타고 올라 가장 먼저 마주한 장면이 가장 특징적인 바로 그 장면이었다. 사람들은 채석장 위에 지어진 조형적인 건축물에도 페드레이라, 즉 채석장이라는 별명을 붙였다.",
      "그 이유는 첫 번째로, 몽치 까스트루 Monte Castro 북쪽에 있었던 채석장 위에 지어져 경기장 전체가 마치 채석장의 연장선처럼 보이기 때문이다. 둘째로 자연 지형을 최대한 보존하려는 건축가의 철학 아래 설계되어 관중석 한쪽은 암석 위에 세워졌고, 다른 한쪽은 콘크리트 리브가 리드미컬하게 배열해 만든 구조가 대비되면서도 채석장이었던 지형과 조화를 이루어 경기장 자체가 마치 채석장으로 느껴지기 때문이다.",
      "스탠드로 나가자 잔디 정비가 한창이었다. 둥글게 말아서 운반해 온 잔디를 펼치고 퍼즐 맞추듯 감쪽같이 하나의 잔디로 보이게 했다. 가장 높은 스탠드에서 바라본 그라운드는 급한 경사도 때문일까, 정말 극적인 장면이 드러났다. 어느 곳에 앉게 되든 시야가 가려지는 것 없이 한눈에 보일 것 같았다.",
      "브라가 스타디움의 또 다른 독특한 점은 양 골대 뒤로는 관중석이 없다는 점이다. 마주 보고 있는 스탠드와 탄탄한 텐션으로 양 지붕을 지탱하고 있는 34쌍의 와이어, 하나로 보이지만 4개가 한 쌍을 이룬다, 의 양옆은 완전히 오픈되어 있다. 미처 표를 구하지 못한 사람들도 옆 언덕에 오르면 경기를 관람할 수 있는 매우 개방된 구조는 지역 사회적 접근성을 고려한 건축가의 배려라는 평가도 있다. 이렇게 열린 시선을 통해 기존의 자연환경을 최소한으로 터치하고자 한 의도가 잘 반영되었음을 또한 알 수 있다. 지붕을 이루는 캐노피는 본래 알바루 시자가 설계한 리스본 엑스포 파빌리온의 콘크리트 지붕을 오마주하려 했으나, 최종적으로 페루 사람들이 만든 현수교에서 영감을 얻은 시스템으로 결정했다.",
      "outro. 뜨거운 공기가 식어가는 동안 떠나온 길. 노출콘크리트 날것의 매력과 스탠드를 오르내리는 계단과 구조의 조형성은 채석장 언덕에 본래 있었던 것만 같았고, 그라운드 앞에 나아가면 마치 이곳에 세워진 어떠한 인공물도 없다는 착각을 일으키기까지 했다. 무엇을 짓는 행위의 이상적인 모습 중 하나가 아닐까.",
      "조금 더 시간을 들여 설명해 주고 싶지만 며칠 뒤에 있을 다음 경기를 위해 경기장 재정비가 필요하므로 이제 마무리해야 할 것 같다며 가이드와 인사를 나누었다. 공간을 온전히 누리기에는 너무 짧았던 1시간의 가이드 투어가 끝이 났다. 마치 동굴에 들어가 있는 듯 시원했는데, 터널을 지나 나온 세상은 여전히 식지 않은 열기로 뜨거웠다. 좀처럼 떨어지지 않는 발걸음. 볼트를 잡아타고 빠르게 이동하기보다 여운을 즐기고 싶었다. 그래서 시내로 돌아가는 길은 걷기로 했다.",
      "잠깐 경험한 브라가는 과거와 현재가 예고 없이 서로 충돌하고 교차한다. 돌로 지은 건축과 콘크리트 건축이 한 거리에 있는 것은 물론이고, 갑자기 성벽을 배경으로 오래된 정원이 펼쳐지기도 한다. 하지만 신기하게도 이상하거나 어색하지 않았다. 왜 그럴까. 이미 함께 쌓은 시간의 누적 때문일까. 쉽사리 답을 내리지 못하고 다음 도시로 향하는 버스에 몸을 실었다."
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
let activeWorksFilters = {
  area: "all",
  role: "all",
  location: "all",
  state: "all"
};
let hubDragState = null;
let hubHoverVelocity = 0;

function setupHubPublicationsPagination() {
  if (!publicationGrid || !publicationPagination) {
    return;
  }

  const cards = Array.from(publicationGrid.querySelectorAll(".article-card"));
  const publicationsPerPage = 4;
  const totalPages = Math.ceil(cards.length / publicationsPerPage);

  if (!cards.length || totalPages <= 1) {
    cards.forEach((card) => {
      card.hidden = false;
    });
    publicationPagination.hidden = true;
    publicationPagination.replaceChildren();
    return;
  }

  let currentPage = Number.parseInt(publicationGrid.dataset.currentPage || "1", 10);

  if (!Number.isFinite(currentPage) || currentPage < 1) {
    currentPage = 1;
  }

  currentPage = Math.min(currentPage, totalPages);

  const renderPublicationPage = (page) => {
    currentPage = Math.min(Math.max(page, 1), totalPages);
    publicationGrid.dataset.currentPage = String(currentPage);

    cards.forEach((card, index) => {
      const pageForCard = Math.floor(index / publicationsPerPage) + 1;
      const isVisible = pageForCard === currentPage;
      card.hidden = !isVisible;
    });

    Array.from(publicationPagination.querySelectorAll(".hub-pagination__button")).forEach((button, index) => {
      const isActive = index + 1 === currentPage;
      button.classList.toggle("is-active", isActive);
      if (isActive) {
        button.setAttribute("aria-current", "page");
      } else {
        button.removeAttribute("aria-current");
      }
    });
  };

  const buttons = Array.from({ length: totalPages }, (_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "hub-pagination__button";
    button.textContent = String(index + 1);
    button.setAttribute("aria-label", `Go to publications page ${index + 1}`);
    button.addEventListener("click", () => {
      renderPublicationPage(index + 1);
      publicationPagination.scrollIntoView({
        block: "nearest",
        behavior: supportsSmoothScroll() ? "smooth" : "auto"
      });
    });
    return button;
  });

  publicationPagination.replaceChildren(...buttons);
  publicationPagination.hidden = false;
  renderPublicationPage(currentPage);
}

let hubHoverAnimationId = null;

function startHomeHubHoverScroll() {
  if (hubHoverAnimationId || !hubTrack) {
    return;
  }

  const tick = () => {
    if (Math.abs(hubHoverVelocity) > 0.15) {
      hubTrack.scrollLeft += hubHoverVelocity;
      hubHoverAnimationId = window.requestAnimationFrame(tick);
      return;
    }

    hubHoverAnimationId = null;
  };

  hubHoverAnimationId = window.requestAnimationFrame(tick);
}

function stopHomeHubHoverScroll() {
  hubHoverVelocity = 0;

  if (hubHoverAnimationId) {
    window.cancelAnimationFrame(hubHoverAnimationId);
    hubHoverAnimationId = null;
  }
}

function updateFrontHeaderState() {
  if (!siteHeader || !document.body.classList.contains("front-page")) {
    return;
  }

  const heroHeight = heroSection?.offsetHeight || window.innerHeight;
  const shouldBeSolid = window.scrollY > Math.max(heroHeight - 140, 120);

  siteHeader.classList.toggle("is-solid", shouldBeSolid);
}

function fitArticleCardTitles() {
  const titles = Array.from(document.querySelectorAll(".article-card h3"));

  titles.forEach((title) => {
    const card = title.closest(".article-card");

    if (!card) {
      return;
    }

    let nextSize = window.matchMedia("(max-width: 760px)").matches ? 1.55 : 2;
    const minSize = window.matchMedia("(max-width: 760px)").matches ? 1.02 : 1.08;

    title.style.setProperty("--article-card-title-size", `${nextSize}rem`);

    const computed = window.getComputedStyle(title);
    const lineHeight = Number.parseFloat(computed.lineHeight) || nextSize * 16 * 1.08;
    const maxHeight = lineHeight * 3.2;

    while (title.scrollHeight > maxHeight && nextSize > minSize) {
      nextSize -= 0.04;
      title.style.setProperty("--article-card-title-size", `${nextSize}rem`);
    }
  });
}

function setupHomeHubDrag() {
  if (!hubTrack || !document.body.classList.contains("front-page") || hubTrack.dataset.dragBound) {
    return;
  }

  const endDrag = () => {
    if (!hubDragState) {
      return;
    }

    hubTrack.classList.remove("is-dragging");
    hubDragState = null;
  };

  hubTrack.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    hubDragState = {
      startX: event.clientX,
      startScrollLeft: hubTrack.scrollLeft,
    };

    hubTrack.classList.add("is-dragging");
    hubTrack.setPointerCapture?.(event.pointerId);
  });

  hubTrack.addEventListener("pointermove", (event) => {
    if (!hubDragState) {
      return;
    }

    const deltaX = event.clientX - hubDragState.startX;
    hubTrack.scrollLeft = hubDragState.startScrollLeft - deltaX;
  });

  hubTrack.addEventListener("pointerup", endDrag);
  hubTrack.addEventListener("pointercancel", endDrag);
  hubTrack.addEventListener("mouseleave", () => {
    if (hubDragState) {
      hubTrack.classList.remove("is-dragging");
    }
  });

  if (hubViewport) {
    hubViewport.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "mouse" || hubDragState) {
        return;
      }

      const bounds = hubViewport.getBoundingClientRect();
      const pointerX = event.clientX - bounds.left;
      const normalized = ((pointerX / bounds.width) - 0.5) * 2;
      const deadZoneAdjusted = Math.abs(normalized) < 0.18 ? 0 : normalized;

      hubHoverVelocity = deadZoneAdjusted * 16;
      startHomeHubHoverScroll();
    });

    hubViewport.addEventListener("pointerleave", stopHomeHubHoverScroll);
  }

  hubTrack.addEventListener(
    "wheel",
    (event) => {
      const dominantDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

      if (!dominantDelta) {
        return;
      }

      hubTrack.scrollLeft += dominantDelta;
      event.preventDefault();
    },
    { passive: false }
  );

  hubTrack.dataset.dragBound = "true";
}

function buildHomeHubCard(source, index) {
  const card = document.createElement("a");
  card.className = `article-card is-visible${index % 2 === 0 ? " article-card--oval" : ""}`;
  card.href = source.href;

  if (source.imageSrc) {
    const image = document.createElement("img");
    image.className = "article-card__image";
    image.src = source.imageSrc;
    image.alt = source.imageAlt || "";
    card.appendChild(image);
  }

  if (source.tag) {
    const tag = document.createElement("span");
    tag.className = "article-card__tag";
    tag.textContent = source.tag;
    card.appendChild(tag);
  }

  if (source.title) {
    const title = document.createElement("h3");
    title.textContent = source.title;
    card.appendChild(title);
  }

  if (source.summary) {
    const summary = document.createElement("p");
    summary.textContent = source.summary;
    card.appendChild(summary);
  }

  return card;
}

async function loadHomeHubFeed() {
  if (!hubTrack || !document.body.classList.contains("front-page")) {
    return;
  }

  try {
    const response = await fetch("./hub.html", { cache: "no-store" });

    if (!response.ok) {
      return;
    }

    const html = await response.text();
    const parsed = new DOMParser().parseFromString(html, "text/html");
    const cardMap = new Map();

    parsed.querySelectorAll(".hub-page a.article-card[href]").forEach((card) => {
      const href = card.getAttribute("href");

      if (!href || cardMap.has(href)) {
        return;
      }

      const paragraphs = Array.from(card.querySelectorAll("p"));
      const summary = paragraphs.find((paragraph) => !paragraph.classList.contains("article-card__subtitle"))?.textContent?.trim() || "";

      cardMap.set(href, {
        href,
        imageSrc: card.querySelector("img")?.getAttribute("src") || "",
        imageAlt: card.querySelector("img")?.getAttribute("alt") || "",
        tag: card.querySelector(".article-card__tag")?.textContent?.trim() || "",
        title: card.querySelector("h3")?.textContent?.trim() || "",
        summary
      });
    });

    const orderedHrefs = [];
    const pushHref = (href) => {
      if (href && !orderedHrefs.includes(href) && cardMap.has(href)) {
        orderedHrefs.push(href);
      }
    };

    const latestNoteHrefs = Array.from(parsed.querySelectorAll(".hub-page__list-item[href]"))
      .map((item) => item.getAttribute("href"))
      .filter(Boolean)
      .reverse();

    const publicationCardHrefs = Array.from(parsed.querySelectorAll(".hub-page a.article-card[href]"))
      .map((item) => item.getAttribute("href"))
      .filter(Boolean)
      .reverse();

    latestNoteHrefs.forEach(pushHref);
    publicationCardHrefs.forEach(pushHref);

    const nextCards = orderedHrefs
      .slice(0, 7)
      .map((href, index) => buildHomeHubCard(cardMap.get(href), index));

    if (nextCards.length) {
      hubTrack.replaceChildren(...nextCards);
      currentHubIndex = 0;
      scrollHubTo(0, "auto");
      setupHomeHubDrag();
      fitArticleCardTitles();
      updateParallax();
    }
  } catch (error) {
    // Keep the inline fallback cards when hub feed loading fails.
  }
}

function parseWorksYear(card) {
  return Number(card.dataset.year || 0);
}

function compareWorksCards(firstCard, secondCard, sortValue) {
  if (sortValue === "oldest") {
    return parseWorksYear(firstCard) - parseWorksYear(secondCard);
  }

  if (sortValue === "title") {
    return (firstCard.dataset.title || "").localeCompare(secondCard.dataset.title || "");
  }

  return parseWorksYear(secondCard) - parseWorksYear(firstCard);
}

function updateWorksCount(visibleCards) {
  if (!worksCount) {
    return;
  }

  worksCount.textContent = `${visibleCards.length} project${visibleCards.length === 1 ? "" : "s"}`;
}

function syncWorksFilterButtons() {
  worksFilterButtons.forEach((button) => {
    const filterGroup = button.dataset.worksFilterGroup;
    const isActive = activeWorksFilters[filterGroup] === button.dataset.worksFilter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function applyWorksArchive() {
  if (!worksGrid) {
    return;
  }

  const worksCards = Array.from(worksGrid.querySelectorAll(".works-card"));

  worksCards.forEach((card) => {
    const matchesArea = activeWorksFilters.area === "all" || card.dataset.area === activeWorksFilters.area;
    const matchesRole = activeWorksFilters.role === "all" || card.dataset.role === activeWorksFilters.role;
    const matchesLocation = activeWorksFilters.location === "all" || card.dataset.location === activeWorksFilters.location;
    const matchesState = activeWorksFilters.state === "all" || card.dataset.state === activeWorksFilters.state;
    const isVisible = matchesArea && matchesRole && matchesLocation && matchesState;
    card.classList.toggle("is-hidden", !isVisible);
  });

  const visibleCards = worksCards.filter((card) => !card.classList.contains("is-hidden"));
  const hiddenCards = worksCards.filter((card) => card.classList.contains("is-hidden"));
  const sortValue = worksSortSelect?.value || "newest";
  const sortedVisibleCards = [...visibleCards].sort((firstCard, secondCard) => compareWorksCards(firstCard, secondCard, sortValue));

  worksGrid.replaceChildren(...sortedVisibleCards, ...hiddenCards);
  updateWorksCount(sortedVisibleCards);
}

function resetWorksFilters() {
  activeWorksFilters = {
    area: "all",
    role: "all",
    location: "all",
    state: "all"
  };
  if (worksSortSelect) {
    worksSortSelect.value = "newest";
  }

  syncWorksFilterButtons();
  applyWorksArchive();
}

function toggleWorksFilter(filterGroup, filterValue) {
  activeWorksFilters[filterGroup] = filterValue;
  syncWorksFilterButtons();
  applyWorksArchive();
}

function setupWorksArchive() {
  if (!worksGrid || !worksFilterButtons.length) {
    return;
  }

  worksFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      toggleWorksFilter(button.dataset.worksFilterGroup, button.dataset.worksFilter);
    });
  });

  worksSortSelect?.addEventListener("change", applyWorksArchive);
  worksClearButton?.addEventListener("click", resetWorksFilters);

  syncWorksFilterButtons();
  applyWorksArchive();
}

function setupWorksFilterAccordions() {
  if (!worksAccordionTriggers.length) {
    return;
  }

  worksAccordionTriggers.forEach((trigger) => {
    const panel = trigger.nextElementSibling;

    if (!panel) {
      return;
    }

    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", isOpen ? "false" : "true");
      trigger.classList.toggle("is-open", !isOpen);
      panel.hidden = isOpen;
    });
  });
}

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
    scrollElementTo(hubTrack, targetItem.offsetLeft, behavior);
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

  if (document.body.classList.contains("front-page")) {
    setupHomeHubDrag();
  }

  if (!hubTrack.dataset.hubCarouselBound) {
    hubButtons.forEach((button) => {
      button.addEventListener("click", () => {
        moveHub(Number(button.dataset.hubDir));
      });
    });

    hubTrack.addEventListener("scroll", () => {
      window.clearTimeout(hubScrollTimeoutId);
      hubScrollTimeoutId = window.setTimeout(updateHubFromScroll, 90);
    }, { passive: true });

    hubTrack.dataset.hubCarouselBound = "true";
  }

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

setupWorksArchive();
setupWorksFilterAccordions();
setupHubCarousel();
setupHubPublicationsPagination();
loadHomeHubFeed();
setupSatelliteGlobes();

setupScrollReveal();
fitArticleCardTitles();
updateParallax();
updateFrontHeaderState();

window.addEventListener("scroll", () => {
  updateParallax();
  updateFrontHeaderState();
}, { passive: true });
window.addEventListener("resize", () => {
  fitArticleCardTitles();
  updateParallax();
  updateFrontHeaderState();
  scrollHubTo(currentHubIndex, "auto");
});
