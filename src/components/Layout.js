import { Outlet } from "react-router-dom";
import PrimaryHeader from './PrimaryHeader';
import { MainContainer } from "./MainContainer";
import Footer from './Footer';


export const Layout = () => {
    return <>
        <PrimaryHeader/>
        <MainContainer>
            <main>
                <Outlet/>
            </main>
        </MainContainer>
        <Footer/>
    </>
}