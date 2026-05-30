import { cacheLife } from "next/cache";
import { HomePage } from "@/components/HomePage";

export default async function Home() {
  "use cache";
  cacheLife("weeks");

  return <HomePage />;
}
