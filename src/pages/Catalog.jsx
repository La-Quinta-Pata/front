import React, { useState, useEffect } from "react";
import Card from "../components/Card.Jsx";
import { getCatalog } from "../services/catalogService";
import VideoModal from "../components/VideoModal";
import PageBanner from "../layout/PageBanner";
import Wave from "../components/Wave";
import AxisSidebar from "../components/AxisSidebar";

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