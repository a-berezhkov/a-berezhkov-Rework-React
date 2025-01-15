import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import styles from "./Navbar.module.css";
import { useAppSelector } from "../../app/store/store";
import { ItemType, MenuItemType } from "antd/es/menu/interface";

const { Header } = Layout;

function Nav() {
  const user = useAppSelector((state) => state.users.user);

  const items: ItemType<MenuItemType>[] = [
    {
      key: "3",
      label: <Link to="/library">Библиотеки Python</Link>,
    },
    {
      key: "1",
      label: <Link to="/auth">Авторизация</Link>,
    },
    {
      key: "2",
      label: <Link to="/reg">Регистрация</Link>,
    },
    user?.username
      ? {
          key: "5",
          label: <span className={styles.userDropdown}>{user.username}</span>,
        }
      : null,
  ];

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
            items={items}
          />
        </Header>
      </Layout>
    </>
  );
}

export default Nav;
