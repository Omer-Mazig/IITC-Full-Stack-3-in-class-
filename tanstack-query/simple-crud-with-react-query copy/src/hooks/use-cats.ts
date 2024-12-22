import { getCats } from "@/services/cat.service";
import { useQuery } from "@tanstack/react-query";

export function useCats() {
  return useQuery({
    queryKey: ["cats"],
    queryFn: () => getCats(),
    // retry: 1,
    // gcTime: 5000, // default to 5 minute
    // refetchOnWindowFocus: false, // default to 5 true
  });
}
