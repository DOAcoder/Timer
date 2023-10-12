

import Header from "../../components/Header/Header";
import PlButton from "../PlayButton/PlayButton";
import Number from "../Number/Number";
import "./style.scss";

const Layout = () => {
    return (
        <div className="">
            <Header />
            <main className="flex items-center flex-col justify-center pt-10">
                <Number />
                <PlButton />
            </main>
        </div>
    );
};

export default Layout;