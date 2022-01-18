import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ApplicantPage } from './index';

export default {
  title: 'Components/Page/ApplicantPage',
  component: ApplicantPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ApplicantPage>;

const Template: ComponentStory<typeof ApplicantPage> = () => <ApplicantPage />;

export const Primary = Template.bind({});
