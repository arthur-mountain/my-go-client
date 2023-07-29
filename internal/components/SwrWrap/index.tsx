import type { KeyedMutator } from "swr"
import type { ClientSwrProps } from "@/hooks/useClientSwr"
import useClientSwr from "@/hooks/useClientSwr"

import Error from "./Error"
import Loading from "./Loading"

type MutateParamsType<T> = ReturnType<() => {
  data: Parameters<KeyedMutator<T>>[0];
  options: Parameters<KeyedMutator<T>>[1];
}>
type ChildrenParams<T> = {
  apiData: T | undefined;
  handleMutate: (mutateParams?: MutateParamsType<T>) => void;
}
type Props<T> = ClientSwrProps & {
  children: (params: ChildrenParams<T>) => React.ReactNode
}

const SwrWrap = <T extends unknown>({ children, path, options }: Props<T>) => {
  const {
    data,
    error,
    isLoading,
    mutate,
  } = useClientSwr<ChildrenParams<T>['apiData']>({ path, options })

  // TODO: error occurs that should be return error component
  if (error) {
    // console.log(`🚀 ~ SwrWrap ~ error:`, error);
    return <Error statusCode={error.statusCode} />
  }

  // TODO: show global loading or return simple of loading component
  if (isLoading) {
    // console.log(`🚀 ~ SwrWrap ~ isLoading:`, isLoading);
    return <Loading />
  }

  const handleMutate: ChildrenParams<T>['handleMutate'] = (params) => {
    // console.log(`🚀 ~ SwrWrap ~ data:`, params);
    mutate()
  }
  // console.log(`🚀 ~ SwrWrap ~ data:`, data);

  return children({ apiData: data, handleMutate })
}

export default SwrWrap