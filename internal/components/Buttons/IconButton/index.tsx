import Button from "../Button"
// import Icon from "@/components/Icon"

type Props = {
  iconName: string;
  iconClassName?: string;
  iconColor?: string;
  iconSize?: { width: number; height: number; };
  iconScale?: string | number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({
  iconName,
  iconClassName = '',
  iconColor = '',
  iconSize = { width: 24, height: 24 },
  ...buttonProps
}: Props) => {
  if (!iconName) return null;

  const Icon = () => (
    <svg
      className={iconClassName ? `icon ${iconClassName}` : 'icon'}
      fill="currentColor"
      color={iconColor}
      width={iconSize?.width ?? 24}
      height={iconSize?.height ?? 24}
      viewBox="0 0 24 24"
    >
      <use xlinkHref={'icons.svg#' + iconName} />
    </svg>
  )

  return buttonProps.onClick ? (
    <Button {...buttonProps}>
      <Icon />
    </Button>
  ) : (
    <Icon />
  );
}

export default IconButton