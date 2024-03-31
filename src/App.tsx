import React from 'react';
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Routes, Route, Navigate, NavLink} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {S} from './components/pages/_styles';
import {Model} from "./components/pages/Model";

//в этой штуке содержатся наши пути к page
const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    MODEL: '/adidas/:id',
    ERROR404: '/page/error404'
} as const

function App() {
    return (
        <>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Nav>
                    <S.NavWrapper>
                        <NavLink to={PATH.ADIDAS}
                        >Adidas</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PUMA}
                        >Puma</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.ABIBAS}
                        >Abibas</NavLink>
                    </S.NavWrapper>
                </S.Nav>
                <S.Content>
                    <Routes>
                        <Route path='/' element={<Navigate to={PATH.ADIDAS}/>}/>

                        <Route path={PATH.ADIDAS} element={<Adidas/>}/>
                        <Route path={PATH.PUMA} element={<Puma/>}/>
                        <Route path={PATH.ABIBAS} element={<Abibas/>}/>
                        <Route path={PATH.MODEL} element={<Model/>}/>

                        {/*//если ошибка*/}
                        <Route path={PATH.ERROR404} element={<Error404/>}/>
                        <Route path='/*' element={<Navigate to={PATH.ERROR404}/>}/>
                    </Routes>
                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </>
    );
}

export default App;
