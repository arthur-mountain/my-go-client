import useSWR from 'swr';

const useClientSwr = ({
  path = ''
}) => {
  const fetcher = () => {
    // TODO: swr fetcher
  };
  const { data, error, isLoading } = useSWR(path, fetcher);

  // TODO: Encapsulation error that should be returned, like {code: , message:''}
  if (error) { }

  // TODO: UseRef directly add dom for global cover loading or part of container loading?
  if (isLoading) { }

  // TODO: Finally return the data, also could be encapsulation the result
  return
};

export default useClientSwr;