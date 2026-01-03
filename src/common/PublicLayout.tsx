import { Outlet } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import NavBar from "../components/ui/navbar/NavBar";

export default function PublicLayout(){

    return(
        <ReactLenis root options={{ anchors: true }}>
          <NavBar />
          <Outlet />
        </ReactLenis>
    )
}
