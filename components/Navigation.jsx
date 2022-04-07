import Link from "next/link";

import cls from "../styles/Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={cls.nav}>
      <ul className={cls.navWrapper}>
        <li className={cls.navItem}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={cls.navItem}>
          <Link href="/products/ProductList">
            <a>Products</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
