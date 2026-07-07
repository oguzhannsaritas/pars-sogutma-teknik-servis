import type { Service } from "@/data/services";
import { serviceImageManifest } from "@/generated/image-manifest";

export type ServiceImage = {
  src: string;
  alt: string;
};

const getServiceImageAlt = (service: Service, index: number) =>
  `${service.title} görseli ${index}`;

export function getServiceImages(service: Service): ServiceImage[] {
  const images =
    serviceImageManifest[service.imageFolder as keyof typeof serviceImageManifest] ?? [];

  return images.map((src, index) => ({
    src,
    alt: getServiceImageAlt(service, index + 1),
  }));
}

export function getStaticServiceCoverImage(service: Service) {
  return getServiceImages(service)[0]?.src ?? `/services/${service.imageFolder}/1.webp`;
}

export function useServiceCoverImage(service: Service) {
  return getServiceImages(service)[0] ?? null;
}

export function useServiceImages(service: Service) {
  return getServiceImages(service);
}
