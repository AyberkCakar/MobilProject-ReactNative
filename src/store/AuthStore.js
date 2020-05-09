import { observable ,action} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

// navigation service
import NavigationService from '../NavigationService';

class AuthStore {
    @observable name = null;
    @observable surname = null;
    @observable city = null;


    @action async saveUser(name,surname,city){
        try {
            await AsyncStorage.setItem('name',name);
            await AsyncStorage.setItem('surname',surname);
            await AsyncStorage.setItem('city',city);
            this.setupAuth();
        } catch (e) {
            console.log(e);
        }
    }

    @action async setupAuth(){
        await this.getUser();
    }

    @action async removeUser(){
        try {
            await AsyncStorage.removeItem('name');
            this.name=null;
            this.setupAuth();
        } catch (e) {
            console.log(e);
        }
    }

    @action async getUser(){
        try {
            const name = await  AsyncStorage.getItem('name');
            if (!name) {
              NavigationService.navigate('Auth');
              return false;
            }

            this.name = name;
            NavigationService.navigate('App');
        }catch (e) {
            console.log(e);
        }
    }
}
export default new AuthStore();