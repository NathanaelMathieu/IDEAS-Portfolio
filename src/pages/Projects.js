import "./Projects.scss";
import { ImageCard, Layout } from "../components/";
import React, { Component } from "react";
import cubeIso1 from "../resources/projects/cube/iso1.jpg";

export default class Projects extends Component {
  componentDidMount() {
    document.title = "Projects | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="ProjectContainer">
          <ImageCard image={cubeIso1} route="projects/cube"
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Cube | Fall 2019"/>
          <ImageCard image={cubeIso1} route="projects/cube"
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Cube  |  Fall 2019"/>
          <ImageCard image={cubeIso1} route="projects/cube"
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Cube  |  Fall 2019"/>
          <ImageCard image={cubeIso1} route="projects/cube"
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Cube  |  Fall 2019"/>
          <ImageCard image={cubeIso1} route="projects/cube"
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Cube  |  Fall 2019"/>
        </div>
      </Layout>
    );
  }
}
