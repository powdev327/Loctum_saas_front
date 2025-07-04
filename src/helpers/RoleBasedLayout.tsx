import { ContractProvider } from "../context/owner/ContractContext";
import { ConversationProvider } from "../context/owner/ConversationContext.tsx";
import AppLayout from "../layout/AppLayout.tsx";
import { LocumProvider } from "../context/locum/LocumContext.tsx";
import { Navigate } from "react-router-dom";
import { ClientNotificationProvider } from "../context/owner/ClientNotificationContext.tsx";
import { LocumNotificationProvider } from "../context/locum/LocumNotificationContext.tsx";
import {ApplicationProvider} from "../context/owner/ApplicationContext.tsx";
import {AuthProvider} from "../context/AuthContext.tsx";

const RoleBasedLayout = ({ user }) => {
    if (user.user_type === "client") {
        return (
            <AuthProvider>
            <ContractProvider>
                <ConversationProvider>
                    <ClientNotificationProvider>
                        <ApplicationProvider>
                            <AppLayout user={user} />
                        </ApplicationProvider>
                    </ClientNotificationProvider>
                </ConversationProvider>
            </ContractProvider>
            </AuthProvider>
        );
    }

    if (user.user_type === "locum") {
        return (
    <AuthProvider>
            <LocumProvider>
                <ConversationProvider>
                    <LocumNotificationProvider>
                        <AppLayout user={user} />
                    </LocumNotificationProvider>
                </ConversationProvider>
            </LocumProvider>
    </AuthProvider>
        );
    }


    return <Navigate to="/" />;
};

export default RoleBasedLayout;