import Navigo from "navigo";  
import Home from "./pages/home.js";
import Short from "./pages/short.js";
import Sub from "./pages/sub.js";
import { Video1 } from "./pages/home.js";
import { Video2 } from "./pages/home.js";
import { Video3 } from "./pages/home.js";
import { Video4 } from "./pages/home.js";
const router = new Navigo("/");

    router.on("/", () => {
        Home();
    });
    router.on("/short",()=>{
        Short();
    })
    router.on("/sub",()=>{
        Sub();
    })
    router.on("/video1",()=>{
        Video1();
    })
    router.on("/video2",()=>{
        Video2();
    })
    router.on("/video3",()=>{
        Video3();
    })
    router.on("/video4",()=>{
        Video4();
    })

    router.resolve();

export { router };
