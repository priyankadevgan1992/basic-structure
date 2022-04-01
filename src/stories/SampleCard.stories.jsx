/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import SampleCard from '../components/SampleCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TGS/SampleCard',
  component: SampleCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    textColor: {
      options: ['primary', 'secondary'],
      control: { type: 'select' }
    },
    bottomTextColor: { control: 'color'}
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return <SampleCard {...args} />;
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  heading: 'Sessions',
  primaryText: '98.3 K',
  lastText: 'vs. last week'
};

export const Secondary = Template.bind({});
Secondary.args = {
  heading: 'Progress',
  primaryText: '7 %',
  lastText: 'vs last month'
};
