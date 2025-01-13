import React, { useEffect } from "react";
import { groupByDate } from "../../helpers/groupByDate";
import { useAppDispatch, useAppSelector } from "../../../../app/store/store";
import { Table } from "antd";
import { getAttendanceThunk } from "../../models/attendanceThunks";
import type { ColumnsType } from "antd/es/table";
import { AttendanceType } from "../../types/AttendanceType";

function ListAttendance() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAttendanceThunk());
  }, []);

  const attendances = useAppSelector((state) => state.attendances.attendances);

  const groupedData = groupByDate(attendances);
  const columns: ColumnsType<AttendanceType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Timestamp",
      dataIndex: "timestamp",
      key: "timestamp",
    },
  ];

  const parentColumns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];    
  return (
    <Table
       columns={parentColumns}
      dataSource={groupedData}
      expandable={{
        expandedRowRender: (record) => (
          <Table
           columns={columns}
            dataSource={record.children}
            pagination={false}
            rowKey="id"
          />
        ),
      }}
      pagination={false}
      rowKey="key"
    />
  );
}

export default ListAttendance;
