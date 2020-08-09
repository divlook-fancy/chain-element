import { Instance } from '~/instance.ts'

// TODO: 미완성
export interface Option {
    readonly parent: Instance
    readonly childs: Instance[]
    readonly styles: []
    readonly attrs: []
}
