import Slider from "@/components/Slider";
import Footer from "../footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 min-h-screen flex flex-col items-center justify-between">
      <div className="w-full max-w-6xl text-center space-y-8 flex-1">
        <h1 className="text-4xl md:text-5xl font-light text-gray-800">
          What we do?
        </h1>
        <Slider />
      </div>
      <Footer className="mt-8" />
    </main>
  );
}
