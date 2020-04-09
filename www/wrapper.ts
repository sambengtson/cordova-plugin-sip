import { Injectable } from '@angular/core';
import { Plugin, IonicNativePlugin, cordova } from '@ionic-native/core';

@Injectable()
export class Linphone extends IonicNativePlugin {
    static pluginName = 'Linphone'; // should match the name of the wrapper class
    static plugin = 'cordova-plugin-sip'; // NPM package name
    static pluginRef = 'cordova.plugins.sip'; // name of the object exposed by the plugin
    static platforms = ['Android'];

    login(username: string, password: string, domain: string): Promise<any> {
        return cordova(this, 'login', {}, [username, password, domain]);
    }

    call(address: string, displayName: string): Promise<any> { return cordova(this, 'call', {}, [address, displayName]); }

    hangup(): Promise<any> { return cordova(this, 'hangup', {}, []); }

    listenCall(): Promise<any> { return cordova(this, 'listenCall', {}, []); }
}