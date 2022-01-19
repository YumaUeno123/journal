import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserNameWithAvatar } from './index';

export default {
  title: 'Components/Domain/User/UserNameWithAvatar',
  component: UserNameWithAvatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UserNameWithAvatar>;

const Template: ComponentStory<typeof UserNameWithAvatar> = (args) => (
  <UserNameWithAvatar {...args} />
);

const person = {
  name: 'テスト 太郎',
  avatar: '/static/images/avatar/1.jpg',
};

export const Small = Template.bind({});

Small.args = {
  ...person,
  size: 'small',
};

export const Middle = Template.bind({});

Middle.args = {
  ...person,
  size: 'middle',
};

export const Large = Template.bind({});

Large.args = {
  ...person,
  size: 'large',
};

export const NoSpecifiedSize = Template.bind({});

NoSpecifiedSize.args = {
  ...person,
};
