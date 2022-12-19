import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHub = ({ colorMode }) => {
  const github = {
    margin: "auto",
    padding: "20px",
    borderRadius: "10px",
  };

  const shadow = {
    boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
  }

  return (
    <div className={"#github"} >
      <Heading textAlign='center' size={['2xl', '2xl', '2xl', '3xl']} color='#ab3a8b' fontWeight='500' mb='50px'>GITHUB CALENDAR</Heading>

      <Box
        w="100%"
        style={github}
      >
        <GitHubCalendar
          style={{ margin: "auto", color: '#ab3a8b' }}
          username="Khalidshah12"
          year={new Date().getFullYear()}
        />
      </Box>
      <Box display='flex' justifyContent='center' mt='40px' >
        <Box style={shadow} mr='30px'>
          <Image src='https://github-readme-stats.vercel.app/api?username=Khalidshah12&title_color=ab3a8b&icon_color=CC5160&text_color=949CA5&bg_color=00000000&show_icons=true' />
        </Box>
        <Box style={shadow}>
          <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=Khalidshah12&title_color=ab3a8b&icon_color=CC5160&text_color=949CA5&bg_color=00000000&show_icons=true" />
        </Box>
      </Box>
    </div>
  );
};

export default GitHub;
