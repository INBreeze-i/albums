'use client';

import { Card, CardBody, CardFooter } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

interface AlbumCardProps {
  album: {
    id: number;
    title: string;
    description?: string;
    coverImage?: string;
    createdAt: Date;
    photos?: Array<{ id: number; url: string; title?: string }>;
  };
}

export function AlbumCard({ album }: AlbumCardProps) {
  const photoCount = album.photos?.length || 0;
  const coverImage = album.coverImage || album.photos?.[0]?.url || "https://picsum.photos/600/400?random=default";

  return (
    <Card
      as={Link}
      href={`/album/${album.id}`}
      className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
      isPressable
    >
      <CardBody className="p-0">
        <div className="relative overflow-hidden">
          <Image
            src={coverImage}
            alt={album.title}
            width={600}
            height={400}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyeCccFmyVidvvfDb6hg=="
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardBody>
      
      <CardFooter className="flex-col items-start">
        <h3 className="font-bold text-lg mb-1 line-clamp-1">{album.title}</h3>
        {album.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
            {album.description}
          </p>
        )}
        <div className="flex items-center justify-between w-full">
          <span className="text-sm text-gray-500">
            {photoCount} {photoCount === 1 ? 'photo' : 'photos'}
          </span>
          <span className="text-xs text-gray-400">
            {new Date(album.createdAt).toLocaleDateString()}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}