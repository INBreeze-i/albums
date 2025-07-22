import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
      <Spinner size="lg" color="primary" />
      <p className="text-gray-600 dark:text-gray-400">Loading album...</p>
    </div>
  );
}