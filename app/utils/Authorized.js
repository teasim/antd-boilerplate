import { renderAuthorized } from 'teasim-widgets';
import { getAuthority } from './authority';

let Authorized = renderAuthorized(getAuthority()); // eslint-disable-line

// Reload the rights component
export const reloadAuthorized = () => {
  Authorized = renderAuthorized(getAuthority());
};

export default Authorized;
