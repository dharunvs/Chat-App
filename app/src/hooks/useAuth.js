import { fb } from "../service/firebase";
import { useEffect, useState } from "react";

export const authState = () => {
  const [authUser, setAuthUser] = useState();

  useEffect(() => {
    const unsubscribe = fb.auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }

      return unsubscribe;
    });
  });
};
