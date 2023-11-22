import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
import Header from './Header';
function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen owerflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4 min-h-0 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
