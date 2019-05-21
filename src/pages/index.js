import React from "react";

import Layout from "../components/layout";
import Scores from "../components/Scores";
import Schedule from "../components/Schedule";

const IndexPage = () => (
  <Layout>
    <h1>Schedule and Scores</h1>
    <h3>This Week</h3>
    <Scores />
    <h3>Next Week</h3>
    <Scores />
    <h3>All Games</h3>
    <Schedule />
  </Layout>
);

export default IndexPage;
