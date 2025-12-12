import React, { useState, useEffect } from "react";
import Card from "../components/videos/Card.jsx";
import { getCatalog } from "../services/catalogService";
import VideoModal from "../components/videos/VideoModal";
import PageBanner from "../layout/PageBanner";
import Wave from "../layout/Wave.jsx";
import AxisSidebar from "../components/videos/AxisSidebar";

const ITEMS_PER_PAGE = 12;

function Catalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [catalog, setCatalog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [selectedAxis, setSelectedAxis] = useState(null);
  const axisOptions = [...new Set(catalog.map(item => item.axisType))];

  useEffect(() => {
    async function load() {
      try {
        const data = await getCatalog();
        setCatalog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  const filteredCatalog = selectedAxis
    ? catalog.filter(item => item.axisType === selectedAxis)
    : catalog;

  const totalPages = Math.ceil(filteredCatalog.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedItems = filteredCatalog.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (isLoading) return <section className="text-center mt-20">Cargando catálogo...</section>;
  if (error) return <section className="text-center mt-20 text-red-500">{error}</section>;

  return (
    <>
      <PageBanner />
      <section className="relative w-full overflow-hidden leading-none -mb-8">
        <Wave />
      </section>

      <section className="container mx-auto px-4 py-8">
        <section className="flex flex-col md:flex-row gap-6">
          <AxisSidebar
            axisOptions={axisOptions}
            selectedAxis={selectedAxis}
            onSelectAxis={(axis) => {
              setSelectedAxis(axis);
              setCurrentPage(1);
            }}
          />
          <section className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {displayedItems.map((item) => (
              <Card
                key={item.id}
                image={item.thumbnailUrl}
                author={item.migrantName}
                country={item.migrantOrigin}
                axis={item.axisType}
                description={item.description}
                onClick={() => setSelectedVideo(item)}
              />
            ))}
          </section>
        </section>

        {totalPages > 1 && (
          <section className="flex justify-center items-center gap-3 mt-10">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className={`px-3 py-1 rounded ${currentPage === 1
                  ? "text-[#4b1252] font-fira uppercase cursor-not-allowed"
                  : "text-[#4b1252] font-fira uppercase cursor-pointer hover:bg-[#f7e7f9]"
                }`}
            >
              Anterior
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`px-3 py-1 rounded ${currentPage === num
                    ? "text-[#4b1252] font-fira"
                    : "bg-[#f7e7f9] cursor-pointer hover:bg-[#fcd249]/70"
                  }`}
              >
                {num}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className={`px-3 py-1 rounded ${currentPage === totalPages
                  ? "text-[#4b1252] font-fira uppercase cursor-not-allowed"
                  : "text-[#4b1252] font-fira uppercase cursor-pointer hover:bg-[#f7e7f9]"
                }`}
            >
              Siguiente
            </button>
          </section>
        )}

        {selectedVideo && (
          <VideoModal
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </section>
    </>
  );
}

export default Catalog;