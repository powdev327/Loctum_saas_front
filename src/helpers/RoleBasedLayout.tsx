import { ContractProvider } from "../context/owner/ContractContext";
import { ConversationProvider } from "../context/owner/ConversationContext.tsx";
import AppLayout from "../layout/AppLayout.tsx";
import { LocumProvider } from "../context/locum/LocumContext.tsx";
import { Navigate } from "react-router-dom";
import { ClientNotificationProvider } from "../context/owner/ClientNotificationContext.tsx";
import { LocumNotificationProvider } from "../context/locum/LocumNotificationContext.tsx";
import {ApplicationProvider} from "../context/owner/ApplicationContext.tsx";
import {AuthProvider} from "../context/AuthContext.tsx";
import {ClientProvider} from "../context/owner/ClientContext.tsx";
import {ManagerProvider} from "../context/owner/ManagerContext.tsx";

const RoleBasedLayout = ({ user }) => {
    if (user.user_type === "client") {
        return (
            <AuthProvider>
                <ClientProvider>
                    <ManagerProvider>
                        <ContractProvider>
                            <ConversationProvider>
                                <ClientNotificationProvider>
                                    <ApplicationProvider>
                                        <AppLayout user={user} />
                                    </ApplicationProvider>
                                </ClientNotificationProvider>
                            </ConversationProvider>
                        </ContractProvider>
                    </ManagerProvider>
                </ClientProvider>
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