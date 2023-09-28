import { Outlet } from "react-router-dom";
import PrimaryHeader from './PrimaryHeader';
import { MainContainer } from "./MainContainer";
import Footer from './Footer';
import { useThemeContext } from "./ThemeContext";


export const Layout = () => {
    const {theme} = useThemeContext();
    console.log("Theme", theme);
    return <>
        <PrimaryHeader />
        <MainContainer>
            <main>
                <Outlet />
            </main>
        </MainContainer>
        <Footer />
    </>
}