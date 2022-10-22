import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import style from "./Github.module.css";


const GitHub = () => {
  const github = {
    margin: "auto",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div className={"#github"}>
      <Heading textAlign='center' size='3xl' color='#243D25' mb='50px'>GITHUB CALENDAR</Heading>

      <Box
        w="100%"
        style={github}
        className={style.github_Calender}
      >
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="Khalidshah12"
          year={new Date().getFullYear()}
        />
      </Box>

    </div>
  );
};

export default GitHub;