import { HeroVideo } from "@/components/site/HeroVideo";

/**
 * Hero media panel: shows the page photo immediately, and layers a muted
 * background loop over it once the page is idle. Falls back to the still
 * image when the visitor prefers reduced motion.
 */
export function MediaPanel({
  image,
  alt,
  video,
  className = "",
}: {
  image: string;
  alt: string;
  video?: string | undefined;
  className?: string | undefined;
}) {
  return (
    <div className={`panel group relative aspect-[4/3] w-full overflow-hidden ${className}`}>
      <img
        src={image}
        alt={alt}
        loading="lazy"
        width={1024}
        height={640}
        className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
      />
      {video ? (
        <HeroVideo
          src={video}
          poster={image}
          className="absolute inset-0 size-full object-cover motion-reduce:hidden"
        />
      ) : null}
    </div>
  );
}
