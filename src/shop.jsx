import { useEffect, useState } from "react";
import {
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
import { DashOutlined } from "@ant-design/icons";
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
  const [deelete, setDeelete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rate, setRate] = useState(3);

  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  //delete
  // const onDelete = (values) => {
  //   console.log(values);
  // };

  // const onDelete = (id) => {
  //   setData(data.filter((value) => value.id !== id));
  // };
  // const handleMenuClick = (key, id) => {
  //   if (key === "1") {
  //     onDelete(id);
  //   } else if (key === "2") {
  //     // Do something for edit action
  //   }
  // };

  //skeletonga
  // const onChange = (checked) => {
  //   setLoading(!checked);
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const responst = await fetch(
  //       "http://localhost:8080/api/flower/category/house-plants?access_token=64bebc1e2c6d3f056a8c85b7"
  //     );
  //     const data = await responst.json();
  //     setFlowers(data.data);
  //   };
  //   fetchData();

  //AI yozib berdi
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responst = await fetch(
          "http://localhost:8080/api/flower/category/house-plants?access_token=64bebc1e2c6d3f056a8c85b7"
        );
        const data = await responst.json();
        setFlowers(data.data);
      } catch (error) {
        console.error("Ma'lumotlarni yuklashda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

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
      detailed_image: detailedImages,
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
          "Content-type": "application/json",
        },

        body: JSON.stringify(shouldUpload),
      }
    );

    setModal(false);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        {/* <Switch
          checked={!loading}
          onChange={onChange}
          className="absolute top-2 left-3"
        /> */}
        <Modal
          okText="Create"
          title="Add flowers"
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
              label="Discount"
              name="discount_price"
              rules={[
                {
                  required: true,
                  message: "Please input your price",
                },
              ]}
            >
              <Switch />
            </Form.Item>
            <Form.Item
              label="Discount Price"
              name="discount_price"
              rules={[
                {
                  required: true,
                  message: "Please input your Discount Price",
                },
              ]}
            >
              <InputNumber />
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
              <Input />
            </Form.Item>
            <Form.Item
              label="Short_description"
              name="short_description"
              rules={[
                {
                  required: true,
                  message: "Please input your short_description",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Comments:"
              name="comments"
              rules={[
                {
                  required: true,
                  message: "Please input your comments",
                },
              ]}
            >
              <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
            </Form.Item>
            <Form.Item>
              <Button
                danger
                onClick={() => {
                  setModal(false);
                }}
              >
                Cansel
              </Button>
              <Button htmlType="submit">Create</Button>
            </Form.Item>
          </Form>
        </Modal>

        <div className="absolute top-2 right-2">
          <Button
            onClick={() => {
              openModal();
            }}
          >
            Add
          </Button>
        </div>
        <div className="flex flex-col gap-[30px] mt-[20px]">
          {loading ? (
            <Skeleton className="w-[300px] h-96" avatar active />
          ) : (
            flowers.map(
              ({
                _id,
                main_image,
                title,
                short_description,
                detailed_images,
              }) => (
                <div key={_id} className="h-[800px] flex gap-[50px]">
                  <Card
                    loading={loading}
                    key={_id}
                    hoverable
                    style={{
                      width: 450,
                    }}
                    cover={
                      <div>
                        <div>
                          <img alt="example" src={main_image} />{" "}
                        </div>
                        <div>
                          <Carousel>
                            {detailed_images.map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                alt={`detailed_image${index + 1}`}
                              />
                            ))}
                          </Carousel>
                        </div>
                      </div>
                    }
                  >
                    <Meta title={title} description={short_description} />
                    <Flex gap="middle" vertical className="mt-4">
                      <Rate tooltips={desc} onChange={setRate} rate={rate} />
                      {rate ? <span>{desc[rate - 1]}</span> : null}
                    </Flex>
                    {/* <Button
                      key={_id}
                      onClick={({ _id }) => {
                        onDelete();
                      }}
                    >
                      delete
                    </Button> */}
                    {/* delete */}
                    {/* <Dropdown
                      overlay={
                        <Menu
                          onClick={({ key }) => handleMenuClick(key, value.id)}
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
                    </Dropdown> */}
                  </Card>
                </div>
              )
            )
          )}
        </div>
      </div>
    </>
  );
};
export default FormDisabledDemo;
