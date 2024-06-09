import Card from "@/components/card";
import SearchInput from "@/components/search-input";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-5 p-5 bg-gray-100 dark:bg-gray-700 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100">
       <Card />
       <SearchInput />
    </main>
  )
}