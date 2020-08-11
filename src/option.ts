import { Instance } from '~/instance.ts'

// TODO: 미완성
export class Option {
    #parent: Option = null
    #childs = new Set<Instance>()
    #styles = new Set<Option>()
    #attrs = new Set<Option>()

    get parent(): Option {
        return this.#parent
    }
    set parent(parent: Option) {
        // TODO: Instance가 아니면 실행 거부
        this.#parent = parent
    }
    get childs(): Set<Instance> {
        return this.#childs
    }
    get styles(): Set<Option> {
        return this.#styles
    }
    get attrs(): Set<Option> {
        return this.#attrs
    }
}
