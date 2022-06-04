import TOSLogo from "./logo"
import { useEffect, useState } from 'react';
import {BsSearch} from 'react-icons/bs'
export function LeftSideNav() {
    const [offset, setOffset] = useState(0);
    const [stickMenu, setstickMenu] = useState(false);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    useEffect(()=>{
        if (offset > 130) {
            setstickMenu(true)
        }else{
            setstickMenu(false)
        }
    },[offset])
    return(<>
    <div>
    <TOSLogo></TOSLogo>
     <div className={stickMenu ? `fixed top-16`:`mt-4`}>
         <form className="w-fit mb-3 shadow-[3px_3px_0px_0px] relative shadow-gray-200 border border-black p-2">
            <div className="flex w-5 h-5 absolute top-1 -left-[17px] text-sm items-center justify-center bg-teal-200 shadow-[2px_2px_0px_0px] shadow-teal-500 text-teal-500">
                <BsSearch></BsSearch>
            </div>
             <div htmlFor="searchID" className="text-sm font-medium">Search</div>
             <input type="text" id="searchID" placeholder="Type something..." className="bg-gray-100 border-gray-400 border px-2 mb-1 py-1 shadow-[3px_3px_0px_0px] shadow-gray-200 text-gray-800 outline-none" />
         </form>
        <h1 className="font-mono text-2xl"><span className="text-gray-300 font-sans mr-1">@</span>Browse</h1>
     </div>
    </div>
    </>)
}
export function RightSideNav() {
    return(<>
    RightSideNav
    </>)
}