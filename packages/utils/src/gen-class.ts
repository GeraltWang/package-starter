import classNames from 'classnames'
import { computed } from 'vue'

type BEMType = string | [string, 'B' | 'E' | 'M' | undefined]

export function useClassNames(componentName: string) {
  const prefix = 'uu'
  const componentClass = `${prefix}-${componentName}`
  const c = (...args: BEMType[]) => {
    if (args.length) {
      return args.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
          const [arg1, arg2] = cur
          if (arg2 === 'E')
            return `${acc}__${arg1}`
          if (arg2 === 'M')
            return `${acc}--${arg1}`
        }
        return `${acc}-${cur}`
      }, componentClass)
    }
    return componentClass
  }

  const ce = (e: string) => [e, 'E'] as BEMType

  const cm = (m: string) => [m, 'M'] as BEMType

  const cx = (cls: () => Record<string, boolean>) => {
    return computed(() => classNames(cls()))
  }
  return {
    c,
    cx,
    ce,
    cm,
  }
}
