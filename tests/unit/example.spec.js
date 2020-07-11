import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('renders msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(App, {
      data() {
        return {
          msg,
        };
      },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
