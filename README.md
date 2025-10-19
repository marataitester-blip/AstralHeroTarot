# AstralHeroTarot

3D Tarot card reader with daily Arcana, multilingual support (i18next), and AI integration capabilities.

## Features

- 🎴 **Interactive Tarot Readings** - Multiple spread types (Daily Card, Three Card, Celtic Cross)
- 🌍 **Multilingual Support** - Built with i18next for seamless language switching
- 🎨 **Modern UI** - Custom CSS variables for consistent theming
- 📚 **Tarot Encyclopedia** - Searchable database of tarot card meanings
- 🤖 **AI-Ready** - Graceful fallback support for AI features (Yandex Cloud AI)
- ⚡ **Vite-Powered** - Fast development and optimized production builds

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router v6
- **Internationalization**: i18next, react-i18next
- **Build Tool**: Vite
- **Styling**: Custom CSS with CSS Variables

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/marataitester-blip/AstralHeroTarot.git
cd AstralHeroTarot
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Configure environment variables:
```bash
cp .env.example .env
# Edit .env and add your API keys if needed
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Project Structure

```
AstralHeroTarot/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   └── Header.tsx
│   ├── pages/          # Page components
│   │   ├── MainPage.tsx
│   │   ├── Readings.tsx
│   │   └── Encyclopedia.tsx
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Application entry point
│   ├── index.css       # Global styles and variables
│   ├── i18n.ts         # i18next configuration
│   ├── tarotDeck.ts    # Tarot card data
│   └── index.html      # HTML template
├── .env.example        # Environment variables template
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## Environment Variables

The application supports optional API integrations. Copy `.env.example` to `.env` and configure:

- `VITE_YANDEX_API_KEY` - Yandex Cloud AI API key (optional)
- `VITE_GOOGLE_AI_KEY` - Reserved for future use (optional)
- `VITE_APP_TITLE` - Application title
- `VITE_DEFAULT_LANGUAGE` - Default language (en, ru, etc.)

**Note**: The application works fully without API keys. AI features will show graceful fallback messages.

## Recent Updates

### October 2025 - Project Fixes & Enhancements

✅ **Added missing files**:
- Created `src/index.css` with font imports, CSS variables, and normalize/reset styles
- Added missing page components: `MainPage.tsx`, `Readings.tsx`, `Encyclopedia.tsx`
- Created `public/` folder structure for static assets
- Added `.env.example` for environment configuration

✅ **Fixed imports**:
- Updated `main.tsx` to import `index.css` instead of missing style files
- Removed obsolete CSS imports from `App.tsx`
- Cleaned up component structure

✅ **API Integration**:
- No GoogleGenerativeAI usage found (clean codebase)
- Added graceful fallback support for missing API keys
- Documented environment variables

✅ **Styling**:
- No Tailwind CDN dependencies (clean setup)
- Custom CSS with variables for theming
- Modern, maintainable styling approach

## Deployment

The project is configured for automatic deployment on Vercel when pushing to the main branch.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to your hosting service.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Future Enhancements

- [ ] Add 3D card animations
- [ ] Implement AI-powered interpretations
- [ ] Add text-to-speech for card readings
- [ ] Expand tarot card database
- [ ] Add user authentication
- [ ] Save reading history
- [ ] Mobile app version

## Support

For issues or questions, please open an issue on GitHub.

---

Made with ❤️ by the AstralHeroTarot team
