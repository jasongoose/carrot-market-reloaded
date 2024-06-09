import Card from "@/components/card";
import List from "@/components/list";
import SearchInput from "@/components/search-input";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center gap-5 bg-gray-100 p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 dark:bg-gray-700">
      {/* <Card />
      <SearchInput />
      <List
        personList={[
          "Nico",
          "Lynn",
          "Marco",
          "Nico",
          "Lynn",
          "Marco",
          "Nico",
          "Lynn",
          "Marco",
          "",
        ]}
      /> */}
      <button className="btn">Testing...</button>
    </main>
  );
}
