export default function OrderHistory() {
  return (
    <div className="order-1">
      <h3 className="text-primary text-md font-bold">Order History</h3>
      <p className="mt-1">Manage billing information and view receips</p>
      <div className="mt-12 -mx-4">
        <table className="w-full">
          <TableHead />
          <tbody>
            <TableRow date="Oct. 21, 2021" type="Pro Annual" />
            <TableRow date="Aug. 21, 2021" type="Pro Portfolio" />
            <TableRow date="Jul. 21, 2021" type="Sponsored Post" />
            <TableRow date="Jun. 21, 2021" type="Sponsored Post" />
          </tbody>
        </table>
      </div>

      <p className="mt-4">
        <a href="#" className="text-accent text-md font-medium underline">
          Lead more
        </a>
      </p>
    </div>
  );
}
function TableRow({
  date,
  type,
  onDownload,
}: {
  date: string;
  type: string;
  onDownload?: () => void;
}) {
  return (
    <tr
      className="relative isolate 		
				before:absolute before:w-full 
				before:h-full before:shadow-[0px_8px_19px_rgba(223,223,253,0.6)]
				before:rounded-lg before:-z-10
				before:opacity-0
				hover:before:opacity-100
				"
    >
      <td className="text-primary text-md font-medium pl-4">{date}</td>
      <td className="text-primary text-md font-medium pl-4">{type}</td>
      <td className="py-2 pl-4">
        <button
          className="text-primary font-medium border-primary-light hover:border-primary border px-4 h-10 rounded-lg block"
          onClick={onDownload}
        >
          Download
        </button>
      </td>
    </tr>
  );
}

function TableHead() {
  return (
    <thead>
      <tr className="before:absolute">
        <th className="text-sm pl-4 text-left font-medium">Date</th>
        <th className="text-sm pl-4 text-left font-medium">Type</th>
        <th className="text-sm pl-4 pr-4 text-left font-medium w-[150px]">
          Receipt
        </th>
      </tr>
    </thead>
  );
}
