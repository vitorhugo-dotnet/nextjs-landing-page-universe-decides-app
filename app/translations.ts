export const locales = ["en", "pt", "es", "de", "fr", "hi", "it", "tr", "uk"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English", pt: "Português", es: "Español", de: "Deutsch",
  fr: "Français", hi: "हिन्दी", it: "Italiano", tr: "Türkçe", uk: "Українська",
};

export type Copy = {
  nav: [string, string, string, string];
  hero: [string, string, string, string, string, string];
  stores: [string, string];
  moments: Array<[string, string, string]>;
  random: [string, string, string, string, string, string, string];
  privacy: [string, string, string, string, string, string];
  final: [string, string, string, string];
  footer: string;
  privacyLink: string;
};

export const copy: Record<Locale, Copy> = {
  en: {
    nav: ["Experience", "Randomness", "Privacy", "Get the app"],
    hero: ["A cosmic companion for everyday choices", "When in doubt,", "let the universe decide.", "Flip a coin, roll the dice, draw a card, or choose from your own list — with a touch of real cosmic entropy.", "Get it on Google Play", "Scroll to surrender control"],
    stores: ["Get it on F-Droid", "Coming soon"],
    moments: [["Flip fate", "Heads or tails. One gesture, one orbit, one answer.", "Coin flip"], ["Roll through chaos", "Choose your dice and watch chance take shape.", "Dice roll"], ["Draw the unknown", "Let a card surface from the cosmic deck.", "Card draw"], ["Name your possibilities", "Build a list. The universe picks one.", "Custom list"]],
    random: ["Unpredictability, honestly", "Real randomness when the stars align.", "The app uses Random.org atmospheric noise whenever it is available.", "Cosmic entropy", "Real-world atmospheric noise powers your result.", "Always available", "Offline or rate-limited? Local randomness keeps you moving, with a clear notice."],
    privacy: ["Nothing hidden in the void", "No account. No ads. No personal data.", "Your small decisions stay yours. The Universe Decides is deliberately simple and private.", "No login", "No ads", "No tracking"],
    final: ["Your decision is waiting", "Ready to ask the universe?", "Make small choices faster, lighter, and a little more magical.", "Download on Google Play"],
    footer: "Made for the beautifully indecisive.",
    privacyLink: "Privacy policy",
  },
  pt: {
    nav: ["Experiência", "Aleatoriedade", "Privacidade", "Baixar app"],
    hero: ["Um companheiro cósmico para escolhas cotidianas", "Quando estiver em dúvida,", "deixe o universo decidir.", "Jogue uma moeda, role dados, sorteie uma carta ou escolha da sua própria lista — com um toque de entropia cósmica real.", "Baixar no Google Play", "Role e entregue o controle"],
    stores: ["Baixar no F-Droid", "Em breve"],
    moments: [["Lance o destino", "Cara ou coroa. Um gesto, uma órbita, uma resposta.", "Cara ou coroa"], ["Role pelo caos", "Escolha seus dados e veja o acaso tomar forma.", "Rolar dados"], ["Revele o desconhecido", "Deixe uma carta emergir do baralho cósmico.", "Sortear carta"], ["Liste as possibilidades", "Crie uma lista. O universo escolhe uma opção.", "Lista personalizada"]],
    random: ["Imprevisibilidade, sem truques", "Aleatoriedade real quando os astros se alinham.", "O app usa o ruído atmosférico do Random.org sempre que ele está disponível.", "Entropia cósmica", "Ruído atmosférico do mundo real determina seu resultado.", "Sempre disponível", "Sem internet ou com limite atingido? A aleatoriedade local continua, com um aviso claro."],
    privacy: ["Nada escondido no vazio", "Sem conta. Sem anúncios. Sem dados pessoais.", "Suas pequenas decisões continuam sendo suas. The Universe Decides é intencionalmente simples e privado.", "Sem login", "Sem anúncios", "Sem rastreamento"],
    final: ["Sua decisão está esperando", "Pronto para perguntar ao universo?", "Torne pequenas escolhas mais rápidas, leves e um pouco mais mágicas.", "Baixar no Google Play"],
    footer: "Feito para os maravilhosamente indecisos.",
    privacyLink: "Política de privacidade",
  },
  es: {
    nav: ["Experiencia", "Aleatoriedad", "Privacidad", "Descargar"],
    hero: ["Un compañero cósmico para decisiones cotidianas", "Cuando tengas dudas,", "deja que el universo decida.", "Lanza una moneda, tira los dados, saca una carta o elige de tu propia lista, con un toque de entropía cósmica real.", "Descargar en Google Play", "Desplázate y cede el control"],
    stores: ["Descargar en F-Droid", "Próximamente"],
    moments: [["Lanza el destino", "Cara o cruz. Un gesto, una órbita, una respuesta.", "Moneda"], ["Rueda por el caos", "Elige tus dados y observa al azar tomar forma.", "Dados"], ["Revela lo desconocido", "Deja que una carta emerja de la baraja cósmica.", "Carta"], ["Nombra tus posibilidades", "Crea una lista. El universo elige una.", "Lista propia"]],
    random: ["Imprevisibilidad honesta", "Aleatoriedad real cuando los astros se alinean.", "La app usa el ruido atmosférico de Random.org siempre que está disponible.", "Entropía cósmica", "El ruido atmosférico real impulsa tu resultado.", "Siempre disponible", "¿Sin conexión o con límite? La aleatoriedad local continúa con un aviso claro."],
    privacy: ["Nada oculto en el vacío", "Sin cuenta. Sin anuncios. Sin datos personales.", "Tus pequeñas decisiones siguen siendo tuyas. La app es deliberadamente simple y privada.", "Sin inicio de sesión", "Sin anuncios", "Sin seguimiento"],
    final: ["Tu decisión te espera", "¿Listo para preguntar al universo?", "Haz pequeñas elecciones más rápidas, ligeras y un poco más mágicas.", "Descargar en Google Play"],
    footer: "Hecho para los maravillosamente indecisos.",
    privacyLink: "Política de privacidad",
  },
  de: {
    nav: ["Erlebnis", "Zufall", "Datenschutz", "App laden"],
    hero: ["Ein kosmischer Begleiter für alltägliche Entscheidungen", "Wenn du zweifelst,", "lass das Universum entscheiden.", "Wirf eine Münze, würfle, ziehe eine Karte oder wähle aus deiner eigenen Liste – mit echter kosmischer Entropie.", "Bei Google Play laden", "Scrolle und gib die Kontrolle ab"],
    stores: ["Bei F-Droid laden", "Demnächst"],
    moments: [["Wirf das Schicksal", "Kopf oder Zahl. Eine Geste, eine Umlaufbahn, eine Antwort.", "Münzwurf"], ["Würfle durchs Chaos", "Wähle deine Würfel und sieh, wie der Zufall Form annimmt.", "Würfeln"], ["Zieh das Unbekannte", "Lass eine Karte aus dem kosmischen Deck auftauchen.", "Karte ziehen"], ["Benenne Möglichkeiten", "Erstelle eine Liste. Das Universum wählt.", "Eigene Liste"]],
    random: ["Ehrlich unvorhersehbar", "Echter Zufall, wenn die Sterne richtig stehen.", "Die App nutzt atmosphärisches Rauschen von Random.org, wann immer es verfügbar ist.", "Kosmische Entropie", "Atmosphärisches Rauschen aus der realen Welt bestimmt dein Ergebnis.", "Immer verfügbar", "Offline oder limitiert? Lokaler Zufall übernimmt – mit klarem Hinweis."],
    privacy: ["Nichts im Nichts verborgen", "Kein Konto. Keine Werbung. Keine persönlichen Daten.", "Deine kleinen Entscheidungen bleiben deine. Bewusst einfach und privat.", "Kein Login", "Keine Werbung", "Kein Tracking"],
    final: ["Deine Entscheidung wartet", "Bereit, das Universum zu fragen?", "Triff kleine Entscheidungen schneller, leichter und etwas magischer.", "Bei Google Play laden"],
    footer: "Für die wunderbar Unentschlossenen.",
    privacyLink: "Datenschutzerklärung",
  },
  fr: {
    nav: ["Expérience", "Hasard", "Confidentialité", "Télécharger"],
    hero: ["Un compagnon cosmique pour les choix quotidiens", "En cas de doute,", "laissez l’univers décider.", "Lancez une pièce, jetez les dés, tirez une carte ou choisissez dans votre liste — avec une touche d’entropie cosmique réelle.", "Disponible sur Google Play", "Faites défiler et lâchez prise"],
    stores: ["Disponible sur F-Droid", "Bientôt"],
    moments: [["Lancez le destin", "Pile ou face. Un geste, une orbite, une réponse.", "Pile ou face"], ["Roulez dans le chaos", "Choisissez vos dés et regardez le hasard prendre forme.", "Lancer de dés"], ["Tirez l’inconnu", "Laissez une carte émerger du jeu cosmique.", "Tirage de carte"], ["Nommez vos possibilités", "Créez une liste. L’univers choisit.", "Liste personnalisée"]],
    random: ["Imprévisible, sincèrement", "Du vrai hasard quand les astres s’alignent.", "L’app utilise le bruit atmosphérique de Random.org dès qu’il est disponible.", "Entropie cosmique", "Le bruit atmosphérique réel alimente votre résultat.", "Toujours disponible", "Hors ligne ou limité ? Le hasard local continue, avec un message clair."],
    privacy: ["Rien de caché dans le vide", "Sans compte. Sans publicité. Sans données personnelles.", "Vos petites décisions restent les vôtres. L’app est volontairement simple et privée.", "Sans connexion", "Sans publicité", "Sans suivi"],
    final: ["Votre décision vous attend", "Prêt à interroger l’univers ?", "Rendez les petits choix plus rapides, légers et un peu plus magiques.", "Télécharger sur Google Play"],
    footer: "Conçu pour les merveilleusement indécis.",
    privacyLink: "Politique de confidentialité",
  },
  hi: {
    nav: ["अनुभव", "यादृच्छिकता", "गोपनीयता", "ऐप पाएँ"],
    hero: ["रोज़मर्रा के फ़ैसलों के लिए एक ब्रह्मांडीय साथी", "जब दुविधा हो,", "ब्रह्मांड को फ़ैसला करने दें।", "सिक्का उछालें, पासा फेंकें, कार्ड चुनें या अपनी सूची से चुनाव करें — वास्तविक ब्रह्मांडीय अनिश्चितता के साथ।", "Google Play से डाउनलोड करें", "स्क्रॉल करें और नियंत्रण छोड़ दें"],
    stores: ["F-Droid से डाउनलोड करें", "जल्द आ रहा है"],
    moments: [["किस्मत उछालें", "चित या पट। एक इशारा, एक कक्षा, एक जवाब।", "सिक्का"], ["अव्यवस्था में पासा", "अपने पासे चुनें और संयोग को आकार लेते देखें।", "पासा"], ["अनजान को चुनें", "ब्रह्मांडीय डेक से एक कार्ड सामने आने दें।", "कार्ड"], ["संभावनाएँ लिखें", "सूची बनाएँ। ब्रह्मांड एक चुनता है।", "अपनी सूची"]],
    random: ["ईमानदार अनिश्चितता", "जब सितारे मिलें, वास्तविक यादृच्छिकता।", "उपलब्ध होने पर ऐप Random.org के वायुमंडलीय शोर का उपयोग करता है।", "ब्रह्मांडीय एन्ट्रॉपी", "वास्तविक वायुमंडलीय शोर आपका परिणाम तय करता है।", "हमेशा उपलब्ध", "ऑफ़लाइन या सीमा पूरी? स्पष्ट सूचना के साथ स्थानीय यादृच्छिकता जारी रहती है।"],
    privacy: ["शून्य में कुछ छिपा नहीं", "न खाता। न विज्ञापन। न निजी डेटा।", "आपके छोटे फ़ैसले आपके ही रहते हैं। ऐप जानबूझकर सरल और निजी है।", "लॉगिन नहीं", "विज्ञापन नहीं", "ट्रैकिंग नहीं"],
    final: ["आपका फ़ैसला प्रतीक्षा में है", "ब्रह्मांड से पूछने के लिए तैयार?", "छोटे चुनावों को तेज़, हल्का और थोड़ा जादुई बनाएँ।", "Google Play से डाउनलोड करें"],
    footer: "खूबसूरती से दुविधा में रहने वालों के लिए।",
    privacyLink: "गोपनीयता नीति",
  },
  it: {
    nav: ["Esperienza", "Casualità", "Privacy", "Scarica"],
    hero: ["Un compagno cosmico per le scelte quotidiane", "Quando sei in dubbio,", "lascia decidere l’universo.", "Lancia una moneta, tira i dadi, pesca una carta o scegli dalla tua lista, con un tocco di vera entropia cosmica.", "Scarica da Google Play", "Scorri e cedi il controllo"],
    stores: ["Scarica da F-Droid", "Prossimamente"],
    moments: [["Lancia il destino", "Testa o croce. Un gesto, un’orbita, una risposta.", "Moneta"], ["Rotola nel caos", "Scegli i dadi e guarda il caso prendere forma.", "Dadi"], ["Pesca l’ignoto", "Lascia emergere una carta dal mazzo cosmico.", "Carta"], ["Elenca le possibilità", "Crea una lista. L’universo sceglie.", "Lista personale"]],
    random: ["Imprevedibilità, davvero", "Vera casualità quando le stelle si allineano.", "L’app usa il rumore atmosferico di Random.org quando disponibile.", "Entropia cosmica", "Il rumore atmosferico reale alimenta il risultato.", "Sempre disponibile", "Offline o limite raggiunto? La casualità locale continua con un avviso chiaro."],
    privacy: ["Nulla è nascosto nel vuoto", "Nessun account. Nessuna pubblicità. Nessun dato personale.", "Le tue piccole decisioni restano tue. L’app è volutamente semplice e privata.", "Nessun login", "Nessuna pubblicità", "Nessun tracking"],
    final: ["La tua decisione ti aspetta", "Pronto a chiedere all’universo?", "Rendi le piccole scelte più rapide, leggere e un po’ più magiche.", "Scarica da Google Play"],
    footer: "Creato per gli splendidamente indecisi.",
    privacyLink: "Informativa sulla privacy",
  },
  tr: {
    nav: ["Deneyim", "Rastlantı", "Gizlilik", "Uygulamayı al"],
    hero: ["Günlük seçimler için kozmik bir yol arkadaşı", "Kararsız kaldığında,", "evren karar versin.", "Yazı tura at, zarları yuvarla, kart çek veya kendi listenden seç — gerçek kozmik entropinin dokunuşuyla.", "Google Play’den indir", "Kaydır ve kontrolü bırak"],
    stores: ["F-Droid’den indir", "Yakında"],
    moments: [["Kaderi fırlat", "Yazı veya tura. Tek hareket, tek yörünge, tek cevap.", "Yazı tura"], ["Kaosta yuvarlan", "Zarlarını seç ve şansın şekillenmesini izle.", "Zar at"], ["Bilinmeyeni çek", "Kozmik desteden bir kartın ortaya çıkmasına izin ver.", "Kart çek"], ["İhtimalleri adlandır", "Bir liste oluştur. Evren birini seçsin.", "Özel liste"]],
    random: ["Dürüstçe öngörülemez", "Yıldızlar hizalandığında gerçek rastlantı.", "Uygulama mümkün olduğunda Random.org atmosferik gürültüsünü kullanır.", "Kozmik entropi", "Gerçek atmosferik gürültü sonucuna güç verir.", "Her zaman hazır", "Çevrimdışı veya sınırda mı? Açık bir bildirimle yerel rastlantı sürer."],
    privacy: ["Boşlukta gizli hiçbir şey yok", "Hesap yok. Reklam yok. Kişisel veri yok.", "Küçük kararların sana ait kalır. Uygulama bilinçli olarak sade ve gizlidir.", "Giriş yok", "Reklam yok", "Takip yok"],
    final: ["Kararın seni bekliyor", "Evrene sormaya hazır mısın?", "Küçük seçimleri daha hızlı, hafif ve biraz daha büyülü yap.", "Google Play’den indir"],
    footer: "Tatlı kararsızlar için yapıldı.",
    privacyLink: "Gizlilik politikası",
  },
  uk: {
    nav: ["Можливості", "Випадковість", "Приватність", "Завантажити"],
    hero: ["Космічний помічник для щоденних рішень", "Коли вагаєтеся,", "дозвольте Всесвіту вирішити.", "Підкиньте монету, киньте кубики, витягніть карту або оберіть зі свого списку — з часткою справжньої космічної ентропії.", "Завантажити з Google Play", "Прокрутіть і відпустіть контроль"],
    stores: ["Завантажити з F-Droid", "Незабаром"],
    moments: [["Підкиньте долю", "Орел чи решка. Один жест, одна орбіта, одна відповідь.", "Монета"], ["Киньте крізь хаос", "Оберіть кубики й спостерігайте, як випадок набуває форми.", "Кубики"], ["Витягніть невідоме", "Нехай карта з’явиться з космічної колоди.", "Карта"], ["Назвіть можливості", "Створіть список. Всесвіт обере.", "Власний список"]],
    random: ["Чесна непередбачуваність", "Справжня випадковість, коли зорі збігаються.", "Застосунок використовує атмосферний шум Random.org, коли він доступний.", "Космічна ентропія", "Реальний атмосферний шум визначає результат.", "Завжди доступно", "Немає мережі чи ліміт? Локальна випадковість продовжить роботу з чітким сповіщенням."],
    privacy: ["У порожнечі нічого не приховано", "Без акаунта. Без реклами. Без персональних даних.", "Ваші маленькі рішення залишаються вашими. Застосунок навмисно простий і приватний.", "Без входу", "Без реклами", "Без стеження"],
    final: ["Ваше рішення чекає", "Готові запитати Всесвіт?", "Приймайте невеликі рішення швидше, легше й трохи магічніше.", "Завантажити з Google Play"],
    footer: "Створено для чарівно нерішучих.",
    privacyLink: "Політика конфіденційності",
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
