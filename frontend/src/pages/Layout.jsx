import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';

function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen">
      <Sidebar />
      <div className="p-4">
        <header className="bg-teal-200">header</header>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
