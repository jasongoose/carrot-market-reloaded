export default function SearchInput() {
  return (
    <div className="w-full max-w-screen-sm">
      <div className="flex flex-col gap-2 p-5 bg-white shadow-xl rounded-3xl dark:bg-gray-600 md:flex-row *:outline-none has-[:invalid]:ring has-[:invalid]:ring-blue-300 ring ring-transparent transition-shadow">
        <input type="text" placeholder="Email Address" required className="w-full h-12 pl-5 transition-shadow bg-gray-200 rounded-full ring ring-transparent focus:ring-green-500 focus:ring-offset-2 placeholder:drop-shadow invalid:focus:ring-red-500 peer"/>
        <span className="hidden font-medium text-red-500 peer-invalid:block">Email is required</span>
        <button className="py-2 font-medium text-white transition-transform bg-black rounded-full md:px-10 active:scale-90 focus:scale-9">Login</button>
      </div>
    </div>
  )
}