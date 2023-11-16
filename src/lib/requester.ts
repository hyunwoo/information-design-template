import axios from 'axios';

export async function requestGet<T>(url: string, params?: any) {
  try {
    const data = await axios.get<T>(url, { params });
    return data.data;
  } catch (e) {
    //공통 에러처리
    throw e;
  }
}
