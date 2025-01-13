import { axiosInstance } from "../../../shared/lib/axiosInstance";
import { AttendanceArrayType } from "../types/AttendanceType";

class AttendanceApi {
  /**
   * Get the attendance records of the current user.
   * @returns {Promise<AttendanceArrayType>}
   */
  static async get(): Promise<AttendanceArrayType> {
    const response = await axiosInstance.get<AttendanceArrayType>(
      "/users/attendance/"
    );
   
    return response.data;
  }
}

export default AttendanceApi;
