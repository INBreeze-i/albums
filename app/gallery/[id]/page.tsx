"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Spinner, Button } from "@heroui/react";
import Link from "next/link";
import { Gallery } from "@/types";
import GalleryContainer from "@/components/GalleryContainer";
import Layout from "@/components/Layout";

export default function GalleryPage() {
  const params = useParams();
  const galleryId = params.id as string;
  
  const [gallery, setGallery] = useState<Gallery | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(`/api/galleries/${galleryId}`);
        const result = await response.json();
        
        if (response.ok) {
          setGallery(result.data);
        } else {
          setError(result.error || "Failed to load gallery");
        }
      } catch (err) {
        setError("Failed to load gallery");
        console.error("Error fetching gallery:", err);
      } finally {
        setLoading(false);
      }
    };

    if (galleryId) {
      fetchGallery();
    }
  }, [galleryId]);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-64">
          <Spinner size="lg" />
        </div>
      </Layout>
    );
  }

  if (error || !gallery) {
    return (
      <Layout>
        <div className="text-center py-8">
          <p className="text-red-500 text-lg mb-4">
            {error || "Gallery not found"}
          </p>
          <Button as={Link} href="/" color="primary">
            Back to Home
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {gallery.name}
            </h1>
            {gallery.description && (
              <p className="text-gray-600">{gallery.description}</p>
            )}
          </div>
          <Button as={Link} href="/" color="primary" variant="flat">
            Back to Home
          </Button>
        </div>

        <GalleryContainer 
          gallery={gallery} 
          showTitle={false} 
          maxImages={gallery.images.length} 
        />

        {gallery.images.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No images in this gallery yet.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}