export interface MailFolder {
  id: string;
  label: string;
  icon: "Mail" | "Star" | "Send" | "Archive";
  unread?: number;
}

export interface Department {
  id: string;
  label: string;
}

export interface Contact {
  id: string;
  name: string;
  dept: string;
  avatar?: string;
  preview: string;
}

export interface MailMessage {
  id: string;
  subject: string;
  sender: string;
  recipient: string;
  time: string;
  body: string[];
  hasImage?: boolean;
}

export const mailFolders: MailFolder[] = [
  { id: "inbox", label: "收件箱", icon: "Mail", unread: 7 },
  { id: "important", label: "重要邮件", icon: "Star" },
  { id: "sent", label: "已发送", icon: "Send" },
  { id: "archive", label: "存档", icon: "Archive" },
];

export const departments: Department[] = [
  { id: "exec", label: "执行部" },
  { id: "gear", label: "装备部" },
  { id: "info", label: "信息部" },
];

export const contacts: Contact[] = [
  { id: "ricardo", name: "Ricardo", dept: "exec", preview: "师兄救我！我又被卷进奇怪任务了……" },
  { id: "murata", name: "村雨", dept: "gear", preview: "刀已磨好，明天出任务。别迟到。" },
  { id: "dictator", name: "狄克推多", dept: "exec", preview: "加图索家族从不接受失败，跟上。" },
  { id: "dragon", name: "炎之龙斩者", dept: "info", preview: "版主发布最新屠龙情报，速看。" },
  { id: "nono", name: "NoNo", dept: "info", preview: "小弟，学姐带你去见见世面。" },
  { id: "watchman", name: "守夜人", dept: "info", preview: "年轻人，来杯啤酒再谈炼金术？" },
  { id: "eva", name: "Eva", dept: "info", preview: "检测到龙族活性反应，请立即备战。" },
];

// Alert-red emphasis helper: wraps text in theme-aware alert color
const A = (text: string) => `<span class="text-alert dark:text-combat-alert font-medium">${text}</span>`;

export const mailMessages: Record<string, MailMessage> = {
  ricardo: {
    id: "ricardo-001",
    subject: "师兄，我这次好像真的凉了",
    sender: "Ricardo",
    recipient: "你",
    time: "2026年7月8日 23:47",
    body: [
      "师兄，救命啊！",
      "我刚从芝加哥火车站出来，就碰见一个穿西装的家伙盯着我看，那眼神跟楚子航你一模一样，杀气腾腾的。我怀疑是执行部派来抓我回去补课的，或者是某位校董家的女儿终于决定追杀我了。",
      "我兜里只剩十二美元，连碗拉面都吃不起。要不是芬格尔那个废柴还欠我两顿饭，我现在就该露宿街头了。",
      "你这次任务能不能带上我？虽然我知道自己除了S级血统之外一无是处，但好歹能帮你挡一枪吧？",
      "——路明非",
    ],
  },
  murata: {
    id: "murata-001",
    subject: "任务简报：日本分部",
    sender: "村雨",
    recipient: "你",
    time: "2026年7月8日 21:15",
    body: [
      "明日0600，装备部机库集合。",
      `目标：日本海东部海域，疑似${A("胚胎级龙类苏醒")}。执行部、装备部、信息部联合行动，编号SSS0024076人员由我直接指挥。`,
      "带上你的刀。不要带多余的东西。",
      `这次任务的评级为A+，${A("伤亡概率不低")}。如果明早你迟到，我会亲自去宿舍把你拖出来。`,
      "村雨",
    ],
  },
  dictator: {
    id: "dictator-001",
    subject: "加图索家的邀请",
    sender: "狄克推多",
    recipient: "你",
    time: "2026年7月8日 19:30",
    body: [
      "朋友，我听闻你最近又在任务里大放异彩。",
      "凯撒·加图索从不吝啬对强者的赞美。今晚我在诺顿馆准备了香槟和雪茄，来喝一杯，顺便聊聊下一次行动。记住，加图索家族只邀请一次。",
      "把你那件皱巴巴的执行部外套换掉，穿体面一点。我可不想我的客人看起来像刚从贫民窟逃出来。",
      "当然，如果你更愿意和那只败狗芬格尔一起啃汉堡，我也不会勉强。",
      "狄克推多",
    ],
  },
  dragon: {
    id: "dragon-001",
    subject: "【守夜人社区置顶】重大情报",
    sender: "炎之龙斩者",
    recipient: "你",
    time: "2026年7月8日 18:22",
    body: [
      "各位学弟学妹，版主我又来啦！",
      `据可靠消息，学院情报部已经确认西北太平洋上空出现${A("异常龙文共鸣")}。那东西大概率是${A("天空与风之王一系的大人物")}，风浪之大能把航母当纸船撕。`,
      "装备部那帮疯子已经在往导弹里填炼金炸药了，校工部也在连夜加固宿舍窗户。我建议大家该写遗书的写遗书，该表白的表白，别留遗憾。",
      "对了，谁再举报我帖子灌水，我就黑进他宿舍暖气系统。",
      "——炎之龙斩者",
    ],
  },
  nono: {
    id: "nono-001",
    subject: "明天陪我去买车",
    sender: "NoNo",
    recipient: "你",
    time: "2026年7月8日 16:05",
    body: [
      "小弟，明天下午没课吧？",
      "陪学姐去挑辆新车，我刚拿到一笔奖学金，准备换辆红色的。你帮我看看哪辆跑起来更像追风的巫女。",
      "别跟我说你要去训练。训练哪有陪学姐重要？你要是敢放我鸽子，我就把你那些糗事贴满守夜人论坛。",
      "晚上请你吃拉面，管够。记得穿帅一点，别给我丢人。",
      "NoNo",
    ],
  },
  watchman: {
    id: "watchman-001",
    subject: "年轻人，来谈谈人生",
    sender: "守夜人",
    recipient: "你",
    time: "2026年7月8日 14:50",
    body: [
      "嘿，小子，晚上来我阁楼一趟。",
      "别紧张，不是训话。我搞到了几瓶不错的德国黑啤，还有一套新买的蓝光碟。我们可以一边喝酒一边研究炼金术，顺便批判一下现代电影工业的堕落。",
      "当然，如果你更想听我说说龙族历史、初代种和奥丁那些老掉牙的故事，我也可以讲。反正我老人家睡眠少，讲到天亮都没问题。",
      "记得别带凯撒来，那小子太正经，喝不醉。",
      "守夜人",
    ],
  },
  eva: {
    id: "eva-001",
    subject: "学院通知：",
    sender: "Eva",
    recipient: "你",
    time: "2026年7月9日 0:00",
    hasImage: true,
    body: [
      "很遗憾通知你，你的假期提前结束了。",
      `学院的信息部在西北太平洋远洋海面检测到${A("磁场异常")}，疑似龙族四大君主之一：${A("天空与风之王复苏")}。检测到${A("中心风力最大17级")}，已多次置换风眼，电磁场受不明因素影响，信号紊乱，${A("狂风与雷鸣即将侵袭沿海")}。`,
      "image:typhoon-satellite",
      `image-marker:${A("气旋中心 · 龙类活性反应监测中")}`,
      "从学院的专员分布图和血统优势来看，无疑你是最合适人选。所以学院这次派遣你为本次行动专员，编号为SSS0024076。装备部和校工部已提前行动，请立即出发。",
      "你亲爱的Eva",
    ],
  },
};

export const defaultContactId = "eva";

export const motto = "bonum certamen certavi cursum consummavi fidem servavi";
