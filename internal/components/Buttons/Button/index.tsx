type Props = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>

const Button = ({ children, ...buttonProps }: Props) => {
  return <button type="button" {...buttonProps}>
    {children}
  </button>
}

export default Button