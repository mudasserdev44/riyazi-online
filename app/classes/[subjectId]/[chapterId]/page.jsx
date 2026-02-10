import { notFound } from "next/navigation";

export const metadata = {
  title: "Chapter Not Available | Riyazi Online",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ChapterPage() {
  notFound();
}
