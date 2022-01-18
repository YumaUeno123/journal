import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu } from './Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpIcon from '@mui/icons-material/Help';

export default {
  title: 'Components/Common/Header/Menu',
  component: Menu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  title: '株式会社AAA',
  menuItems: [
    {
      label: '株式会社AAA',
      onClick: () => console.log('clicked 株式会社AAA'),
    },
    {
      label: '事業者・年度切替',
      onClick: () => console.log('clicked 事業者・年度切替'),
    },
  ],
};

export const IconTitle = Template.bind({});

IconTitle.args = {
  title: <HelpIcon />,
  menuItems: [
    {
      label: 'このページのガイド',
      onClick: () => console.log('clicked このページのガイド'),
    },
    {
      label: 'サポートサイト',
      onClick: () => console.log('clicked サポートサイト'),
    },
    {
      label: 'お問い合わせフォーム',
      onClick: () => console.log('clicked お問い合わせフォーム'),
    },
  ],
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  title: 'テスト 太郎',
  buttonIcon: <ArrowDropDownIcon />,
  menuItems: [
    {
      label: 'メールアドレス変更',
      onClick: () => console.log('clicked メールアドレス変更'),
    },
    {
      label: 'パスワード変更',
      onClick: () => console.log('clicked パスワード変更'),
    },
    {
      label: 'ログアウト',
      onClick: () => console.log('clicked ログアウト'),
    },
  ],
};
