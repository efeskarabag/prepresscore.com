/* ==========================================================================
   Prepress Core Website - Interactive Logic, i18n Translation & Simulator Engine
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initArchitectureTabs();
    initLanguageSystem();
    initShowcaseWidget();
    initDownloadButtons();
});

/* ==========================================================================
   1. Navigasyon & Menü Kontrolleri
   ========================================================================== */
function initNavigation() {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mainNavMenu = document.getElementById("main-nav-menu");
    const navLinks = document.querySelectorAll(".nav-link, .nav-btn");
    const logo = document.getElementById("header-logo");

    if (mobileMenuBtn && mainNavMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenuBtn.classList.toggle("active");
            mainNavMenu.classList.toggle("active");
        });

        // Menü linklerine tıklandığında menüyü kapat
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenuBtn.classList.remove("active");
                mainNavMenu.classList.remove("active");
            });
        });
    }

    if (logo) {
        logo.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}

/* ==========================================================================
   2. Mimari Bölümü Sekme Kontrolleri
   ========================================================================== */
function initArchitectureTabs() {
    const tabButtons = document.querySelectorAll(".arch-tab-btn");
    const tabContents = document.querySelectorAll(".arch-tab-content");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");

            // Buton aktifliklerini sıfırla
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // İçerik aktifliklerini sıfırla ve hedefi göster
            tabContents.forEach(content => {
                content.classList.remove("active");
                if (content.getAttribute("id") === `tab-${targetTab}`) {
                    content.classList.add("active");
                }
            });
        });
    });
}

/* ==========================================================================
   3. Dil Destek Sistemi (i18n)
   ========================================================================== */
let currentLang = localStorage.getItem("preferredLang") || "tr";
if (currentLang !== "tr" && currentLang !== "en") {
    currentLang = "tr";
}

const translations = {
    tr: {
        "nav-features": "Özellikler",
        "nav-sandbox-header": "Canlı Simülatör ↗",
        "nav-sandbox": "Canlı Simülatör",
        "nav-architecture": "Mimari",
        "nav-downloads": "İndir",
        "hero-badge": "Sürüm v1.2.0 Aktif",
        "hero-title": "Illustrator İş Akışınızı <br><span class=\"gradient-text\">Profesyonel Olarak Otomatize Edin</span>",
        "hero-subtitle": "Prepress Core tarafından hazırlanan otomasyon modüllerine Illustrator içinden anında erişin. Güvenli HWID donanım kilidi ve 24 saat çevrimdışı çalışma desteğiyle kesintisiz baskı öncesi hazırlığı yapın.",
        "hero-btn-download": "Hemen Başlayın",
        "hero-btn-demo": "Sistemi Deneyimleyin",
        "hero-meta-encryption": "AES-256 Şifreleme",
        "hero-meta-cep": "CEP Entegrasyonu",
        "mockup-title": "Adobe Illustrator - Prepress Panel v1.2",
        "mockup-status-online": "ONLINE",
        "mockup-status-offline": "OFFLINE",
        "mockup-sec-modules": "Modüller",
        "mockup-mod-kros-name": "Kros Ekle",
        "mockup-mod-kros-desc": "Otomatik baskı krosları yerleştirir.",
        "mockup-mod-renk-name": "Renk Analizi",
        "mockup-mod-renk-desc": "Kanal ve mürekkep yoğunluğu kontrolü.",
        "mockup-mod-gorsel-name": "Görsel Kontrol",
        "mockup-mod-gorsel-desc": "Baskı öncesi çözünürlük denetimi.",
        "mockup-sec-sys": "Sistem Bilgisi",
        "mockup-sys-hwid": "HWID Durumu:",
        "mockup-sys-hwid-val": "KİLİTLENDİ (OK)",
        "mockup-sys-license": "Lisans Süresi:",
        "mockup-sys-license-val": "Kalan 28 Gün",
        "mockup-sys-sync": "Son Senkronizasyon:",
        "mockup-sys-sync-val": "Şimdi",
        "features-title": "Neden <span class=\"gradient-text\">Prepress Core</span>?",
        "features-subtitle": "İş akışınızın verimliliğini artıran ve kod güvenliğini en üst düzeyde koruyan endüstriyel özellikler.",
        "feat1-title": "Merkezi Script Dağıtımı",
        "feat1-desc": "Sizin için geliştirdiğimiz veya güncellediğimiz tüm JSX/ZXP modülleri, herhangi bir dosya kopyalama işlemi olmadan anında Illustrator eklenti panelinizde aktif hale gelir.",
        "feat2-title": "Gelişmiş HWID & Lisans Yönetimi",
        "feat2-desc": "Lisans anahtarını cihaz donanımıyla (HWID) eşleştirin. Çoklu cihaz limiti belirleyin, lisans süresini uzatın veya donanım kilidini tek tıkla uzaktan sıfırlayarak başka bilgisayara taşıyın.",
        "feat3-title": "24 Saat Çevrimdışı Modu",
        "feat3-desc": "İnternet kesintileri işinizi durduramaz. Prepress Core, son başarılı senkronizasyondan itibaren 24 saat boyunca şifreli yerel cache ile çalışmaya devam eder.",
        "feat4-title": "Otomatik & Sessiz Güncellemeler",
        "feat4-desc": "Arayüze yeni bir modül eklendiğinde kurulum dosyasını tekrar indirmenize gerek yoktur. Panel, yeni sürümleri API üzerinden otomatik denetler ve saniyeler içinde sessizce kurar.",
        "sandbox-title": "Prepress <span class=\"gradient-text\">Simülatör İstasyonu</span>",
        "sandbox-subtitle": "Sistemin arka planda nasıl çalıştığını görün. Dağıtıcı paneli üzerinden yapılan uzaktan işlemlerin Illustrator istemcinize yansımasını izleyin.",
        "sandbox-preview-title": "İnteraktif B2B Sunum Deneyimi",
        "sandbox-preview-desc": "Merkezi admin panelinden yönetilen HWID kilitlerini, RAM üzerinde şifre çözme (RAM-Decrypt) animasyonlarını, otomatik güncellemeleri ve lisans hedefli B2B modül yayınlarını 6 farklı senaryo ile canlı olarak deneyimleyin.",
        "sandbox-feat-1": "HWID Donanım Kilidi",
        "sandbox-feat-2": "RAM Üzerinde Şifre Çözme",
        "sandbox-feat-3": "Sessiz & Otomatik Güncelleme",
        "sandbox-feat-4": "24s Çevrimdışı Önbellek",
        "sandbox-btn-launch": "Simülatörü Başlat",
        "sandbox-admin-tag": "Dağıtıcı Sunucu Arayüzü",
        "sandbox-admin-badge": "SUNUCU AKTİF",
        "sandbox-notice-title": "Dağıtıcı & Sunucu Yönetim Merkezi",
        "sandbox-control-desc": "Sistem yöneticisi arayüzü gizlidir. Buradaki kontrolleri kullanarak dağıtıcının uzaktan yapabileceği lisans iptali veya modül güncelleme işlemlerinin matbaadaki Illustrator istemcisinde nasıl anlık işlendiğini deneyimleyebilirsiniz.",
        "sandbox-admin-group1": "1. Uzaktan Lisans Kontrolü",
        "sandbox-admin-help1": "Dağıtıcı olarak lisansı kapatıp son kullanıcının erişimini kesmeyi (Kill-Switch) deneyin.",
        "sandbox-admin-toggle-lbl": "Lisans Aktif (Kill-Switch)",
        "sandbox-admin-hwid-status": "Eşleşen Donanım: Yok",
        "sandbox-admin-group2": "2. Script Güncelleme Testi",
        "sandbox-admin-help2": "Dağıtıcı olarak istemciye yeni bir şifreli script güncellemesi (ZXP) gönderin.",
        "sandbox-admin-uploader-title": "Görsel Kontrol Modülü",
        "sandbox-admin-btn-publish": "Sunucudan Güncellemeyi Gönder",
        "sandbox-admin-group3": "Sunucu ve API Günlükleri",
        "sandbox-client-tag": "Illustrator CEP İstemcisi",
        "sandbox-client-net": "İnternet:",
        "sandbox-client-activate-title": "Sistemi Aktifleştirin",
        "sandbox-client-activate-help": "Eklentinizin donanım kimliğinize kilitlenmesi için size atanan lisans anahtarını girin.",
        "sandbox-client-activate-btn": "Aktifleştir (Cihaza Kilitle)",
        "sandbox-client-net-online": "ÇEVRİMİÇİ",
        "sandbox-client-net-offline": "ÇEVRİMDIŞI",
        "sandbox-client-hwid-badge": "HWID: Kilitli",
        "sandbox-client-modules-title": "Kullanılabilir Modüller",
        "sandbox-client-run": "Çalıştır",
        "sandbox-client-offline-title": "Çevrimdışı Sayaç (24h Limit)",
        "sandbox-client-offline-lbl": "Kalan Çevrimdışı Süre: 24 saat",
        "sandbox-client-log-title": "Matbaa Terminal Günlüğü",
        "arch-title": "Sistem <span class=\"gradient-text\">Nasıl Çalışır?</span>",
        "arch-subtitle": "Dağıtıcı ve matbaa arasındaki veri akışını ve lisans güvenliğini sağlayan 3 katmanlı altyapı.",
        "arch-tab-security": "AES-256 Şifreleme",
        "arch-tab-hwid": "HWID Lisanslama",
        "arch-tab-offline": "Çevrimdışı Toleransı",
        "arch-sec-title": "Kodlarınız Her Zaman Güvende",
        "arch-sec-desc": "Prepress Core tarafından hazırlanan scriptlerin çalınmasını ve yetkisiz dağıtılmasını önlemek için geliştirilmiş uçtan uca şifreleme.",
        "arch-sec-li1": "<strong>Sunucuda Şifreli Depolama:</strong> Hazırlanan modüller sunucuda AES-256-CBC algoritmasıyla şifreli olarak saklanır.",
        "arch-sec-li2": "<strong>Güvenli Aktarım:</strong> Dosyalar istemciye şifreli formatta transfer edilir. Ortadaki adam (MITM) saldırılarında bile kodlar okunamaz.",
        "arch-sec-li3": "<strong>RAM'de Çözme:</strong> CEP eklentisi kodları diske kaydetmez. Scriptler doğrudan bellek üzerinde (RAM) çözülerek Illustrator motorunda çalıştırılır.",
        "arch-sec-chart1": "JSX / ZXP Kodları",
        "arch-sec-chart1-desc": "Dağıtıcı Scriptleri",
        "arch-sec-arrow1": "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"currentColor\" stroke=\"none\" style=\"vertical-align:middle; margin-right:4px;\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg> AES-256 Şifreleme",
        "arch-sec-chart2": "Şifreli Sunucu Deposu",
        "arch-sec-chart2-desc": "Okunamaz Kod Blokları",
        "arch-sec-arrow2": "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"vertical-align:middle; margin-right:4px;\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"/><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"/></svg> HTTPS Transfer",
        "arch-sec-chart3": "Illustrator RAM",
        "arch-sec-chart3-desc": "Bellekte Çözülüp Çalıştırılır",
        "arch-hwid-title": "Çoklu Donanım & Esnek Lisanslama",
        "arch-hwid-desc": "Yönetici panelinizden lisans anahtarlarına ait donanım eşleşmelerini ve kullanım sınırlarını dinamik olarak yönetin.",
        "arch-hwid-li1": "<strong>Çoklu Cihaz Limiti:</strong> Her lisansa özel maksimum cihaz sayısı limitleri atayarak tek lisansın birden fazla bilgisayarda kullanılmasını sağlayın.",
        "arch-hwid-li2": "<strong>HWID Kilidi & Sıfırlama:</strong> İlk çalıştırmada donanımla eşleşen lisansları, gerektiğinde admin panelinden sıfırlayarak yeni bir cihaza kolayca taşıyın.",
        "arch-hwid-li3": "<strong>Etiket Tabanlı Yetki:</strong> Kullanıcılara departman veya rol etiketleri tanımlayarak paneldeki hangi modüllerin (scriptlerin) aktif olacağını uzaktan belirleyin.",
        "arch-hwid-chart1": "Illustrator CEP Paneli",
        "arch-hwid-chart1-desc": "UUID ve Lisans Anahtarı Alır",
        "arch-hwid-arrow1": "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"vertical-align:middle; margin-right:4px;\"><path d=\"M1.42 9a16 16 0 0 1 21.16 0\"/><path d=\"M5 12.55a11 11 0 0 1 14.08 0\"/><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"/><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"/></svg> Sunucu API Sorgusu",
        "arch-hwid-chart2": "HWID Doğrulama Motoru",
        "arch-hwid-chart2-desc": "UUID Kaydı Uyuşuyor mu?",
        "arch-hwid-arrow2": "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"vertical-align:middle; margin-right:4px;\"><path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"/><polyline points=\"22 4 12 14.01 9 11.01\"/></svg> Sonuç",
        "arch-hwid-chart3": "Erişim İzni / Engel",
        "arch-hwid-chart3-desc": "Panel Kilit Açılır veya Kapanır",
        "arch-off-title": "Kesintisiz Baskı Akışı",
        "arch-off-desc": "İnternet kesildiğinde işleriniz durmaz, ancak lisans koruması da esnetilmez. 24 saatlik güvenli tolerans limitleri devrededir.",
        "arch-off-li1": "<strong>Son Başarılı Senkronizasyon:</strong> İstemci yerelinde, sunucuyla kurulan son başarılı bağlantının zaman damgası saklanır.",
        "arch-off-li2": "<strong>24 Saatlik Sayaç:</strong> İnternet kopsa dahi istemci yerel önbellekteki şifreli scriptleri çözebilir ve tasarımcı 24 saat boyunca işine devam eder.",
        "arch-off-li3": "<strong>Güvenli Kilitlenme:</strong> Süre dolduğu an, internet bağlantısı kurulana kadar şifre çözme anahtarları bellekten silinir ve panel kilitlenir.",
        "arch-off-chart1": "İnternet Bağlantı Kontrolü",
        "arch-off-chart1-desc": "Matbaada Bağlantı Yok",
        "arch-off-arrow1": "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"vertical-align:middle; margin-right:4px;\"><path d=\"M6.5 7h11\"/><path d=\"M6.5 17h11\"/><path d=\"M6 20v-2a6 6 0 1 1 12 0v2\"/><path d=\"M6 4v2a6 6 0 1 0 12 0V4\"/></svg> 24h Kuralı Kontrolü",
        "arch-off-chart2": "Yerel Şifreli Cache",
        "arch-off-chart2-desc": "Son senkronizasyondan geçen süre &lt; 24 saat ise çalışmaya izin ver.",
        "arch-off-arrow2": "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"vertical-align:middle; margin-right:4px;\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg> Süre Aşımı",
        "arch-off-chart3": "Erişimi Kapat",
        "arch-off-chart3-desc": "Arayüz kilitlenir, internet beklenir.",
        "dl-title": "Kuruluma <span class=\"gradient-text\">Başlayın</span>",
        "dl-subtitle": "İş akışınıza dahil olmak için size atanan lisans anahtarını hazırlayın ve bilgisayarınıza uygun olan istemci uygulamasını indirin.",
        "dl-reqs-title": "Sistem Gereksinimleri:",
        "dl-reqs-os-win": "<strong>İşletim Sistemi (Windows):</strong> Windows 10 / 11 (64-bit)",
        "dl-reqs-os-mac": "<strong>İşletim Sistemi (macOS):</strong> macOS 10.15 (Catalina) ve üzeri",
        "dl-reqs-conn": "<strong>Bağlantı:</strong> Kurulum ve 24 saatte bir lisans kontrolü için internet erişimi.",
        "dl-card-win-title": "Windows İstemcisi",
        "dl-card-win-desc": "Illustrator CEP Eklentisi ve otomatik Windows kurulum aracı (BAT içeren ZIP paketi).",
        "dl-card-win-btn": "Windows için İndir",
        "dl-card-win-meta": "Boyut: ~61 KB",
        "dl-card-mac-title": "macOS İstemcisi",
        "dl-card-mac-desc": "Illustrator CEP Eklentisi ve otomatik macOS kurulum aracı (COMMAND içeren ZIP paketi).",
        "dl-card-mac-btn": "macOS için İndir",
        "dl-card-mac-meta": "Boyut: ~61 KB",
        "feat5-title": "Dinamik Tema Uyumu",
        "feat5-desc": "İstemci paneli, Adobe Illustrator'ın aktif renk ayarlarını (Dark, Light vb.) anlık algılar ve kendi arayüz temasını otomatik olarak senkronize eder.",
        "feat6-title": "Gelişmiş Kişiselleştirme",
        "feat6-desc": "Script modüllerini sürükleyip sıralayın, gruplayın ve çift tıklayarak kendi iş akışınıza göre isimlerini kolayca yeniden adlandırın. Arayüzde anlık arama da yapılabilir.",
        "feat7-title": "Kompakt Grid Arayüzü",
        "feat7-desc": "Yoğun iş akışlarında ekran alanını korumak için tasarlanan ultra minimal boyutlardaki butonlar ve grid düzeniyle maksimum verimlilik sağlayın.",
        "feat8-title": "Özel Arayüz Modalleri",
        "feat8-desc": "Tarayıcıların yerel çirkin alert/confirm pencereleri yerine, tamamen Prepress Core renkleriyle uyumlu, premium özel modal pencereleri kullanın.",
        "showcase-title": "Yeni Nesil <span class=\"gradient-text\">İstemci Deneyimi</span>",
        "showcase-subtitle": "Adobe Illustrator içine gömülü çalışan eklentimizin tamamen özelleştirilebilir, kompakt ve modern arayüzünü canlı deneyimleyin.",
        "showcase-ctrl1-title": "Illustrator Tema Senkronizasyonu",
        "showcase-ctrl1-desc": "Illustrator arayüz renklerini değiştirdiğinizde panelin anlık ve yumuşak uyumunu izleyin:",
        "showcase-ctrl2-title": "Kişiselleştirme & Kompakt Arayüz",
        "showcase-ctrl2-desc": "Sürükle-bırak sıralama animasyonunu ve yer tasarrufu sağlayan minimal grid düzenini test edin. Ayrıca sağdaki panelde script isimlerine çift tıklayarak kendiniz düzenleyebilirsiniz!",
        "showcase-btn-sort": "Modülleri Sırala",
        "showcase-btn-compact": "Kompakt Görünüm",
        "showcase-ctrl3-title": "Premium Onay Penceresi",
        "showcase-ctrl3-desc": "İşletim sistemlerinin kaba ve çirkin varsayılan onay modal pencereleri yerine tasarladığımız bütünleşik kullanıcı arayüzünü görün:",
        "showcase-btn-modal": "Özel Onay Modali Aç",
        "showcase-modal-title": "Görsel Kontrolü Başlat?",
        "showcase-modal-text": "Bu işlem yüksek çözünürlüklü görselleri tarayacaktır. Devam etmek istiyor musunuz?",
        "showcase-modal-cancel": "Vazgeç",
        "showcase-modal-confirm": "Onayla",
        "footer-desc": "Adobe Illustrator için dağıtıcı kontrollü uzaktan script dağıtım, lisanslama ve sürüm kontrol altyapısı.",
        "footer-header-product": "Ürün",
        "footer-header-contact": "İletişim & Destek",
        "nav-pricing": "Fiyatlandırma",
        "pricing-title": "Lisans <span class=\"gradient-text\">Paketleri</span>",
        "pricing-subtitle": "İhtiyacınıza en uygun lisans süresini ve modelini seçerek hemen çalışmaya başlayın.",
        "pricing-badge-popular": "En Avantajlı",
        "pricing-pack1-title": "1 Aylık Bireysel",
        "pricing-pack1-price": "$49",
        "pricing-pack1-period": "/ Ay",
        "pricing-pack2-title": "Yıllık Bireysel",
        "pricing-pack2-price": "$399",
        "pricing-pack2-period": "/ Yıl",
        "pricing-pack3-title": "Çoklu Lisans (Team)",
        "pricing-pack3-price": "$799",
        "pricing-pack3-period": "/ Yıl",
        "pricing-pack4-title": "Kurumsal & Sınırsız",
        "pricing-pack4-price": "$1499",
        "pricing-pack4-period": "/ Yıl",
        "pricing-feat-hwid": "1 Cihaz HWID Kilitli Lisans",
        "pricing-feat-team-hwid": "3 Cihaz HWID Kilitli Lisans",
        "pricing-feat-team-key": "Tek Yönetim / Lisans Anahtarı",
        "pricing-feat-offline": "24 Saat Çevrimdışı Çalışma",
        "pricing-feat-updates": "Sessiz Güncellemeler",
        "pricing-feat-support-std": "Standart Destek (E-posta)",
        "pricing-feat-support-pri": "Öncelikli Destek",
        "pricing-feat-support-ded": "7/24 Birebir Özel Destek",
        "pricing-feat-transfer-3": "Lisans Taşıma (3 Kez)",
        "pricing-feat-beta": "Yeni Beta Modüllere Erişim",
        "pricing-feat-corp-users": "Tek Lisans ile Çoklu Kullanıcı",
        "pricing-feat-corp-limit": "Sınırsız / Anlaşmalı Cihaz Slotu",
        "pricing-feat-corp-admin": "Dağıtıcı Kontrol Paneli Yetkileri",
        "pricing-feat-custom": "Özel Modül/Script Talepleri",
        "pricing-btn-select": "Satın Al (İletişim)",
        "pricing-custom-title": "Özel Modül & Entegrasyon Talepleri",
        "pricing-custom-desc": "İş akışınıza özel JSX/ZXP modül geliştirme, özel entegrasyonlar veya farklı lisans adetleri için bizimle iletişime geçerek teklif alın.",
        "pricing-custom-btn": "Teklif Al / İletişim",
        "sandbox-admin-group-tags": "3. Departman Yetki Etiketleri",
        "sandbox-admin-help-tags": "Kullanıcı etiketlerini değiştirerek Illustrator panelinde hangi modüllerin görüneceğini filtreleyin.",
        "sandbox-admin-tag-prep": '"Prepress" Etiketi (Kros Ekle)',
        "sandbox-admin-tag-design": '"Design" Etiketi (Renk Analizi)',
        "sandbox-admin-device-limit-lbl": "Cihaz Limiti:",
        "sandbox-admin-dev1": "1 Cihaz (Bireysel)",
        "sandbox-admin-dev3": "3 Cihaz (Çoklu)",
        "sandbox-admin-btn-reset": "HWID Sıfırla",
        "sandbox-admin-btn-extend": "Süre Uzat"
    },
    en: {
        "nav-features": "Features",
        "nav-sandbox-header": "Live Simulator ↗",
        "nav-sandbox": "Live Simulator",
        "nav-architecture": "Architecture",
        "nav-downloads": "Download",
        "hero-badge": "Version v1.2.0 Active",
        "hero-title": "Automate Your Illustrator <br><span class=\"gradient-text\">Workflow Professionally</span>",
        "hero-subtitle": "Instantly access prepress automation modules customized for you by Prepress Core. Ensure uninterrupted production with secure HWID hardware lock and 24h offline support.",
        "hero-btn-download": "Get Started",
        "hero-btn-demo": "Experience the System",
        "hero-meta-encryption": "AES-256 Encryption",
        "hero-meta-cep": "CEP Integration",
        "mockup-title": "Adobe Illustrator - Prepress Panel v1.2",
        "mockup-status-online": "ONLINE",
        "mockup-status-offline": "OFFLINE",
        "mockup-sec-modules": "Modules",
        "mockup-mod-kros-name": "Add Crop Marks",
        "mockup-mod-kros-desc": "Automatically inserts print crop marks.",
        "mockup-mod-renk-name": "Color Analysis",
        "mockup-mod-renk-desc": "Channel and ink density checks.",
        "mockup-mod-gorsel-name": "Visual Check",
        "mockup-mod-gorsel-desc": "Pre-press resolution checks.",
        "mockup-sec-sys": "System Info",
        "mockup-sys-hwid": "HWID Status:",
        "mockup-sys-hwid-val": "LOCKED (OK)",
        "mockup-sys-license": "License Period:",
        "mockup-sys-license-val": "28 Days Remaining",
        "mockup-sys-sync": "Last Sync:",
        "mockup-sys-sync-val": "Just Now",
        "features-title": "Why <span class=\"gradient-text\">Prepress Core</span>?",
        "features-subtitle": "Industrial-grade features that maximize your workflow efficiency and ensure bulletproof code security.",
        "feat1-title": "Centralized Script Distribution",
        "feat1-desc": "All JSX or ZXP modules developed or updated for you appear instantly in your Illustrator extension panel, requiring zero manual file transfers.",
        "feat2-title": "Advanced HWID & License Management",
        "feat2-desc": "Bind license keys to device hardware (HWID). Set custom device limits, extend license terms dynamically, or reset bindings with a single click to transfer to other systems.",
        "feat3-title": "24-Hour Offline Mode",
        "feat3-desc": "Internet cuts cannot stop your work. Prepress Core continues to work with encrypted local cache for 24 hours from the last successful sync.",
        "feat4-title": "Automatic & Silent Updates",
        "feat4-desc": "No need to download installer files for updates. The panel automatically checks the API for new versions and silently installs ZXP modules in the background without interrupting your work.",
        "sandbox-title": "Prepress <span class=\"gradient-text\">Simulator Station</span>",
        "sandbox-subtitle": "See how the system runs behind the scenes. Track how remote actions triggered from the distributor panel reflect on your Illustrator client.",
        "sandbox-preview-title": "Interactive B2B Presentation Experience",
        "sandbox-preview-desc": "Experience live B2B scenarios including central admin HWID locking, visual RAM-decrypt animations, automatic silent updates, and targeted license-based module publishing across 6 test modules.",
        "sandbox-feat-1": "HWID Hardware Lock",
        "sandbox-feat-2": "In-Memory RAM Decryption",
        "sandbox-feat-3": "Silent Auto-Update",
        "sandbox-feat-4": "24h Offline Cache",
        "sandbox-btn-launch": "Launch Simulator",
        "sandbox-admin-tag": "Distributor Server Interface",
        "sandbox-admin-badge": "SERVER ACTIVE",
        "sandbox-notice-title": "Distributor & Server Control Hub",
        "sandbox-control-desc": "The administration interface is private. You can use the controls below to simulate how remote license cancellation or module updates triggered by the distributor instantly process in the client panel.",
        "sandbox-admin-group1": "1. Remote License Control",
        "sandbox-admin-help1": "Try disabling the license as the distributor to cut client access (Kill-Switch).",
        "sandbox-admin-toggle-lbl": "License Active (Kill-Switch)",
        "sandbox-admin-hwid-status": "Matched Hardware: None",
        "sandbox-admin-group2": "2. Script Update Simulation",
        "sandbox-admin-help2": "Push a new encrypted script update (ZXP) to the client as the distributor.",
        "sandbox-admin-uploader-title": "Visual Check Module",
        "sandbox-admin-btn-publish": "Send Update from Server",
        "sandbox-admin-group3": "Server & API Logs",
        "sandbox-client-tag": "Illustrator CEP Client",
        "sandbox-client-net": "Internet:",
        "sandbox-client-activate-title": "Activate the System",
        "sandbox-client-activate-help": "Enter the license key assigned to you to bind the CEP panel to your hardware.",
        "sandbox-client-activate-btn": "Activate (Lock to Device)",
        "sandbox-client-net-online": "ONLINE",
        "sandbox-client-net-offline": "OFFLINE",
        "sandbox-client-hwid-badge": "HWID: Locked",
        "sandbox-client-modules-title": "Available Modules",
        "sandbox-client-run": "Run",
        "sandbox-client-offline-title": "Offline Counter (24h Limit)",
        "sandbox-client-offline-lbl": "Remaining Offline Time: 24 hours",
        "sandbox-client-log-title": "Studio Terminal Log",
        "arch-title": "How the <span class=\"gradient-text\">System Works</span>",
        "arch-subtitle": "3-tier infrastructure securing data transfer and license verification between the distributor and matbaa client.",
        "arch-tab-security": "AES-256 Encryption",
        "arch-tab-hwid": "HWID Licensing",
        "arch-tab-offline": "Offline Tolerance",
        "arch-sec-title": "Your Codes are Always Safe",
        "arch-sec-desc": "End-to-end encryption developed to prevent scripts prepared by the distributor from being stolen or unauthorized distribution.",
        "arch-sec-li1": "<strong>Encrypted Storage on Server:</strong> Developed modules are stored on the server using AES-256-CBC encryption.",
        "arch-sec-li2": "<strong>Secure Transfer:</strong> Files are transferred to the client in encrypted format. Even in man-in-the-middle (MITM) attacks, codes cannot be read.",
        "arch-sec-li3": "<strong>RAM Decryption:</strong> CEP panel does not save the files to disk. Scripts are decrypted directly in memory (RAM) and executed in the Illustrator engine.",
        "arch-sec-chart1": "JSX / ZXP Codes",
        "arch-sec-chart1-desc": "Distributor Scripts",
        "arch-sec-arrow1": "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"currentColor\" stroke=\"none\" style=\"vertical-align:middle; margin-right:4px;\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg> AES-256 Encryption",
        "arch-sec-chart2": "Encrypted Server Storage",
        "arch-sec-chart2-desc": "Unreadable Code Blocks",
        "arch-sec-arrow2": "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"vertical-align:middle; margin-right:4px;\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"/><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"/></svg> HTTPS Transfer",
        "arch-sec-chart3": "Illustrator RAM",
        "arch-sec-chart3-desc": "Decrypted and Run in Memory",
        "arch-hwid-title": "Multi-Device & Flexible Licensing",
        "arch-hwid-desc": "Dynamically manage hardware bindings, usage limits, and expiration terms for any license key directly from your admin dashboard.",
        "arch-hwid-li1": "<strong>Multi-Device Cap:</strong> Configure a maximum device limit (`maxDevices`) per license key, permitting one license to securely run across multiple designated machines.",
        "arch-hwid-li2": "<strong>HWID Binding & Reset:</strong> Bind keys to machine UUIDs on first run, and instantly clear bindings from the dashboard when migrating licenses to new workstations.",
        "arch-hwid-li3": "<strong>Tag-Based Entitlements:</strong> Map access tags to specific users in the admin dashboard to dynamically control which scripts appear in their Illustrator CEP panel.",
        "arch-hwid-chart1": "Illustrator CEP Panel",
        "arch-hwid-chart1-desc": "Gets UUID and License Key",
        "arch-hwid-arrow1": "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"vertical-align:middle; margin-right:4px;\"><path d=\"M1.42 9a16 16 0 0 1 21.16 0\"/><path d=\"M5 12.55a11 11 0 0 1 14.08 0\"/><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"/><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"/></svg> Server API Query",
        "arch-hwid-chart2": "HWID Validation Engine",
        "arch-hwid-chart2-desc": "Does UUID Record Match?",
        "arch-hwid-arrow2": "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"vertical-align:middle; margin-right:4px;\"><path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"/><polyline points=\"22 4 12 14.01 9 11.01\"/></svg> Result",
        "arch-hwid-chart3": "Access Granted / Blocked",
        "arch-hwid-chart3-desc": "Panel Unlocked or Closed",
        "arch-off-title": "Uninterrupted Printing Flow",
        "arch-off-desc": "When internet is cut off, your work does not stop, but license protection is not relaxed either. 24-hour secure tolerance limits are active.",
        "arch-off-li1": "<strong>Last Successful Sync:</strong> The timestamp of the last successful connection established with the server is stored locally on the client.",
        "arch-off-li2": "<strong>24-Hour Counter:</strong> Even if internet is cut, client can decrypt scripts in encrypted local cache and designer continues work for 24 hours.",
        "arch-off-li3": "<strong>Secure Lockout:</strong> As soon as the time is up, decryption keys are deleted from memory and panel is locked until internet connection is established.",
        "arch-off-chart1": "Internet Connection Check",
        "arch-off-chart1-desc": "No Connection at Studio",
        "arch-off-arrow1": "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"vertical-align:middle; margin-right:4px;\"><path d=\"M6.5 7h11\"/><path d=\"M6.5 17h11\"/><path d=\"M6 20v-2a6 6 0 1 1 12 0v2\"/><path d=\"M6 4v2a6 6 0 1 0 12 0V4\"/></svg> 24h Rule Check",
        "arch-off-chart2": "Local Encrypted Cache",
        "arch-off-chart2-desc": "Allow operation if time elapsed since last sync &lt; 24 hours.",
        "arch-off-arrow2": "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"vertical-align:middle; margin-right:4px;\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg> Timeout",
        "arch-off-chart3": "Close Access",
        "arch-off-chart3-desc": "Interface locks, waits for internet.",
        "dl-title": "Start <span class=\"gradient-text\">Installation</span>",
        "dl-subtitle": "Prepare your assigned license key and download the appropriate client application to integrate Prepress Core into your studio workflow.",
        "dl-reqs-title": "System Requirements:",
        "dl-reqs-os-win": "<strong>Operating System (Windows):</strong> Windows 10 / 11 (64-bit)",
        "dl-reqs-os-mac": "<strong>Operating System (macOS):</strong> macOS 10.15 (Catalina) and above",
        "dl-reqs-conn": "<strong>Connection:</strong> Internet access for setup and license verification once every 24 hours.",
        "dl-card-win-title": "Windows Client",
        "dl-card-win-desc": "Illustrator CEP Extension and automatic Windows installer tool (ZIP package with BAT).",
        "dl-card-win-btn": "Download for Windows",
        "dl-card-win-meta": "Size: ~61 KB",
        "dl-card-mac-title": "macOS Client",
        "dl-card-mac-desc": "Illustrator CEP Extension and automatic macOS installer tool (ZIP package with COMMAND).",
        "dl-card-mac-btn": "Download for macOS",
        "dl-card-mac-meta": "Size: ~61 KB",
        "feat5-title": "Dynamic Theme Sync",
        "feat5-desc": "The client panel instantly detects Adobe Illustrator's active color settings (Dark, Light, etc.) and automatically synchronizes its own UI theme.",
        "feat6-title": "Advanced Personalization",
        "feat6-desc": "Drag and drop to sort or group script modules, and double-click to easily rename them to fit your specific workflow. Changes are searchable and saved locally.",
        "feat7-title": "Compact Grid Layout",
        "feat7-desc": "Maximize efficiency with ultra-minimal button sizes and a dense grid layout designed to preserve valuable screen real estate during busy workflows.",
        "feat8-title": "Custom Interface Modals",
        "feat8-desc": "Instead of ugly, browser-native alert/confirm popups, enjoy premium custom modal dialogs fully matching the Prepress Core color palette.",
        "showcase-title": "Next-Gen <span class=\"gradient-text\">Client UI Experience</span>",
        "showcase-subtitle": "Experience the fully customizable, compact, and modern user interface of our Illustrator extension in real-time.",
        "showcase-ctrl1-title": "Illustrator Theme Sync",
        "showcase-ctrl1-desc": "Watch the panel adapt instantly and smoothly when you change Illustrator's interface colors:",
        "showcase-ctrl2-title": "Personalization & Compact Layout",
        "showcase-ctrl2-desc": "Test the drag-and-drop sorting animation and the space-saving minimal grid layout. You can also double-click script names in the panel to rename them!",
        "showcase-btn-sort": "Sort Modules",
        "showcase-btn-compact": "Compact View",
        "showcase-ctrl3-title": "Premium Confirmation Modal",
        "showcase-ctrl3-desc": "See the integrated user interface we designed instead of using ugly browser-native confirm popup screens:",
        "showcase-btn-modal": "Open Custom Modal",
        "showcase-modal-title": "Start Visual Check?",
        "showcase-modal-text": "This action will scan high-resolution visual assets. Do you want to continue?",
        "showcase-modal-cancel": "Cancel",
        "showcase-modal-confirm": "Confirm",
        "footer-desc": "Distributor-controlled remote script distribution, licensing, and version control infrastructure for Adobe Illustrator.",
        "footer-header-product": "Product",
        "footer-header-contact": "Contact & Support",
        "nav-pricing": "Pricing",
        "pricing-title": "License <span class=\"gradient-text\">Plans</span>",
        "pricing-subtitle": "Choose the license period and model that fits your needs and start working right away.",
        "pricing-badge-popular": "Best Value",
        "pricing-pack1-title": "1-Month Individual",
        "pricing-pack1-price": "$49",
        "pricing-pack1-period": "/ Mo",
        "pricing-pack2-title": "Yearly Individual",
        "pricing-pack2-price": "$399",
        "pricing-pack2-period": "/ Yr",
        "pricing-pack3-title": "Multi-License (Team)",
        "pricing-pack3-price": "$799",
        "pricing-pack3-period": "/ Yr",
        "pricing-pack4-title": "Enterprise & Unlimited",
        "pricing-pack4-price": "$1499",
        "pricing-pack4-period": "/ Yr",
        "pricing-feat-hwid": "1 Device HWID Locked License",
        "pricing-feat-team-hwid": "3 Devices HWID Locked Licenses",
        "pricing-feat-team-key": "Single Management / License Key",
        "pricing-feat-offline": "24-Hour Offline Work Ability",
        "pricing-feat-updates": "Silent Automatic Updates",
        "pricing-feat-support-std": "Standard Support (Email)",
        "pricing-feat-support-pri": "Priority Support",
        "pricing-feat-support-ded": "24/7 Dedicated Support",
        "pricing-feat-transfer-3": "License Transfer (3 Times)",
        "pricing-feat-beta": "Access to New Beta Modules",
        "pricing-feat-corp-users": "Multiple Users under Single License",
        "pricing-feat-corp-limit": "Unlimited / Agreed Device Slots",
        "pricing-feat-corp-admin": "Distributor Control Panel Privileges",
        "pricing-feat-custom": "Custom Module/Script Requests",
        "pricing-btn-select": "Buy Now (Contact)",
        "pricing-custom-title": "Custom Module & Integration Requests",
        "pricing-custom-desc": "Get a quote for custom JSX/ZXP module development, custom integrations, or tailored device license volumes by contacting us.",
        "pricing-custom-btn": "Get a Quote / Contact",
        "sandbox-admin-group-tags": "3. Department Access Tags",
        "sandbox-admin-help-tags": "Change user tags to filter which modules appear in the Illustrator panel.",
        "sandbox-admin-tag-prep": '"Prepress" Tag (Add Crop Marks)',
        "sandbox-admin-tag-design": '"Design" Tag (Color Analysis)',
        "sandbox-admin-device-limit-lbl": "Device Limit:",
        "sandbox-admin-dev1": "1 Device (Individual)",
        "sandbox-admin-dev3": "3 Devices (Multi-device)",
        "sandbox-admin-btn-reset": "Reset HWID",
        "sandbox-admin-btn-extend": "Extend Term"
    }
};

function initLanguageSystem() {
    const langBtn = document.getElementById("lang-switch-btn");
    if (!langBtn) return;

    langBtn.textContent = currentLang === "tr" ? "EN" : "TR";

    langBtn.addEventListener("click", () => {
        // Dil değiştir
        currentLang = currentLang === "tr" ? "en" : "tr";
        localStorage.setItem("preferredLang", currentLang);
        langBtn.textContent = currentLang === "tr" ? "EN" : "TR";
        
        applyTranslations();
    });
    
    applyTranslations();
}

function applyTranslations() {
    const elements = document.querySelectorAll("[data-i18n]");
    const dict = translations[currentLang] || translations["tr"];
    if (!dict) return;
    
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            // Eğer element input placeholder ise placeholder'ı çevir, yoksa innerHTML veya textContent'i çevir
            if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
                el.setAttribute("placeholder", dict[key]);
            } else {
                el.innerHTML = dict[key];
            }
        }
    });

    // Sayfa başlığını güncelleyelim
    document.title = currentLang === "tr"
        ? "Prepress Core | Adobe Illustrator Otomasyon Platformu"
        : "Prepress Core | Adobe Illustrator Automation Platform";

    // Meta açıklamayı çevirelim
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute("content", currentLang === "tr"
            ? "Adobe Illustrator için merkezi script yönetimi, HWID lisanslama, 24 saat çevrimdışı toleransı ve sessiz kurulum desteği sunan endüstriyel standartta prepress otomasyon sistemi."
            : "Industrial standard prepress automation system for Adobe Illustrator offering centralized script management, HWID licensing, 24h offline tolerance, and silent install."
        );
    }

    // Telif hakkı metnini güncelleyelim
    const copyrightText = document.getElementById("copyright-text");
    if (copyrightText) {
        copyrightText.innerHTML = currentLang === "tr"
            ? '<a href="https://www.efeskarabag.com.tr" target="_blank" class="copyright-link">KARABAG</a> &copy; 2026 Prepress Core. Tüm hakları saklıdır. Adobe, Illustrator and CEP are registered trademarks of Adobe Inc.'
            : '<a href="https://www.efeskarabag.com.tr" target="_blank" class="copyright-link">KARABAG</a> &copy; 2026 Prepress Core. All rights reserved. Adobe, Illustrator and CEP are registered trademarks of Adobe Inc.';
    }

}

// ==========================================================================
// 9. Yeni Nesil Arayüz Deneyimi (Showcase) Etkileşim Kodları
// ==========================================================================
function initShowcaseWidget() {
    const mockup = document.getElementById("cep-showcase-mockup");
    if (!mockup) return;

    // 1. Tema Geçişleri (Theme Switcher)
    const themeBtns = document.querySelectorAll(".theme-btn");
    themeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Aktif butonu değiştir
            themeBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Mockup temasını değiştir
            const theme = btn.getAttribute("data-theme");
            mockup.className = `illustrator-frame theme-${theme}`;
        });
    });

    // 2. Kompakt Görünüm Toggling
    const compactBtn = document.getElementById("btn-showcase-compact");
    const modulesContainer = document.getElementById("showcase-modules-list");
    if (compactBtn && modulesContainer) {
        compactBtn.addEventListener("click", () => {
            modulesContainer.classList.toggle("compact-layout");
            compactBtn.classList.toggle("active");
        });
    }

    // 3. Sıralama Animasyonu Simülasyonu
    const sortBtn = document.getElementById("btn-showcase-sort");
    if (sortBtn && modulesContainer) {
        let isSorted = false;
        sortBtn.addEventListener("click", () => {
            const items = modulesContainer.querySelectorAll(".showcase-mod-item");
            
            // Sıralama animasyonu (pulse) ekle
            items.forEach(item => item.classList.add("sorting"));
            
            setTimeout(() => {
                // Elemanların CSS 'order' özelliğini değiştirerek yer değiştirme simülasyonu yap
                if (!isSorted) {
                    items[0].style.order = "3"; // Kros Ekle en alta
                    items[1].style.order = "1"; // Renk Analizi en üste
                    items[2].style.order = "2"; // Görsel Kontrol ortaya
                    isSorted = true;
                } else {
                    items[0].style.order = "1";
                    items[1].style.order = "2";
                    items[2].style.order = "3";
                    isSorted = false;
                }
                
                // Sıralama animasyonunu kaldır
                setTimeout(() => {
                    items.forEach(item => item.classList.remove("sorting"));
                }, 100);
            }, 300);
        });
    }

    // 4. Özel Modal Testi (Confirm Modal)
    const modalTrigger = document.getElementById("btn-showcase-modal");
    const modalOverlay = document.getElementById("showcase-modal-overlay");
    const modalCancel = document.getElementById("btn-modal-cancel");
    const modalConfirm = document.getElementById("btn-modal-confirm");

    if (modalTrigger && modalOverlay) {
        modalTrigger.addEventListener("click", () => {
            modalOverlay.classList.add("active");
        });
    }

    const closeModal = () => {
        if (modalOverlay) {
            modalOverlay.classList.remove("active");
        }
    };

    if (modalCancel) modalCancel.addEventListener("click", closeModal);
    if (modalConfirm) modalConfirm.addEventListener("click", closeModal);

    // 5. Düzenlenebilir İsimler (contenteditable) Yönetimi
    // Düzenlenen modül isminde data-i18n'i kaldır ki dil değişiminde sıfırlanmasın
    const editableNames = modulesContainer.querySelectorAll(".mod-name");
    editableNames.forEach(nameEl => {
        nameEl.addEventListener("focus", () => {
            nameEl.removeAttribute("data-i18n");
        });
        nameEl.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                nameEl.blur();
            }
        });
    });
}

/* ==========================================================================
   10. İndirme Butonları Kontrolü
   ========================================================================== */
function initDownloadButtons() {
    const winBtn = document.getElementById("btn-dl-win");
    const macBtn = document.getElementById("btn-dl-mac");

    const showDownloadAlert = (e, osName) => {
        const msg = currentLang === "tr"
            ? `Prepress Core ${osName} İstemci kurulum paketi (ZIP) indiriliyor... Lütfen matbaa yöneticinizden aldığınız lisans anahtarını hazırlayın.`
            : `Downloading Prepress Core ${osName} Client installation package (ZIP)... Please prepare the license key obtained from your studio administrator.`;
        alert(msg);
    };

    if (winBtn) {
        winBtn.addEventListener("click", (e) => showDownloadAlert(e, "Windows"));
    }
    if (macBtn) {
        macBtn.addEventListener("click", (e) => showDownloadAlert(e, "macOS"));
    }
}

