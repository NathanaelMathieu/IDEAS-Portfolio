import "./Tempist.scss";
import { ImageCard, Layout } from "../../components";
import React, { Component } from "react";

/*
 * Import { }
 *  from "../../resources/projects/tempist";
 */
import { t1, t2, t3, t4, t5, t6 } from "./Text/tempistText.js";

export default class Tempest extends Component {
  componentDidMount() {
    document.title = "Tempist | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Tempist">
          <div className="image_text">
            <ImageCard alt="An isometric view of the Cube"
              size="4x6"
              textEnabled text="An isometric view of the Cube"/>
            {t1}
          </div>
        </div>
      </Layout>
    );
  }
}
