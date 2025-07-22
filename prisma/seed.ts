import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create galleries
  const galleries = await Promise.all([
    prisma.gallery.upsert({
      where: { id: 1 },
      update: {},
      create: {
        id: 1,
        name: "Nature",
        description: "Beautiful nature photography collection"
      }
    }),
    prisma.gallery.upsert({
      where: { id: 2 },
      update: {},
      create: {
        id: 2,
        name: "Architecture", 
        description: "Stunning architectural designs and structures"
      }
    }),
    prisma.gallery.upsert({
      where: { id: 3 },
      update: {},
      create: {
        id: 3,
        name: "Portraits",
        description: "Professional portrait photography"
      }
    }),
    prisma.gallery.upsert({
      where: { id: 4 },
      update: {},
      create: {
        id: 4,
        name: "Street",
        description: "Urban life and street photography"
      }
    }),
    prisma.gallery.upsert({
      where: { id: 5 },
      update: {},
      create: {
        id: 5,
        name: "Abstract",
        description: "Creative and abstract photography"
      }
    })
  ]);

  console.log('Galleries created:', galleries.length);

  // Create sample images for each gallery (4 images per gallery)
  const sampleImages = [
    // Nature Gallery (ID: 1)
    { filename: "nature1.svg", originalName: "Mountain Lake", alt: "Beautiful mountain lake view", caption: "Serene lake surrounded by mountains", galleryId: 1 },
    { filename: "nature2.svg", originalName: "Forest Path", alt: "Forest hiking path", caption: "A peaceful path through the forest", galleryId: 1 },
    { filename: "nature3.svg", originalName: "Sunset View", alt: "Sunset over hills", caption: "Golden sunset over rolling hills", galleryId: 1 },
    { filename: "nature4.svg", originalName: "Ocean Waves", alt: "Ocean waves on beach", caption: "Waves crashing on the shore", galleryId: 1 },

    // Architecture Gallery (ID: 2)
    { filename: "arch1.svg", originalName: "Modern Building", alt: "Modern glass building", caption: "Contemporary architecture design", galleryId: 2 },
    { filename: "arch2.svg", originalName: "Historic Cathedral", alt: "Gothic cathedral", caption: "Medieval cathedral with intricate details", galleryId: 2 },
    { filename: "arch3.svg", originalName: "Bridge Design", alt: "Modern bridge", caption: "Elegant bridge spanning the river", galleryId: 2 },
    { filename: "arch4.svg", originalName: "Urban Skyline", alt: "City skyline", caption: "City skyline at twilight", galleryId: 2 },

    // Portraits Gallery (ID: 3)
    { filename: "portrait1.svg", originalName: "Professional Headshot", alt: "Business portrait", caption: "Professional business portrait", galleryId: 3 },
    { filename: "portrait2.svg", originalName: "Family Portrait", alt: "Family photo", caption: "Loving family portrait", galleryId: 3 },
    { filename: "portrait3.svg", originalName: "Artist Portrait", alt: "Creative portrait", caption: "Creative artistic portrait", galleryId: 3 },
    { filename: "portrait4.svg", originalName: "Child Portrait", alt: "Child photo", caption: "Joyful child portrait", galleryId: 3 },

    // Street Gallery (ID: 4)
    { filename: "street1.svg", originalName: "Busy Market", alt: "Street market scene", caption: "Vibrant local market", galleryId: 4 },
    { filename: "street2.svg", originalName: "City Life", alt: "Urban street scene", caption: "Daily life in the city", galleryId: 4 },
    { filename: "street3.svg", originalName: "Street Art", alt: "Graffiti wall", caption: "Colorful street art", galleryId: 4 },
    { filename: "street4.svg", originalName: "Night Lights", alt: "City lights at night", caption: "City illuminated at night", galleryId: 4 },

    // Abstract Gallery (ID: 5)
    { filename: "abstract1.svg", originalName: "Color Waves", alt: "Abstract color patterns", caption: "Flowing color compositions", galleryId: 5 },
    { filename: "abstract2.svg", originalName: "Geometric Forms", alt: "Geometric abstract", caption: "Modern geometric abstraction", galleryId: 5 },
    { filename: "abstract3.svg", originalName: "Light Play", alt: "Light and shadow", caption: "Interplay of light and shadow", galleryId: 5 },
    { filename: "abstract4.svg", originalName: "Texture Study", alt: "Texture patterns", caption: "Exploration of textures", galleryId: 5 }
  ];

  for (const imageData of sampleImages) {
    await prisma.image.upsert({
      where: { filename: imageData.filename },
      update: {},
      create: imageData
    });
  }

  console.log('Sample images created:', sampleImages.length);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });