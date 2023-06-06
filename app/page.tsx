import Packgage from "@/components/package";
import OrderHistory from "@/components/order-history";
import Sidebar from "@/components/sidebar";
import PaymentMethods from "@/components/payment-methods";

export default function Home() {
  return (
    <main className="grid grid-cols-[260px,1fr] h-screen">
      <Sidebar />
      <div className="px-20 my-16">
        <div className="max-w-[930px] mx-auto w-full @container">
          <h1 className="text-primary text-xl font-bold">Billing</h1>
          <div className="grid grid-cols-[auto,258px] gap-20 items-start mt-12">
            <Packgage />
            <OrderHistory />
            <PaymentMethods />
          </div>
        </div>
      </div>
    </main>
  );
}
