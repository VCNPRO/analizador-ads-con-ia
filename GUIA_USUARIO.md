# 📊 Guía de Usuario - Analizador SEO con IA

## 🎯 ¿Qué es esta aplicación?

El **Analizador SEO con IA** es una herramienta que te permite comparar la posición de tu sitio web en los resultados de búsqueda de Google frente a tus competidores. Utiliza la tecnología de Google Gemini AI para realizar búsquedas simuladas y analizar dónde aparece tu sitio web en comparación con la competencia.

## 🚀 Acceso a la Aplicación

**URL de Producción:** https://analizador-ads-con-ia.vercel.app

## 📋 Requisitos Previos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Conexión a Internet
- Una lista de palabras clave que quieras analizar
- URLs de tus competidores (opcional pero recomendado)

---

## 🎮 Cómo Usar la Aplicación

### **Paso 1: Ingresar Tu Sitio Web**

1. En el campo **"Su Sitio Web (Requerido)"**, ingresa la URL de tu sitio web
   - Ejemplo: `misitioweb.com` o `www.misitioweb.com`
   - No es necesario incluir `https://`

### **Paso 2: Agregar Competidores** (Opcional)

1. En la sección **"Sitios Web de la Competencia"**, ingresa las URLs de tus competidores
2. Puedes agregar múltiples competidores haciendo clic en **"Añadir Competidor"**
3. Para eliminar un competidor, haz clic en el ícono de **papelera** 🗑️
   - Ejemplo de competidores: `competidor1.com`, `competidor2.com`

### **Paso 3: Definir Palabras Clave**

1. En la sección **"Palabras Clave"**, ingresa las palabras o frases que quieres analizar
2. Cada palabra clave representa una búsqueda que se analizará
3. Puedes agregar múltiples palabras clave haciendo clic en **"Añadir Palabra Clave"**
4. Para eliminar una palabra clave, haz clic en el ícono de **papelera** 🗑️

**Ejemplos de palabras clave:**
- `mejores zapatos deportivos`
- `restaurante italiano madrid`
- `curso de programación online`
- `tienda de electrónica`

### **Paso 4: Configurar Profundidad de Búsqueda**

1. En **"Profundidad de Búsqueda"**, selecciona cuántos resultados quieres analizar
2. Valor mínimo: **10 resultados**
3. Valor máximo: **50 resultados**
4. Recomendado: **20 resultados** (equilibrio entre velocidad y precisión)

> ⚠️ **Nota:** Mientras mayor sea la profundidad, más tiempo tardará el análisis pero será más completo.

### **Paso 5: Analizar Rankings**

1. Haz clic en el botón **"Analizar Rankings"**
2. Espera mientras la IA procesa tu solicitud
   - Verás un indicador de carga mientras trabaja
   - El tiempo de espera depende de:
     - Número de palabras clave
     - Número de competidores
     - Profundidad de búsqueda

---

## 📊 Interpretando los Resultados

### **1. Resumen de Apariciones (Gráfico de Barras)**

Este gráfico muestra cuántas veces aparece cada sitio web en los resultados para todas las palabras clave analizadas.

- **Eje X:** Sitios web (tu sitio + competidores)
- **Eje Y:** Número de apariciones
- **Barras azules:** Cantidad de veces que el sitio apareció en los resultados

**Interpretación:**
- Barras más altas = Mayor visibilidad general
- Si tu sitio tiene la barra más alta, tienes mejor presencia SEO general

### **2. Resultados Detallados (Tabla)**

La tabla muestra la posición exacta de cada sitio para cada palabra clave.

**Columnas:**
- **Primera columna:** Palabras clave analizadas
- **Siguientes columnas:** Tu sitio web + competidores

**Códigos de colores:**
- 🥇 **Amarillo:** Posición #1 (primer lugar)
- 🥈 **Gris oscuro:** Posición #2 (segundo lugar)
- 🥉 **Naranja:** Posición #3 (tercer lugar)
- **Números negros:** Posiciones 4-50
- **Guion rojo (-)**: No aparece en los resultados

**Fondo destacado:**
- **Fondo azul claro:** Tu sitio web (columna "Tuyo")
- **Fondo amarillo claro:** Competidor mejor posicionado para esa palabra clave

**Interacción:**
- Pasa el cursor sobre cualquier posición para ver:
  - Título de la página que aparece en Google
  - URL exacta del resultado

### **3. Fuentes**

Al final de la página verás una lista de enlaces a las fuentes utilizadas por la IA para generar el análisis.

- Estos son los sitios que Google realmente devolvió en las búsquedas
- Puedes hacer clic en ellos para verificar los resultados

---

## 💾 Funciones Adicionales

### **Guardar Análisis**

1. Después de obtener resultados, haz clic en **"Guardar Análisis"**
2. Los datos se guardan en tu navegador (localStorage)
3. Puedes cerrar la página y los datos permanecerán guardados

### **Cargar Último Análisis**

1. Haz clic en **"Cargar Último Análisis"** en cualquier momento
2. Se restaurarán:
   - Tu sitio web
   - Competidores
   - Palabras clave
   - Resultados anteriores
3. Útil si cerraste la página accidentalmente

---

## 💡 Consejos de Uso

### **Para Mejores Resultados:**

1. **Usa palabras clave específicas**
   - ✅ Bueno: "pizza a domicilio barcelona"
   - ❌ Evitar: "pizza"

2. **Incluye variaciones de tus palabras clave**
   - "comprar zapatillas online"
   - "tienda de zapatillas"
   - "zapatillas baratas"

3. **Analiza a tus competidores directos**
   - Sitios que ofrecen productos/servicios similares
   - Sitios en tu misma ubicación geográfica

4. **Realiza análisis periódicos**
   - Semanal o mensual para trackear mejoras
   - Después de cambios importantes en tu sitio

5. **Profundidad recomendada:**
   - **10-20 resultados:** Análisis rápido, enfocado en primeras posiciones
   - **30-40 resultados:** Análisis completo para ver posiciones más bajas
   - **50 resultados:** Análisis exhaustivo (más lento)

---

## 🔍 Casos de Uso

### **Caso 1: Análisis SEO Básico**
> Quieres saber si tu sitio web aparece en Google

**Pasos:**
1. Ingresa tu sitio web
2. Agrega 5-10 palabras clave relacionadas con tu negocio
3. Profundidad: 20 resultados
4. Analizar

### **Caso 2: Comparación con Competencia**
> Quieres ver cómo te comparas con tus competidores

**Pasos:**
1. Ingresa tu sitio web
2. Agrega 2-5 competidores principales
3. Agrega 10-15 palabras clave estratégicas
4. Profundidad: 30 resultados
5. Analizar

### **Caso 3: Auditoría de Keywords**
> Quieres saber qué palabras clave te están funcionando mejor

**Pasos:**
1. Ingresa tu sitio web
2. No agregues competidores (o solo 1-2)
3. Agrega 20-30 palabras clave diferentes
4. Profundidad: 20 resultados
5. Analizar
6. Revisa en qué palabras clave tienes mejor posición

---

## ⚠️ Limitaciones y Consideraciones

1. **Resultados Simulados:**
   - Los resultados son generados por IA y pueden variar de los resultados reales de Google
   - Google personaliza resultados por ubicación, historial, etc.

2. **Tiempo de Procesamiento:**
   - Análisis grandes (muchas palabras clave + competidores) pueden tardar varios minutos
   - Ten paciencia durante el análisis

3. **Cuota de API:**
   - La aplicación usa Google Gemini API
   - Puede haber límites de uso según el plan

4. **Datos Locales:**
   - Los análisis guardados se almacenan solo en tu navegador
   - Si limpias el caché del navegador, se perderán

---

## 🆘 Solución de Problemas

### **"No se encontraron análisis guardados"**
- No has guardado ningún análisis previamente
- Has limpiado el caché del navegador
- **Solución:** Realiza un nuevo análisis y guárdalo

### **"Error: ..."**
- Verifica tu conexión a Internet
- Asegúrate de haber ingresado al menos 1 palabra clave
- Verifica que las URLs estén correctas (sin espacios ni caracteres especiales)
- Recarga la página (F5) e intenta de nuevo

### **El análisis tarda mucho**
- Es normal si tienes muchas palabras clave o alta profundidad
- Espera al menos 2-3 minutos antes de cancelar
- **Sugerencia:** Reduce el número de palabras clave o la profundidad

### **No aparecen resultados para mi sitio**
- Tu sitio puede no estar indexado en Google
- Puede estar muy abajo en los rankings (fuera de los primeros 50 resultados)
- **Solución:** Aumenta la profundidad de búsqueda a 50

---

## 📞 Soporte

Para reportar problemas o sugerencias:
- **GitHub:** https://github.com/VCNPRO/analizador-ads-con-ia
- **Issues:** https://github.com/VCNPRO/analizador-ads-con-ia/issues

---

## 🔐 Privacidad

- Esta aplicación NO almacena tus datos en servidores
- Los análisis se guardan solo en tu navegador local
- Las búsquedas se procesan a través de Google Gemini API
- No se comparte información con terceros

---

## 📝 Ejemplo Práctico Completo

**Escenario:** Tienes una tienda online de zapatos y quieres analizar tu posición SEO.

1. **Tu sitio web:** `zapateriamadrid.com`

2. **Competidores:**
   - `zapatosonline.es`
   - `calzadopremium.com`

3. **Palabras clave:**
   - `comprar zapatos online`
   - `zapatos de mujer madrid`
   - `zapateria online españa`
   - `zapatos baratos`
   - `tienda de calzado`

4. **Profundidad:** 30 resultados

5. **Análisis:** Haz clic en "Analizar Rankings"

6. **Resultados esperados:**
   - Verás un gráfico mostrando cuántas veces aparece cada tienda
   - En la tabla verás la posición exacta para cada palabra clave
   - Podrás identificar en qué palabras clave estás ganando y en cuáles necesitas mejorar

7. **Acción:** Guarda el análisis para comparar en el futuro

---

## 🎓 Términos SEO Básicos

- **Ranking:** Posición en la que aparece tu sitio en los resultados de búsqueda
- **Palabra clave (Keyword):** Término o frase que los usuarios buscan en Google
- **SERP:** Search Engine Results Page (Página de Resultados del Buscador)
- **Profundidad:** Cuántos resultados se analizan (ej: Top 10, Top 50)
- **Visibilidad:** Qué tan frecuentemente aparece tu sitio en las búsquedas

---

¡Listo! Ahora estás preparado para usar el **Analizador SEO con IA** y mejorar la presencia de tu sitio web en Google. 🚀
