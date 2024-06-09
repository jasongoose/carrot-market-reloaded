export default function SearchInput() {
  return (
    <div className="w-full max-w-screen-sm">
      <div className="flex flex-col gap-2 p-5 bg-white shadow-xl rounded-3xl dark:bg-gray-600 md:flex-row">
        <input type="email" placeholder="Search here" required className="w-full h-12 pl-5 transition-shadow bg-gray-200 rounded-full outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 placeholder:drop-shadow invalid:bg-red-100"/>
        <button className="py-2 font-medium text-white transition-transform bg-black rounded-full outline-none md:px-10 active:scale-90 focus:scale-9 bg-gradient-to-tr from-cyan-500 via-yellow-400 to-purple-400">Search</button>
      </div>
    </div>
  )
}