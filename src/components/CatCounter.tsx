import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import * as tsx from 'vue-tsx-support'
import CatLogic from '@/logic/CatLogic'
import stash from '@/logic/stash'

type CatCounterComponentProps = {
  dummy?: string
}

@Component
export default class CatLogicComponent extends tsx.Component<CatCounterComponentProps> {
  catLogic = CatLogic

  // mounted() {
  //   console.log(this.catLogic)
  // }

  render(): VNode {
    return (
      <div>
        <button
          onClick={() => {
            this.catLogic.makeLessCats()
          }}
        >
          -- 🐈
        </button>
        {this.catLogic.countOfCats}
        <button
          onClick={() => {
            this.catLogic.makeMoreCats()
          }}
        >
          ++ 🐈
        </button>
      </div>
    )
  }
}
