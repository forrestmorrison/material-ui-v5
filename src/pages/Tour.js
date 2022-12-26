import { Box, Typography } from "@mui/material"
import Container from "@mui/material/Container"

import QuiltedImageList from "../components/ImageCollage"

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
        <Typography variant="h3" component="h1" marginTop={3}>
            Explore the World in Vegas
        </Typography>
        <Box marginTop={3} sx={{display: "flex"}}>
            <img
                src="https://media.timeout.com/images/105124791/750/422/image.jpg"
                alt=""
                height={325}
            />
            <QuiltedImageList />
        </Box>
        <Box>
            <Typography variant="h6" component="h4" marginTop={3}>
                About this ticket
            </Typography>
            <Typography variant="paragraph" component="p" marginTop={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.
            </Typography>
        </Box>
        <Box>
            <Typography variant="h6" component="h4" marginTop={3}>
                Frequently Asked Questions
            </Typography>
        </Box>
    </Container>
  )
}

export default Tour;