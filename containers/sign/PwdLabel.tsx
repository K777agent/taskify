import Image from 'next/image';
import { useState } from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

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

  return (
    <div>
      <label htmlFor={id} className='mb-[10px] block text-[16px] text-black_33'>
        {label}
      </label>
      <div className='relative'>
        <input
          {...register(id)}
          className={`h-[50px] w-full rounded-[8px] border border-gray_d9 bg-white px-[15px] text-[16px] text-black_33 placeholder:text-gray_9f ${
            error && 'border-2 border-red'
          }`}
          type={type}
          id={id}
          placeholder={placeholder}
          autoComplete='new-password'
        />
        <button
          type='button'
          className='absolute right-[10px] top-[15px] size-[20px]'
          onClick={() => setVisible(!visible)}
        >
          <Image
            src={
              visible
                ? 'assets/icons/ic_visible.svg'
                : 'assets/icons/ic_visible.svg'
            }
            alt='비밀번호 보이기 아이콘'
            width={20}
            height={20}
          />
        </button>
      </div>
      {error && <p className='mt-2 text-[14px] text-red'>{error}</p>}
    </div>
  );
}
