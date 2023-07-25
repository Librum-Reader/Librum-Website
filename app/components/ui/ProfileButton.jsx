import { Button } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ProfileButton = () => {
  const path = usePathname();

  return (
    <Link href="/profile">
      <Button
        colorScheme="gray"
        variant={path == "/" ? "navLinkHome" : "navLink"}
      >
        PROFILE
      </Button>
    </Link>
  );
};

export default ProfileButton;
