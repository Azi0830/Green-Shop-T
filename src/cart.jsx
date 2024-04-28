import {
  ArrowRightOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const Cart = (props) => {
  return (
    <div className="flex font-sans bg-gradient-to-r from-slate-50 to-slate-100">
      <div className="flex-2 w-3/5 px-11 py-16">
        <p>Welcome to GreenShop</p>
        <h1 className="text-6xl uppercase scroll-my-2">
          {props.text} <span className="text-lime-600">Planet</span>
        </h1>
        <p className="w-4/5">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <Button className="mt-11" type="primary">
          {props.button}
        </Button>
      </div>
      <div className="flex-1 w-2/5 relative">
        <img src={props.img} alt="flover img" />
        <img
          className="w-32 absolute bottom-0"
          src="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ILMwYQqsYTucUF6Fdy9-pQGyxLaCRsejqeFyTU9C2tUnA9RaAqN5xKCBPBtF2j7Y~zUQV73xF6uNLWJiLAhZAxy29m6Ldh002Y9kfEa8IMIZl-iH9wZsnWjT8rGC3F1QTi0IQ354wKE7qkDYMSuG0EEB9KwKxIvqLKAWcGJkzal3cEB32bSVY3wxU2LeJwpUrnQkfZrQdALKEOqnKGrU8XNJ7ypnv2B3PNpsDNDwBWnE-3EB5iWLTeRVlaDREy-RR4AePrrEZSYZRBti7jx~saFs2UBZV0SeqYr8MCVsvtbujX5d9EnQtd93cKOX1a4pN62yLwz--gqrJhL2vdaO6w__"
          alt="flover img"
        />
      </div>
    </div>
  );
};

const Out = (props) => {
  return (
    <div className="relative flex-1 hover:border-t-2 mt-8 border-emerald-600">
      <div class="absolute bg-[#46a358] text-[#fff] top-2">{props.sale}</div>
      <div className="bg-slate-100">
        <img className="" src={props.img} alt="Flower" />
        <div className=" h-6 flex gap-2 justify-center block hover:hidden">
          <ShoppingCartOutlined />
          <HeartOutlined />
          <SearchOutlined />
        </div>
      </div>
      <div>
        <h4>{props.name}</h4>
        <h3 className="text-lime-600">$119.00</h3>
      </div>
    </div>
  );
};

const Categorie = (props) => {
  return (
    <div className="flex mt-6 justify-between">
      <p>{props.p}</p>
      <p>{props.n}</p>
    </div>
  );
};

const Find = (props) => {
  return (
    <div class="flex bg-slate-100 gap-2">
      <div className="flex-2">
        <img src={props.img} alt="find flower" />
      </div>
      <div className="flex-3 flex flex-col items-end pr-5 pt-5">
        <strong class="flex items-end">{props.text}</strong>
        <p class="flex items-end pt-2">
          We are an online plants shop offering a wide ranger of cheap and
          trendy plants
        </p>
        <Button className="button items-center" type="primory">
          Find More <ArrowRightOutlined />
        </Button>
      </div>
      <div class="w-64 h-64 border-solid rounded-full border-lime-500"></div>
    </div>
  );
};
export { Cart, Out, Categorie, Find };
