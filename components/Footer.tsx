import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";
import { AiFillApple } from "@react-icons/all-files/ai/AiFillApple";
import { FaGooglePlay } from "@react-icons/all-files/fa/FaGooglePlay";


function Footer() {
    return (
        <div className="flex justify-center m-10">
            <AiFillFacebook className="mx-4" />
            <AiOutlineInstagram className="mx-4" />
            <AiFillYoutube className="mx-4" />
            <AiFillApple className="mx-4" />
            <FaGooglePlay className="mx-4" />
        </div>
    );
}

export default Footer;