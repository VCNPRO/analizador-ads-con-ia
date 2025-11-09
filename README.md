# 📊 Analizador SEO con IA

Una aplicación web inteligente que utiliza Google Gemini AI para analizar y comparar la posición de tu sitio web en los rankings de búsqueda de Google frente a tus competidores.

## 🌐 Demo en Vivo

**🚀 [https://analizador-ads-con-ia.vercel.app](https://analizador-ads-con-ia.vercel.app)**

## ✨ Características

- 🔍 **Análisis SEO Inteligente:** Utiliza Google Gemini AI para simular búsquedas reales
- 📊 **Visualización de Datos:** Gráficos interactivos y tablas detalladas
- 🎯 **Comparación Competitiva:** Analiza múltiples competidores simultáneamente
- 💾 **Persistencia Local:** Guarda y carga análisis previos
- 📱 **Responsive Design:** Funciona perfectamente en móviles, tablets y desktop
- 🎨 **Interfaz Moderna:** Diseño limpio y fácil de usar con Tailwind CSS

## 📖 Documentación

**📘 [Ver Guía de Usuario Completa](GUIA_USUARIO.md)**

La guía incluye:
- Instrucciones paso a paso
- Casos de uso prácticos
- Interpretación de resultados
- Solución de problemas
- Consejos y mejores prácticas

## 🚀 Inicio Rápido

### Uso en Producción

1. Visita [https://analizador-ads-con-ia.vercel.app](https://analizador-ads-con-ia.vercel.app)
2. Ingresa tu sitio web
3. Agrega palabras clave que quieres analizar
4. (Opcional) Agrega sitios web de competidores
5. Haz clic en "Analizar Rankings"
6. ¡Revisa tus resultados!

### Desarrollo Local

**Requisitos previos:**
- Node.js (v18 o superior)
- npm o yarn

**Instalación:**

```bash
# Clonar el repositorio
git clone https://github.com/VCNPRO/analizador-ads-con-ia.git
cd analizador-ads-con-ia

# Instalar dependencias
npm install

# Configurar variables de entorno
# Crea un archivo .env.local y agrega:
# GEMINI_API_KEY=tu_api_key_aqui

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🔑 Obtener API Key de Gemini

1. Ve a [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Create API Key"
4. Copia la API key generada
5. Agrégala a tu archivo `.env.local`

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React 19 + TypeScript
- **Estilos:** Tailwind CSS
- **Gráficos:** Recharts
- **IA:** Google Gemini API (@google/genai)
- **Build Tool:** Vite
- **Deployment:** Vercel

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🏗️ Estructura del Proyecto

```
analizador-ads-con-ia/
├── components/          # Componentes React
│   ├── ResultsTable.tsx
│   ├── SummaryChart.tsx
│   └── icons.tsx
├── services/           # Servicios de API
│   └── geminiService.ts
├── App.tsx            # Componente principal
├── index.tsx          # Punto de entrada
├── types.ts           # Definiciones de tipos TypeScript
├── vite.config.ts     # Configuración de Vite
└── GUIA_USUARIO.md    # Guía completa de usuario
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 👥 Autor

**VCNPRO** - [GitHub](https://github.com/VCNPRO)

## 🔗 Enlaces

- **Demo:** https://analizador-ads-con-ia.vercel.app
- **Repositorio:** https://github.com/VCNPRO/analizador-ads-con-ia
- **Guía de Usuario:** [GUIA_USUARIO.md](GUIA_USUARIO.md)
- **Google AI Studio:** https://aistudio.google.com/

## 💡 Características Próximas

- [ ] Exportar resultados a PDF/Excel
- [ ] Historial de análisis con gráficos de tendencias
- [ ] Análisis de móvil vs desktop
- [ ] Integración con Google Search Console
- [ ] Análisis de competidores automático
- [ ] Sugerencias de mejora SEO basadas en IA

## 🐛 Reportar Problemas

Si encuentras un bug o tienes una sugerencia, por favor [abre un issue](https://github.com/VCNPRO/analizador-ads-con-ia/issues).

---

⭐ Si este proyecto te resultó útil, considera darle una estrella en GitHub!
