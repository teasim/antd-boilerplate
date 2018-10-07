import renderAuthorize from 'teasim-widget-authorize';
import { getAuthority } from './authority';

let Authorized = renderAuthorize(getAuthority()); // eslint-disable-line

// Reload the rights component
export const reloadAuthorized = () => {
  Authorized = renderAuthorize(getAuthority());
};

export default Authorized;
