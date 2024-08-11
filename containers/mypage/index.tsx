import EditProfileForm from '@/containers/mypage/EditProfileForm';
import PwdChangeForm from '@/containers/mypage/PwdChangeForm';
import styles from './index.module.scss';
import DashboardLayout from '../dashboardLayout';

export default function Mypage() {
  return (
    <DashboardLayout>
      <div className={styles[`text`]}>
        <section className={styles[`profile-box`]}>
          <h2 className={styles[`profile`]}>프로필</h2>
          <EditProfileForm />
        </section>
        <section className={styles[`pwd-box`]}>
          <h2 className={styles[`pwd-change`]}>비밀번호 변경</h2>
          <PwdChangeForm />
        </section>
      </div>
    </DashboardLayout>
  );
}
