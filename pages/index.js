import DefaultLayout from "@/components/layouts/default"
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
    <NextSeo title="TechOnScroll" description="Browse &#38; Read about various topics related to Technology, Programming, AI, Space &#38; more."></NextSeo>
    <DefaultLayout>
      <div className="h-screen">
      Hello Content
      </div>
      <div className="h-screen">
      Hello Content
      </div>
    </DefaultLayout>
    </>
  )
}
