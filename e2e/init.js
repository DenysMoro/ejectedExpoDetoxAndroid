const detox = require('detox')
const adapter = require('detox/runners/jest/adapter')
const config = require('../package.json').detox

jest.setTimeout(300000)
// jasmine.getEnv().addReporter(adapter)
console.log(1)

beforeAll(async () => {
    await detox.init(config)
    await device.launchApp({
        permissions: { notifications: 'YES' },
    })
}, 300000)

beforeEach(async () => {
    // await adapter.beforeEach()
})

afterAll(async () => {
    // await adapter.afterAll()
    await detox.cleanup()
})
