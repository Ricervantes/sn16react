import { Navigate, Route, Routes } from 'react-router-dom';
import Formularios from '../pages/Formularios';
import Home from '../pages/Home';
import Tabla from '../pages/Tablas';

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="formularios" element={<Formularios />} />
                <Route path="tablas" element={<Tablas />} />


                <Route path="/" element={<Navigate to="/home" />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </>
    );
}

export default AppRouter;