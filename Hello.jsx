import React, { useState } from "react";

const Hello = () => {
  const [data, setdata] = useState({});
  const handelinput = (val) => {
    const { name, value } = val.target;
    setdata((values) => ({ ...values, [name]: value }));
  };
  const datasubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    await fetch("http://localhost:2000/api", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <form onSubmit={datasubmit}>
      <input
        type="text"
        name="fname"
        onChange={handelinput}
        placeholder="Enter Your Name"
      />
      <input
        type="text"
        name="lname"
        onChange={handelinput}
        placeholder="Enter Your lame"
      />
      <input type="submit" />
    </form>
  );
};

export default Hello;
