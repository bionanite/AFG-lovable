import type { ReactNode } from "react";
import { HeroVideo } from "@/components/site/HeroVideo";

/**
 * Full-bleed page hero that matches the homepage: the still image shows
 * immediately, a muted background loop layers over it with a slow drift, and
 * a scrim keeps the headline readable. Reduced motion gets the still only.
 */
export function VideoHero({
  image,
  alt,
  video,
  children,
}: {
  image: string;
  alt: string;
  video?: string | undefined;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <img
        src={image}
        alt={alt}
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover"
      />
      {video ? (
        <HeroVideo
          src={video}
          poster={image}
          className="ken-burns absolute inset-0 size-full object-cover motion-reduce:hidden"
        />
      ) : null}

      <div className="scrim absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      <div className="relative mx-auto max-w-[80rem] px-6 py-20 lg:py-28">{children}</div>
    </section>
  );
}
