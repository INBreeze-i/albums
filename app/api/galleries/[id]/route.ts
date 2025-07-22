import { NextRequest, NextResponse } from "next/server";
import { ApiResponse, Gallery } from "@/types";
import { mockGalleries } from "@/lib/mockData";

// Try to import Prisma, fallback to mock data if not available
let prisma: any = null;
try {
  const { prisma: prismaClient } = require("@/lib/db");
  prisma = prismaClient;
} catch (error) {
  console.log("Prisma not available, using mock data");
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const galleryId = parseInt(params.id);

    if (isNaN(galleryId)) {
      const response: ApiResponse<Gallery | null> = {
        data: null,
        error: "Invalid gallery ID",
      };
      return NextResponse.json(response, { status: 400 });
    }

    let gallery: Gallery | null = null;

    if (prisma) {
      // Use real database
      gallery = await prisma.gallery.findUnique({
        where: {
          id: galleryId,
        },
        include: {
          images: {
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      });
    } else {
      // Use mock data
      gallery = mockGalleries.find(g => g.id === galleryId) || null;
    }

    if (!gallery) {
      const response: ApiResponse<Gallery | null> = {
        data: null,
        error: "Gallery not found",
      };
      return NextResponse.json(response, { status: 404 });
    }

    const response: ApiResponse<Gallery> = {
      data: gallery,
      message: "Gallery retrieved successfully",
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching gallery:", error);
    const response: ApiResponse<Gallery | null> = {
      data: null,
      error: "Failed to fetch gallery",
    };
    return NextResponse.json(response, { status: 500 });
  }
}