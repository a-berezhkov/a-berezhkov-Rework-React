import { SignUpResponseType, UserType } from "../types/UserType";
import { axiosInstance, setAccessToken } from "../../../shared/lib/axiosInstance";
 
 

/**
 * User API class
 * @class
 */
export default class UserApi {
  /**
   * Register user
   * @param {UserType} data
   * @returns {Promise<SignUpResponseType>}
   */
  static async register(data: UserType): Promise<SignUpResponseType> {
    const response = await axiosInstance.post<SignUpResponseType>(
      "users/data/",
      data
    );
    setAccessToken(response.data.accessToken);
    return response.data;
  }
}
