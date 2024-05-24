import NavItems from './NavItems';
import { FaGoogle } from 'react-icons/fa';

const MobileNav = ({ menu }) => {
  return (
    <div className={menu} id='mobile-menu'>
      <div className='px-2 pt-2 pb-3 space-y-1'>
        <NavItems flexDirection='flex-col' />
        <button className='flex items-center px-3 py-2 my-4 text-white bg-gray-700 rounded-md hover:bg-gray-900 hover:text-white'>
          <FaGoogle className='mr-2 text-white' />
          <span>Login or Register</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
