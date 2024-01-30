import Image from "next/image";
import { Button } from "@/components/ui/button";
import Topics from "@/components/Topics";
import NewArrival from "@/components/NewArrival";
import Ranking from "@/components/Ranking";
import Recommend from "@/components/Recommend";

export default function Home() {
    const src = "/images/antique-typewriter-close-up-of-metal-typebars-typing-text-generated-by-ai.jpg"
    return (
        <main>
            <div id="main-image" className="h-96 w-full relative overflow-hidden">
                <Image src={src} alt="tipe-writer-image" layout="fill" objectFit="cover" />
                <p className="absolute bottom-2 right-2 text-white text-sm">
                    <a href="https://jp.freepik.com/free-photo/antique-typewriter-close-up-of-metal-typebars-typing-text-generated-by-ai_41438114.htm#query=%E3%82%BF%E3%82%A4%E3%83%97%E3%83%A9%E3%82%A4%E3%82%BF%E3%83%BC&position=2&from_view=keyword&track=sph&uuid=1e89ef2b-628d-4005-9399-b29008a0218d">著作者：vecstock</a>／出典：Freepik
                </p>
            </div>
            <div className="max-w-4xl mx-auto">
                <div id="main-body" className="flex justify-center mt-8">
                    <div id="body-main-text">
                        <h1 className="font-bold text-5xl p-5 bg-neutral-500 text-white text-center">
                            ようこそ! lifesaddleへ!!
                        </h1>
                        <p className="py-4 bg-neutral-400 text-lg px-6">
                            あなたが理想とするキーボードを探すたびに出ませんか？
                        </p>
                    </div>
                </div>
                <div id="topics" className="my-8">
                    <Topics />
                </div>
                <div id="new arrival" className="my-8">
                    <NewArrival />
                </div>
                <div id="rankig" className="my-8">
                    <Ranking />
                </div>
                <div id="recommend" className="my-8">
                    <Recommend />
                </div>
                <div className="flex gap-4 items-center justify-center my-8">
                    <div className="flex gap-4">
                        <Button className="shadow-lg hover:bg-blue-500 hover:text-white transition-colors">keyboardを探す</Button>
                        <Button className="shadow-lg hover:bg-blue-500 hover:text-white transition-colors">keyboardとは</Button>
                        <Button className="shadow-lg hover:bg-blue-500 hover:text-white transition-colors">keyboardごとの特徴を見る</Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
