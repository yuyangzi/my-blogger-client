import React, {PureComponent} from "react";
import HeaderPage from "../header/header.page";
import MainPage from "../main/main.page";
import FooterPage from "../footer/footer.page";

class HomePage extends PureComponent {
    render() {
        return (
            <>
                <HeaderPage/>
                <MainPage/>
                <FooterPage/>
            </>
        )
    }
}

export default HomePage;