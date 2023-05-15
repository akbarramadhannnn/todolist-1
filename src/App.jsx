import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/layout";

const Home = lazy(() => import("@/views/Home"));
const DetailActivity = lazy(() => import("@/views/DetailActivity"));

const App = () => {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/detail-activity/:id" element={<DetailActivity />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
