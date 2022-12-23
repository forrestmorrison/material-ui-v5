import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11,
                    },
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9,
                    },
                },
            ]
        }
    }
})

const TourCard = () => {
  return (
    <Grid item xs={3}>
        <ThemeProvider theme={theme}>
            <Paper elevation={3}>
                <img 
                    src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg" 
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
                        <AccessTime sx={{width: 12.5}}/>
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            5 hours
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center"
                        }}
                        marginTop={1}
                    >
                        <Rating 
                            name="read-only"
                            value={4.5}
                            readOnly
                            precision={0.5}
                            size="small"
                        />
                        <Typography variant="body3" component="p" marginLeft={1.5}>
                            (444 reviews)
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h3" marginLeft={0.5} marginTop={0.5}>
                            444 reviews
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </ThemeProvider>
    </Grid>
  )
}

export default TourCard