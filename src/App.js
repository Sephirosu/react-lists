import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>👨‍🎓</p>
      </StepMessage>
      {/* <Steps /> */}
      <StepMessage step={2}>
        <p>Read children props</p>
        <p>🤞</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // let [test, setTest] = useState({ name: "Jonas" });

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
    // if (step < 3) setStep((s) => s + 1);

    // setTest({ name: "Fred" });
    //Bad practice
    // test.name = "fred";
  };

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>
            {" "}
            {messages[step - 1]}{" "}
            <Button
              bgColor="#7950f2"
              textColor="white"
              onClick={() => alert("Who's gonna carry the boats?")}
            >
              Alert
            </Button>
          </StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈 Previous</span>
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              <span>👉 Next</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

const Button = ({ bgColor, textColor, onClick, children }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const StepMessage = ({ step, children }) => {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
};
