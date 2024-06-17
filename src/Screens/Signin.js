
// // appel des méthodes de la carte du contrat intelligent
// const res = await auth.methods.usersList(email).call(); 
        
// // Dans res, il y a le nom d'utilisateur, le mot de passe et l'adresse e-mail  
// // vérifier le mot de passe d'entrée avec le mot de passe stocké
// if (res.password === password) 
// {    
     
//    // stocker les détails de l'utilisateur dans le stockage local
//     localStorage.setItem("email", email); 
         
//     localStorage.setItem("account", accounts);
//     navigate("/Home"); // naviguer vers la page d'accueil
// } 
// else
// {
//     alert("identifiants d'utilisateur incorrects ou veuillez vous inscrire");
// }

import * as React from "react";
import { loadBlockchainData, loadWeb3 } from "../../src/Web3helpers";
import { useNavigate } from "react-router-dom";
//Ce code définit une fonction nommée SignIn qui exporte par défaut. À l'intérieur de cette fonction, il utilise des hooks React useState pour initialiser les variables d'état email, password, accounts et auth. Il utilise également la fonction useNavigate pour la navigation
export default function SignIn() {
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const navigate = useNavigate();

const [accounts, setAccounts] = React.useState(null);
const [auth, setAuth] = React.useState(null);

//une fonction loadAccounts asynchrone qui charge les comptes et authentifie les données en chaîne de blocs

const loadAccounts = async () => {
	let { auth, accounts } = await loadBlockchainData();

//Les comptes et l'authentification obtenus sont ensuite définis dans les états correspondants en utilisant les fonctions setAccounts et setAuth.
    
	setAccounts(accounts);
	setAuth(auth);
};

const login = async () => {
	if (!email || !password) {
	alert("S'il vous plaît, remplissez tous les détails");

	return;
	}

	try {
    // appel des méthodes de la carte du contrat intelligent
	const res = await auth.methods.usersList(email).call();
    // Dans res, il y a le nom d'utilisateur, le mot de passe et l'adresse e-mail  
    // vérifier le mot de passe d'entrée avec le mot de passe stocké
	if (res.password === password) {
		localStorage.setItem("email", email);
		localStorage.setItem("account", accounts);
		navigate("/Home"); // naviguer vers la page d'accueil
	} else {
		alert("identifiants d'utilisateur incorrects ou veuillez vous inscrire");
	}
	} catch (error) {
	alert(error.message);
	}
};

React.useEffect(() => {
	loadWeb3();
}, []);

React.useEffect(() => {
	loadAccounts();
}, []);

return (
	<div style={rootDiv}>
	<img
		src="https://media.geeksforgeeks.org/wp-content/uploads/20210318103632/gfg.png"
		style={image}
		alt="geeks"
	/>
	<input
		style={input}
		value={email}
		onChange={(e) => setEmail(e.target.value)}
		placeholder="Email"
		type="text"
	/>
	<input
		style={input}
		value={password}
		onChange={(e) => setPassword(e.target.value)}
		placeholder="Password"
		type="password"
	/>
	<button style={button} onClick={login}>
		{" "}
		Sign In
	</button>

	<span
		style={{ cursor: "pointer" }}
		onClick={() => {
		navigate("/Signup");
		}}
	>
		{" "}
		Create new account{" "}
	</span>
	</div>
);
}

const rootDiv = {
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "center",
height: "100vh",
};

const input = {
width: 300,
padding: 10,
margin: 10,
borderRadius: 10,
outline: "none",
border: "2px solid grey",
fontSize: 17,
};

const button = {
width: 325,
padding: 10,
borderRadius: 10,
margin: 10,
cursor: "pointer",
fontSize: 17,
color: "white",
backgroundColor: "#9D27CD",
border: "none",
};

const image = {
width: 70,
height: 70,
objectFit: "contain",
borderRadius: 70,
};
