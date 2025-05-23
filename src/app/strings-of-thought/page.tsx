import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function StringsOfThought() {
  return (
    <main>
      <Navbar />
      <div className="container content">
        <div className="hot-air-balloon-container">
          <Image
            src="/hot-air-balloon.png"
            alt="Hot Air Balloon"
            width={800}
            height={800}
            style={{
              width: '100%',
              maxWidth: '800px',
              height: 'auto',
            }}
            className="hot-air-balloon"
            priority
          />
        </div>
      </div>
    </main>
  )
}