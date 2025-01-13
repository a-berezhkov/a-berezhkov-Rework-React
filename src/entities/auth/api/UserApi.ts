import { SignUpResponseType, UserType } from "../types/UserType";
import {
  axiosInstance,
  setAccessToken,
} from "../../../shared/lib/axiosInstance";
import { SignInFormType } from "../../../features/auth/SignInForm/SignInForm.d";

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

  /**
   * SignIn user
   * @param {UserType} data
   * @returns {Promise<SignUpResponseType>}
   */
  static async login(data: SignInFormType): Promise<SignUpResponseType> {
    const response = await axiosInstance.post<SignUpResponseType>(
      "users/auth/login/",
      data
    );
    setAccessToken(response.data.access); // TODO fix it
    return response.data;
  }
}
