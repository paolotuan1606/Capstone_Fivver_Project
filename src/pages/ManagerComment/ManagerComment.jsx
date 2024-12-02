import { Avatar, Button, Modal, Popconfirm, Table, Input } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { NotificationContext } from "../../App";
import { BinhLuanService } from "../../services/binhLuan.service";

const ManagerComment = () => {
  const handleNotification = useContext(NotificationContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listComment, setListComment] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Fetch list of comments
  const layDanhSachBinhLuan = () => {
    BinhLuanService.getBinhLuan()
      .then((res) => {
        setListComment(res.data.content); // Update state with the fetched data
      })
      .catch((err) => {
        console.log(err);
        handleNotification(
          "error",
          err.response?.data?.content || "Error fetching comments"
        );
      });
  };

  // Handle adding a new comment (You can update it as per your actual logic)
  const handleAddComment = () => {
    if (newComment.trim()) {
      BinhLuanService.themBinhLuan({ noiDung: newComment }) // Make sure to add the correct payload
        .then((res) => {
          handleNotification("success", res.data.message);
          setIsModalOpen(false); // Close the modal
          setNewComment(""); // Clear the input
          layDanhSachBinhLuan(); // Re-fetch the comments
        })
        .catch((err) => {
          console.log(err);
          handleNotification(
            "error",
            err.response?.data?.content || "Error adding comment"
          );
        });
    }
  };

  // Columns for the comment table
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
      title: "Mã người bình luận",
      dataIndex: "maNguoiBinhLuan",
      key: "4",
    },
    {
      title: "Ngày bình luận",
      dataIndex: "ngayBinhLuan",
      key: "5",
    },
    {
      title: "Nội dung",
      dataIndex: "noiDung",
      key: "6",
    },
    {
      title: "Sao bình luận",
      dataIndex: "saoBinhLuan",
      key: "7",
    },
    {
      title: "Hành động",
      key: "6",
      render: (text, record, index) => {
        return (
          <div className="space-x-3 md:grid md:grid-cols-2">
            <Popconfirm
              title="Xóa bình luận"
              description="Bạn có chắc muốn xóa bình luận này không?"
              onConfirm={() => {
                BinhLuanService.xoaBinhLuan(record.id)
                  .then((res) => {
                    console.log(res);
                    layDanhSachBinhLuan(); // Re-fetch the comments
                    handleNotification("success", res.data.message);
                  })
                  .catch((err) => {
                    console.log(err);
                    handleNotification(
                      "error",
                      err.response?.data?.content || "Error deleting comment"
                    );
                  });
              }}
              onCancel={() => {}}
              okText="Yes"
              cancelText="No"
            >
              <Button
                danger
                className="hover:!bg-red-500 hover:!text-white hover:!border-red-500"
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
    layDanhSachBinhLuan();
  }, []);

  return (
    <div>
      <div className="space-y-3">
        <h1 className="font-bold text-3xl">
          Danh sách bình luận trên hệ thống
        </h1>
        <Button
          onClick={() => setIsModalOpen(true)}
          size="large"
          className="bg-green-500 text-white hover:!text-green-500 hover:!border-green-500"
        >
          Thêm bình luận
        </Button>
        <Table dataSource={listComment} columns={columns} rowKey="id" />
      </div>

      <Modal
        title="Thêm bình luận"
        visible={isModalOpen}
        onOk={handleAddComment}
        onCancel={() => setIsModalOpen(false)}
        okText="Thêm"
        cancelText="Hủy"
      >
        <Input.TextArea
          rows={4}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Nhập nội dung bình luận"
        />
      </Modal>
    </div>
  );
};

export default ManagerComment;
