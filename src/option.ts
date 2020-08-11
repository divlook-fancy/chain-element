import { Instance } from '~/instance.ts'

export namespace Option {
    export type Style = Partial<CSSStyleDeclaration>
}

// TODO: 미완성
export class Option {
    #parent: Instance = null
    #childs: Instance[] = []
    #styles = new Set<Option.Style>()
    #attrs = new Map<string, string | number>()

    get parent(): Instance {
        return this.#parent
    }
    set parent(parent: Instance) {
        // TODO: Instance가 아니면 실행 거부
        this.#parent = parent
    }
    get childs(): Instance[] {
        return this.#childs
    }
    get styles(): Set<Option.Style> {
        return this.#styles
    }
    get attrs(): Map<string, string | number> {
        return this.#attrs
    }
}
