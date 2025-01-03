import { useEffect, useState } from 'react';
import bgImg from '../../asset/loading-bg.svg';
import fortune from '../../asset/loading-fortune.svg';
import cardBg from '../../asset/card-fortune.svg';
import axios from 'axios';

function ResultPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState('');

  const handleFortunePost = async () => {
    try {
      const res = await axios.post('https://fortune.seolan.me/fortune');
      if (res.status === 200) {
        setIsLoading(false);
        setData(res.data.fortune);
      }
    } catch (err) {
      if (err.status === 500) alert('서버 장애 발생!\n 잠시 후 다시 시도해 주세요.');
      else alert(err.message);
    }
  };

  useEffect(() => {
    if (!sessionStorage.getItem('fortune-username')) window.location.href = '/';
    if (isLoading) setTimeout(handleFortunePost, 700);
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <>
          <div className="relative w-full pt-28">
            <img src={bgImg} alt="배경 이미지" className="w-full object-contain" />
            <img src={fortune} alt="로딩하는 포츄니" className="center animate-my_bounce" />
          </div>
          <h3 className="loading_desc text-3xl font-bold text-center mt-4">열심히 쿠키를 생성하고 있어요!</h3>
        </>
      ) : (
        <>
          <div className="text-2xl pt-16 mb-9">
            <span className="text-[#624712]">{`${sessionStorage.getItem('fortune-username')}`}</span> 님의
            <br />
            2025년 운세는
          </div>
          <div className="relative flex decoration-[#7d7d7d] justify-center break-keep items-center fortune_msg text-2xl text-center py-5 px-4 min-h-[230px] text-[#121212] bg-white rounded-lg whitespace-break-spaces shadow-md underline">
            <img src={cardBg} alt="" className="center" />
            {data}
          </div>
          <footer className="text-center absolute bottom-5 left-1/2 -translate-x-1/2 text-[#624712]">
            Happy New Year
            <br />
            2025
            <br />
            <div className="opacity-30 text-sm">
              © <a href="https://github.com/naya-h2">naya-h2</a> & <a href="https://github.com/SeoLanee">SeoLanee</a>
            </div>
          </footer>
        </>
      )}
    </>
  );
}

export default ResultPage;
