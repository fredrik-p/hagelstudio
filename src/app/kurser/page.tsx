import Courses from "../../components/Courses";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "hagel studio | kurser",
};

export default function CoursesPage() {
  return <Courses />;
}