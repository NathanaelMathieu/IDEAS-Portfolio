import "./Marble.scss";
import { ImageCard, Layout } from "../../components";
import React, { Component } from "react";
import { clips, funnel, funnelGif, kids, track }
 from "../../resources/projects/marble";
import { t1, t2, t3, t4, t5, t6 } from "./Text/marbleText.js";

export default class Marble extends Component {
  componentDidMount() {
    document.title = "Marble Run | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Marble">
          <div className="image_text">
            <ImageCard alt="An isometric view of the Cube"
              size="4x6" image={kids}
              textEnabled text="An isometric view of the Cube"/>
            {t1}
          </div>
          <div className="image_text">
            <ImageCard alt="An isometric view of the Cube"
              size="4x6" image={funnelGif}
              textEnabled text="An isometric view of the Cube"/>
            {t2}
          </div>
          <div className="image_text">
            <ImageCard alt="An isometric view of the Cube"
              size="4x6" image={clips}
              textEnabled text="An isometric view of the Cube"/>
            {t3}
          </div>
        </div>
      </Layout>
    );
  }
}
