import { useEffect } from "react";
import { absoluteUrl, siteConfig, type SeoConfig } from "@/lib/seo-data";

const setMeta = (attribute: "name" | "property", key: string, content: string) => {
  const selector = `meta[${attribute}="${key}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let tag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
};

export default function SEO({ seo }: { seo: SeoConfig }) {
  useEffect(() => {
    const url = absoluteUrl(seo.path);
    const image = seo.image ?? absoluteUrl("/teknik-servis.png");

    document.title = seo.title;
    setMeta("name", "description", seo.description);
    setMeta("name", "robots", "index, follow, max-image-preview:large");
    if (seo.keywords?.length) setMeta("name", "keywords", seo.keywords.join(", "));
    setCanonical(url);

    setMeta("property", "og:locale", "tr_TR");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:site_name", siteConfig.name);
    setMeta("property", "og:image", image);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
    setMeta("name", "twitter:image", image);

    document
      .querySelectorAll('script[type="application/ld+json"][data-seo-jsonld]')
      .forEach((node) => node.remove());

    seo.schemas?.forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonld = `runtime-${index}`;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [seo]);

  return null;
}
