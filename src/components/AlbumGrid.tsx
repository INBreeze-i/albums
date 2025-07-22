'use client';

import { AlbumCard } from "./AlbumCard";

interface AlbumGridProps {
  albums: Array<{
    id: number;
    title: string;
    description?: string;
    coverImage?: string;
    createdAt: Date;
    updatedAt: Date;
    photos?: Array<{ id: number; url: string; title?: string }>;
  }>;
}

export function AlbumGrid({ albums }: AlbumGridProps) {
  if (albums.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">No albums found</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Start by creating your first photo album.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
}