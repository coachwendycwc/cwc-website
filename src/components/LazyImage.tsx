"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function LazyImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  style,
  onClick,
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = useCallback(() => setLoaded(true), []);

  // Handle images that load from cache before React attaches onLoad
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  if (error) return null;

  return (
    <div className={`relative ${wrapperClassName}`} style={style} onClick={onClick}>
      {/* Skeleton placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-[#E5E5E5] rounded-lg animate-pulse" />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={handleLoad}
        onError={() => setError(true)}
        className={`transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
}
