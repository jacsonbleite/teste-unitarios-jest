const { sum, inOneHour } = require('./functions');

describe('teste funções matemáticas', () => {
	beforeAll(() => {
		console.log("roda antes de todos os teste");
	})

	beforeEach(() => {
		console.log("Roda a cada teste");
	})

	afterAll(() => {
		console.log("Roda depois de todos os testes");
	})

	afterEach(() => {
		console.log("Roda após cada teste");
	})
	
	it('Soma 2 números', () => {
		expect(sum(1, 2)).toBe(3)
	})

	it('Soma 2 números', () => {
		expect(sum(4, 5)).toBe(9)
	})

	it('Soma 2 números', () => {
		expect(sum(3, 12)).toBe(15)
	})
})


describe('função de tempo', () => {
	it('Retorna timestamp de uma hora', () => {
		const realDateNow = Date.now.bind(global.Date);

		// global.Date.now = () => 0;
		global.Date.now = jest.fn(() => 0)

		expect(inOneHour()).toBe(3600000);

		global.Date.now = realDateNow;
	})
})