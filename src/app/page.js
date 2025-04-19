import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex max-w-200 mx-auto flex-1 mt-30 flex-col justify-center content-center">
      <h1 className="max-w-150 text-center text-3xl font-bold mb-5 mx-auto">High-performance image and video experiences</h1>
      <p className="text-center max-w-150 mx-auto">How to improve page performance while maintaining high visual quality in a media-heavy React app.</p>

      <Button asChild variant="outline" className="text-xl text-wrap bg-blue-500 text-white drop-shadow-none mt-10 max-w-100 mx-auto h-auto whitespace-pre-wrap">
        <Link href="/demo">View demo app</Link>
      </Button>
    </div>
  )
}
