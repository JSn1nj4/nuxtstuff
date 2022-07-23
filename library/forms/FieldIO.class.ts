import {ComputedRef, Ref, unref} from "@vue/reactivity";
import {FunctionCollection} from "~/library/types/basic-constructs";

export interface IFieldIO<T> {
  input: Ref<T>
  _output: ComputedRef<T>
  filters: FunctionCollection
  _filter: Ref<Function>
  listener: Function
}

export class FieldIO implements IFieldIO<string>{
  input: Ref<string>
  filters: FunctionCollection
  _filter: Ref<Function>
  readonly _output: ComputedRef<string>

  constructor(filters: any = {}) {
    this.input = ref('')
    this.filters = {
      default: (v: string) => v,
      ...filters,
    }
    this._filter = ref<Function>(this.filters.default)
    this._output = computed((): string => this._filter.value(this.input.value))
  }

  get output() {
    return unref(this._output)
  }

  set filter(filter: string) {
    if(!this.filters?.[filter]) {
      console.log(`Filter '${filter}' does not exist in filters list.`)
      return
    }

    this._filter.value = this.filters[filter]
  }

  listener(e: Event): void {
    this.input.value = (e.target as HTMLInputElement).value
  }
}
