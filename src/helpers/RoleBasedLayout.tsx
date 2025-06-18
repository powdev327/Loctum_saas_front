import { ContractProvider } from "../context/owner/ContractContext";
import {ConversationProvider} from "../context/owner/ConversationContext.tsx";
import AppLayout from "../layout/AppLayout.tsx";
import {LocumProvider} from "../context/locum/LocumContext.tsx";
import {Navigate} from "react-router-dom";
import {ClientNotificationProvider} from "../context/owner/ClientNotificationContext.tsx";

const RoleBasedLayout = ({ user }) => {
    if (user.user_type === "client") {
        return (
            <ContractProvider>
                <ConversationProvider>
                    <ClientNotificationProvider>
                    <AppLayout />
                    </ClientNotificationProvider>
                </ConversationProvider>
            </ContractProvider>
        );
    }

    if (user.user_type === "locum") {
        return (
            <LocumProvider>
                <ConversationProvider>
                    <AppLayout />
                </ConversationProvider>
            </LocumProvider>
        );
    }

    return <Navigate to="/" />;
};

export default RoleBasedLayout;
