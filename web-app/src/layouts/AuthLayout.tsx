import Sidebar from '@/components/widgets/layout/Sidebar.tsx';
import Header from '@/components/widgets/layout/Header.tsx';
import { Outlet } from 'react-router';
import Footer from '@/components/widgets/layout/Footer.tsx';

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidebar />
      <div className="p-4 xl:ml-80">
        <Header brandName={'firestige'} routes={[]} />
        <main>
          <Outlet />
        </main>
        <div className="text-blue-gray-600">
          <Footer brandLink={'http://firestige.xyz'} brandName={'firestige'} routes={[]} />
        </div>
      </div>
    </div>);
};
export default AuthLayout;