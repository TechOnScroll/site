import { Inter } from "next/font/google";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
interface LayoutProps {
  children: React.ReactElement | React.ReactElement[];
}
function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <div className={inter.className}>
        <Header />
        <Sidebar />
        <main className="ml-72 pl-10 pt-24">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default DefaultLayout;
