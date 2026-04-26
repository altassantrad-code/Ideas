import React, { useState } from "react";

const FREE_LIMIT = 5;

const AR = {
  appName:"أفكار", tagline:"المنصة الأولى لربط أصحاب الأفكار بالمستثمرين",
  heroTitle:"فكرتك.. تستحق مستثمراً", heroSub:"انشر فكرتك أو ابحث عن فرصة استثمارية مميزة",
  heroBtn:"ابدأ الآن مجاناً", heroBtn2:"تصفح الأفكار",
  feed:"الأفكار", explore:"استكشاف", post:"نشر فكرة", profile:"حسابي", investors:"المستثمرون",
  login:"تسجيل الدخول", signup:"إنشاء حساب", logout:"تسجيل الخروج",
  postIdea:"انشر فكرتك", ideaTitle:"عنوان الفكرة", ideaDesc:"وصف الفكرة الكامل",
  ideaTeaser:"جملة تشويقية (تظهر للجميع)", ideaCategory:"التصنيف",
  ideaBudget:"التمويل المطلوب ($)", submit:"نشر الفكرة",
  invest:"تواصل للاستثمار", like:"إعجاب", send:"إرسال",
  comments:"التعليقات", addComment:"أضف تعليقاً...",
  search:"ابحث عن أفكار أو مستثمرين...", trending:"الأكثر تفاعلاً", newest:"الأحدث",
  noIdeas:"لا توجد أفكار بعد. كن الأول!",
  name:"الاسم الكامل", email:"البريد الإلكتروني", password:"كلمة المرور",
  userType:"نوع الحساب", founder:"صاحب فكرة", investor:"مستثمر", capital:"رأس المال للاستثمار ($)",
  haveAccount:"لديك حساب؟", noAccount:"ليس لديك حساب؟",
  welcome:"مرحباً بعودتك", joinUs:"انضم إلى مجتمع الأفكار",
  investMsg:"مرحباً، أنا مهتم بالاستثمار في فكرتك:",
  msgPlaceholder:"اكتب رسالتك...", cancelMsg:"إلغاء", sendMsg:"إرسال الرسالة",
  msgSent:"تم إرسال رسالتك! سيتواصل معك صاحب الفكرة قريباً.", close:"إغلاق",
  myIdeas:"أفكاري", editProfile:"تعديل الملف", bio:"نبذة عني",
  saveProfile:"حفظ التغييرات", cancel:"إلغاء", followers:"متابعون", following:"متابَعون", ideas:"أفكار",
  confirmDelete:"هل أنت متأكد من حذف هذه الفكرة؟",
  yes:"نعم، احذف", no:"لا، تراجع", ideaDeleted:"تم حذف الفكرة.",
  chars:"حرف متبقٍ", required:"هذا الحقل مطلوب",
  justNow:"الآن", minAgo:"د", hrAgo:"س", dayAgo:"ي",
  privacy:"خصوصية الفكرة",
  privacyPublic:"عام — الجميع يرى التفاصيل كاملة",
  privacyTeaser:"تشويقي — تفاصيل مخفية للمستثمرين المهتمين فقط",
  privacyPrivate:"خاص — للمستثمرين المعتمدين فقط",
  lockedDetails:"التفاصيل مخفية — تواصل لطلب الاطلاع عليها",
  contactToView:"اطلب عرض التفاصيل",
  available:"متاح للاستثمار", connectPrivate:"تواصل خاص",
  showContact:"إظهار بيانات التواصل", hideContact:"إخفاء التواصل", contactInfo:"بيانات التواصل",
  premium:"بريميوم", premiumTitle:"اشترك في بريميوم", premiumSub:"وصول غير محدود لجميع الأفكار والمستثمرين",
  plan1:"أساسي", plan1Price:"99 ريال/شهر",
  plan2:"احترافي", plan2Price:"299 ريال/شهر",
  plan3:"مؤسسي", plan3Price:"999 ريال/شهر",
  subscribe:"اشترك الآن", currentPlan:"خطتك الحالية", free:"مجاني",
  boosted:"فكرة مميزة",
  adBanner:"إعلان مدفوع", adDesc:"أعلن هنا — تواصل معنا", contactUs:"تواصل",
  verifiedLabel:"موثق", howTitle:"كيف يعمل",
  moneyTitle:"كيف نجني المال",
  freeLimitTitle:"وصلت للحد المجاني",
  freeLimitMsg:"لقد نشرت 5 أفكار مجانية. اشترك في بريميوم لنشر أفكار غير محدودة.",
  freeLimitUsed:"استخدمت", freeLimitOf:"من 5 أفكار مجانية",
  upgradeToPro:"الترقية إلى بريميوم",
  freeIdeasLeft:"أفكار مجانية متبقية",
  lastFreeIdea:"هذه آخر فكرة مجانية لك!",
  unlimitedMember:"أنت مشترك في بريميوم — نشر غير محدود",
  allCat:"الكل",
  cats:["تقنية","صحة","تعليم","بيئة","مالية","ترفيه","اجتماعي","أخرى"],
  howSteps:[
    ["انشر فكرتك","اختر مستوى الخصوصية وحدد التمويل المطلوب"],
    ["يجدك المستثمرون","يبحث المستثمرون ويتواصلون معك مباشرة"],
    ["أتموا الصفقة","تواصل علني أو خاص وابدأ مشروعك"],
  ],
  moneyPoints:[
    "اشتراكات بريميوم — خطط شهرية للمؤسسين والمستثمرين",
    "تمييز الأفكار — ظهور أعلى الصفحة بـ49 ريال / 7 أيام",
    "إعلانات ممولة — بانر للشركات والمستثمرين الكبار",
    "عمولة الصفقات — 1.5% عند إتمام صفقة عبر المنصة",
  ],
  plan1Feat:["نشر 5 أفكار مجانية","10 رسائل/شهر","ظهور عادي"],
  plan2Feat:["أفكار غير محدودة","رسائل غير محدودة","ظهور مميز","شارة موثق"],
  plan3Feat:["كل مميزات الاحترافي","إعلان مثبت","تقارير تفصيلية","مدير حساب خاص"],
  saudiTag:"المنصة السعودية الأولى",
  statsLabels:["فكرة منشورة","ريال استثمار متاح","صفقة ناجحة"],
  openEmail:"فتح الإيميل", openWhatsapp:"فتح واتساب",
  msgTab:"رسالة", emailTab:"إيميل", waTab:"واتساب",
  loginPrompt:"سجّل دخولك للتواصل مع أصحاب الأفكار",
  freeCompare:["5 أفكار فقط","10 رسائل/شهر","بدون تمييز"],
  proCompare:["أفكار غير محدودة","رسائل غير محدودة","تمييز + شارة موثق"],
  recommended:"موصى به",
  startFrom:"يبدأ من 99 ريال/شهر — إلغاء في أي وقت",
  mostPopular:"الأكثر طلباً",
};

const EN = {
  appName:"Ideas", tagline:"The #1 platform connecting idea owners with investors",
  heroTitle:"Your Idea Deserves an Investor", heroSub:"Post your idea or find the perfect investment opportunity",
  heroBtn:"Start Free", heroBtn2:"Browse Ideas",
  feed:"Ideas", explore:"Explore", post:"Post Idea", profile:"My Account", investors:"Investors",
  login:"Sign In", signup:"Create Account", logout:"Sign Out",
  postIdea:"Post Your Idea", ideaTitle:"Idea Title", ideaDesc:"Full Description",
  ideaTeaser:"Teaser (shown to everyone)", ideaCategory:"Category",
  ideaBudget:"Funding Needed ($)", submit:"Publish Idea",
  invest:"Contact to Invest", like:"Like", send:"Send",
  comments:"Comments", addComment:"Add a comment...",
  search:"Search ideas or investors...", trending:"Trending", newest:"Newest",
  noIdeas:"No ideas yet. Be the first!",
  name:"Full Name", email:"Email", password:"Password",
  userType:"Account Type", founder:"Idea Owner", investor:"Investor", capital:"Available Capital ($)",
  haveAccount:"Already have an account?", noAccount:"Don't have an account?",
  welcome:"Welcome Back", joinUs:"Join the Idea Community",
  investMsg:"Hi, I'm interested in investing in your idea:",
  msgPlaceholder:"Write your message...", cancelMsg:"Cancel", sendMsg:"Send Message",
  msgSent:"Message sent! The founder will reach out soon.", close:"Close",
  myIdeas:"My Ideas", editProfile:"Edit Profile", bio:"About Me",
  saveProfile:"Save Changes", cancel:"Cancel", followers:"Followers", following:"Following", ideas:"Ideas",
  confirmDelete:"Are you sure you want to delete this idea?",
  yes:"Yes, Delete", no:"No, Keep It", ideaDeleted:"Idea deleted.",
  chars:"characters left", required:"This field is required",
  justNow:"just now", minAgo:"m", hrAgo:"h", dayAgo:"d",
  privacy:"Idea Privacy",
  privacyPublic:"Public — Everyone sees full details",
  privacyTeaser:"Teaser — Details hidden, only for interested investors",
  privacyPrivate:"Private — Approved investors only",
  lockedDetails:"Details hidden — contact to view",
  contactToView:"Request to View Details",
  available:"Available to Invest", connectPrivate:"Private Contact",
  showContact:"Show Contact Info", hideContact:"Hide Contact", contactInfo:"Contact Info",
  premium:"Premium", premiumTitle:"Subscribe to Premium", premiumSub:"Unlimited access to all ideas and investors",
  plan1:"Basic", plan1Price:"SAR 99/mo",
  plan2:"Pro", plan2Price:"SAR 299/mo",
  plan3:"Enterprise", plan3Price:"SAR 999/mo",
  subscribe:"Subscribe Now", currentPlan:"Your Plan", free:"Free",
  boosted:"Boosted Idea",
  adBanner:"Sponsored Ad", adDesc:"Advertise here — contact us", contactUs:"Contact",
  verifiedLabel:"Verified", howTitle:"How It Works",
  moneyTitle:"How We Make Money",
  freeLimitTitle:"Free Limit Reached",
  freeLimitMsg:"You've posted 5 free ideas. Subscribe to Premium for unlimited posting.",
  freeLimitUsed:"Used", freeLimitOf:"of 5 free ideas",
  upgradeToPro:"Upgrade to Premium",
  freeIdeasLeft:"free ideas remaining",
  lastFreeIdea:"This is your last free idea!",
  unlimitedMember:"Premium member — unlimited posting",
  allCat:"All",
  cats:["Tech","Health","Education","Environment","Finance","Entertainment","Social","Other"],
  howSteps:[
    ["Post Your Idea","Set privacy level and define funding needed"],
    ["Investors Find You","Investors browse and contact you directly"],
    ["Close the Deal","Public or private comm to launch your venture"],
  ],
  moneyPoints:[
    "Premium subscriptions — monthly plans for founders & investors",
    "Idea boosting — top of feed for SAR 49 / 7 days",
    "Paid ads — banner slots for companies & large investors",
    "Deal commission — 1.5% when a deal closes via platform",
  ],
  plan1Feat:["5 free ideas","10 messages/month","Standard visibility"],
  plan2Feat:["Unlimited ideas","Unlimited messages","Featured visibility","Verified badge"],
  plan3Feat:["All Pro features","Pinned ad","Detailed analytics","Dedicated account manager"],
  saudiTag:"Saudi Arabia's #1 Platform",
  statsLabels:["Ideas Posted","SAR Available","Deals Made"],
  openEmail:"Open Email", openWhatsapp:"Open WhatsApp",
  msgTab:"Message", emailTab:"Email", waTab:"WhatsApp",
  loginPrompt:"Sign in to contact idea owners",
  freeCompare:["5 ideas only","10 messages/month","No boosting"],
  proCompare:["Unlimited ideas","Unlimited messages","Boost + Verified badge"],
  recommended:"Recommended",
  startFrom:"From SAR 99/month — cancel anytime",
  mostPopular:"Most Popular",
};

const SEED_IDEAS = [
  {id:1,userId:"u2",userName:"محمد العتيبي",userAvatar:"مع",userType:"founder",title:"منصة تعليمية بالذكاء الاصطناعي",teaser:"منصة تعليمية مبتكرة تستخدم الذكاء الاصطناعي لتخصيص المحتوى لكل طالب.",description:"منصة تعليمية شاملة تستخدم الذكاء الاصطناعي لتحليل أسلوب تعلم كل طالب وتقديم محتوى مخصص. تشمل: تتبع التقدم، اختبارات تفاعلية، ومعلمين افتراضيين. الهدف: 50,000 مستخدم خلال السنة الأولى.",category:"تعليم",budget:300000,privacy:"teaser",likes:89,liked:false,comments:[],createdAt:Date.now()-86400000,verified:true,boosted:true},
  {id:2,userId:"u3",userName:"سارة الغامدي",userAvatar:"سغ",userType:"founder",title:"تطبيق صحة المرأة العربية",teaser:"أول تطبيق صحي متكامل مصمم خصيصاً للمرأة العربية مع مراعاة الخصوصية الثقافية.",description:"تطبيق يجمع بين متابعة الصحة الإنجابية، الاستشارات الطبية المشفرة، والتوعية الصحية. شراكات مع 20 مستشفى سعودي.",category:"صحة",budget:500000,privacy:"public",likes:134,liked:false,comments:[{id:1,userId:"u5",userName:"خالد",userAvatar:"خم",text:"فكرة رائعة!",createdAt:Date.now()-3600000}],createdAt:Date.now()-3600000*5,verified:false,boosted:false},
  {id:3,userId:"u4",userName:"فيصل الدوسري",userAvatar:"فد",userType:"founder",title:"سلسلة مطاعم الأكل الصحي",teaser:"سلسلة مطاعم عصرية تقدم وجبات صحية سريعة بأسعار منافسة في السوق السعودي.",description:"خطة توسع طموحة: 5 فروع في الرياض خلال عامين. مطعم تجريبي يعمل منذ عام بإيرادات 80,000 ريال شهرياً.",category:"أخرى",budget:800000,privacy:"private",likes:56,liked:false,comments:[],createdAt:Date.now()-60000*45,verified:true,boosted:false},
  {id:4,userId:"u5",userName:"خالد المالكي",userAvatar:"خم",userType:"founder",title:"تطبيق توصيل بضائع B2B",teaser:"ربط المصانع والموردين بالتجار مباشرة لخفض تكاليف الشحن 40%.",description:"منصة لوجستية ذكية تربط 500 مورد بـ2000 تاجر في المنطقة الشرقية. نموذج عمل قائم على عمولة 3%.",category:"مالية",budget:1200000,privacy:"public",likes:201,liked:false,comments:[],createdAt:Date.now()-3600000*8,verified:true,boosted:true},
];

const SEED_INVESTORS = [
  {id:"inv1",userName:"عبدالله الشهري",userAvatar:"عش",capital:2000000,bio:"مستثمر في قطاعات التقنية والصحة. 15 سنة خبرة.",categories:["تقنية","صحة"],contactPublic:true,email:"a.shahri@example.com",phone:"+966501234567",linkedin:"linkedin.com/in/ashah",verified:true},
  {id:"inv2",userName:"نورة السعد",userAvatar:"نس",capital:500000,bio:"رائدة أعمال ومستثمرة ملاك. أهتم بمشاريع المرأة والتعليم.",categories:["تعليم","اجتماعي"],contactPublic:false,email:"",phone:"",linkedin:"",verified:false},
  {id:"inv3",userName:"صندوق رؤية للاستثمار",userAvatar:"رؤ",capital:10000000,bio:"صندوق متخصص في الشركات الناشئة السعودية. نستثمر من 200K إلى 5M ريال.",categories:["تقنية","مالية","أخرى"],contactPublic:true,email:"invest@ruya.com.sa",phone:"+966112345678",linkedin:"linkedin.com/company/ruya",verified:true},
];

function timeAgo(ts, t) {
  const d = Date.now() - ts;
  if (d < 60000) return t.justNow;
  if (d < 3600000) return Math.floor(d / 60000) + t.minAgo;
  if (d < 86400000) return Math.floor(d / 3600000) + t.hrAgo;
  return Math.floor(d / 86400000) + t.dayAgo;
}

const ACOLORS = ["#1a5c35","#b8860b","#1a3a6e","#6b1f6b","#0a5c5c","#7a2e0a","#1a2e5c","#5c1a1a"];
function acolor(s) { let h = 0; for (let c of s) h = c.charCodeAt(0) + h * 31; return ACOLORS[Math.abs(h) % ACOLORS.length]; }

function Av({ i, s = 40, c = "#1a5c35" }) {
  return (
    <div style={{ width: s, height: s, borderRadius: "50%", background: c, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: s * 0.35, flexShrink: 0 }}>
      {i}
    </div>
  );
}

function PrivBadge({ p }) {
  const cfg = {
    public: { bg: "#e8f5ee", c: "#1a5c35", icon: "🌍", label: "عام" },
    teaser: { bg: "#fff8e0", c: "#8a6200", icon: "👁", label: "تشويقي" },
    private: { bg: "#fde8e8", c: "#7a1c1c", icon: "🔒", label: "خاص" },
  };
  const s = cfg[p] || cfg.public;
  return (
    <span style={{ background: s.bg, color: s.c, borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 700 }}>
      {s.icon} {s.label}
    </span>
  );
}

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #f7f3ec; font-family: 'Cairo', sans-serif; }
  ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-thumb { background: #d4a843; border-radius: 4px; }
  input, textarea, select, button { font-family: 'Cairo', sans-serif; }
  .card { background: #fff; border: 1px solid #ede5d4; border-radius: 20px; transition: box-shadow .2s; }
  .card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.09); }
  input, textarea, select { background: #faf7f2; border: 1.5px solid #e8dfc8; border-radius: 11px; padding: 12px 14px; color: #1a1a2e; font-size: 14px; outline: none; width: 100%; transition: border .2s; }
  input:focus, textarea:focus, select:focus { border-color: #d4a843; background: #fff9ee; }
  select option { background: #fff; }
  .btn-gold { background: linear-gradient(135deg,#c9921f,#e8b84b); color: #fff; border: none; border-radius: 12px; padding: 12px 24px; font-weight: 800; font-size: 14px; cursor: pointer; transition: all .2s; box-shadow: 0 4px 14px rgba(201,146,31,0.28); }
  .btn-gold:hover { transform: translateY(-1px); box-shadow: 0 7px 22px rgba(201,146,31,0.42); }
  .btn-green { background: linear-gradient(135deg,#1a5c35,#23934f); color: #fff; border: none; border-radius: 12px; padding: 12px 24px; font-weight: 800; font-size: 14px; cursor: pointer; transition: all .2s; }
  .btn-green:hover { transform: translateY(-1px); }
  .btn-outline { background: transparent; border: 2px solid #c9921f; color: #c9921f; border-radius: 12px; padding: 10px 20px; font-weight: 700; font-size: 14px; cursor: pointer; transition: all .2s; }
  .btn-outline:hover { background: #c9921f; color: #fff; }
  .btn-ghost { background: transparent; border: 1.5px solid #e0d9cc; color: #888; border-radius: 10px; padding: 8px 16px; font-size: 13px; cursor: pointer; font-weight: 600; transition: all .2s; }
  .btn-ghost:hover { border-color: #c9921f; color: #c9921f; }
  .ain { animation: fup .38s ease both; }
  @keyframes fup { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
  .nav { display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 8px 14px; color: #bbb; font-size: 11px; font-weight: 700; cursor: pointer; border: none; background: none; transition: color .2s; }
  .nav.on { color: #c9921f; }
  .tab { padding: 9px 18px; border: none; border-radius: 10px; font-weight: 700; font-size: 14px; cursor: pointer; transition: all .2s; background: transparent; color: #aaa; }
  .tab.on { background: linear-gradient(135deg,#c9921f,#e8b84b); color: #fff; box-shadow: 0 4px 12px rgba(201,146,31,.28); }
  .overlay { position: fixed; inset: 0; background: rgba(0,0,0,.45); backdrop-filter: blur(5px); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 20px; animation: ovi .2s ease; }
  @keyframes ovi { from { opacity:0; } to { opacity:1; } }
  .modal { background: #fff; border: 1px solid #ede5d4; border-radius: 22px; width: 100%; max-width: 500px; padding: 28px; animation: mup .3s ease; max-height: 90vh; overflow-y: auto; }
  @keyframes mup { from { transform:translateY(28px); opacity:0; } to { transform:translateY(0); opacity:1; } }
  .lang { background: none; border: 1.5px solid #e0d9cc; border-radius: 8px; color: #aaa; padding: 4px 10px; font-size: 12px; font-weight: 700; cursor: pointer; transition: all .2s; }
  .lang.on { border-color: #c9921f; color: #c9921f; background: rgba(201,146,31,.08); }
  .bgold { display: inline-block; background: linear-gradient(135deg,#c9921f,#e8b84b); color: #fff; border-radius: 16px; padding: 2px 10px; font-size: 11px; font-weight: 700; }
  .bgreen { display: inline-block; background: linear-gradient(135deg,#1a5c35,#23934f); color: #fff; border-radius: 16px; padding: 2px 10px; font-size: 11px; font-weight: 700; }
  .bblue { display: inline-block; background: #e8f0fe; color: #1a3a6e; border-radius: 16px; padding: 2px 10px; font-size: 11px; font-weight: 700; }
  .boost-ring { box-shadow: 0 0 0 2.5px #e8b84b, 0 6px 28px rgba(201,146,31,.2) !important; }
  .lb { display: flex; align-items: center; gap: 5px; background: none; border: none; color: #bbb; font-size: 13px; font-weight: 700; cursor: pointer; padding: 6px 10px; border-radius: 8px; transition: all .2s; }
  .lb:hover, .lb.on { color: #e53e3e; }
  .cb { display: flex; align-items: center; gap: 5px; background: none; border: none; color: #bbb; font-size: 13px; font-weight: 700; cursor: pointer; padding: 6px 10px; border-radius: 8px; transition: all .2s; }
  .cb:hover { color: #c9921f; }
  .ib { display: flex; align-items: center; gap: 6px; background: rgba(201,146,31,.08); border: 1.5px solid rgba(201,146,31,.4); color: #a07020; font-size: 13px; font-weight: 700; cursor: pointer; padding: 7px 14px; border-radius: 10px; transition: all .2s; }
  .ib:hover { background: linear-gradient(135deg,#c9921f,#e8b84b); color: #fff; border-color: transparent; }
  .stat { background: #fff; border-radius: 14px; padding: 18px; text-align: center; border: 1px solid #ede5d4; }
  .pcard { background: #fff; border: 2px solid #ede5d4; border-radius: 20px; padding: 22px; }
  .pcard.f { border-color: #c9921f; box-shadow: 0 8px 28px rgba(201,146,31,.18); }
`;

export default function App() {
  const [lang, setLang] = useState("ar");
  const [page, setPage] = useState("home");
  const [tab, setTab] = useState("feed");
  const [authMode, setAuthMode] = useState("login");
  const [user, setUser] = useState(null);
  const [ideas, setIdeas] = useState(SEED_IDEAS);
  const [toast, setToast] = useState(null);
  const [investTarget, setInvestTarget] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [showPricing, setShowPricing] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);

  const t = lang === "ar" ? AR : EN;
  const rtl = lang === "ar";

  function showToast(msg, type) {
    setToast({ msg, type: type || "ok" });
    setTimeout(() => setToast(null), 3500);
  }

  const myIdeas = user ? ideas.filter(i => i.userId === user.id) : [];
  const myCount = myIdeas.length;
  const isPremium = user && user.plan === "pro";
  const ideasLeft = Math.max(0, FREE_LIMIT - myCount);
  const hitLimit = user && !isPremium && myCount >= FREE_LIMIT;

  function goPost() {
    if (!user) { setAuthMode("login"); setPage("auth"); return; }
    if (hitLimit) { setShowPaywall(true); return; }
    setPage("post");
  }

  function handleAuth(u) { setUser(u); setPage("main"); }
  function handleLogout() { setUser(null); setPage("home"); }

  function toggleLike(id) {
    if (!user) { showToast("سجّل دخولك أولاً", "info"); return; }
    setIdeas(p => p.map(i => i.id === id ? { ...i, liked: !i.liked, likes: i.liked ? i.likes - 1 : i.likes + 1 } : i));
  }

  function addComment(id, text) {
    if (!user) return;
    const c = { id: Date.now(), userId: user.id, userName: user.name, userAvatar: user.avatar, text, createdAt: Date.now() };
    setIdeas(p => p.map(i => i.id === id ? { ...i, comments: [...i.comments, c] } : i));
  }

  function addIdea(idea) {
    if (hitLimit) { setShowPaywall(true); return; }
    const n = { ...idea, id: Date.now(), userId: user.id, userName: user.name, userAvatar: user.avatar, userType: user.userType, likes: 0, liked: false, comments: [], createdAt: Date.now(), verified: false, boosted: false };
    setIdeas(p => [n, ...p]);
    setTab("feed"); setPage("main");
    const left = FREE_LIMIT - myCount - 1;
    if (!isPremium && left === 0) showToast(t.lastFreeIdea, "info");
    else showToast("تم نشر فكرتك!");
  }

  function deleteIdea(id) {
    setIdeas(p => p.filter(i => i.id !== id));
    setDeleteTarget(null);
    showToast(t.ideaDeleted);
  }

  function handleUpgrade() {
    setUser(u => ({ ...u, plan: "pro" }));
    setShowPricing(false);
    setShowPaywall(false);
    showToast("مرحباً في بريميوم!");
  }

  return (
    <div dir={rtl ? "rtl" : "ltr"} style={{ fontFamily: "'Cairo', sans-serif", minHeight: "100vh", background: "#f7f3ec", color: "#1a1a2e", overflowX: "hidden" }}>
      <style>{CSS}</style>

      {toast && (
        <div style={{ position: "fixed", top: 18, left: "50%", transform: "translateX(-50%)", zIndex: 999, background: toast.type === "info" ? "#1a3a6e" : "#1a5c35", color: "#fff", padding: "11px 22px", borderRadius: 12, fontWeight: 700, fontSize: 14, boxShadow: "0 6px 24px rgba(0,0,0,.18)", whiteSpace: "nowrap", animation: "mup .3s ease" }}>
          {toast.msg}
        </div>
      )}

      {investTarget && <InvestModal idea={investTarget} t={t} user={user} onSend={() => { setInvestTarget(null); showToast(t.msgSent); }} onClose={() => setInvestTarget(null)} onLogin={() => { setAuthMode("login"); setPage("auth"); setInvestTarget(null); }} />}

      {deleteTarget && (
        <div className="overlay">
          <div className="modal" style={{ maxWidth: 340, textAlign: "center" }}>
            <div style={{ fontSize: 38, marginBottom: 14 }}>🗑️</div>
            <p style={{ color: "#555", marginBottom: 22, fontWeight: 600 }}>{t.confirmDelete}</p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <button className="btn-ghost" onClick={() => setDeleteTarget(null)}>{t.no}</button>
              <button style={{ background: "linear-gradient(135deg,#e53e3e,#c53030)", color: "#fff", border: "none", borderRadius: 12, padding: "10px 22px", fontWeight: 800, cursor: "pointer" }} onClick={() => deleteIdea(deleteTarget)}>{t.yes}</button>
            </div>
          </div>
        </div>
      )}

      {showPaywall && <PaywallModal t={t} myCount={myCount} onUpgrade={() => { setShowPaywall(false); setShowPricing(true); }} onClose={() => setShowPaywall(false)} />}
      {showPricing && <PricingModal t={t} onClose={() => setShowPricing(false)} onUpgrade={handleUpgrade} />}

      {/* Header */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(247,243,236,.96)", backdropFilter: "blur(18px)", borderBottom: "1px solid #e8dfc8", padding: "0 20px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => setPage(user ? "main" : "home")}>
            <div style={{ width: 34, height: 34, background: "linear-gradient(135deg,#c9921f,#e8b84b)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>💡</div>
            <span style={{ fontWeight: 900, fontSize: 20, color: "#1a1a2e" }}>{t.appName}</span>
          </div>
          <div style={{ display: "flex", gap: 5 }}>
            {["ar", "en"].map(l => <button key={l} className={"lang" + (lang === l ? " on" : "")} onClick={() => setLang(l)}>{l === "ar" ? "عربي" : "EN"}</button>)}
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button className="btn-gold" style={{ padding: "7px 13px", fontSize: 12 }} onClick={() => setShowPricing(true)}>{t.premium} ✨</button>
            {user ? (
              <>
                {!isPremium && myCount > 0 && (
                  <div style={{ display: "flex", alignItems: "center", gap: 5, background: ideasLeft === 0 ? "#fdecea" : "linear-gradient(135deg,#fdf8ee,#fff9e8)", border: "1px solid " + (ideasLeft === 0 ? "#f5c6c6" : "#e8b84b"), borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 700, color: ideasLeft === 0 ? "#c0392b" : "#c9921f", cursor: "pointer" }} onClick={() => setShowPricing(true)}>
                    {ideasLeft === 0 ? "🔒 " + t.upgradeToPro : "💡 " + ideasLeft + " " + t.freeIdeasLeft}
                  </div>
                )}
                <button className={hitLimit ? "btn-outline" : "btn-gold"} style={{ padding: "7px 13px", fontSize: 13 }} onClick={goPost}>
                  {hitLimit ? "🔒 " : "+ "}{t.post}
                </button>
                <button onClick={() => setPage("profile")} style={{ background: "none", border: "none", cursor: "pointer" }}>
                  <Av i={user.avatar} s={34} c={acolor(user.name)} />
                </button>
              </>
            ) : (
              <>
                <button className="btn-ghost" onClick={() => { setAuthMode("login"); setPage("auth"); }}>{t.login}</button>
                <button className="btn-green" style={{ padding: "8px 16px", fontSize: 14 }} onClick={() => { setAuthMode("signup"); setPage("auth"); }}>{t.signup}</button>
              </>
            )}
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 960, margin: "0 auto", padding: "22px 18px 96px" }}>
        {page === "home" && <HomePage t={t} lang={lang} onStart={() => { setAuthMode("signup"); setPage("auth"); }} onBrowse={() => setPage("main")} />}
        {page === "auth" && <AuthPage t={t} mode={authMode} setMode={setAuthMode} onAuth={handleAuth} />}
        {page === "main" && <MainPage t={t} tab={tab} setTab={setTab} ideas={ideas} investors={SEED_INVESTORS} user={user} onLike={toggleLike} onComment={addComment} onInvest={setInvestTarget} onDelete={setDeleteTarget} lang={lang} />}
        {page === "post" && user && <PostPage t={t} onSubmit={addIdea} onCancel={() => setPage("main")} ideasLeft={ideasLeft} isPremium={isPremium} myCount={myCount} />}
        {page === "profile" && user && <ProfilePage t={t} user={user} myIdeas={myIdeas} onLogout={handleLogout} onDelete={setDeleteTarget} onUpdate={setUser} onPricing={() => setShowPricing(true)} isPremium={isPremium} />}
      </main>

      {(page === "main" || page === "post" || page === "profile") && (
        <nav style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "rgba(247,243,236,.97)", backdropFilter: "blur(18px)", borderTop: "1px solid #e8dfc8", display: "flex", justifyContent: "space-around", zIndex: 50 }}>
          {[{ k: "main", ic: "🏠", l: t.feed }, { k: "post", ic: hitLimit ? "🔒" : "✨", l: t.post }, { k: "profile", ic: "👤", l: t.profile }].map(({ k, ic, l }) => (
            <button key={k} className={"nav" + (page === k ? " on" : "")} onClick={() => { if (k === "post") { goPost(); } else if (k === "profile" && !user) { setAuthMode("login"); setPage("auth"); } else { setPage(k); } }}>
              <span style={{ fontSize: 21 }}>{ic}</span>{l}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

function HomePage({ t, lang, onStart, onBrowse }) {
  return (
    <div className="ain">
      <div style={{ background: "linear-gradient(135deg,#1a1a2e 0%,#1a3a24 60%,#2e1a0a 100%)", borderRadius: 22, marginBottom: 20, overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=960&q=80') center/cover", opacity: .14 }} />
        <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "stretch" }}>
          <div style={{ padding: "40px 36px" }}>
            <div style={{ display: "inline-block", background: "rgba(232,184,75,.18)", border: "1px solid rgba(232,184,75,.4)", color: "#e8b84b", borderRadius: 20, padding: "3px 14px", fontSize: 11, fontWeight: 700, marginBottom: 14 }}>
              🇸🇦 {t.saudiTag}
            </div>
            <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", lineHeight: 1.35, marginBottom: 10 }}>{t.heroTitle}</h1>
            <p style={{ color: "rgba(255,255,255,.75)", fontSize: 14, lineHeight: 1.7, marginBottom: 22 }}>{t.heroSub}</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button className="btn-gold" style={{ fontSize: 14, padding: "12px 24px" }} onClick={onStart}>{t.heroBtn}</button>
              <button onClick={onBrowse} style={{ background: "rgba(255,255,255,.1)", border: "1.5px solid rgba(255,255,255,.28)", color: "#fff", borderRadius: 12, padding: "12px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>{t.heroBtn2}</button>
            </div>
          </div>
          <div style={{ minHeight: 240 }}>
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=85" alt="Saudi business meeting" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 18 }}>
        {["1,240+", "380M+", "950+"].map((val, i) => (
          <div key={i} className="stat">
            <div style={{ fontSize: 26, marginBottom: 4 }}>{["💡", "💰", "🤝"][i]}</div>
            <div style={{ fontWeight: 900, fontSize: 20, color: "#c9921f" }}>{val}</div>
            <div style={{ fontSize: 12, color: "#999", fontWeight: 600 }}>{t.statsLabels[i]}</div>
          </div>
        ))}
      </div>

      <div className="card" style={{ padding: "26px 22px", marginBottom: 16 }}>
        <h2 style={{ fontWeight: 900, fontSize: 18, marginBottom: 18 }}>⚡ {t.howTitle}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
          {t.howSteps.map(([title, desc], i) => (
            <div key={i} style={{ textAlign: "center", padding: 12 }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{["📝", "🔍", "🤝"][i]}</div>
              <h3 style={{ fontWeight: 800, fontSize: 14, marginBottom: 5 }}>{title}</h3>
              <p style={{ fontSize: 12, color: "#999", lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "linear-gradient(135deg,#c9921f,#e8b84b)", borderRadius: 14, padding: "14px 22px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ fontWeight: 800, color: "#fff", fontSize: 14 }}>{t.adBanner}</p>
          <p style={{ color: "rgba(255,255,255,.85)", fontSize: 12 }}>{t.adDesc}</p>
        </div>
        <button style={{ background: "#fff", border: "none", borderRadius: 10, padding: "9px 16px", fontWeight: 700, color: "#c9921f", cursor: "pointer", fontSize: 13 }}>{t.contactUs}</button>
      </div>
    </div>
  );
}

function MainPage({ t, tab, setTab, ideas, investors, user, onLike, onComment, onInvest, onDelete, lang }) {
  const [expandedId, setExpandedId] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("newest");
  const [cat, setCat] = useState(t.allCat);

  const filtered = ideas.filter(i => {
    const q = search.toLowerCase();
    const matchQ = !q || i.title.toLowerCase().includes(q) || i.teaser.toLowerCase().includes(q) || i.description.toLowerCase().includes(q);
    const matchC = cat === t.allCat || i.category === cat;
    return matchQ && matchC;
  }).sort((a, b) => filter === "trending" ? b.likes - a.likes : b.createdAt - a.createdAt);

  const boosted = filtered.filter(i => i.boosted);
  const rest = filtered.filter(i => !i.boosted);
  const sorted = [...boosted, ...rest];

  return (
    <div>
      <div style={{ display: "flex", gap: 6, marginBottom: 18, background: "#fff", borderRadius: 14, padding: 5, border: "1px solid #ede5d4" }}>
        {[{ k: "feed", l: t.feed }, { k: "investors", l: t.investors }, { k: "explore", l: t.explore }].map(({ k, l }) => (
          <button key={k} className={"tab" + (tab === k ? " on" : "")} style={{ flex: 1 }} onClick={() => setTab(k)}>{l}</button>
        ))}
      </div>

      <input placeholder={t.search} value={search} onChange={e => setSearch(e.target.value)} style={{ marginBottom: 14 }} />

      {tab === "feed" && (
        <div>
          <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
            {["newest", "trending"].map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{ padding: "6px 14px", borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: "pointer", border: "1.5px solid", background: filter === f ? "linear-gradient(135deg,#c9921f,#e8b84b)" : "transparent", color: filter === f ? "#fff" : "#aaa", borderColor: filter === f ? "transparent" : "#e8dfc8" }}>
                {f === "newest" ? t.newest : t.trending}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 7, marginBottom: 16, flexWrap: "wrap" }}>
            {[t.allCat, ...t.cats].map(c => (
              <button key={c} onClick={() => setCat(c)} style={{ padding: "4px 13px", borderRadius: 18, fontSize: 12, fontWeight: 700, cursor: "pointer", border: "1.5px solid", background: cat === c ? "linear-gradient(135deg,#c9921f,#e8b84b)" : "transparent", color: cat === c ? "#fff" : "#bbb", borderColor: cat === c ? "transparent" : "#e8dfc8" }}>
                {c}
              </button>
            ))}
          </div>
          <div style={{ background: "linear-gradient(90deg,#fdf8ee,#fff9e8)", border: "1px dashed #e8b84b", borderRadius: 12, padding: "11px 16px", marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 18 }}>📢</span>
            <div>
              <p style={{ fontWeight: 700, color: "#c9921f", fontSize: 12 }}>{t.adBanner}</p>
              <p style={{ color: "#bbb", fontSize: 11 }}>{t.adDesc}</p>
            </div>
          </div>
          {sorted.length === 0 && <div style={{ textAlign: "center", padding: 50, color: "#ccc" }}><div style={{ fontSize: 44, marginBottom: 10 }}>💭</div><p>{t.noIdeas}</p></div>}
          {sorted.map(idea => (
            <IdeaCard key={idea.id} idea={idea} t={t} user={user} onLike={onLike} onComment={onComment} onInvest={onInvest} onDelete={onDelete} expanded={expandedId === idea.id} onToggle={() => setExpandedId(expandedId === idea.id ? null : idea.id)} />
          ))}
        </div>
      )}

      {tab === "investors" && investors.map(inv => <InvestorCard key={inv.id} inv={inv} t={t} />)}

      {tab === "explore" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: 14 }}>
          {ideas.sort((a, b) => b.likes - a.likes).map(idea => (
            <div key={idea.id} className="card" style={{ padding: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span className="bgold">{idea.category}</span>
                <PrivBadge p={idea.privacy} />
              </div>
              <h3 style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>{idea.title}</h3>
              <p style={{ color: "#999", fontSize: 13, lineHeight: 1.5, marginBottom: 12 }}>{idea.teaser}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#c9921f", fontWeight: 800, fontSize: 13 }}>💰 ${idea.budget?.toLocaleString()}</span>
                <button className="ib" style={{ padding: "5px 12px", fontSize: 12 }} onClick={() => onInvest(idea)}>🤝 {t.invest}</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function IdeaCard({ idea, t, user, onLike, onComment, onInvest, onDelete, expanded, onToggle }) {
  const [commentText, setCommentText] = useState("");
  const [showC, setShowC] = useState(false);
  const isOwner = user && user.id === idea.userId;
  const canSee = idea.privacy === "public" || (user && idea.userId === user.id);

  function submitComment() {
    if (commentText.trim()) { onComment(idea.id, commentText.trim()); setCommentText(""); }
  }

  return (
    <div className={"card ain" + (idea.boosted ? " boost-ring" : "")} style={{ padding: "20px 22px", marginBottom: 14 }}>
      {idea.boosted && (
        <div style={{ background: "linear-gradient(90deg,#fef9e7,#fff3c0)", borderRadius: 8, padding: "5px 12px", marginBottom: 10, display: "flex", alignItems: "center", gap: 6, border: "1px solid #e8b84b" }}>
          <span>🌟</span><span style={{ fontWeight: 700, fontSize: 11, color: "#c9921f" }}>{t.boosted}</span>
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Av i={idea.userAvatar} s={38} c={acolor(idea.userName)} />
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <p style={{ fontWeight: 700, fontSize: 14 }}>{idea.userName}</p>
              {idea.verified && <span style={{ color: "#1a5c35", fontSize: 11, fontWeight: 700 }}>✓</span>}
            </div>
            <p style={{ fontSize: 11, color: "#ccc" }}>{timeAgo(idea.createdAt, t)}</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <PrivBadge p={idea.privacy} />
          <span className="bgold">{idea.category}</span>
          {isOwner && <button style={{ background: "none", border: "none", color: "#e53e3e", cursor: "pointer", fontSize: 15 }} onClick={() => onDelete(idea.id)}>🗑️</button>}
        </div>
      </div>

      <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 7, lineHeight: 1.35 }}>{idea.title}</h3>
      {idea.teaser && <p style={{ color: "#888", fontSize: 14, lineHeight: 1.6, marginBottom: 8, fontStyle: "italic", borderRight: "3px solid #e8b84b", paddingRight: 10 }}>{idea.teaser}</p>}

      {canSee && idea.description ? (
        <p style={{ color: "#666", fontSize: 13, lineHeight: 1.7, marginBottom: 10 }}>
          {expanded ? idea.description : idea.description.slice(0, 150) + (idea.description.length > 150 ? "..." : "")}
          {idea.description.length > 150 && (
            <span style={{ color: "#c9921f", cursor: "pointer", fontWeight: 700, marginRight: 4 }} onClick={onToggle}>
              {expanded ? " أقل" : " المزيد"}
            </span>
          )}
        </p>
      ) : idea.privacy !== "public" && (
        <div style={{ background: "#faf7f2", border: "1.5px dashed #e8b84b", borderRadius: 10, padding: "12px 16px", marginBottom: 10, display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ fontSize: 18 }}>🔒</span>
          <div>
            <p style={{ fontWeight: 700, color: "#c9921f", fontSize: 13 }}>{t.lockedDetails}</p>
            <p style={{ color: "#ccc", fontSize: 12, marginTop: 2 }}>{t.contactToView}</p>
          </div>
        </div>
      )}

      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "linear-gradient(135deg,#fdf8ee,#fff9e8)", borderRadius: 9, padding: "7px 13px", marginBottom: 14, border: "1px solid #f0e0b0" }}>
        <span>💰</span><span style={{ color: "#c9921f", fontWeight: 800, fontSize: 14 }}>${idea.budget?.toLocaleString()}</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
        <button className={"lb" + (idea.liked ? " on" : "")} onClick={() => onLike(idea.id)}>{idea.liked ? "❤️" : "🤍"} {idea.likes}</button>
        <button className="cb" onClick={() => setShowC(!showC)}>💬 {idea.comments.length}</button>
        <div style={{ marginRight: "auto" }}>
          <button className="ib" onClick={() => onInvest(idea)}>🤝 {t.invest}</button>
        </div>
      </div>

      {showC && (
        <div style={{ marginTop: 14, borderTop: "1px solid #f0e8dc", paddingTop: 14 }}>
          {idea.comments.map(c => (
            <div key={c.id} style={{ display: "flex", gap: 9, marginBottom: 10 }}>
              <Av i={c.userAvatar} s={26} c={acolor(c.userName)} />
              <div style={{ background: "#faf7f2", borderRadius: 9, padding: "7px 11px", flex: 1 }}>
                <p style={{ fontWeight: 700, fontSize: 11, color: "#c9921f", marginBottom: 2 }}>{c.userName}</p>
                <p style={{ fontSize: 13, color: "#555" }}>{c.text}</p>
              </div>
            </div>
          ))}
          {user && (
            <div style={{ display: "flex", gap: 7, marginTop: 7 }}>
              <input placeholder={t.addComment} value={commentText} onChange={e => setCommentText(e.target.value)} onKeyDown={e => e.key === "Enter" && submitComment()} style={{ flex: 1 }} />
              <button className="btn-gold" style={{ padding: "9px 14px", whiteSpace: "nowrap" }} onClick={submitComment}>{t.send}</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function InvestorCard({ inv, t }) {
  const [show, setShow] = useState(false);
  return (
    <div className="card" style={{ padding: 20, marginBottom: 14 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <Av i={inv.userAvatar} s={50} c={acolor(inv.userName)} />
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 3 }}>
            <h3 style={{ fontWeight: 800, fontSize: 15 }}>{inv.userName}</h3>
            {inv.verified && <span className="bgreen" style={{ fontSize: 10 }}>✓ {t.verifiedLabel}</span>}
          </div>
          <p style={{ color: "#999", fontSize: 13 }}>{inv.bio}</p>
        </div>
        <div style={{ textAlign: "center", background: "linear-gradient(135deg,#fdf8ee,#fff9e8)", borderRadius: 12, padding: "10px 14px", border: "1px solid #e8b84b", minWidth: 90 }}>
          <p style={{ fontWeight: 900, fontSize: 17, color: "#c9921f" }}>${(inv.capital / 1000).toFixed(0)}K</p>
          <p style={{ fontSize: 11, color: "#bbb", fontWeight: 600 }}>{t.available}</p>
        </div>
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
        {inv.categories.map(c => <span key={c} className="bblue">{c}</span>)}
      </div>
      {inv.contactPublic ? (
        <button className="btn-gold" style={{ width: "100%", padding: "10px" }} onClick={() => setShow(!show)}>
          {show ? "🙈 " + t.hideContact : "📞 " + t.showContact}
        </button>
      ) : (
        <button className="ib" style={{ width: "100%", padding: "10px", justifyContent: "center" }}>🔒 {t.connectPrivate}</button>
      )}
      {show && inv.contactPublic && (
        <div style={{ marginTop: 12, background: "#faf7f2", borderRadius: 10, padding: 14, border: "1px solid #e8dfc8" }}>
          <p style={{ fontWeight: 700, fontSize: 12, color: "#aaa", marginBottom: 8 }}>{t.contactInfo}:</p>
          {inv.email && <p style={{ fontSize: 13, marginBottom: 5 }}>📧 <a href={"mailto:" + inv.email} style={{ color: "#c9921f", fontWeight: 600 }}>{inv.email}</a></p>}
          {inv.phone && <p style={{ fontSize: 13, marginBottom: 5 }}>📱 <a href={"tel:" + inv.phone} style={{ color: "#c9921f", fontWeight: 600 }}>{inv.phone}</a></p>}
          {inv.linkedin && <p style={{ fontSize: 13 }}>💼 <a href={"https://" + inv.linkedin} target="_blank" rel="noreferrer" style={{ color: "#c9921f", fontWeight: 600 }}>{inv.linkedin}</a></p>}
        </div>
      )}
    </div>
  );
}

function AuthPage({ t, mode, setMode, onAuth }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", userType: "founder", capital: "" });
  const [errors, setErrors] = useState({});
  const isL = mode === "login";

  function validate() {
    const e = {};
    if (!isL && !form.name.trim()) e.name = t.required;
    if (!form.email.trim()) e.email = t.required;
    if (!form.password.trim()) e.password = t.required;
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    const name = isL ? form.email.split("@")[0] : form.name;
    const initials = name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
    onAuth({ id: "u" + Date.now(), name, email: form.email, avatar: initials, bio: "", userType: form.userType, capital: form.capital, followers: 0, following: 0, plan: "free" });
  }

  return (
    <div style={{ maxWidth: 420, margin: "36px auto" }} className="ain">
      <div className="card" style={{ padding: 34, boxShadow: "0 10px 36px rgba(0,0,0,.08)" }}>
        <div style={{ textAlign: "center", marginBottom: 26 }}>
          <div style={{ fontSize: 42, marginBottom: 10 }}>💡</div>
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 5 }}>{isL ? t.welcome : t.joinUs}</h2>
          <p style={{ color: "#bbb", fontSize: 13 }}>{t.tagline}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
          {!isL && (
            <>
              <input placeholder={t.name} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              {errors.name && <p style={{ color: "#e53e3e", fontSize: 12 }}>{errors.name}</p>}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
                {[{ v: "founder", l: t.founder, ic: "💡" }, { v: "investor", l: t.investor, ic: "💰" }].map(({ v, l, ic }) => (
                  <button key={v} onClick={() => setForm(f => ({ ...f, userType: v }))} style={{ padding: "11px", borderRadius: 11, border: "2px solid " + (form.userType === v ? "#c9921f" : "#e8dfc8"), background: form.userType === v ? "linear-gradient(135deg,#fdf8ee,#fff9e8)" : "#faf7f2", cursor: "pointer", fontWeight: 700, color: form.userType === v ? "#c9921f" : "#bbb", fontSize: 13, transition: "all .2s" }}>
                    {ic} {l}
                  </button>
                ))}
              </div>
              {form.userType === "investor" && <input type="number" placeholder={t.capital} value={form.capital} onChange={e => setForm(f => ({ ...f, capital: e.target.value }))} />}
            </>
          )}
          <div>
            <input type="email" placeholder={t.email} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
            {errors.email && <p style={{ color: "#e53e3e", fontSize: 12, marginTop: 3 }}>{errors.email}</p>}
          </div>
          <div>
            <input type="password" placeholder={t.password} value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} />
            {errors.password && <p style={{ color: "#e53e3e", fontSize: 12, marginTop: 3 }}>{errors.password}</p>}
          </div>
          <button className="btn-gold" style={{ width: "100%", padding: "13px", fontSize: 15, marginTop: 3 }} onClick={handleSubmit}>{isL ? t.login : t.signup}</button>
          <p style={{ textAlign: "center", color: "#bbb", fontSize: 13 }}>
            {isL ? t.noAccount : t.haveAccount}{" "}
            <span style={{ color: "#c9921f", cursor: "pointer", fontWeight: 700 }} onClick={() => setMode(isL ? "signup" : "login")}>{isL ? t.signup : t.login}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function PostPage({ t, onSubmit, onCancel, ideasLeft, isPremium, myCount }) {
  const [form, setForm] = useState({ title: "", teaser: "", description: "", category: t.cats[0], budget: "", privacy: "public" });
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.title.trim()) e.title = t.required;
    if (!form.teaser.trim()) e.teaser = t.required;
    if (form.privacy !== "private" && !form.description.trim()) e.description = t.required;
    if (!form.budget) e.budget = t.required;
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    onSubmit({ title: form.title.trim(), teaser: form.teaser.trim(), description: form.description.trim(), category: form.category, budget: parseInt(form.budget), privacy: form.privacy });
  }

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }} className="ain">
      <h1 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>💡 {t.postIdea}</h1>

      {!isPremium && (
        <div style={{ background: ideasLeft <= 1 ? "linear-gradient(135deg,#fdecea,#fff0ef)" : "linear-gradient(135deg,#fdf8ee,#fff9e8)", border: "1.5px solid " + (ideasLeft <= 1 ? "#f5c6c6" : "#e8b84b"), borderRadius: 14, padding: "14px 18px", marginBottom: 18, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontSize: 26 }}>{ideasLeft <= 1 ? "⚠️" : "💡"}</div>
            <div>
              <p style={{ fontWeight: 800, color: ideasLeft <= 1 ? "#c0392b" : "#c9921f", fontSize: 14 }}>
                {ideasLeft === 1 ? t.lastFreeIdea : ideasLeft + " " + t.freeIdeasLeft}
              </p>
              <p style={{ color: "#bbb", fontSize: 12, marginTop: 2 }}>{t.freeLimitUsed} {myCount} {t.freeLimitOf}</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: i < myCount ? "#c9921f" : "#e8dfc8" }} />
            ))}
          </div>
        </div>
      )}

      {isPremium && (
        <div style={{ background: "linear-gradient(135deg,#e8f5ee,#f0faf4)", border: "1.5px solid #23934f", borderRadius: 14, padding: "10px 18px", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 20 }}>✨</span>
          <p style={{ fontWeight: 700, color: "#1a5c35", fontSize: 13 }}>{t.unlimitedMember}</p>
        </div>
      )}

      <div className="card" style={{ padding: 26 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{ display: "block", marginBottom: 5, fontSize: 12, color: "#aaa", fontWeight: 700 }}>{t.ideaTitle}</label>
            <input placeholder={t.ideaTitle} value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
            {errors.title && <p style={{ color: "#e53e3e", fontSize: 12, marginTop: 3 }}>{errors.title}</p>}
          </div>
          <div>
            <label style={{ display: "block", marginBottom: 5, fontSize: 12, color: "#aaa", fontWeight: 700 }}>{t.ideaTeaser}</label>
            <input placeholder={t.ideaTeaser} value={form.teaser} maxLength={120} onChange={e => setForm(f => ({ ...f, teaser: e.target.value }))} />
            {errors.teaser && <p style={{ color: "#e53e3e", fontSize: 12, marginTop: 3 }}>{errors.teaser}</p>}
            <p style={{ fontSize: 11, color: "#ccc", marginTop: 3 }}>{120 - form.teaser.length} {t.chars}</p>
          </div>
          <div>
            <label style={{ display: "block", marginBottom: 7, fontSize: 12, color: "#aaa", fontWeight: 700 }}>{t.privacy}</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {[{ v: "public", l: "🌍 " + t.privacyPublic }, { v: "teaser", l: "👁 " + t.privacyTeaser }, { v: "private", l: "🔒 " + t.privacyPrivate }].map(({ v, l }) => (
                <button key={v} onClick={() => setForm(f => ({ ...f, privacy: v }))} style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", borderRadius: 11, border: "2px solid " + (form.privacy === v ? "#c9921f" : "#e8dfc8"), background: form.privacy === v ? "linear-gradient(135deg,#fdf8ee,#fff9e8)" : "#faf7f2", cursor: "pointer", textAlign: "start", transition: "all .2s" }}>
                  <span style={{ fontSize: 13, color: form.privacy === v ? "#c9921f" : "#aaa", fontWeight: 700 }}>{l}</span>
                </button>
              ))}
            </div>
          </div>
          {form.privacy !== "private" && (
            <div>
              <label style={{ display: "block", marginBottom: 5, fontSize: 12, color: "#aaa", fontWeight: 700 }}>{t.ideaDesc}</label>
              <textarea placeholder={t.ideaDesc} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} style={{ height: 130, resize: "vertical" }} />
              {errors.description && <p style={{ color: "#e53e3e", fontSize: 12, marginTop: 3 }}>{errors.description}</p>}
            </div>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={{ display: "block", marginBottom: 5, fontSize: 12, color: "#aaa", fontWeight: 700 }}>{t.ideaCategory}</label>
              <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                {t.cats.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: "block", marginBottom: 5, fontSize: 12, color: "#aaa", fontWeight: 700 }}>{t.ideaBudget}</label>
              <input type="number" placeholder="100000" value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))} />
              {errors.budget && <p style={{ color: "#e53e3e", fontSize: 12, marginTop: 3 }}>{errors.budget}</p>}
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn-ghost" style={{ flex: 1 }} onClick={onCancel}>{t.cancel}</button>
            <button className="btn-gold" style={{ flex: 2, padding: 13, fontSize: 14 }} onClick={handleSubmit}>🚀 {t.submit}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfilePage({ t, user, myIdeas, onLogout, onDelete, onUpdate, onPricing, isPremium }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: user.name, bio: user.bio || "", email: user.email || "", phone: "", linkedin: "" });

  function save() {
    const initials = form.name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
    onUpdate({ ...user, name: form.name, bio: form.bio, avatar: initials, email: form.email });
    setEditing(false);
  }

  return (
    <div className="ain">
      <div className="card" style={{ padding: 26, marginBottom: 18 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <Av i={user.avatar} s={64} c={acolor(user.name)} />
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <h2 style={{ fontSize: 19, fontWeight: 900 }}>{user.name}</h2>
              <span style={{ fontSize: 12, background: user.userType === "investor" ? "#e8f0fe" : "#fdf8ee", color: user.userType === "investor" ? "#1a3a6e" : "#c9921f", borderRadius: 8, padding: "2px 8px", fontWeight: 700 }}>{user.userType === "investor" ? t.investor : t.founder}</span>
              {isPremium && <span className="bgold" style={{ fontSize: 10 }}>✨ Pro</span>}
            </div>
            <p style={{ color: "#ccc", fontSize: 13 }}>{user.email}</p>
            {user.bio && <p style={{ color: "#777", fontSize: 14, marginTop: 4 }}>{user.bio}</p>}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 18 }}>
          {[{ l: t.ideas, v: myIdeas.length }, { l: t.followers, v: user.followers || 0 }, { l: t.following, v: user.following || 0 }].map(({ l, v }) => (
            <div key={l} style={{ textAlign: "center", background: "#faf7f2", borderRadius: 11, padding: "11px" }}>
              <p style={{ fontWeight: 900, fontSize: 20, color: "#c9921f" }}>{v}</p>
              <p style={{ fontSize: 11, color: "#ccc", fontWeight: 600 }}>{l}</p>
            </div>
          ))}
        </div>

        <div style={{ background: isPremium ? "linear-gradient(135deg,#e8f5ee,#f0faf4)" : "linear-gradient(135deg,#fdf8ee,#fff9e8)", borderRadius: 12, padding: "11px 14px", border: "1.5px solid " + (isPremium ? "#23934f" : "#e8b84b"), marginBottom: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ fontWeight: 700, color: isPremium ? "#1a5c35" : "#c9921f", fontSize: 13 }}>{t.currentPlan}: {isPremium ? t.plan2 + " ✨" : t.free}</p>
            <p style={{ color: "#ccc", fontSize: 11 }}>{isPremium ? t.unlimitedMember : myIdeas.length + " " + t.freeLimitOf}</p>
          </div>
          {!isPremium && <button className="btn-gold" style={{ padding: "7px 14px", fontSize: 12 }} onClick={onPricing}>{t.upgradeToPro}</button>}
        </div>

        {!editing ? (
          <div style={{ display: "flex", gap: 9, flexWrap: "wrap" }}>
            <button className="btn-outline" style={{ flex: 1 }} onClick={() => setEditing(true)}>✏️ {t.editProfile}</button>
            <button className="btn-ghost" style={{ color: "#e53e3e", borderColor: "rgba(229,62,62,.3)" }} onClick={onLogout}>{t.logout}</button>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder={t.name} />
            <textarea value={form.bio} onChange={e => setForm(f => ({ ...f, bio: e.target.value }))} placeholder={t.bio} style={{ height: 70, resize: "none" }} />
            <input value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder={t.email} />
            <div style={{ display: "flex", gap: 9 }}>
              <button className="btn-ghost" style={{ flex: 1 }} onClick={() => setEditing(false)}>{t.cancel}</button>
              <button className="btn-gold" style={{ flex: 2 }} onClick={save}>{t.saveProfile}</button>
            </div>
          </div>
        )}
      </div>

      <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 12 }}>💡 {t.myIdeas}</h3>
      {myIdeas.length === 0 && <div style={{ textAlign: "center", padding: 38, color: "#ccc" }}><div style={{ fontSize: 38, marginBottom: 8 }}>💭</div><p>{t.noIdeas}</p></div>}
      {myIdeas.map(idea => (
        <IdeaCard key={idea.id} idea={idea} t={t} user={user} onLike={() => {}} onComment={() => {}} onInvest={() => {}} onDelete={onDelete} expanded={false} onToggle={() => {}} />
      ))}
    </div>
  );
}

function InvestModal({ idea, t, user, onSend, onClose, onLogin }) {
  const [msg, setMsg] = useState(t.investMsg + ' "' + idea.title + '"\n\n');
  const [sent, setSent] = useState(false);
  const [tab, setTab] = useState("msg");

  if (!user) {
    return (
      <div className="overlay">
        <div className="modal" style={{ textAlign: "center" }}>
          <div style={{ fontSize: 42, marginBottom: 12 }}>🔒</div>
          <h3 style={{ fontWeight: 800, fontSize: 17, marginBottom: 8 }}>{t.login}</h3>
          <p style={{ color: "#bbb", fontSize: 14, marginBottom: 18 }}>{t.loginPrompt}</p>
          <div style={{ display: "flex", gap: 9, justifyContent: "center" }}>
            <button className="btn-ghost" onClick={onClose}>{t.cancel}</button>
            <button className="btn-gold" onClick={onLogin}>{t.login}</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overlay">
      <div className="modal">
        {sent ? (
          <div style={{ textAlign: "center", padding: "18px 0" }}>
            <div style={{ fontSize: 50, marginBottom: 14 }}>✅</div>
            <p style={{ fontWeight: 800, fontSize: 17, color: "#1a5c35", marginBottom: 8 }}>{t.msgSent}</p>
            <button className="btn-gold" style={{ marginTop: 6 }} onClick={onClose}>{t.close}</button>
          </div>
        ) : (
          <div>
            <h3 style={{ fontWeight: 800, fontSize: 17, marginBottom: 4 }}>🤝 {t.invest}</h3>
            <p style={{ color: "#bbb", fontSize: 13, marginBottom: 14 }}>{"→ "}<strong style={{ color: "#c9921f" }}>{idea.title}</strong></p>
            <div style={{ display: "flex", gap: 6, marginBottom: 14, background: "#faf7f2", borderRadius: 10, padding: 4 }}>
              {[{ k: "msg", l: t.msgTab }, { k: "email", l: t.emailTab }, { k: "wa", l: t.waTab }].map(({ k, l }) => (
                <button key={k} className={"tab" + (tab === k ? " on" : "")} style={{ flex: 1, padding: "8px", fontSize: 12 }} onClick={() => setTab(k)}>{l}</button>
              ))}
            </div>
            {tab === "msg" && (
              <div>
                <textarea value={msg} onChange={e => setMsg(e.target.value)} placeholder={t.msgPlaceholder} style={{ width: "100%", height: 110, resize: "none", marginBottom: 14 }} />
                <div style={{ display: "flex", gap: 9 }}>
                  <button className="btn-ghost" style={{ flex: 1 }} onClick={onClose}>{t.cancelMsg}</button>
                  <button className="btn-gold" style={{ flex: 2 }} onClick={() => { setSent(true); setTimeout(onSend, 1400); }}>{t.sendMsg}</button>
                </div>
              </div>
            )}
            {tab === "email" && (
              <div style={{ textAlign: "center", padding: 18 }}>
                <p style={{ color: "#bbb", fontSize: 14, marginBottom: 14 }}>📧 {idea.userName}</p>
                <a href={"mailto:hello@ideapart.com?subject=" + idea.title} className="btn-gold" style={{ display: "inline-block", padding: "11px 22px", borderRadius: 11, textDecoration: "none", color: "#fff", fontWeight: 700 }}>{t.openEmail}</a>
              </div>
            )}
            {tab === "wa" && (
              <div style={{ textAlign: "center", padding: 18 }}>
                <p style={{ color: "#c9921f", fontWeight: 800, fontSize: 16, marginBottom: 4 }}>📱 +966 50 000 0000</p>
                <a href="https://wa.me/966500000000" target="_blank" rel="noreferrer" className="btn-green" style={{ display: "inline-block", padding: "11px 22px", borderRadius: 11, textDecoration: "none", color: "#fff", fontWeight: 700 }}>{t.openWhatsapp}</a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function PaywallModal({ t, myCount, onUpgrade, onClose }) {
  return (
    <div className="overlay">
      <div className="modal" style={{ maxWidth: 420, textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 20 }}>
          {[0, 1, 2, 3, 4].map(i => (
            <div key={i} style={{ width: 14, height: 14, borderRadius: "50%", background: i < myCount ? "#c9921f" : "#e8dfc8", boxShadow: i < myCount ? "0 2px 8px rgba(201,146,31,.4)" : "none" }} />
          ))}
        </div>
        <div style={{ fontSize: 52, marginBottom: 14 }}>🔒</div>
        <h2 style={{ fontWeight: 900, fontSize: 20, marginBottom: 8 }}>{t.freeLimitTitle}</h2>
        <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7, marginBottom: 22, maxWidth: 320, margin: "0 auto 22px" }}>{t.freeLimitMsg}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 22, textAlign: "right" }}>
          <div style={{ background: "#faf7f2", borderRadius: 12, padding: "14px", border: "1px solid #e8dfc8" }}>
            <p style={{ fontWeight: 800, color: "#bbb", fontSize: 13, marginBottom: 8 }}>{t.free}</p>
            {t.freeCompare.map(f => <p key={f} style={{ fontSize: 12, color: "#ccc", padding: "3px 0" }}>{"✗ " + f}</p>)}
          </div>
          <div style={{ background: "linear-gradient(135deg,#fdf8ee,#fff9e8)", borderRadius: 12, padding: "14px", border: "2px solid #c9921f", position: "relative" }}>
            <div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#c9921f,#e8b84b)", color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 10px", borderRadius: 14, whiteSpace: "nowrap" }}>{t.recommended}</div>
            <p style={{ fontWeight: 800, color: "#c9921f", fontSize: 13, marginBottom: 8 }}>{t.plan2}</p>
            {t.proCompare.map(f => <p key={f} style={{ fontSize: 12, color: "#1a5c35", padding: "3px 0" }}>{"✓ " + f}</p>)}
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn-ghost" style={{ flex: 1 }} onClick={onClose}>{t.cancel}</button>
          <button className="btn-gold" style={{ flex: 2, padding: "13px", fontSize: 15 }} onClick={onUpgrade}>✨ {t.upgradeToPro}</button>
        </div>
        <p style={{ color: "#ddd", fontSize: 11, marginTop: 12 }}>{t.startFrom}</p>
      </div>
    </div>
  );
}

function PricingModal({ t, onClose, onUpgrade }) {
  const plans = [
    { name: t.plan1, price: t.plan1Price, feats: t.plan1Feat, featured: false, color: "#1a3a6e" },
    { name: t.plan2, price: t.plan2Price, feats: t.plan2Feat, featured: true, color: "#c9921f" },
    { name: t.plan3, price: t.plan3Price, feats: t.plan3Feat, featured: false, color: "#1a5c35" },
  ];
  return (
    <div className="overlay">
      <div className="modal" style={{ maxWidth: 660 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <div>
            <h2 style={{ fontWeight: 900, fontSize: 20 }}>{t.premiumTitle} ✨</h2>
            <p style={{ color: "#bbb", fontSize: 13 }}>{t.premiumSub}</p>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#ccc" }}>✕</button>
        </div>
        <div style={{ background: "linear-gradient(135deg,#fdf8ee,#fff9e8)", borderRadius: 13, padding: "14px 18px", border: "1px solid #e8b84b", marginBottom: 18 }}>
          <p style={{ fontWeight: 800, color: "#c9921f", fontSize: 14, marginBottom: 8 }}>💰 {t.moneyTitle}</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
            {t.moneyPoints.map((p, i) => (
              <li key={i} style={{ fontSize: 13, color: "#777", display: "flex", alignItems: "flex-start", gap: 7 }}>
                <span style={{ color: "#c9921f", fontWeight: 700 }}>•</span>{p}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
          {plans.map(plan => (
            <div key={plan.name} className={"pcard" + (plan.featured ? " f" : "")} style={{ borderColor: plan.featured ? "#c9921f" : "#ede5d4", position: "relative" }}>
              {plan.featured && (
                <div style={{ position: "absolute", top: -11, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#c9921f,#e8b84b)", color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 12px", borderRadius: 18, whiteSpace: "nowrap" }}>{t.mostPopular} ⭐</div>
              )}
              <div style={{ textAlign: "center", marginBottom: 14 }}>
                <h3 style={{ fontWeight: 800, fontSize: 14, color: plan.color, marginBottom: 4 }}>{plan.name}</h3>
                <p style={{ fontWeight: 900, fontSize: 18, color: "#1a1a2e" }}>{plan.price}</p>
              </div>
              <ul style={{ listStyle: "none", marginBottom: 16 }}>
                {plan.feats.map(f => (
                  <li key={f} style={{ fontSize: 11, color: "#777", padding: "3px 0", display: "flex", alignItems: "center", gap: 5 }}>
                    <span style={{ color: plan.color, fontWeight: 700 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <button style={{ width: "100%", padding: "10px", borderRadius: 10, background: plan.featured ? "linear-gradient(135deg,#c9921f,#e8b84b)" : "transparent", color: plan.featured ? "#fff" : plan.color, fontWeight: 700, cursor: "pointer", border: plan.featured ? "none" : "2px solid " + plan.color, fontSize: 12, transition: "all .2s" }} onClick={onUpgrade}>
                {t.subscribe}
              </button>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", color: "#ccc", fontSize: 11, marginTop: 14 }}>📞 idea@ideapart.com | +966 50 000 0000</p>
      </div>
    </div>
  );
}
