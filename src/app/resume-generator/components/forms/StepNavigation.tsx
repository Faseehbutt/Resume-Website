export default function StepNavigation({
  steps,
  currentStep,
  onStepChange
}: {
  steps: string[];
  currentStep: number;
  onStepChange: (step: number) => void;
}) {
  return (
    <div className="flex justify-center items-center flex-wrap gap-4 mx-auto p-4 max-w-full xs: mb-4">
      {steps.map((step, index) => (
        <button
          key={step}
          onClick={() => onStepChange(index)}
          className={`px-4 py-2 rounded text-black xs:space-x-4 ${
            currentStep === index
              ? ' bg-yellow-500 text-black'
              : 'bg-yellow-500 '
          }`}
        >
          {step}
        </button>
      ))}
    </div>
  );
}