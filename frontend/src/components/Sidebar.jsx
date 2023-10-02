import { GiPhotoCamera } from 'react-icons/gi';
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from '../lib/consts/navigations';
import SidebarLink, { linkClasses } from './SidebarLink';
import { HiOutlineLogout } from 'react-icons/hi';
import classNames from 'classnames';

function Sidebar() {
  return (
    <aside className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
      <div className="flex items-center gap-2 px-1 py-3 mb-8">
        <GiPhotoCamera fontSize={28} />
        <p>Alya Photography</p>
      </div>
      <ul className="flex flex-col flex-1 gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map(item => (
          <li key={item.key}>
            <SidebarLink path={item.path} icon={item.icon} label={item.label} />
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item => (
          <div key={item.key}>
            <SidebarLink path={item.path} icon={item.icon} label={item.label} />
          </div>
        ))}
        <div className={classNames('text-red-500 cursor-pointer', linkClasses)}>
          <span>
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
