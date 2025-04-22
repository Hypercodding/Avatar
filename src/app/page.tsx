import { Avatar } from "@/components.tsx/Avatar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Avatar
        variant="cyan"
        src="pic.jpg"
        size="md"
        border="full"
        userName="Hammad"
      />
    </div>
  );
}
