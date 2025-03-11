import React from "react";

function ProjectCard(props) {
  return (
    <div className="row text-white">
      <div className="col-12 col-md-6 col-lg-5 border border-2 border-danger d-flex flex-column h-100">
        <div className="row flex-grow-1">
          <div className="col-12">
            <img
              src={props.imglink}
              className="w-100 h-100 object-fit-cover"
              alt="Image 1"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img src={props.imglink} className="w-100" alt="Image 1" />
          </div>
          <div className="col-4">
            <img src={props.imglink} className="w-100" alt="Image 2" />
          </div>
          <div className="col-4">
            <img src={props.imglink} className="w-100" alt="Image 3" />
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-7 border border-2 border-danger d-flex flex-column h-100">
        <h2>iPhone X</h2>
        <p className="text-warning">★★★★★ (58 customer reviews)</p>
        <h4 className="text-danger">Deal of the Day: ₹60,000.00</h4>
        <p>
          <del>MRP: ₹62,500.00</del>
        </p>
        <p>
          The mobile is compact with its 6.2-inch OLED screen and far lighter at
          168g...
        </p>
        <ul className="list-unstyled d-flex">
          <li className="me-3">✅ Free Delivery</li>
          <li className="me-3">✅ 30 Days Replacement</li>
          <li>✅ 2 Year Warranty</li>
        </ul>
        <p>
          <strong>Available:</strong> In stock
        </p>
        <p>
          <strong>Brand:</strong> Apple
        </p>
        <div className="d-flex align-items-center">
          <span className="me-2">Color:</span>
          <button className="btn btn-danger btn-sm rounded-circle"></button>
          <button className="btn btn-secondary btn-sm rounded-circle ms-2"></button>
          <button className="btn btn-light btn-sm rounded-circle ms-2"></button>
        </div>
        <div className="mt-3 d-flex align-items-center">
          <button className="btn btn-outline-secondary">-</button>
          <span className="mx-2">1</span>
          <button className="btn btn-outline-secondary">+</button>
        </div>
        <button className="btn btn-primary mt-3">ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProjectCard;
