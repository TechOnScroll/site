import { useEffect, useState } from 'react';
import {IoInformationOutline} from 'react-icons/io5'
export default function TOSLogo() {
    const [offset, setOffset] = useState(0);
    const [stickLogo, setstickLogo] = useState(false);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    useEffect(()=>{
        if (offset > 65) {
            setstickLogo(true)
        }else{
            setstickLogo(false)
        }
    },[offset])
    return(<>
    <div className={stickLogo ? 
    `w-fit fixed top-[10px] z-20`
    :
    `w-fit`
    }>
            <div className='border-black relative flex items-center justify-center duration-200 border w-16 h-7 bg-yellow-300 shadow-[3px_3px_0px_0px_rgb(0,0,0)]'>
                <span className="font-yatra">Tech</span>
                <span className={stickLogo ? 
                `font-mono text-md bg-black left-16 text-white pr-2 py-[2px] mt-[5px] rounded-none shadow-md shadow-black/25 absolute flex flex-row items-center` 
                : 
                `font-mono font-medium text-sm bg-black left-[52px] -top-3  text-white pr-2 rounded-md shadow-md shadow-black/50 absolute flex flex-row items-center`
                }>
                    
                    <span className={stickLogo ? `w-1 h-1 ml-1 mr-2 bg-white rounded-md inline-block`:`w-1 h-1 -mb-2 ml-1 mr-2 bg-white rounded-md inline-block`}></span>
                    onScroll</span>
            </div>
        </div>
    <div className="p-2 mt-6 w-64 text-sm font-medium relative text-gray-500 border-black border shadow-[3px_3px_0px_0px] bg-white shadow-gray-200">
        <div className="flex w-5 h-5 absolute  top-1 -left-[17px] text-xl items-center justify-center text-white bg-blue-500 shadow-[2px_2px_0px_0px] shadow-blue-200">
            <IoInformationOutline></IoInformationOutline>
        </div>
        Browse various topics related to Technology, Programming, AI, Green Developments, Space &#38; more.</div>
    </>)
}