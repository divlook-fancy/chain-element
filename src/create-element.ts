import { Instance } from '~/instance.ts'

export interface CreateElement{
    (elementName: string): Instance
}

// TODO: 미완성
export const createElement: CreateElement = (elementName: string) => {
    let instance!:Instance

    return instance
}
