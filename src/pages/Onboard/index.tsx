import { useMemo, useState } from "react";

import { Stepper } from "./_components/Stepper";

import { STEPS } from "./constants";

import style from "./index.module.scss";

export default function OnboardPage() {
  const [activeStep, setActiveStep] = useState(0);

  const {
    title,
    description,
    image: Image
  } = useMemo(() => STEPS[activeStep], [activeStep]);

  const isLastStep = useMemo(() => (
    activeStep === STEPS.length - 1
  ), [activeStep]);

  const handleNextStep = () => {
    if (isLastStep) {
      // TODO: new route redirect
      return;
    }

    setActiveStep(activeStep + 1);
  };

  return (
    <>
      <div className={style.stepper}>
        <Image className={style.image} />
        <Stepper
          title={title}
          description={description}
          active={activeStep}
          buttonType={isLastStep ? "play" : "icon"}
          nextStep={handleNextStep}
        />
      </div>
    </>
  );
}
