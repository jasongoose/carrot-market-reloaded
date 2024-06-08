export default function Card() {
  return (
    <article className="w-full p-5 bg-white shadow-xl rounded-2xl">
      <section className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-semibold text-gray-600">In transit</span>
          <span className="-mb-1 text-4xl font-semibold">Coolblue</span>
        </div>
        <div className="bg-orange-400 rounded-full size-12"></div>
      </section>
      <section className="flex items-center gap-2 my-2">
        <span className="px-2.5 py-1.5 text-xs text-white uppercase bg-green-400 font-md rounded-full">Today</span>
        <span>9:30 - 10:30</span>
      </section>
      <section className="relative">
        <div className="absolute w-full h-2 bg-gray-200 rounded-full"></div>
        <div className="absolute w-2/3 h-2 bg-green-400 rounded-full"></div>
      </section>
      <section className="flex items-center justify-between mt-5 text-gray-600">
        <span>Expected</span>
        <span>Sorting center</span>
        <span>In transit</span>
        <span className="text-gray-400">Delivered</span>
      </section>
    </article>
  )
}