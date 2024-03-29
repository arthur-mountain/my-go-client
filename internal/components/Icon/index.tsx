type Props = {
  iconName: string;
  iconClassName?: string;
  iconColor?: string;
  iconSize?: { width: number; height: number; };
  iconScale?: string | number;
}

const Icon = ({
  iconName,
  iconClassName = '',
  iconColor = '',
  iconSize = { width: 24, height: 24 },
  iconScale = 1,
}: Props) => {
  if (!iconName) return null;

  return <svg
    className={iconClassName ? `icon ${iconClassName}` : 'icon'}
    fill="currentColor"
    color={iconColor}
    width={iconSize?.width ?? 24}
    height={iconSize?.height ?? 24}
    viewBox="0 0 24 24"
  >
    <use xlinkHref={'icons.svg#' + iconName} style={{ transform: `scale(${iconScale})` }} />
  </svg>
}

export default Icon