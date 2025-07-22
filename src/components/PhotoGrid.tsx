'use client';

import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Button } from "@heroui/react";
import Image from "next/image";
import { Photo } from "@/lib/types";

interface PhotoGridProps {
  photos: Photo[];
  albumTitle?: string;
}

export function PhotoGrid({ photos, albumTitle }: PhotoGridProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openPhotoModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    onOpen();
  };

  if (photos.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">No photos in this album</h2>
        <p className="text-gray-600 dark:text-gray-400">
          This album doesn&apos;t contain any photos yet.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg aspect-square"
            onClick={() => openPhotoModal(photo)}
          >
            <Image
              src={photo.url}
              alt={photo.title || `Photo ${photo.id}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyeCccFmyVidvvfDb6hg=="
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                size="sm"
                variant="solid"
                color="primary"
                className="bg-white/90 text-black hover:bg-white"
              >
                View Full
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        placement="center"
        className="max-w-7xl"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {selectedPhoto?.title || `Photo from ${albumTitle}`}
              </ModalHeader>
              <ModalBody className="p-0">
                {selectedPhoto && (
                  <div className="relative w-full h-96 md:h-[600px]">
                    <Image
                      src={selectedPhoto.url}
                      alt={selectedPhoto.title || `Photo ${selectedPhoto.id}`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}