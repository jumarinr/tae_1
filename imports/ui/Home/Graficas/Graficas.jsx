import React from 'react';
import PropTypes from 'prop-types';

// material ui core
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';

import GraficaEdad from './GraficaEdad.jsx';
import GraficaPrograma from './GraficaPrograma.jsx';
import GraficaSemestre from './GraficaSemestre.jsx';
import GraficaPasatiempo from './GraficaPasatiempo.jsx';
import GraficaGenero from './GraficaGenero.jsx';
import GraficaLaboral from './GraficaLaboral.jsx';

const Graficas = ({ dataChart, formValues }) => (
  <>
    <Card variant="outlined">
      <CardHeader title="Análisis caracteristicas" />
      <CardContent>

        <Grid container>
          <Grid item xs={12} md={4}>
            <GraficaEdad data={dataChart} />
          </Grid>

          <Grid item xs={12} md={4}>
            <GraficaPrograma data={dataChart} />
          </Grid>

          <Grid item xs={12} md={4}>
            <GraficaSemestre data={dataChart} />
          </Grid>

          <Grid item xs={12} md={4}>
            <GraficaPasatiempo data={dataChart} />
          </Grid>

          {formValues.asumirGenero
            ? (
              <Grid item xs={12} md={4}>
                <GraficaGenero data={dataChart} />
              </Grid>
            )
            : null}

          <Grid item xs={12} md={4}>
            <GraficaLaboral data={dataChart} />
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  </>
);

Graficas.defaultProps = {
  dataChart: null,
};

Graficas.propTypes = {
  dataChart: PropTypes.arrayOf(PropTypes.object),
  formValues: PropTypes.object.isRequired,
};

export default Graficas;
