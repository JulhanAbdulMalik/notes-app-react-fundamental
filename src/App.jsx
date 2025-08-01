import React from "react";
import Header from "./components/Fragments/Header";
import { Route, Routes, useSearchParams } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import Footer from "./components/Fragments/Footer";
import DetailPageWrapper from "./pages/DetailPage";
import AddNewPage from "./pages/AddNewPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchHandler(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <div className="app-container">
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                defaultKeyword={keyword}
                keywordChange={changeSearchHandler}
              />
            }
          />
          <Route
            path="/archives"
            element={
              <ArchivePage
                defaultKeyword={keyword}
                keywordChange={changeSearchHandler}
              />
            }
          />
          <Route path="/note/:id" element={<DetailPageWrapper />} />
          <Route path="/note/new" element={<AddNewPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
