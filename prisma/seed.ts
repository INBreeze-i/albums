import { PrismaClient } from '@prisma/client';
import { sampleAlbums } from '../src/lib/sampleData';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data
  await prisma.photo.deleteMany();
  await prisma.album.deleteMany();
  console.log('🗑️ Cleared existing data');

  // Insert sample albums with photos
  for (const albumData of sampleAlbums) {
    const { photos, ...album } = albumData;
    
    const createdAlbum = await prisma.album.create({
      data: {
        ...album,
        photos: {
          create: photos
        }
      },
      include: {
        photos: true
      }
    });
    
    console.log(`✅ Created album "${createdAlbum.title}" with ${createdAlbum.photos.length} photos`);
  }

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });