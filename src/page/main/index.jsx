import { useNavigate } from 'react-router-dom';
import mainImg from '../../asset/main.svg';
import { useForm } from 'react-hook-form';

function MainPage() {
  const { register, watch, handleSubmit } = useForm();
  const { username } = watch();
  const navigate = useNavigate();

  const handleNameSubmit = (value) => {
    sessionStorage.setItem('fortune-username', value.username);
    navigate('/result');
  };

  return (
    <>
      <div className="text-[#7d5300] text-4xl pt-8 font-semibold">
        <p>다가오는 2025년,</p>
        <p className="text-end">나에게 무슨 일이 일어날까?</p>
      </div>

      <img src={mainImg} alt="메인 이미지" className="w-full object-contain" />

      <h1 className="title text-5xl text-center">두근두근 포춘쿠키 뽑기</h1>

      <form onSubmit={handleSubmit(handleNameSubmit)} className="mt-6 flex flex-col gap-8 items-center">
        <label className="flex flex-col gap-1 w-full">
          이름을 입력해 주세요.
          <input {...register('username')} placeholder="김포춘" className="px-3 py-3 rounded-lg focus:outline-1 focus:outline-[#fa0]" />
        </label>
        <button disabled={!username}>포춘쿠키 뽑으러 가기</button>
      </form>
    </>
  );
}

export default MainPage;
