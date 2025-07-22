import { Button } from "@heroui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <div className="space-y-2">
        <h1 className="text-8xl font-bold text-gray-300 dark:text-gray-600">404</h1>
        <h2 className="text-2xl font-semibold">Album Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md">
          The album you&apos;re looking for doesn&apos;t exist or may have been removed.
        </p>
      </div>
      
      <Button
        as={Link}
        href="/"
        color="primary"
        size="lg"
        className="mt-6"
      >
        Return to Gallery
      </Button>
    </div>
  );
}