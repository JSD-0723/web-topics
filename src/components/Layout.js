import { Outlet } from "react-router-dom";
import PrimaryHeader from './PrimaryHeader';
import { MainContainer } from "./MainContainer";
import Footer from './Footer';
import { useThemeContext } from "./ThemeContext";
import SecondaryHeader from "./SecondaryHeader";


export const Layout = () => {
    const {theme} = useThemeContext();
    console.log("Theme", theme);
    return <>
        <PrimaryHeader />
        <SecondaryHeader/>
        <MainContainer>
            <main>
                <Outlet />
            </main>
        </MainContainer>
        <Footer />
    </>
}
