import Home from "@/src/screens/Home"
import { StatusBar } from "react-native";

export default function Index() {


  return (

    <>
      <StatusBar
        barStyle="dark-content"
        showHideTransition={'fade'}
      />
      <Home />

    </>

  )
}


