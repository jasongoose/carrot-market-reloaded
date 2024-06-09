export interface Props {
  person: string;
  index: number;
}

export default function ListItem({ person, index }: Props) {
  return (
    <li className="flex items-center gap-5 rounded-xl p-2.5 odd:bg-gray-100 even:bg-cyan-100">
      <div className="size-7 rounded-full bg-blue-400"></div>
      <span className="text-lg font-medium">{person}</span>
      <div className="flex size-5 items-center justify-center rounded-full bg-red-500 text-white">
        {index}
      </div>
    </li>
  );
}
