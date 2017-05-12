import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private router: Router) {
    }

    login(username: string, password: string) {
        return this.http.post('/api/signin', {
            username,
            password
        }).map((response: Response) => {
            let token = response.json();
            if ('' != token) {
                console.log({username, token});
                localStorage.setItem('token', token);
            }
        })
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}
