import Header from "./components/Header";
import Products from "./components/Products";
import * as C from "./style";


export default function Home(){


    return (
        <C.Page>
            <Header/>
            <Products/>
        </C.Page>
    )
}