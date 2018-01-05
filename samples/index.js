import React from 'react';

import { samplesOf, action, linkTo } from 'teasim-samples';

import Button from './Button';
import Welcome from './Welcome';

samplesOf('Welcome', module).add('to sample', () => <Welcome showApp={linkTo('Button')} />);

samplesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
