"use client";

import { useState } from "react";
import { Modal, ModalContent, ModalBody, ModalHeader, Button, useDisclosure } from "@heroui/react";
import Image from "next/image";
import { Photo } from "@/lib/types";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface PhotoGridProps {
  photos: Photo[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    onOpen();
  };

  const nextPhoto = () => {
    setSelectedIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-lg text-default-500 mb-2">No photos in this album</p>
        <p className="text-sm text-default-400">Photos will appear here when they are added.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => openModal(index)}
          >
            <Image
              src={photo.url}
              alt={photo.title || `Photo ${index + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        size="full"
        placement="center"
        classNames={{
          base: "bg-black/90",
          body: "p-0",
          wrapper: "items-center justify-center"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-black/50">
                <div className="text-white">
                  <h3 className="text-lg font-semibold">
                    {photos[selectedIndex]?.title || `Photo ${selectedIndex + 1}`}
                  </h3>
                  <p className="text-sm opacity-70">
                    {selectedIndex + 1} of {photos.length}
                  </p>
                </div>
                <Button
                  isIconOnly
                  variant="light"
                  onPress={onClose}
                  className="text-white"
                >
                  <XMarkIcon className="h-6 w-6" />
                </Button>
              </ModalHeader>
              
              <ModalBody className="flex items-center justify-center relative">
                <div className="relative w-full h-full max-w-[90vw] max-h-[90vh]">
                  <Image
                    src={photos[selectedIndex]?.url}
                    alt={photos[selectedIndex]?.title || `Photo ${selectedIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="90vw"
                  />
                </div>
                
                {photos.length > 1 && (
                  <>
                    <Button
                      isIconOnly
                      variant="light"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50"
                      onPress={prevPhoto}
                    >
                      <ChevronLeftIcon className="h-6 w-6" />
                    </Button>
                    <Button
                      isIconOnly
                      variant="light"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50"
                      onPress={nextPhoto}
                    >
                      <ChevronRightIcon className="h-6 w-6" />
                    </Button>
                  </>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}