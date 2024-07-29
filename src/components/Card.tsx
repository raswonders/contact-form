import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Message } from "./Message";
import { RadioSelection } from "./RadioSelection";
import { TextField } from "./TextField";

export function Card({ displayToast }: { displayToast: () => void }) {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    displayToast();
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log([...data.entries()]);
  };

  return (
    <main className="w-full p-6 md:p-10 md:max-w-2xl lex flex-col bg-white rounded-[16px] space-y-8">
      <h1 className="text-gray-900 text-[32px] -tracking-[1px] leading-none font-karla font-bold">
        Contact Us
      </h1>
      <form action="" onSubmit={handleSubmit} className="flex flex-col">
        <div className="grid auto-rows-auto grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
          <TextField label="First Name" required />
          <TextField label="Last Name" required />
          <TextField label="Email Address" required className="md:col-span-2" />
          <RadioSelection
            title="Query Type"
            options={["General Enquiry", "Support Request"]}
            required
            className="md:col-span-2  "
          />
          <Message required className="md:col-span-2" />
        </div>
        <Checkbox
          required
          label="I consent to being contacted by the team"
          name="consent"
        />
        <Button type="submit" value="Submit" />
      </form>
    </main>
  );
}
