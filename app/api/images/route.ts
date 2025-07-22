import { NextRequest, NextResponse } from "next/server";
import { ApiResponse, Image } from "@/types";
import { mockGalleries } from "@/lib/mockData";

// Try to import Prisma, fallback to mock data if not available
let prisma: any = null;
try {
  const { prisma: prismaClient } = require("@/lib/db");
  prisma = prismaClient;
} catch (error) {
  console.log("Prisma not available, using mock data");
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const galleryId = searchParams.get("galleryId");
    const limit = searchParams.get("limit");

    let images: Image[] = [];

    if (prisma) {
      // Use real database
      const where = galleryId ? { galleryId: parseInt(galleryId) } : {};
      const take = limit ? parseInt(limit) : undefined;

      images = await prisma.image.findMany({
        where,
        take,
        include: {
          gallery: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      // Use mock data
      images = mockGalleries.reduce((allImages: Image[], gallery) => {
        const galleryImages = gallery.images.map(img => ({
          ...img,
          gallery: {
            id: gallery.id,
            name: gallery.name,
            description: gallery.description,
            createdAt: gallery.createdAt,
            updatedAt: gallery.updatedAt,
          }
        }));
        return allImages.concat(galleryImages);
      }, []);

      // Apply filters
      if (galleryId) {
        images = images.filter(img => img.galleryId === parseInt(galleryId));
      }
      
      if (limit) {
        images = images.slice(0, parseInt(limit));
      }
    }

    const response: ApiResponse<Image[]> = {
      data: images,
      message: "Images retrieved successfully",
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching images:", error);
    const response: ApiResponse<Image[]> = {
      data: [],
      error: "Failed to fetch images",
    };
    return NextResponse.json(response, { status: 500 });
  }
}