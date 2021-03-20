import { useEffect } from "react";
import fb from "./service/firebase";

const App = () => {
  useEffect(() => {
    fb.firestore
      .collection("chatUsers")
      .where("userName", "==", "dharunvs")
      .get()
      .then((res) => {
        const user = res.docs[0]?.data();
        console.log(user);
      });
  }, []);

  return <>Hello from Dharun</>;
};

export default App;
