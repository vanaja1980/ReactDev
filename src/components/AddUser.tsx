import { useState, type ChangeEvent, type FormEvent } from "react";

interface User {
  Name: string;
  Age: number;
}

function AddUser() {
  const [user, setUser] = useState<User>({
    Name: "",
    Age: 0,
  });

  const Submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(user);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      Name: event.target.value,
    });
  };

  const onChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      Age: Number(event.target.value),
    });
  };

  return (
    <div>
      <form onSubmit={Submit}>
        <div className="row">
          <div className="col">
            <label htmlFor="name" className="formlabel">
              Name
            </label>

            <input
              onChange={onChangeName}
              type="text"
              id="name"
              value={user.Name}
            />
          </div>

          <div className="col">
            <label htmlFor="age" className="formlabel">
              Age
            </label>

            <input
              onChange={onChangeAge}
              type="number"
              id="age"
              value={user.Age}
            />
          </div>

          <button type="submit" className="btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
