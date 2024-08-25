import Logo from "@/public/assets/Logo.svg";
import Menu from "@/public/assets/Menu.svg";
import User from "@/public/assets/User.svg";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="flex w-full justify-between items-center px-4 py-5 h-[76px] ">
      <div>
        <Image src={Logo} alt="Logo du site" />
      </div>

      <div className="flex items-center gap-x-5">
        <Image src={User} alt="user" />
        <Image src={Menu} alt="Menu" />
      </div>
    </nav>
  );
}
