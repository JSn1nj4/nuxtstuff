import {ComputedRef, Ref} from "@vue/reactivity";
import {FunctionCollection} from "~/library/types/basic-constructs";

export interface IFieldIO<T> {
  listener: (e: Event) => void
  input: Ref<T>
  output: ComputedRef<T>
  filters: FunctionCollection
  filter: Ref<Function>
}

export class FieldIO implements IFieldIO<string>{
  input: Ref<string>
  filters: FunctionCollection
  filter: Ref<Function>
  output: ComputedRef<string>

  constructor(filters: any = {}) {
    this.input = ref('')
    this.filters = {
      default: (v: string) => v,
      ...filters,
    }
    this.filter = ref<Function>(this.filters.default)
    this.output = computed((): string => this.filter.value(this.input.value))
  }

  listener(e: Event): void {
    this.input.value = (e.target as HTMLInputElement).value
  }
}
