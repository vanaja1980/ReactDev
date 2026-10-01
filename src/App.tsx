import { useState, type ChangeEvent, type FormEvent } from "react";

interface User {
  Name: string;
  Age: number;
}

function AddUser() {
  // The user currently being typed into the form
  const [user, setUser] = useState<User>({
    Name: "",
    Age: 0,
  });

  // All users that have been submitted
  const [users, setUsers] = useState<User[]>([]);

  const Submit = (event: FormEvent<HTMLFormElement>) => {
    console.log(user.Name, user.Age);
    event.preventDefault();

    // Add current user to the users array
    setUsers((prevUsers) => [...prevUsers, user]);

    // Clear the form
    setUser({
      Name: "",
      Age: 0,
    });
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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Form */}
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-4">Add User</h3>

              <form onSubmit={Submit}>
                {/* Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={user.Name}
                    onChange={onChangeName}
                  />
                </div>

                {/* Age */}
                <div className="mb-4">
                  <label htmlFor="age" className="form-label">
                    Age
                  </label>

                  <input
                    type="number"
                    id="age"
                    className="form-control"
                    placeholder="Enter your age"
                    value={user.Age || ""}
                    onChange={onChangeAge}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Add User
                </button>
              </form>
            </div>
          </div>

          {/* Users */}
          <div className="mt-4">
            <h4>Users Information</h4>

            {users.map((user, index) => (
              <div key={index} className="card mb-2">
                <div className="card-body">
                  <strong>{user.Name}</strong>
                  <span className="ms-3">Age: {user.Age}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
