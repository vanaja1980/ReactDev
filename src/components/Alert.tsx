import type { ReactNode } from "react";
import StateDemo from "./State";
import Arraydemo from "./array";
interface Props {
  children: ReactNode;
}

function Alert({ children }: Props) {
  return (
    <div>
      {children}
      <StateDemo></StateDemo>
      <Arraydemo></Arraydemo>
    </div>
  );
}

export default Alert;
