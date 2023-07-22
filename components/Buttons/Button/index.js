const Button = ({ children, ...buttonProps }) => {
  return <button type="button" {...buttonProps}>
    {children}
  </button>
}

export default Button