import {
  Tooltip, ResponsiveContainer, PieChart, Pie,
} from 'recharts';

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { sumByField } from './helpers';

const GraficaPasatiempo = ({ data }) => {
  const chartInfo = useMemo(() => {
    if (!data) {
      return [];
    }

    return sumByField({
      field: 'pasatiempo',
      list: data,
    });
  }, [data]);

  return (
    <>
      <div>
        <h4>Pasatiempo</h4>
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

GraficaPasatiempo.defaultProps = {
  data: null,
};

GraficaPasatiempo.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default GraficaPasatiempo;
