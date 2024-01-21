import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../Assets/Projects/leaf.png";
import emotion from "../Assets/Projects/emotion.png";
import editor from "../Assets/Projects/codeEditor.png";
import chatify from "../Assets/Projects/chatify.png";
import suicide from "../Assets/Projects/suicide.png";
import bitsOfCode from "../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="House Plans"
              description="HousePlans is an interactive, React-based web application dedicated to showcasing a diverse range of house plans. The application is designed with categories like Trending, New, Featured, and Luxury Houseplans, catering to various architectural tastes and preferences. Each house plan is presented as an interactive card, offering a glimpse into the plan's key details. A click on any card opens a detailed modal view, providing an in-depth look at the house plan. The design of HousePlans is responsive, ensuring a seamless and engaging user experience across different devices."
              ghLink="https://github.com/Abogeerick/housing-project.git"
              demoLink="https://project-app-dixx.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Trade"
              description="Trade is an innovative shopping platform designed to provide a seamless and intuitive online shopping experience. Equipped with a suite of user-friendly features, Trade offers a convenient way for users to browse, search, and purchase products. Key functionalities include browsing through a wide range of products, utilizing a powerful search bar for specific item queries, and easily adding products to both a wishlist and shopping cart. Users can also effortlessly proceed to checkout for a smooth transaction process."
              ghLink="https://github.com/Bisinle/Trade.git"
              demoLink="https://traded.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="News Sources"
              description="News Sources is a comprehensive and user-friendly web application dedicated to streamlining the process of accessing news online. In today's fast-paced world, where numerous news sources bombard users with information, this app serves as a central hub for exploring and reading news from various categories. It effectively addresses the challenge of browsing multiple websites for news updates, saving time and effort for its users."
              ghLink="https://github.com/eugenemrg/News-Sources.git"
              demoLink="https://eugenemrg.github.io/News-Sources/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Inventory Management CLI"
              description="This is an interactive Command-Line Interface (CLI) application for managing an inventory system. It allows you to perform various operations such as adding, viewing, and deleting products, categories, suppliers, and transactions in your inventory."
              ghLink="https://github.com/Abogeerick/CLI_project.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Tour-Agency-Project"
              description="This is a website that showcases various travel destinations and packages offered by Aboge Travel Agencies. Users can explore different locations, view package details, and shortlist packages for further consideration. The website aims to provide an immersive experience and inspire users to plan their next travel adventure."
              ghLink="https://github.com/Abogeerick/Tour-Agency-Project.git"
              demoLink="https://abogeerick.github.io/Tour-Agency-Project/"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
