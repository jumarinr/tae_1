import React from 'react';
import PropTypes from 'prop-types';

// material ui core
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

// material ui core
import UploadFileIcon from '@mui/icons-material/UploadFile';

import styles from './styles.jsx';
import methodCall from '../utils/methodCall.js';

const Formulario = ({
  formValues, setFormValues, setdataChart,
}) => {
  const classes = styles();

  const onChangeRadio = (event) => {
    const { value } = event.target;

    setFormValues({
      ...formValues,
      asumirGenero: value === 'true',
    });
  };

  const onChangeFile = () => {
    const input = document.getElementById('file_upload');
    const [fileInfo] = input.files;
    const reader = new FileReader();

    reader.readAsText(fileInfo);
    reader.onload = (file) => {
      setFormValues({
        ...formValues,
        file: {
          content: file.target.result,
          name: fileInfo.name,
          type: fileInfo.type,
          size: fileInfo.size,
        },
      });
    };
  };

  const onSubmit = async () => {
    const { data } = await methodCall('retornarJSON', formValues);

    setdataChart(data.data);
  };

  return (
    <>
      <Card variant="outlined">
        <CardHeader title="Cargue de archivo para análisis" />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Desea asumir el genero a partir del primer nombre?</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={formValues.asumirGenero}
                  name="radio-buttons-group"
                  onChange={onChangeRadio}
                >
                  <FormControlLabel value control={<Radio />} label="Si" />
                  <FormControlLabel value={false} control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormLabel id="demo-radio-buttons-group-label">
                Por favor anexe el documento en csv o txt con el formato* indicado
              </FormLabel>
              <label htmlFor="file_upload">
                <input className={classes.emptyInput} accept=".csv,.txt" id="file_upload" type="file" onChange={onChangeFile} />
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <UploadFileIcon />
                </IconButton>
              </label>

              <div className={classes.infoFormat}>
                <b>* Formato: </b>
                Nombre|Programa académico|Edad|Semestre|
                Trabaja actualmente (si o no)|Pasatiempo
              </div>
            </Grid>

            {formValues.file
              ? (
                <Grid item xs={12}>
                  <div>
                    <b>Archivo: </b>
                    {formValues.file.name}
                  </div>
                </Grid>
              )
              : null}

            <Grid item xs={12}>
              <div className={classes.buttonDiv}>
                <Button variant="contained" size="small" className={classes.button} onClick={onSubmit}>
                  Realizar análisis
                </Button>
              </div>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

Formulario.propTypes = {
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  setdataChart: PropTypes.func.isRequired,
};

export default Formulario;
