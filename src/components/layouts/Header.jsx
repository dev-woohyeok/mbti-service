import { Link } from 'react-router';

function Header() {
  return (
    <div className="p-4 flex justify-between items-center shadow-sm shadow-gray-300 ">
      <button className="hover:text-amber-600 text-amber-300 text-xl font-bold  cursor-pointer">
        홈
      </button>
      <ul className=" flex flex-row gap-4">
        <li>
          <Link>프로필</Link>
        </li>
        <li>
          <Link>테스트</Link>
        </li>
        <li>
          <Link>결과보기</Link>
        </li>
        <button>결과보기</button>
      </ul>
    </div>
  );
}

export default Header;
