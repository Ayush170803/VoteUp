import Headernews from "./Header.js";
import { NavbarAnimate } from "../utils/NavbarAnimate";
const ElectionNews = ()=>
    {
        return(
            <>
            {NavbarAnimate()};
            <Headernews/>
            </>
    )
}

export default ElectionNews;