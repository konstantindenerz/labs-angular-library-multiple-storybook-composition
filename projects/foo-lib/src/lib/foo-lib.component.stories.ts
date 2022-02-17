import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {FooLibComponent} from './foo-lib.component';
import {FooLibModule} from './foo-lib.module';

export default {
  title: 'Foo Lib / Foo Lib Component',
  component: FooLibComponent,
  decorators: [
    moduleMetadata({ imports: [FooLibModule]}),
  ],
} as Meta;

const Template: Story<FooLibComponent> = (props: FooLibComponent) => ({
  props,
});

export const Default = Template.bind({});
Default.args = {};
