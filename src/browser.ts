import * as main from '~/main.ts'

if (typeof window !== 'undefined' && !window['ChainElement']) {
    window['ChainElement'] = main
}
