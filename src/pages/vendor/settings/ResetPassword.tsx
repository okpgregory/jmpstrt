import React, { useState } from "react";
import { Form, Input, Button, Typography, Modal } from "antd";
import { UnlockOutlined } from "@ant-design/icons";

const { Title } = Typography;

const ResetPassword: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    setIsModalVisible(true); 
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleOk = () => {
    setIsModalVisible(false); 
  };

  return (
    <div className="rounded-lg">
      <Title level={4} className="text-[#303030]">
        Password Reset
      </Title>
      <p className="text-[14px] pb-2 text-[#303030]">
        Manage your account password
      </p>
      <Form
        name="password_reset"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item
          name="newPassword"
          label="New Password"
          rules={[
            { required: true, message: "Please input your new password!" },
          ]}
        >
          <Input.Password
            placeholder="New Password"
            prefix={<UnlockOutlined />}
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm New Password"
          dependencies={["newPassword"]}
          rules={[
            { required: true, message: "Please confirm your new password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Confirm New Password"
            prefix={<UnlockOutlined />}
          />
        </Form.Item>

        <Form.Item>
          <div className="flex justify-end">
            <Button
              htmlType="submit"
              className="bg-[#EFA005] border-none hover:border hover:border-[#31005C] hover:text-[#EFA005] px-10 lg:px-16 text-white py-[8px] lg:py-2 text-sm lg:text-base font-normal"
            >
              Update
            </Button>
          </div>
        </Form.Item>
      </Form>

      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleOk}
        footer={[
          <Button key="ok"  onClick={handleOk} block className="bg-[#EFA005] hover:bg-slate-300">
            OK
          </Button>,
        ]}
      >
      <div className="flex flex-col justify-center items-center">
      <img src="/success.svg" alt="" className="text-cente "/>
         <Title level={4} className="text-[#303030] text-center">
        Password Reset
      </Title>
      <p className="text-[14px] pb-2 text-[#303030] text-center">
      You have successfully reset your password.
      </p>
      </div>
      </Modal>
    </div>
  );
};

export default ResetPassword;
