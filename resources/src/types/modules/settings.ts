import { reactive } from 'vue'
interface InSettings {
    local: string,
    language: any
}

export class Settings implements InSettings {
    private _local = 'zh'
    private _language = {}
    get local() {
        return this._local
    }
    set local(v) {
        this._local = v
    }
    get language() {
        return this._language
    }
    set language(v) {
        this._language = v
    }
}

export default reactive(new Settings())