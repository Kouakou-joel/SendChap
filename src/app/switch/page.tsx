
import DashboardLayout from "../components/navbar";
import Layout from "../layout";

export default function Switch() {
    return (
        <>
        <DashboardLayout utilityInfo={"Switch des agregateurs"} commit={"Commissions factures aux utilisateurs et partenaires "}>
            <h1 className="">Bienvenue sur le tableau de bord</h1>
            <p>Ceci est le contenu principal de switch.</p>
            {/* Ajoutez tout autre contenu spécifique au tableau de bord ici */}   
        </DashboardLayout> 
        </>
    );
}
