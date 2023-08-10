import React, { useEffect, useState } from "react";

function UseFetch(url) {
  const [users, setUsers] = useState([]);

  const getUsers = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers(url);
  }, [url]);

  return [users?.users];
}

export default UseFetch;
