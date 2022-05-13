import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Nprogress.configure({
  easing: 'ease',
  speed: 1000,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3,
})

export const start = () => {
  Nprogress.start()
}

export const close = () => {
  Nprogress.done()
}
