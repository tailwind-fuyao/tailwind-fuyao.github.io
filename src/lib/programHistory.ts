import type { Lang } from "@/lib/i18n";

export type HistoryYear = {
  year: string;
  name: string;
  stage: string;
  headline: string;
  summary: string;
  metrics: { value: string; label: string }[];
  highlights: string[];
  topics: string[];
  image: string;
};

export type HistoryContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    arcEyebrow: string;
    arcTitle: string;
  };
  overviewStats: { value: string; label: string }[];
  narrative: {
    eyebrow: string;
    title: string;
    chapters: { year: string; label: string; title: string; body: string }[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    phaseLabel: string;
  };
  impact: {
    eyebrow: string;
    title: string;
    description: string;
  };
  memory: {
    eyebrow: string;
    title: string;
    archiveLabel: string;
    imageAltPrefix: string;
  };
  years: HistoryYear[];
  impactStories: { title: string; body: string }[];
};

export type HistoryGalleryImage = {
  src: string;
  year: string;
  alt: string;
};

const historyImages = {
  2024: "/images/gallery/boya-2024-outdoor-group.jpg",
  2025: "/images/gallery/boxphoto47.jpg",
  2026: "/images/gallery/fuyao-2026-opening-01.jpg",
};

export const HISTORY_CONTENT: Record<Lang, HistoryContent> = {
  zh: {
    hero: {
      eyebrow: "历年成果",
      title: "从博雅到扶摇 见证湾区华人成长网络",
      description:
        "三年间，项目从导师制社区实验，成长为连接导师、助教、志愿者、学员和校友网络的系统化职业成长平台。",
      primaryCta: "查看导师网络",
      secondaryCta: "回到首页活动回顾",
      imageAlt: "扶摇计划活动回顾",
      arcEyebrow: "三年成长",
      arcTitle: "2024 验证 · 2025 成型 · 2026 升级",
    },
    overviewStats: [
      { value: "3", label: "期成长记录" },
      { value: "300+", label: "累计报名与参与" },
      { value: "20+", label: "导师与飞行导师网络" },
    ],
    narrative: {
      eyebrow: "叙事主线",
      title: "扶摇不是一次活动 而是一套持续进化的成长系统",
      chapters: [
        {
          year: "2024",
          label: "验证",
          title: "先证明湾区华人职场导师制成立",
          body: "从导师小组和线下活动开始，项目验证了真实职场问题可以被社区经验、同辈支持和资深导师共同解决。",
        },
        {
          year: "2025",
          label: "成型",
          title: "再把活动变成可复用的项目机制",
          body: "导师、助教、学员和志愿者开始形成稳定协作，开幕式、小组讨论、主题活动和结业反馈成为可复制的年度节奏。",
        },
        {
          year: "2026",
          label: "升级",
          title: "最后沉淀为长期职业成长平台",
          body: "匹配流程、导师分层、反馈追踪和活动统筹被系统化，让扶摇从年度项目升级为可持续运营的湾区职业成长网络。",
        },
      ],
    },
    timeline: {
      eyebrow: "成长脉络",
      title: "每一年都不是重复 而是在继续搭建更完整的成长系统",
      phaseLabel: "阶段",
    },
    impact: {
      eyebrow: "成果系统",
      title: "过往成绩不是陈列 而是今天继续升级的基础设施",
      description:
        "每一年的导师经验、学员问题、活动反馈和志愿者协作，都被沉淀进下一年的机制里，形成越来越清晰的职业成长操作系统。",
    },
    memory: {
      eyebrow: "精彩瞬间",
      title: "这些现场记录扶摇一路成长的瞬间",
      archiveLabel: "记录",
      imageAltPrefix: "扶摇计划历史影像",
    },
    years: [
      {
        year: "2024",
        name: "博雅计划",
        stage: "项目验证期",
        headline: "从一次导师制实验开始，验证湾区华人职场社区的力量",
        summary:
          "2024 年，项目以博雅计划的形式启动，通过导师小组、集体活动、职场主题讨论和线下交流，验证了湾区华人职场导师制的价值。",
        metrics: [
          { value: "144", label: "报名人数" },
          { value: "80", label: "录取学员" },
          { value: "15", label: "导师参与" },
          { value: "7", label: "集体活动" },
        ],
        highlights: [
          "15 个小组中期合并为 6 个大组，形成跨组交流机制。",
          "全年覆盖女性领导力、人工智能与生物科技、向上管理、烧烤、茶话会、徒步等活动。",
          "小组讨论沉淀出招聘应聘、晋升、公司文化、从个人贡献者到管理者、创业与人工智能行业等主题。",
        ],
        topics: ["向上管理", "人工智能与生物科技", "晋升路径", "职场沟通", "从个人贡献者到管理者"],
        image: historyImages[2024],
      },
      {
        year: "2025",
        name: "扶摇计划",
        stage: "品牌成型期",
        headline: "扶摇计划成型，导师、助教、学员和活动机制开始稳定运转",
        summary:
          "2025 年，项目升级为扶摇计划，设立新人与职业早期赛道，引入往届学员担任助教，形成更完整的传承型职业成长社区。",
        metrics: [
          { value: "147", label: "报名人数" },
          { value: "70", label: "录取学员" },
          { value: "9.31", label: "满意度/10" },
          { value: "~100", label: "小组活动" },
        ],
        highlights: [
          "全年完成开幕式、科技职场交流会、湾区创业交流会、烧烤、领导力风格讲座、使命峰徒步、茶话会与结业式。",
          "14 位常驻导师、5 位飞行导师和约 50 名志愿者共同支持 70 名学员。",
          "多个小组沉淀出职业目标、影响力、组织政治、个人品牌、人工智能时代职业策略等深度主题。",
        ],
        topics: ["职业路径图", "领导力", "创业交流", "个人品牌", "人工智能影响"],
        image: historyImages[2025],
      },
      {
        year: "2026",
        name: "扶摇计划",
        stage: "系统升级期",
        headline: "从活动项目走向系统化职业成长平台",
        summary:
          "2026 年，扶摇计划继续升级，建立导师招募、志愿者协作、导师学员匹配、反馈追踪和活动统筹等标准流程，让项目具备可持续运营能力。",
        metrics: [
          { value: "137", label: "报名人数" },
          { value: "57%", label: "录取率" },
          { value: "21%", label: "管理岗+" },
          { value: "22", label: "导师照片素材" },
        ],
        highlights: [
          "根据职业方向、经验背景、行业、职级和地域进行小规模精准匹配。",
          "小组结构升级为导师、主队长、轮值队长、学员和 2 至 3 位实习助教。",
          "导师角色拆分为常驻导师和飞行导师，覆盖小组带领、专题分享、圆桌讨论和一对一辅导。",
        ],
        topics: ["匹配流程", "导师分层", "结构化培养", "人才网络", "湾区网络"],
        image: historyImages[2026],
      },
    ],
    impactStories: [
      {
        title: "从单点活动到长期社区",
        body: "项目逐步从年度活动，演化为导师、助教、志愿者、学员共同维护的长期职业成长网络。",
      },
      {
        title: "从经验分享到结构化匹配",
        body: "2026 年开始强化匹配标准流程，让导师选择、学员意向、行业方向和职级目标有更清晰的协同机制。",
      },
      {
        title: "从职场问题到成长方法论",
        body: "小组讨论覆盖晋升、向上管理、组织协作、职业路线、技术视野和人工智能时代领导力，形成可复用的成长资产。",
      },
    ],
  },
  tw: {
    hero: {
      eyebrow: "歷年成果",
      title: "從博雅到扶搖 見證灣區華人成長網路",
      description:
        "三年間，專案從導師制社群實驗，成長為連接導師、助教、志工、學員和校友網路的系統化職涯成長平台。",
      primaryCta: "查看導師網路",
      secondaryCta: "回到首頁活動回顧",
      imageAlt: "扶搖計畫活動回顧",
      arcEyebrow: "三年成長",
      arcTitle: "2024 驗證 · 2025 成型 · 2026 升級",
    },
    overviewStats: [
      { value: "3", label: "期成長紀錄" },
      { value: "300+", label: "累計報名與參與" },
      { value: "20+", label: "導師與飛行導師網路" },
    ],
    narrative: {
      eyebrow: "敘事主線",
      title: "扶搖不是一次活動 而是一套持續進化的成長系統",
      chapters: [
        {
          year: "2024",
          label: "驗證",
          title: "先證明灣區華人職場導師制成立",
          body: "從導師小組和線下活動開始，專案驗證了真實職場問題可以被社群經驗、同儕支持和資深導師共同解決。",
        },
        {
          year: "2025",
          label: "成型",
          title: "再把活動變成可複用的專案機制",
          body: "導師、助教、學員和志工開始形成穩定協作，開幕式、小組討論、主題活動和結業回饋成為可複製的年度節奏。",
        },
        {
          year: "2026",
          label: "升級",
          title: "最後沉澱為長期職涯成長平台",
          body: "匹配流程、導師分層、回饋追蹤和活動統籌被系統化，讓扶搖從年度專案升級為可持續營運的灣區職涯成長網路。",
        },
      ],
    },
    timeline: {
      eyebrow: "成長脈絡",
      title: "每一年都不是重複 而是在繼續搭建更完整的成長系統",
      phaseLabel: "階段",
    },
    impact: {
      eyebrow: "成果系統",
      title: "過往成果不是陳列 而是今天繼續升級的基礎設施",
      description:
        "每一年的導師經驗、學員問題、活動回饋和志工協作，都被沉澱進下一年的機制裡，形成越來越清晰的職涯成長操作系統。",
    },
    memory: {
      eyebrow: "精彩瞬間",
      title: "這些現場記錄扶搖一路成長的瞬間",
      archiveLabel: "紀錄",
      imageAltPrefix: "扶搖計畫歷史影像",
    },
    years: [
      {
        year: "2024",
        name: "博雅計畫",
        stage: "專案驗證期",
        headline: "從一次導師制實驗開始，驗證灣區華人職場社群的力量",
        summary:
          "2024 年，專案以博雅計畫的形式啟動，透過導師小組、集體活動、職場主題討論和線下交流，驗證了灣區華人職場導師制的價值。",
        metrics: [
          { value: "144", label: "報名人數" },
          { value: "80", label: "錄取學員" },
          { value: "15", label: "導師參與" },
          { value: "7", label: "集體活動" },
        ],
        highlights: [
          "15 個小組中期合併為 6 個大組，形成跨組交流機制。",
          "全年覆蓋女性領導力、人工智慧與生物科技、向上管理、烤肉、茶話會、健行等活動。",
          "小組討論沉澱出招募面試、晉升、公司文化、從個人貢獻者到管理者、創業與人工智慧產業等主題。",
        ],
        topics: ["向上管理", "人工智慧與生物科技", "晉升路徑", "職場溝通", "從個人貢獻者到管理者"],
        image: historyImages[2024],
      },
      {
        year: "2025",
        name: "扶搖計畫",
        stage: "品牌成型期",
        headline: "扶搖計畫成型，導師、助教、學員和活動機制開始穩定運轉",
        summary:
          "2025 年，專案升級為扶搖計畫，設立新人與職涯早期賽道，引入往屆學員擔任助教，形成更完整的傳承型職涯成長社群。",
        metrics: [
          { value: "147", label: "報名人數" },
          { value: "70", label: "錄取學員" },
          { value: "9.31", label: "滿意度/10" },
          { value: "~100", label: "小組活動" },
        ],
        highlights: [
          "全年完成開幕式、科技職場交流會、灣區創業交流會、烤肉、領導力風格講座、使命峰健行、茶話會與結業式。",
          "14 位常駐導師、5 位飛行導師和約 50 名志工共同支持 70 名學員。",
          "多個小組沉澱出職涯目標、影響力、組織政治、個人品牌、人工智慧時代職涯策略等深度主題。",
        ],
        topics: ["職涯路徑圖", "領導力", "創業交流", "個人品牌", "人工智慧影響"],
        image: historyImages[2025],
      },
      {
        year: "2026",
        name: "扶搖計畫",
        stage: "系統升級期",
        headline: "從活動專案走向系統化職涯成長平台",
        summary:
          "2026 年，扶搖計畫繼續升級，建立導師招募、志工協作、導師學員匹配、回饋追蹤和活動統籌等標準流程，讓專案具備可持續營運能力。",
        metrics: [
          { value: "137", label: "報名人數" },
          { value: "57%", label: "錄取率" },
          { value: "21%", label: "管理職+" },
          { value: "22", label: "導師照片素材" },
        ],
        highlights: [
          "根據職涯方向、經驗背景、產業、職級和地域進行小規模精準匹配。",
          "小組結構升級為導師、主隊長、輪值隊長、學員和 2 至 3 位實習助教。",
          "導師角色拆分為常駐導師和飛行導師，覆蓋小組帶領、專題分享、圓桌討論和一對一輔導。",
        ],
        topics: ["匹配流程", "導師分層", "結構化培養", "人才網路", "灣區網路"],
        image: historyImages[2026],
      },
    ],
    impactStories: [
      {
        title: "從單點活動到長期社群",
        body: "專案逐步從年度活動，演化為導師、助教、志工、學員共同維護的長期職涯成長網路。",
      },
      {
        title: "從經驗分享到結構化匹配",
        body: "2026 年開始強化匹配標準流程，讓導師選擇、學員意向、產業方向和職級目標有更清晰的協同機制。",
      },
      {
        title: "從職場問題到成長方法論",
        body: "小組討論覆蓋晉升、向上管理、組織協作、職涯路線、技術視野和人工智慧時代領導力，形成可複用的成長資產。",
      },
    ],
  },
  en: {
    hero: {
      eyebrow: "Program History",
      title: "From Boya to Fuyao: a growing Bay Area Chinese professional network",
      description:
        "Across three years, the program evolved from a mentorship community experiment into a structured career-growth platform connecting mentors, teaching assistants, volunteers, participants, and alumni.",
      primaryCta: "Explore mentors",
      secondaryCta: "Back to gallery",
      imageAlt: "Fuyao Program event record",
      arcEyebrow: "Three-Year Arc",
      arcTitle: "2024 Validation · 2025 Formation · 2026 Upgrade",
    },
    overviewStats: [
      { value: "3", label: "program cohorts" },
      { value: "300+", label: "applications and participants" },
      { value: "20+", label: "mentors and flying mentors" },
    ],
    narrative: {
      eyebrow: "Narrative Spine",
      title: "Fuyao is not a one-time event. It is an evolving career-growth operating system.",
      chapters: [
        {
          year: "2024",
          label: "Validate",
          title: "Prove that Bay Area Chinese mentorship can work",
          body: "Mentor groups and offline gatherings validated that real career problems can be solved through community experience, peer support, and senior mentors.",
        },
        {
          year: "2025",
          label: "Form",
          title: "Turn activities into a repeatable program model",
          body: "Mentors, TAs, participants, and volunteers began operating in a stable rhythm across kickoff, group sessions, themed events, and closing feedback.",
        },
        {
          year: "2026",
          label: "Upgrade",
          title: "Build a durable career-growth platform",
          body: "Matching, mentor tiers, feedback loops, and event operations became more structured, turning Fuyao into a sustainable Bay Area career network.",
        },
      ],
    },
    timeline: {
      eyebrow: "Growth Arc",
      title: "Each year builds a more complete career-growth system",
      phaseLabel: "Phase",
    },
    impact: {
      eyebrow: "Impact System",
      title: "Past outcomes are not a display case. They are the infrastructure for the next upgrade.",
      description:
        "Mentor experience, participant questions, event feedback, and volunteer operations are continuously folded into the next year’s operating model, turning community learning into a clearer career-growth system.",
    },
    memory: {
      eyebrow: "Highlights",
      title: "Moments that capture Fuyao’s growth journey",
      archiveLabel: "Record",
      imageAltPrefix: "Fuyao Program record image",
    },
    years: [
      {
        year: "2024",
        name: "Boya Program",
        stage: "Validation Stage",
        headline: "A mentorship experiment that proved the strength of a Bay Area Chinese professional community",
        summary:
          "In 2024, the program launched as Boya Program. Mentor groups, community events, career discussions, and offline gatherings validated the value of peer-supported mentorship in the Bay Area.",
        metrics: [
          { value: "144", label: "applications" },
          { value: "80", label: "participants" },
          { value: "15", label: "mentors" },
          { value: "7", label: "community events" },
        ],
        highlights: [
          "15 small groups were later merged into 6 larger groups, creating a cross-group exchange model.",
          "The year covered women’s leadership, AI x Biotech, Manage Up, BBQ, tea chats, hiking, and other community moments.",
          "Group discussions explored recruiting, promotion, company culture, IC-to-manager transitions, entrepreneurship, and AI industry shifts.",
        ],
        topics: ["Manage Up", "AI x Biotech", "Promotion", "Communication", "IC to Manager"],
        image: historyImages[2024],
      },
      {
        year: "2025",
        name: "Fuyao Program",
        stage: "Brand Formation",
        headline: "Fuyao took shape as mentors, TAs, participants, and events began operating as a repeatable system",
        summary:
          "In 2025, the program became Fuyao Program, added a New Grad / early-career track, and invited alumni participants to serve as teaching assistants, creating a more complete community flywheel.",
        metrics: [
          { value: "147", label: "applications" },
          { value: "70", label: "participants" },
          { value: "9.31", label: "satisfaction/10" },
          { value: "~100", label: "group activities" },
        ],
        highlights: [
          "The year included the opening ceremony, tech career salons, Bay Area startup exchange, BBQ, leadership-style sessions, Mission Peak hiking, tea chats, and the closing ceremony.",
          "14 resident mentors, 5 flying mentors, and around 50 volunteers supported 70 participants.",
          "Groups developed deeper themes around career goals, influence, organizational politics, personal branding, and career strategy in the AI era.",
        ],
        topics: ["Career Graph", "Leadership", "Startup", "Personal Brand", "AI Impact"],
        image: historyImages[2025],
      },
      {
        year: "2026",
        name: "Fuyao Program",
        stage: "System Upgrade",
        headline: "From event program to structured career-growth platform",
        summary:
          "In 2026, Fuyao continued upgrading its operating model with mentor recruiting, volunteer collaboration, mentor-participant matching, feedback loops, and event-planning SOPs for sustainable operation.",
        metrics: [
          { value: "137", label: "applications" },
          { value: "57%", label: "acceptance rate" },
          { value: "21%", label: "Manager+" },
          { value: "22", label: "mentor photo assets" },
        ],
        highlights: [
          "Matching became more precise by career direction, experience background, industry, level, and location.",
          "Group structure was upgraded to include mentors, lead captains, rotating captains, participants, and 2 to 3 intern teaching assistants.",
          "Mentor roles were split into resident mentors and flying mentors, supporting group leadership, topic sharing, panels, and one-on-one guidance.",
        ],
        topics: ["Matching SOP", "Mentor Level", "Structured Training", "Talent Cloud", "Bay Area Network"],
        image: historyImages[2026],
      },
    ],
    impactStories: [
      {
        title: "From one-off events to a long-term community",
        body: "The program has gradually evolved from an annual event series into a durable career-growth network maintained by mentors, TAs, volunteers, and participants.",
      },
      {
        title: "From experience sharing to structured matching",
        body: "Starting in 2026, Fuyao strengthened its matching SOP so mentor selection, participant intent, industry direction, and career-level goals can align more clearly.",
      },
      {
        title: "From career questions to a reusable growth method",
        body: "Group discussions now span promotion, managing up, organizational collaboration, career paths, technical perspective, and leadership in the AI era.",
      },
    ],
  },
};

const historyGalleryBase = [
  "/images/gallery/boya-2024-outdoor-group.jpg",
  "/images/gallery/boya-2024-community-bbq.jpg",
  "/images/gallery/boxphoto47.jpg",
  "/images/gallery/boxphoto16.jpg",
  "/images/gallery/boxphoto21.jpg",
  "/images/gallery/boxphoto38.jpg",
  "/images/gallery/boxphoto26.jpg",
  "/images/gallery/boxphoto59.jpg",
  "/images/gallery/fuyao-2025-closing-audience.jpg",
  "/images/gallery/fuyao-2025-opening-social.jpg",
  "/images/gallery/fuyao-2026-opening-01.jpg",
  "/images/gallery/fuyao-2026-opening-02.jpg",
  "/images/gallery/fuyao-2026-group-songsheng.jpg",
  "/images/gallery/fuyao-2026-group-pengliang.jpg",
] as const;

export const historyGalleryImages: Record<Lang, HistoryGalleryImage[]> = {
  zh: [
    { src: historyGalleryBase[0], year: "2024", alt: "2024 博雅计划户外交流与导师小组合影" },
    { src: historyGalleryBase[1], year: "2024", alt: "2024 博雅计划社区烧烤与跨组交流" },
    { src: historyGalleryBase[2], year: "2025", alt: "2025 扶摇计划开幕式导师与志愿者合影" },
    { src: historyGalleryBase[3], year: "2025", alt: "2025 开幕式现场 — 导师致辞与项目介绍" },
    { src: historyGalleryBase[4], year: "2025", alt: "2025 导师与学员面对面交流" },
    { src: historyGalleryBase[8], year: "2025", alt: "2025 结业回顾现场 — 学员认真聆听" },
    { src: historyGalleryBase[9], year: "2025", alt: "2025 扶摇计划社群交流与餐叙" },
    { src: historyGalleryBase[10], year: "2026", alt: "2026 扶摇计划开幕式现场" },
    { src: historyGalleryBase[12], year: "2026", alt: "2026 宋晟导师组小组活动" },
    { src: historyGalleryBase[13], year: "2026", alt: "2026 彭亮导师组小组活动" },
  ],
  tw: [
    { src: historyGalleryBase[0], year: "2024", alt: "2024 博雅計劃戶外交流與導師小組合影" },
    { src: historyGalleryBase[1], year: "2024", alt: "2024 博雅計劃社群烤肉與跨組交流" },
    { src: historyGalleryBase[2], year: "2025", alt: "2025 扶搖計劃開幕式導師與志願者合影" },
    { src: historyGalleryBase[3], year: "2025", alt: "2025 開幕式現場 — 導師致辭與項目介紹" },
    { src: historyGalleryBase[4], year: "2025", alt: "2025 導師與學員面對面交流" },
    { src: historyGalleryBase[8], year: "2025", alt: "2025 結業回顧現場 — 學員認真聆聽" },
    { src: historyGalleryBase[9], year: "2025", alt: "2025 扶搖計劃社群交流與餐敘" },
    { src: historyGalleryBase[10], year: "2026", alt: "2026 扶搖計劃開幕式現場" },
    { src: historyGalleryBase[12], year: "2026", alt: "2026 宋晟導師組小組活動" },
    { src: historyGalleryBase[13], year: "2026", alt: "2026 彭亮導師組小組活動" },
  ],
  en: [
    { src: historyGalleryBase[0], year: "2024", alt: "2024 Boya Program outdoor mentor-group gathering" },
    { src: historyGalleryBase[1], year: "2024", alt: "2024 Boya community BBQ and cross-group exchange" },
    { src: historyGalleryBase[2], year: "2025", alt: "2025 Fuyao kickoff — mentors and volunteers" },
    { src: historyGalleryBase[3], year: "2025", alt: "2025 kickoff — mentor address and program introduction" },
    { src: historyGalleryBase[4], year: "2025", alt: "2025 mentors and mentees in face-to-face exchange" },
    { src: historyGalleryBase[8], year: "2025", alt: "2025 closing review — participants listening in session" },
    { src: historyGalleryBase[9], year: "2025", alt: "2025 Fuyao community dinner and social exchange" },
    { src: historyGalleryBase[10], year: "2026", alt: "2026 Fuyao Program opening ceremony" },
    { src: historyGalleryBase[12], year: "2026", alt: "2026 Song Sheng mentor group session" },
    { src: historyGalleryBase[13], year: "2026", alt: "2026 Liang Peng mentor group session" },
  ],
};
