import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Button, Spinner, Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { PhotoGrid } from "@/components/PhotoGrid";
import { sampleAlbums } from "@/lib/sampleData";
import { Album, Photo } from "@/lib/types";
import Link from "next/link";

// Convert sample data to Album and Photo format for development
function getSampleAlbumData(id: number): (Album & { photos: Photo[] }) | null {
  const albumData = sampleAlbums[id - 1];
  if (!albumData) return null;
  
  return {
    id,
    title: albumData.title,
    description: albumData.description,
    coverImage: albumData.coverImage,
    createdAt: new Date(),
    updatedAt: new Date(),
    photos: albumData.photos.map((photo, photoIndex) => ({
      id: id * 100 + photoIndex + 1,
      url: photo.url,
      title: photo.title,
      albumId: id,
      createdAt: new Date(),
    }))
  };
}

interface AlbumPageProps {
  params: { id: string };
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const albumId = parseInt(params.id);
  
  if (isNaN(albumId) || albumId < 1) {
    notFound();
  }

  // For development, use sample data
  // In production, this would fetch from the database
  const album = getSampleAlbumData(albumId);

  if (!album) {
    notFound();
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <Breadcrumbs>
        <BreadcrumbItem>
          <Link href="/">Gallery</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>{album.title}</BreadcrumbItem>
      </Breadcrumbs>

      {/* Album Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">{album.title}</h1>
            {album.description && (
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                {album.description}
              </p>
            )}
          </div>
          <Button
            as={Link}
            href="/"
            variant="ghost"
            color="primary"
          >
            ← Back to Gallery
          </Button>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <span>{album.photos.length} photos</span>
          <span>Created {album.createdAt.toLocaleDateString()}</span>
        </div>
      </div>

      {/* Photo Grid */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <Spinner size="lg" color="primary" />
          </div>
        }
      >
        <PhotoGrid photos={album.photos} albumTitle={album.title} />
      </Suspense>
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: AlbumPageProps) {
  const albumId = parseInt(params.id);
  const album = getSampleAlbumData(albumId);

  if (!album) {
    return {
      title: "Album Not Found",
    };
  }

  return {
    title: `${album.title} - Albums Gallery`,
    description: album.description || `View photos from the ${album.title} album`,
    openGraph: {
      title: album.title,
      description: album.description || `Photos from ${album.title}`,
      images: [
        {
          url: album.coverImage || album.photos[0]?.url,
          width: 800,
          height: 600,
          alt: album.title,
        },
      ],
    },
  };
}