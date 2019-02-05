import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const Players = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to Players</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Players;
