import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { ApiResponse, Gallery } from "@/types";

export async function GET() {
  try {
    const galleries = await prisma.gallery.findMany({
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