import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="p-24">
      <div>
        <h1 className="font-medium text-2x1">
          ようこそ! Best Keyboardへ!!
        </h1>
        <p className="py-4">
          あなたが理想とするキーボードを探すたびに出ませんか？
        </p>
      </div>
      <div className="flex gap-4 items-center">
      <Button>hello world</Button>
      <Button>hello world</Button>
      <Button>hello world</Button>
      </div>
    </main>
  )
}
