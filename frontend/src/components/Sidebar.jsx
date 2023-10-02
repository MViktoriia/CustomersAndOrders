import { Link } from 'react-router-dom';
import { GiPhotoCamera } from 'react-icons/gi';

function Sidebar() {
  return (
    <aside className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
      <div className="flex items-center gap-2 px-1 py-3">
        <GiPhotoCamera fontSize={28} />
        <p>Alya Photography</p>
      </div>
      <div className="flex flex-col flex-1">
        <Link to={'dushboard'} className="underline">
          Dushboard
        </Link>
        <Link to={'customers'}>Customers</Link>
        <Link to={'orders'}>Orders</Link>
      </div>
      <div>bottom part</div>
    </aside>
  );
}

export default Sidebar;
