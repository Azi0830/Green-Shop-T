import { Button, Carousel, Pagination, Select, Slider, Space } from "antd";
import "./style.css";
import { Cactus, Cart, Categorie, Find, Media, Our, Out } from "./cart";
import { useState } from "react";
import {
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const App = () => {
  // shu funksiyaga tushunmadim...???
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="w-4/5 m-auto">
      <div className="flex items-center h-20">
        <div className="flex-1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            alt="grenshop img"
          />
        </div>
        <div className="flex-1 gap-50 flex flex-row gap-12">
          <h3>Home</h3>
          <h3>Shop</h3>
          <h3>Plant Care</h3>
          <h3>Blogs</h3>
        </div>
        <div className="flex-1 flex gap-[30px] items-center justify-end">
          <SearchOutlined className="size" />
          <ShoppingCartOutlined className="size" />
          <Button className="button flex items-center" type="primary">
            <LoginOutlined className="size" /> Login
          </Button>
        </div>
      </div>
      <Carousel autoplay>
        <div>
          <Cart
            text="Let’s Make a Better"
            button="SHOP NOW"
            img="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ILMwYQqsYTucUF6Fdy9-pQGyxLaCRsejqeFyTU9C2tUnA9RaAqN5xKCBPBtF2j7Y~zUQV73xF6uNLWJiLAhZAxy29m6Ldh002Y9kfEa8IMIZl-iH9wZsnWjT8rGC3F1QTi0IQ354wKE7qkDYMSuG0EEB9KwKxIvqLKAWcGJkzal3cEB32bSVY3wxU2LeJwpUrnQkfZrQdALKEOqnKGrU8XNJ7ypnv2B3PNpsDNDwBWnE-3EB5iWLTeRVlaDREy-RR4AePrrEZSYZRBti7jx~saFs2UBZV0SeqYr8MCVsvtbujX5d9EnQtd93cKOX1a4pN62yLwz--gqrJhL2vdaO6w__"
          />
        </div>{" "}
        <div>
          <Cart
            text="Let’s Make a Better"
            button="LET'S START"
            img="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d"
          />
        </div>{" "}
        <div>
          <Cart
            text="LET'S OBSERVE A BETTER "
            button="GET CRIDETS"
            img="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662"
          />
        </div>{" "}
      </Carousel>
      <div className="flex mt-8">
        <div className="w-1/5">
          <div className="bg-slate-100 px-5">
            <div className="py-4">
              <strong>Categories</strong>
              <Categorie p="House plants" n="(33)" />
              <Categorie p="Potter plants" n="(12)" />
              <Categorie p="Seeds" n="(65)" />
              <Categorie p="Small Plants" n="(39)" />
              <Categorie p="Big plants" n="(29)" />
              <Categorie p="Succulets" n="(17)" />
              <Categorie p="Tettariums" n="(19)" />
              <Categorie p="Gardineng" n="(13)" />
              <Categorie p="Accessories" n="(18)" />
            </div>
            <div>
              <div>
                <Slider
                  max={1000}
                  range={{
                    draggableTrack: true,
                  }}
                  defaultValue={[0, 1000]}
                />
              </div>
              <p class="font-normal">
                Prise: <span class="font-bolt text-[#45A358]">{"77"}</span>{" "}
              </p>
              <div class="flex items-center gap-[20px]">
                <Button type="primary" className="button mt-5">
                  Fiter
                </Button>
                <p>10$ - 729$</p>
              </div>
            </div>
            <div className="mt-8">
              <strong>Size</strong>
              <Categorie p="Small" n="(119)" />
              <Categorie p="Medium" n="(86)" />
              <Categorie p="Large" n="(78)" />
            </div>
          </div>
          <div
            class="
           text-center bg-gradient-to-t from-lime-100 to-lime-10"
          >
            <h1 class="text-lime-500 text-4xl p-2 font-normal">Super Sale</h1>
            <strong class="text-xl">UP TO 75% OFF</strong>
            <img src="flower.png" alt="sale flower" />
          </div>
        </div>
        <div className="w-4/5 pl-12">
          <div className="flex justify-between">
            <div className="flex gap-9">
              {" "}
              <h3 class="hover:text-emerald-600 hover:border-b-4 border-emerald-600">
                All Plants
              </h3>
              <h3 class="hover:text-emerald-600 hover:border-b-4 border-emerald-600">
                New Arrivals
              </h3>
              <h3 class="hover:text-emerald-600 hover:border-b-4 border-emerald-600">
                Sale
              </h3>
            </div>
            <div>
              <div>
                SORT BY:
                <Space wrap>
                  <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                      { value: "jack", label: "Default Sorting" },
                      { value: "lucy", label: "Lucy" },
                      { value: "Yiminghe", label: "yiminghe" },
                    ]}
                  />
                </Space>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-y-16">
            <div className="flex gap-x-10">
              <Out
                name="Barberton Daisy"
                img="https://s3-alpha-sig.figma.com/img/586c/8523/1ab58d21463d86aa3768f5c6c78f8a1f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F2N5BIDStxkQFegnJUebRpADHOQXYJstQtxI5q3mvv0rMUPKUJdpZTCIYWdq5Uzq6GglNOV9ibIKZtIAaxmul-uSjRwsxvfdnWkH5OhUSSTqjcUZN~NJkHTKP2xKLLsAitgSOc2AIg79t6Eaz606d4Alh3FcxvQxiBHvO7KyJzBsDgmQ4eqRWxCnBpSSkV3IyKnAnfTocE79FhPqrDPiTB1P~OCeeN1K9JC2DoVWZmrWDlKXd68ksHJaqm3gXxFcTBvlLwnBkxRssWCqQwgbOJD2hOFNokB4uU1vA2F-w3bflPpXTVbRK~GFuNk6PSfVKlMyRGQgn3p6TiT0nUmRRA__"
              />
              <Out
                name="Angel Wing Begonia"
                img="https://s3-alpha-sig.figma.com/img/4826/f3a4/1a2148d881d8376b26471cced915b1bb?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=du9hPL4XSxqCEhaPe2XZGKqMIa-q-DPebUBPQ0ExggK~iQKIqyRK4ODRXiarS0a1p2w7eZUDgSWQMlpbbz~1wThgNPcxIJJEjoVsDF9HGHKO-9N8OD4gcufOO0XUcpRCOX6ce4pPu503RqCOqJGmcmPwKCxtVZr4-2Yqc5kGoB2h20qK~ZAsTPLiAIHplmh7S~kOnBaP4C-evOIK8233o-RzIsgCGAYz7NokDw35zc~-fRytGgcL5WLs9JwIXKMir6BHgaaJ0urGseFXraIiH8vNxiXcijkcRc4S3~dHqpAp0NDDIshOp2YSKTrMIxJUyjMsl-FHTG8yNWM2NjhQFw__"
              />
              <Out
                sale="13% off"
                name="African Violet"
                img="https://s3-alpha-sig.figma.com/img/7c59/7aa9/1ee5df5d1fd65d8184246c0c9918f920?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iuYv6TrEIE3I3v8hQle5G4gQqQBYA6LcnG2KGUE5YhbtkyJJ~l6n7vYMRvdQrerM6yYAWYfvUPUYl4p-pcpJ~KIPe9hDndFpWfZVVW0X0GyD2o-gmbhA04G894iompGe4yvPxsBe~qZ6ZB9fjZTuhz-TAkeecNSk032m2NjZE8QdFZE4oWWP26Cf0sHDZ60XfhJzUsZ-Yp5Cq8SRuLUzoK8YeL0QZ1hFOGDnZ~PdXB~OueRmsqDcwLqTtudvcWuyQR3dAL3LDuO8X~JSm0UxeIbttDzjyAP2K7dCaXYfA0u1e-JfOccedaqJ8tE3yH72ao5IIid1N0gcTAV76Ei~kA__"
              />
            </div>
            <div className="flex gap-x-10">
              <Out
                name="Beach Spider Lily"
                img="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ILMwYQqsYTucUF6Fdy9-pQGyxLaCRsejqeFyTU9C2tUnA9RaAqN5xKCBPBtF2j7Y~zUQV73xF6uNLWJiLAhZAxy29m6Ldh002Y9kfEa8IMIZl-iH9wZsnWjT8rGC3F1QTi0IQ354wKE7qkDYMSuG0EEB9KwKxIvqLKAWcGJkzal3cEB32bSVY3wxU2LeJwpUrnQkfZrQdALKEOqnKGrU8XNJ7ypnv2B3PNpsDNDwBWnE-3EB5iWLTeRVlaDREy-RR4AePrrEZSYZRBti7jx~saFs2UBZV0SeqYr8MCVsvtbujX5d9EnQtd93cKOX1a4pN62yLwz--gqrJhL2vdaO6w__"
              />
              <Out
                name="Blushing Bromeliad"
                img="https://s3-alpha-sig.figma.com/img/9531/c63d/3f618aefdf1ccb10a5aa0e2d00f45d0b?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EA9Gvy-a3rP0oM5S547iY9p-2cYCJkVmm-d1zd5j94y~88BebNIvrIrgc6iHf56T8lG5oNwHmKIqzE4E-wK~nMuJIa-3XoGjsCggBEgXWWdmht0ejPfgwwrrPMjVhGZsiUB~snV0BYsqMIsz7cMHsyEJZLdRv4xpAturPS4kJIM6oVvsZ9IRmDI8Uh6bpxSqSWrur~8nDHsmIyq4vQXJYqZv8etz3vomkWZw8xI5nd~sbe8F3xAmPt0SKXBWK4vVqyq65bd26XbLjoLleJ6r771k5-bTfNAoEj45WiybRyIXRByPB7-YEh3p~hZ0dh-5O8Y6TDARqpHrWzrGwLtbQQ__"
              />
              <Out
                name="Aluminum Plant"
                img="https://s3-alpha-sig.figma.com/img/744c/96db/a60207fabc5a7d29f8801ecf6b4e2aed?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=COPFmn9jHFg7iGX2bpJhnzi3Ex8NsXLAcJILZXzf-IpWWBeDWLuw8mk~RTsmbmC83AJYEEjsJsDutFKiLhL8JVwFdF8a8743Qi5swW~iHYCeSZRdFMk4~LAhhkZcT1KKCA68PG4xuGi6tAUPK3J2kMX4eudI5eTomFm4RCQaob8qZo61eUkAzFhTMAyYyzDC-jWCqyEIb~eRKtEw-5xCFptC8VLJC9IWBV89dbn-8LxBZQkXaNQo11vG1LWkYHfS4l0iwAtt-lJCHL03IskC~XRBK67Veje8cFtij1N-SHngv4Oe4Sl1whfUAYNtQjqdoKsc8tsr03qlmlfv66Zd7w__"
              />
            </div>
            <div className="flex gap-x-10">
              <Out
                name="Bird's Nest Fern"
                img="https://s3-alpha-sig.figma.com/img/9957/e153/a59c050946e77e8fc7e11525e87c4678?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iAmpbRXFN5mwx7WwW4Gu5bVHBWp4NYaOXlAayo7RXcTS13CR1ovCvuMw2EgVLuAzYKuSHQlMtWAJjja9ZAL7gWEIKSKCEkB3r~2vQ7oznsMxOQSw8KJyY1BP2Me8bFNQ0YKXFz568qssicpFGxdp1Of9mgVu2xdFibY9TQCeGpUveI9ZBX3q-i1TjIkIpFKWZ3JhjjuZ07hQFiXvuEePyqISXY1vSUCjfEBXFKDT-UPBr6V-GY7mpRLL-c7lzEv15~8sy0zGdiZCEAesN5jwnfAMw45A4vUNWoykiwvMqz7nx9~Rfi08p00ho-mRhIGDdpwrw2JZ6heLw248u2JyNQ__"
              />
              <Out
                name="Broadleaf Lady Palm"
                img="https://s3-alpha-sig.figma.com/img/78e9/e6c1/90effae17498640571679183299f774e?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AYNIYJjx-cJb3pdmFa8jKOHuulrZJWgIuTTPK4wRX6Vg1DrrQT2kzkELRwJSOCsLWWWEusW12p3FXXkGwbUUjx831eWfuY5u~oF45b4HkbfFwYACcYmFYXPy36fzfUx8MQRS7d0GiyRXxlr8J-Eu3ITRPcIAdgNl~gzFUSyvpqJTYZXHzQu5u3DaP-dYocxOXAHOss0JtcBvgpCaFSww~h6YtdSgBYuQvqOHGBX84hh7SsmCLSMWu6U4GXP10lb5i0P9k9CuNdK3LmzFMv3uQiYbILP5jVc~J229kDBNuSCzu0xzDej6lkmjnYPy-wzRLBFGNfGw2uGtRJnskVKCJg__"
              />
              <Out
                name="Chinese Evergreen"
                img="https://s3-alpha-sig.figma.com/img/5219/e659/b8a1d488abd136ce27f86ab3da3ceb37?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RoH4ZWgiEZo0U~A52WUnU7VRu444DGcHu5GH2PNGvgdf1NP2oVOjhGVISrbM~UMOvd5QAg82eqbreQDjqMjvrsOL546a5Oh3cKS8fi1-K4NjnBNxYWV7~kgdWcRe5yDWg-AQKxwIwG0VJvXGjxI9EgNthCFMZthXKooSIScBULK2hDjp~4dSbJq-jVzNIvtl-gB2F9PSuNrh-9znGliXMbIt4fKHK~eZkULZqcxw15u5GIm-skblKqPvhQkrIqSHzmEjpbcTKSLZkRfaAvVomu7J3SgNb~~PsfC2pH7AdU42aBelzLK75Gx0wEQPz1Ph6Df4bJCrJWiPfTG8AfLQSg__"
              />
            </div>
          </div>
          <div class="m-32 flex justify-end">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
      <div class="flex gap-[28px]">
        <Find
          img="https://s3-alpha-sig.figma.com/img/9531/c63d/3f618aefdf1ccb10a5aa0e2d00f45d0b?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EA9Gvy-a3rP0oM5S547iY9p-2cYCJkVmm-d1zd5j94y~88BebNIvrIrgc6iHf56T8lG5oNwHmKIqzE4E-wK~nMuJIa-3XoGjsCggBEgXWWdmht0ejPfgwwrrPMjVhGZsiUB~snV0BYsqMIsz7cMHsyEJZLdRv4xpAturPS4kJIM6oVvsZ9IRmDI8Uh6bpxSqSWrur~8nDHsmIyq4vQXJYqZv8etz3vomkWZw8xI5nd~sbe8F3xAmPt0SKXBWK4vVqyq65bd26XbLjoLleJ6r771k5-bTfNAoEj45WiybRyIXRByPB7-YEh3p~hZ0dh-5O8Y6TDARqpHrWzrGwLtbQQ__"
          text="SUMMER CACTUS & SYCCULENTS"
        />
        <Find
          img="https://s3-alpha-sig.figma.com/img/7c59/7aa9/1ee5df5d1fd65d8184246c0c9918f920?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iuYv6TrEIE3I3v8hQle5G4gQqQBYA6LcnG2KGUE5YhbtkyJJ~l6n7vYMRvdQrerM6yYAWYfvUPUYl4p-pcpJ~KIPe9hDndFpWfZVVW0X0GyD2o-gmbhA04G894iompGe4yvPxsBe~qZ6ZB9fjZTuhz-TAkeecNSk032m2NjZE8QdFZE4oWWP26Cf0sHDZ60XfhJzUsZ-Yp5Cq8SRuLUzoK8YeL0QZ1hFOGDnZ~PdXB~OueRmsqDcwLqTtudvcWuyQR3dAL3LDuO8X~JSm0UxeIbttDzjyAP2K7dCaXYfA0u1e-JfOccedaqJ8tE3yH72ao5IIid1N0gcTAV76Ei~kA__"
          text="STYLING TRENDS & MUCH MORE"
        />
      </div>
      <div>
        <div className="text-center mt-32">
          <h1 class="font-bold text-3xl">Our Blog Posts</h1>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants.{" "}
          </p>
        </div>
        <div className="flex gap-10 mt-8">
          <Our
            img="https://s3-alpha-sig.figma.com/img/4f35/4de5/b3a1897ab9540ae4953f1e0f0ace9952?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ifCuvN0Snz8IvlGT8wpFAzB763ETcIoSpquVsB-jQhA1Qhj4tfU75Bq9zUV-bGObaZv~XZJ5o7VBzR-axN~aBX260ad1TIMLon1yfM0ggt7rPw7woPtZR-9MlrpLu8G9LN8nfsSj0yUUnvjlqmY3o5km00iI5Ng9AtksVPTBUccPgL8bSb7JIVQteM9GuZiZ414RWE8c99tBwgCpdgeKh~UNhatKc0wL612YEVzAlxW~aAp~LQ9oMZA8mauSB0ClR~2U4oHvqbcUDyupFd1pj4O1KfHpgdvdj8RUGQIbCOpXkrALH2RZW43SpI4vZJGloQMcOnj4yCzdHapBdJrQfA__"
            green="September 12 I Read in 6 minutes"
            strong="Cactus & Succulent Care Tips"
            p="Cacti are succulents are easy care plants for any home or patio."
          />
          <Our
            img="https://s3-alpha-sig.figma.com/img/5d6a/fe05/19b43ea40d6912ed9f6c86bde26ac437?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YEfRtFKJ0lHw3ml-l-j8o4CFL5Ecu9scxcgf8kFgvvQk9Kc6YSGQDwQ7gF-7b3TJ8lOk9zc36lJiFiie40477j2ol96FXt93zo7LJPEdcwwQPO2rvrrL3TlRcAjGjvHFB3qlPfVraYRRYXdZbzM-fc~A0RZUElAenLnCNscMw1fWUqybJf-6dmeu5v40ZoWca13SW2xJ7GQxXWqjyemip7wTOr~-4KDqByYLBHDMiBUemywCKr4GCTJJE4CfBsAHxoNpSNJIKOuFgjw-5Ie9C5VjWfGF-i5jl1sFapdsN9n8-ghFNjF-8PtMmonU4Xc0qrxa62eMpwqJI6s1Zl5qRA__"
            green="September 13  I Read in 2 minutes"
            strong="Top 10 Succulents for
Your Home"
            p="Best in hanging baskets. Prefers medium to high light."
          />
          <Our
            img="https://s3-alpha-sig.figma.com/img/708d/5ac3/4916119d54b3f3ce81cb3585303dc87b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CarTEg6rthLcUV7e3x1jboSIzpBMa674PNPKl78ZEP9~2X~Hq6rKLWkGaAbyLsheEU3odpqGDILJQFDhyLtP3NhTlVTt1KqxYv1jGR7HsbJxc0oakc-JEb62CtQx4QjdwV-mw70Dqm7Jy2Z1mImV-vEb3HaCeF0nlNjTqYTOlbzjVQqGVcHnMoUBOds1hRMzTK9gi-zZF6BKgL2lfEyeZnVOPjasSW4tRe25CuAx~W6DXilaaIUMgYmujNxWLZRWSJ3qRMWrjXzKc8skViJsvQXeeSvOGYiSq9XxE6-gFCsIoewai10y8lhgWwEhctCWFZNcEsY5r2WejkesorD4rQ__"
            green="September 15  I Read in 3 minutes"
            strong="Cacti & Succulent 
Care Tips"
            p="Cacti and succulents thrive in containers and because most are.."
          />
          <Our
            img="https://s3-alpha-sig.figma.com/img/76ec/a5ae/aad8a62909bb4bd3fb02922695ada788?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jecRJDCxoLr~kJfvnhL5eAcslFxXzZfzqIiFx0r687mi4GcZSH4vAJMu8S1iibO1oFtwp3h1zzdDUtHZYA0gPc98WBP9JxoTps4Aw1oMIAloe9R7qPjhyZJkvmpXB9GRuONdir4WTcAl0h8CoVOP2C7grq1LppfnbaSAuwGtNt-E4oSFbuP2tOFMcIRqUQhLTzf55~X-uP49YJbyGpY0pxDEIZ6g9E1KCN2ICtjqE~frfZo6rR-brL8DqyY~gYlkuOppAa8Hrd2lRdY6Cb2fL6a~wrPtJDGKjsCsKGXv1UssUh-L5inctle7lhxIXxgN7sUCQGwZIif9Y8hdRQXS5Q__"
            green="September 15  I Read in 2 minutes"
            strong="Best Houseplants 
Room by Room"
            p="The benefits of houseplants are endless. In addition to.."
          />
        </div>
      </div>
      <div class="mt-24 p-6 bg-slate-50">
        <div class="w-full flex">
          <div class="w-4/6 flex">
            <Cactus
              img="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_1.svg?alt=media&token=407c8917-880e-4c1d-a8a8-b377ff7cc61c"
              strong="Garden Care"
              p="We are an online plant shop offering a wide range of cheap and trendy plants."
            />
            <Cactus
              img="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_2.svg?alt=media&token=cc49dd7d-b040-4311-a0a3-310c0aba964a"
              strong="Plant Renovation"
              p="We are an online plant shop offering a wide range of cheap and trendy plants."
            />
            <Cactus
              img="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_1.svg?alt=media&token=407c8917-880e-4c1d-a8a8-b377ff7cc61c"
              strong="Watering Graden"
              p="We are an online plant shop offering a wide range of cheap and trendy plants."
            />
          </div>
          <div class="w-2/6">
            <strong class="text-base">
              Would you like to join newsletters?
            </strong>
            <div class="py-4">
              <input
                class="w-3/4 text-center h-[30px]"
                placeholder="enter your email address..."
                type="text"
              />
              <Button
                className="button rounded-none rounded-r-lg"
                type="primary"
              >
                Join
              </Button>
            </div>
            <p>
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!{" "}
            </p>
          </div>
        </div>
      </div>
      <div class="w-full h-20 bg-lime-50 flex items-center pr-44 pl-4">
        <div class="flex-1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            alt="grenshop img"
          />
        </div>
        <div class="flex-1 flex gap-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flocation.svg?alt=media&token=d600d0e4-aa9d-423d-8348-e3df90b195f3"
            alt="GPS icon"
          />
          <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
        </div>
        <div class="flex-1 flex gap-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Femail.svg?alt=media&token=8136c940-c139-486f-a6d3-be49bede2381"
            alt="button icon"
          />
          <p>contact@greenshop.com</p>
        </div>
        <div class="flex-1 flex gap-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fcall.svg?alt=media&token=3841a4f9-b499-4e8c-98d3-a05fe4edc39f"
            alt="tell icon"
          />
          <p>+88 01911 717 490</p>
        </div>
      </div>
      <div class="p-4 flex bg-slate-50">
        <div class="flex-1">
          <strong class="text-lg">My Account</strong>
          <div class=" flex flex-col gap-2 mt-2">
            <h3>My Account</h3>
            <h3>Address</h3>
            <h3>Wishlist</h3>
          </div>
        </div>
        <div class="flex-1">
          <strong class="text-lg">Categories</strong>
          <div class=" flex flex-col gap-2 mt-2">
            <h3>House Plants</h3>
            <h3>Potter Plants</h3>
            <h3>Seeds</h3>
            <h3>Smail Plants</h3>
            <h3>Accessories</h3>
          </div>
        </div>
        <div class="flex-1">
          <strong class="text-lg">Social Media</strong>
          <div class="flex gap-2 mb-4">
            <Media img="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffacebook.svg?alt=media&token=3db32f6e-a8c2-4dd2-829a-840b16fede49" />
            <Media img="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Finstagram.svg?alt=media&token=dff411c8-b4c4-451d-820e-3f6752290ff5" />
            <Media img="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ftwitter.svg?alt=media&token=9ab7ee69-e867-48b2-8d1c-978fd8d43835" />
            <Media img="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flinkedin.svg?alt=media&token=1ad547d5-0f83-4421-994e-6989dba5d0d7" />
            <Media img="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Funion.svg?alt=media&token=2ab668d7-f49d-4c46-ae87-d8d49ae0849f" />
          </div>
          <strong class="text-lg">We accept</strong>
          <img
            class="mt-4 cursor-pointer"
            src="https://s3-alpha-sig.figma.com/img/1e46/0c89/ee17b2b09a69f96d2552ed3b0b04ac05?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VixUASLcgTvQhOD7cqGcWKTl55E1Av7cg0kGkArv7wpKp0P4mEcvP3WT5294X0HykZxhthqfxOFWyK2LFaOk7cGLmWiEH9PZVBFTeQE7ygRKVhozUBzFjhvkWr-sLziAml~ksBtimjoFfQnwfe1yHno~03YnGC~WVkJXGTcQRSYdOtVMWMDA2UCLJWWcKwu3xPB~Z1B3~uq0i6KpGFDH2669EvRNj7gM99pzYMNkHX1NaYGLUEoQgxuiAti~6ep3P4sQq4BDwZuJyMTr7o5mCa6tiiZxHoEkkRuOs3x6b0pQyQ82E5cBkMTOWHcfng~8SubTeocYtg4Txm3dTPH--g__"
            alt="pay"
          />
        </div>
      </div>
      <div className="text-center cursor-pointer">
        <h3>© 2021 GreenShop. All Rights Reserved.</h3>
      </div>
    </div>
  );
  // }
};

export default App;
