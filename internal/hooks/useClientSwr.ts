import useSWR from 'swr';

type Props = { path?: string };

const fetcher = (path: string = '', options: any = {}) => {
  // TODO: swr fetcher
  return (
    fetch(path, options)
      .then(r => r.json().then(data => r.ok ? data : Promise.reject(data)))
  )
};
const useClientSwr = ({
  path = 'https://jsonplaceholder.typicode.com/todos'
}: Props = {}) => {
  const { data, error, isLoading } = useSWR(path, fetcher);

  // TODO: Encapsulation error that should be returned, like {code: , message:''}
  if (error) {
    console.log(`🚀 ~ error:`, error);
  }

  // TODO: UseRef directly add dom for global cover loading or part of container loading?
  if (isLoading) {
    console.log(`🚀 ~ isLoading:`, isLoading);
  }

  // TODO: Finally return the data, also could be encapsulation the result
  return data
};

export default useClientSwr;