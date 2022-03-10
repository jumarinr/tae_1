import {
  Tooltip, ResponsiveContainer, PieChart, Pie,
} from 'recharts';

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { sumByField } from './helpers';

const GraficaGenero = ({ data }) => {
  const chartInfo = useMemo(() => {
    if (!data) {
      return [];
    }

    return sumByField({
      field: 'genero',
      list: data,
    });
  }, [data]);

  return (
    <>
      <div>
        <h4>Genero</h4>
        <ResponsiveContainer width="100%" height="100%">
          <div>
            <PieChart width={300} height={300}>
              <Pie
                dataKey="total"
                isAnimationActive={false}
                data={chartInfo}
                cx="50%"
                cy="50%"
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </div>
        </ResponsiveContainer>
      </div>
    </>
  );
};

GraficaGenero.defaultProps = {
  data: null,
};

GraficaGenero.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default GraficaGenero;
