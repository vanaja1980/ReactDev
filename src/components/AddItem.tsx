import { useRef, type FormEvent } from "react";

interface Props {
  InsertItem: (item: string) => void;
}

function Additem({ InsertItem }: Props) {
  const nameref = useRef<HTMLInputElement>(null);

  const SubmitItem = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const item = nameref.current?.value;

    if (item) {
      InsertItem(item);
      nameref.current.value = "";
    }

    console.log(item);
  };

  return (
    <form onSubmit={SubmitItem}>
      <div className="row">
        <input ref={nameref} type="text" className="form-control" id="name" />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Item
      </button>
    </form>
  );
}

export default Additem;
