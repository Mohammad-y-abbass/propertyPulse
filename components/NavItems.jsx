import PropTypes from 'prop-types';
import { navLinks } from '@/utils/navLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItems = ({ flexDirection }) => {
  const pathname = usePathname();
  console.log(flexDirection); // Should log 'flex-col' if passed correctly

  return (
    <div className={`flex space-x-2 ${flexDirection}`}>
      {navLinks.map((link, index) => (
        <Link
          key={index} 
          href={link.href}
          className={`px-3 py-2 w-fit text-white rounded-md hover:bg-gray-900 hover:text-white ${
            pathname === link.href ? 'bg-black' : ''
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

NavItems.propTypes = {
  flexDirection: PropTypes.string.isRequired,
};

export default NavItems;
