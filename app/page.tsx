import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="p-24">
      <div>
        <h1 className="font-medium text-4x1">
          ようこそ! Best Keyboardへ!!
        </h1>
        <p className="py-4">
          あなたが理想とするキーボードを探すたびに出ませんか？
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <div>
          <Button>keyboardを探す</Button>
        </div>
        <div>
          <Button>keyboardとは</Button>
        </div>
        <div>
          <Button>keyboardごとの特徴を見る</Button>
        </div>
      </div>
    </main>
  )
}
