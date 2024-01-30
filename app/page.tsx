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
            <div id="main-image" className="h-300">
                <img src={src} alt="tipe-writer-image" className="object-fill" />
            </div>
            <div >

                <div id="main-body" className="flex justify-center">
                    <div id="body-main-text">
                        <h1 className="font-black text-4x1 p-10 bg-neutral-500">
                            ようこそ! lifesaddleへ!!
                        </h1>
                        <p className="py-4 bg-neutral-400">
                            あなたが理想とするキーボードを探すたびに出ませんか？
                        </p>
                        <p>
                            <a href="https://jp.freepik.com/free-photo/antique-typewriter-close-up-of-metal-typebars-typing-text-generated-by-ai_41438114.htm#query=%E3%82%BF%E3%82%A4%E3%83%97%E3%83%A9%E3%82%A4%E3%82%BF%E3%83%BC&position=2&from_view=keyword&track=sph&uuid=1e89ef2b-628d-4005-9399-b29008a0218d">著作者：vecstock</a>／出典：Freepik
                        </p>
                    </div>
                </div>
                <div id="topics">
                    <Topics />
                </div>
                <div id="new arrival">
                    <NewArrival />
                </div>
                <div id="rankig">
                    <Ranking />
                </div>
                <div id="recommend">
                    <Recommend />
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex gap-4">
                        <Button>keyboardを探す</Button>
                        <Button>keyboardとは</Button>
                        <Button>keyboardごとの特徴を見る</Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
