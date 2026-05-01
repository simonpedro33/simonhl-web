# Guía de Estilo: Blueprint Soberano (v1.0)

Esta guía define la identidad visual de **SimonHL**. El sistema no se basa en "temas claros u oscuros", sino en un **Contraste Técnico** inspirado en los planos arquitectónicos y sistemas de alta precisión.

---

## 1. Filosofía de Diseño
- **Autoridad Técnica**: Cada elemento debe parecer necesario y preciso.
- **Soberanía**: El diseño sirve al contenido (el plano), no a la decoración.
- **Claridad Radical**: El fondo azul profundo aporta profundidad sin ser nihilista; las líneas blancas aportan luz.

---

## 2. Paleta de Colores (Regla 70/20/10)

### 🔵 Base (70%) - Blueprint Azul
Se usa para fondos y superficies principales. Evoca profundidad y precisión.
- **Blueprint Blue**: `#0F2B5C` (Clase Tailwind: `bg-blueprint-blue`)
- **Blueprint Deep**: `#0A1E3F` (Clase Tailwind: `bg-blueprint-blue-deep`) - *Para tarjetas y elevación.*

### ⚪ Contraste (20%) - Blanco Arquitectónico
Se usa para texto principal y líneas de estructura.
- **Architectural White**: `#F5F5F0` (Clase Tailwind: `text-blueprint-white`)

### 🟡 Énfasis (10%) - Ámbar Soberano
**Uso parsimonioso.** Solo para lo verdaderamente importante: CTAs, estados activos, logos.
- **Sovereign Amber**: `#D4A017` (Clase Tailwind: `text-blueprint-gold` / `bg-blueprint-gold`)

### 🔘 Soporte
- **Technical Gray**: `#8A9BB0` (Clase Tailwind: `text-blueprint-gray`) - *Para metadatos y texto secundario.*
- **Minimal Red**: `#8B1A1A` (Clase Tailwind: `text-blueprint-red`) - *Para errores o avisos críticos.*

---

## 3. Tipografía

### Principal: **Atkinson Hyperlegible**
Diseñada para máxima legibilidad. Se usa en párrafos y cuerpos de texto.
- **Sans-serif**: `font-sans`

### Técnica: **JetBrains Mono**
Representa el código, los protocolos y el rigor. Se usa en títulos secundarios, botones, etiquetas y placeholders.
- **Monospace**: `font-mono`
- **Estilo**: `uppercase`, `tracking-widest` (espaciado entre letras).

---

## 4. ADN de Componentes

### Estructura y Bordes
- **Sharp Corners**: Evitamos los bordes redondeados orgánicos. Usamos `rounded-none` o `rounded-sm`.
- **Bordes Técnicos**: Los bordes suelen ser de `1px` con una opacidad baja: `border-white/10`.

### Detalles de Acento (Newsletter Style)
- **Accent Corner**: Una pequeña "L" en la esquina superior derecha (`border-t border-r`) que se ilumina con el hover.
- **Backdrop Blur**: Los elementos flotantes (como el Header) usan `backdrop-blur-md` sobre un fondo con `90%` de opacidad.

---

## 5. Reglas de Implementación (Tailwind v4)

Cuando crees un componente nuevo, asegúrate de aplicar estas clases base:

```html
<!-- Ejemplo de Tarjeta Blueprint -->
<div class="bg-blueprint-blue-deep border border-white/10 p-8 rounded-sm group relative text-left">
  <!-- Detalle de esquina -->
  <div class="absolute top-0 right-0 w-4 h-4 border-t border-r border-blueprint-gold/20 group-hover:border-blueprint-gold transition-colors duration-300"></div>
  
  <h3 class="font-mono text-blueprint-gold uppercase tracking-tighter">/ Protocolo</h3>
  <h2 class="text-blueprint-white font-black text-2xl">Título del Componente</h2>
  <p class="text-blueprint-gray font-sans mt-4">Descripción detallada...</p>
</div>
```
