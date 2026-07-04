import type {
  NavItem,
  Mentor,
  TimelineItem,
  Stat,
  ActivityPhoto,
  Sponsor,
  ContactInfo,
} from "@/types";

export const SITE_NAME = "扶摇计划";

export const NAV_ITEMS: NavItem[] = [
  { label: "关于我们", href: "#about" },
  { label: "导师团队", href: "#mentors" },
  { label: "历年成果", href: "#gallery" },
  { label: "联系我们", href: "#contact" },
];

export const HERO = {
  title: "聚百舸之力，扶摇万里\n行鲲鹏之志，直上九霄",
  subtitle: "五大名校校友会联合发起，硅谷导师一对一助你突破职场天花板",
};

export const ABOUT = {
  tagline: "关于扶摇计划",
  title: "助力华人职场突破",
  paragraphs: [
    "扶摇计划致力于联系硅谷中高层管理人，培养未来北美华人职场领导力，帮助更多华人实现职场突破。通过长达八个月的深度陪伴式成长平台，真正陪伴学员跨越职场瓶颈。",
    "扶摇计划由北京大学北加州校友会、南京大学旧金山湾区校友会、复旦大学北加州校友会、南开美国北加州校友会、武汉大学北加州校友会五大高校校友会联合发起，特邀行业内资深导师，实现华人职场经验与文化的传承，帮助下一代职场管理人的发展。",
  ],
};

export const STATS: Stat[] = [
  { value: "超150人", label: "报名" },
  { value: "低于50%", label: "录取率" },
  { value: "超25%", label: "为管理岗" },
  { value: "70+", label: "每届精英学员" },
];

export const MENTORS_SECTION = {
  tagline: "导师团队",
  title: "硅谷资深高管，倾力指导",
  tabs: {
    resident: "常驻导师",
    flying: "飞行导师",
  },
};

export const MENTORS: Mentor[] = [
  // 常驻导师（14 位，按助教分配表确认）
  {
    name: "Liang Peng",
    title: "SVP, Futurewei Technologies, Head of IC Lab",
    image: "/images/mentors/liang-peng.png",
    type: "resident",
  },
  {
    name: "Michael Zhu",
    title: "Chief Scientist of Xinxi Capital, ex-Corporate VP at Meituan",
    image: "/images/mentors/michael-zhu.png",
    type: "resident",
  },
  {
    name: "Chris Xu",
    title: "Senior Director, Google Cloud Trust & Safety",
    image: "/images/mentors/chris-xu.png",
    type: "resident",
  },
  {
    name: "Kai Zheng",
    title: "Executive Director, Formulation & Process Development, Gilead Sciences",
    image: "/images/mentors/kai-zheng.png",
    type: "resident",
  },
  {
    name: "Ming Wu",
    title: "Ex-Senior Director at Gilead Sciences",
    image: "/images/mentors/ming-wu.png",
    type: "resident",
  },
  {
    name: "Jichuan Chang",
    title: "Director of Engineering at Google",
    image: "/images/mentors/jichuan-chang.png",
    type: "resident",
  },
  {
    name: "Jun Lang",
    title: "VP Product Management, ASML",
    image: "/images/mentors/jun-lang.png",
    type: "resident",
  },
  {
    name: "Yan Xie",
    title: "Director of Engineering at Webflow",
    image: "/images/mentors/yan-xie.png",
    type: "resident",
  },
  {
    name: "Sam Liu",
    title: "Senior Director at OKX",
    image: "/images/mentors/sam-liu.png",
    type: "resident",
  },
  {
    name: "Guoying Liu",
    title: "Data Science Leader",
    image: "/images/mentors/guoying-liu.png",
    type: "resident",
  },
  {
    name: "Sheng Song",
    title: "Senior Tech Leader",
    image: "/images/mentors/sheng-song.png",
    type: "resident",
  },
  {
    name: "Lei Xia",
    title: "Senior Leader, Tech Industry",
    image: "/images/mentors/lei-xia.png",
    type: "resident",
  },
  {
    name: "Dawei Cai",
    title: "Director, Atea Pharmaceuticals",
    image: "/images/mentors/dawei-cai.png",
    type: "resident",
  },
  {
    name: "Mike Zhao",
    title: "Senior Tech Leader",
    image: "/images/mentors/michael-zhao.png",
    type: "resident",
  },
  // 飞行导师（8 位确认 + Hanning Zhou + Yiqun Cai）
  {
    name: "Bo Zhao",
    title: "Director of Engineering at Pinterest",
    image: "/images/mentors/bo-zhao.png",
    type: "flying",
  },
  {
    name: "Yanmin Tao",
    title: "PMP, Senior Project Manager",
    image: "/images/mentors/yanmin-tao.png",
    type: "flying",
  },
  {
    name: "Weiwei Sun",
    title: "Senior Director at Siemens",
    image: "/images/mentors/weiwei-sun.png",
    type: "flying",
  },
  {
    name: "Jim Li",
    title: "SVP, Advanced Fiber Resource",
    image: "/images/mentors/jim-li.png",
    type: "flying",
  },
  {
    name: "Baofu Zheng",
    title: "President, Shanghai Haoyuan Chemexpress Co., Ltd",
    image: "/images/mentors/baofu-zheng.png",
    type: "flying",
  },
  {
    name: "Tianshen Tang",
    title: "Board member of Moffett AI, ex-EVP at SMIC",
    image: "/images/mentors/tianshen-tang.png",
    type: "flying",
  },
  {
    name: "Wei Liu",
    title: "VP at Visa",
    image: "/images/mentors/wei-liu.png",
    type: "flying",
  },
  {
    name: "Junqiang Lan",
    title: "Director, Meta Infra Silicon",
    image: "/images/mentors/junqiang-lan.png",
    type: "flying",
  },
  {
    name: "Hanning Zhou",
    title: "Head of Search Quality, DoorDash",
    type: "flying",
  },
  {
    name: "Yiqun Cai",
    title: "VP Engineering at Microsoft",
    type: "flying",
  },
];

export const GALLERY_SECTION = {
  tagline: "历年成果",
  title: "记录每一届的成长",
  summary:
    "扶摇计划每年都在续写新的篇章。点击任一年度，回顾那一届的活动与精彩瞬间。",
};

export const GALLERY_STATS: Stat[] = [
  { value: "8", label: "场全体活动" },
  { value: "~100", label: "次小组交流" },
  { value: "9.31", label: "满意度 /10" },
  { value: "19", label: "位导师参与" },
];

export interface PastTimelineItem extends TimelineItem {
  image?: string;
}

export const PAST_TIMELINE: PastTimelineItem[] = [
  {
    date: "2025年3月",
    title: "开幕式",
    description: "导师学员首次见面，小组破冰，70 名学员与 14 位导师正式结对",
    image: "/images/gallery/boxphoto47.jpg",
  },
  {
    date: "2025年4月",
    title: "职场分享讲座",
    description: "导师分享职业历程与管理心得，学员小组讨论启动",
    image: "/images/gallery/boxphoto16.jpg",
  },
  {
    date: "2025年5月",
    title: "Panel Discussion",
    description: "行业大咖闭门对话，聚焦 AI、Biotech 等前沿趋势",
    image: "/images/gallery/boxphoto7.jpg",
  },
  {
    date: "2025年6月",
    title: "夏季 BBQ · 大组合并",
    description: "户外社交与跨组交流，打破小组边界",
    image: "/images/gallery/boxphoto59.jpg",
  },
  {
    date: "2025年7月",
    title: "中期反馈 · 茶话会",
    description: "收集学员反馈，调整小组节奏，深度交流职场困惑",
    image: "/images/gallery/boxphoto87.jpg",
  },
  {
    date: "2025年8月",
    title: "跨组讨论",
    description: "多组合并研讨，拓展人脉与视野",
    image: "/images/gallery/boxphoto66.jpg",
  },
  {
    date: "2025年9月",
    title: "职场实战分享",
    description: "导师一对一深度对话，学员成果沉淀",
    image: "/images/gallery/boxphoto21.jpg",
  },
  {
    date: "2025年10月",
    title: "结业式",
    description: "总结与展望，颁发奖杯与奖状，校友网络持续连接",
    image: "/images/gallery/boxphoto26.jpg",
  },
];

export const ACTIVITY_PHOTOS: ActivityPhoto[] = [
  { src: "/images/gallery/boxphoto47.jpg", alt: "2025 扶摇计划开幕式导师与志愿者合影" },
  { src: "/images/gallery/boxphoto16.jpg", alt: "导师致辞 — 分享职业历程与管理心得" },
  { src: "/images/gallery/boxphoto21.jpg", alt: "导师演讲 — 从 Cornell 到 Nvidia 的职业旅程" },
  { src: "/images/gallery/boxphoto38.jpg", alt: "活动介绍 — 2025 全新特色发布" },
  { src: "/images/gallery/boxphoto26.jpg", alt: "主持人介绍导师阵容" },
  { src: "/images/gallery/boxphoto59.jpg", alt: "小组破冰 — 导师与学员面对面交流" },
  { src: "/images/gallery/boxphoto7.jpg", alt: "导师们认真聆听学员分享" },
  { src: "/images/gallery/boxphoto87.jpg", alt: "小组讨论 — 导师与学员深度互动" },
  { src: "/images/gallery/boxphoto66.jpg", alt: "学员交流 — 跨组互动与碰撞" },
];

// 历年成果：每新增一届（如 2026），只需往 GALLERY_YEARS 追加一项，
// 首页索引卡片与年度详情页（/gallery/<year>）都会自动生成。
export interface GalleryYear {
  year: string; // 路由 slug：/gallery/<year>
  title: string; // 索引卡片与详情页标题
  blurb: string; // 索引卡片上的简介
  cover?: string; // 封面图；留空则用装饰渐变
  available: boolean; // 内容是否就绪；false 时显示「敬请期待」占位
  summary?: string; // 详情页开头简介
  stats?: Stat[];
  timeline?: PastTimelineItem[];
  photos?: ActivityPhoto[];
}

export const GALLERY_YEARS: GalleryYear[] = [
  {
    year: "2025",
    title: "2025 精彩回顾",
    blurb: "8 次全体活动、近 100 次小组交流，70 名学员的八个月成长之旅。",
    cover: "/images/gallery/boxphoto47.jpg",
    available: true,
    summary:
      "2025 年扶摇计划历时八个月，14 位常驻导师与 5 位飞行导师倾囊相授，70 名学员完成了 8 次全体活动和近 100 次小组深度交流，学员满意度高达 9.31/10。",
    stats: GALLERY_STATS,
    timeline: PAST_TIMELINE,
    photos: ACTIVITY_PHOTOS,
  },
  {
    year: "2024",
    title: "2024 精彩回顾",
    blurb: "内容整理中，敬请期待。",
    available: false,
  },
];

export const getGalleryYear = (year: string): GalleryYear | undefined =>
  GALLERY_YEARS.find((y) => y.year === year);

export const TEAM_SECTION = {
  tagline: "项目团队",
  title: "2026 核心团队",
};

export interface TeamGroup {
  role: string;
  members: string[];
}

export const TEAM: TeamGroup[] = [
  {
    role: "项目统筹",
    members: ["郑琪霖"],
  },
  {
    role: "财务",
    members: ["陈万戌", "王鹏"],
  },
  {
    role: "导师招募与联络",
    members: ["熊明烨", "郑琪霖"],
  },
  {
    role: "学员招募与联络",
    members: ["柳郁青", "王鹏"],
  },
  {
    role: "志愿者招募与联络",
    members: ["姚俊涛", "张以明"],
  },
  {
    role: "外联与赞助",
    members: ["张以明", "刘晔"],
  },
  {
    role: "小组助教",
    members: [
      "陈若舒", "陈万戌", "陈懿", "韩伟", "郝晨洲", "贾哲韬",
      "李聪", "刘程玉", "刘舒瑜", "刘晔", "刘一萱", "柳芃晖",
      "柳郁青", "覃士娟", "阙晓燕", "宋佳益", "王鹏", "肖雨薇",
      "熊明烨", "姚俊涛", "姚毅", "张谨", "张石然", "张以明",
      "郑琪霖", "周劲光", "周凌菲", "周孟宁", "周敏", "周舟",
    ],
  },
];

export const SPONSORS_SECTION = {
  tagline: "发起方",
  title: "五大校友会联合发起",
};

export const SPONSORS: Sponsor[] = [
  {
    name: "北京大学北加州校友会",
    logo: "/images/pptx/slide17_img4.jpg",
  },
  {
    name: "复旦大学北加州校友会",
    logo: "/images/fudan_logo.png",
  },
  {
    name: "南京大学旧金山湾区校友会",
    logo: "/images/pptx/slide17_img6.jpg",
  },
  {
    name: "南开美国北加州校友会",
    logo: "/images/pptx/slide17_img5.jpg",
  },
  {
    name: "武汉大学北加州校友会",
    logo: "/images/wuda_logo.jpg",
  },
];

export const CONTACT_SECTION = {
  tagline: "联系我们",
  title: "加入扶摇计划",
  description:
    "如果你对扶摇计划感兴趣，欢迎通过以下方式联系我们。无论是希望成为学员、导师还是志愿者，我们都期待与你交流。",
};

export const CONTACT_INFO: ContactInfo = {
  email: "tailwind.connect@gmail.com",
};

export const FOOTER = {
  description:
    "扶摇计划由五大高校校友会联合发起，致力于联系硅谷中高层管理人，培养未来北美华人职场领导力，帮助更多华人实现职场突破。",
  copyright: `© 2024-${new Date().getFullYear()} 扶摇计划 All Rights Reserved.`,
};

/* ===================== English (i18n) ===================== */
// 扶摇计划的官方英文名统一为 Tailwind Project。英文版仅保留 About 与 Contact。

export const SITE_NAME_EN = "Tailwind Project";

export const NAV_ITEMS_EN: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT_EN = {
  tagline: "About Tailwind Project",
  title: "Empowering Chinese Professionals",
  paragraphs: [
    "Tailwind Project connects mid-to-senior managers across Silicon Valley to cultivate the next generation of Chinese professional leadership in North America and help more people break through their career ceilings. Over an eight-month, deeply immersive growth journey, we walk alongside our members as they get past career bottlenecks.",
    "Tailwind Project is jointly initiated by five university alumni associations — Peking University (Northern California), Nanjing University (SF Bay Area), Fudan University (Northern California), Nankai University (Northern California, USA), and Wuhan University (Northern California). With seasoned industry mentors, we pass on professional experience and culture to support the growth of the next generation of managers.",
  ],
};

export const STATS_EN: Stat[] = [
  { value: "150+", label: "Applicants" },
  { value: "<50%", label: "Acceptance Rate" },
  { value: ">25%", label: "Manager & Above" },
  { value: "70+", label: "Elite Members / Cohort" },
];

export const CONTACT_SECTION_EN = {
  tagline: "Contact Us",
  title: "Join Tailwind Project",
  description:
    "If you are interested in Tailwind Project, we would love to hear from you. Whether you would like to join as a member, mentor, or volunteer, we look forward to connecting with you.",
};

export const FOOTER_EN = {
  description:
    "Tailwind Project is jointly initiated by five university alumni associations, connecting mid-to-senior managers across Silicon Valley to cultivate Chinese professional leadership in North America and help more people break through their careers.",
  copyright: `© 2024-${new Date().getFullYear()} Tailwind Project. All Rights Reserved.`,
};
