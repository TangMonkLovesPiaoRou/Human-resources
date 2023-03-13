import { RouteRecordRaw } from 'vue-router'
import { reactive } from 'vue'

interface InPermission {
    router: Array<RouteRecordRaw>
    addRouter: Array<RouteRecordRaw>
}

export class Permission implements InPermission {
    private _router:Array<RouteRecordRaw> = []
    private _addRouter:Array<RouteRecordRaw> = []

    get router() {
        return this._router
    }

    get addRouter() {
        return this._addRouter
    }

    Set_Router(playLoad: Array<RouteRecordRaw>) {
        const r = JSON.parse(JSON.stringify(playLoad))
        if(Array.isArray(r)) {
            this._router = r.map((v) => {
                delete v.component
                return v
            })
        }
    }

    Set_addRouter(playLoad: Array<RouteRecordRaw>) {
        if(Array.isArray(playLoad)) {
            this._addRouter = playLoad
        }
    }
}


const permission = reactive(new Permission());
export default permission




