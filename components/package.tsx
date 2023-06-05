export default function Packgage() {
  return (
    <div className="bg-accent text-accent-content p-8 rounded-2xl order-1 md:order-2">
      <p className="text-md font-medium">Your plan</p>
      <h3 className="text-lg font-bold mt-4">Pro Annual</h3>
      <p className="text-sm font-medium mt-2">Renews on Nov. 2021</p>
      <p className="mt-4">
        <button className="border border-accent-content border-opacity-50 hover:border-opacity-100 px-4 py-2 rounded-lg">
          Cancel subscription
        </button>
      </p>
    </div>
  );
}
