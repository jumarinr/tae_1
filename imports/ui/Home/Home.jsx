import React, { useState } from 'react';

// material ui core
import Grid from '@mui/material/Grid';

import Info from './Info.jsx';
import Formulario from './Formulario.jsx';
import Graficas from './Graficas/Graficas.jsx';

const Home = () => {
  const [formValues, setFormValues] = useState({
    asumirGenero: true,
    file: null,
  });

  const [dataChart, setdataChart] = useState(null);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Info />
      </Grid>

      <Grid item xs={12} md={6}>
        <Formulario
          formValues={formValues}
          setFormValues={setFormValues}
          setdataChart={setdataChart}
        />
      </Grid>

      {dataChart
        ? (
          <Grid item xs={12}>
            <Graficas dataChart={dataChart} formValues={formValues} />
          </Grid>
        )
        : null}

    </Grid>
  );
};

Home.propTypes = {};

export default Home;
