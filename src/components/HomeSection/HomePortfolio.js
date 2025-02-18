import React from "react";
import images from "../../images";
import ProjectShowCase from "../ProjectShowCase/ProjectShowCase";
const Ecom = [
  {
    title: "E-commerce",
    description:
      "I built this e-commerce website using React, Redux, and Firebase. It's a full-stack application that allows users to create, read, update, and delete products, as well as manage their orders.",
    img: images.movieweb,
    category: "Ecommerce Bussines",
    duration: "1-20 Days",
    cost: "$300-$350 Days",
  },
  {
    title: "E-commerce About",
    description:
      "I built this e-commerce website using React, Redux, and Firebase. It's a full-stack application that allows users to create, read, update, and delete products, as well as manage their orders.",
    img: images.todoapp,
    category: "Ecommerce Bussines",
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
      <ProjectShowCase projects={Ecom} />
      <ProjectShowCase projects={Ecom} />
    </div>
  );
}
