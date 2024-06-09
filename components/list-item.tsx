export interface Props {
  person: string;
  index: number;
}

export default function ListItem({ person, index }: Props) {
  return (
    <li className="group flex items-center gap-5 rounded-xl border-b-2 p-2.5 first:border-t-0 first:pt-0 last:border-b-0 odd:bg-gray-100 even:bg-orange-100 last:md:pb-0">
      <div className="size-7 rounded-full bg-blue-400"></div>
      <span className="text-lg font-medium empty:h-5 empty:w-24 empty:animate-pulse empty:rounded-full empty:bg-gray-300 group-hover:text-red-500">
        {person}
      </span>
      <div className="relative flex size-6 items-center justify-center rounded-full bg-red-500 text-white">
        <span className="z-10">{index}</span>
        <div className="absolute size-6 animate-ping rounded-full bg-red-500"></div>
      </div>
    </li>
  );
}
