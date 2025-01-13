import { AttendanceArrayType } from "../types/AttendanceType";

export const groupByDate = (data: AttendanceArrayType) => {
  const grouped: { [key: string]: AttendanceArrayType } = {};
  data.forEach((item) => {
    const dateKey = item.timestamp.split("T")[0]; // Extract the date part
    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }
    grouped[dateKey].push(item);
  });
  return Object.entries(grouped).map(([date, records]) => ({
    key: date,
    date,
    children: records.map((record) => ({
      key: record.id,
      ...record,
    })),
  }));
};
