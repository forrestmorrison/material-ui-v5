import { Box, Grid, Paper, Typography } from "@mui/material"

const TourCard = () => {
  return (
    <Grid item xs={3}>
        <Paper elevation={3}>
            <img 
                src="https://www.niagarafallsstatepark.com/~/media/parks/niagara-falls/homepage/niagara-falls-mist-880x592.jpg" 
                alt=""
                className="img"
            />
            <Box paddingX={1}>
                <Typography variant="subtitle1" component="h2">
                    Immerse Into The Falls
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <Typography variant="body2" component="p">
                        5 hours
                    </Typography>
                </Box>
            </Box>
        </Paper>
    </Grid>
  )
}

export default TourCard