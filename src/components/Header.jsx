import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    level: {
      type: String,
      required: true,
    },
  },
  setup(props, { slots }) {
    let tag = 'h' + props.level
    return () => <tag>{slots.default()}</tag>
  },
})
