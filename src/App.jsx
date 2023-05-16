import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/layout";

const Home = lazy(() => import("@/views/Home"));
const DetailActivity = lazy(() => import("@/views/DetailActivity"));

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route
          index
          path="/"
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/detail-activity/:id"
          element={
            <Suspense>
              <DetailActivity />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
