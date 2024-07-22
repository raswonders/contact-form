import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Message } from "./Message";
import { RadioSelection } from "./RadioSelection";
import { TextField } from "./TextField";

const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log([...data.entries()]);
};

export function Card() {
  return (
    <main className="w-80 p-6 flex flex-col bg-white rounded-[16px] space-y-8">
      <h1 className="text-gray-900 text-[32px] -tracking-[1px] leading-none font-karla font-bold">
        Contact Us
      </h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6"
      >
        <TextField label="First Name" />
        <TextField label="Last Name" />
        <TextField label="Email Address" />
        <RadioSelection
          title="Query Type"
          options={["General Enquiry", "Support Request"]}
        />
        <Message />
        <Checkbox
          name="consent"
          label="I consent to being contacted by the team"
        />
        <Button type="submit" value="Submit" />
      </form>
    </main>
  );
}
