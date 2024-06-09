export default function SearchInput() {
  return (
    <div className="w-full max-w-screen-sm">
      <div className="group flex flex-col gap-2 rounded-3xl bg-white p-5 shadow-xl ring ring-transparent transition-shadow *:outline-none has-[:invalid]:ring has-[:invalid]:ring-blue-300 md:flex-row dark:bg-gray-600">
        <input
          type="text"
          placeholder="Email Address"
          required
          className="peer h-12 w-full rounded-full bg-gray-200 pl-5 ring ring-transparent transition-shadow placeholder:drop-shadow focus:ring-green-500 focus:ring-offset-2 invalid:focus:ring-red-500"
        />
        <span className="hidden font-medium text-red-500 group-focus-within:block">
          Email is required
        </span>
        <button className="focus:scale-9 rounded-full bg-black py-2 font-medium text-white transition-transform active:scale-90 md:px-10">
          Login
        </button>
      </div>
    </div>
  );
}
