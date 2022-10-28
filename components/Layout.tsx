import Navbar from './Navbar/Navbar';

type MainLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
