import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {NavBar} from './Components/NavBar/NavBar';
import {Menu} from './Components/Menu/Menu';
import GlobalStyle from './Components/Style/GlobalStyle';
import {ModalItem} from "./Components/Modal/ModalItem";
import {Order} from "./Components/Order/Order";
import {useOpenItem} from "./Components/Hooks/useOpenItem";
import {useOrders} from "./Components/Hooks/useOrders";
import {useAuth} from "./Components/Hooks/useAuth";
import {useTitle} from "./Components/Hooks/useTitle";
import {OrderConfirm} from "./Components/Order/OrderConfirm";
import {useOrderConfirm} from "./Components/Hooks/useOrderConfirm";
import {Context} from "./Components/Functions/context";

const firebaseConfig = {
    apiKey: "AIzaSyCFoVkXpa7BYCJfYR7R21eNX_-AS2-9IsA",
    authDomain: "mrdonald-s-a1ef6.firebaseapp.com",
    databaseURL: "https://mrdonald-s-a1ef6.firebaseio.com",
    projectId: "mrdonald-s-a1ef6",
    storageBucket: "mrdonald-s-a1ef6.appspot.com",
    messagingSenderId: "673509979726",
    appId: "1:673509979726:web:fb7ec28bbff943af51751f"
};

firebase.initializeApp(firebaseConfig);

function App() {

    const auth = useAuth(firebase.auth);
    const openItem = useOpenItem();
    const orders = useOrders();
    const orderConfirm = useOrderConfirm();
    useTitle(openItem.openItem);

    return (
        <Context.Provider value={{
            auth,
            openItem,
            orders,
            orderConfirm,
            firebaseDatabase: firebase.database
        }}>
            <GlobalStyle/>
            <NavBar/>
            <Order/>
            <Menu/>
            {openItem.openItem && <ModalItem/>}
            {orderConfirm.openOrderConfirm && <OrderConfirm/>}
        </Context.Provider>
    );
}

export default App;
