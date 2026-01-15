import { ref, set } from "firebase/database";
import { toast } from "react-toastify";
import { auth, db } from './firebase';

export function like(restroom) {
  const user = auth.currentUser;
// for the following code I aksed AI for suggestions of how
// to access the currently authenticated user using `auth.currentUser`
// and use Firebase Realtime Database's `ref()` and `set()` to store a user's favorite restroom
  if (!user) {
    toast.error("Please log in to like a restroom.");
    return;
  }

  const favRef = ref(db, `favorites/${user.uid}/${restroom.id}`);

  set(favRef, {
    id: restroom.id,
    name: restroom.name,
    image: restroom.image,
    location: restroom.location,
  })
    .then(() => {
      toast.success("Restroom added to your favorites!");
    })
    .catch((error) => {
      console.error("Error saving favorite:", error);
      toast.error("Failed to save favorite.");
    });
}