import { RadioSelection } from "./RadioSelection";
import { TextField } from "./TextField";

export function Card() {
  return (
    <main className="w-80 flex flex-col items-center bg-white rounded-lg space-y-2">
      <h1>Contact us</h1>
      <TextField label="First Name" />
      <TextField label="Last Name" />
      <TextField label="Email Address" />
      <RadioSelection
        legend="Query Type"
        labels={["General Enquiry", "Support Request"]}
      />
      {/* <Message /> */}
      {/* <Checkbox lavel="I consent to being contacted by the team" /> */}
    </main>
  );
}
