import { useContext } from "react";
import { AuthContexte } from "../contextes/contexteAuthentification";

export const useAuth = () => {
    const value = useContext(AuthContexte);
    if (!value) {
        throw new Error(
            "useAuth doit être contenu dans un AuthentificationContextProvider"
        );
    }
    return value;    
}