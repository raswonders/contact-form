import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Message } from "./Message";
import { RadioSelection } from "./RadioSelection";
import { TextField } from "./TextField";

const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
  alert("submitted");
};

export function Card() {
  return (
    <main className="w-80 flex flex-col bg-white rounded-lg space-y-2">
      <h1>Contact Us</h1>
      <form action="" onSubmit={handleSubmit} className="flex flex-col">
        <TextField label="First Name" />
        <TextField label="Last Name" />
        <TextField label="Email Address" />
        <RadioSelection
          legend="Query Type"
          labels={["General Enquiry", "Support Request"]}
        />
        <Message />
        <Checkbox label="I consent to being contacted by the team" />
        <Button type="submit" value="Submit" />
      </form>
    </main>
  );
}
