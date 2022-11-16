import axios from 'axios';

interface TokenResponse {
	token: string
}

export default class AuthProvider{

    static async validate(){
        let token = localStorage.getItem('jwt');
        if(!token) throw new Error("Not Valid");
        const options = { headers: { Authorization: "Bearer " + token }};
        const response = await axios.get("https://gototask-api.herokuapp.com/todo?size=1", options);

        if(response.status !== 200) {
            localStorage.removeItem('jwt');
            throw new Error("Not Valid");
        }
    }
    static logout(){
        localStorage.removeItem('jwt');
    }

    static async attemptLogin(username: string, password: string){
            const data = { username, password };
			const options = { headers: { Accept: "application/json" } };
			const response = await axios.post<TokenResponse>('https://gototask-api.herokuapp.com/jwt/login', data, options);

			const token = response.data?.token;

			if (!token) throw new Error("Not Valid (attemptLogin)");

            localStorage.setItem('jwt', token);
    }
}