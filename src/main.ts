import './style.css'
import { formatDate } from "date-fns";

document.addEventListener('DOMContentLoaded', () => {
  initDateTime()
})

function initDateTime() {
  const element = document.querySelector<HTMLDivElement>('#app')!

  const perform = () => {
    const dt = new Date()

    const date = formatDate(dt, 'dd MMM y')
    const amPm = formatDate(dt, 'a').toLowerCase()
    const time = formatDate(dt, 'h:mm')

    element.innerHTML = `
      <div class="clock">
        <span class="clock__time">
          ${time}<span class="clock__am-pm">${amPm}</span>
        </span>
        <span class="clock__date">
          ${date}
        </span>
      </div>
    `
  }

  perform()

  setInterval(() => {
    perform()
  }, 10000)
}
