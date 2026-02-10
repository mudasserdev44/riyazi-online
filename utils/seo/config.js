export const siteConfig = {
  name: "Riyazi Online",
  shortName: "Riyazi Online",
  url: "https://www.riyazi.online",
  description:
    "Riyazi Online offers comprehensive Urdu mathematics lectures, formula sheets, and smart syllabi for Pakistani students from Class 9 to 12.",
  locale: "ur_PK",
  contactEmail: "smudasser36@gmail.com",
  socials: {
    youtube: "https://www.youtube.com/@RiyaziOnline",
    facebook: "https://www.facebook.com/riyazionline",
    twitter: "@RiyaziOnline",
    instagram: "https://www.instagram.com/riyazionline",
  },
  defaultImage: "/main.png",
  keywords: [
    "Riyazi Online",
    "Mathematics in Urdu",
    "Class 9 Math",
    "Class 10 Math",
    "Class 11 Math",
    "Class 12 Math",
    "Pakistan Math Lectures",
    "Urdu Math Lessons",
    "Syed Mudasser Anayat",
    "Online Math Course Pakistan",
  ],
};

export const absoluteUrl = (path = "/") => {
  if (!path) {
    return siteConfig.url;
  }

  if (path.startsWith("http")) {
    return path;
  }

  return new URL(path, siteConfig.url).toString();
};

export const buildMetadata = ({
  title = siteConfig.name,
  description = siteConfig.description,
  keywords = [],
  path = "/",
  type = "website",
  image = siteConfig.defaultImage,
  openGraph = {},
  twitter = {},
  alternates = {},
  robots,
} = {}) => {
  const mergedKeywords = Array.from(
    new Set([...siteConfig.keywords, ...keywords].filter(Boolean))
  );

  const images = Array.isArray(image) ? image : [image];
  const formattedImages = images
    .filter(Boolean)
    .map((img) => ({
      url: absoluteUrl(img),
      width: 1200,
      height: 630,
      alt: title,
    }));

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: absoluteUrl(path),
      ...alternates,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: formattedImages,
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((img) => absoluteUrl(img)),
      creator: siteConfig.socials.twitter,
      ...twitter,
    },
    robots,
  };
};

