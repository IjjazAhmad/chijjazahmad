import React from "react";
import ProjectShowCase from "../../../components/ProjectShowCase/ProjectShowCase";
import PorfolioHero from "../../../components/PortfolioSection/PortfolioHero";
import images from "../../../images/index";
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
export default function Project() {
  return (
    <>
      <div className="portfolio pb-5">
        <PorfolioHero />
        <div className="container">
          <div className="row py-5">
            <div className="col-12 text-white">
              <span data-aos="fade-left">Who Am I ?</span>
              <h3
                data-aos="fade-left"
                className="fw-semibold fs-2 text-warning"
              >
                My Portfolio!
              </h3>
            </div>
            <ProjectShowCase projects={kalbosoft} />
            <ProjectShowCase projects={orderUk} />
          </div>
        </div>
      </div>
    </>
  );
}
