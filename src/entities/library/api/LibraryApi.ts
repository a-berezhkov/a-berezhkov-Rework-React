import { axiosInstance } from "../../../shared/lib/axiosInstance";
import { LibraryDetails, LibraryTypeArray } from "../types/LibraryType";

export default class LibraryApi {
  /**
   * Get all libs
   * @returns LibraryTypeArray
   */
  static async get(): Promise<LibraryTypeArray> {
    const response = await axiosInstance.get<LibraryTypeArray>("/simple");
    return response.data;
  }
  /**
   * Get desc of one lib
   * @param name
   * @returns
   */
  static async getOne(name: string): Promise<LibraryDetails> {
    const response = await axiosInstance.get<LibraryDetails>(`/simple/${name}`);
    return response.data;
  }
}
