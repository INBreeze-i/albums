import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { ApiResponse, Gallery } from "@/types";

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

    const gallery = await prisma.gallery.findUnique({
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