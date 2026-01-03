import { Services } from "@/services/Services";
import type { CreateServiceCategoryDto} from "@/types/Services";
import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

export function useServices() {
  const [error, setError] = useState<string | null>(null);

const sendServiceCategories = async (data: CreateServiceCategoryDto) => {
  try {
    await Services.create(data);
  } catch (err) {
    console.error(err);
  }
};

  const { data: categories = [] } = useQuery({

    queryKey: ['categories'],
    queryFn: async () => {
        const res = await Services.getCategories()
        return res.data
    }
  });
  return { sendServiceCategories, categories, error };
}
