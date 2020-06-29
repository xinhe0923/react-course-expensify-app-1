import React from 'react';
import {shallow} from 'enzyme'
import Header from '../../components/Header'
import ReactShallowRenderer from 'react-test-renderer/shallow'

test('should render header correctly',()=>{
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot()
    //extract just the meaningful stuff, the rendered output
    // expect(wrapper.find('h1').text()).toBe('Expensify')
    // const renderer=new ReactShallowRenderer();
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
    // console.log(renderer.getRenderOutput())
})