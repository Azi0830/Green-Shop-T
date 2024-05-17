import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Carousel,
  Form,
  Input,
  InputNumber,
  Modal,
  Skeleton,
  Switch,
  Upload,
} from "antd";
const { Meta } = Card;

const FormDisabledDemo = () => {
  const [modal, setModal] = useState(false);
  const [flowers, setFlowers] = useState([]);

  //skeletonga harakat
  const [loading, setLoading] = useState(true);
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
  // }, []);

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
    console.log(values);

    const shouldUpload = {
      title: values.title,
      price: values.price,
      main_image: values.main_image.file.response.image_url.url,
      discount: false,
      discount_price: "0",
      detailed_images: [
        "https://www.coartsinnovation.com/wp-content/uploads/2021/05/Artificial-Topiary-CAJM-7136.png",
        "https://www.coartsinnovation.com/wp-content/uploads/2021/05/Artificial-Topiary-CAJM-7136.png",
        "https://cdn11.bigcommerce.com/s-2mpfm/images/stencil/640w/products/169512/743847/5965__41958.1630728740.jpg?c=2",
        "https://cdn11.bigcommerce.com/s-2mpfm/images/stencil/640w/products/169089/743279/5493__27309.1630683935.jpg?c=2",
      ],
      rate: 0,
      views: 0,
      tags: [],
      comments: [],
      short_description: "short_description",
      description: "description",
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
              label="Uplate"
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
                <div key={_id} className="group h-[800px]">
                  <Card
                    loading={loading}
                    key={_id}
                    hoverable
                    style={{
                      width: 450,
                    }}
                    cover={
                      <img
                        className="flex group-hover:hidden"
                        alt="example"
                        src={main_image}
                      />
                    }
                  >
                    {/* corousel ishlamayabdi  */}
                    <div className="flex hidden group-hover:flex">
                      <Carousel autoplay>
                        <div className="w-full h-[300px] bg-lime-500">
                          <img src={detailed_images[1]} alt="carousel img" />
                          <h1>hello</h1>
                        </div>
                        <div className="w-full h-[300px] bg-lime-500">
                          {" "}
                          <img src={detailed_images[1]} alt="carousel img" />
                          <h1>salom</h1>
                        </div>
                        <div className="w-full h-[300px] bg-lime-500">
                          {" "}
                          <img src={detailed_images[2]} alt="carousel img" />
                        </div>
                        <div className="w-full h-[300px] bg-lime-500">
                          {" "}
                          <img src={detailed_images[3]} alt="carousel img" />
                        </div>
                      </Carousel>
                    </div>
                    <Meta title={title} description={short_description} />
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
