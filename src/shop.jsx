import { useEffect, useState } from "react";
import { Button, Card, Form, Input, InputNumber, Modal, Upload } from "antd";
const { Meta } = Card;

const FormDisabledDemo = () => {
  const [modal, setModal] = useState(false);
  const [flowers, setFlowers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const responst = await fetch(
        "http://localhost:8080/api/flower/category/house-plants?access_token=64bebc1e2c6d3f056a8c85b7"
      );
      const data = await responst.json();
      setFlowers(data.data);
    };
    fetchData();
  }, []);

  const openModal = () => {
    setModal(true);
  };
  //   const handleOk = () => {
  //     setModal(false);
  //   };
  const handleCancel = () => {
    setModal(false);
  };

  const onFinish = (value) => {
    console.log(value);
    setModal(false);
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <Modal
          okText="Create"
          title="Rasmni joylang"
          open={modal}
          //   onOk={handleOk}
          onCancel={handleCancel}
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
              label="Uplate"
              name="main-image"
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
          {flowers.map(({ _id, main_image, title, short_description }) => (
            <Card
              key={_id}
              hoverable
              style={{
                width: 400,
              }}
              cover={<img alt="example" src={main_image} />}
            >
              <Meta title={title} description={short_description} />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
export default FormDisabledDemo;
