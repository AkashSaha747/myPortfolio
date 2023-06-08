import { Box, Flex, Heading,Image } from '@chakra-ui/react'
import React from 'react'

const GithubActivity = () => {
  return (
    <>
        <Box id="githubs" >
    <Box class="container react-activity-calendar">
      <Heading class="sub-title">GitHub React-Activity-Calendar</Heading>
      <Flex direction={"column"} class="github-list">
        <Box class="github">
          <Image id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=AkashSaha747&theme=radical"
            alt="streakstat" />

        </Box>
        <Box class="github" id="tops">
          <Image id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=AkashSaha747&&theme=radical"
            alt="top_languages" />
        </Box>

        <Box class="github">
          <Image id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=AkashSaha747&show_icons=true&theme=radical" alt="stat-card" />

        </Box>


      </Flex>
    </Box>

  </Box>
    </>
  )
}

export default GithubActivity
