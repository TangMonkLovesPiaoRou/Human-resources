import { reactive } from "vue" 
interface InGlobalState {
    pigeon:object
}

export class GlobalState implements InGlobalState {
    private _pigeon:object = { flag: true }
    get pigeon() {
        return this._pigeon
    }
    set_Pigeon(playLoad:object) {
        this._pigeon = playLoad
    }
}

const globalState = reactive(new GlobalState())
export default globalState