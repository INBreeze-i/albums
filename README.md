# NextJS TypeScript Gallery with HeroUI and MySQL

A modern photo gallery web application built with Next.js 14, TypeScript, HeroUI (NextUI v2), and MySQL database with Prisma ORM.

## Features

- 🖼️ **Photo Gallery**: Responsive gallery with 6 different categories
- 🎨 **Modern UI**: Built with HeroUI components and Tailwind CSS  
- 🔗 **Navigation**: Clean navbar connecting all 6 gallery pages
- 📱 **Responsive Design**: Works perfectly on all screen sizes
- 🚀 **Performance**: Optimized images with lazy loading
- 💾 **Database**: MySQL with Prisma ORM for data management
- 🎯 **TypeScript**: Full type safety throughout the application
- 🔍 **SEO Optimized**: Proper meta tags and structure

## Project Structure

```
albums/
├── app/                          # Next.js 14 App Router
│   ├── api/                      # API routes
│   │   ├── galleries/            # Gallery endpoints
│   │   └── images/               # Image endpoints
│   ├── gallery/[id]/             # Dynamic gallery pages
│   │   └── page.tsx
│   ├── globals.css               # Global styles
│   └── page.tsx                  # Home page
├── components/                   # Reusable UI components
│   ├── Banner.tsx                # Hero banner
│   ├── GalleryContainer.tsx      # Gallery grid container
│   ├── ImageCard.tsx             # Individual image card
│   ├── Layout.tsx                # Main layout wrapper
│   └── NavBar.tsx                # Navigation component
├── lib/                          # Utility libraries
│   ├── db.ts                     # Prisma client setup
│   └── utils.ts                  # Helper functions
├── prisma/                       # Database schema & migrations
│   ├── schema.prisma             # Database schema
│   └── seed.ts                   # Sample data seeding
├── public/images/                # Static image assets
├── types/                        # TypeScript type definitions
└── README.md                     # This file
```

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **UI Library**: HeroUI (NextUI v2)
- **Styling**: Tailwind CSS
- **Database**: MySQL
- **ORM**: Prisma
- **Image Optimization**: Next.js Image component

## Quick Start

### Prerequisites

- Node.js 18.x or higher
- MySQL 8.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd albums
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your MySQL database connection:
   ```env
   DATABASE_URL="mysql://username:password@localhost:3306/albums_db"
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   
   Create MySQL database:
   ```sql
   CREATE DATABASE albums_db;
   ```
   
   Generate Prisma client:
   ```bash
   npm run db:generate
   ```
   
   Run database migrations:
   ```bash
   npm run db:migrate
   ```
   
   Seed sample data:
   ```bash
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run db:reset` - Reset database (caution: deletes all data)

## Database Schema

### Galleries Table
```sql
CREATE TABLE galleries (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Images Table  
```sql
CREATE TABLE images (
  id INT PRIMARY KEY AUTO_INCREMENT,
  filename VARCHAR(255) NOT NULL,
  originalName VARCHAR(255),
  alt VARCHAR(255),
  caption TEXT,
  galleryId INT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (galleryId) REFERENCES galleries(id) ON DELETE CASCADE,
  INDEX idx_galleryId (galleryId)
);
```

## Gallery Categories

The application comes with 5 pre-configured gallery categories:

1. **Nature** - Beautiful nature photography
2. **Architecture** - Stunning architectural designs
3. **Portraits** - Professional portrait photography  
4. **Street** - Urban life and street photography
5. **Abstract** - Creative and abstract photography

Each gallery displays up to 4 images on the home page, with a "View All" button linking to the dedicated gallery page showing all images.

## API Endpoints

### GET /api/galleries
Returns all galleries with their first 4 images.

### GET /api/galleries/[id]  
Returns a specific gallery with all its images.

### GET /api/images
Returns images with optional filtering:
- `?galleryId=1` - Filter by gallery ID
- `?limit=8` - Limit number of results

## Customization

### Adding New Images
1. Add image files to `public/images/`
2. Update the database through the admin interface or directly via SQL
3. Images should be optimized for web (recommended: 400x300px for thumbnails)

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update `app/globals.css` for global styles
- Component styles can be customized using Tailwind classes

### Adding New Gallery Categories
1. Insert new gallery record in database
2. Add corresponding images
3. Navigation will automatically update

## Production Deployment

### Build the application
```bash
npm run build
```

### Environment Setup
Ensure production environment variables are set:
```env
DATABASE_URL="mysql://user:pass@host:port/database"
NEXTAUTH_SECRET="secure-production-secret"
NEXTAUTH_URL="https://yourdomain.com"
```

### Database Migration
Run migrations in production:
```bash
npx prisma migrate deploy
```

## Troubleshooting

### Common Issues

1. **Database Connection Errors**
   - Verify MySQL is running
   - Check connection credentials in `.env`
   - Ensure database exists

2. **Build Errors**
   - Run `npm run db:generate` after schema changes
   - Clear `.next` folder and rebuild

3. **Image Loading Issues**
   - Verify images exist in `public/images/`
   - Check file permissions
   - Ensure correct file extensions in database

### Performance Tips

- Use WebP format for better compression
- Implement image CDN for production
- Enable database query optimization
- Use Redis for caching API responses

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Review existing issues and solutions
