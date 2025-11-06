# Al Namariq Group Corporate Website

A modern, responsive corporate website for Al Namariq Group of Companies built with Next.js 13, TypeScript, and Tailwind CSS.

![Al Namariq Group Website](./public/src/logo/logo.png)

## 🌟 Features

- **Modern Stack**: Built with Next.js 13 (App Router), TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all device sizes
- **Internationalization**: Multi-language support (English and Arabic)
- **Interactive UI Components**:
  - 3D Flipping Service Cards
  - Animated Product Showcases
  - Smooth Scrolling Testimonials Carousel
  - Infinite Brand Carousel
  - Interactive Contact Forms
- **Performance Optimized**:
  - Image optimization with Next.js Image component
  - Code splitting and lazy loading
  - Server-side rendering
  - Optimized fonts and icons
- **Animations**: GSAP-powered smooth animations and transitions
- **SEO Friendly**: Meta tags, sitemap, and robots.txt included

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NinsonD/Namariq-Group-website.git
cd Namariq-Group-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add required environment variables:
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_measurement_id
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
├── app/                    # Next.js 13 app directory
│   ├── api/               # API routes
│   ├── [locale]/          # Internationalized routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── cards/            # Card components
│   ├── forms/            # Form components
│   └── ui/               # UI components
├── lib/                   # Utility functions
├── public/               # Static assets
│   ├── images/          
│   ├── locales/          # Translation files
│   └── Products/         # Product images
└── types/                # TypeScript types
```

## 🛠 Technologies Used

- **Framework**: Next.js 13
- **Language**: TypeScript
- **Styling**: 
  - Tailwind CSS
  - CSS Modules
- **State Management**: React Hooks
- **Animations**: 
  - GSAP
  - CSS Animations
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Internationalization**: next-i18next
- **Security**: 
  - reCAPTCHA
  - Content Security Policy
- **Analytics**: Google Analytics
- **Testing**: Jest & React Testing Library

## 🌐 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build production bundle
- `npm start`: Start production server
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript compiler
- `npm test`: Run tests
- `npm run analyze`: Analyze bundle size

## 🔧 Configuration

### Tailwind CSS

Tailwind configuration is in `tailwind.config.js`. The project uses custom colors and extended theme settings:

```js
theme: {
  extend: {
    colors: {
      primary: {...},
      secondary: {...}
    }
  }
}
```

### Internationalization

Language configurations are in `next-i18next.config.js`. Supported languages:
- English (en)
- Arabic (ar)

Translation files are located in `public/locales/`.

## 📱 Features Details

### Interactive Components

1. **Service Cards**
   - 3D flip animation on hover
   - Gradient backgrounds
   - Animated icons
   - Responsive layout

2. **Product Showcase**
   - Dynamic image loading
   - Category filtering
   - Animated transitions
   - Lazy loading

3. **Testimonials Carousel**
   - Touch-enabled sliding
   - Automatic rotation
   - Responsive design
   - Custom navigation

### Performance Optimizations

- Image optimization using Next.js Image component
- Font optimization with next/font
- Code splitting and lazy loading
- Server-side rendering for improved SEO
- Caching strategies for static assets

## 🚀 Deployment

The website can be deployed to various platforms:

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically with git push

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 🔐 Security

- reCAPTCHA integration for forms
- Content Security Policy headers
- Rate limiting on API routes
- Input validation and sanitization
- Secure cookie handling

## 📈 Analytics

Google Analytics is integrated to track:
- Page views
- User interactions
- Form submissions
- Custom events

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Al Namariq Group.

## 📞 Support

For support, email [support@alnamariq.com](mailto:support@alnamariq.com) or raise an issue in the repository.