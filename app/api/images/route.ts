import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { ApiResponse, Image } from "@/types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const galleryId = searchParams.get("galleryId");
    const limit = searchParams.get("limit");

    const where = galleryId ? { galleryId: parseInt(galleryId) } : {};
    const take = limit ? parseInt(limit) : undefined;

    const images = await prisma.image.findMany({
      where,
      take,
      include: {
        gallery: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

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