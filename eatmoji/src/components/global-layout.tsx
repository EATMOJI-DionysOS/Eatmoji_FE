import Link from 'next/link';
import { ReactNode } from 'react';
import style from './global-layout.module.css'
import { usePathname } from 'next/navigation';

export default function Layout({ children } : { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className={style.container}>
      <main className={style.main}>{children}</main>

      <nav className={style.nav}>
        <Link href="/search" className={`${style.link} ${pathname === '/search' ? style.active : ''}`}>오메추</Link>
        <Link href="/" className={`${style.link} ${pathname === '/' ? style.active : ''}`}>홈</Link>
        <Link href="/profile" className={`${style.link} ${pathname === '/profile' ? style.active : ''}`}>기록</Link>
      </nav>
    </div>
  );
}
