import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ApproverPage } from './index';

export default {
  title: 'Components/Page/ApproverPage',
  component: ApproverPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ApproverPage>;

const Template: ComponentStory<typeof ApproverPage> = () => <ApproverPage />;

export const Primary = Template.bind({});
