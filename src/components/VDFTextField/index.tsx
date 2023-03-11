import "./style.scss";

export interface VDFTextFieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  // Custom props here.
}

export function VDFTextField(props: VDFTextFieldProps) {
  const { type, ...otherProps } = props;

  return (
    <input className="vdf-textfield" type={"text"} {...otherProps} />
  );
}
