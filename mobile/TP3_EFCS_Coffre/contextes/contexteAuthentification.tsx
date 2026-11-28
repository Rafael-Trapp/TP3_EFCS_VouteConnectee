import { createContext, useEffect, useState } from "react";
import { AuthContexteType } from "../types/authentification";
import { User } from "../types/user";
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";


export const AuthContexte = createContext<AuthContexteType | null>(null);

export const AuthContexteProvider = ({
    children
} : {
    children: React.ReactNode
}) => {
    const [estAuthentifie, setEstAuthentifie] = useState<boolean | undefined>(undefined);
    const [user, setUser] = useState<User | null>(null);
    
    const creerCompte = async (courriel: string, motPasse: string, prenom: string, nom: string) => {
        const userCredential = await createUserWithEmailAndPassword(auth, courriel, motPasse);
        try {
            await setDoc(doc(db, "users", userCredential.user.uid), {
                prenom,
                nom,
            })
        } catch (error) {
            console.error("Une erreur est survenue lors de la création d'un user dans Firestore", error);
            throw error;
        }
    }

    const seConnecter = async (courriel: string, motPasse: string) => {
        return signInWithEmailAndPassword(auth, courriel, motPasse);
    }

    const seDeconnecter = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setEstAuthentifie(true);
                //aidé par IA
                //prompt: help me fetch the user data from firestore in my auth context (code du useEffect fourni)
                try {
                    const userDocSnap = await getDoc(doc(db, "users", user.uid));
                    if (userDocSnap.exists()) {
                        const data = userDocSnap.data();
                        setUser({
                            id: user.uid,
                            prenom: data.prenom,
                            nom: data.nom
                        });
                    }
                } catch (error) {
                    console.error("Error fetching applicative user:", error);
                }
            } else {
                setEstAuthentifie(false);
                setUser(null);
            }
        });
        return unsub;
    }, []);

    return (
        <AuthContexte.Provider
            value={{estAuthentifie, user ,creerCompte, seConnecter, seDeconnecter}}
        >
            {children}
        </AuthContexte.Provider>
    )
}