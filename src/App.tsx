import { useState } from "react";
import { Card } from "./components/Card";
import { Toast } from "./components/Toast";

const TOAST_SHOWTIME = 3000;
const TOAST_TRANSITION = 1000;
const TOAST_TOTAL = TOAST_SHOWTIME + TOAST_TRANSITION;

function App() {
  const [showToast, setShowToast] = useState(false);

  function displayToast() {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, TOAST_TOTAL);
  }

  return (
    <div className="px-4 md:px-8 py-8 md:py-32 flex justify-center text-gray-900">
      {showToast && (
        <Toast
          title="Message Sent!"
          message="Thank you for completing the form. We'll be in touch soon!"
          delay={TOAST_SHOWTIME}
        />
      )}
      <Card displayToast={displayToast} />
    </div>
  );
}

export default App;
