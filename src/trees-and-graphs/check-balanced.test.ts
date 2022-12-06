import { describe, test, expect } from '@jest/globals'
import { isBalanced } from './check-balanced'


function generateSmallBalancedTree() {
    return {
        value: 6,
        left: {
            value:5
        },
        right: {
            value:7
        }

    }
}

function generateSmallNonBalancedTree() {
    return {
        value: 6,
        right: {
            value:7,
            right: {
                value:8
            }
        }

    }
}

function generateLargeNotBalancedTree() {
    return {
        value: 5,
        left: {
            value: 3,
            left: {
                value: -1,
                left: {
                    value: -2
                }
            }
        },
        right: {
            value: 7,
            left: {
                value: 6
            },
            right: {
                value: 90,
                left: {
                    value: 30
                },
                right: {
                    value: 100,
                    right: {
                        value: 102
                    }
                }
            }
        }

    }
}

function generateLargeBalancedTree() {
    return {
        value: 5,
        left: {
            value: 3,
            left: {
                value: -1,
            },
            right: {
                value: -2
            }
        },
        right: {
            value: 7,
            left: {
                value: 6
            },
            right: {
                value: 90,
                left: {
                    value: 30
                },
                right: {
                    value: 100,
                }
            }
        }

    }
}

describe('checkBalanced test', () => {
    test('correctly checks null cases', () => {
        expect(isBalanced(undefined)).toEqual(true)
        expect(isBalanced({ value:6 })).toEqual(true)
    })


    test('correctly checks balanced and inbalanced bsts', () => {
        expect(isBalanced(generateSmallBalancedTree())).toEqual(true)
        expect(isBalanced(generateSmallNonBalancedTree())).toEqual(false)
        expect(isBalanced(generateLargeNotBalancedTree())).toEqual(false)
        expect(isBalanced(generateLargeBalancedTree())).toEqual(true)
    })

})