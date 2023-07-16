import { Button } from "@chakra-ui/react";
import Link from "next/link";

const ProfileButton = () => {
  return (
    <Link href="/profile">
      <Button colorScheme="gray" variant="ghost">
        PROFILE
      </Button>
    </Link>
  );
};

export default ProfileButton;
