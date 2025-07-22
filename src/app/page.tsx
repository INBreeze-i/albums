import { Suspense } from "react";
import { AlbumGrid } from "@/components/AlbumGrid";
import { Spinner } from "@heroui/react";
import { sampleAlbums } from "@/lib/sampleData";

// Convert sample data to Album format for development
function getSampleAlbumsData() {
  return sampleAlbums.map((album, index) => ({
    id: index + 1,
    title: album.title,
    description: album.description,
    coverImage: album.coverImage,
    createdAt: new Date(),
    updatedAt: new Date(),
    photos: album.photos.map((photo, photoIndex) => ({
      id: (index + 1) * 100 + photoIndex + 1,
      url: photo.url,
      title: photo.title,
    }))
  }));
}

export default async function Home() {
  // For development, use sample data
  // In production, this would fetch from the database
  const albums = getSampleAlbumsData();

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Albums Gallery
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover beautiful photo collections featuring nature, architecture, 
          cityscapes, and more. Explore our curated albums and immerse yourself 
          in stunning visual experiences.
        </p>
      </div>

      {/* Statistics */}
      <div className="flex flex-wrap justify-center gap-8 py-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            {albums.length}
          </div>
          <div className="text-sm text-gray-500">Albums</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            {albums.reduce((total, album) => total + album.photos.length, 0)}
          </div>
          <div className="text-sm text-gray-500">Photos</div>
        </div>
      </div>

      {/* Albums Grid */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <Spinner size="lg" color="primary" />
          </div>
        }
      >
        <AlbumGrid albums={albums} />
      </Suspense>
    </div>
  );
}
