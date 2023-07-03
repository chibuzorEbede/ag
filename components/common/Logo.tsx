import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <div className="logo min-w-min">
      <Link href='/'>
        <Image src="/img/agserver_logo.png" width={300} height={57} alt='agserver_logo'></Image>
      </Link >
    </div>
  );
}