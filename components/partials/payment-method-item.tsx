interface PaymentMethodItemProps {
  title: string;
  icon: React.ReactNode;
  onRemove?: () => void;
}
export default function PaymentMethodItem({
  icon,
  title,
  onRemove,
}: PaymentMethodItemProps) {
  return (
    <div className="flex w-full items-center">
      <div className="icon shrink-0">{icon}</div>
      <div className="ml-4 flex-grow">
        <p className="text-primary text-md font-medium">{title}</p>
      </div>
      <div className="shrink-0">
        <button
          className="text-primary font-medium border-primary-light hover:border-primary border px-4 h-10 rounded-lg block"
          onClick={onRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
