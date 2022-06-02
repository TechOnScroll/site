import {LeftSideNav,RightSideNav} from '../sidenav'
import TopNav from '../topnav'
export default function DefaultLayout({children}) {
    return(<>
    <TopNav></TopNav>
    <div className="flex flex-row mt-20 px-24">
        <div className="w-1/4">
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