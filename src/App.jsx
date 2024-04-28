import { Button, Carousel, Pagination, Select, Slider, Space } from "antd";
import "./style.css";
import { Cart, Categorie, Find, Out } from "./cart";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function App() {
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
        <div className="flex-1">
          <Button className="button" type="primary">
            Login
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
                Prise:{" "}
                <span class="font-bolt text-[#45A358]">
                  "77" "$- `" "555" "$- `"
                </span>{" "}
                ==$0
              </p>
              <Button type="primary" className="button mt-5">
                Fiter
              </Button>
            </div>
            <div className="mt-8">
              <strong>Size</strong>
              <Categorie p="Small" n="(119)" />
              <Categorie p="Medium" n="(86)" />
              <Categorie p="Large" n="(78)" />
            </div>
          </div>
          <div class="bg-gradient-to-r from-cyan-500 to-blue-500">
            <h1>Super Sale</h1>
            <h3>UP TO 75% OFF</h3>
            <img
              src="https://s3-alpha-sig.figma.com/img/5e3c/6700/3f4b62655ec5dd62c1a46641197d5bbf?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nkdYDLth9JlVS0n38aGpi-e02c~3tK0L-M4qWQ3CqHgUbgrbVyi3zvVkx4noiSz5TcXImhI8IWSsORjawpPMTm7~Ijn9-UpMaSdNShOLX~gXEtswurXt1umRyIkVrEbskC604701GdABYpzUqqeUavpkF8oo48SICVGZ0WJHxbrqVZl8-Mm7CiiE8O4J~0WgeeCYDH14tXwCqN0oDsr9owpXHNGS4nLAT-FX3fa4lmzTGpq~L4DBu~RxO8Kt9RTVaATUyCrX~wk4sYGpnJ1QrDMKor8XnDfbGmPYl7CxEIDvCFSMr2xrmOA09EHiOoWO4Zf0auXjmWkrdYVk-46UGg__"
              alt="sale flower"
            />
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
      <div class="flex">
        <Find
          img="https://s3-alpha-sig.figma.com/img/9531/c63d/3f618aefdf1ccb10a5aa0e2d00f45d0b?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EA9Gvy-a3rP0oM5S547iY9p-2cYCJkVmm-d1zd5j94y~88BebNIvrIrgc6iHf56T8lG5oNwHmKIqzE4E-wK~nMuJIa-3XoGjsCggBEgXWWdmht0ejPfgwwrrPMjVhGZsiUB~snV0BYsqMIsz7cMHsyEJZLdRv4xpAturPS4kJIM6oVvsZ9IRmDI8Uh6bpxSqSWrur~8nDHsmIyq4vQXJYqZv8etz3vomkWZw8xI5nd~sbe8F3xAmPt0SKXBWK4vVqyq65bd26XbLjoLleJ6r771k5-bTfNAoEj45WiybRyIXRByPB7-YEh3p~hZ0dh-5O8Y6TDARqpHrWzrGwLtbQQ__"
          text="SUMMER CACTUS & SYCCULENTS"
        />
        <Find
          img="https://s3-alpha-sig.figma.com/img/7c59/7aa9/1ee5df5d1fd65d8184246c0c9918f920?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iuYv6TrEIE3I3v8hQle5G4gQqQBYA6LcnG2KGUE5YhbtkyJJ~l6n7vYMRvdQrerM6yYAWYfvUPUYl4p-pcpJ~KIPe9hDndFpWfZVVW0X0GyD2o-gmbhA04G894iompGe4yvPxsBe~qZ6ZB9fjZTuhz-TAkeecNSk032m2NjZE8QdFZE4oWWP26Cf0sHDZ60XfhJzUsZ-Yp5Cq8SRuLUzoK8YeL0QZ1hFOGDnZ~PdXB~OueRmsqDcwLqTtudvcWuyQR3dAL3LDuO8X~JSm0UxeIbttDzjyAP2K7dCaXYfA0u1e-JfOccedaqJ8tE3yH72ao5IIid1N0gcTAV76Ei~kA__"
          text="STYLING TRENDS & MUCH MORE"
        />
      </div>
    </div>
  );
}

export default App;
