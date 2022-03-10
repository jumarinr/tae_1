import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Home from '../imports/ui/Home/Home.jsx';

Meteor.startup(() => {
  render(<Home />, document.getElementById('react-target'));
});
