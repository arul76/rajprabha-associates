import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation } from "@tanstack/react-router";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import type { ProjectStatus } from "../data/projects";

const tabs = [
  { label: "All", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Proposed", value: "proposed" },
];

export default function ProjectsPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeFilter =
    (searchParams.get("filter") as ProjectStatus | null) ?? "all";

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.status === activeFilter);

  const handleTab = (value: string) => {
    const url = value === "all" ? "/projects" : `/projects?filter=${value}`;
    window.location.href = url;
  };

  return (
    <div>
      {/* Header */}
      <section
        className="relative bg-navy py-20 text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/project-hero.dim_1200x700.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative">
          <p className="font-heading font-semibold text-gold text-xs tracking-widest uppercase mb-2">
            Our Portfolio
          </p>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl uppercase tracking-wide">
            Our Projects
          </h1>
          <div className="w-16 h-1 bg-gold mx-auto mt-4" />
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            value={activeFilter}
            onValueChange={handleTab}
            className="mb-10"
          >
            <TabsList
              className="bg-[#F3F5F7] p-1 rounded-full h-auto"
              data-ocid="projects.filter.tab"
            >
              {tabs.map((t) => (
                <TabsTrigger
                  key={t.value}
                  value={t.value}
                  className="rounded-full font-heading font-semibold text-xs tracking-widest px-5 py-2 data-[state=active]:bg-navy data-[state=active]:text-white"
                  data-ocid={`projects.${t.value}.tab`}
                >
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {filtered.length === 0 ? (
            <div className="text-center py-20" data-ocid="projects.empty_state">
              <p className="font-body text-gray-400 text-lg">
                No projects found for this filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
