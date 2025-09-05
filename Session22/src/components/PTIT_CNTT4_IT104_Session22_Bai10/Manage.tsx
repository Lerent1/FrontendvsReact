import React from "react";
import { Layout, Menu, Table, Button, Space, Input, DatePicker, Radio, Pagination, Checkbox, } from "antd";
import { UserOutlined, SettingOutlined, AppstoreOutlined, EditOutlined, DeleteOutlined, EyeOutlined, } from "@ant-design/icons";

const { Sider, Content } = Layout;
const { RangePicker } = DatePicker;

interface User {
  key: number;
  name: string;
  date: string;
  photo: string;
}

const data: User[] = [
  { 
    key: 1, 
    name: "Jssa Jas", 
    date: "09 Apr 2021", 
    photo: "" 
    },
    { 
        key: 2, 
        name: "Pauline Jas", 
        date: "26 Jan 2021", 
        photo: "" 
    },
    { 
        key: 3, 
        name: "Sherilyn Metzel", 
        date: "27 Jan 2021", 
        photo: "" 
    },
];

export default function Manage() {
  const columns = [
    {
      title: "",
      dataIndex: "checkbox",
      render: () => <Checkbox />,
    },
    {
      title: "Photo",
      dataIndex: "photo",
      render: () => <div className="w-6 h-6 bg-gray-200" />,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <Space>
          <Button icon={<EyeOutlined />} />
          <Button icon={<EditOutlined />} />
          <Button danger icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <Layout>
      <Sider theme="light" width={200}>
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            Overview
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            CRUD
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Content style={{ padding: "20px" }}>
          <div className="bg-white p-4 rounded shadow-md">
            <Table columns={columns} dataSource={data} pagination={false} bordered/>
            <div className="flex justify-center mt-4">
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </div>
        </Content>

        <Sider theme="light" width={250} style={{ padding: "20px" }}>
          <Button type="primary" block style={{ marginBottom: "20px" }}>
            New User
          </Button>

          <div className="mb-4">
            <p>
              All/32 <span className="text-blue-500 ml-2">Active/16</span>
            </p>
            <p>Selected/0</p>
          </div>

          <div className="mb-4">
            <p>Date from - to:</p>
            <RangePicker />
          </div>

          <div className="mb-4">
            <p>Search by Name:</p>
            <Input placeholder="Name" />
          </div>

          <div>
            <p>Status:</p>
            <Radio.Group defaultValue="any">
              <Radio value="disabled">Disabled</Radio>
              <Radio value="active">Active</Radio>
              <Radio value="any">Any</Radio>
            </Radio.Group>
          </div>
        </Sider>
      </Layout>
    </Layout>
  );
}