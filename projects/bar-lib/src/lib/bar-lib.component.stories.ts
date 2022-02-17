import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BarLibComponent} from './bar-lib.component';
import {BarLibModule} from './bar-lib.module';

export default {
  title: 'Bar Lib / Bar Lib Component',
  component: BarLibComponent,
  decorators: [
    moduleMetadata({ imports: [BarLibModule]}),
  ],
} as Meta;

const Template: Story<BarLibComponent> = (props: BarLibComponent) => ({
  props,
});

export const Default = Template.bind({});
Default.args = {};
