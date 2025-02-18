import React from "react";
import images from "../../images";
import ProjectShowCase from "../ProjectShowCase/ProjectShowCase";
const kalbosoft = [
  {
    title: "Kalbosoft WebSite Home Page",
    description:
      "I built this kalbosoft Home Page website using next js, tailwind css. It's a full-stack application that allows users to create, read, update, and delete products, as well as manage their orders.",
    img: images.kalbosoft_1,
    category: "Agency Website",
    duration: "1-20 Days",
    cost: "$300-$350 Days",
  },
  {
    title: "Kalbosoft WebSite About Page",
    description:
      "I built this kalbosoft About Page website using next js, tailwind css. It's a full-stack application that allows users to create, read, update, and delete products, as well as manage their orders.",
    img: images.kalbosoft_2,
    category: "Agency Website",
    duration: "1-20 Days",
    cost: "$300-$350 Days",
  },
  {
    title: "Kalbosoft WebSite Cases Page",
    description:
      "I built this kalbosoft Cases Page website using next js, tailwind css. It's a full-stack application that allows users to create, read, update, and delete products, as well as manage their orders.",
    img: images.kalbosoft_3,
    category: "Agency Website",
    duration: "1-20 Days",
    cost: "$300-$350 Days",
  },
];
const orderUk = [
  {
    title: "Order.Uk WebSite Home Page",
    description:
      "I built this Order.Uk Home Page website using next js, tailwind css. It's a full-stack application that allows users to create, read, update, and delete products, as well as manage their orders.",
    img: images.orderUk_1,
    category: "Food Website",
    duration: "1-20 Days",
    cost: "$300-$350 Days",
  },
  {
    title: "Order.Uk WebSite Resturant Page",
    description:
      "I built this Order.Uk Resturant Page website using next js, tailwind css. It's a full-stack application that allows users to create, read, update, and delete products, as well as manage their orders.",
    img: images.orderUk_2,
    category: "Food Website",
    duration: "1-20 Days",
    cost: "$300-$350 Days",
  },
  {
    title: "Order.Uk WebSite Order Page",
    description:
      "I built this Order.Uk Order Page website using next js, tailwind css. It's a full-stack application that allows users to create, read, update, and delete products, as well as manage their orders.",
    img: images.orderUk_3,
    category: "Food Website",
    duration: "1-20 Days",
    cost: "$300-$350 Days",
  },
];
export default function HomePortfolio() {
  return (
    <div className="container rounded-3 py-3 bg-secondary portfolio">
      <div className="text-center text-white py-4">
        <span data-aos="fade-left">Who Am I ?</span>
        <h3 className="text-warning">Lastest Projects</h3>
      </div>
      <ProjectShowCase projects={kalbosoft} />
      <ProjectShowCase projects={orderUk} />
    </div>
  );
}
