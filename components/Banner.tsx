"use client";

import React from "react";
import { Card, CardBody } from "@heroui/react";

const Banner: React.FC = () => {
  return (
    <div className="w-full relative">
      <Card className="rounded-none">
        <CardBody className="p-0">
          <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600">
              <div className="absolute inset-0 bg-black bg-opacity-30" />
              <div className="relative flex items-center justify-center h-full">
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Photo Gallery
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl opacity-90">
                    Discover beautiful collections of amazing photographs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Banner;