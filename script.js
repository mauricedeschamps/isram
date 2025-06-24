/**
 * Tokyo Halal Guide - イスラム教徒向けリンク集アプリ
 * 3カ国語対応 (日本語・英語・アラビア語)
 */

// アプリ設定
const AppConfig = {
    defaultLanguage: 'ja',
    supportedLanguages: ['ja', 'en', 'ar']
};

// 翻訳データ
const Translations = {
    ja: {
        "title": "東京ハラル・イスラム情報ガイド",
        "subtitle": "モスク・ハラル店・便利アプリへのリンク集",
        "mosques": "モスク",
        "tokyo-camii": "東京ジャーミイ（代々木上原）",
        "ohtsuka-masjid": "日本イスラーム文化センター マスジド大塚",
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
        "contact": "連絡先<br>mementomorikatsu@gmail.com",
        "mosque-icon-alt": "モスクアイコン",
        "restaurant-icon-alt": "レストランアイコン",
        "app-icon-alt": "アプリアイコン",
        "travel-icon-alt": "旅行アイコン"
    },
    en: {
        "title": "Tokyo Halal & Muslim Guide",
        "subtitle": "Links to Mosques, Halal Restaurants, and Useful Apps",
        "mosques": "Mosques",
        "tokyo-camii": "Tokyo Camii (Yoyogi Uehara)",
        "ohtsuka-masjid": "Japan Islamic Culture Center Masjid Otsuka",
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
        "contact": "Contact me<br>mementomorikatsu@gmail.com",
        "mosque-icon-alt": "Mosque icon",
        "restaurant-icon-alt": "Restaurant icon",
        "app-icon-alt": "App icon",
        "travel-icon-alt": "Travel icon"
    },
    ar: {
        "title": "دليل الحلال والمسلمين في طوكيو",
        "subtitle": "روابط للمساجد ومطاعم الحلال والتطبيقات المفيدة",
        "mosques": "المساجد",
        "tokyo-camii": "مسجد طوكيو (يويوجي أويهارا)",
        "ohtsuka-masjid": "مسجد مركز الثقافة الإسلامية الياباني (أوتسوكا)",
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
        "contact": "اتصل بي<br>mementomorikatsu@gmail.com",
        "mosque-icon-alt": "أيقونة المسجد",
        "restaurant-icon-alt": "أيقونة المطعم",
        "app-icon-alt": "أيقونة التطبيق",
        "travel-icon-alt": "أيقونة السفر"
    }
};

// 言語管理クラス
class LanguageManager {
    constructor() {
        this.currentLang = AppConfig.defaultLanguage;
        this.init();
    }

    init() {
        this.setupLanguageSwitcher();
        this.applyLanguage(this.currentLang);
        this.setupEventListeners();
    }

    setupLanguageSwitcher() {
        const switcher = document.querySelector('.language-switcher');
        AppConfig.supportedLanguages.forEach(lang => {
            const btn = document.createElement('button');
            btn.textContent = this.getLanguageName(lang);
            btn.dataset.lang = lang;
            switcher.appendChild(btn);
        });
    }

    getLanguageName(code) {
        const names = { ja: '日本語', en: 'English', ar: 'العربية' };
        return names[code];
    }

    applyLanguage(lang) {
        this.currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // テキストの翻訳
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (Translations[lang][key]) {
                el.innerHTML = Translations[lang][key];
            }
        });

        // 画像altテキストの翻訳
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            if (Translations[lang][key]) {
                el.alt = Translations[lang][key];
            }
        });
    }

    setupEventListeners() {
        document.querySelector('.language-switcher').addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                this.applyLanguage(e.target.dataset.lang);
            }
        });
    }
}

// アプリ起動
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
});