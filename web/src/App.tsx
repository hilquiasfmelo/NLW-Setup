import { Habit } from './Components/Habit'

import './styles/global.css'

export function App() {
  return (
    <>
      <Habit completed={3} />
      <Habit completed={10} />
      <Habit completed={15} />
      <Habit completed={20} />
    </>
  )
}
