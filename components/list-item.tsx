export interface Props {
  person: string;
  index: number;
}

export default function ListItem({ person, index }: Props) {
  return (
    <li className="flex items-center gap-5 rounded-xl border-b-2 p-2.5 first:border-t-0 first:pt-0 last:border-b-0 odd:bg-gray-100 even:bg-orange-100 last:md:pb-0">
      <div className="size-7 rounded-full bg-blue-400"></div>
      {/* <span className="text-lg font-medium">{person}</span> */}
      <div className="h-4 w-40 rounded-full bg-gray-400"></div>
      <div className="h-4 w-20 rounded-full bg-gray-400"></div>
      <div className="flex size-5 animate-spin items-center justify-center rounded-full bg-red-500 text-white">
        ⏳
      </div>
    </li>
  );
}
