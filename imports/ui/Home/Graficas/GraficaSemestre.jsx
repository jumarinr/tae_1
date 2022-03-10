import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { sumByField } from './helpers';

const GraficaSemestre = ({ data }) => {
  const chartInfo = useMemo(() => {
    if (!data) {
      return [];
    }

    return sumByField({
      field: 'semestre',
      list: data,
    });
  }, [data]);

  return (
    <>
      <div>
        <h4>Semestre</h4>
        <ResponsiveContainer width="100%" height="100%">
          <div>
            <LineChart
              data={chartInfo}
              width={450}
              height={300}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </div>
        </ResponsiveContainer>
      </div>
    </>
  );
};

GraficaSemestre.defaultProps = {
  data: null,
};

GraficaSemestre.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default GraficaSemestre;
