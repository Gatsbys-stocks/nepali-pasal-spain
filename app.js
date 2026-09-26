// >>> Point this at your deployed backend (see /nepali-shop-backend/README.md) <<<
// Backend propio de Nepali Pasal Spain (despliegue separado del de Buddhabhumi).
const API_BASE_URL = "https://nepali-pasal-backend.onrender.com";

let lang = "es"; // "es", "en" or "np" — toggled by the ES/EN/NP buttons, no reload

const SHOP_PHONE_WA = "34611381663";

const I18N = {
  es: {
    adminLink: "Acceso tienda",
    labelCoupon: "Cupón de descuento",
    couponPlaceholder: "Ej: DASHAIN10",
    applyCouponBtn: "Aplicar",
    removeCouponBtn: "Quitar",
    couponChecking: "Comprobando cupón...",
    couponApplied: (label) => `Cupón aplicado: ${label}`,
    couponFreeShipping: "Envío gratis",
    couponError: "No se pudo comprobar el cupón.",
    couponEmpty: "Escribe un código.",
    sumDiscountLabel: "Descuento",
    eyebrowText: "Tienda nepalí en Can Serra · L'Hospitalet",
    heroSub: "Sabores de casa, aquí al lado. Arroz, fideos Wai Wai y Current, achar, especias, dal, té y utensilios de cocina traídos de Nepal. Ven a la tienda o pide online y te lo enviamos.",
    heroCta: "Ver productos",
    waBtnText: "WhatsApp",
    waMessage: "Namaste! Quiero preguntar por un producto",
    topAddress: "Av. de Can Serra 54, L'Hospitalet",
    band1Title: "Tienda física", band1Text: "Av. de Can Serra 54",
    band2Title: "Metro", band2Text: "a un paso",
    band3Title: "Envíos", band3Text: "A toda España y Europa",
    band4Title: "Pago seguro", band4Text: "Tarjeta con Stripe",
    shopTitle: "Nuestros productos",
    srHeading: "Catálogo de productos nepalíes con carrito y envío",
    visitTitle: "Ven a la tienda",
    visitText: "Estamos en Can Serra, a un paso del metro. Pregúntanos por productos que no veas en la web — si no lo tenemos, lo buscamos.",
    visitMetro: "Metro cercano",
    mapsBtn: "Cómo llegar",
    callBtn: "Llamar",
    searchPlaceholder: "Busca un producto (achar, chiura, masala, Wai Wai...)",
    catAll: "Todo",
    photoCredit: "Fotos ilustrativas, no el producto exacto — Wikimedia Commons, licencias CC / dominio público.",
    packLabel: "Pack:",
    addBtn: "Añadir",
    outOfStock: "Agotado",
    removeUnitAria: "Quitar una unidad",
    addUnitAria: "Añadir una unidad",
    noMatch: "No hay productos que coincidan con tu búsqueda.",
    noteStrip: "<b>Envíos:</b> enviamos a toda España, Europa y el resto del mundo. Al confirmar el pedido verás tarifas reales de nuestras transportistas (UPS, DHL, FedEx...) según tu dirección, eliges una y pagas con tarjeta. ¿Estás cerca? Pásate por la tienda en <b>Av. de Can Serra 54</b>.",
    footerText: "Productos de Nepal en L'Hospitalet de Llobregat, desde 2024.",
    cartFabLabel: "Carrito",
    openCartAria: "Abrir carrito",
    closeCartAria: "Cerrar carrito",
    shoppingCartAria: "Carrito de compra",
    drawerTitle: "Tu pedido",
    drawerTotalLabel: "Total",
    continueOrder: "Continuar con el pedido",
    emptyCart: "Tu carrito está vacío. Añade productos del catálogo.",
    removeBtn: "Quitar",
    modalTitle: "Confirmar pedido",
    modalHint: "Rellena tus datos, consulta las tarifas de envío y confirma. Después pagarás de forma segura con tarjeta.",
    labelName: "Nombre completo",
    errName: "Escribe tu nombre.",
    labelPhone: "Teléfono",
    errPhone: "Escribe un teléfono de contacto.",
    labelEmail: "Email (para la confirmación del pedido)",
    errEmail: "Escribe un email válido.",
    labelAddress: "Dirección de entrega",
    errAddress: "Escribe la dirección de entrega.",
    labelFloor: "Piso",
    labelDoor: "Puerta",
    labelPostal: "Código postal",
    errPostal: "Escribe el código postal.",
    labelCity: "Ciudad",
    errCity: "Escribe la ciudad.",
    labelCountry: "País",
    errCountry: "Elige el país.",
    otherCountryMsg: "Para destinos fuera de esta lista, escríbenos por WhatsApp y te damos precio.",
    getRatesBtn: "Ver tarifas de envío",
    gettingRates: "Consultando tarifas...",
    labelCarrier: "Elige transportista",
    errShipping: "Elige una opción de envío.",
    shipNote: "Tarifas en tiempo real de UPS, DHL, FedEx... vía Shippo.",
    labelNotes: "Notas (opcional)",
    notesPlaceholder: "Preferencias de entrega, horario, etc.",
    sumProductsLabel: "Productos",
    sumShippingLabel: "Envío",
    sumTotalLabel: "Total",
    cancelBtn: "Cancelar",
    confirmBtn: "Confirmar pedido",
    placingOrder: "Enviando pedido...",
    noRatesWarning: "Todavía no hay tarifas disponibles para esta dirección.",
    rateFetchErrorDefault: "No se pudieron obtener las tarifas de envío.",
    shippingBackendErrorPrefix: "No se pudo conectar con el servidor de envíos: ",
    orderErrorDefault: "No se pudo realizar el pedido.",
    orderErrorPrefix: "No se pudo realizar el pedido: ",
    orderSuccess: (id) => `¡Pedido realizado! Tu número de pedido es ${id}. Te escribiremos por email para confirmar el pago.`,
    redirectingToPayment: "Pedido realizado — te llevamos al pago seguro...",
    paymentRedirectError: "Pedido realizado, pero no se pudo abrir la página de pago: ",
    paymentSuccessBanner: (id) => `Pago recibido — ¡gracias! Tu número de pedido es ${id}.`,
    paymentCancelledBanner: (id) => `El pago del pedido ${id} se canceló. Puedes intentarlo de nuevo desde el carrito o escribirnos por WhatsApp.`,
    etaVaries: "Plazo variable",
    daysSuffix: " días",
    productWord: (n) => n===1 ? "producto" : "productos"
  },
  en: {
    adminLink: "Shop admin",
    labelCoupon: "Discount code",
    couponPlaceholder: "e.g. DASHAIN10",
    applyCouponBtn: "Apply",
    removeCouponBtn: "Remove",
    couponChecking: "Checking code...",
    couponApplied: (label) => `Code applied: ${label}`,
    couponFreeShipping: "Free shipping",
    couponError: "Couldn't check the code.",
    couponEmpty: "Enter a code.",
    sumDiscountLabel: "Discount",
    eyebrowText: "Nepali grocery in Can Serra · L'Hospitalet",
    heroSub: "A taste of home, right around the corner. Rice, Wai Wai and Current noodles, achar, spices, daal, tea and kitchenware brought from Nepal. Visit the shop or order online and we'll ship it to you.",
    heroCta: "Shop products",
    waBtnText: "WhatsApp",
    waMessage: "Namaste! I'd like to ask about a product",
    topAddress: "Av. de Can Serra 54, L'Hospitalet",
    band1Title: "Visit the shop", band1Text: "Av. de Can Serra 54",
    band2Title: "Metro", band2Text: "close by",
    band3Title: "Delivery", band3Text: "Across Spain & Europe",
    band4Title: "Secure payment", band4Text: "Card via Stripe",
    shopTitle: "Our products",
    srHeading: "Catalogue of Nepali products with shopping cart and live carrier checkout",
    visitTitle: "Visit the shop",
    visitText: "We're in Can Serra, a short walk from the metro. Ask us about anything you don't see online — if we don't have it, we'll find it.",
    visitMetro: "Nearest metro",
    mapsBtn: "Get directions",
    callBtn: "Call us",
    searchPlaceholder: "Search a product (achar, chiura, masala, Wai Wai...)",
    catAll: "All",
    photoCredit: "Illustrative photos, not the exact product — Wikimedia Commons, CC licenses / public domain.",
    packLabel: "Pack:",
    addBtn: "Add",
    outOfStock: "Out of stock",
    removeUnitAria: "Remove one unit",
    addUnitAria: "Add one unit",
    noMatch: "No products match your search.",
    noteStrip: "<b>Delivery:</b> we ship across Spain, Europe and worldwide. When you confirm your order you'll get real-time rates from our carriers (UPS, DHL, FedEx...) for your address, pick one and pay by card. Nearby? Drop by the shop at <b>Av. de Can Serra 54</b>.",
    footerText: "Products from Nepal in L'Hospitalet de Llobregat, since 2024.",
    cartFabLabel: "Cart",
    openCartAria: "Open cart",
    closeCartAria: "Close cart",
    shoppingCartAria: "Shopping cart",
    drawerTitle: "Your order",
    drawerTotalLabel: "Total",
    continueOrder: "Continue with order",
    emptyCart: "Your cart is empty. Add products from the catalogue.",
    removeBtn: "Remove",
    modalTitle: "Confirm order",
    modalHint: "Fill in your details, get live shipping rates and confirm. You'll then pay securely by card.",
    labelName: "Full name",
    errName: "Please enter your name.",
    labelPhone: "Phone",
    errPhone: "Please enter a contact phone number.",
    labelEmail: "Email (for your order confirmation)",
    errEmail: "Please enter a valid email.",
    labelAddress: "Delivery address",
    errAddress: "Please enter the delivery address.",
    labelFloor: "Floor",
    labelDoor: "Door",
    labelPostal: "Postal code",
    errPostal: "Please enter the postal code.",
    labelCity: "City",
    errCity: "Please enter the city.",
    labelCountry: "Country",
    errCountry: "Please choose the country.",
    otherCountryMsg: "For destinations outside this list, please message us on WhatsApp so we can quote it manually.",
    getRatesBtn: "Get shipping rates",
    gettingRates: "Getting live rates...",
    labelCarrier: "Choose a carrier",
    errShipping: "Please choose a shipping option.",
    shipNote: "Live rates from UPS, DHL, FedEx... via Shippo.",
    labelNotes: "Notes (optional)",
    notesPlaceholder: "Delivery preferences, timing, etc.",
    sumProductsLabel: "Products",
    sumShippingLabel: "Shipping",
    sumTotalLabel: "Total",
    cancelBtn: "Cancel",
    confirmBtn: "Confirm order",
    placingOrder: "Placing order...",
    noRatesWarning: "No live carrier rates available for this address yet.",
    rateFetchErrorDefault: "Could not get shipping rates.",
    shippingBackendErrorPrefix: "Couldn't reach the shipping backend: ",
    orderErrorDefault: "Could not place the order.",
    orderErrorPrefix: "Couldn't place the order: ",
    orderSuccess: (id) => `Order placed! Your order number is ${id}. We'll email you to confirm payment.`,
    redirectingToPayment: "Order placed — taking you to secure payment...",
    paymentRedirectError: "Order placed, but we couldn't open the payment page: ",
    paymentSuccessBanner: (id) => `Payment received — thank you! Your order number is ${id}.`,
    paymentCancelledBanner: (id) => `Payment was cancelled for order ${id}. You can try again from your cart, or contact us on WhatsApp.`,
    etaVaries: "ETA varies",
    daysSuffix: " days",
    productWord: (n) => n===1 ? "product" : "products"
  },
  np: {
    adminLink: "पसल प्यानल",
    labelCoupon: "छुट कुपन",
    couponPlaceholder: "जस्तै DASHAIN10",
    applyCouponBtn: "लागू गर्नुहोस्",
    removeCouponBtn: "हटाउनुहोस्",
    couponChecking: "कुपन जाँच गर्दै...",
    couponApplied: (label) => `कुपन लागू भयो: ${label}`,
    couponFreeShipping: "निःशुल्क ढुवानी",
    couponError: "कुपन जाँच गर्न सकिएन।",
    couponEmpty: "कोड लेख्नुहोस्।",
    sumDiscountLabel: "छुट",
    eyebrowText: "क्यान सेरा, ल'होस्पितालेतमा नेपाली पसल",
    heroSub: "घरको स्वाद, नजिकै। चामल, वाइवाई र करेन्ट चाउचाउ, अचार, मसला, दाल, चिया र भान्साका सामान — नेपालबाट ल्याइएको। पसलमा आउनुहोस् वा अनलाइन अर्डर गर्नुहोस्, हामी पठाइदिन्छौं।",
    heroCta: "सामान हेर्नुहोस्",
    waBtnText: "ह्वाट्सएप",
    waMessage: "नमस्ते! मलाई एउटा सामानको बारेमा सोध्नु थियो",
    topAddress: "Av. de Can Serra 54, L'Hospitalet",
    band1Title: "पसल", band1Text: "Av. de Can Serra 54",
    band2Title: "मेट्रो", band2Text: "नजिकै",
    band3Title: "डेलिभरी", band3Text: "स्पेन र युरोपभर",
    band4Title: "सुरक्षित भुक्तानी", band4Text: "कार्ड (Stripe)",
    shopTitle: "हाम्रा सामानहरू",
    srHeading: "कार्ट र ढुवानीसहित नेपाली सामानको सूची",
    visitTitle: "पसलमा आउनुहोस्",
    visitText: "हामी क्यान सेरामा छौं, मेट्रोबाट केही पाइला मात्र। वेबसाइटमा नदेखिएको सामान पनि सोध्नुहोस् — नभए हामी खोजिदिन्छौं।",
    visitMetro: "नजिकको मेट्रो",
    mapsBtn: "बाटो हेर्नुहोस्",
    callBtn: "फोन गर्नुहोस्",
    searchPlaceholder: "सामान खोज्नुहोस् (achar, chiura, masala, Wai Wai...)",
    catAll: "सबै",
    photoCredit: "उदाहरणका लागि फोटो, ठ्याक्कै उही सामान नहुन सक्छ — Wikimedia Commons, CC लाइसेन्स / सार्वजनिक डोमेन।",
    packLabel: "प्याक:",
    addBtn: "थप्नुहोस्",
    outOfStock: "स्टक सकियो",
    removeUnitAria: "एक थान हटाउनुहोस्",
    addUnitAria: "एक थान थप्नुहोस्",
    noMatch: "तपाईंको खोजसँग मिल्ने सामान फेला परेन।",
    noteStrip: "<b>डेलिभरी:</b> हामी स्पेन, युरोप र विश्वभर पठाउँछौं। अर्डर पुष्टि गर्दा तपाईंको ठेगानाअनुसार ढुवानी कम्पनीहरू (UPS, DHL, FedEx...) को वास्तविक दर देखिन्छ, एउटा छान्नुहोस् र कार्डबाट तिर्नुहोस्। नजिकै हुनुहुन्छ? <b>Av. de Can Serra 54</b> मा पसलमा आउनुहोस्।",
    footerText: "ल'होस्पितालेत दे योब्रेगातमा नेपाली सामान, २०२४ देखि।",
    cartFabLabel: "कार्ट",
    openCartAria: "कार्ट खोल्नुहोस्",
    closeCartAria: "कार्ट बन्द गर्नुहोस्",
    shoppingCartAria: "किनमेल कार्ट",
    drawerTitle: "तपाईंको अर्डर",
    drawerTotalLabel: "जम्मा",
    continueOrder: "अर्डर अगाडि बढाउनुहोस्",
    emptyCart: "तपाईंको कार्ट खाली छ। सूचीबाट सामान थप्नुहोस्।",
    removeBtn: "हटाउनुहोस्",
    modalTitle: "अर्डर पुष्टि गर्नुहोस्",
    modalHint: "आफ्नो विवरण भर्नुहोस्, ढुवानी दर हेर्नुहोस् र पुष्टि गर्नुहोस्। त्यसपछि कार्डबाट सुरक्षित भुक्तानी गर्नुहुनेछ।",
    labelName: "पूरा नाम",
    errName: "कृपया आफ्नो नाम लेख्नुहोस्।",
    labelPhone: "फोन",
    errPhone: "कृपया सम्पर्क फोन नम्बर लेख्नुहोस्।",
    labelEmail: "इमेल (अर्डर पुष्टिको लागि)",
    errEmail: "कृपया मान्य इमेल लेख्नुहोस्।",
    labelAddress: "डेलिभरी ठेगाना",
    errAddress: "कृपया डेलिभरी ठेगाना लेख्नुहोस्।",
    labelFloor: "तला",
    labelDoor: "ढोका",
    labelPostal: "हुलाक कोड",
    errPostal: "कृपया हुलाक कोड लेख्नुहोस्।",
    labelCity: "शहर",
    errCity: "कृपया शहर लेख्नुहोस्।",
    labelCountry: "देश",
    errCountry: "कृपया देश छान्नुहोस्।",
    otherCountryMsg: "यो सूचीभन्दा बाहिरका गन्तव्यका लागि, कृपया ह्वाट्सएपमा सन्देश पठाउनुहोस्।",
    getRatesBtn: "ढुवानी दर हेर्नुहोस्",
    gettingRates: "दर ल्याउँदै...",
    labelCarrier: "ढुवानी कम्पनी छान्नुहोस्",
    errShipping: "कृपया ढुवानी विकल्प छान्नुहोस्।",
    shipNote: "Shippo मार्फत UPS, DHL, FedEx... को प्रत्यक्ष दर।",
    labelNotes: "टिप्पणी (वैकल्पिक)",
    notesPlaceholder: "डेलिभरी प्राथमिकता, समय, आदि।",
    sumProductsLabel: "सामान",
    sumShippingLabel: "ढुवानी",
    sumTotalLabel: "जम्मा",
    cancelBtn: "रद्द गर्नुहोस्",
    confirmBtn: "अर्डर पुष्टि गर्नुहोस्",
    placingOrder: "अर्डर पठाउँदै...",
    noRatesWarning: "यो ठेगानाको लागि हाल ढुवानी दर उपलब्ध छैन।",
    rateFetchErrorDefault: "ढुवानी दर प्राप्त गर्न सकिएन।",
    shippingBackendErrorPrefix: "ढुवानी सर्भरसँग जोड्न सकिएन: ",
    orderErrorDefault: "अर्डर राख्न सकिएन।",
    orderErrorPrefix: "अर्डर राख्न सकिएन: ",
    orderSuccess: (id) => `अर्डर राखियो! तपाईंको अर्डर नम्बर ${id} हो। भुक्तानी पुष्टि गर्न हामी तपाईंलाई इमेल गर्नेछौं।`,
    redirectingToPayment: "अर्डर राखियो — भुक्तानी पृष्ठमा लैजाँदै...",
    paymentRedirectError: "अर्डर राखियो, तर भुक्तानी पृष्ठ खोल्न सकिएन: ",
    paymentSuccessBanner: (id) => `भुक्तानी प्राप्त भयो — धन्यवाद! तपाईंको अर्डर नम्बर ${id} हो।`,
    paymentCancelledBanner: (id) => `अर्डर ${id} को भुक्तानी रद्द भयो। कार्टबाट फेरि प्रयास गर्नुहोस्, वा ह्वाट्सएपमा सम्पर्क गर्नुहोस्।`,
    etaVaries: "समय फरक हुन सक्छ",
    daysSuffix: " दिन",
    productWord: () => "सामान"
  }
};

function t(key){ return I18N[lang][key] ?? I18N.en[key]; }

const CATEGORIES = [
  {id:"pitho", es:"Flours & grains", esp:"Harinas y arroz", np:"पिठो / अन्न"},
  {id:"achar", es:"Pickles (achar)", esp:"Encurtidos (achar)", np:"अचार"},
  {id:"noodles", es:"Noodles & snacks", esp:"Fideos y snacks", np:"चाउचाउ"},
  {id:"daal", es:"Lentils & beans", esp:"Legumbres y dal", np:"दाल / सिमी"},
  {id:"masala", es:"Spices & masala", esp:"Especias y masala", np:"मसला"},
  {id:"chiya", es:"Tea & drinks", esp:"Té y bebidas", np:"चिया / जुस"},
  {id:"otros", es:"Other", esp:"Varios", np:"अन्य"}
];

let idc = 0;
const P = (name, en, cat, size, price, pack) => ({id: "p"+(idc++), name, en, cat, size, price, pack: pack||null});

// Catálogo real ahora vive en el backend (/api/products) y lo gestiona el
// cliente desde products-admin.html. Este array se queda solo como red de
// seguridad: si el backend no responde, la tienda sigue mostrando algo en
// vez de quedarse vacía.
const FALLBACK_PRODUCTS = [
  P("बास्मती चामल","Basmati rice","pitho","5 kg",16),
  P("चक्की आटा","Wheat flour","pitho","5 kg",10),
  P("चक्की आटा मिक्स्","Wheat flour mix","pitho","2 kg",8),
  P("कोदाको पिठो","Finger millet flour","pitho","1 kg",5),
  P("फापरको पिठो","Buckwheat flour","pitho","1 kg",5),
  P("चामलको पिठो","Rice flour","pitho","1 kg",3.5),
  P("टाईचिन चिउरा सेतो","Beaten rice, white","pitho","750 gm",4.5),
  P("टाईचिन चिउरा रातो","Beaten rice, red","pitho","750 gm",4.5),
  P("रातो चिउरा","Beaten rice, red","pitho","750 gm",4.2),
  P("सेतो चिउरा","Beaten rice, white","pitho","750 gm",3.9),
  P("भुजा","Puffed rice snack","pitho","500 gm",3.5),
  P("भुजा","Puffed rice snack","pitho","250 gm",2),
  P("कोदाको गेडा","Whole finger millet","pitho","1 kg",3.5),

  P("रारा चाउचाउ","Rara instant noodles","noodles","75 gm",0.6,"16€ / 30 pkt"),
  P("वाई वाई चाउचाउ चिकेन","Wai Wai noodles, chicken","noodles","75 gm",0.5,"14€ / 30 pkt"),
  P("वाई वाई चाउचाउ भेज","Wai Wai noodles, veg","noodles","75 gm",0.5,"14€ / 30 pkt"),
  P("वाई वाई चाउचाउ क्युक","Wai Wai noodles, cook style","noodles","75 gm",0.5,"14€ / 30 pkt"),
  P("रारा भोल्कानो","Rara Volcano noodles","noodles","75 gm",1.0,"20€ / 20 pkt"),
  P("करेन्ट २x Spicy चाउचाउ","Current 2x Spicy noodles","noodles","100 gm",1.5,"25€ / 20 pkt"),
  P("करेन्ट हट स्पाइसी कपमा","Current hot spicy cup noodles","noodles","70 gm",2),
  P("करेन्ट २x स्पाईसी फेल्वर","Current 2x spicy flavour noodles","noodles","100 gm",2),
  P("करेन्ट चाउचाउ नर्मल","Current noodles, plain","noodles","75 gm",0.6,"16€ / 30 pkt"),
  P("करेन्ट चिजबल्स","Current cheese balls","noodles","80 gm",1.5),
  P("करेन्ट हट लेवल चिप्स","Current hot level chips","noodles","80 gm",1.5),
  P("करेन्ट हट चिप्स","Current hot chips","noodles","80 gm",1.5),
  P("दालमोठ","Dal moth (spiced lentil mix)","noodles","275 gm",3.5),
  P("भुजिया","Bhujia (spiced noodle snack)","noodles","300 gm",3.5),
  P("गुन्द्रुक","Gundruk (fermented greens)","noodles","200 gm",5),
  P("सुकुटी राँगाको","Dried buffalo meat","noodles","150 gm",15),
  P("सिन्की डिब्बामा","Sinki, canned (fermented radish)","noodles","170 gm",4),

  P("स्वाइबिन मस्यौरा","Soybean nuggets","daal","250 gm",2.5),
  P("स्वाइबिन मस्यौरा","Soybean nuggets","daal","500 gm",4),
  P("हरियो केराउ ठुलो","Green peas, large","daal","1 kg",3),
  P("हरियो केराउ ठुलो","Green peas, large","daal","500 gm",1.5),
  P("हरियो केराउ सानो","Green peas, small","daal","1 kg",6),
  P("मुस्ताङ सीमी","Mustang beans","daal","500 gm",5),
  P("जुम्ला सीमी","Jumla beans","daal","1 kg",6),
  P("चना","Chickpeas","daal","1 kg",2.5),
  P("राज्मा","Kidney beans","daal","800 gm",5),
  P("राज्मा","Kidney beans","daal","500 gm",2.5),
  P("कालो दाल मासको","Black gram lentils","daal","1 kg",4.5),
  P("रातो दाल मुसुरको","Red lentils","daal","1 kg",3),
  P("गहत","Horse gram","daal","1 kg",6),
  P("मीक्स सातु डिब्बामा","Roasted flour mix (sattu)","daal","500 gm",4.5),

  P("डल्ले खुर्सानी अचार","Round chili pickle","achar","380 gm",7.5),
  P("तामाको अचार","Bamboo shoot pickle","achar","380 gm",6),
  P("मुलाको अचार","Radish pickle","achar","1 ud",4.5),
  P("लप्सीको अचार","Nepali hog plum pickle","achar","1 ud",4.5),
  P("टिमुरको छोप अचार","Timur pepper dip pickle","achar","200 gm",7),
  P("लप्सीको गुलियो अचार","Sweet hog plum pickle","achar","400 gm",6),
  P("लप्सीको पिरो अचार","Spicy hog plum pickle","achar","400 gm",6),
  P("आँपको अचार","Mango pickle","achar","380 gm",6),
  P("डल्ले खुर्सानी कागतीको","Round chili & lime pickle","achar","380 gm",6),
  P("मिक्स् अचार","Mixed pickle","achar","380 gm",6),
  P("डल्ला मुलाको अचार","Whole radish pickle","achar","380 gm",6),
  P("नेपाली तामा","Nepali bamboo shoot","achar","380 gm",5),
  P("डल्ले खुर्सानी लसुनको अचार","Round chili & garlic pickle","achar","380 gm",7),
  P("डल्ले खुर्सानी तामाको अचार","Round chili & bamboo shoot pickle","achar","380 gm",7),

  P("टिमुरको पाउडर","Timur pepper powder","masala","100 gm",4.5),
  P("टिमुरको धुलो डिब्बामा","Timur powder, tin","masala","100 gm",4),
  P("चाट मसला","Chaat masala","masala","50 gm",1.5),
  P("म म मसला","Momo masala","masala","50 gm",2),
  P("३२ मसला","32-spice blend","masala","250 gm",4.5),
  P("गरम मसला","Garam masala","masala","400 gm",5),
  P("बेसार","Turmeric powder","masala","40 gm",1),
  P("बेसार","Turmeric powder","masala","100 gm",3),
  P("म:म: मसला","Momo masala","masala","50 gm",2.5),
  P("पानीपुरी मसला","Panipuri masala","masala","50 gm",2),
  P("चटपट मसला","Chatpat masala","masala","50 gm",2),
  P("चिकेन मसला","Chicken masala","masala","50 gm",2),
  P("बोके जिरा सोप","Boke jira (wild cumin) seeds","masala","100 gm",1.2),
  P("जीरा गेडा","Whole cumin seeds","masala","300 gm",5.5),
  P("जीरा गेडा","Whole cumin seeds","masala","100 gm",1.5),
  P("धनिया गेडा","Whole coriander seeds","masala","300 gm",3),
  P("रातो खुर्सानि","Whole red chili","masala","75 gm",1.5),
  P("खुर्सानिको पाउडर","Red chili powder","masala","400 gm",6),
  P("पाप्रिका पाउडर","Paprika powder","masala","100 gm",1.25),
  P("जीरा मसला","Cumin spice blend","masala","400 gm",6.5),
  P("कालो तील","Black sesame seeds","masala","250 gm",3),
  P("सेतो तील","White sesame seeds","masala","250 gm",3),
  P("अत्तसी","Flaxseed","masala","100 gm",1),
  P("मेथी","Fenugreek seeds","masala","300 gm",2.5),
  P("मेथी","Fenugreek seeds","masala","100 gm",1.5),
  P("मरिच पाउडर","Black pepper powder","masala","100 gm",2),
  P("मरिच गेडा","Whole black peppercorns","masala","100 gm",2),
  P("ल्वाङ","Cloves","masala","500 gm",2),
  P("सुकमेल","Green cardamom","masala","50 gm",3.5),
  P("किसमीस","Raisins","masala","250 gm",3.5),

  P("टोकला चिया","Tokla tea","chiya","200 gm",4.5),
  P("मुना चिया","Muna tea","chiya","200 gm",3.5),
  P("निम्बु पानी बोतल","Lemon water, bottled","chiya","250 ml",1.2),
  P("जिरा जुस बोतल","Cumin drink, bottled","chiya","250 ml",1.2),
  P("सुन्तालाको जुस","Orange juice","chiya","250 ml",1.2),
  P("भुईंकटहरको जुस","Passion fruit juice","chiya","250 ml",1.2),
  P("आँपको जुस","Mango juice","chiya","250 ml",1.2),
  P("नरिवलको जुस","Coconut juice","chiya","250 ml",1.2),
  P("स्टेवरीको जुस","Strawberry juice","chiya","250 ml",1.2),
  P("लिचिको जुस","Lychee juice","chiya","250 ml",1.2),
  P("चुक अमिलो","Sour tamarind drink","chiya","200 ml",4),

  P("पानी पुरी डिब्बामा","Panipuri shells, canned","otros","200 gm",3),
  P("पानी पुरी प्याकेटमा","Panipuri shells, packet","otros","260 gm",3),
  P("ढुस्री पापड","Dhushri papad","otros","200 gm",2),
  P("पापड लज्जीत","Lajjit papad","otros","200 gm",2),
  P("मीश्री डिब्बामा","Rock sugar, tin","otros","300 gm",3.5),
  P("मीश्री","Rock sugar","otros","100 gm",1),
  P("बिरे नुन पाउडरमा","Bire salt powder","otros","100 gm",1.5),
  P("अगरबत्ती","Incense sticks","otros","1 ud",1)
];

// Catálogo real, cargado desde el backend en loadProducts(). Empieza con el
// respaldo puesto para que la tienda no aparezca vacía mientras llega la
// respuesta o si el fetch falla.
let PRODUCTS = FALLBACK_PRODUCTS;

async function loadProducts(){
  try{
    const res = await fetch(`${API_BASE_URL}/api/products`);
    if(!res.ok) throw new Error("bad status " + res.status);
    const data = await res.json();
    if(Array.isArray(data) && data.length > 0){
      PRODUCTS = data;
    }
  }catch(e){
    console.warn("No se pudo cargar el catálogo del backend, usando el catálogo de respaldo.", e);
  }
}

const CAT_ICONS = {
  pitho: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 3h10l2 6-3 12H8L5 9z"/><path d="M9 9h6"/></svg>',
  noodles: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 10h18l-2 9H5z"/><path d="M6 10c1-3 2-5 2-7M12 10c0-3 .5-5 .5-7M18 10c-1-3-2-5-2-7"/></svg>',
  daal: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="8" cy="9" rx="3.4" ry="4.2" transform="rotate(-20 8 9)"/><ellipse cx="16" cy="15" rx="3.4" ry="4.2" transform="rotate(-20 16 15)"/></svg>',
  achar: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="8" width="12" height="13" rx="2"/><path d="M9 8V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></svg>',
  masala: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3v3M9 3v3M15 3v3"/><rect x="6" y="6" width="12" height="15" rx="2"/></svg>',
  chiya: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 9h13v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8 3c0 1-1 1-1 2M12 3c0 1-1 1-1 2"/></svg>',
  otros: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="7" width="16" height="13" rx="2"/><path d="M4 11h16M9 7V5h6v2"/></svg>'
};

const CAT_IMAGES = {
  pitho: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/1121-Sella-Basmati-Rice.jpg?width=500",
    credit: "Foto ilustrativa (arroz), Wikimedia Commons, CC BY-SA 4.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:1121-Sella-Basmati-Rice.jpg"
  },
  daal: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Red_Speckled_Kidney_Beans.jpg?width=500",
    credit: "Foto ilustrativa (legumbres), Sanjay Acharya, Wikimedia Commons, CC BY-SA 4.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Red_Speckled_Kidney_Beans.jpg"
  },
  achar: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bread_and_butter_pickles.jpg?width=500",
    credit: "Foto ilustrativa (encurtidos), Dvortygirl, Wikimedia Commons, CC BY-SA 3.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Bread_and_butter_pickles.jpg"
  },
  masala: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Turmeric-powder.jpg?width=500",
    credit: "Foto ilustrativa (especias), Wikimedia Commons, CC BY-SA 3.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Turmeric-powder.jpg"
  },
  chiya: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/TeaLeaves.JPG?width=500",
    credit: "Foto ilustrativa (té), Wikimedia Commons, CC BY-SA 3.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:TeaLeaves.JPG"
  },
  noodles: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Noodles-Veg_Noodles.JPG?width=500",
    credit: "Foto ilustrativa (fideos), Mdsmds0, Wikimedia Commons, CC BY-SA 4.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Noodles-Veg_Noodles.JPG"
  },
  otros: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Stack_of_papadums.jpg?width=500",
    credit: "Foto ilustrativa (varios), Windell H. Oskay, Wikimedia Commons, CC BY 2.5",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Stack_of_papadums.jpg"
  },
  wheat_flour: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Wheat-flour.jpg?width=500",
    credit: "Foto ilustrativa (harina de trigo), Wikimedia Commons, CC BY-SA 4.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Wheat-flour.jpg"
  },
  chickpea: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chickpea.jpg?width=500",
    credit: "Foto ilustrativa (garbanzos), USDA, Wikimedia Commons, dominio público",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Chickpea.jpg"
  },
  cumin: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Seeds_of_Cumin.jpg?width=500",
    credit: "Foto ilustrativa (comino), Sanjay Acharya, Wikimedia Commons, CC BY-SA 4.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Seeds_of_Cumin.jpg"
  }
};

// Palabras clave (en el nombre en inglés) que apuntan a una foto más específica
// que la genérica de su categoría.
const IMG_OVERRIDES = [
  { key: "wheat_flour", match: /wheat flour/i },
  { key: "chickpea", match: /chickpea/i },
  { key: "cumin", match: /cumin/i }
];

function getProductImage(p){
  if(p.image) return { url: p.image, credit: "", creditUrl: "" };
  const found = IMG_OVERRIDES.find(o => o.match.test(p.en));
  return found ? CAT_IMAGES[found.key] : CAT_IMAGES[p.cat];
}

const fmt = n => "€" + n.toFixed(2);

let activeCat = "all";
let query = "";
const cart = {};
const CART_STORAGE_KEY = "nps_cart";

function catLabel(id){ return CATEGORIES.find(c=>c.id===id); }
// Nombre de la categoría en el idioma activo (el campo "es" guarda el inglés por herencia).
function catName(c){ return lang==='np' ? c.np : lang==='es' ? (c.esp || c.es) : c.es; }

// Guarda solo {id: cantidad} — los datos del producto se vuelven a
// enlazar desde PRODUCTS al restaurar, así el carrito no se queda con
// precios o nombres desactualizados si el catálogo cambió mientras tanto.
function saveCart(){
  try{
    const data = {};
    Object.keys(cart).forEach(id => { data[id] = cart[id].qty; });
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(data));
  }catch(e){ /* localStorage no disponible: seguimos sin persistir */ }
}

function restoreCart(){
  try{
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if(!raw) return;
    const saved = JSON.parse(raw);
    Object.keys(saved).forEach(id => {
      const p = PRODUCTS.find(x => x.id === id);
      if(p) cart[id] = {product: p, qty: saved[id]};
    });
  }catch(e){ /* JSON corrupto o localStorage no disponible: se ignora */ }
}

function renderCatButtons(){
  const el = document.getElementById("catButtons");
  const all = [{id:"all",es:"All",esp:"Todo",np:"सबै"}, ...CATEGORIES];
  el.innerHTML = all.map(c =>
    `<button class="cat-btn ${activeCat===c.id?'active':''}" data-cat="${c.id}">${catName(c)}</button>`
  ).join("");
  el.querySelectorAll(".cat-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{ activeCat = btn.dataset.cat; renderCatalog(); renderCatButtons(); });
  });
}

function renderCatalog(){
  const wrap = document.getElementById("catalog");
  const q = query.trim().toLowerCase();
  const cats = activeCat === "all" ? CATEGORIES : CATEGORIES.filter(c=>c.id===activeCat);
  let html = "";
  cats.forEach(cat=>{
    const items = PRODUCTS.filter(p => p.cat===cat.id && (q==="" || p.name.toLowerCase().includes(q) || p.en.toLowerCase().includes(q)));
    if(items.length===0) return;
    const img = CAT_IMAGES[cat.id];
    html += `<h2 class="section-label">${lang==='np' ? cat.np : catName(cat)} ${lang==='np' ? '' : `<span class="np">${cat.np}</span>`}</h2>`;
    html += `<div class="section-count">${items.length} ${t('productWord')(items.length)}</div>`;
    if(img){
      html += `<div class="cat-credit">${t('photoCredit')}</div>`;
    }
    html += `<div class="grid">`;
    items.forEach(p=>{
      const inCart = cart[p.id] ? cart[p.id].qty : 0;
      const inStock = p.inStock !== false;
      const pImg = getProductImage(p);
      let bottomControl;
      if(inCart>0){
        bottomControl = `<div class="qty-stepper">
             <button data-action="dec" data-id="${p.id}" aria-label="${t('removeUnitAria')}">−</button>
             <span>${inCart}</span>
             <button data-action="inc" data-id="${p.id}" aria-label="${t('addUnitAria')}" ${inStock ? "" : "disabled"}>+</button>
           </div>`;
      } else if(inStock){
        bottomControl = `<button class="add-btn" data-action="add" data-id="${p.id}">${t('addBtn')}</button>`;
      } else {
        bottomControl = `<span class="out-of-stock-badge">${t('outOfStock')}</span>`;
      }
      html += `<div class="card ${inStock ? "" : "card-out-of-stock"}">
        ${pImg ? `<img class="card-photo" src="${pImg.url}" alt="${p.en}" title="${pImg.credit}" loading="lazy">` : `<div class="card-icon" aria-hidden="true">${CAT_ICONS[p.cat]}</div>`}
        ${inStock ? "" : `<div class="card-stock-ribbon">${t('outOfStock')}</div>`}
        <div>
          <div class="card-name np">${p.name}</div>
          <div class="card-name-en">${p.en}</div>
        </div>
        <div class="card-meta"><span>${p.size}</span></div>
        ${p.pack ? `<div class="card-pack">${t('packLabel')} ${p.pack}</div>` : ""}
        <div class="card-bottom">
          <div class="card-price">${fmt(p.price)}</div>
          ${bottomControl}
        </div>
      </div>`;
    });
    html += `</div>`;
  });
  if(html===""){
    html = `<div class="empty-msg">${t('noMatch')}</div>`;
  }
  wrap.innerHTML = html;
  wrap.querySelectorAll("[data-action]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      if(action==="add" || action==="inc") addToCart(id);
      if(action==="dec") decFromCart(id);
    });
  });
}

function addToCart(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p || p.inStock===false) return;
  if(!cart[id]) cart[id] = {product:p, qty:0};
  cart[id].qty += 1;
  saveCart();
  renderCatalog();
  renderCart();
}
function decFromCart(id){
  if(!cart[id]) return;
  cart[id].qty -= 1;
  if(cart[id].qty<=0) delete cart[id];
  saveCart();
  renderCatalog();
  renderCart();
}
function removeFromCart(id){
  delete cart[id];
  saveCart();
  renderCatalog();
  renderCart();
}
function cartTotal(){
  return Object.values(cart).reduce((sum,l)=> sum + l.product.price*l.qty, 0);
}
function cartCount(){
  return Object.values(cart).reduce((sum,l)=> sum + l.qty, 0);
}

function renderCart(){
  const body = document.getElementById("drawerBody");
  const lines = Object.values(cart);
  if(lines.length===0){
    body.innerHTML = `<div class="empty-msg">${t('emptyCart')}</div>`;
  } else {
    body.innerHTML = lines.map(l => `
      <div class="cart-line">
        <div>
          <div class="cart-line-name np">${l.product.name}</div>
          <div class="cart-line-meta">${l.product.en} · ${l.product.size} · ${l.qty} × ${fmt(l.product.price)}</div>
        </div>
        <div class="cart-line-right">
          <div><b>${fmt(l.product.price*l.qty)}</b></div>
          <button class="remove-link" data-id="${l.product.id}">${t('removeBtn')}</button>
        </div>
      </div>
    `).join("");
    body.querySelectorAll(".remove-link").forEach(btn=>{
      btn.addEventListener("click", ()=> removeFromCart(btn.dataset.id));
    });
  }
  document.getElementById("cartCount").textContent = cartCount();
  document.getElementById("cartTotalMini").textContent = fmt(cartTotal());
  document.getElementById("drawerTotal").textContent = fmt(cartTotal());
  document.getElementById("openCheckout").disabled = lines.length===0;
}

document.getElementById("searchInput").addEventListener("input", (e)=>{
  query = e.target.value;
  renderCatalog();
});

const overlay = document.getElementById("overlay");
const drawer = document.getElementById("drawer");
function openDrawer(){ overlay.classList.add("open"); drawer.classList.add("open"); }
function closeDrawer(){ overlay.classList.remove("open"); drawer.classList.remove("open"); }
document.getElementById("cartFab").addEventListener("click", openDrawer);
document.getElementById("drawerClose").addEventListener("click", closeDrawer);
overlay.addEventListener("click", ()=>{ closeDrawer(); closeModal(); });

const modalWrap = document.getElementById("modalWrap");
function openModal(){ modalWrap.classList.add("open"); }
function closeModal(){
  modalWrap.classList.remove("open");
  selectedShipping = null;
  document.getElementById("shippingBlock").style.display = "none";
  document.getElementById("orderSummary").style.display = "none";
  document.getElementById("shippingOptions").innerHTML = "";
  document.getElementById("orderStatus").textContent = "";
}
document.getElementById("openCheckout").addEventListener("click", ()=>{ closeDrawer(); openModal(); });
document.getElementById("cancelCheckout").addEventListener("click", closeModal);

function validateField(id, errId, check){
  const val = document.getElementById(id).value.trim();
  const errEl = document.getElementById(errId);
  const ok = check(val);
  errEl.style.display = ok ? "none" : "block";
  return ok;
}

/* ---------- shipping: live rates from the backend (Shippo) ---------- */
let selectedShipping = null;

function renderShippingOptions(options){
  const wrap = document.getElementById("shippingOptions");
  wrap.innerHTML = options.map((o,i) => `
    <label class="ship-option" data-i="${i}">
      <input type="radio" name="shipOpt" value="${i}">
      <div>
        <div class="ship-option-name">${o.carrier} — ${o.service}</div>
        <div class="ship-option-eta">${o.estimated_days ? o.estimated_days + t('daysSuffix') : t('etaVaries')}</div>
      </div>
      <div class="ship-option-price">${fmt(o.amount)}</div>
    </label>
  `).join("");
  wrap.querySelectorAll(".ship-option").forEach((el, i)=>{
    el.addEventListener("click", ()=>{
      wrap.querySelectorAll(".ship-option").forEach(x=>x.classList.remove("selected"));
      el.classList.add("selected");
      el.querySelector("input").checked = true;
      selectedShipping = options[i];
      document.getElementById("errShipping").style.display = "none";
      updateSummary();
    });
  });
}

/* ---------- cupones ---------- */
// El descuento se calcula aquí solo para enseñarlo; el backend lo vuelve a
// calcular al crear el pedido y es el que manda.
let appliedCoupon = null; // {code, type, value, label}

function couponDiscount(itemsTotal, shipPrice){
  if(!appliedCoupon) return 0;
  if(appliedCoupon.type === "percent") return Math.round(itemsTotal * appliedCoupon.value) / 100;
  if(appliedCoupon.type === "fixed") return Math.min(appliedCoupon.value, itemsTotal);
  if(appliedCoupon.type === "free_shipping") return shipPrice;
  return 0;
}
function couponLabel(c){
  return c.type === "free_shipping" ? t("couponFreeShipping") : c.label;
}
function setCouponMsg(text, kind){
  const el = document.getElementById("couponMsg");
  el.textContent = text || "";
  el.className = "coupon-msg" + (kind ? " " + kind : "");
}
function clearCoupon(){
  appliedCoupon = null;
  document.getElementById("fCoupon").value = "";
  document.getElementById("fCoupon").disabled = false;
  setText("applyCoupon", t("applyCouponBtn"));
  setCouponMsg("");
  if(document.getElementById("orderSummary").style.display === "block") updateSummary();
}
document.getElementById("applyCoupon").addEventListener("click", async ()=>{
  if(appliedCoupon){ clearCoupon(); return; }
  const code = document.getElementById("fCoupon").value.trim();
  if(!code){ setCouponMsg(t("couponEmpty"), "err"); return; }
  setCouponMsg(t("couponChecking"));
  try{
    const res = await fetch(`${API_BASE_URL}/api/coupons/check`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        code,
        items: cartItemsPayload(),
        shipping_amount: selectedShipping ? selectedShipping.amount : 0
      })
    });
    const data = await res.json();
    if(!res.ok) throw new Error(data.error || t("couponError"));
    appliedCoupon = { code: data.code, type: data.type, value: data.value, label: data.label };
    document.getElementById("fCoupon").value = data.code;
    document.getElementById("fCoupon").disabled = true;
    setText("applyCoupon", t("removeCouponBtn"));
    setCouponMsg(t("couponApplied")(couponLabel(appliedCoupon)), "ok");
    updateSummary();
  }catch(err){
    appliedCoupon = null;
    setCouponMsg(err.message || t("couponError"), "err");
  }
});
document.getElementById("fCoupon").addEventListener("keydown", (e)=>{
  if(e.key === "Enter"){ e.preventDefault(); document.getElementById("applyCoupon").click(); }
});

function updateSummary(){
  document.getElementById("orderSummary").style.display = "block";
  const itemsTotal = cartTotal();
  const shipPrice = selectedShipping ? selectedShipping.amount : 0;
  const discount = couponDiscount(itemsTotal, shipPrice);
  document.getElementById("sumProducts").textContent = fmt(itemsTotal);
  document.getElementById("sumShipping").textContent = selectedShipping ? fmt(selectedShipping.amount) : "—";
  const row = document.getElementById("sumDiscountRow");
  row.hidden = !(appliedCoupon && discount > 0);
  if(appliedCoupon){
    document.getElementById("sumDiscountCode").textContent = `(${appliedCoupon.code})`;
    document.getElementById("sumDiscount").textContent = "−" + fmt(discount);
  }
  document.getElementById("sumTotal").textContent = fmt(Math.max(0, itemsTotal + shipPrice - discount));
}

function floorDoorLine(){
  const floor = document.getElementById("fFloor").value.trim();
  const door = document.getElementById("fDoor").value.trim();
  const parts = [];
  if(floor) parts.push("Floor " + floor);
  if(door) parts.push("Door " + door);
  return parts.join(", ");
}

function cartItemsPayload(){
  return Object.values(cart).map(l => ({
    id: l.product.id, name: l.product.name, en: l.product.en,
    size: l.product.size, price: l.product.price, qty: l.qty
  }));
}

document.getElementById("calcShipping").addEventListener("click", async ()=>{
  const okAddress = validateField("fAddress","errAddress", v=>v.length>3);
  const okPostal = validateField("fPostal","errPostal", v=>v.length>=3);
  const okCity = validateField("fCity","errCity", v=>v.length>1);
  const country = document.getElementById("fCountry").value;
  const okCountry = validateField("fCountry","errCountry", v=>v.length===2 && v!=="OTHER" ? true : v.length>0);
  if(!(okAddress && okPostal && okCity) || country==="") return;

  if(country === "OTHER"){
    document.getElementById("errCountry").textContent = t("otherCountryMsg");
    document.getElementById("errCountry").style.display = "block";
    return;
  }

  const btn = document.getElementById("calcShipping");
  const orderStatus = document.getElementById("orderStatus");
  btn.disabled = true; btn.textContent = t("gettingRates");
  orderStatus.textContent = "";

  // Reset any previous quote/selection immediately — never leave a stale
  // summary on screen while we fetch (or fail to fetch) a new one.
  selectedShipping = null;
  document.getElementById("shippingBlock").style.display = "none";
  document.getElementById("shippingOptions").innerHTML = "";
  document.getElementById("orderSummary").style.display = "none";

  try{
    const res = await fetch(`${API_BASE_URL}/api/rates`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        address: {
          name: document.getElementById("fName").value.trim() || "Customer",
          street1: document.getElementById("fAddress").value.trim(),
          street2: floorDoorLine(),
          city: document.getElementById("fCity").value.trim(),
          zip: document.getElementById("fPostal").value.trim(),
          country: country,
          phone: document.getElementById("fPhone").value.trim(),
          email: document.getElementById("fEmail").value.trim()
        },
        items: cartItemsPayload()
      })
    });
    const data = await res.json();
    if(!res.ok) throw new Error(data.error || t("rateFetchErrorDefault"));
    if(!data.rates || data.rates.length === 0){
      orderStatus.style.color = "var(--gold)";
      orderStatus.textContent = data.warning || t("noRatesWarning");
      return;
    }
    document.getElementById("shippingBlock").style.display = "block";
    renderShippingOptions(data.rates);
    updateSummary();
  }catch(err){
    orderStatus.style.color = "var(--red)";
    orderStatus.textContent = t("shippingBackendErrorPrefix") + err.message;
  }finally{
    btn.disabled = false; btn.textContent = t("getRatesBtn");
  }
});

document.getElementById("sendOrder").addEventListener("click", async ()=>{
  const okName = validateField("fName","errName", v=>v.length>1);
  const okPhone = validateField("fPhone","errPhone", v=>v.length>5);
  const okEmail = validateField("fEmail","errEmail", v=>v.length===0 || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v));
  const okAddress = validateField("fAddress","errAddress", v=>v.length>3);
  const okPostal = validateField("fPostal","errPostal", v=>v.length>=3);
  const okCity = validateField("fCity","errCity", v=>v.length>1);
  const okCountry = validateField("fCountry","errCountry", v=>v.length>0);
  const errShipping = document.getElementById("errShipping");
  const okShipping = !!selectedShipping;
  errShipping.style.display = okShipping ? "none" : "block";
  if(!(okName && okPhone && okEmail && okAddress && okPostal && okCity && okCountry && okShipping)) return;

  const orderStatus = document.getElementById("orderStatus");
  const sendBtn = document.getElementById("sendOrder");
  sendBtn.disabled = true; sendBtn.textContent = t("placingOrder");
  orderStatus.textContent = "";

  try{
    const res = await fetch(`${API_BASE_URL}/api/orders`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        customer: {
          name: document.getElementById("fName").value.trim(),
          phone: document.getElementById("fPhone").value.trim(),
          email: document.getElementById("fEmail").value.trim()
        },
        address: {
          street1: document.getElementById("fAddress").value.trim(),
          street2: floorDoorLine(),
          city: document.getElementById("fCity").value.trim(),
          zip: document.getElementById("fPostal").value.trim(),
          country: document.getElementById("fCountry").value
        },
        items: cartItemsPayload(),
        shipping: {
          rate_id: selectedShipping.rate_id,
          carrier: selectedShipping.carrier,
          service: selectedShipping.service,
          amount: selectedShipping.amount,
          currency: selectedShipping.currency
        },
        notes: document.getElementById("fNotes").value.trim(),
        coupon_code: appliedCoupon ? appliedCoupon.code : ""
      })
    });
    const data = await res.json();
    if(!res.ok){
      // El pedido no se ha creado (p. ej. cupón caducado o producto agotado).
      const e = new Error(data.error || t("orderErrorDefault"));
      e.beforeOrder = true;
      throw e;
    }

    Object.keys(cart).forEach(k => delete cart[k]);
    saveCart();
    clearCoupon();
    renderCatalog(); renderCart();

    orderStatus.style.color = "var(--green)";
    orderStatus.textContent = t("redirectingToPayment");

    const payRes = await fetch(`${API_BASE_URL}/api/orders/${data.order_id}/checkout`, { method: "POST" });
    const payData = await payRes.json();
    if(!payRes.ok || !payData.checkout_url) throw new Error(payData.error || "");
    window.location.href = payData.checkout_url;
  }catch(err){
    orderStatus.style.color = "var(--red)";
    orderStatus.textContent = (err.beforeOrder ? t("orderErrorPrefix") : t("paymentRedirectError")) + err.message;
  }finally{
    sendBtn.disabled = false; sendBtn.textContent = t("confirmBtn");
  }
});

function setText(id, value){
  const el = document.getElementById(id);
  if(el) el.textContent = value;
}
function setHTML(id, value){
  const el = document.getElementById(id);
  if(el) el.innerHTML = value;
}
function setPlaceholder(id, value){
  const el = document.getElementById(id);
  if(el) el.placeholder = value;
}
function setAria(id, value){
  const el = document.getElementById(id);
  if(el) el.setAttribute("aria-label", value);
}

function applyI18n(){
  document.documentElement.lang = lang;
  setText("eyebrowText", t("eyebrowText"));
  setText("heroSub", t("heroSub"));
  setText("waBtnText", t("waBtnText"));
  const wa = document.getElementById("waBtn");
  if(wa) wa.href = `https://wa.me/${SHOP_PHONE_WA}?text=${encodeURIComponent(t("waMessage"))}`;
  ["heroCta","topAddress","band1Title","band1Text","band2Title","band2Text","band3Title","band3Text",
   "band4Title","band4Text","shopTitle","srHeading","visitTitle","visitText","visitMetro","mapsBtn","callBtn"]
    .forEach(k => setText(k, t(k)));
  setPlaceholder("searchInput", t("searchPlaceholder"));
  setHTML("noteStrip", t("noteStrip"));
  setText("footerText", t("footerText"));
  setText("adminLink", t("adminLink"));
  setText("cartFabLabel", t("cartFabLabel"));
  setAria("cartFab", t("openCartAria"));
  setAria("drawerClose", t("closeCartAria"));
  setAria("drawer", t("shoppingCartAria"));
  setText("drawerTitle", t("drawerTitle"));
  setText("drawerTotalLabel", t("drawerTotalLabel"));
  setText("openCheckout", t("continueOrder"));
  setText("modalTitle", t("modalTitle"));
  setText("modalHint", t("modalHint"));
  setText("labelName", t("labelName"));
  setText("errName", t("errName"));
  setText("labelPhone", t("labelPhone"));
  setText("errPhone", t("errPhone"));
  setText("labelEmail", t("labelEmail"));
  setText("errEmail", t("errEmail"));
  setText("labelAddress", t("labelAddress"));
  setText("errAddress", t("errAddress"));
  setText("labelFloor", t("labelFloor"));
  setText("labelDoor", t("labelDoor"));
  setText("labelPostal", t("labelPostal"));
  setText("errPostal", t("errPostal"));
  setText("labelCity", t("labelCity"));
  setText("errCity", t("errCity"));
  setText("labelCountry", t("labelCountry"));
  setText("errCountry", t("errCountry"));
  setText("calcShipping", t("getRatesBtn"));
  setText("labelCarrier", t("labelCarrier"));
  setText("errShipping", t("errShipping"));
  setText("shipNote", t("shipNote"));
  setText("labelNotes", t("labelNotes"));
  setPlaceholder("fNotes", t("notesPlaceholder"));
  setText("sumProductsLabel", t("sumProductsLabel"));
  setText("sumShippingLabel", t("sumShippingLabel"));
  setText("sumTotalLabel", t("sumTotalLabel"));
  setText("labelCoupon", t("labelCoupon"));
  setPlaceholder("fCoupon", t("couponPlaceholder"));
  setText("applyCoupon", appliedCoupon ? t("removeCouponBtn") : t("applyCouponBtn"));
  setText("sumDiscountLabel", t("sumDiscountLabel"));
  if(appliedCoupon) setCouponMsg(t("couponApplied")(couponLabel(appliedCoupon)), "ok");
  setText("cancelCheckout", t("cancelBtn"));
  setText("sendOrder", t("confirmBtn"));
  renderCatButtons();
  renderCatalog();
  renderCart();
}

// Selector de idioma ES / EN / NP — traduce toda la interfaz sin recargar.
const LANG_KEY = "nps_lang";
function setLang(next){
  if(!I18N[next]) return;
  lang = next;
  try{ localStorage.setItem(LANG_KEY, next); }catch(e){}
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === next));
  applyI18n();
}
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", ()=>{ if(btn.dataset.lang !== lang) setLang(btn.dataset.lang); });
});
try{
  const savedLang = localStorage.getItem(LANG_KEY);
  if(savedLang && I18N[savedLang]){
    lang = savedLang;
    document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  }
}catch(e){}

/* ---------- enlace al panel de la tienda (pie de página) ---------- */
(function(){
  const a = document.getElementById("adminLink");
  if(a) a.href = `${API_BASE_URL}/admin`;
})();

/* ---------- prayer-flag garland in the hero ---------- */
(function buildGarland(){
  const g = document.getElementById("garlandFlags");
  if(!g) return;
  const colors = ["var(--flag-blue)","var(--flag-white)","var(--flag-red)","var(--flag-green)","var(--flag-yellow)"];
  const n = 26, NS = "http://www.w3.org/2000/svg";
  for(let i=0;i<n;i++){
    const x = 20 + i*(1160/(n-1));
    const tt = x/1200;
    const y = (1-tt)*(1-tt)*18 + 2*(1-tt)*tt*78 + tt*tt*18; // same curve as the string
    const r = document.createElementNS(NS,"rect");
    r.setAttribute("x", x-11); r.setAttribute("y", y); r.setAttribute("width", 22); r.setAttribute("height", 26);
    r.setAttribute("rx", 1.5);
    r.setAttribute("class","pf");
    r.style.fill = colors[i%5];
    r.style.animationDelay = (i*0.12)+"s";
    g.appendChild(r);
  }
})();

// Primer render con el catálogo de respaldo, para no dejar la página en
// blanco mientras llega la respuesta del backend. Lo envuelvo en try/catch
// para que, si algo inesperado falla aquí, no impida que loadProducts()
// se llegue a ejecutar más abajo.
try{
  renderCatButtons();
  restoreCart();
  renderCatalog();
  renderCart();
  applyI18n();
}catch(e){
  console.error("Error en el primer render, se intenta seguir igualmente.", e);
}

// En cuanto llega el catálogo real del backend, se vuelve a pintar y se
// reintenta enlazar el carrito guardado (por si antes no encontró el
// producto en el catálogo de respaldo).
loadProducts().then(()=>{
  restoreCart();
  renderCatalog();
  renderCart();
});

/* ---------- Stripe redirect result banner ---------- */
(function showPaymentResultBanner(){
  const params = new URLSearchParams(window.location.search);
  const payment = params.get("payment");
  const orderId = params.get("order");
  if(!payment || !orderId) return;

  const banner = document.createElement("div");
  banner.style.cssText = "max-width:1080px;margin:14px auto 0;padding:0 20px;";
  const msg = payment === "success" ? t("paymentSuccessBanner")(orderId) : t("paymentCancelledBanner")(orderId);
  const color = payment === "success" ? "var(--green)" : "var(--gold)";
  banner.innerHTML = `<div style="border:1px solid ${color};color:${color};border-radius:12px;padding:12px 16px;font-size:13.5px;">${msg}</div>`;
  document.querySelector("header.hero").insertAdjacentElement("afterend", banner);

  // Clean the URL so refreshing doesn't re-show the banner.
  window.history.replaceState({}, "", window.location.pathname);
})();
