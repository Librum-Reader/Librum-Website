import { Button } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ProfileButton = () => {
  let inactive;
  let active;

  const path = usePathname();
  if (path === "/") {
    inactive = "navLinkHome";
    active = "navActive";
  } else {
    active = "navActive";

    inactive = "navLink";
  }

  return (
    <Link href="/profile" className={"nav-hover"}>
      <Button variant={path === "/profile" ? active : inactive}>PROFILE</Button>
    </Link>
  );
};

export default ProfileButton;
