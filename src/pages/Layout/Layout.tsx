import Header from '@widgets/Header/Header'
import styles from './Layout.module.scss'
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className={styles.layout}>{children}</main>
    </>
  );
};

export default Layout;
