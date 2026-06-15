/* ==========================================================================
   Prepress Core Website - Interactive Logic, i18n Translation & Simulator Engine
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initArchitectureTabs();
    initLanguageSystem();
    initShowcaseWidget();
    initDownloadButtons();
    initContactForm();
    initDocsModal();
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
            document.body.classList.toggle("body-no-scroll");
        });

        // Menü linklerine tıklandığında menüyü kapat
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenuBtn.classList.remove("active");
                mainNavMenu.classList.remove("active");
                document.body.classList.remove("body-no-scroll");
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
        "hero-badge": "Sürüm v1.0.4 Aktif",
        "hero-title": "Illustrator İş Akışınızı <br><span class=\"gradient-text\">Profesyonel Olarak Otomatize Edin</span>",
        "hero-subtitle": "Prepress Core tarafından hazırlanan otomasyon modüllerine Illustrator içinden anında erişin. Güvenli HWID donanım kilidi ve 24 saat çevrimdışı çalışma desteğiyle kesintisiz baskı öncesi hazırlığı yapın.",
        "hero-btn-download": "Hemen Başlayın",
        "hero-btn-demo": "Sistemi Deneyimleyin",
        "hero-meta-encryption": "AES-256 Şifreleme",
        "hero-meta-cep": "CEP Entegrasyonu",
        "mockup-title": "Adobe Illustrator - Prepress Panel",
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
        "sandbox-subtitle": "Prepress Core dağıtım altyapısının çalışma mantığını görün. Geliştiriciler (yayıncılar) için tasarlanan yönetim paneli üzerinden yapılan işlemlerin Illustrator istemcinize nasıl yansıdığını izleyin.",
        "sandbox-preview-title": "İnteraktif Sunum ve Dağıtım Deneyimi",
        "sandbox-preview-desc": "Yayıncı kontrol panelinden yönetilen HWID kilitlerini, RAM üzerinde anlık şifre çözme (RAM-Decrypt) işlemlerini, otomatik güncellemeleri ve lisans tabanlı script yayınlamayı (tıpkı oyun geliştiricilerinin Steam üzerinden içerik yayınlaması gibi) interaktif senaryolarla canlı olarak deneyimleyin.",
        "sandbox-feat-1": "HWID Donanım Kilidi",
        "sandbox-feat-2": "RAM Üzerinde Şifre Çözme",
        "sandbox-feat-3": "Sessiz & Otomatik Güncelleme",
        "sandbox-feat-4": "24s Çevrimdışı Önbellek",
        "sandbox-btn-launch": "Simülatörü Başlat",
        "sandbox-admin-tag": "Yayıncı Yönetim Arayüzü (Steamworks Modeli)",
        "sandbox-admin-badge": "SUNUCU AKTİF",
        "sandbox-notice-title": "Yayıncı & Sunucu Yönetim Paneli",
        "sandbox-control-desc": "Yayıncı/geliştirici arayüzü özeldir ve son kullanıcılara gösterilmez. Buradaki interaktif simülatör sayesinde, yayıncının (Steamworks paneli gibi) sunucudan yaptığı lisans kilitleme veya script/oyun güncelleme işlemlerinin Illustrator istemcisinde nasıl anlık işlendiğini test edebilirsiniz.",
        "sandbox-admin-group1": "1. Uzaktan Lisans Kontrolü",
        "sandbox-admin-help1": "Yayıncı olarak lisansı devre dışı bırakıp son kullanıcının erişimini anında kesmeyi (Kill-Switch) deneyin.",
        "sandbox-admin-toggle-lbl": "Lisans Aktif (Kill-Switch)",
        "sandbox-admin-hwid-status": "Eşleşen Donanım: Yok",
        "sandbox-admin-group2": "2. Script Güncelleme Testi",
        "sandbox-admin-help2": "Yayıncı olarak istemciye yeni bir şifreli script güncellemesi (ZXP) yayınlayın.",
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
        "arch-subtitle": "Yayıncı sunucusu ile Illustrator istemcisi arasındaki veri akışını ve lisans güvenliğini sağlayan 3 katmanlı altyapı.",
        "arch-tab-security": "AES-256 Şifreleme",
        "arch-tab-hwid": "HWID Lisanslama",
        "arch-tab-offline": "Çevrimdışı Toleransı",
        "arch-sec-title": "Kodlarınız Her Zaman Güvende",
        "arch-sec-desc": "Geliştiricilerin hazırladığı scriptlerin çalınmasını ve yetkisiz dağıtılmasını önlemek için geliştirilmiş uçtan uca şifreleme.",
        "arch-sec-li1": "<strong>Sunucuda Şifreli Depolama:</strong> Hazırlanan modüller sunucuda AES-256-CBC algoritmasıyla şifreli olarak saklanır.",
        "arch-sec-li2": "<strong>Güvenli Aktarım:</strong> Dosyalar istemciye şifreli formatta transfer edilir. Ortadaki adam (MITM) saldırılarında bile kodlar okunamaz.",
        "arch-sec-li3": "<strong>RAM'de Çözme:</strong> CEP eklentisi kodları diske kaydetmez. Scriptler doğrudan bellek üzerinde (RAM) çözülerek Illustrator motorunda çalıştırılır.",
        "arch-sec-chart1": "JSX / ZXP Kodları",
        "arch-sec-chart1-desc": "Geliştirici/Yayıncı Scriptleri",
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
        "dl-card-win-desc": "Illustrator CEP Eklentisi ve otomatik Windows kurulum sihirbazı (EXE).",
        "dl-card-win-btn": "Windows için İndir",
        "dl-card-win-meta": "Boyut: ~2.1 MB",
        "dl-card-mac-title": "macOS İstemcisi",
        "dl-card-mac-desc": "Illustrator CEP Eklentisi ve otomatik macOS kurulum paketi (PKG).",
        "dl-card-mac-btn": "macOS için İndir",
        "dl-card-mac-meta": "Boyut: ~1.1 MB",
        "mac-warning-title": "macOS Kurulum Uyarısı",
        "mac-warning-p1": "İndirme işleminiz başladı! Kurulum sırasında Apple Güvenlik Politikası (Gatekeeper) nedeniyle <strong>\"Tanımlanamayan Geliştirici\"</strong> uyarısı alabilirsiniz.",
        "mac-warning-p2": "Bunu aşmak için lütfen şu adımları takip edin:",
        "mac-warning-step1": "İndirilen <code>prepress-core-setup-mac.pkg</code> dosyasına <strong>Sağ Tıklayın</strong> (veya Control tuşuna basılı tutarak tıklayın).",
        "mac-warning-step2": "Açılan menüden <strong>\"Aç\" (Open)</strong> seçeneğini seçin.",
        "mac-warning-step3": "Karşınıza çıkan pencerede tekrar <strong>\"Aç\"</strong> butonuna tıklayarak kurulum sihirbazını başlatın.",
        "mac-warning-btn": "Anladım, Devam Et",
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
        "footer-desc": "Adobe Illustrator script ve uzantı geliştiricileri için merkezi script dağıtım, HWID lisanslama ve sürüm yönetim platformu.",
        "footer-header-product": "Ürün",
        "footer-header-contact": "İletişim & Destek",
        "contact-web": "Web:",
        "contact-email": "E-posta:",
        "contact-phone": "Telefon:",
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
        "pricing-pack3-title": "Çoklu Lisans (Stüdyo)",
        "pricing-pack3-price": "$799",
        "pricing-pack3-period": "/ Yıl",
        "pricing-pack4-title": "Kurumsal & Sınırsız",
        "pricing-pack4-price": "$1499",
        "pricing-pack4-period": "/ Yıl",
        "pricing-feat-hwid": "1 Cihaz HWID Kilitli Lisans",
        "pricing-feat-team-hwid": "3 Cihaz HWID Kilitli Lisans",
        "pricing-feat-team-key": "Tek Panel / Lisans Yönetim Anahtarı",
        "pricing-feat-offline": "24 Saat Çevrimdışı Çalışabilme",
        "pricing-feat-updates": "Sessiz ve Otomatik Güncellemeler",
        "pricing-feat-support-std": "Standart Destek (E-posta)",
        "pricing-feat-support-pri": "Öncelikli Destek",
        "pricing-feat-support-ded": "7/24 Kesintisiz Özel Destek",
        "pricing-feat-transfer-3": "Lisans Taşıma (Yıllık 3 Kez)",
        "pricing-feat-beta": "Yeni Beta Modüllerine Erişim",
        "pricing-feat-corp-users": "Tek Lisans Altında Çoklu Kullanıcı",
        "pricing-feat-corp-limit": "Sınırsız / Anlaşmalı Cihaz Slotu",
        "pricing-feat-corp-admin": "Yayıncı/Dağıtıcı Kontrol Paneli Yetkileri",
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
        "sandbox-admin-btn-extend": "Süre Uzat",
        "demo-badge": "Ücretsiz Deneme",
        "demo-title": "Hemen <span class=\"gradient-text\">Ücretsiz Deneyin</span>",
        "demo-desc": "Prepress Core'u indirin ve kurun — demo lisans anahtarı otomatik olarak yüklenir. Kredi kartı gerekmez, kurulum anında tamamlanır.",
        "demo-key-label": "Demo Lisans Anahtarınız",
        "demo-copy-btn": "Kopyala",
        "demo-feat-1": "Tüm modüllere erişim",
        "demo-feat-2": "Kurulum sonrası anında aktif",
        "demo-feat-3": "Kredi kartı gerekmez",
        "demo-cta": "İndirin ve Başlayın",
        "demo-copied": "Kopyalandı!",
        "contact-title": "İletişim & <span class=\"gradient-text\">Destek</span>",
        "contact-info-title": "Hızlı İletişim",
        "contact-subtitle": "Sorularınız, iş birliği teklifleriniz veya özel script talepleriniz için bize ulaşın.",
        "contact-label-name": "İsim",
        "contact-label-email": "E-posta",
        "contact-label-message": "Mesaj",
        "contact-placeholder-name": "Adınız Soyadınız",
        "contact-placeholder-email": "ornek@domain.com",
        "contact-placeholder-message": "Mesajınızı buraya yazın...",
        "contact-btn-send": "Mesaj Gönder",
        "nav-contact": "İletişim",
        "footer-header-resources": "Kaynaklar",
        "footer-status-text": "Tüm Sistemler Aktif",
        "nav-docs": "Belgeler & Rehberler",
        "nav-faq": "Sıkça Sorulan Sorular",
        "nav-release-notes": "Sürüm Notları",
        "nav-eula": "Lisans Sözleşmesi",
        "docs-modal-close": "Kapat",
        "docs-title-docs": "Belgeler & Rehberler",
        "docs-content-docs": '<h5>Kurulum Adımları</h5><p>1. İndirilen paketi (.exe veya .pkg) çift tıklayarak çalıştırın.</p><p>2. Illustrator uygulamanızı yeniden başlatın.</p><p>3. Üst menüden <strong>Pencere &gt; Uzantılar &gt; Prepress Core</strong> yolunu izleyin.</p><br><h5>Lisans Aktivasyonu</h5><p>Size iletilen lisans anahtarını panel arayüzüne girip onaylayın. Sistem donanım kimliğinizi (HWID) otomatik olarak lisansınızla eşleştirecektir.</p>',
        "docs-title-faq": "Sıkça Sorulan Sorular",
        "docs-content-faq": '<div class="faq-accordion"><div class="faq-item"><button class="faq-trigger"><span>1. CEP panel / eklenti nedir ve normal scriptlerden farkı nedir?</span><span class="faq-icon">+</span></button><div class="faq-content"><div class="faq-content-inner"><p>Adobe Illustrator içerisinde tıpkı &quot;Katmanlar&quot; veya &quot;Renk&quot; paneli gibi yerleşik olarak çalışan gelişmiş bir arayüzdür. Dışarıdan script (.jsx) dosyası seçip çalıştırmakla uğraşmazsınız; tüm araçlar tek pencerede, görsel butonlarla elinizin altındadır.</p></div></div></div><div class="faq-item"><button class="faq-trigger"><span>2. Hayatımda hiç eklenti kullanmadım, baskı öncesi (prepress) işlemlerinde bana nasıl yardımcı olur?</span><span class="faq-icon">+</span></button><div class="faq-content"><div class="faq-content-inner"><p>Normalde saatler süren manuel hizalama, kesim çizgisi (kros) ekleme, renk analizi, görsel çözünürlük kontrolleri ve taşma payı verme gibi kritik işleri tek tıklamayla saniyeler içinde hatasız yapar. Hata yapma riskinizi sıfıra indirerek matbaa baskı süreçlerinde oluşabilecek fireleri önler.</p></div></div></div><div class="faq-item"><button class="faq-trigger"><span>3. Donanım Kilidi (HWID) nedir ve neden gereklidir? Bilgisayarıma zarar verir mi?</span><span class="faq-icon">+</span></button><div class="faq-content"><div class="faq-content-inner"><p>HWID, lisansınızın sadece size ait bilgisayarda çalışmasını sağlayan güvenli bir donanım kimliğidir. Kesinlikle bilgisayarınıza zarar vermez veya kişisel verilerinizi toplamaz. Bankacılık uygulamalarının telefonunuzu eşlemesine benzer şekilde, eklenti lisansının izinsiz kopyalanmasını veya çalınmasını önler.</p></div></div></div><div class="faq-item"><button class="faq-trigger"><span>4. İnternet bağlantım koptuğunda eklentiyi kullanmaya devam edebilir miyim?</span><span class="faq-icon">+</span></button><div class="faq-content"><div class="faq-content-inner"><p>Evet. Sistemimiz matbaalardaki internet kesintilerini öngörerek 24 saatlik çevrimdışı toleransı ile tasarlanmıştır. İnternetiniz tamamen kopsa bile, son bağlantıdan itibaren 24 saat boyunca tüm özellikleri şifreli yerel önbellek sayesinde kesintisiz kullanabilirsiniz.</p></div></div></div><div class="faq-item"><button class="faq-trigger"><span>5. Illustrator sürümünü güncellersem veya yeni bir bilgisayara geçersem ne olur?</span><span class="faq-icon">+</span></button><div class="faq-content"><div class="faq-content-inner"><p>Panelimiz Adobe güncellemelerini arka planda otomatik takip eder ve kendini uyumlu hale getirir. Yeni bilgisayara geçişte ise tek yapmanız gereken, yayıncı/destek ekibimizle iletişime geçerek eski cihazınızın donanım kaydını (HWID) sıfırlatıp yeni cihazınızda eklentiyi tekrar aktifleştirmektir. Yayıncılar kendi yönetim panelleri (distribütör paneli) üzerinden bu işlemi anında gerçekleştirebilmektedir.</p></div></div></div><div class="faq-item"><button class="faq-trigger"><span>6. Güvenlik ve kod koruması nasıl sağlanıyor? Tasarımlarım veya dosyalarım dışarı aktarılıyor mu?</span><span class="faq-icon">+</span></button><div class="faq-content"><div class="faq-content-inner"><p>Kesinlikle hayır. Panel, tasarımlarınızı veya dosyalarınızı hiçbir şekilde dış sunuculara göndermez; tüm işlemler yerel olarak bilgisayarınızda gerçekleşir. Sunucu ile sadece şifreli lisans doğrulaması ve script güncellemeleri alışverişi yapılır. Kodlarımız ise RAM üzerinde anlık olarak çözülerek çalıştırıldığı için üçüncü şahıslar tarafından kopyalanamaz veya çalınamaz.</p></div></div></div></div>',
        "docs-title-release": "Sürüm Notları",
        "docs-content-release": '<h5>Sürüm v1.0.4 (Güncel)</h5><p>- Yoğun SVG yolları işlenirken CEF (Chromium Embedded Framework) konteynerinde oluşan IPC köprüsü bellek sızıntısı giderildi.</p><p>- JSX HostScript motoru değerlendirmesi ile CEP JS asenkron geri çağırma (callback) iş parçacıkları arasındaki senkronizasyon yarış durumu (race-condition) çözüldü.</p><p>- Adobe Illustrator 2026 koyu arayüz modu senkronizasyonunda oluşan renk paleti dönüştürme matrisi sapması (offset) düzeltildi.</p><br><h5>Sürüm v1.0.3</h5><p>- Bellek dökümleri (cold-boot dumps) üzerinden kod sızıntısını önlemek için RAM üzerindeki AES-256 şifre çözülmüş arabellek (buffer) tahsisi güvenli hale getirildi.</p><p>- Çevrimdışı önbellek doğrulama işlemi sırasında katalog aramalarını hızlandırmak için yerel veritabanı indekslemesi optimize edildi.</p><p>- JSX yürütülmesi sırasında ana arayüz teması değiştiğinde script yükleyicide oluşan null-pointer hatası giderildi.</p>',
        "docs-title-eula": "Lisans Sözleşmesi (EULA)",
        "docs-content-eula": '<h5>YAZILIM LİSANS SÖZLEŞMESİ (EULA)</h5><p>Bu son kullanıcı lisans sözleşmesi, Prepress Core yazılım ürününün kullanım şartlarını belirler. Yazılımı yükleyerek bu şartları kabul etmiş olursunuz.</p><p><strong>1. Lisans Kapsamı:</strong> Yazılım, satın alınan lisans tipine göre cihaz bazlı (HWID) ve tekil kullanıcı adına tahsis edilir. Lisansın birden fazla cihazda eşzamanlı paylaşılması yasaktır.</p><p><strong>2. Fikri Mülkiyet:</strong> Eklenti panelinin kaynak kodları, JSX modülleri, şifre çözme algoritmaları ve tüm grafik arayüz hakları KARABAG\'a aittir. Kodların tersine mühendislik (reverse engineering), ayrıştırma (decompilation) veya benzeri yöntemlerle çözülmesi, kopyalanması, değiştirilmesi ve izinsiz üçüncü şahıslara dağıtılması kesinlikle yasaktır. İhlal durumunda yasal işlem başlatılacaktır.</p><p><strong>3. Garanti Reddi:</strong> Yazılım "olduğu gibi" sunulmaktadır. Hatalı tasarımlar veya matbaa baskı hatalarından kaynaklanabilecek maddi zararlardan Prepress Core veya geliştiricileri sorumlu tutulamaz.</p>'
    },
    en: {
        "nav-features": "Features",
        "nav-sandbox-header": "Live Simulator ↗",
        "nav-sandbox": "Live Simulator",
        "nav-architecture": "Architecture",
        "nav-downloads": "Download",
        "hero-badge": "Version v1.0.4 Active",
        "hero-title": "Automate Your Illustrator <br><span class=\"gradient-text\">Workflow Professionally</span>",
        "hero-subtitle": "Instantly access prepress automation modules customized for you by Prepress Core. Ensure uninterrupted production with secure HWID hardware lock and 24h offline support.",
        "hero-btn-download": "Get Started",
        "hero-btn-demo": "Experience the System",
        "hero-meta-encryption": "AES-256 Encryption",
        "hero-meta-cep": "CEP Integration",
        "mockup-title": "Adobe Illustrator - Prepress Panel",
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
        "sandbox-subtitle": "See how the distribution platform works. Track how remote actions triggered from the publisher management dashboard instantly reflect on the client panel.",
        "sandbox-preview-title": "Interactive Presentation & Distribution Experience",
        "sandbox-preview-desc": "Experience live scenarios including publisher-side HWID locking, visual RAM-decrypt animations, silent updates, and targeted script publishing (just like developers publishing games on Steam) across interactive modules.",
        "sandbox-feat-1": "HWID Hardware Lock",
        "sandbox-feat-2": "In-Memory RAM Decryption",
        "sandbox-feat-3": "Silent Auto-Update",
        "sandbox-feat-4": "24h Offline Cache",
        "sandbox-btn-launch": "Launch Simulator",
        "sandbox-admin-tag": "Publisher Control Dashboard (Steamworks Model)",
        "sandbox-admin-badge": "SERVER ACTIVE",
        "sandbox-notice-title": "Publisher & Server Control Dashboard",
        "sandbox-control-desc": "The developer/publisher control panel is private and not exposed to end-users. You can use the controls below to simulate how actions triggered by the publisher (like pushing updates or locking licenses on Steamworks) instantly process in the client panel.",
        "sandbox-admin-group1": "1. Remote License Control",
        "sandbox-admin-help1": "Try disabling the license as the publisher to instantly revoke client access (Kill-Switch).",
        "sandbox-admin-toggle-lbl": "License Active (Kill-Switch)",
        "sandbox-admin-hwid-status": "Matched Hardware: None",
        "sandbox-admin-group2": "2. Script Update Simulation",
        "sandbox-admin-help2": "Publish a new encrypted script update (ZXP) to the client as the publisher.",
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
        "arch-subtitle": "3-tier infrastructure securing data transfer and license verification between the publisher server and Illustrator client.",
        "arch-tab-security": "AES-256 Encryption",
        "arch-tab-hwid": "HWID Licensing",
        "arch-tab-offline": "Offline Tolerance",
        "arch-sec-title": "Your Codes are Always Safe",
        "arch-sec-desc": "End-to-end encryption developed to prevent scripts published by the developers from being stolen or unauthorized distribution.",
        "arch-sec-li1": "<strong>Encrypted Storage on Server:</strong> Developed modules are stored on the server using AES-256-CBC encryption.",
        "arch-sec-li2": "<strong>Secure Transfer:</strong> Files are transferred to the client in encrypted format. Even in man-in-the-middle (MITM) attacks, codes cannot be read.",
        "arch-sec-li3": "<strong>RAM Decryption:</strong> CEP panel does not save the files to disk. Scripts are decrypted directly in memory (RAM) and executed in the Illustrator engine.",
        "arch-sec-chart1": "JSX / ZXP Codes",
        "arch-sec-chart1-desc": "Publisher Scripts",
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
        "dl-card-win-desc": "Illustrator CEP Extension and automatic Windows installation wizard (EXE).",
        "dl-card-win-btn": "Download for Windows",
        "dl-card-win-meta": "Size: ~2.1 MB",
        "dl-card-mac-title": "macOS Client",
        "dl-card-mac-desc": "Illustrator CEP Extension and automatic macOS installation package (PKG).",
        "dl-card-mac-btn": "Download for macOS",
        "dl-card-mac-meta": "Size: ~1.1 MB",
        "mac-warning-title": "macOS Installation Warning",
        "mac-warning-p1": "Your download has started! During installation, you may receive an <strong>\"Unidentified Developer\"</strong> warning due to Apple Security Policy (Gatekeeper).",
        "mac-warning-p2": "Please follow these steps to bypass this issue:",
        "mac-warning-step1": "<strong>Right-click</strong> the downloaded <code>prepress-core-setup-mac.pkg</code> file (or hold the Control key while clicking).",
        "mac-warning-step2": "Select <strong>\"Open\"</strong> from the context menu.",
        "mac-warning-step3": "Click <strong>\"Open\"</strong> again in the dialog box to launch the installation wizard.",
        "mac-warning-btn": "Got it, Continue",
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
        "footer-desc": "Centralized script distribution, HWID licensing, and version control platform for Adobe Illustrator extension developers.",
        "footer-header-product": "Product",
        "footer-header-contact": "Contact & Support",
        "contact-web": "Web:",
        "contact-email": "Email:",
        "contact-phone": "Phone:",
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
        "sandbox-admin-btn-extend": "Extend Term",
        "demo-badge": "Free Trial",
        "demo-title": "Try It <span class=\"gradient-text\">For Free</span>",
        "demo-desc": "Download and install Prepress Core — the demo license key is pre-loaded automatically. No credit card required, setup is instant.",
        "demo-key-label": "Your Demo License Key",
        "demo-copy-btn": "Copy",
        "demo-feat-1": "Access to all modules",
        "demo-feat-2": "Instantly active after install",
        "demo-feat-3": "No credit card required",
        "demo-cta": "Download & Get Started",
        "demo-copied": "Copied!",
        "contact-title": "Contact & <span class=\"gradient-text\">Support</span>",
        "contact-info-title": "Quick Contact",
        "contact-subtitle": "Contact us for your questions, collaboration proposals, or custom script requests.",
        "contact-label-name": "Name",
        "contact-label-email": "Email",
        "contact-label-message": "Message",
        "contact-placeholder-name": "Your Full Name",
        "contact-placeholder-email": "example@domain.com",
        "contact-placeholder-message": "Write your message here...",
        "contact-btn-send": "Send Message",
        "nav-contact": "Contact",
        "footer-header-resources": "Resources",
        "footer-status-text": "All Systems Operational",
        "nav-docs": "Docs & Guides",
        "nav-faq": "FAQ",
        "nav-release-notes": "Release Notes",
        "nav-eula": "End-User License Agreement",
        "docs-modal-close": "Close",
        "docs-title-docs": "Docs & Guides",
        "docs-content-docs": '<h5>Installation Steps</h5><p>1. Double-click the downloaded installer file (.exe or .pkg).</p><p>2. Restart Adobe Illustrator.</p><p>3. Go to <strong>Window &gt; Extensions &gt; Prepress Core</strong> to open the panel.</p><br><h5>License Activation</h5><p>Enter your assigned license key into the panel. The system will automatically bind your Hardware ID (HWID) to your license.</p>',
        "docs-title-faq": "Frequently Asked Questions",
        "docs-content-faq": '<div class="faq-accordion"><div class="faq-item"><button class="faq-trigger"><span>1. What is a CEP panel / extension and how is it different from normal scripts?</span><span class="faq-icon">+</span></button><div class="faq-content"><div class="faq-content-inner"><p>It is an advanced interface that runs natively inside Adobe Illustrator, just like the &quot;Layers&quot; or &quot;Color&quot; panels. You don\'t have to deal with manually selecting and running external script (.jsx) files; all tools are at your fingertips with visual buttons in a single panel.</p></div></div></div><div class="faq-item"><button class="faq-trigger"><span>2. I have never used an extension before, how will it help me in prepress operations?</span><span class="faq-icon">+</span></button><div class="faq-content"><div class="faq-content-inner"><p>It flawlessly performs critical tasks that normally take hours—such as manual alignment, adding crop marks, color analysis, visual resolution checks, and bleed margins—in seconds with a single click. It eliminates your risk of making mistakes, preventing waste in printing press production.</p></div></div></div><div class="faq-item"><button class="faq-trigger"><span>3. What is a Hardware Lock (HWID) and why is it necessary? Will it harm my computer?</span><span class="faq-icon">+</span></button><div class="faq-content"><div class="faq-content-inner"><p>HWID is a secure hardware identifier that ensures your license only runs on your own computer. It absolutely does not harm your computer or collect personal data. Similar to how banking apps bind to your phone, it prevents unauthorized copying or theft of the extension license.</p></div></div></div><div class="faq-item"><button class="faq-trigger"><span>4. Can I continue to use the extension if my internet connection is lost?</span><span class="faq-icon">+</span></button><div class="faq-content"><div class="faq-content-inner"><p>Yes. Our system is designed with a 24-hour offline tolerance, anticipating internet outages in printing studios. Even if your internet is completely disconnected, you can use all features uninterrupted for 24 hours from the last connection using an encrypted local cache.</p></div></div></div><div class="faq-item"><button class="faq-trigger"><span>5. What happens if I update Adobe Illustrator or switch to a new computer?</span><span class="faq-icon">+</span></button><div class="faq-content"><div class="faq-content-inner"><p>Our panel automatically tracks Adobe updates in the background and adapts itself. When switching to a new computer, simply contact us to reset your old computer\'s hardware binding (HWID) from our publisher dashboard and reactivate the extension on your new device. Publishers can instantly reset mappings from their private distributor panel.</p></div></div></div><div class="faq-item"><button class="faq-trigger"><span>6. How is security and code protection provided? Are my designs or files exported?</span><span class="faq-icon">+</span></button><div class="faq-content"><div class="faq-content-inner"><p>Absolutely not. The panel never sends your designs or files to external servers; all operations take place locally on your computer. Only encrypted license verification and script updates are exchanged with the server. Our codes are decrypted and executed directly in RAM, so they cannot be copied or stolen by third parties.</p></div></div></div></div>',
        "docs-title-release": "Release Notes",
        "docs-content-release": '<h5>Version v1.0.4 (Current)</h5><p>- Fixed an IPC bridge memory leak inside the CEF container (Chromium Embedded Framework) when rendering intensive SVG paths.</p><p>- Resolved a synchronization race-condition between JSX HostScript engine evaluation and CEP JS async callback threads.</p><p>- Corrected color palette conversion matrix offset for Adobe Illustrator 2026 dark UI mode synchronization.</p><br><h5>Version v1.0.3</h5><p>- Patched AES-256 decrypted buffer allocation on RAM to prevent memory exposure via cold-boot dumps.</p><p>- Optimized local storage database indexing for faster catalog lookups during offline caching verification.</p><p>- Fixed a null-pointer exception in the script loader when the host UI theme changes during JSX execution.</p>',
        "docs-title-eula": "End-User License Agreement",
        "docs-content-eula": '<h5>END-USER LICENSE AGREEMENT (EULA)</h5><p>This End-User License Agreement governs the use of the Prepress Core software product. By installing the software, you agree to these terms.</p><p><strong>1. License Grant:</strong> The software is licensed on a per-device (HWID) basis for a single user according to the purchased plan. Sharing the license across multiple machines is strictly prohibited.</p><p><strong>2. Intellectual Property:</strong> All source codes, JSX modules, decryption algorithms, and graphical user interface elements of the panel belong to KARABAG. Any attempt to reverse engineer, decompile, copy, modify, or distribute the software to unauthorized third parties is strictly prohibited. Violations will result in legal action.</p><p><strong>3. Disclaimer of Warranty:</strong> The software is provided "as is". Prepress Core or its developers shall not be liable for any damages or printing losses arising from errors in files or prepress production.</p>'
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
    document.documentElement.lang = currentLang;
    const elements = document.querySelectorAll("[data-i18n]");
    const dict = translations[currentLang] || translations["tr"];
    if (!dict) return;
    
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    // Placeholder çevirileri
    const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");
    placeholderElements.forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict[key]) {
            el.setAttribute("placeholder", dict[key]);
        }
    });

    // Sayfa başlığını güncelleyelim
    document.title = currentLang === "tr"
        ? "Prepress Core | Adobe Illustrator Script Dağıtım ve Lisanslama Platformu"
        : "Prepress Core | Adobe Illustrator Script Distribution & Licensing Platform";

    // Meta açıklamayı çevirelim
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute("content", currentLang === "tr"
            ? "Adobe Illustrator script geliştiricileri için merkezi script dağıtımı, HWID lisanslama, sürüm yönetimi ve 24 saat çevrimdışı toleransı sunan bulut tabanlı dağıtım platformu."
            : "Cloud-based script distribution, HWID licensing, version control, and 24h offline tolerance platform for Adobe Illustrator script developers and studios."
        );
    }

    // Telif hakkı metnini güncelleyelim
    const copyrightText = document.getElementById("copyright-text");
    if (copyrightText) {
        copyrightText.innerHTML = currentLang === "tr"
            ? '<a href="https://www.efeskarabag.com" target="_blank" class="copyright-link">KARABAG</a> &copy; 2026 Prepress Core. Tüm hakları saklıdır. Adobe, Illustrator and CEP are registered trademarks of Adobe Inc.'
            : '<a href="https://www.efeskarabag.com" target="_blank" class="copyright-link">KARABAG</a> &copy; 2026 Prepress Core. All rights reserved. Adobe, Illustrator and CEP are registered trademarks of Adobe Inc.';
    }

    // Eğer dökümantasyon modalı aktifse içeriğini yeni dile göre güncelle
    const docsModal = document.getElementById("docs-modal");
    if (docsModal && docsModal.classList.contains("active")) {
        const activeType = docsModal.getAttribute("data-active-type");
        if (activeType) {
            const modalTitle = document.getElementById("docs-modal-title");
            const modalContent = document.getElementById("docs-modal-content");
            const btnOk = document.getElementById("btn-docs-ok");
            
            const titleKey = `docs-title-${activeType}`;
            const contentKey = `docs-content-${activeType}`;
            
            if (modalTitle) modalTitle.innerHTML = dict[titleKey] || "";
            if (modalContent) modalContent.innerHTML = dict[contentKey] || "";
            if (btnOk) {
                btnOk.textContent = dict["docs-modal-close"] || (currentLang === "en" ? "Close" : "Kapat");
            }
            
            if (activeType === "faq") {
                initFaqAccordion();
            }
        }
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

function initDownloadButtons() {
    const btnDlMac = document.getElementById("btn-dl-mac");
    const macWarningModal = document.getElementById("mac-warning-modal");
    const btnCloseMacWarning = document.getElementById("btn-close-mac-warning");
    const btnMacWarningOk = document.getElementById("btn-mac-warning-ok");

    if (btnDlMac && macWarningModal) {
        btnDlMac.addEventListener("click", (e) => {
            e.preventDefault(); // Doğrudan indirmeyi engelle, önce uyarıyı göster
            macWarningModal.classList.add("active");
            document.body.classList.add("body-no-scroll");
        });
    }

    const closeMacModal = () => {
        if (macWarningModal) {
            macWarningModal.classList.remove("active");
            document.body.classList.remove("body-no-scroll");
        }
    };

    if (btnCloseMacWarning) {
        btnCloseMacWarning.addEventListener("click", closeMacModal);
    }

    if (btnMacWarningOk) {
        btnMacWarningOk.addEventListener("click", () => {
            closeMacModal();
            
            // Kullanıcı onayladıktan sonra indirmeyi programatik olarak başlat
            const downloadUrl = "https://github.com/efeskarabag/prepresscore.com/raw/main/public/prepress-core-setup-mac.pkg";
            const tempLink = document.createElement("a");
            tempLink.href = downloadUrl;
            tempLink.setAttribute("download", "prepress-core-setup-mac.pkg");
            tempLink.style.display = "none";
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
        });
    }

    if (macWarningModal) {
        macWarningModal.addEventListener("click", (e) => {
            if (e.target === macWarningModal) {
                closeMacModal();
            }
        });
    }
}

/* ==========================================================================
   Demo Key Kopyalama
   ========================================================================== */
function copyDemoKey() {
    const keyText = document.getElementById("demo-key-text");
    const copyBtn = document.getElementById("demo-copy-btn");
    if (!keyText || !copyBtn) return;
    
    navigator.clipboard.writeText(keyText.textContent).then(() => {
        copyBtn.classList.add("copied");
        const spanEl = copyBtn.querySelector("span");
        const currentLang = localStorage.getItem("preferredLang") || "tr";
        const copiedText = currentLang === "en" ? "Copied!" : "Kopyalandı!";
        const originalText = spanEl.textContent;
        spanEl.textContent = copiedText;
        
        setTimeout(() => {
            copyBtn.classList.remove("copied");
            spanEl.textContent = originalText;
        }, 2000);
    });
}

/* ==========================================================================
   6. İletişim Formu Kontrolleri
   ========================================================================== */
function initContactForm() {
    const contactForm = document.getElementById("contact-form");
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById("contact-name");
        const emailInput = document.getElementById("contact-email");
        const messageInput = document.getElementById("contact-message");
        const submitBtn = document.getElementById("btn-contact-submit");
        const submitBtnText = submitBtn.querySelector("span");
        const statusMsg = document.getElementById("contact-status-msg");

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            return;
        }

        // Butonu disable et ve yükleniyor durumuna getir
        submitBtn.disabled = true;
        const originalText = submitBtnText.innerHTML;
        submitBtnText.innerHTML = currentLang === "tr" ? "Şifreleniyor & Gönderiliyor..." : "Encrypting & Sending...";

        // Web3Forms form verisini hazırla (JSON formatında göndereceğiz)
        const formData = new FormData(contactForm);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        statusMsg.style.display = "none";
        statusMsg.className = "contact-status-msg";

        // Web3Forms API POST
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        })
        .then(async (response) => {
            const jsonRes = await response.json();
            if (response.status === 200) {
                statusMsg.style.display = "block";
                statusMsg.className = "contact-status-msg success";
                statusMsg.innerHTML = currentLang === "tr" 
                    ? "<strong>Başarılı!</strong> Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağız."
                    : "<strong>Success!</strong> Your message has been sent successfully. We will get back to you soon.";
                contactForm.reset();
            } else {
                throw new Error(jsonRes.message || "Form submission failed");
            }
        })
        .catch((error) => {
            console.error("Web3Forms Error:", error);
            statusMsg.style.display = "block";
            statusMsg.className = "contact-status-msg error";
            statusMsg.innerHTML = currentLang === "tr"
                ? "<strong>Hata!</strong> Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin."
                : "<strong>Error!</strong> Could not send your message. Please try again later.";
        })
        .finally(() => {
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtnText.innerHTML = originalText;
            }, 800);
        });
    });
}

/* ==========================================================================
   7. Dökümantasyon Modalı Kontrolleri
   ========================================================================== */
function initDocsModal() {
    const modal = document.getElementById("docs-modal");
    const modalTitle = document.getElementById("docs-modal-title");
    const modalContent = document.getElementById("docs-modal-content");
    const btnClose = document.getElementById("btn-close-docs");
    const btnOk = document.getElementById("btn-docs-ok");

    if (!modal || !modalTitle || !modalContent) return;

    const links = [
        { id: "link-docs-guide", type: "docs" },
        { id: "link-docs-faq", type: "faq" },
        { id: "link-docs-release", type: "release" },
        { id: "link-docs-eula", type: "eula" }
    ];

    links.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                
                const dict = translations[currentLang] || translations["tr"];
                const titleKey = `docs-title-${item.type}`;
                const contentKey = `docs-content-${item.type}`;

                modalTitle.innerHTML = dict[titleKey] || "";
                modalContent.innerHTML = dict[contentKey] || "";
                
                // OK butonunun dilini güncelle
                if (btnOk) {
                    btnOk.textContent = dict["docs-modal-close"] || (currentLang === "en" ? "Close" : "Kapat");
                }

                if (item.type === "faq") {
                    initFaqAccordion();
                }

                modal.setAttribute("data-active-type", item.type);
                modal.classList.add("active");
                document.body.classList.add("body-no-scroll");
            });
        }
    });

    const closeModal = () => {
        modal.classList.remove("active");
        modal.removeAttribute("data-active-type");
        document.body.classList.remove("body-no-scroll");
    };

    if (btnClose) btnClose.addEventListener("click", closeModal);
    if (btnOk) btnOk.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
}

/* ==========================================================================
   7.1. SSS Akordeon İşlevselliği
   ========================================================================== */
function initFaqAccordion() {
    const accordion = document.querySelector(".faq-accordion");
    if (!accordion) return;

    const items = accordion.querySelectorAll(".faq-item");
    items.forEach(item => {
        const trigger = item.querySelector(".faq-trigger");
        const content = item.querySelector(".faq-content");

        if (!trigger || !content) return;

        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            const isActive = item.classList.contains("active");

            // Close all items
            items.forEach(otherItem => {
                otherItem.classList.remove("active");
                const otherContent = otherItem.querySelector(".faq-content");
                if (otherContent) {
                    otherContent.style.maxHeight = null;
                }
            });

            // Toggle clicked item
            if (!isActive) {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}
