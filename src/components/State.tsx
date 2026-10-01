import { useState } from "react";
import { useEffect } from "react";

function StateDemo() {
  //State variables created at global level else the we lost the state when come back to same function
  //Create related state variable in object
  //Dont too many nesting  properties in object
  // dont duplicate state variables like first name and last name and full name
  // react updates state asynch
  //react render each components twice beciase in first render - detect bugs and second updtae UI
  const [Counts, setCounts] = useState(0);
  const [Person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });
  const [Dept, setDept] = useState({
    firstName: "",
    lastName: "",
    catgory: {
      name: "",
    },
  });
  let count: number = 0;
  const IncreaseCount = () => {
    count++;
    setCounts((Counts) => Counts + 1);
    // // 1: setPerson
    // const Persons = { firstName: "vanu", lastName: "dd" };
    // setPerson(Persons);
    // 2:
    setPerson({ ...Person, firstName: "Sugamya" });
    console.log(Person.firstName);
    console.log(count, Counts);
    //Nested object properies
    setDept({ ...Dept, catgory: { ...Dept.catgory, name: "eCommerce dept" } });
    console.log(Dept.catgory.name);
  };
  useEffect(() => {}, [Counts]);

  return (
    <div>
      {count}
      <button type="button" onClick={() => IncreaseCount()}>
        Click
      </button>
    </div>
  );
}

export default StateDemo;
