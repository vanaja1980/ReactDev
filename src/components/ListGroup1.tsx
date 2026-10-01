import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  //   const NoData = () => {
  //     return listItems.length === 0 && <p>No data found</p>;
  //   };

  const [SelectIndex, SetSelectIndex] = useState(-1);

  //   const HandleClick = (event: MouseEvent) => {
  //     console.log(event);
  //   };

  return (
    <>
      <h1> {heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No data found</p>}
        {items.map((item, index) => (
          <li
            className={
              SelectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => SetSelectIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
