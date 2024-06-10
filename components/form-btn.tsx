export interface Props {
  text: string;
  loading: boolean;
}

export default function FormBtn(props: Props) {
  return (
    <button
      {...{ disabled: props.loading }}
      className="btn-primary h-10 font-semibold disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:text-neutral-300"
    >
      {props.loading ? "로딩 중..." : props.text}
    </button>
  );
}
