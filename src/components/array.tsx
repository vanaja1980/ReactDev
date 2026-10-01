import { useState } from "react";
import { produce } from "immer";

function Arraydemo() {
  const [Tags, setTags] = useState(["PR", "CR"]);
  const [Users, setUser] = useState([
    {
      id: 1,
      name: "vanaja",
      address: "leicester",
    },
    {
      id: 2,
      name: "Roja",
      address: "London",
    },
    {
      id: 3,
      name: "Suji",
      address: "Bristol",
    },
  ]);
  const Add = () => {
    setTags([...Tags, "TR"]);
    setUser([...Users, { id: 4, name: "pooja", address: "Ports" }]);
  };
  const Update = () => {
    setTags(Tags.map((tg) => (tg === "PR" ? "PR-extend" : "PR")));
    setUser(
      Users.map((user) =>
        user.id === 1 ? { ...user, name: "fffffff" } : user,
      ),
    );
    //immer to update - mutable - update details like below
    setUser(
      produce((draft) => {
        const userObj = draft.find((user) => user.id === 1);
        if (userObj) userObj.name = "hhhhgggffdddssee";
      }),
    );
  };
  const Delte = () => {
    setTags(Tags.filter((tg) => tg !== "CR"));
  };
  return (
    <div>
      <button type="button" onClick={Add}>
        Add
      </button>
      <button type="button" onClick={Update}>
        Upddate
      </button>
      <button type="button" onClick={Delte}>
        Delete
      </button>
    </div>
  );
}

export default Arraydemo;
