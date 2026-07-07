import type { Service } from "../data/services";
import { faqs } from "../data/faqs";

export const siteConfig = {
  name: "Pars Soğutma Teknik Servisi",
  shortName: "Pars Soğutma",
  url: "https://parsogutma.com",
  description:
    "Pars Soğutma güvencesiyle soğuk oda, soğuk hava deposu, buzhane ve endüstriyel soğutma sistemleri için 7/24 İstanbul servisi.",
  phone: "+905431707277",
  phoneDisplay: "+90 543 170 72 77",
  email: "info@parsogutma.com",
  address: {
    streetAddress: "Mimar Sinan, Cuma Cd. No: 7 İç Kapı No: 2",
    addressLocality: "Sultanbeyli",
    addressRegion: "İstanbul",
    postalCode: "34920",
    addressCountry: "TR",
  },
  sameAs: [
    "https://www.instagram.com/parsogutma/",
    "https://x.com/ParsSogutma",
    "https://www.youtube.com/@parssogutma/videos",
    "https://tr.pinterest.com/parsogutma/",
    "https://www.linkedin.com/in/parsogutma",
    "https://www.facebook.com/parsogutma/",
  ],
};

export type SeoConfig = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  schemas?: Array<Record<string, unknown>>;
};

export const absoluteUrl = (path = "/") => {
  if (path.startsWith("http")) return path;
  return new URL(path, siteConfig.url).toString();
};

const defaultImage = absoluteUrl("/teknik-servis.png");
const getStaticServiceCoverImage = (service: Service) => `/services/${service.imageFolder}/1.webp`;

const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl("/pars-logo.png"),
  image: defaultImage,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "₺₺",
  address: {
    "@type": "PostalAddress",
    ...siteConfig.address,
  },
  areaServed: [
    { "@type": "City", name: "İstanbul" },
    { "@type": "AdministrativeArea", name: "Sultanbeyli" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: siteConfig.sameAs,
});

const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  publisher: { "@id": `${siteConfig.url}/#business` },
  inLanguage: "tr-TR",
});

const faqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
});

const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

const serviceSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteUrl(service.path)}#service`,
  name: service.title,
  serviceType: service.title,
  description: service.lead,
  url: absoluteUrl(service.path),
  image: absoluteUrl(getStaticServiceCoverImage(service)),
  provider: { "@id": `${siteConfig.url}/#business` },
  areaServed: {
    "@type": "City",
    name: "İstanbul",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "TRY",
    url: absoluteUrl(service.path),
  },
});

export function getHomeSeo(): SeoConfig {
  return {
    title: "Pars Soğutma Teknik Servisi | 7/24 Endüstriyel Soğutma Servisi",
    description: siteConfig.description,
    path: "/",
    image: defaultImage,
    keywords: [
      "soğutma servisi",
      "endüstriyel soğutma servisi",
      "soğuk oda servisi",
      "soğuk hava deposu kurulumu",
      "İstanbul soğutma servisi",
    ],
    schemas: [localBusinessSchema(), websiteSchema(), faqSchema()],
  };
}

export function getServiceSeo(service: Service): SeoConfig {
  return {
    title: `${service.title} İstanbul | Pars Soğutma Teknik Servisi`,
    description: `${service.desc} İstanbul genelinde 7/24 teknik destek, garantili işçilik ve uzman servis ekibiyle hizmet veriyoruz.`,
    path: service.path,
    image: absoluteUrl(getStaticServiceCoverImage(service)),
    keywords: [
      service.title,
      `${service.title} İstanbul`,
      "Pars Soğutma",
      "soğutma teknik servis",
      "endüstriyel soğutma",
    ],
    schemas: [
      localBusinessSchema(),
      serviceSchema(service),
      breadcrumbSchema([
        { name: "Anasayfa", url: siteConfig.url },
        { name: service.title, url: absoluteUrl(service.path) },
      ]),
    ],
  };
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export function renderSeoTags(seo: SeoConfig) {
  const url = absoluteUrl(seo.path);
  const image = seo.image ?? defaultImage;
  const keywordTag = seo.keywords?.length
    ? [`<meta name="keywords" content="${escapeHtml(seo.keywords.join(", "))}" />`]
    : [];

  return [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    ...keywordTag,
    `<link rel="canonical" href="${escapeHtml(url)}" />`,
    `<meta property="og:locale" content="tr_TR" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(url)}" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteConfig.name)}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    ...(seo.schemas ?? []).map(
      (schema, index) =>
        `<script type="application/ld+json" data-seo-jsonld="static-${index}">${JSON.stringify(
          schema
        ).replace(/</g, "\\u003c")}</script>`
    ),
  ].join("\n    ");
}

export function replaceManagedSeoTags(html: string, seo: SeoConfig) {
  const patterns = [
    /<title>[\s\S]*?<\/title>\s*/gi,
    /<meta\s+name=["']description["'][^>]*>\s*/gi,
    /<meta\s+name=["']robots["'][^>]*>\s*/gi,
    /<meta\s+name=["']keywords["'][^>]*>\s*/gi,
    /<link\s+rel=["']canonical["'][^>]*>\s*/gi,
    /<meta\s+property=["']og:[^"']+["'][^>]*>\s*/gi,
    /<meta\s+name=["']twitter:[^"']+["'][^>]*>\s*/gi,
    /<script\s+type=["']application\/ld\+json["']\s+data-seo-jsonld=["'][^"']+["'][\s\S]*?<\/script>\s*/gi,
  ];

  const cleaned = patterns.reduce((current, pattern) => current.replace(pattern, ""), html);
  return cleaned.replace(/\s*<\/head>/i, `\n    ${renderSeoTags(seo)}\n  </head>`);
}
