import { Routes, Route } from 'react-router';
import AuthProvider from '../utils/AuthProvider';
import Layout from '../layout';
import PublicPage from '../views/PublicPage';
import LoginPage from '../views/LoginPage';
import ProtectedPage from '../views/ProtectedPage';
import RequireAuth from '../utils/RequireAuth';


function Router() {
    return (
        <AuthProvider>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<PublicPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/protected"
                        element={
                            <RequireAuth>
                                <ProtectedPage />
                            </RequireAuth>
                        }
                    />
                </Route>
            </Routes>
        </AuthProvider>
    )
}

export default Router;