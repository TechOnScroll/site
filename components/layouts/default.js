import {LeftSideNav,RightSideNav} from '../sidenav'
import TopNav from '../topnav'
export default function DefaultLayout({children}) {
    return(<>
    <TopNav></TopNav>
    <div className="container mx-auto flex flex-row mt-20">
        <div className="w-1/4 h-screen">
            <LeftSideNav></LeftSideNav>
        </div>
        <div className="w-2/4">
            {children}
        </div>
        <div className="w-1/4">
            <RightSideNav></RightSideNav>
        </div>
    </div>
    </>)
}