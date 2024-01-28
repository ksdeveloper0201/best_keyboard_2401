import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="p-24">
            <div id="body-head">
                <h1 className="font-medium text-4x1">
                    ようこそ! Best Keyboardへ!!
                </h1>
                <p className="py-4">
                    あなたが理想とするキーボードを探すたびに出ませんか？
                </p>
            </div>
            <div id="topics"></div>
            <div id="new arrival"></div>
            <div id="rankig"></div>
            <div id="recommend"></div>
            <div className="flex gap-4 items-center">
                <div className="flex gap-4">
                    <Button>keyboardを探す</Button>
                    <Button>keyboardとは</Button>
                    <Button>keyboardごとの特徴を見る</Button>
                </div>
            </div>
        </main>
    );
}
