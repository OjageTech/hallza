/**
 * Will Check local Storage for `user` item
 * @returns Methods for retrieving data from server
 */
export default function authHeader() {
  const userStr = localStorage.getItem('user');
  let user = null;
  if (userStr) {
    user = JSON.parse(userStr);
  }

  if (user && user.accessToken) {
    return { Authorization: `Bearer ${user.accessToken}` };
  }
  return { Authorization: '' };
}
