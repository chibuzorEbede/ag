import Image from "next/image";
import Link from "next/link";
export default function LogoMobile() {
    return (
        <Link href='/' className="shrink-1">
            <Image src="/img/logo-mobile.png" width={50} height={45} alt='agserver_logo' />
        </Link >

    );
}