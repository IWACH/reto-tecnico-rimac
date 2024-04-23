import Stepper from "@/components/Stepper";
import StepperWeb from "@/components/StepperWeb";
import Plans from "@/components/plans/Plans";
export default function PlansPage() {
  return (
    <div style={{ width: "100%" }}>
      <Stepper />
      <StepperWeb />
      <Plans />
    </div>
  );
}
