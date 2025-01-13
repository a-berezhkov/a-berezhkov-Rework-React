import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import styles from "./Navbar.module.css";
import { useAppSelector } from "../../app/store/store";

const { Header } = Layout;

function Nav() {
  const user = useAppSelector((state) => state.users.user);
  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <div className={styles.logo}>ReWork</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            className={styles.menu}
          >
            <Menu.Item key="3">
              <Link to={"/library"}> Библиотеки</Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to={"/auth"}> Авторизация</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={"/reg"}> Регистрация</Link>
            </Menu.Item>

            {user?.username && (
              <Menu.Item key="5" className={styles.userMenu}>
                <span className={styles.userDropdown}>{user.username}</span>
              </Menu.Item>
            )}
          </Menu>
        </Header>
      </Layout>
    </>
  );
}

export default Nav;
