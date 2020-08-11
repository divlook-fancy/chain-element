import { Option } from '~/option.ts'

// TODO: 미완성
export const addStyle = (style: Option.Style) => {
    const option = new Option()

    option.styles.add(style)

    return option
}

// TODO: 미완성
export const addAttr = (key: string, val: string) => {
    const option = new Option()

    if (key === 'style') {
        console.warn('style은 추가할 수 없습니다. `addStyle`을 사용하세요.')
        return option
    }

    // return Promise.resolve(option)
    return option
}

// TODO: 미완성
export const addChild = () => {}

// TODO: 미완성
export const when = (condition, whenTruthy, whenFalsy) => {}
