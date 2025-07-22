# Albums Gallery

A modern photo album gallery built with Next.js 14, TypeScript, HeroUI, and Tailwind CSS. Features responsive design, dark/light theme support, and beautiful image galleries.

![Albums Gallery](https://img.shields.io/badge/Next.js-14-black?logo=nextjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)
![HeroUI](https://img.shields.io/badge/HeroUI-2.8-purple?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue?logo=tailwindcss&logoColor=white)

## Features

### ✨ Modern Design
- **Responsive Layout**: Perfect display on all devices (mobile, tablet, desktop)
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **Smooth Animations**: Hover effects, transitions, and loading states
- **Beautiful UI**: Modern design with HeroUI components and Tailwind CSS

### 📸 Photo Management
- **Album Grid View**: Browse all albums in an organized grid layout
- **Photo Gallery**: View all photos in an album with masonry-style grid
- **Image Optimization**: Next.js Image component for optimal loading
- **Full-Screen Modal**: Click any photo to view in full-screen modal
- **Placeholder Images**: Elegant blur placeholders while images load

### 🔧 Technical Features
- **Next.js 14**: Latest App Router architecture
- **TypeScript**: Full type safety throughout the application
- **Prisma ORM**: Database schema and type-safe queries
- **MySQL Support**: Ready for production database deployment
- **SEO Optimized**: Meta tags, OpenGraph, and semantic HTML

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Gallery home page
│   ├── album/[id]/page.tsx      # Album detail page
│   ├── layout.tsx               # Root layout with providers
│   ├── providers.tsx            # HeroUI & theme providers
│   └── globals.css              # Global styles
├── components/
│   ├── AlbumCard.tsx            # Album preview card
│   ├── AlbumGrid.tsx            # Albums grid layout
│   ├── PhotoGrid.tsx            # Photos grid with modal
│   ├── Navigation.tsx           # Navigation bar with theme toggle
│   └── Icons.tsx                # SVG icon components
└── lib/
    ├── prisma.ts                # Prisma client configuration
    ├── types.ts                 # TypeScript type definitions
    └── sampleData.ts            # Sample data for development
```

## Quick Start

### 1. Installation

```bash
# Clone the repository
git clone <repository-url>
cd albums

# Install dependencies
npm install
```

### 2. Environment Setup

```bash
# Copy environment template
cp .env.example .env

# Edit .env with your database credentials
DATABASE_URL="mysql://username:password@localhost:3306/albums_db"
```

### 3. Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push

# Seed with sample data
npm run db:seed
```

### 4. Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## Database Schema

### Albums Table
```prisma
model Album {
  id          Int      @id @default(autoincrement())
  title       String
  description String?
  coverImage  String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  photos      Photo[]
}
```

### Photos Table
```prisma
model Photo {
  id        Int      @id @default(autoincrement())
  url       String
  title     String?
  albumId   Int
  album     Album    @relation(fields: [albumId], references: [id], onDelete: Cascade)
  createdAt DateTime @default(now())
}
```

## Available Scripts

```bash
# Development
npm run dev          # Start development server

# Building
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:seed      # Seed database with sample data
npm run db:reset     # Reset database and reseed
```

## Configuration

### Next.js Configuration
- Image optimization configured for external domains
- HeroUI package optimization enabled
- TypeScript strict mode enabled

### Tailwind CSS
- HeroUI plugin integrated
- Dark mode support enabled
- Custom utilities for line clamping and scrollbars

### Theme Support
- System preference detection
- Persistent theme switching
- HeroUI dark/light theme integration

## Sample Data

The project includes 6 sample albums with 8-12 photos each:
- Nature Landscapes (10 photos)
- City Architecture (12 photos) 
- Ocean Views (8 photos)
- Mountain Adventures (11 photos)
- Street Photography (9 photos)
- Wildlife Collection (10 photos)

Images are sourced from [Picsum Photos](https://picsum.photos/) for development and testing.

## Production Deployment

### Environment Variables
```env
DATABASE_URL="mysql://username:password@hostname:port/database"
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-secret-key"
```

### Build Process
```bash
npm run build
npm run start
```

### Vercel Deployment
This project is optimized for Vercel deployment:

1. Push to GitHub repository
2. Connect to Vercel
3. Add environment variables
4. Deploy automatically

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + HeroUI
- **Database**: MySQL + Prisma ORM
- **Icons**: Custom SVG components
- **Images**: Next.js Image optimization
- **Theme**: next-themes integration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Create an [Issue](../../issues)
- Check [Documentation](../../wiki)
- Review [Examples](../../tree/main/examples)
