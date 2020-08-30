import { Option } from '~/core/option'

/**
 * 옵션들을 하나로 조합
 * TODO: 미완성
 */
export interface Compose {
    (...option): Option
}

// TODO: 미완성
export const compose = () => {}
