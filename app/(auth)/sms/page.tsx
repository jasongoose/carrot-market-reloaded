import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number</h2>
      </div>
      <form action="" className="flex flex-col gap-3">
        <FormInput
          {...{
            type: "number",
            placeholder: "Phone number",
            required: true,
            validationMessageList: [],
          }}
        />
        <FormInput
          {...{
            type: "number",
            placeholder: "Verification code",
            required: true,
            validationMessageList: [],
          }}
        />
        <FormBtn {...{ text: "Verify", loading: false }}></FormBtn>
      </form>
    </div>
  );
}
