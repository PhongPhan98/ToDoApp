import { extendObservable} from 'mobx';

// UserStore

class UserStore{
    constructor(){
        extendObservable(this,  {
            loading: true,
            isLoggedIn: false,
            username: 'PhongKa'
        })
    }
}

export default new UserStore();