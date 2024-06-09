export default function SearchInput() {
  return (
    <div className="w-full max-w-screen-sm">
      <div className="flex flex-col gap-2 p-5 bg-white shadow-xl rounded-3xl dark:bg-gray-600 md:flex-row">
        <input className="w-full h-12 pl-5 transition-shadow bg-gray-200 rounded-full outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 placeholder:drop-shadow" type="text" placeholder="Search here"/>
        <button className="py-2 font-medium text-white transition-transform bg-black rounded-full outline-none active:scale-90 focus:scale-90 md:px-10">Search</button>
      </div>
    </div>
  )
}