import Link from "next/link";

function KeyboardType() {
    const keyboardTypeText = `keyboard type sample`;
    return (
        <>
            <div className="p-5">
                <h1>Keyboard Type</h1>
            </div>
            <div className="p-5">
                <p>{keyboardTypeText}</p>
            </div>
            <div className="p-5 flex">
                <Link href={"/"}>Homeに戻る</Link>
            </div>
        </>
    );
}

export default KeyboardType;
