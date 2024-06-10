import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action="" className="flex flex-col gap-3">
        <FormInput
          {...{
            type: "text",
            placeholder: "Username",
            required: true,
            validationMessageList: ["username is too short"],
          }}
        />
        <FormInput
          {...{
            type: "email",
            placeholder: "Email",
            required: true,
            validationMessageList: [],
          }}
        />
        <FormInput
          {...{
            type: "password",
            placeholder: "Password",
            required: true,
            validationMessageList: [],
          }}
        />
        <FormInput
          {...{
            type: "password",
            placeholder: "Confirm Password",
            required: true,
            validationMessageList: [],
          }}
        />
        <FormBtn {...{ text: "Create account", loading: false }}></FormBtn>
      </form>
      <div className="h-px w-full bg-neutral-500"></div>
      <div>
        <Link
          href="/sms"
          className="btn-primary flex h-10 items-center justify-center gap-2"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  );
}
