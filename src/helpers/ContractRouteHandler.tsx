import Contract from "../pages/Contract/Contract.tsx";
import ContractLocum from "../pages/Contract/ContractLocum.tsx";


export default function ContractRouteHandler() {
    const userType = localStorage.getItem("user_type");
    if (!userType) return null;

    return userType === "locum" ? <ContractLocum /> : <Contract />;
}
