import { Avatar, Button, Modal, Popconfirm, Table } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { NotificationContext } from "../../App";
import FormAddJob from "./components/formAddjob/formAddJob";
import { CongViecService } from "../../services/congViec.service";

const ManagerJob = () => {
  const handleNotification = useContext(NotificationContext);
  // console.log(handleNotification);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listCongViec, setListCongViec] = useState([]);

  const layDanhSachCongViec = () => {
    CongViecService.getCongViec()
      .then((res) => {
        console.log(res.data.content);
        setListCongViec(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1",
    },
    {
      title: "Mã Công Việc",
      dataIndex: "maChiTietLoaiCongViec",
      key: "2",
    },
    {
      title: "Tên công việc",
      dataIndex: "tenCongViec",
      key: "3",
    },

    {
      title: "Giá tiền",
      dataIndex: "giaTien",
      key: "4",
    },
    {
      title: "Đánh giá",
      dataIndex: "danhGia",
      key: "5",
    },
    {
      title: "Hành động",
      key: "6",
      render: (text, record, index) => {
        return (
          <div className="space-x-3 md:grid md:grid-cols-2">
            <Popconfirm
              title="Xóa công việc"
              description="bạn có chắc muốn xóa công việc ko"
              onConfirm={() => {
                CongViecService.xoaCongViec(record.id)
                  .then((res) => {
                    console.log(res);
                    layDanhSachCongViec();
                    handleNotification("success", res.data.message);
                  })
                  .catch((err) => {
                    console.log(err);
                    handleNotification("error", err.response.data.content);
                  });
              }}
              onCancel={() => {}}
              okText="Yes"
              cancelText="No"
            >
              <Button
                danger
                className="hover:!bg-red-500 hover:!text-white  hover:!border-red-500"
              >
                Xóa
              </Button>
            </Popconfirm>
            <Button className="border-yellow-500 text-yellow-500 hover:!text-white hover:!bg-yellow-500 hover:!border-yellow-500">
              Sửa
            </Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    layDanhSachCongViec();
  }, []);

  return (
    <div>
      <div className="space-y-3">
        <h1 className="font-bold text-3xl">
          Danh sách công việc trên hệ thống
        </h1>
        <Button
          onClick={() => {
            setIsModalOpen(true);
          }}
          size="large"
          variant="solid"
          className="bg-green-500 text-white hover:!text-green-500 hover:!border-green-500"
        >
          Thêm công việc
        </Button>
        <Table dataSource={listCongViec} columns={columns} />;
        <Modal
          footer={null}
          title="Thêm công việc"
          open={isModalOpen}
          // onOk={handleOk}
          onCancel={() => {
            setIsModalOpen(false);
          }}
        >
          <FormAddJob
            handleCloseModal={() => {
              setIsModalOpen(false);
            }}
            layDanhSachCongViec={layDanhSachCongViec}
          />
        </Modal>
      </div>
    </div>
  );
};

export default ManagerJob;
