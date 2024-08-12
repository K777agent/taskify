import { useState } from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import styles from './PwdLabel.module.scss';
import { IconVisible, IconInvisible } from '@/assets/icongroup';
import { useTheme } from '@/hooks/useThemeContext';

interface Props<T extends FieldValues> {
  id: Path<T>;
  label: string;
  placeholder: string;
  error?: string;
  register: UseFormRegister<T>;
}

export default function PwdInputWithLabel<T extends FieldValues>({
  id,
  label,
  placeholder,
  error,
  register,
}: Props<T>) {
  const [visible, setVisible] = useState(false);
  const type = visible ? 'text' : 'password';

  const { theme } = useTheme();

  return (
    <div className={`${styles[`container`]} ${styles[theme]}`}>
      <label htmlFor={id} className={styles[`label`]}>
        {label}
      </label>
      <div className={styles[`input-wrapper`]}>
        <input
          {...register(id)}
          className={`${styles[`input`]} ${error ? styles[`input-error`] : ''}`}
          type={type}
          id={id}
          placeholder={placeholder}
          autoComplete='new-password'
        />
        <button
          type='button'
          className={styles[`button`]}
          onClick={() => setVisible((prevVisible) => !prevVisible)}
        >
          {visible ? (
            <IconVisible className={styles[`icon`]} />
          ) : (
            <IconInvisible className={styles[`icon`]} />
          )}
        </button>
      </div>
      {error && <p className={styles[`error-message`]}>{error}</p>}
    </div>
  );
}
