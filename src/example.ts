import { createElement, addStyle, mount } from '~/main.ts'

const black = addStyle({
    color: 'black',
})

const app = createElement('div')?.use(black)

createApp(() => {
    mount('#app', app)
})

function createApp(cb: () => void) {
    const el = document.createElement('div')
    el.id = '#app'
    document.body.appendChild(el)
    cb()
}
