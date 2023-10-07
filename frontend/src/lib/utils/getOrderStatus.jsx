export function getOrderStatus(status) {
  switch (status) {
    case 'done':
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100">
          {status}
        </span>
      );
    case 'in progress':
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100">
          {status}
        </span>
      );
    case 'paid':
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100">
          {status}
        </span>
      );
    case 'unpaid':
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-red-600 bg-red-100">
          {status}
        </span>
      );
    default:
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100">
          {status}
        </span>
      );
  }
}
