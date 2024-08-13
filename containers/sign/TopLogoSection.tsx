import Link from 'next/link';
import BigLogo from '@/assets/logos/BigLogo.svg';
import styles from './TopLogoSection.module.scss';

export default function TopLogoSection({ text }: { text: string }) {
  return (
    <div className={styles[`box`]}>
      <Link href='/'>
        <div className={styles[`image`]}>
          <BigLogo className={styles['Logo-Image']} />
          <p className={styles[`text`]}>{text}</p>
        </div>
      </Link>
    </div>
  );
}
