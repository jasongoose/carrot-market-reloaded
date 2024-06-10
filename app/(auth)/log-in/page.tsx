import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password!</h2>
      </div>
      <form action="" className="flex flex-col gap-3">
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
        <FormBtn {...{ text: "Log in", loading: false }}></FormBtn>
      </form>
      <SocialLogin />
    </div>
  );
}