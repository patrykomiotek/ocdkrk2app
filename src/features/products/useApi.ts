import { useEffect, useState } from "react";

type S<T> =
  | {
      // pending
      data: undefined;
      isLoading: true;
      isError: false;
    }
  | {
      // resolved
      data: T;
      isLoading: false;
      isError: false;
    }
  | {
      // rejected
      data: undefined;
      isLoading: false;
      isError: true;
    };

//

export const useApi = <T>(fetcher: () => Promise<T>) => {
  const [state, setState] = useState<S<T>>({
    data: undefined,
    isLoading: true,
    isError: false,
  });
  const { data, isLoading, isError } = state;

  // TODO: cancelation
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetcher();

        setState({
          data: response,
          isLoading: false,
          isError: false,
        });
      } catch (e) {
        // error
        setState({
          data: undefined,
          isLoading: false,
          isError: true,
        });
      }
    };

    loadData();
  }, []);

  return { data, isLoading, isError };
};
