import { Suspense } from "react";
import { AlbumGrid } from "@/components/AlbumGrid";

async function getAlbums() {
  try {
    // For now, return sample data since we don't have a database connection
    return [
      {
        id: 1,
        title: "Summer Vacation 2024",
        description: "Beautiful memories from our summer vacation in the mountains",
        coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
        createdAt: new Date(),
        updatedAt: new Date(),
        photos: [
          { id: 1, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", title: "Mountain View", albumId: 1, createdAt: new Date() }
        ]
      },
      {
        id: 2,
        title: "City Adventures",
        description: "Exploring urban landscapes and architecture",
        coverImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&h=300&fit=crop",
        createdAt: new Date(),
        updatedAt: new Date(),
        photos: [
          { id: 2, url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df", title: "City Lights", albumId: 2, createdAt: new Date() }
        ]
      },
      {
        id: 3,
        title: "Nature Photography",
        description: "Capturing the beauty of nature in all seasons",
        coverImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
        createdAt: new Date(),
        updatedAt: new Date(),
        photos: [
          { id: 3, url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e", title: "Forest Path", albumId: 3, createdAt: new Date() }
        ]
      },
      {
        id: 4,
        title: "Portrait Sessions",
        description: "Professional portrait photography sessions",
        coverImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=300&fit=crop",
        createdAt: new Date(),
        updatedAt: new Date(),
        photos: [
          { id: 4, url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", title: "Portrait", albumId: 4, createdAt: new Date() }
        ]
      }
    ];
    
    // const albums = await prisma.album.findMany({
    //   include: { photos: true },
    //   orderBy: { createdAt: 'desc' }
    // });
    // return albums;
  } catch (error) {
    console.error('Error fetching albums:', error);
    return [];
  }
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100"></div>
    </div>
  );
}

export default async function Home() {
  const albums = await getAlbums();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Albums Gallery
        </h1>
        <p className="text-lg text-default-600 max-w-2xl mx-auto">
          Discover beautiful photo collections organized in stunning albums. 
          Each album tells a unique story through carefully curated images.
        </p>
      </div>
      
      <Suspense fallback={<LoadingSpinner />}>
        <AlbumGrid albums={albums} />
      </Suspense>
    </div>
  );
}
