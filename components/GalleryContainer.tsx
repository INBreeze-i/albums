"use client";

import React from "react";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import Link from "next/link";
import { Gallery } from "@/types";
import ImageCard from "./ImageCard";

interface GalleryContainerProps {
  gallery: Gallery;
  showTitle?: boolean;
  maxImages?: number;
}

const GalleryContainer: React.FC<GalleryContainerProps> = ({
  gallery,
  showTitle = true,
  maxImages = 4,
}) => {
  const imagesToShow = gallery.images.slice(0, maxImages);

  return (
    <Card className="w-full">
      {showTitle && (
        <CardHeader className="flex gap-3 justify-between">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">{gallery.name}</h3>
            {gallery.description && (
              <p className="text-small text-default-500">
                {gallery.description}
              </p>
            )}
          </div>
          <Button
            as={Link}
            href={`/gallery/${gallery.id}`}
            color="primary"
            variant="flat"
            size="sm"
          >
            View All
          </Button>
        </CardHeader>
      )}
      <CardBody>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {imagesToShow.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
          {imagesToShow.length === 0 && (
            <div className="col-span-full text-center py-8 text-default-500">
              No images available
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default GalleryContainer;