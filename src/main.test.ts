import { test } from '@jest/globals'

afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks()
})

test('importing main does not crash and logs correctly', () => {
    const consoleLogMock = jest.spyOn(console, 'log').mockImplementation()

    require('./main')

    expect(consoleLogMock).toHaveBeenCalledWith('hello')
})
