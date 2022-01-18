import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageTitle } from './index';

export default {
  title: 'Components/Common/PageTitle',
  component: PageTitle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => <PageTitle {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: '申請仕訳一覧',
};
