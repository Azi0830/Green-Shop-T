import { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Carousel,
  Dropdown,
  Flex,
  Form,
  Input,
  InputNumber,
  Menu,
  Modal,
  Rate,
  Skeleton,
  Space,
  Switch,
  Upload,
} from "antd";
import { DashOutlined, EditOutlined, SettingOutlined } from "@ant-design/icons";
const { Meta } = Card;
const { TextArea } = Input;

const items = [
  {
    label: "DELETE",
    key: "1",
  },
  {
    label: "PUT",
    key: "2",
  },
];

const FormDisabledDemo = () => {
  const [modal, setModal] = useState(false);
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rate, setRate] = useState(3);
  const [setting, setSetting] = useState(false);
  const [viewFlower, setViewFlower] = useState(null);

  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8080/api/flower/category/house-plants?access_token=64bebc1e2c6d3f056a8c85b7"
      );

      const data = await response.json();

      setTimeout(() => {
        setFlowers(data.data);
        setLoading(false);
      }, 1000);
    };

    setModal(false);
    fetchData();
  }, []);

  const openModal = () => {
    setModal(true);
  };

  const onFinish = async (values) => {
    const detailedImages = [
      values.detailed_image1.file.response.image_url.url,
      values.detailed_image2.file.response.image_url.url,
      values.detailed_image3.file.response.image_url.url,
      values.detailed_image4.file.response.image_url.url,
    ];

    console.log(values);

    const shouldUpload = {
      title: values.title,
      price: values.price,
      main_image: values.main_image.file.response.image_url.url,
      discount: false,
      discount_price: "0",
      detailed_images: detailedImages,
      rate: 0,
      views: values.rate,
      tags: [],
      comments: [],
      short_description: values.short_description,
      description: values.description,
    };

    await fetch(
      "http://localhost:8080/api/flower/category/house-plants?access_token=64bebc1e2c6d3f056a8c85b7",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0YzAyZDEwMzIwNjk5ODJkYmJhOTRlZiIsIm5hbWUiOiJUZXN0Iiwic3VybmFtZSI6IlRlc3RvdiIsInBhc3N3b3JkIjoidGVzdF90ZXN0IiwicGVybWlzc2lvbiI6eyJjcmVhdGUiOmZhbHNlLCJ1cGRhdGUiOmZhbHNlLCJkZWxldGUiOmZhbHNlLCJyZWFkIjp0cnVlfSwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsInVzZXJfdHlwZSI6Im9ic2VydmVyIiwiY3JlYXRlX3Bvc3RfbGltaXQiOjAsImNyZWF0ZV9hY2NvdW50X2xpbWl0IjowLCJjcmVhdGVfcGxhbnRfbGltaXQiOjAsImhhc2h0YWdzIjpbXSwid2lzaGxpc3QiOltdLCJjcmVhdGVkX2F0IjoiMjAyMy0wNy0yNVQyMDoxNDowOC4wNDhaIiwiX192IjowfSwiaWF0IjoxNjkwMzE2MjY3fQ.Lwf1q47UoD5eUzFp4IXjgCD05xvnDrojZ5lST9mrMfc",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shouldUpload),
      }
    );

    //inputni tozalash
    // event.target[0].value = "";
    // event.target[1].value = "";
    // event.target[2].value = "";

    setFlowers([...flowers, shouldUpload]);

    setModal(false);
  };

  //delete
  const onDelete = (_id) => {
    setFlowers(flowers.filter((value) => value._id !== _id));
  };

  const handleMenuClick = ({ key }, _id) => {
    if (key === "1") {
      onDelete(_id);
    } else if (key === "2") {
      // Do something for edit action
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <Modal
          okText="Create"
          title="Add"
          open={modal}
          onOk={() => setModal(false)}
          onCancel={() => setModal(false)}
          footer={false}
        >
          <Form onFinish={onFinish}>
            <Form.Item
              label="Title"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input your title",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Main Image"
              name="main_image"
              rules={[
                {
                  required: true,
                  message: "Please upload your image",
                },
              ]}
            >
              <Upload
                name="image"
                action={
                  "http://localhost:8080/api/upload?access_token=64bebc1e2c6d3f056a8c85b7"
                }
              >
                <Button>Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label="1 Detailed Image"
              name="detailed_image1"
              rules={[
                {
                  required: true,
                  message: "Please upload your detailed_image1",
                },
              ]}
            >
              <Upload
                name="image"
                action={
                  "http://localhost:8080/api/upload?access_token=64bebc1e2c6d3f056a8c85b7"
                }
              >
                <Button>Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label="2 Detailed Image"
              name="detailed_image2"
              rules={[
                {
                  required: true,
                  message: "Please upload your detailed_image2",
                },
              ]}
            >
              <Upload
                name="image"
                action={
                  "http://localhost:8080/api/upload?access_token=64bebc1e2c6d3f056a8c85b7"
                }
              >
                <Button>Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label="3 Detailed Image"
              name="detailed_image3"
              rules={[
                {
                  required: true,
                  message: "Please upload your detailed_image3",
                },
              ]}
            >
              <Upload
                name="image"
                action={
                  "http://localhost:8080/api/upload?access_token=64bebc1e2c6d3f056a8c85b7"
                }
              >
                <Button>Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label="4 Detailed Image"
              name="detailed_image4"
              rules={[
                {
                  required: true,
                  message: "Please upload your detailed_image4",
                },
              ]}
            >
              <Upload
                name="image"
                action={
                  "http://localhost:8080/api/upload?access_token=64bebc1e2c6d3f056a8c85b7"
                }
              >
                <Button>Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label="Price"
              name="price"
              rules={[
                {
                  required: true,
                  message: "Please input your price",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="Short Description"
              name="short_description"
              rules={[
                {
                  required: true,
                  message: "Please input your short_description",
                },
              ]}
            >
              <TextArea />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input your description",
                },
              ]}
            >
              <TextArea />
            </Form.Item>
            <Form.Item>
              <Button onClick={() => setModal(false)}>Censel</Button>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <div className="m-6 mb-4 fixed">
        <Button onClick={openModal}>Add</Button>
      </div>
      {loading ? (
        <Skeleton active />
      ) : (
        flowers.map(
          ({ _id, main_image, title, short_description, detailed_images }) => (
            <div
              key={_id}
              className="flex gap-[50px] items-center justify-center"
            >
              <div>
                <Modal
                  title="Information"
                  open={setting}
                  onOk={() => setSetting(false)}
                  onCancel={() => setSetting(false)}
                  footer={[
                    <Button
                      key="close"
                      onClick={() => setViewModalVisible(false)}
                    >
                      {" "}
                      Close
                    </Button>,
                  ]}
                >
                  {viewFlower && (
                    <>
                      <h3>Title: {viewFlower.title}</h3>
                      <p>Description: {viewFlower.description}</p>
                      <p>Price: {viewFlower.price}</p>
                      <p>Discount: {viewFlower.discount ? "Yes" : "No"}</p>
                      <p>Discount Price: {viewFlower.discount_price}</p>
                      <p>Short Description: {viewFlower.short_description}</p>
                      <Carousel>
                        {viewFlower.detailed_images.map((image, index) => (
                          <div key={index}>
                            <img
                              src={image}
                              alt={`detail ${index}`}
                              style={{ width: "100%" }}
                            />
                          </div>
                        ))}
                      </Carousel>
                    </>
                  )}
                </Modal>
              </div>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <Carousel autoplay>
                    <div>
                      <img alt="example" src={main_image} />
                    </div>
                    {detailed_images.map((image, index) => (
                      <div key={index}>
                        <img alt="example" src={image} />
                      </div>
                    ))}
                  </Carousel>
                }
                actions={[
                  <SettingOutlined
                    onClick={() => {
                      setSetting(true);
                      setViewFlower({
                        _id,
                        main_image,
                        title,
                        short_description,
                        detailed_images,
                      });
                    }}
                    key="setting"
                  />,
                  <EditOutlined key="edit" />,
                  <Dropdown
                    overlay={
                      <Menu
                        onClick={({ key }) => handleMenuClick({ key }, _id)}
                      >
                        {items.map((item) => (
                          <Menu.Item key={item.key}>{item.label}</Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["click"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Menu
                        <DashOutlined />
                      </Space>
                    </a>
                  </Dropdown>,
                ]}
              >
                <Meta title={title} description={short_description} />
                <Flex gap="middle" vertical className="mt-4">
                  <Rate tooltips={desc} onChange={setRate} rate={rate} />
                </Flex>
              </Card>
            </div>
          )
        )
      )}
    </div>
  );
};

export default FormDisabledDemo;
