import './App.css';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import TourCard from './components/TourCard';

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TourCard />
          </Grid>
          <Grid item xs={3}>
            <TourCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
