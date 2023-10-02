import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const linkClasses =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

function SidebarLink({ path, icon, label }) {
  const { pathname } = useLocation();
  const textColor =
    pathname === path ? 'text-white bg-neutral-700' : 'text-neutral-400';
  console.log(textColor);

  return (
    <Link className={classNames(textColor, linkClasses)} to={path}>
      <span className="text-xl">{icon}</span>
      {label}
    </Link>
  );
}

export default SidebarLink;

SidebarLink.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
};
