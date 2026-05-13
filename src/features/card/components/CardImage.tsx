interface CardImageProps {
  imageUrl?: string
  name: string
}

export function CardImage({ imageUrl, name }: CardImageProps) {
  return (
    <div className="shrink-0 h-[33%] rounded-lg overflow-hidden border border-border bg-surface-raised">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full" />
      )}
    </div>
  )
}
