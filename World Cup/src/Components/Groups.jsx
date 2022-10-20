import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Groups() {
  const [group, setGroup] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3007c26bf7msh3108dfb9105d4a4p14a87bjsn99bf6a6683bd",
      "X-RapidAPI-Host": "football98.p.rapidapi.com",
    },
  };

  useEffect(() => {
    getGroup();
  }, []);

  const getGroup = async () => {
    const check = localStorage.getItem("Group");

    if (check) {
      setGroup(JSON.parse(check));
    } else {
      const groupAPI = await fetch(
        "https://football98.p.rapidapi.com/fifaworldcup/table",
        options
      );

      const data = await groupAPI.json();

      const chunkSize = 4;
      const arr = data;
      const newdata = arr
        .map((e, i) => {
          return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null;
        })
        .filter((e) => {
          return e;
        });

      localStorage.setItem("Group", JSON.stringify(newdata));
      setGroup(newdata);
      console.log(group);
    }
  };

  console.log(group);
  const GroupName = [
    { name: "Group A" },
    { name: "Group B" },
    { name: "Group C" },
    { name: "Group D" },
    { name: "Group E" },
    { name: "Group F" },
    { name: "Group G" },
    { name: "Group H" },
  ];

  console.log(GroupName);

  return (
    <GroupWrapper>
      {group.map((data) => {
        return (
          <div key={data.id}>
            {GroupName.map((name) => {
              return( <h1>{name.name}</h1>)
            })}
            {data.map((dataItem) => {
              return (
                <div key={dataItem.key}>
                  <h2>{dataItem.Name}</h2>
                  <img src={dataItem.SquadLogo} alt="logo" />
                </div>
              );
            })}
          </div>
        );
      })}
    </GroupWrapper>
  );
}

export default Groups;

const GroupWrapper = styled.div`
  padding-bottom: 100px;
`;
