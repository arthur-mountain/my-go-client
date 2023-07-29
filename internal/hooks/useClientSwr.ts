import useSWR from 'swr';

export type ClientSwrProps = {
  path: string;
  options?: RequestInit;
};

export type ClientSwrErrorType = {
  statusCode: number;
  message: string;
  data: any
  config: {
    type: string;
    url: string;
    headers: Headers;
  }
}

const fetcher = async ([path, options]: [path: string, options?: RequestInit]) => {
  // TODO: swr fetcher
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/${path}`, options);

    if (response.ok) {
      return await response.json();
    }

    return Promise.reject({
      statusCode: response.status,
      message: response.statusText,
      data: await response.json(),
      config: {
        type: response.type,
        url: response.url,
        headers: response.headers,
      }
    } as ClientSwrErrorType)
  } catch (error) {
    // TODO: handle 500 error,etc...
    console.log(error);
  }
};

export const swrPreloadData = () => { }

const useClientSwr = <T>({ path, options }: ClientSwrProps = { path: "todos" }) => {
  return useSWR<T, ClientSwrErrorType>(
    options ? [path, options] : [path],
    fetcher
  );
};

export default useClientSwr;