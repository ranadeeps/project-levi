import Image from 'next/image'
import styles from './page.module.css'
import ChatWindow from './components/ChatWindow'
import Inputbox from './components/Inputbox'

export default function Home() {
  return (
    <main className={styles.main}>
      <ChatWindow></ChatWindow>
      
    </main>
  )
}
