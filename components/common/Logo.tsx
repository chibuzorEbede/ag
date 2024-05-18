import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <Link href='/' className="shrink-0">
      <Image src="/img/agserver_logo.png" width={284} height={45} alt='agserver_logo' />
    </Link >

  );
}