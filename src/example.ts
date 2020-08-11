import { createElement, addStyle, mount } from '~/main.ts'

const black = addStyle({
    color: 'black',
})
const app = createElement('div').use(black)

mount('#app', app)
