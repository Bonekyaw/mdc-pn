import { useEffect, useState } from "react";

import api from "@/api/axios";

type UseQueryResult<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

export function useQuery<T = unknown>(endpoint: string): UseQueryResult<T> {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(endpoint);
        if (response.status !== 200) {
          setError("Something went wrong!");
        }
        setData(response.data);
      } catch (error) {
        console.error(error);
        setError("Server Error!");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
}
