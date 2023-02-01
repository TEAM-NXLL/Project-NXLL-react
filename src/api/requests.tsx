import axios from 'axios';

export type requestTypes = {
  type: string;
  endpoint: string;
  page?: string | null;
  data?: any;
  accessToken?: string | null;
};

export async function requestAPI({ type, endpoint, page, data, accessToken }: requestTypes) {
  try {
    const res = await axios(
      `https://asia-northeast3-heropy-api.cloudfunctions.net/api${endpoint}`,
      {
        method: type,
        headers: {
          'content-type': 'application/json',
          username: 'KDT3_TEAM_NXLL',
          apikey: import.meta.env.VITE_API_KEY,
          masterKey: page === 'admin' ? true : false,
          Authorization: accessToken ? `Bearer ${accessToken}` : null,
        },
        data: data ? data : null,
      },
    );

    if (res.status !== 200) {
      throw new Error();
    }

    return res;
  } catch (error) {
    console.log(error);
  }
}
