// 多言語対応データ

const translations = {
    "en": {
        // ...他の翻訳はそのまま...
        "contact": "Contact me<br>mementomorikatsu@gmail.com"
    },
    "ja": {
        // ...他の翻訳はそのまま...
        "contact": "連絡先<br>mementomorikatsu@gmail.com"
    },
    "ar": {
        // ...他の翻訳はそのまま...
        "contact": "اتصل بي<br>mementomorikatsu@gmail.com"
    }
};

const translations = {
    "en": {
        "title": "Tokyo Halal & Muslim Guide",
        "subtitle": "Links to Mosques, Halal Restaurants, and Useful Apps",
        "mosques": "Mosques",
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
        "footer-text": "© 2024 Tokyo Halal Guide - Useful Links for Muslims"
    },
    "ja": {
        "title": "東京ハラル・イスラム情報ガイド",
        "subtitle": "モスク・ハラル店・便利アプリへのリンク集",
        "mosques": "モスク",
        "tokyo-camii": "東京ジャーミイ（代々木上原）",
        "icc-mosque": "ICCモスク（西早稲田）",
        "halal-restaurants": "ハラルレストラン",
        "japan-halal-list": "ジャパン・ハラール・ファンデーション認証店一覧",
        "halal-gourmet-japan": "ハラルグルメジャパン（検索サイト）",
        "useful-apps": "便利アプリ",
        "halal-gourmet-app": "ハラルグルメジャパン（アプリ版）",
        "qibla-finder": "キブラ方向検索アプリ",
        "travel-info": "観光情報",
        "gotokyo-guide": "東京イスラム観光ガイド（公式）",
        "muslim-travel-japan": "Muslim Travel Japan",
        "footer-text": "© 2024 東京ハラル情報ガイド - イスラム教徒のための便利リンク集"
    },
    "ar": {
        "title": "دليل الحلال والمسلمين في طوكيو",
        "subtitle": "روابط للمساجد ومطاعم الحلال والتطبيقات المفيدة",
        "mosques": "المساجد",
        "tokyo-camii": "مسجد طوكيو (يويوجي أويهارا)",
        "icc-mosque": "مسجد ICC (نيشي واسيدا)",
        "halal-restaurants": "مطاعم حلال",
        "japan-halal-list": "قائمة المطاعم المعتمدة من مؤسسة الحلال اليابانية",
        "halal-gourmet-japan": "موقع البحث عن مطاعم حلال في اليابان",
        "useful-apps": "تطبيقات مفيدة",
        "halal-gourmet-app": "تطبيق دليل الحلال في اليابان",
        "qibla-finder": "تطبيق تحديد اتجاه القبلة",
        "travel-info": "معلومات سياحية",
        "gotokyo-guide": "الدليل الإسلامي الرسمي لطوكيو",
        "muslim-travel-japan": "Muslim Travel Japan",
        "footer-text": "© 2024 دليل الحلال في طوكيو - روابط مفيدة للمسلمين"
    }
};

// 言語切り替え関数
function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // テキストを翻訳
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });
}

// 初期表示（日本語）
changeLanguage('ja');