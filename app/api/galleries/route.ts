import { NextResponse } from "next/server";
import { ApiResponse, Gallery } from "@/types";
import { mockGalleries } from "@/lib/mockData";

// Try to import Prisma, fallback to mock data if not available
let prisma: any = null;
try {
  const { prisma: prismaCient } = require("@/lib/db");
  prisma = prismaCient;
} catch (error) {
  console.log("Prisma not available, using mock data");
}

export async function GET() {
  try {
    let galleries: Gallery[];

    if (prisma) {
      // Use real database
      galleries = await prisma.gallery.findMany({
        include: {
          images: {
            take: 4, // Limit to 4 images per gallery for home page
            orderBy: {
              createdAt: "desc",
            },
          },
        },
        orderBy: {
          id: "asc",
        },
      });
    } else {
      // Use mock data
      galleries = mockGalleries.map(gallery => ({
        ...gallery,
        images: gallery.images.slice(0, 4) // Limit to 4 images
      }));
    }

    const response: ApiResponse<Gallery[]> = {
      data: galleries,
      message: "Galleries retrieved successfully",
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching galleries:", error);
    const response: ApiResponse<Gallery[]> = {
      data: [],
      error: "Failed to fetch galleries",
    };
    return NextResponse.json(response, { status: 500 });
  }
}