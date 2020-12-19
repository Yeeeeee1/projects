import { globalUser, saveUser } from '../utils';
import { getNewToken } from './getNewToken';

export const getDataToken = async () => {
  const { token: tokenRes } = globalUser.get();
  if (tokenRes) {
    const decodedData = JSON.parse(atob(tokenRes.split('.')[1]));
    const dateNow = Date.now();
    const dateDie = (decodedData.exp * 1000) - 1800000;
    if (dateNow > dateDie) {
      const result = await getNewToken();
      if (result) {
        globalUser.set('refreshToken', result.refreshToken);
        globalUser.set('token', result.token);
        saveUser();
        return result.token;
      }
    }
    return tokenRes;
  }
};
