import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data/projects";

const statusColors: Record<string, string> = {
  completed: "bg-emerald-100 text-emerald-800",
  upcoming: "bg-blue-100 text-blue-800",
  proposed: "bg-amber-100 text-amber-700",
};

const typeColors: Record<string, string> = {
  "Residential Flats": "bg-violet-100 text-violet-800",
  "Residential Villas": "bg-teal-100 text-teal-800",
  "Row Houses": "bg-orange-100 text-orange-800",
  "Commercial Complex": "bg-sky-100 text-sky-800",
};

export default function ProjectDetailPage() {
  const { id } = useParams({ from: "/projects/$id" });
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div
        className="min-h-[60vh] flex flex-col items-center justify-center gap-6"
        data-ocid="project_detail.error_state"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <p className="font-heading text-6xl font-bold text-navy/20 mb-4">
            404
          </p>
          <h2 className="font-heading text-2xl font-bold text-navy mb-2">
            Project Not Found
          </h2>
          <p className="font-body text-gray-500 mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/projects">
            <Button className="bg-navy text-white hover:bg-navy/90 font-heading font-semibold">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen" data-ocid="project_detail.page">
      {/* Hero Banner */}
      <div className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${project.images[0]})` }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/projects" data-ocid="project_detail.link">
              <Button
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/10 mb-6 px-0 font-body text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
              </Button>
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <span
                className={`text-xs font-heading font-semibold px-3 py-1 rounded-full capitalize ${
                  statusColors[project.status]
                }`}
              >
                {project.status}
              </span>
              <span
                className={`text-xs font-heading font-semibold px-3 py-1 rounded-full ${
                  typeColors[project.type] ?? "bg-gray-100 text-gray-700"
                }`}
              >
                {project.type}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
              {project.name}
            </h1>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="w-4 h-4" />
              <span className="font-body text-base">{project.location}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-14">
        {/* Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          data-ocid="project_detail.panel"
        >
          <h2 className="font-heading text-xl font-bold text-navy mb-5 uppercase tracking-wide">
            Project Gallery
          </h2>
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((img, i) => (
                <CarouselItem key={img} className="md:basis-1/2 lg:basis-2/3">
                  <div className="overflow-hidden rounded-xl aspect-video">
                    <img
                      src={img}
                      alt={`${project.name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {project.images.length > 1 && (
              <>
                <CarouselPrevious
                  className="left-2"
                  data-ocid="project_detail.pagination_prev"
                />
                <CarouselNext
                  className="right-2"
                  data-ocid="project_detail.pagination_next"
                />
              </>
            )}
          </Carousel>
        </motion.section>

        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-heading text-xl font-bold text-navy mb-4 uppercase tracking-wide">
            About This Project
          </h2>
          <p className="font-body text-base text-gray-700 leading-relaxed max-w-3xl">
            {project.fullDescription}
          </p>
        </motion.section>

        {/* Specs Grid */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="font-heading text-xl font-bold text-navy mb-5 uppercase tracking-wide">
            Project Specifications
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.specs.map((spec) => (
              <div
                key={spec.label}
                className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm"
              >
                <p className="font-body text-xs text-gray-500 mb-1">
                  {spec.label}
                </p>
                <p className="font-heading font-bold text-navy text-sm leading-snug">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Floor Plans */}
        {project.floorPlanImages && project.floorPlanImages.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="font-heading text-xl font-bold text-navy mb-5 uppercase tracking-wide">
              Floor Plans
            </h2>
            <div
              className={`grid gap-6 ${
                project.floorPlanImages.length === 1
                  ? "grid-cols-1 max-w-xl"
                  : "grid-cols-1 sm:grid-cols-2"
              }`}
            >
              {project.floorPlanImages.map((fp, i) => (
                <div
                  key={fp}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm"
                >
                  <div className="bg-navy/5 px-4 py-2 border-b border-gray-100">
                    <p className="font-heading text-sm font-semibold text-navy">
                      Floor Plan {i + 1}
                    </p>
                  </div>
                  <img
                    src={fp}
                    alt={`Layout plan ${i + 1} for ${project.name}`}
                    className="w-full object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
