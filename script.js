/**
 * Tokyo Halal Guide - イスラム教徒向けリンク集アプリ
 * 機能: 3言語対応（日本語・英語・アラビア語）
 */

// アプリの設定
const AppConfig = {
  defaultLanguage: 'ja',
  supportedLanguages: ['ja', 'en', 'ar']
};

// 翻訳データ (JSON形式で管理)
const Translations = {
  ja: {
    title: "東京ハラル・イスラム情報ガイド",
    subtitle: "モスク・ハラル店・便利アプリへのリンク集",
    mosques: "モスク",
    "tokyo-camii": "東京ジャーミイ（代々木上原）",
    "Japan Islamic Culture Center Masjid (Mosque) Otsuka": "日本イスラーム文化センター マスジド（モスク）大塚

",
    "halal-restaurants": "ハラルレストラン",
    "japan-halal-list": "ジャパン・ハラール・ファンデーション認証店一覧",
    "halal-gourmet-japan": "ハラルグルメジャパン（検索サイト）",
    "useful-apps": "便利アプリ",
    "halal-gourmet-app": "ハラルグルメジャパン（アプリ版）",
    "qibla-finder": "キブラ方向検索アプリ",
    "travel-info": "観光情報",
    "gotokyo-guide": "東京イスラム観光ガイド（公式）",
    "muslim-travel-japan": "Muslim Travel Japan",
    "footer-text": "© 2024 東京ハラル情報ガイド - イスラム教徒のための便利リンク集",
    "contact": "連絡先<br>mementomorikatsu@gmail.com"
  },
  en: {
    title: "Tokyo Halal & Muslim Guide",
    subtitle: "Links to Mosques, Halal Restaurants, and Useful Apps",
    mosques: "Mosques",
    "tokyo-camii": "Tokyo Camii (Yoyogi Uehara)",
    "icc-mosque": "ICC Mosque (Nishi Waseda)",
    "halal-restaurants": "Halal Restaurants",
    "japan-halal-list": "Japan Halal Foundation Certified Shops",
    "halal-gourmet-japan": "Halal Gourmet Japan (Search Site)",
    "useful-apps": "Useful Apps",
    "halal-gourmet-app": "Halal Gourmet Japan (App)",
    "qibla-finder": "Qibla Finder App",
    "travel-info": "Travel Information",
    "gotokyo-guide": "Tokyo Islamic Guide (Official)",
    "muslim-travel-japan": "Muslim Travel Japan",
    "footer-text": "© 2024 Tokyo Halal Guide - Useful Links for Muslims",
    "contact": "Contact me<br>mementomorikatsu@gmail.com"
  },
  ar: {
    title: "دليل الحلال والمسلمين في طوكيو",
    subtitle: "روابط للمساجد ومطاعم الحلال والتطبيقات المفيدة",
    mosques: "المساجد",
    "tokyo-camii": "مسجد طوكيو (يويوجي أويهارا)",
    "Japan Islamic Culture Center Masjid (Mosque) Otsuka": "مركز الثقافة الإسلامية الياباني، مسجد أوتسوكا",
    "halal-restaurants": "مطاعم حلال",
    "japan-halal-list": "قائمة المطاعم المعتمدة من مؤسسة الحلال اليابانية",
    "halal-gourmet-japan": "موقع البحث عن مطاعم حلال في اليابان",
    "useful-apps": "تطبيقات مفيدة",
    "halal-gourmet-app": "تطبيق دليل الحلال في اليابان",
    "qibla-finder": "تطبيق تحديد اتجاه القبلة",
    "travel-info": "معلومات سياحية",
    "gotokyo-guide": "الدليل الإسلامي الرسمي لطوكيو",
    "muslim-travel-japan": "Muslim Travel Japan",
    "footer-text": "© 2024 دليل الحلال في طوكيو - روابط مفيدة للمسلمين",
    "contact": "اتصل بي<br>mementomorikatsu@gmail.com"
  }
};

// 言語切り替え機能
class LanguageSwitcher {
  constructor() {
    this.currentLang = AppConfig.defaultLanguage;
    this.init();
  }

  init() {
    this.renderLanguageButtons();
    this.changeLanguage(this.currentLang);
  }

  renderLanguageButtons() {
    const container = document.createElement('div');
    container.className = 'language-switcher';

    AppConfig.supportedLanguages.forEach(lang => {
      const btn = document.createElement('button');
      btn.textContent = this.getLanguageName(lang);
      btn.onclick = () => this.changeLanguage(lang);
      container.appendChild(btn);
    });

    const header = document.querySelector('header');
    header.insertBefore(container, header.firstChild);
  }

  getLanguageName(code) {
    const names = { ja: '日本語', en: 'English', ar: 'العربية' };
    return names[code];
  }

  changeLanguage(lang) {
    this.currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.applyTranslations();
  }

  applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.innerHTML = Translations[this.currentLang][key] || '';
    });
  }
}

// アプリ初期化
document.addEventListener('DOMContentLoaded', () => {
  new LanguageSwitcher();
});