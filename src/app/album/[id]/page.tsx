import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Button, Spinner } from "@heroui/react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { PhotoGrid } from "@/components/PhotoGrid";
import { AlbumWithPhotos } from "@/lib/types";

async function getAlbum(id: string): Promise<AlbumWithPhotos | null> {
  try {
    // Sample data for the album with more photos
    const sampleAlbums: Record<string, AlbumWithPhotos> = {
      "1": {
        id: 1,
        title: "Summer Vacation 2024",
        description: "Beautiful memories from our summer vacation in the mountains. We explored breathtaking landscapes, captured stunning sunsets, and made unforgettable memories with family and friends.",
        coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
        createdAt: new Date(),
        updatedAt: new Date(),
        photos: [
          { id: 1, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", title: "Mountain Peak", albumId: 1, createdAt: new Date() },
          { id: 2, url: "https://images.unsplash.com/photo-1464822759844-d150baec4379?w=800&h=600&fit=crop", title: "Alpine Lake", albumId: 1, createdAt: new Date() },
          { id: 3, url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop", title: "Forest Trail", albumId: 1, createdAt: new Date() },
          { id: 4, url: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&h=600&fit=crop", title: "Sunset Valley", albumId: 1, createdAt: new Date() },
          { id: 5, url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop", title: "Morning Mist", albumId: 1, createdAt: new Date() },
          { id: 6, url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop", title: "Rocky Cliff", albumId: 1, createdAt: new Date() }
        ]
      },
      "2": {
        id: 2,
        title: "City Adventures",
        description: "Exploring urban landscapes and architecture in the heart of the city. From towering skyscrapers to hidden alleyways, every corner tells a different story.",
        coverImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&h=300&fit=crop",
        createdAt: new Date(),
        updatedAt: new Date(),
        photos: [
          { id: 7, url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop", title: "City Lights", albumId: 2, createdAt: new Date() },
          { id: 8, url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop", title: "Downtown Street", albumId: 2, createdAt: new Date() },
          { id: 9, url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop", title: "Skyscraper View", albumId: 2, createdAt: new Date() },
          { id: 10, url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=800&h=600&fit=crop", title: "Urban Architecture", albumId: 2, createdAt: new Date() }
        ]
      },
      "3": {
        id: 3,
        title: "Nature Photography",
        description: "Capturing the beauty of nature in all seasons. From delicate flowers to majestic wildlife, nature provides endless inspiration for photography.",
        coverImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
        createdAt: new Date(),
        updatedAt: new Date(),
        photos: [
          { id: 11, url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop", title: "Forest Path", albumId: 3, createdAt: new Date() },
          { id: 12, url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=600&fit=crop", title: "Wildflowers", albumId: 3, createdAt: new Date() },
          { id: 13, url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop", title: "Ocean Waves", albumId: 3, createdAt: new Date() },
          { id: 14, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", title: "Mountain Vista", albumId: 3, createdAt: new Date() },
          { id: 15, url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop", title: "Desert Landscape", albumId: 3, createdAt: new Date() }
        ]
      },
      "4": {
        id: 4,
        title: "Portrait Sessions",
        description: "Professional portrait photography sessions capturing the essence and personality of each subject. Each portrait tells a unique story.",
        coverImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=300&fit=crop",
        createdAt: new Date(),
        updatedAt: new Date(),
        photos: [
          { id: 16, url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop", title: "Classic Portrait", albumId: 4, createdAt: new Date() },
          { id: 17, url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop", title: "Natural Light", albumId: 4, createdAt: new Date() },
          { id: 18, url: "https://images.unsplash.com/photo-1494790108755-2616c96c6c8f?w=800&h=600&fit=crop", title: "Studio Session", albumId: 4, createdAt: new Date() }
        ]
      }
    };

    return sampleAlbums[id] || null;
    
    // const album = await prisma.album.findUnique({
    //   where: { id: parseInt(id) },
    //   include: { photos: true }
    // });
    // return album;
  } catch (error) {
    console.error('Error fetching album:', error);
    return null;
  }
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <Spinner size="lg" />
    </div>
  );
}

interface AlbumPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { id } = await params;
  const album = await getAlbum(id);

  if (!album) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <Button
          as={Link}
          href="/"
          variant="ghost"
          startContent={<ArrowLeftIcon className="h-4 w-4" />}
          className="mb-6"
        >
          Back to Gallery
        </Button>
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {album.title}
          </h1>
          {album.description && (
            <p className="text-lg text-default-600 max-w-3xl mx-auto mb-4">
              {album.description}
            </p>
          )}
          <p className="text-sm text-default-500">
            {album.photos.length} {album.photos.length === 1 ? 'photo' : 'photos'} • 
            Created {album.createdAt.toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Photos Grid */}
      <Suspense fallback={<LoadingSpinner />}>
        <PhotoGrid photos={album.photos} />
      </Suspense>
    </div>
  );
}