import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
import Header from './Header';
function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen owerflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
