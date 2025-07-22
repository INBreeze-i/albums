"use client";

import React from "react";
import { Card, CardBody, CardFooter } from "@heroui/react";
import Image from "next/image";
import { Image as ImageType } from "@/types";
import { generateImageUrl } from "@/lib/utils";

interface ImageCardProps {
  image: ImageType;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <Card className="w-full h-64">
      <CardBody className="overflow-hidden p-0">
        <Image
          src={generateImageUrl(image.filename)}
          alt={image.alt || image.originalName || "Gallery image"}
          width={400}
          height={300}
          className="w-full h-full object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </CardBody>
      {image.caption && (
        <CardFooter className="pt-2">
          <p className="text-small text-default-500">{image.caption}</p>
        </CardFooter>
      )}
    </Card>
  );
};

export default ImageCard;