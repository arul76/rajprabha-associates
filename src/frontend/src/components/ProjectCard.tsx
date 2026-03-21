import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "../data/projects";

const statusColors: Record<string, string> = {
  completed: "bg-emerald-100 text-emerald-800",
  upcoming: "bg-blue-100 text-blue-800",
  proposed: "bg-amber-100 text-amber-700",
};

const statusLabels: Record<string, string> = {
  completed: "Completed",
  upcoming: "Ongoing",
  proposed: "Proposed",
};

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
      data-ocid={`projects.item.${index + 1}`}
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={project.images[0]}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <span
          className={`absolute top-3 left-3 text-xs font-heading font-semibold px-3 py-1 rounded-full capitalize ${statusColors[project.status]}`}
        >
          {statusLabels[project.status] ?? project.status}
        </span>
        {project.images.length > 1 && (
          <span className="absolute top-3 right-3 text-xs font-body bg-black/50 text-white px-2 py-1 rounded-full">
            +{project.images.length} photos
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="font-body text-xs text-gold font-semibold uppercase tracking-wider mb-1">
          {project.type}
        </p>
        <h3 className="font-heading font-bold text-navy text-lg mb-1 leading-snug">
          {project.name}
        </h3>
        <div className="flex items-center gap-1 text-gray-500 mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span className="font-body text-xs">{project.location}</span>
        </div>
        <p className="font-body text-sm text-gray-600 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>
        <Link
          to="/projects/$id"
          params={{ id: String(project.id) }}
          data-ocid={`projects.item.${index + 1}.link`}
        >
          <Button
            variant="ghost"
            className="self-start text-navy font-heading font-semibold text-xs tracking-wide px-0 hover:text-gold hover:bg-transparent gap-1"
          >
            View Details <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
