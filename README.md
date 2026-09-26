# Nepali Pasal Spain — नेपाली पसल स्पेन

Tienda online de **Nepali Pasal Spain**, tienda de productos nepalíes en **Avinguda de Can Serra 54, L'Hospitalet de Llobregat** (metro L1 / L5 · +34 611 38 16 63).

Parte del mismo código que desarrollé para Nepali Products Barcelona (Buddhabhumi), con una identidad visual nueva basada en el logo de la tienda, y se conecta a su propia instancia del [Nepali Shop Backend](https://github.com/Gatsbys-stocks/nepali-shop-backend).

## Diseño

- Paleta sacada del logo: **rojo estupa** (`--red`), **azul marino** (`--navy`), **dorado** de la roseta (`--gold`) y los cinco colores de la bandera de oración — todo en tokens CSS en `:root`.
- Hero partido como el logo: mitad superior roja con montañas del Himalaya y una **guirnalda de banderas de oración animada**, banda inferior azul con los datos clave (tienda, metro, envíos, pago).
- Logo circular con aro blanco y dorado; titulares en *Anton* (condensada, como el rótulo del logo), texto en *Figtree* y *Noto Sans Devanagari* para el nepalí.
- Sección **"Ven a la tienda"** con dirección, líneas de metro, teléfono, botón "Cómo llegar" y mapa de Google.
- Pensada primero para móvil: rejilla de 2 columnas, carrito a lo ancho, menú de idioma arriba.

## Funciones

- **Trilingüe: Español / English / नेपाली** — cambia toda la interfaz sin recargar y recuerda el idioma elegido.
- Catálogo por categorías con buscador (nombre nepalí o inglés), control de stock y fotos.
- Carrito persistente (`localStorage`), checkout con tarifas de envío reales (Shippo) y pago con tarjeta (Stripe Checkout).
- Botón de WhatsApp con mensaje prellenado en el idioma activo.

## Configuración

En `js/app.js`, primera línea:

```js
const API_BASE_URL = "https://nepali-pasal-backend.onrender.com";
```

Pon ahí la URL del Web Service de Render de esta tienda (ver "Varias tiendas con el mismo código" en el README del backend). En ese backend, `ALLOWED_ORIGIN` debe ser la URL donde se publique esta web, y `STORE_URL` también, para que Stripe devuelva al cliente aquí.

## Estructura

```
index.html
css/style.css     # diseño (tokens en :root)
js/app.js         # catálogo, carrito, checkout, i18n ES/EN/NP
img/              # logo (webp), favicon, icono y imagen para compartir (og.jpg)
```

Sin build: se publica tal cual en GitHub Pages, Netlify o cualquier hosting estático.
