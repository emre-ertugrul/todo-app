import "./style.scss";

export interface VDFCheckBoxProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void;
}

export function VDFCheckBox(props: VDFCheckBoxProps) {
  const { type, ...otherProps } = props;

  return (
    <input {...otherProps} className="vdf-checkbox" type={"checkbox"} />
  );
}
