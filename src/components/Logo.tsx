import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "light" | "dark";
}

export default function Logo({ className = "h-12", showText = true, variant = "light" }: LogoProps) {
  if (showText) {
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src="/logo.png"
          alt="Information Archive Meta Logo"
          className="h-full w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Symbol only: crop the bottom text cleanly without slicing the sides of the symbol.
  // The image aspect ratio is ~1.15 (600/520). The symbol alone has an aspect ratio of ~1.46 (600/410).
  // By setting the container to aspect-ratio 1.46 and the image to w-full h-auto,
  // the width fits perfectly edge-to-edge and only the bottom text gets cropped.
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: "1.46" }}>
      <img
        src="/logo.png"
        alt="Information Archive Meta Logo Icon"
        className="absolute top-0 left-0 w-full h-auto max-w-none block"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

