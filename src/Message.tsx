import type { ReactNode } from "react";
import styled from "styled-components";

const Msg = styled.div`
  color: red;
`;

interface props {
  children: ReactNode;
}

function Message({ children }: props) {
  //   const username = "Vanaja Kayitala";

  return (
    <div>
      <Msg>{children}</Msg>
      {/* {children} */}
    </div>
  );
}

export default Message;
