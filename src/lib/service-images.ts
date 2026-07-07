import { useEffect, useState } from "react";
import type { Service } from "@/data/services";

const serviceImageExtensions = ["webp", "jpg", "jpeg", "png"] as const;
const maxServiceImageCount = 60;

export type ServiceImage = {
  src: string;
  alt: string;
};

const getServiceImageCandidates = (service: Service, index: number) =>
  serviceImageExtensions.map((ext) => `/services/${service.imageFolder}/${index}.${ext}`);

const getServiceImageAlt = (service: Service, index: number) =>
  `${service.title} görseli ${index}`;

const probeImage = (src: string) =>
  new Promise<boolean>((resolve) => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = src;
  });

async function findImageForIndex(service: Service, index: number) {
  for (const src of getServiceImageCandidates(service, index)) {
    if (await probeImage(src)) {
      return {
        src,
        alt: getServiceImageAlt(service, index),
      };
    }
  }

  return null;
}

export function getStaticServiceCoverImage(service: Service) {
  return `/services/${service.imageFolder}/1.webp`;
}

export function useServiceCoverImage(service: Service) {
  const [image, setImage] = useState<ServiceImage | null>(null);

  useEffect(() => {
    let cancelled = false;

    findImageForIndex(service, 1).then((foundImage) => {
      if (!cancelled) setImage(foundImage);
    });

    return () => {
      cancelled = true;
    };
  }, [service]);

  return image;
}

export function useServiceImages(service: Service) {
  const [images, setImages] = useState<ServiceImage[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function loadImages() {
      const nextImages: ServiceImage[] = [];

      for (let index = 1; index <= maxServiceImageCount; index += 1) {
        const image = await findImageForIndex(service, index);
        if (cancelled) return;

        if (!image) break;
        nextImages.push(image);
      }

      setImages(nextImages);
    }

    setImages([]);
    loadImages();

    return () => {
      cancelled = true;
    };
  }, [service]);

  return images;
}
