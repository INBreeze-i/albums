# Albums Gallery

A beautiful, responsive photo albums gallery built with Next.js 14, TypeScript, and HeroUI. This application provides a modern, elegant way to organize and display photo collections.

![Albums Gallery](https://images.unsplash.com/photo-1551030173-122aadf4489c?w=800&h=400&fit=crop)

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 14 (App Router), TypeScript, and HeroUI
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Image Optimization**: Leverages Next.js Image component for optimal performance
- **Dark/Light Theme**: Toggle between dark and light modes
- **Interactive Photo Gallery**: Click to view photos in full-screen modal with navigation
- **Database Ready**: Configured with Prisma ORM for MySQL database
- **SEO Optimized**: Proper meta tags and structure for search engines
- **Performance Optimized**: Lazy loading, optimized bundles, and efficient image handling

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager
- MySQL database (optional, sample data included)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/INBreeze-i/albums.git
   cd albums
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your database configuration:
   ```env
   DATABASE_URL="mysql://user:password@localhost:3306/albums"
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database (optional)**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma db push
   
   # Seed the database (optional)
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/
│   ├── album/[id]/page.tsx    # Album detail page
│   ├── page.tsx               # Home page (gallery)
│   ├── layout.tsx             # Root layout
│   ├── providers.tsx          # App providers
│   └── globals.css           # Global styles
├── components/
│   ├── AlbumCard.tsx         # Album card component
│   ├── AlbumGrid.tsx         # Albums grid layout
│   ├── PhotoGrid.tsx         # Photos grid with modal
│   └── Navigation.tsx        # Navigation bar
├── lib/
│   ├── prisma.ts             # Prisma client setup
│   └── types.ts              # TypeScript type definitions
└── prisma/
    └── schema.prisma         # Database schema
```

## 🎨 UI Components

The application uses HeroUI (formerly NextUI) components including:

- **Cards**: For album displays
- **Modals**: For full-screen photo viewing
- **Navigation**: For app navigation and theme toggle
- **Buttons**: For interactions
- **Spinners**: For loading states

## 🗄️ Database Schema

### Albums Table
- `id` - Primary key (auto-increment)
- `title` - Album title
- `description` - Album description (optional)
- `coverImage` - Cover image URL (optional)
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

### Photos Table
- `id` - Primary key (auto-increment)
- `url` - Photo URL
- `title` - Photo title (optional)
- `albumId` - Foreign key to albums table
- `createdAt` - Creation timestamp

## 🎯 Key Features in Detail

### Responsive Grid Layout
- Automatically adjusts columns based on screen size
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

### Image Optimization
- Next.js Image component with automatic optimization
- Lazy loading for better performance
- Multiple image sizes for different devices
- WebP format support

### Theme Support
- System theme detection
- Manual dark/light mode toggle
- Persistent theme preference

### Photo Modal
- Full-screen photo viewing
- Keyboard and button navigation
- Photo information display
- Smooth transitions and animations

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Digital Ocean App Platform
- AWS Amplify

## 🔧 Configuration

### Tailwind CSS
Configured with HeroUI theme in `tailwind.config.js`

### Next.js
Optimized configuration in `next.config.ts` for:
- Image domains
- Performance optimization
- Bundle analysis

### TypeScript
Strict TypeScript configuration in `tsconfig.json`

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [HeroUI](https://heroui.com/) for beautiful UI components
- [Prisma](https://prisma.io/) for database management
- [Unsplash](https://unsplash.com/) for sample images
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Review existing issues and discussions

---

**Built with ❤️ using Next.js, TypeScript, and HeroUI**
