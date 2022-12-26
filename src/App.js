import './App.css';
import { Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';

import SearchAppBar from './components/AppBar';
import TourCard from './components/TourCard';

import cities from "./data.json"

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container sx={ { marginY: 5 } }>
        {cities.map((city) => (
          <>
            <Typography 
              variant='h4'
              component='h2'
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour, index) => <TourCard tour={tour} key={index} />)}
            </Grid>
          </>
        ))}
        {/* <Grid container spacing={2}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid> */}
      </Container>
    </div>
  );
}

export default App;
