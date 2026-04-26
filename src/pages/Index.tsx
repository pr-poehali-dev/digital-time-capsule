import { useState } from "react";
import Layout from "@/components/Layout";
import HomePage from "./HomePage";
import CreatePage from "./CreatePage";
import CabinetPage from "./CabinetPage";
import HistoryPage from "./HistoryPage";
import GalleryPage from "./GalleryPage";
import AboutPage from "./AboutPage";
import SupportPage from "./SupportPage";

export default function Index() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "create":
        return <CreatePage />;
      case "cabinet":
        return <CabinetPage />;
      case "history":
        return <HistoryPage />;
      case "gallery":
        return <GalleryPage />;
      case "about":
        return <AboutPage onNavigate={setCurrentPage} />;
      case "support":
        return <SupportPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}
