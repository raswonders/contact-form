import { Card } from "./components/Card";
import { Toast } from "./components/Toast";

function App() {
  return (
    <div className="px-4 md:px-8 py-8 md:py-32 flex justify-center text-gray-900">
      <Toast
        title="Message Sent!"
        message="Thank you for completing the form. We'll be in touch soon!"
      />
      <Card />
    </div>
  );
}

export default App;
