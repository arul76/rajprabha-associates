import { useQuery } from "@tanstack/react-query";
import type { ContactForm } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllContactForms() {
  const { actor, isFetching } = useActor();
  return useQuery<ContactForm[]>({
    queryKey: ["contactForms"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContactForms();
    },
    enabled: !!actor && !isFetching,
  });
}
