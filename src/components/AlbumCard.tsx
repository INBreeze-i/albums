"use client";

import { Card, CardBody, CardFooter } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Album } from "@/lib/types";

interface AlbumCardProps {
  album: Album;
}

export function AlbumCard({ album }: AlbumCardProps) {
  const photoCount = album.photos?.length || 0;
  
  return (
    <Card 
      className="w-full h-[300px] group cursor-pointer hover:scale-105 transition-transform duration-300"
      isPressable
      as={Link}
      href={`/album/${album.id}`}
    >
      <CardBody className="p-0">
        <div className="relative w-full h-[200px] overflow-hidden">
          <Image
            src={album.coverImage || "/images/placeholder.jpg"}
            alt={album.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardBody>
      <CardFooter className="flex flex-col items-start p-4">
        <h3 className="text-lg font-semibold text-foreground truncate w-full">
          {album.title}
        </h3>
        <p className="text-sm text-default-500">
          {photoCount} {photoCount === 1 ? 'photo' : 'photos'}
        </p>
        {album.description && (
          <p className="text-sm text-default-600 mt-1 line-clamp-2">
            {album.description}
          </p>
        )}
      </CardFooter>
    </Card>
  );
}