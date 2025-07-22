import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create sample albums
  const album1 = await prisma.album.create({
    data: {
      title: 'Summer Vacation 2024',
      description: 'Beautiful memories from our summer vacation in the mountains',
      coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      photos: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
            title: 'Mountain Peak',
          },
          {
            url: 'https://images.unsplash.com/photo-1464822759844-d150baec4379?w=800&h=600&fit=crop',
            title: 'Alpine Lake',
          },
          {
            url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop',
            title: 'Forest Trail',
          },
          {
            url: 'https://images.unsplash.com/photo-1506197603052-3cc9c3201bd?w=800&h=600&fit=crop',
            title: 'Sunset Valley',
          },
        ],
      },
    },
  });

  const album2 = await prisma.album.create({
    data: {
      title: 'City Adventures',
      description: 'Exploring urban landscapes and architecture',
      coverImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&h=300&fit=crop',
      photos: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop',
            title: 'City Lights',
          },
          {
            url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
            title: 'Downtown Street',
          },
          {
            url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
            title: 'Skyscraper View',
          },
        ],
      },
    },
  });

  const album3 = await prisma.album.create({
    data: {
      title: 'Nature Photography',
      description: 'Capturing the beauty of nature in all seasons',
      coverImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop',
      photos: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
            title: 'Forest Path',
          },
          {
            url: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=600&fit=crop',
            title: 'Wildflowers',
          },
          {
            url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop',
            title: 'Ocean Waves',
          },
        ],
      },
    },
  });

  console.log('Database seeded successfully!');
  console.log(`Created albums: ${album1.id}, ${album2.id}, ${album3.id}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });