import { mathFormulas } from "@/utils/data/formulas";
import { lectures } from "@/utils/data/lectures";

export const dynamic = "force-static";
export const revalidate = 60 * 60 * 24; // cache sitemap for 1 day

export default function sitemap() {
  const baseUrl = "https://www.riyazi.online";
  const classSlugs = ["class-9", "class-10", "class-11", "class-12"];
  
  // Lecture pages
  const lecturePages = lectures.map((lecture) => ({
    url: `${baseUrl}/lectures/${lecture.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Exercise pages
  const exercisePages = lectures.flatMap((lecture) =>
    lecture.exercises.map((exercise) => ({
      url: `${baseUrl}/lectures/${lecture.slug}/${exercise.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );
  const formulasPages = mathFormulas.map((chapter) => ({
    url: `${baseUrl}/formulas-class-11/${chapter.slug}`,
    lastModified: new Date(chapter.lastUpdated),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const classPages = classSlugs.map((slug) => ({
    url: `${baseUrl}/classes/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/lectures`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
     {
      url: `${baseUrl}/alp`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/class-11-alp`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/classes`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/formulas-class-11`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...lecturePages,
    ...exercisePages,
    ...formulasPages,
    ...classPages,
  ];
}
