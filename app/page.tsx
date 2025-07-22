"use client";

import { useEffect, useState } from "react";
import { Spinner } from "@heroui/react";
import { Gallery } from "@/types";
import GalleryContainer from "@/components/GalleryContainer";
import Layout from "@/components/Layout";

export default function Home() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await fetch("/api/galleries");
        const result = await response.json();
        
        if (response.ok) {
          setGalleries(result.data);
        } else {
          setError(result.error || "Failed to load galleries");
        }
      } catch (err) {
        setError("Failed to load galleries");
        console.error("Error fetching galleries:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleries();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-64">
          <Spinner size="lg" />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center py-8">
          <p className="text-red-500 text-lg">Error: {error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome to Our Gallery
          </h1>
          <p className="text-gray-600">
            Explore our collection of beautiful image galleries
          </p>
        </div>

        {galleries.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No galleries available yet.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {galleries.map((gallery) => (
              <GalleryContainer key={gallery.id} gallery={gallery} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
