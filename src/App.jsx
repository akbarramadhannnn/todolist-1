import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/layout";
import Home from "@/views/Home";
import DetailActivity from "@/views/DetailActivity";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/detail-activity/:id" element={<DetailActivity />} />
      </Routes>
    </Layout>
  );
};

export default App;
