import VisaIcon from "./icons/visa";
import PaymentMethodItem from "./partials/payment-method-item";

export default function PaymentMethods() {
  return (
    <div className="order-5">
      <h3 className="text-primary text-md font-bold">Payment Method</h3>
      <p className="mt-1">Manage billing information and view receips</p>

      <div className="mt-6 w-full gap-4 grid">
        <PaymentMethodItem icon={<VisaIcon />} title="Visa ending in 2255" />
      </div>
    </div>
  );
}
