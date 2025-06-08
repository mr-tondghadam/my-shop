import MainCategories from "../../components/main/mainCategories";
import MainBanner from "../../components/main/banner";
import img1 from "../../assets/img/banner/AirPro.webp";
import img2 from "../../assets/img/banner/BoomBox_Mini.webp";
import img3 from "../../assets/img/banner/FitWatch.webp";
import img4 from "../../assets/img/banner/headphone-x100.webp";
import img5 from "../../assets/img/banner/vcam-pro.webp";
import airSoloBass from "../../assets/img/banner/airSoloBass.webp";
import p1 from "../../assets/img/p/p1.webp";
import p2 from "../../assets/img/p/p2.webp";
import p3 from "../../assets/img/p/p3.webp";
import p4 from "../../assets/img/p/p4.webp";
import p5 from "../../assets/img/p/p5.webp";
import p6 from "../../assets/img/p/p6.webp";
import Services from "../../components/main/services";
//BLOG IMG
import b1 from "../../assets/img/blog/laptopGuide.webp";
import b2 from "../../assets/img/blog/airpods.webp";
import b3 from "../../assets/img/blog/cable.webp";
import b4 from "../../assets/img/blog/fastCcharging.webp";
import b5 from "../../assets/img/blog/ssd.webp";
import "aos/dist/aos.css";

import BannerH from "../../components/main/BannerH";

import VCardProduct from "../../components/shared/VCardProduct";
import HCardProduct from "../../components/shared/HCardProduct";
import Publication from "../../components/main/publication";
import Brands from "../../components/main/brands";
import Footer from "../../components/main/footer";

const BannerData = {
  discount: "۳۰٪ تخفیف",
  title: "لبخند زیبا",
  date: "۲۰ دی تا ۸ بهمن",
  image: airSoloBass,
  title2: "ایر سولو باس",
  title3: "ایر سولو باس",
  title4: " مناسب برای علاقه‌مندان به موسیقی با باس قوی.",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "۳۰٪ تخفیف",
  title: "ساعات خوش",
  date: "۲۴ دی تا ۸ بهمن",
  image: airSoloBass,
  title2: "اسمارت سولو",
  title3: "فروش ویژه",
  title4:
    "با Smart Solo از کیفیت صدای بی‌نظیر، طراحی سبک و اتصال سریع لذت ببرید.",
  bgColor: "#3b0a72",
};

const data = [
  {
    id: "prd004",
    name: "دوربین حرفه‌ای V-Cam",
    backgroundColor: "#f42c37",
    textColor: "#fff",
    description: "ثبت لحظات با وضوح خیره‌کننده 4K.",
    image: img5,
    category: "تصویربرداری",
  },
  {
    id: "prd001",
    name: "هدفون بی‌سیم X100",
    backgroundColor: "#1E3A8A",
    textColor: "#fff",
    description: "تجربه صدایی شفاف با حذف نویز فعال.",
    image: img4,
    category: "صوتی",
  },
  {
    id: "prd002",
    name: "ساعت هوشمند FitWatch",
    backgroundColor: "lightgray",
    textColor: "#000",
    description: "پیگیری سلامتی با استایل مدرن و حرفه‌ای.",
    image: img3,
    category: "پوشیدنی",
  },
  {
    id: "prd003",
    name: "لپ‌تاپ فوق سبک AirPro",
    backgroundColor: "green",
    textColor: "#fff",
    description: "قدرت بالا در بدنه‌ای باریک و سبک.",
    image: img1,
    category: "کامپیوتر",
  },

  {
    id: "prd005",
    name: "اسپیکر بلوتوثی BoomBox Mini",
    backgroundColor: "#2dcc6f",
    textColor: "#000",
    description: "صدای قدرتمند در ابعاد کوچک و قابل حمل.",
    image: img2,
    category: "صوتی",
  },
];

const vCardData = [
  {
    _id: "p1",
    productName: "هدفون بی‌سیم تسکو مدل TH 5356",
    productImage: p1,
    category: "هدفون و هندزفری",
    sellingPrice: "560000",
    price: "750000",
  },
  {
    _id: "p2",
    productName: "موس بی‌سیم لاجیتک مدل M171",
    productImage: p2,
    category: "لوازم جانبی کامپیوتر",
    sellingPrice: "3400000",
    price: "4000000",
  },
  {
    _id: "p3",
    productName: "کیبورد گیمینگ ردراگون K552",
    productImage: p3,
    category: "کیبورد گیمینگ",
    sellingPrice: "1250000",
    price: "1400000",
  },
  {
    _id: "p4",
    productName: "مانیتور سامسونگ ۲۴ اینچ Full HD",
    productImage: p4,
    category: "مانیتور",
    sellingPrice: "4800000",
    price: "5200000",
  },
  {
    _id: "p5",
    productName: "هارد اکسترنال وسترن دیجیتال ۱ ترابایت",
    productImage: p5,
    category: "ذخیره‌سازی",
    sellingPrice: "1750000",
    price: "2000000",
  },
  {
    _id: "p6",
    productName: "اسپیکر بلوتوثی قابل حمل JBL GO 3",
    productImage: p6,
    category: "اسپیکر",
    sellingPrice: "950000",
    price: "1100000",
  },
];

const blogArticles = [
  {
    title: "چرا پاوربانک ضروری‌ترین ابزار روزمره است؟",
    image: b4,
    content: `در دنیای امروزی که وابستگی ما به دستگاه‌های الکترونیکی بیش از هر زمان دیگری شده، همراه داشتن یک پاوربانک به یکی از نیازهای ضروری روزمره تبدیل شده است. گوشی‌های هوشمند، تبلت‌ها، ساعت‌های هوشمند و حتی هدفون‌های بی‌سیم برای عملکرد پیوسته به شارژ مداوم نیاز دارند. از طرفی، استفاده مداوم از اینترنت، اپلیکیشن‌های سنگین و بازی‌های گرافیکی باعث کاهش سریع‌تر باتری می‌شود.

پاوربانک‌ها با ظرفیت‌های مختلفی عرضه می‌شوند؛ از مدل‌های کوچک ۵۰۰۰ میلی‌آمپری که برای یک بار شارژ گوشی مناسب‌اند، تا مدل‌های ۲۰۰۰۰ میلی‌آمپری که می‌توانند چند دستگاه را به‌صورت همزمان شارژ کنند. نکته مهم در خرید پاوربانک، توجه به ظرفیت واقعی، شدت جریان خروجی، پشتیبانی از شارژ سریع (Fast Charge) و داشتن مدارهای حفاظتی برای جلوگیری از افزایش دما و ولتاژ است.

اگر اهل سفر، فعالیت در فضای باز، یا حتی کارمندی هستید که تمام روز بیرون از خانه می‌مانید، یک پاوربانک خوب می‌تواند خیال‌تان را از خاموش شدن دستگاه‌هایتان راحت کند.`,
  },
  {
    title: "راهنمای خرید لپ‌تاپ در سال 2025",
    image: b1,
    content: `بازار لپ‌تاپ در سال 2025 به شدت رقابتی و متنوع است. برندهایی مانند Dell، HP، Apple، Asus و Lenovo همچنان جزو بازیگران اصلی هستند و هرکدام برای نیازهای مختلف کاربران مدل‌های مخصوص خود را ارائه می‌دهند. اگر قصد خرید لپ‌تاپ دارید، ابتدا باید نوع استفاده خود را مشخص کنید: استفاده روزمره، گیمینگ، طراحی گرافیک، برنامه‌نویسی یا کارهای سنگین محاسباتی.

پردازنده (CPU) یکی از مهم‌ترین قطعات لپ‌تاپ است؛ پردازنده‌های Intel سری Core i5 و i7 یا AMD Ryzen 5 و 7 برای اکثر کاربران کافی هستند. رم کمتر از 8 گیگابایت برای سال 2025 توصیه نمی‌شود و استفاده از حافظه SSD به جای HDD باعث افزایش چشمگیر سرعت سیستم خواهد شد.

عوامل دیگری مثل طول عمر باتری، کیفیت نمایشگر (رزولوشن، نرخ تازه‌سازی)، طراحی ظاهری و وزن نیز نقش مهمی در تصمیم‌گیری دارند. در نهایت، بودجه شما تعیین می‌کند که به سراغ لپ‌تاپی میان‌رده بروید یا یک مدل حرفه‌ای با امکانات کامل تهیه کنید.`,
  },
  {
    title: "حافظه SSD چیست و چرا بهتر از هارد معمولی است؟",
    image: b5,
    content: `SSD یا Solid State Drive نوعی حافظه ذخیره‌سازی است که از چیپ‌های حافظه فلش برای ذخیره داده استفاده می‌کند. برخلاف هارد دیسک‌های سنتی (HDD) که دارای قطعات مکانیکی و چرخان هستند، SSD هیچ‌گونه قطعه متحرکی ندارد. همین مسئله باعث شده که SSD‌ها بسیار سریع‌تر، سبک‌تر، بی‌صداتر و مقاوم‌تر در برابر ضربه باشند.

در استفاده روزمره، تفاوت سرعت SSD با HDD کاملاً محسوس است؛ راه‌اندازی سیستم‌عامل تنها در چند ثانیه انجام می‌شود، برنامه‌ها با سرعت بالا باز می‌شوند و کپی کردن فایل‌ها نیز با سرعت چند برابر انجام می‌شود. امروزه لپ‌تاپ‌ها و حتی سیستم‌های رومیزی حرفه‌ای عمدتاً به SSD مجهز هستند.

اگرچه قیمت SSD نسبت به HDD بالاتر است، اما مزایای آن در سرعت، طول عمر، کاهش مصرف انرژی و حتی امنیت اطلاعات آن را به انتخابی برتر تبدیل کرده است. اگر هنوز از هاردهای سنتی استفاده می‌کنید، ارتقاء به SSD ساده‌ترین و مؤثرترین راه برای افزایش سرعت سیستم شماست.`,
  },
  {
    title: "5 ویژگی مهم هنگام خرید هدفون بلوتوث",
    image: b2,
    content: `خرید هدفون بلوتوثی یکی از تصمیماتی است که اگر به درستی گرفته شود، تجربه شنیداری بسیار لذت‌بخشی برای شما فراهم می‌آورد. این نوع هدفون‌ها به دلیل حذف سیم و راحتی استفاده، محبوبیت زیادی پیدا کرده‌اند. اما برای انتخاب بهترین گزینه، باید به چند ویژگی مهم توجه داشت:

1. **کیفیت صدا**: هدفون‌های بلوتوثی خوب باید صدای شفاف، باس مناسب و توازن فرکانسی خوبی داشته باشند. تکنولوژی‌هایی مثل aptX و LDAC در کیفیت انتقال صدا مؤثرند.

2. **حذف نویز فعال (ANC)**: در مکان‌های پر سروصدا مانند هواپیما یا خیابان، این ویژگی به کاربر امکان می‌دهد تا در آرامش به موسیقی گوش دهد یا تماس تلفنی داشته باشد.

3. **عمر باتری**: هدفونی که بعد از ۲-۳ ساعت استفاده نیاز به شارژ دارد، مناسب استفاده روزانه نیست. به دنبال مدلی با عمر باتری حداقل ۸ تا ۱۰ ساعت باشید.

4. **طراحی و راحتی**: هدفون باید وزن مناسبی داشته باشد و در استفاده طولانی مدت گوش را خسته نکند. گوشی‌های ارگونومیک با سری‌های سیلیکونی جایگیری بهتری دارند.

5. **قابلیت اتصال چندگانه و پایداری اتصال**: برخی هدفون‌ها اجازه می‌دهند همزمان به چند دستگاه متصل شوید. نسخه بلوتوث بالاتر (مثل 5.0 یا 5.2) نیز در کیفیت اتصال نقش مهمی دارد.

با در نظر گرفتن این نکات، می‌توانید هدفونی انتخاب کنید که هم از نظر فنی قوی باشد و هم با سبک زندگی شما هماهنگ باشد.`,
  },
  {
    title: "چرا کابل‌های اورجینال اهمیت دارند؟",
    image: b3,
    content: `یکی از بخش‌های نادیده‌ گرفته‌شده اما بسیار حیاتی در دنیای دیجیتال، کابل‌های شارژ و انتقال داده هستند. بسیاری از کاربران برای صرفه‌جویی در هزینه به سراغ کابل‌های ارزان و بی‌نام‌ونشان می‌روند، اما این انتخاب می‌تواند آسیب‌های جدی به دستگاه وارد کند.

کابل‌های اورجینال معمولاً توسط خود شرکت سازنده دستگاه یا برندهای تأییدشده تولید می‌شوند. آن‌ها از مواد اولیه با کیفیت، کانکتورهای مقاوم و مدارهای محافظ استفاده می‌کنند. استفاده از کابل تقلبی یا بی‌کیفیت ممکن است باعث افزایش دما، نوسان ولتاژ، خرابی باتری یا حتی سوختن برد گوشی شود.

همچنین سرعت شارژ و انتقال داده نیز در کابل‌های اصلی بسیار بالاتر است. کابل‌های تقلبی در ظاهر شبیه کابل اصلی هستند اما از نظر کارایی فاصله زیادی دارند. اگر از تکنولوژی شارژ سریع استفاده می‌کنید، تنها کابل‌های اصل می‌توانند عملکرد مطلوبی داشته باشند.

در نهایت باید گفت که هزینه بیشتر برای کابل اورجینال، در مقایسه با هزینه تعمیر گوشی یا بازیابی اطلاعات، بسیار ناچیز است. پس بهتر است همیشه از کابل‌های معتبر و اصلی استفاده کنید.`,
  },
];

const Home = () => {
  return (
    <div className='h-[100%]'>
      <MainCategories />
      <MainBanner data={data} />
      <Services />
      <BannerH data={BannerData2} />
      <VCardProduct data={vCardData} heading='محبوب ترین' dataAos={"fade-up"} />
      <VCardProduct data={[...vCardData].reverse()} heading='پرفروش ترین' />
      <BannerH data={BannerData} />
      <HCardProduct data={vCardData} heading='جدیدترین' />
      <HCardProduct data={[...vCardData].reverse()} heading='بالاترین تخفیف' />
      <HCardProduct data={[...vCardData]} heading='بالاترین کیفیت' />
      <Brands />
      <Publication data={blogArticles} />
      <Footer />
    </div>
  );
};

export default Home;
