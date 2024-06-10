export interface Props {
  type: string;
  placeholder: string;
  required: boolean;
  validationMessageList: string[];
}

export default function FormInput(props: Props) {
  return (
    <div className="flex flex-col gap-2">
      <input
        type={props.type}
        placeholder={props.placeholder}
        required
        className="h-10 w-full rounded-md border-none bg-transparent ring-1 ring-neutral-200 transition placeholder:text-neutral-400 focus:ring-4 focus:ring-orange-500"
      />
      {props.validationMessageList.map((msg, index) => (
        <span key={index} className="font-medium text-red-500">
          {msg}
        </span>
      ))}
    </div>
  );
}
