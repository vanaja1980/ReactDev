import { useState } from "react";
import styled from "styled-components";

interface ListProps {
  active: boolean;
}

const Li = styled.li<ListProps>`
  colour: blue;
  background: ${(props) => (props.active ? "lightgrey" : "white")};
`;

interface Props {
  items: string[];
  heading: string;
  OnSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, OnSelectItem }: Props) {
  const [SelectIndex, SetSelectIndex] = useState(-1);

  const [Visible, SetVisible] = useState(false);
  const AddItem = () => {
    SetVisible(true);
    console.log({ Visible });
  };
  return (
    <>
      <div>
        <h1 style={{ backgroundColor: "pink" }}> {heading}</h1>
        <ul className="list-group">
          {items.length === 0 && <p>No data found</p>}
          {items.map((item, index) => (
            <Li
              className="list-group-item"
              active={SelectIndex === index ? true : false}
              key={item}
              onClick={() => {
                SetSelectIndex(index);
                OnSelectItem(item);
                AddItem();
              }}
            >
              {item}
            </Li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;
