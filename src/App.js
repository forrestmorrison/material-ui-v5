import './App.css';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

import SearchAppBar from './components/AppBar';
import TourCard from './components/TourCard';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container sx={ { marginY: 5 } }>
        <Grid container spacing={2}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
