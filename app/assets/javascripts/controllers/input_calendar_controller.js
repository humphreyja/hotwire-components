// Again I use stimulus to control changing the input, label, and selected but you can do the same with just plain JS
import { Controller } from 'stimulus'

export default class extends Controller {
  static get targets() { return ['input', 'link', 'label'] }

  calendarClicked({ target }) {
    if (target.dataset.calendarDayValue) {
      // Set the hidden input value
      this.inputTarget.value = target.dataset.calendarDayValue

      // Change the selected value in the turbo frame param
      this.linkTarget.href = this.linkTarget.href.replace(/selected\=.*\&/, `selected=${target.dataset.calendarDayValue}&`)
      
      // you may want to reformat the date before inserting it into the label
      this.labelTarget.textContent = target.dataset.calendarDayValue
    }
  }
}