import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OldJournalPage } from './index';

export default {
  title: 'Components/Page/OldJournalPage',
  component: OldJournalPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof OldJournalPage>;

const Template: ComponentStory<typeof OldJournalPage> = () => <OldJournalPage />;

export const Primary = Template.bind({});
