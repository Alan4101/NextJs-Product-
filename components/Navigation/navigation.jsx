import Link from 'next/link'

import cls from'./navigation.module.css'

export default function Navigation(){
  return(
    <nav className={cls.nav}>
    <ul className={cls.navWrapper}>
      <li className={cls.navItem}>
        <Link href="/products/product-list"><a>Product list</a></Link>
      </li>
      <li className={cls.navItem}>
        <Link href="/"><a>Home</a></Link>
      </li>
    </ul>
  </nav>
  )
}