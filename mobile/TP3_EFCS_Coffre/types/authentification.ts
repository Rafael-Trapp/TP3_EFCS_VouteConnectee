import { User } from "./user";

export interface AuthContexteType {
    user: User | null;
    estAuthentifie: boolean | undefined;
    creerCompte: (courriel: string, motPasse: string, prenom: string, nom: string) => Promise<any>;
    seConnecter: (courriel: string, motPasse: string) => Promise<any>;
    seDeconnecter: () => Promise<void>;
}