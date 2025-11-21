interface ProductImageProps {
  src: string;
  alt: string;
}

export function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <div className="flex items-center justify-center bg-gray-100 rounded-lg p-8 min-h-96 overflow-hidden">
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="max-w-sm h-auto object-contain"
      />
    </div>
  );
}
