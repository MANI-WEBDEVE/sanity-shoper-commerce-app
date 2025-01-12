import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full gap-10 space-y-4">
        <Banner/>
      </div>

    <div
    className="flex flex-col items-center justify-center mt-10 space-y-4"
    >
      <h1 className="text-4xl font-bold text-center text-white">Featured <span className="text-yellow-600">Products</span></h1>
    </div>

      <div className="py-10 flex ">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 space-y-4 ">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
      </div>
    </>
  );
}
