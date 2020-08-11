import isDom from 'is-dom'
import { Instance } from '~/instance.ts'

export interface Mount {
    (selector: string, instance: Instance): Promise<void>
}

export const mount: Mount = async (selector, instance) => {
    if (!window) {
        console.error('Not a browser.')
        return
    }

    const root = getElement(selector)
    const el = await instance.toDOM()

    root?.appendChild(el)
}

export function getElement(selector: string | Node) {
    if (typeof selector === 'string') {
        return document.querySelector(selector)
    }

    if (isDom(selector)) {
        return selector
    }

    return null
}
