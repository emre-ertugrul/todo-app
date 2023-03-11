import "./style.scss";

export interface VDFButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  buttonLabel: string;
}

export function VDFButton(props: VDFButtonProps) {
  const { buttonLabel, ...otherProps } = props;

  return (
    <button className="vdf-button" {...otherProps}>
      {buttonLabel}
    </button>
  );
}
