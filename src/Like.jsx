import { toast } from "react-toastify";
import { toggleLike } from "./demoStore";

// Demo-only like (localStorage). Keeps the same API used by the UI.
export function like(restroom, user) {
  if (!user) {
    toast.error("Please log in to like a restroom.");
    return;
  }
  toggleLike({
    id: restroom.id,
    name: restroom.name,
    image: restroom.image,
    location: restroom.location
  });
  toast.success("Saved to your likes (demo).");
}
