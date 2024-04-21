import { requestHandler } from '../common/apis/axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { queryClient } from '../App';

export const useGetRequest = ({ queryKey, requestAction = requestHandler, requestPath }) => {
  const params = useRef(null);
  const getQuery = useQuery({
    queryKey: typeof queryKey === 'string' ? [queryKey] : queryKey,
    queryFn: () => (params.current ? requestAction(params.current) : null),
    enabled: false,
    // retry: false,
    onSuccess: (value) => {
      queryClient.setQueryData(typeof queryKey === 'string' ? [queryKey] : queryKey, value);
    },
  });

  return {
    ...getQuery,
    request: (values) => {
      params.current = requestPath
        ? { param: values ?? {}, path: requestPath, method: 'GET' }
        : values ?? {};
      getQuery.refetch();
    },
  };
};

export const useMutationRequest = ({
  queryKey,
  requestAction = requestHandler,
  requestPath,
  method,
}) => {
  const mutation = useMutation({
    mutationKey: typeof queryKey === 'string' ? [queryKey] : queryKey,
    mutationFn: requestAction,
    onSuccess: (value) => {
      queryClient.setQueryData(typeof queryKey === 'string' ? [queryKey] : queryKey, value);
    },
  });

  return {
    ...mutation,
    request: (values) => {
      mutation.mutateAsync(
        requestPath ? { param: values, path: requestPath, method: method } : values,
      );
    },
  };
};
