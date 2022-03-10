import React from 'react';

// material ui core
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import styles from './styles.jsx';

const Info = () => {
  const classes = styles();

  return (
    <>
      <Card variant="outlined">
        <CardHeader title="Análisis descriptivo de los integrantes del curso" />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div>
                Con la información en el archivo se creará un reporte que describa las
                características de las personas considerando como mínimo las siguientes variables:
                <ul>
                  <li>Programa académico</li>
                  <li>Género *</li>
                  <li>Semestre</li>
                  <li>Pasatiempo</li>
                  <li>Inserción al mercado laboral</li>
                </ul>
                <div className={classes.infoFormat}>
                  * Para analizar el genero debe indicar la opción de sí
                </div>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

Info.propTypes = {};

export default Info;
