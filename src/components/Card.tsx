import { RadioSelection } from "./RadioSelection";
import { TextField } from "./TextField";

export function Card() {
  return (
    <main>
      <h1>Contact us</h1>
      <TextField label="First Name" />
      <TextField label="Last Name" />
      <TextField label="Email Address" />
      <RadioSelection label="Query Type" />
      <Message />
      <Checkbox lavel="I consent to being contacted by the team" />
    </main>
  )
}