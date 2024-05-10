import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { useSwipeable } from "react-swipeable";

import { Container } from "components/Container";

import { Stepper } from "./_components/Stepper";

import { StorageUtil } from "utils/storage/storage";

import { STEPS } from "./constants";

import style from "./index.module.scss";

export default function OnboardPage() {
  const [activeStep, setActiveStep] = useState(0);

  const navigate = useNavigate();

  const {
    title,
    description,
    image: Image
  } = useMemo(() => STEPS[activeStep], [activeStep]);

  const isLastStep = useMemo(() => (
    activeStep === STEPS.length - 1
  ), [activeStep]);

  const handleNextStep = async () => {
    if (isLastStep) {
      await StorageUtil.set("isOnboardWatched", "true");
      navigate("/main");

      return;
    }

    setActiveStep(activeStep + 1);
  };

  const handlePrevStep = () => {
    const newStep = activeStep - 1;

    if (newStep < 0) {
      return;
    }

    setActiveStep(newStep);
  };

  const swipeable = useSwipeable({
    onSwipedLeft: handleNextStep,
    onSwipedRight: handlePrevStep
  });

  return (
    <Container
      className={style.stepper}
      {...swipeable}
    >
      <Image className={style.image} />
      <Stepper
        title={title}
        description={description}
        active={activeStep}
        buttonType={isLastStep ? "play" : "icon"}
        nextStep={handleNextStep}
      />
    </Container>
  );
}
