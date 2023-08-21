import { useQuery } from "react-query";
import { CatService, getCatsParams } from "../../services/cat.service";

export function useCatFeeds({ limit, has_breeds, page }: getCatsParams) {
  return useQuery(
    ["catFeeds", page],
    async () => {
      return CatService.getCats({ limit, has_breeds, page });
    },
    { keepPreviousData: true }
  );
}
