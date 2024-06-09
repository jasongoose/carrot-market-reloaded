import ListItem from "./list-item";

export interface Props {
  personList: string[];
}

export default function List({ personList }: Props) {
  return (
    <ul className="flex w-full max-w-screen-sm flex-col gap-4 rounded-3xl bg-white p-5 shadow-xl dark:bg-gray-600">
      {personList.map((person, index) => (
        <ListItem key={index} {...{ person, index }} />
      ))}
    </ul>
  );
}
