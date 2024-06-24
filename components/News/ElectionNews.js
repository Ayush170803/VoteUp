
import { NavbarAnimate } from "../utils/NavbarAnimate";
import Newsfetch from "./Newsfetch";
import Headernews from "./Header";
const ElectionNews = ()=>
    {
        return(
            <>
            {NavbarAnimate()};
            <Headernews/>
            <Newsfetch/>
            </>
    )
}

export default ElectionNews;