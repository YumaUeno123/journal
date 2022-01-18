import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HomePage } from './index';

export default {
  title: 'Components/Page/HomePage',
  component: HomePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => <HomePage />;

export const Primary = Template.bind({});
