import { expect } from 'chai';
// import sinon from 'sinon';

import add from '../src/add.js'

describe('加法函数测试', () => {
	it('1+1 应该等于 2',function() {
		expect(add(1, 1)).to.be.equal(2)
	})

	it('任何数加0应该等于自身',() => {
		expect(add(0, 4)).to.be.equal(4)
		expect(add(0, 0)).to.be.equal(0)
	})

	it('add 是个函数', () => {
		expect(add).to.be.an('function')
	})
})