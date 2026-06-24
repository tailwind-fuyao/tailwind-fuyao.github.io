import type {
  NavItem,
  Mentor,
  TimelineItem,
  Highlight,
  Stat,
  ActivityPhoto,
  Sponsor,
  ContactInfo,
} from "@/types";

export type Lang = "zh" | "tw" | "en";
export const DEFAULT_LANG: Lang = "zh";
export const LANG_COOKIE_NAME = "fuyao-lang";
export const HTML_LANG: Record<Lang, string> = { zh: "zh-CN", tw: "zh-TW", en: "en" };

export function isLang(value: string | null | undefined): value is Lang {
  return value === "zh" || value === "tw" || value === "en";
}

export interface PastTimelineItem extends TimelineItem {
  image?: string;
}

export interface TeamGroup {
  role: string;
  members: string[];
}

export const LANG_OPTIONS: { value: Lang; short: string; full: string }[] = [
  { value: "zh", short: "简", full: "简体中文" },
  { value: "tw", short: "繁", full: "繁體中文" },
  { value: "en", short: "EN", full: "English" },
];

interface ContentShape {
  SITE_NAME: string;
  SITE_DESCRIPTION: string;
  NAV_ITEMS: NavItem[];
  HERO: { badge: string; title: string; subtitle: string; cta: string };
  CHROME: {
    rails: { left: string; right: string };
    ticker: string[];
    telemetry: { kicker: string; title: string; description: string }[];
  };
  ABOUT: { tagline: string; title: string; paragraphs: string[] };
  STATS: Stat[];
  HIGHLIGHTS_SECTION: { tagline: string; title: string };
  HIGHLIGHTS: Highlight[];
  MENTORS_SECTION: {
    tagline: string;
    title: string;
    tabs: { resident: string; flying: string };
  };
  MENTORS: Mentor[];
  TIMELINE_SECTION: { tagline: string; title: string };
  TIMELINE: TimelineItem[];
  GALLERY_SECTION: {
    tagline: string;
    title: string;
    summary: string;
    activityTimeline: string;
    highlights: string;
  };
  GALLERY_STATS: Stat[];
  PAST_TIMELINE: PastTimelineItem[];
  ACTIVITY_PHOTOS: ActivityPhoto[];
  TEAM_SECTION: { tagline: string; title: string };
  TEAM: TeamGroup[];
  SPONSORS_SECTION: { tagline: string; title: string };
  SPONSORS: Sponsor[];
  PARTNERS_SECTION: { tagline: string; title: string; placeholder: string };
  CONTACT_SECTION: {
    tagline: string;
    title: string;
    description: string;
    emailLabel: string;
    wechatLabel: string;
  };
  CONTACT_INFO: ContactInfo;
  FOOTER: {
    description: string;
    copyright: string;
    quickLinks: string;
    contactWay: string;
    language: string;
  };
  ARIA: { openMenu: string; closeMenu: string };
}

const MENTORS: Mentor[] = [
  { name: "Liang Peng", title: "SVP, Futurewei Technologies, Head of IC Lab", image: "/images/mentors/liang-peng.png", type: "resident" },
  { name: "Michael Zhu", title: "Chief Scientist of Xinxi Capital, ex-Corporate VP at Meituan", image: "/images/mentors/michael-zhu.png", type: "resident" },
  { name: "Chris Xu", title: "Senior Director, Google Cloud Trust & Safety", image: "/images/mentors/chris-xu.png", type: "resident" },
  { name: "Kai Zheng", title: "Executive Director, Formulation & Process Development, Gilead Sciences", image: "/images/mentors/kai-zheng.png", type: "resident" },
  { name: "Ming Wu", title: "Ex-Senior Director at Gilead Sciences", image: "/images/mentors/ming-wu.png", type: "resident" },
  { name: "Jichuan Chang", title: "Director of Engineering at Google", image: "/images/mentors/jichuan-chang.png", type: "resident" },
  { name: "Jun Lang", title: "VP Product Management, ASML", image: "/images/mentors/jun-lang.png", type: "resident" },
  { name: "Yan Xie", title: "Director of Engineering at Webflow", image: "/images/mentors/yan-xie.png", type: "resident" },
  { name: "Guoying Liu", title: "Data Science Leader", image: "/images/mentors/guoying-liu.png", type: "resident" },
  { name: "Sheng Song", title: "Senior Tech Leader", image: "/images/mentors/sheng-song.png", type: "resident" },
  { name: "Lei Xia", title: "Senior Leader, Tech Industry", image: "/images/mentors/lei-xia.png", type: "resident" },
  { name: "Dawei Cai", title: "Director, Atea Pharmaceuticals", image: "/images/mentors/dawei-cai.png", type: "resident" },
  { name: "Sam Liu", title: "Senior Director at OKX", image: "/images/mentors/sam-liu.png", type: "resident" },
  { name: "Mike Zhao", title: "Senior Tech Leader", image: "/images/mentors/michael-zhao.png", type: "resident" },
  { name: "Bo Zhao", title: "Director of Engineering at Pinterest", image: "/images/mentors/bo-zhao.png", type: "flying" },
  { name: "Yanmin Tao", title: "PMP, Senior Project Manager", image: "/images/mentors/yanmin-tao.png", type: "flying" },
  { name: "Weiwei Sun", title: "Senior Director at Siemens", image: "/images/mentors/weiwei-sun.png", type: "flying" },
  { name: "Jim Li", title: "SVP, Advanced Fiber Resource", image: "/images/mentors/jim-li.png", type: "flying" },
  { name: "Baofu Zheng", title: "President, Shanghai Haoyuan Chemexpress Co., Ltd", image: "/images/mentors/baofu-zheng.png", type: "flying" },
  { name: "Tianshen Tang", title: "Board member of Moffett AI, ex-EVP at SMIC", image: "/images/mentors/tianshen-tang.png", type: "flying" },
  { name: "Wei Liu", title: "VP at Visa", image: "/images/mentors/wei-liu.png", type: "flying" },
  { name: "Junqiang Lan", title: "Director, Meta Infra Silicon", image: "/images/mentors/junqiang-lan.png", type: "flying" },
  { name: "Hanning Zhou", title: "Head of Search Quality, DoorDash", image: "", type: "flying" },
  { name: "Yiqun Cai", title: "VP Engineering at Microsoft", image: "", type: "flying" },
];

const MENTORS_ZH: Mentor[] = [
  { name: "Liang Peng", title: "高级副总裁、集成电路实验室负责人", image: "/images/mentors/liang-peng.png", type: "resident" },
  { name: "Michael Zhu", title: "首席科学家、前集团副总裁", image: "/images/mentors/michael-zhu.png", type: "resident" },
  { name: "Chris Xu", title: "云安全与信任高级总监", image: "/images/mentors/chris-xu.png", type: "resident" },
  { name: "Kai Zheng", title: "制剂与工艺开发执行总监", image: "/images/mentors/kai-zheng.png", type: "resident" },
  { name: "Ming Wu", title: "前生物医药行业高级总监", image: "/images/mentors/ming-wu.png", type: "resident" },
  { name: "Jichuan Chang", title: "工程总监", image: "/images/mentors/jichuan-chang.png", type: "resident" },
  { name: "Jun Lang", title: "产品管理副总裁", image: "/images/mentors/jun-lang.png", type: "resident" },
  { name: "Yan Xie", title: "工程总监", image: "/images/mentors/yan-xie.png", type: "resident" },
  { name: "Guoying Liu", title: "数据科学负责人", image: "/images/mentors/guoying-liu.png", type: "resident" },
  { name: "Sheng Song", title: "资深技术负责人", image: "/images/mentors/sheng-song.png", type: "resident" },
  { name: "Lei Xia", title: "科技行业资深负责人", image: "/images/mentors/lei-xia.png", type: "resident" },
  { name: "Dawei Cai", title: "医药行业总监", image: "/images/mentors/dawei-cai.png", type: "resident" },
  { name: "Sam Liu", title: "金融科技行业高级总监", image: "/images/mentors/sam-liu.png", type: "resident" },
  { name: "Mike Zhao", title: "资深技术负责人", image: "/images/mentors/michael-zhao.png", type: "resident" },
  { name: "Bo Zhao", title: "工程总监", image: "/images/mentors/bo-zhao.png", type: "flying" },
  { name: "Yanmin Tao", title: "资深项目经理、项目管理专业人士", image: "/images/mentors/yanmin-tao.png", type: "flying" },
  { name: "Weiwei Sun", title: "工业科技行业高级总监", image: "/images/mentors/weiwei-sun.png", type: "flying" },
  { name: "Jim Li", title: "高级副总裁", image: "/images/mentors/jim-li.png", type: "flying" },
  { name: "Baofu Zheng", title: "上海皓元医药股份有限公司总裁", image: "/images/mentors/baofu-zheng.png", type: "flying" },
  { name: "Tianshen Tang", title: "董事、前半导体行业执行副总裁", image: "/images/mentors/tianshen-tang.png", type: "flying" },
  { name: "Wei Liu", title: "支付科技行业副总裁", image: "/images/mentors/wei-liu.png", type: "flying" },
  { name: "Junqiang Lan", title: "基础设施芯片总监", image: "/images/mentors/junqiang-lan.png", type: "flying" },
  { name: "Hanning Zhou", title: "搜索质量负责人", image: "", type: "flying" },
  { name: "Yiqun Cai", title: "工程副总裁", image: "", type: "flying" },
];

const MENTORS_TW: Mentor[] = [
  { name: "Liang Peng", title: "資深副總裁、積體電路實驗室負責人", image: "/images/mentors/liang-peng.png", type: "resident" },
  { name: "Michael Zhu", title: "首席科學家、前集團副總裁", image: "/images/mentors/michael-zhu.png", type: "resident" },
  { name: "Chris Xu", title: "雲端安全與信任資深總監", image: "/images/mentors/chris-xu.png", type: "resident" },
  { name: "Kai Zheng", title: "製劑與製程開發執行總監", image: "/images/mentors/kai-zheng.png", type: "resident" },
  { name: "Ming Wu", title: "前生物醫藥產業資深總監", image: "/images/mentors/ming-wu.png", type: "resident" },
  { name: "Jichuan Chang", title: "工程總監", image: "/images/mentors/jichuan-chang.png", type: "resident" },
  { name: "Jun Lang", title: "產品管理副總裁", image: "/images/mentors/jun-lang.png", type: "resident" },
  { name: "Yan Xie", title: "工程總監", image: "/images/mentors/yan-xie.png", type: "resident" },
  { name: "Guoying Liu", title: "資料科學負責人", image: "/images/mentors/guoying-liu.png", type: "resident" },
  { name: "Sheng Song", title: "資深技術負責人", image: "/images/mentors/sheng-song.png", type: "resident" },
  { name: "Lei Xia", title: "科技產業資深負責人", image: "/images/mentors/lei-xia.png", type: "resident" },
  { name: "Dawei Cai", title: "醫藥產業總監", image: "/images/mentors/dawei-cai.png", type: "resident" },
  { name: "Sam Liu", title: "金融科技產業資深總監", image: "/images/mentors/sam-liu.png", type: "resident" },
  { name: "Mike Zhao", title: "資深技術負責人", image: "/images/mentors/michael-zhao.png", type: "resident" },
  { name: "Bo Zhao", title: "工程總監", image: "/images/mentors/bo-zhao.png", type: "flying" },
  { name: "Yanmin Tao", title: "資深專案經理、專案管理專業人士", image: "/images/mentors/yanmin-tao.png", type: "flying" },
  { name: "Weiwei Sun", title: "工業科技產業資深總監", image: "/images/mentors/weiwei-sun.png", type: "flying" },
  { name: "Jim Li", title: "資深副總裁", image: "/images/mentors/jim-li.png", type: "flying" },
  { name: "Baofu Zheng", title: "上海皓元醫藥股份有限公司總裁", image: "/images/mentors/baofu-zheng.png", type: "flying" },
  { name: "Tianshen Tang", title: "董事、前半導體產業執行副總裁", image: "/images/mentors/tianshen-tang.png", type: "flying" },
  { name: "Wei Liu", title: "支付科技產業副總裁", image: "/images/mentors/wei-liu.png", type: "flying" },
  { name: "Junqiang Lan", title: "基礎設施晶片總監", image: "/images/mentors/junqiang-lan.png", type: "flying" },
  { name: "Hanning Zhou", title: "搜尋品質負責人", image: "", type: "flying" },
  { name: "Yiqun Cai", title: "工程副總裁", image: "", type: "flying" },
];

const CONTACT_INFO: ContactInfo = {
  email: "tailwind.connect@gmail.com",
  wechat: "Mingye-X",
};

const PHOTO_SRC = [
  "/images/gallery/boxphoto47.jpg",
  "/images/gallery/boxphoto16.jpg",
  "/images/gallery/boxphoto21.jpg",
  "/images/gallery/boxphoto38.jpg",
  "/images/gallery/boxphoto26.jpg",
  "/images/gallery/boxphoto59.jpg",
  "/images/gallery/boxphoto7.jpg",
  "/images/gallery/boxphoto87.jpg",
  "/images/gallery/boxphoto66.jpg",
];

const PAST_TL_IMG = [
  "/images/gallery/boxphoto47.jpg",
  "/images/gallery/boxphoto16.jpg",
  "/images/gallery/boxphoto7.jpg",
  "/images/gallery/boxphoto59.jpg",
  "/images/gallery/boxphoto87.jpg",
  "/images/gallery/boxphoto66.jpg",
  "/images/gallery/boxphoto21.jpg",
  "/images/gallery/boxphoto26.jpg",
];

const SPONSOR_LOGO = [
  "/images/pptx/slide17_img4.jpg",
  "/images/fudan_logo.png",
  "/images/pptx/slide17_img6.jpg",
  "/images/pptx/slide17_img5.jpg",
  "/images/wuda_logo.jpg",
];

const year = new Date().getFullYear();

// ── 简体中文 (zh) ────────────────────────────────────────────
const zh: ContentShape = {
  SITE_NAME: "扶摇计划",
  SITE_DESCRIPTION: "五大名校校友会联合发起，硅谷导师一对一助你突破华人职场天花板",
  NAV_ITEMS: [
    { label: "关于我们", href: "/#about" },
    { label: "导师团队", href: "/#mentors" },
    { label: "历年成果", href: "/history" },
    { label: "往期活动", href: "/#gallery" },
    { label: "赞助品牌", href: "/#sponsors" },
    { label: "联系我们", href: "/#contact" },
  ],
  HERO: {
    badge: "扶摇计划 · 2026",
    title: "扶摇万里 领航未来",
    subtitle: "五大名校校友会联合发起，硅谷导师一对一助你突破职场天花板",
    cta: "了解更多",
  },
  CHROME: {
    rails: { left: "硅谷 / 人工智能人才云", right: "导师网络 / 湾区连接" },
    ticker: ["人工智能成长计划", "湾区导师网络", "职业成长图谱", "创业信号", "全球人才云", "硅谷网络在线"],
    telemetry: [
      { kicker: "湾区节点", title: "硅谷人工智能信号", description: "导师图谱已连接" },
      { kicker: "人才云", title: "硅谷网络", description: "职业加速层运行中" },
    ],
  },
  ABOUT: {
    tagline: "关于扶摇计划",
    title: "助力华人职场突破",
    paragraphs: [
      "扶摇计划致力于联系硅谷中高层管理人，培养未来北美华人职场领导力，帮助更多华人实现职场突破。通过长达八个月的深度陪伴式成长平台，真正陪伴学员跨越职场瓶颈。",
      "扶摇计划由北京大学北加州校友会、南京大学旧金山湾区校友会、复旦大学北加州校友会、南开美国北加州校友会、武汉大学北加州校友会五大高校校友会联合主办，特邀行业内资深导师，实现华人职场经验与文化的传承，帮助下一代职场管理人的发展。",
    ],
  },
  STATS: [
    { value: "137", label: "报名人数" },
    { value: "57%", label: "录取率" },
    { value: "21%", label: "经理及以上" },
    { value: "70", label: "精英学员" },
  ],
  HIGHLIGHTS_SECTION: { tagline: "2026 全新升级", title: "项目亮点" },
  HIGHLIGHTS: [
    { icon: "GraduationCap", title: "新锐赛道", description: "特设新人和职业早期赛道，为职场新人提供高起点的职业规划" },
    { icon: "Users", title: "传帮带生态", description: "往届优秀学员回归担任助教，打造互助传承的成长社区" },
    { icon: "Briefcase", title: "导师矩阵扩容", description: "14 位常驻导师 + 10 位飞行导师，全面辐射软件、生物制药、硬件等硅谷核心产业" },
    { icon: "Target", title: "1:5 精准匹配", description: "黄金师生比 + 多轮反馈机制，1导师 + 助教 + 队长 + 学员深度互动" },
  ],
  MENTORS_SECTION: {
    tagline: "导师团队",
    title: "硅谷资深高管倾力指导",
    tabs: { resident: "常驻导师", flying: "飞行导师" },
  },
  MENTORS: MENTORS_ZH,
  TIMELINE_SECTION: { tagline: "项目安排", title: "2026 年度计划" },
  TIMELINE: [
    { date: "2026 年 1 月 - 2 月", title: "方案讨论 · 招募启动", description: "活动方案讨论，导师与志愿者招募，2 月中旬开放学员报名" },
    { date: "2026 年 3 月", title: "筛选匹配 · 开幕式", description: "学员筛选与导师匹配完成，3 月下旬举办项目开幕式暨小组破冰" },
    { date: "2026 年 4 月 - 9 月", title: "项目活动", description: "每月 1 次集体活动（圆桌讨论、讲座、户外交流等），每月 1 次小组讨论，导师学员 1:1 深度交流，后期多组合并讨论" },
    { date: "2026 年 7 月", title: "中期反馈", description: "中期反馈追踪，助教团队协助调整小组节奏" },
    { date: "2026 年 10 月", title: "结营仪式", description: "结业反馈追踪，总结与展望，校友网络持续连接" },
  ],
  GALLERY_SECTION: {
    tagline: "往期活动",
    title: "2025 精彩回顾",
    summary: "2025 年扶摇计划历时八个月，14 位常驻导师与 5 位飞行导师倾囊相授，70 名学员完成了 8 次全体活动和近 100 次小组深度交流，学员满意度高达 9.31/10。",
    activityTimeline: "活动轨迹",
    highlights: "精彩瞬间",
  },
  GALLERY_STATS: [
    { value: "8", label: "场全体活动" },
    { value: "~100", label: "次小组交流" },
    { value: "9.31", label: "满意度 /10" },
    { value: "19", label: "位导师参与" },
  ],
  PAST_TIMELINE: [
    { date: "2025 年 3 月", title: "开幕式", description: "导师学员首次见面，小组破冰，70 名学员与 14 位导师正式结对", image: PAST_TL_IMG[0] },
    { date: "2025 年 4 月", title: "职场分享讲座", description: "导师分享职业历程与管理心得，学员小组讨论启动", image: PAST_TL_IMG[1] },
    { date: "2025 年 5 月", title: "圆桌讨论", description: "行业大咖闭门对话，聚焦人工智能、生物科技等前沿趋势", image: PAST_TL_IMG[2] },
    { date: "2025 年 6 月", title: "夏季户外交流 · 大组合并", description: "户外社交与跨组交流，打破小组边界", image: PAST_TL_IMG[3] },
    { date: "2025 年 7 月", title: "中期反馈 · 茶话会", description: "收集学员反馈，调整小组节奏，深度交流职场困惑", image: PAST_TL_IMG[4] },
    { date: "2025 年 8 月", title: "跨组讨论", description: "多组合并研讨，拓展人脉与视野", image: PAST_TL_IMG[5] },
    { date: "2025 年 9 月", title: "职场实战分享", description: "导师一对一深度对话，学员成果沉淀", image: PAST_TL_IMG[6] },
    { date: "2025 年 10 月", title: "结业式", description: "总结与展望，颁发奖杯与奖状，校友网络持续连接", image: PAST_TL_IMG[7] },
  ],
  ACTIVITY_PHOTOS: [
    { src: PHOTO_SRC[0], alt: "2025 扶摇计划开幕式导师与志愿者合影" },
    { src: PHOTO_SRC[1], alt: "导师致辞 — 分享职业历程与管理心得" },
    { src: PHOTO_SRC[2], alt: "导师演讲 — 从康奈尔到英伟达的职业旅程" },
    { src: PHOTO_SRC[3], alt: "活动介绍 — 2025 全新特色发布" },
    { src: PHOTO_SRC[4], alt: "主持人介绍导师阵容" },
    { src: PHOTO_SRC[5], alt: "小组破冰 — 导师与学员面对面交流" },
    { src: PHOTO_SRC[6], alt: "导师们认真聆听学员分享" },
    { src: PHOTO_SRC[7], alt: "小组讨论 — 导师与学员深度互动" },
    { src: PHOTO_SRC[8], alt: "学员交流 — 跨组互动与碰撞" },
  ],
  TEAM_SECTION: { tagline: "项目团队", title: "2026 核心团队" },
  TEAM: [
    { role: "项目统筹", members: ["郑琪霖"] },
    { role: "财务", members: ["陈万戌", "王鹏"] },
    { role: "导师招募与联络", members: ["熊明烨", "郑琪霖"] },
    { role: "学员招募与联络", members: ["柳郁青", "王鹏"] },
    { role: "志愿者管理", members: ["姚俊涛", "张以明"] },
    { role: "外联与赞助", members: ["张以明", "刘晔"] },
    {
      role: "小组助教",
      members: [
        "韩伟", "刘程玉", "陈万戌", "刘一萱", "郝晨洲", "王鹏",
        "陈懿", "陈若舒", "姚毅", "张以明", "周孟宁", "周敏",
        "覃士娟", "周凌菲", "柳郁青", "刘晔", "郑琪霖", "贾哲韬",
        "李聪", "周舟", "周劲光", "刘舒瑜", "阙晓燕", "肖雨薇",
        "柳芃晖", "张谨", "熊明烨", "宋佳益",
      ],
    },
  ],
  SPONSORS_SECTION: { tagline: "主办方", title: "五大校友会联合发起" },
  SPONSORS: [
    { name: "北京大学北加州校友会", logo: SPONSOR_LOGO[0] },
    { name: "复旦大学北加州校友会", logo: SPONSOR_LOGO[1] },
    { name: "南京大学旧金山湾区校友会", logo: SPONSOR_LOGO[2] },
    { name: "南开美国北加州校友会", logo: SPONSOR_LOGO[3] },
    { name: "武汉大学北加州校友会", logo: SPONSOR_LOGO[4] },
  ],
  PARTNERS_SECTION: {
    tagline: "赞助品牌",
    title: "感谢支持伙伴",
    placeholder: "赞助品牌招募中，敬请期待。我们诚挚欢迎认同扶摇精神的企业与机构加入，与我们共同助力华人职场领导力。",
  },
  CONTACT_SECTION: {
    tagline: "联系我们",
    title: "加入扶摇计划",
    description: "如果你对扶摇计划感兴趣，欢迎通过以下方式联系我们。无论是希望成为学员、导师还是志愿者，我们都期待与你交流。",
    emailLabel: "邮箱",
    wechatLabel: "微信",
  },
  CONTACT_INFO,
  FOOTER: {
    description: "扶摇计划由五大高校校友会联合发起，致力于联系硅谷中高层管理人，培养未来北美华人职场领导力，帮助更多华人实现职场突破。",
    copyright: `© ${year} 扶摇计划 版权所有。`,
    quickLinks: "快速链接",
    contactWay: "联系方式",
    language: "语言",
  },
  ARIA: { openMenu: "打开菜单", closeMenu: "关闭菜单" },
};

// ── 繁體中文 (tw) ────────────────────────────────────────────
const tw: ContentShape = {
  SITE_NAME: "扶搖計劃",
  SITE_DESCRIPTION: "五大名校校友會聯合發起，矽谷導師一對一助你突破華人職場天花板",
  NAV_ITEMS: [
    { label: "關於我們", href: "/#about" },
    { label: "導師團隊", href: "/#mentors" },
    { label: "歷年成果", href: "/history" },
    { label: "往期活動", href: "/#gallery" },
    { label: "贊助品牌", href: "/#sponsors" },
    { label: "聯繫我們", href: "/#contact" },
  ],
  HERO: {
    badge: "扶搖計劃 · 2026",
    title: "扶搖萬里 領航未來",
    subtitle: "五大名校校友會聯合發起，矽谷導師一對一助你突破職場天花板",
    cta: "了解更多",
  },
  CHROME: {
    rails: { left: "矽谷 / 人工智慧人才雲", right: "導師網絡 / 灣區連接" },
    ticker: ["人工智慧成長計劃", "灣區導師網絡", "職涯成長圖譜", "創業信號", "全球人才雲", "矽谷網絡在線"],
    telemetry: [
      { kicker: "灣區節點", title: "矽谷人工智慧信號", description: "導師圖譜已連接" },
      { kicker: "人才雲", title: "矽谷網絡", description: "職涯加速層運行中" },
    ],
  },
  ABOUT: {
    tagline: "關於扶搖計劃",
    title: "助力華人職場突破",
    paragraphs: [
      "扶搖計劃致力於聯繫矽谷中高層管理人，培養未來北美華人職場領導力，幫助更多華人實現職場突破。通過長達八個月的深度陪伴式成長平台，真正陪伴學員跨越職場瓶頸。",
      "扶搖計劃由北京大學北加州校友會、南京大學舊金山灣區校友會、復旦大學北加州校友會、南開美國北加州校友會、武漢大學北加州校友會五大高校校友會聯合主辦，特邀行業內資深導師，實現華人職場經驗與文化的傳承，幫助下一代職場管理人的發展。",
    ],
  },
  STATS: [
    { value: "137", label: "報名人數" },
    { value: "57%", label: "錄取率" },
    { value: "21%", label: "經理及以上" },
    { value: "70", label: "精英學員" },
  ],
  HIGHLIGHTS_SECTION: { tagline: "2026 全新升級", title: "項目亮點" },
  HIGHLIGHTS: [
    { icon: "GraduationCap", title: "新銳賽道", description: "特設新人與職涯早期賽道，為職場新人提供高起點的職業規劃" },
    { icon: "Users", title: "傳幫帶生態", description: "往屆優秀學員回歸擔任助教，打造互助傳承的成長社區" },
    { icon: "Briefcase", title: "導師矩陣擴容", description: "14 位常駐導師 + 10 位飛行導師，全面輻射軟體、生物製藥、硬體等矽谷核心產業" },
    { icon: "Target", title: "1:5 精準匹配", description: "黃金師生比 + 多輪反饋機制，1 導師 + 助教 + 隊長 + 學員深度互動" },
  ],
  MENTORS_SECTION: {
    tagline: "導師團隊",
    title: "矽谷資深高管傾力指導",
    tabs: { resident: "常駐導師", flying: "飛行導師" },
  },
  MENTORS: MENTORS_TW,
  TIMELINE_SECTION: { tagline: "項目安排", title: "2026 年度計劃" },
  TIMELINE: [
    { date: "2026 年 1 月 - 2 月", title: "方案討論 · 招募啟動", description: "活動方案討論，導師與志願者招募，2 月中旬開放學員報名" },
    { date: "2026 年 3 月", title: "篩選匹配 · 開幕式", description: "學員篩選與導師匹配完成，3 月下旬舉辦項目開幕式暨小組破冰" },
    { date: "2026 年 4 月 - 9 月", title: "項目活動", description: "每月 1 次集體活動（圓桌討論、講座、戶外交流等），每月 1 次小組討論，導師學員 1:1 深度交流，後期多組合併討論" },
    { date: "2026 年 7 月", title: "中期反饋", description: "中期反饋追踪，助教團隊協助調整小組節奏" },
    { date: "2026 年 10 月", title: "結營儀式", description: "結業反饋追踪，總結與展望，校友網絡持續連接" },
  ],
  GALLERY_SECTION: {
    tagline: "往期活動",
    title: "2025 精彩回顧",
    summary: "2025 年扶搖計劃歷時八個月，14 位常駐導師與 5 位飛行導師傾囊相授，70 名學員完成了 8 次全體活動和近 100 次小組深度交流，學員滿意度高達 9.31/10。",
    activityTimeline: "活動軌跡",
    highlights: "精彩瞬間",
  },
  GALLERY_STATS: [
    { value: "8", label: "場全體活動" },
    { value: "~100", label: "次小組交流" },
    { value: "9.31", label: "滿意度 /10" },
    { value: "19", label: "位導師參與" },
  ],
  PAST_TIMELINE: [
    { date: "2025 年 3 月", title: "開幕式", description: "導師學員首次見面，小組破冰，70 名學員與 14 位導師正式結對", image: PAST_TL_IMG[0] },
    { date: "2025 年 4 月", title: "職場分享講座", description: "導師分享職業歷程與管理心得，學員小組討論啟動", image: PAST_TL_IMG[1] },
    { date: "2025 年 5 月", title: "圓桌討論", description: "行業大咖閉門對話，聚焦人工智慧、生物科技等前沿趨勢", image: PAST_TL_IMG[2] },
    { date: "2025 年 6 月", title: "夏季戶外交流 · 大組合併", description: "戶外社交與跨組交流，打破小組邊界", image: PAST_TL_IMG[3] },
    { date: "2025 年 7 月", title: "中期反饋 · 茶話會", description: "收集學員反饋，調整小組節奏，深度交流職場困惑", image: PAST_TL_IMG[4] },
    { date: "2025 年 8 月", title: "跨組討論", description: "多組合併研討，拓展人脈與視野", image: PAST_TL_IMG[5] },
    { date: "2025 年 9 月", title: "職場實戰分享", description: "導師一對一深度對話，學員成果沉澱", image: PAST_TL_IMG[6] },
    { date: "2025 年 10 月", title: "結業式", description: "總結與展望，頒發獎杯與獎狀，校友網絡持續連接", image: PAST_TL_IMG[7] },
  ],
  ACTIVITY_PHOTOS: [
    { src: PHOTO_SRC[0], alt: "2025 扶搖計劃開幕式導師與志願者合影" },
    { src: PHOTO_SRC[1], alt: "導師致辭 — 分享職業歷程與管理心得" },
    { src: PHOTO_SRC[2], alt: "導師演講 — 從康乃爾到輝達的職業旅程" },
    { src: PHOTO_SRC[3], alt: "活動介紹 — 2025 全新特色發布" },
    { src: PHOTO_SRC[4], alt: "主持人介紹導師陣容" },
    { src: PHOTO_SRC[5], alt: "小組破冰 — 導師與學員面對面交流" },
    { src: PHOTO_SRC[6], alt: "導師們認真聆聽學員分享" },
    { src: PHOTO_SRC[7], alt: "小組討論 — 導師與學員深度互動" },
    { src: PHOTO_SRC[8], alt: "學員交流 — 跨組互動與碰撞" },
  ],
  TEAM_SECTION: { tagline: "項目團隊", title: "2026 核心團隊" },
  TEAM: [
    { role: "項目統籌", members: ["鄭琪霖"] },
    { role: "財務", members: ["陳萬戌", "王鵬"] },
    { role: "導師招募與聯絡", members: ["熊明燁", "鄭琪霖"] },
    { role: "學員招募與聯絡", members: ["柳鬱青", "王鵬"] },
    { role: "志願者管理", members: ["姚俊濤", "張以明"] },
    { role: "外聯與贊助", members: ["張以明", "劉曄"] },
    {
      role: "小組助教",
      members: [
        "韓偉", "劉程玉", "陳萬戌", "劉一萱", "郝晨洲", "王鵬",
        "陳懿", "陳若舒", "姚毅", "張以明", "周孟寧", "周敏",
        "覃士娟", "周凌菲", "柳鬱青", "劉曄", "鄭琪霖", "賈哲韜",
        "李聰", "周舟", "周勁光", "劉舒瑜", "闕曉燕", "肖雨薇",
        "柳芃暉", "張謹", "熊明燁", "宋佳益",
      ],
    },
  ],
  SPONSORS_SECTION: { tagline: "主辦方", title: "五大校友會聯合發起" },
  SPONSORS: [
    { name: "北京大學北加州校友會", logo: SPONSOR_LOGO[0] },
    { name: "復旦大學北加州校友會", logo: SPONSOR_LOGO[1] },
    { name: "南京大學舊金山灣區校友會", logo: SPONSOR_LOGO[2] },
    { name: "南開美國北加州校友會", logo: SPONSOR_LOGO[3] },
    { name: "武漢大學北加州校友會", logo: SPONSOR_LOGO[4] },
  ],
  PARTNERS_SECTION: {
    tagline: "贊助品牌",
    title: "感謝支持夥伴",
    placeholder: "贊助品牌招募中，敬請期待。我們誠摯歡迎認同扶搖精神的企業與機構加入，與我們共同助力華人職場領導力。",
  },
  CONTACT_SECTION: {
    tagline: "聯繫我們",
    title: "加入扶搖計劃",
    description: "如果你對扶搖計劃感興趣，歡迎通過以下方式聯繫我們。無論是希望成為學員、導師還是志願者，我們都期待與你交流。",
    emailLabel: "電子郵件",
    wechatLabel: "微信",
  },
  CONTACT_INFO,
  FOOTER: {
    description: "扶搖計劃由五大高校校友會聯合發起，致力於聯繫矽谷中高層管理人，培養未來北美華人職場領導力，幫助更多華人實現職場突破。",
    copyright: `© ${year} 扶搖計劃 版權所有。`,
    quickLinks: "快速連結",
    contactWay: "聯繫方式",
    language: "語言",
  },
  ARIA: { openMenu: "打開菜單", closeMenu: "關閉菜單" },
};

// ── English (en) ─────────────────────────────────────────────
const en: ContentShape = {
  SITE_NAME: "Fuyao Program",
  SITE_DESCRIPTION:
    "Co-launched by alumni associations of five top universities — Silicon Valley mentors guide you through the bamboo ceiling, one-on-one.",
  NAV_ITEMS: [
    { label: "About", href: "/#about" },
    { label: "Mentors", href: "/#mentors" },
    { label: "Impact", href: "/history" },
    { label: "Past Events", href: "/#gallery" },
    { label: "Sponsor Brands", href: "/#sponsors" },
    { label: "Contact", href: "/#contact" },
  ],
  HERO: {
    badge: "Fuyao Program · 2026",
    title: "Soaring Beyond, Leading Tomorrow",
    subtitle:
      "Co-launched by five top alumni associations — Silicon Valley mentors guide you one-on-one through the career ceiling.",
    cta: "Learn More",
  },
  CHROME: {
    rails: { left: "Silicon Valley / AI Talent Cloud", right: "Mentor Network / Bay Area" },
    ticker: ["AI Fellowship", "Bay Area Mentors", "Career Graph", "Startup Signals", "Global Talent Cloud", "Silicon Valley Network Online"],
    telemetry: [
      { kicker: "Bay Area Node", title: "Silicon Valley AI Signal", description: "mentor graph online" },
      { kicker: "Talent Cloud", title: "Silicon Valley", description: "career acceleration layer" },
    ],
  },
  ABOUT: {
    tagline: "About Fuyao",
    title: "Empowering Chinese Professionals",
    paragraphs: [
      "Fuyao connects mid-to-senior Silicon Valley leaders with the next generation of Chinese professionals in North America, helping them break through career plateaus. Through an intensive eight-month immersive program, we walk alongside each cohort as they navigate the real obstacles of professional growth.",
      "Fuyao is co-hosted by five alumni associations: Peking University Alumni of Northern California, Nanjing University Bay Area Alumni, Fudan University Alumni of Northern California, Nankai Alumni of Northern California, and Wuhan University Alumni of Northern California. Together with seasoned industry veterans, we pass down hands-on professional wisdom to the next generation of leaders.",
    ],
  },
  STATS: [
    { value: "137", label: "Applicants" },
    { value: "57%", label: "Acceptance" },
    { value: "21%", label: "Manager & Above" },
    { value: "70", label: "Selected Cohort" },
  ],
  HIGHLIGHTS_SECTION: { tagline: "What's New 2026", title: "Program Highlights" },
  HIGHLIGHTS: [
    { icon: "GraduationCap", title: "Early-Career Track", description: "A dedicated New Grad / early-career track that gives newcomers a high-trajectory career roadmap from day one." },
    { icon: "Users", title: "Mentorship Continuum", description: "Top alumni return as TAs, forming a community where every cohort lifts the next." },
    { icon: "Briefcase", title: "Expanded Mentor Roster", description: "14 resident + 10 visiting mentors covering software, biopharma, hardware, and the Valley's core industries." },
    { icon: "Target", title: "1:5 Precision Match", description: "A golden mentor-to-mentee ratio with multi-round feedback — mentor, TA, captain, and mentees collaborate end-to-end." },
  ],
  MENTORS_SECTION: {
    tagline: "Mentor Team",
    title: "Senior Silicon Valley Leaders, Up Close",
    tabs: { resident: "Resident", flying: "Visiting" },
  },
  MENTORS,
  TIMELINE_SECTION: { tagline: "Schedule", title: "2026 Annual Plan" },
  TIMELINE: [
    { date: "Jan – Feb 2026", title: "Planning · Recruitment Opens", description: "Program planning, mentor and volunteer recruitment; mentee applications open in mid-February." },
    { date: "March 2026", title: "Selection, Matching · Kickoff", description: "Mentee selection and mentor matching complete; kickoff ceremony and group ice-breaker in late March." },
    { date: "Apr – Sep 2026", title: "Program Activities", description: "Monthly group event (panel, talk, BBQ, etc.), monthly small-group discussion, 1:1 deep-dive sessions, with cross-group conversations later in the program." },
    { date: "July 2026", title: "Mid-Program Check-in", description: "Mid-program feedback tracking; the TA team helps re-calibrate group cadence." },
    { date: "October 2026", title: "Closing Ceremony", description: "Closing feedback, reflection, and a forward-looking summary; the alumni network keeps the connection alive." },
  ],
  GALLERY_SECTION: {
    tagline: "Past Events",
    title: "2025 Recap",
    summary:
      "Across eight months in 2025, 14 resident and 5 visiting mentors poured everything in. 70 mentees took part in 8 all-hands events and nearly 100 small-group sessions, posting a satisfaction score of 9.31/10.",
    activityTimeline: "Program Moments",
    highlights: "Highlights",
  },
  GALLERY_STATS: [
    { value: "8", label: "Group Events" },
    { value: "~100", label: "Small-Group Sessions" },
    { value: "9.31", label: "Satisfaction /10" },
    { value: "19", label: "Mentors Engaged" },
  ],
  PAST_TIMELINE: [
    { date: "Mar 2025", title: "Kickoff Ceremony", description: "First in-person meeting, ice-breakers, and 70 mentees officially paired with 14 mentors.", image: PAST_TL_IMG[0] },
    { date: "Apr 2025", title: "Career Talk", description: "Mentors share their career arc and leadership lessons; small-group discussions begin.", image: PAST_TL_IMG[1] },
    { date: "May 2025", title: "Panel Discussion", description: "Closed-door conversation with industry leaders, focused on frontier trends in AI and biotech.", image: PAST_TL_IMG[2] },
    { date: "Jun 2025", title: "Summer BBQ · Mega-Group", description: "Outdoor social and cross-group mixer, dissolving the group boundaries.", image: PAST_TL_IMG[3] },
    { date: "Jul 2025", title: "Mid-Term Check-in · Tea Talk", description: "Collecting feedback, recalibrating cadence, and a deeper conversation around real-world career challenges.", image: PAST_TL_IMG[4] },
    { date: "Aug 2025", title: "Cross-Group Sessions", description: "Multiple groups combine for broader connections and wider perspectives.", image: PAST_TL_IMG[5] },
    { date: "Sep 2025", title: "Real-World Career Stories", description: "One-on-one deep-dive sessions; mentees consolidate what they've learned.", image: PAST_TL_IMG[6] },
    { date: "Oct 2025", title: "Closing Ceremony", description: "Reflection and outlook, trophy and certificate awards, an enduring alumni network.", image: PAST_TL_IMG[7] },
  ],
  ACTIVITY_PHOTOS: [
    { src: PHOTO_SRC[0], alt: "2025 Fuyao kickoff — mentors and volunteers" },
    { src: PHOTO_SRC[1], alt: "Mentor address — career arc and leadership lessons" },
    { src: PHOTO_SRC[2], alt: "Mentor talk — from Cornell to Nvidia" },
    { src: PHOTO_SRC[3], alt: "2025 program launch — new features unveiled" },
    { src: PHOTO_SRC[4], alt: "Host introducing the mentor lineup" },
    { src: PHOTO_SRC[5], alt: "Ice-breaker — mentors and mentees face-to-face" },
    { src: PHOTO_SRC[6], alt: "Mentors listening intently to mentees" },
    { src: PHOTO_SRC[7], alt: "Small-group session — mentor & mentee deep dive" },
    { src: PHOTO_SRC[8], alt: "Mentee mixer — cross-group connections" },
  ],
  TEAM_SECTION: { tagline: "Project Team", title: "2026 Core Team" },
  TEAM: [
    { role: "Program Lead", members: ["Qilin Zheng"] },
    { role: "Finance", members: ["Wanxu Chen", "Peng Wang"] },
    { role: "Mentor Recruitment", members: ["Mingye Xiong", "Qilin Zheng"] },
    { role: "Mentee Recruitment", members: ["Yuqing Liu", "Peng Wang"] },
    { role: "Volunteer Coordination", members: ["Juntao Yao", "Yiming Zhang"] },
    { role: "Outreach & Sponsorship", members: ["Yiming Zhang", "Ye Liu"] },
    {
      role: "Group Teaching Assistants",
      members: [
        "Wei Han", "Chengyu Liu", "Wanxu Chen", "Yixuan Liu", "Chenzhou Hao", "Peng Wang",
        "Yi Chen", "Ruoshu Chen", "Yi Yao", "Yiming Zhang", "Mengning Zhou", "Min Zhou",
        "Shijuan Qin", "Lingfei Zhou", "Yuqing Liu", "Ye Liu", "Qilin Zheng", "Zhetao Jia",
        "Cong Li", "Zhou Zhou", "Jinguang Zhou", "Shuyu Liu", "Xiaoyan Que", "Yuwei Xiao",
        "Penghui Liu", "Jin Zhang", "Mingye Xiong", "Jiayi Song",
      ],
    },
  ],
  SPONSORS_SECTION: { tagline: "Co-Hosts", title: "Co-launched by Five Alumni Associations" },
  SPONSORS: [
    { name: "Peking University Alumni of Northern California", logo: SPONSOR_LOGO[0] },
    { name: "Fudan University Alumni of Northern California", logo: SPONSOR_LOGO[1] },
    { name: "Nanjing University Bay Area Alumni", logo: SPONSOR_LOGO[2] },
    { name: "Nankai University Alumni of Northern California", logo: SPONSOR_LOGO[3] },
    { name: "Wuhan University Alumni of Northern California", logo: SPONSOR_LOGO[4] },
  ],
  PARTNERS_SECTION: {
    tagline: "Sponsor Brands",
    title: "Thank You to Our Partners",
    placeholder:
      "Sponsor brands coming soon. We warmly welcome companies and organizations that share Fuyao's mission to join us in empowering the next generation of Chinese leaders.",
  },
  CONTACT_SECTION: {
    tagline: "Contact",
    title: "Join Fuyao",
    description:
      "Interested in Fuyao? Reach out through any of the channels below — whether you'd like to join as a mentee, mentor, or volunteer, we'd love to hear from you.",
    emailLabel: "Email",
    wechatLabel: "WeChat",
  },
  CONTACT_INFO,
  FOOTER: {
    description:
      "Fuyao Program is co-launched by five top alumni associations, connecting senior Silicon Valley leaders with the next generation of Chinese professionals in North America to break through career plateaus.",
    copyright: `© ${year} Fuyao Program. All Rights Reserved.`,
    quickLinks: "Quick Links",
    contactWay: "Contact",
    language: "Language",
  },
  ARIA: { openMenu: "Open menu", closeMenu: "Close menu" },
};

export const CONTENT: Record<Lang, ContentShape> = { zh, tw, en };
export type { ContentShape };
