import React from "react";
import { Carousel, Modal } from "react-bootstrap";
import "./projectbox.css";

const ProjectBox = (props) => {
  let { img_url1, img_url2, img_url3, name, desc, tech_stack, link } =
    props.data;
    
  const [modalShow, setmodalShow] = React.useState(false);

  let projectLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <Modal show={modalShow} fullscreen={true}>
        <Modal.Body>
          <div
            className="container-fluid p-2 p-md-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="container">
              <Carousel controls={false} touch={true}>
                <Carousel.Item>
                  <div
                    className="carousel-project-item mx-auto"
                    style={{ backgroundImage: `url("https://${img_url1}")` }}
                    onClick={() => {
                      projectLink(img_url1);
                    }}
                  ></div>
                </Carousel.Item>
                <Carousel.Item>
                  <div
                    className="carousel-project-item mx-auto"
                    style={{ backgroundImage: `url("https://${img_url2}")` }}
                    onClick={() => {
                      projectLink(img_url2);
                    }}
                  ></div>
                </Carousel.Item>
                <Carousel.Item>
                  <div
                    className="carousel-project-item mx-auto"
                    style={{ backgroundImage: `url("https://${img_url3}")` }}
                    onClick={() => {
                      projectLink(img_url3);
                    }}
                  ></div>
                </Carousel.Item>
              </Carousel>
            </div>
            <h2 className="mt-4 fw-bold">{name}</h2>
            <p>
              <span className="fw-bold">DESCRIPTION: </span>
              {desc}
            </p>
            <p>
              <span className="fw-bold">TECH STACK: </span>
              {tech_stack.map((data, index) => {
                return (
                  <div
                    className="bd-highlight me-2 project__tech-stack"
                    style={{ width: "fit-content" }}
                  >
                    {data}
                  </div>
                );
              })}
            </p>
            <p>
              <span className="fw-bold">LINK: </span>
              <a
                className="project__link fw-bold"
                onClick={() => {
                  projectLink(link);
                }}
              >
                {link}
              </a>
            </p>
            <button
              type="button"
              className="btn btn-danger"
              style={{ position: "relative" }}
              onClick={() => {
                setmodalShow(false);
              }}
            >
              Close
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <div
        className="row project__container mb-5"
        onClick={() => {
          setmodalShow(true);
        }}
        data-aos="fade-up"
      >
        <div className="col-lg-4 p-0">
          <div
            className="project__data"
            style={{ backgroundImage: `url("https://${img_url1}")` }}
          ></div>
        </div>
        <div className="col-lg-8 p-3 p-md-5 position-relative">
          <p className="fw-bold"> {name || "PROJECT NAME"} </p>

          <p>{desc || "PROJECT DESCRIPTION"}</p>

          <span className="font-small">TECH STACK: </span>
          <div className="d-flex flex-wrap">
            {tech_stack.map((data, index) => {
              return (
                <div className="bd-highlight me-2 project__tech-stack">
                  {data}
                </div>
              );
            })}
          </div>
          <p className="py-2">
            <a
              className="project__link fw-bold"
              onClick={() => {
                projectLink(link);
              }}
            >
              {link}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectBox;
