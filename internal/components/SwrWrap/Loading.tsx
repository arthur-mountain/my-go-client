type Props = {
  color?: string;
}

const Loading = ({ color }: Props) => {
  const colorClassName = color?.startsWith("text-") ? color : 'text-teal-300';

  return (
    <div className={`w-full h-full flex justify-center mt-4 ${colorClassName}`}>
      <div
        role="status"
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      >
        <span className="absolute m-[-1px] h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  )
}

export default Loading