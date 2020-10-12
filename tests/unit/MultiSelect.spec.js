import Vue from 'vue'
import { mount } from '@vue/test-utils'
import MultiSelect from '@/components/core/MultiSelect.vue'


global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
const mockSuccessResponse = {"data": [
  "Literatuur &amp; Romans",
  "Thrillers",
  "Fantasy",
  "Kinderboeken",
  "Young Adult",
  "Kookboeken",
  "Reisboeken",
  "Kunst, Fotografie &amp; Architectuur",
  "Psychologie"
]};

beforeEach(() => {
  fetch.mockClear();
  
  const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
  const mockFetchPromise = Promise.resolve({ // 3
    json: () => mockJsonPromise,
  });
  
  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4
});

describe('MultiSelect', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MultiSelect)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('Multiselect fetch data on mount', async () => {
    const wrapper = mount(MultiSelect)
    expect(global.fetch).toHaveBeenCalledTimes(1)
    wrapper.setData({multiSelectData:mockSuccessResponse.data})
    console.log(mockSuccessResponse.data)
    await Vue.nextTick()
    console.log(wrapper.vm.$data.multiSelectData)    
  })
})
