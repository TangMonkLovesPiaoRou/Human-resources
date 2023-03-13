import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Layout',
    props: {
        childrenName: {
            type: String,
            default: 'children'
        },
        childrenMeta: {
            type: Object,
            default: () => ({ icon: 'meta.icon', desc: 'meta.desc' })
        },
        router: {
            type: Array,
            default: () => []
        }
    },
    // eslint-disable-next-line vue/no-setup-props-destructure
    setup({ childrenName, childrenMeta }) {
        const create = function(list:any, str: string, language: any):any {
            const arr:any = []
            list.forEach((el: any, i:number):void => {
                if(el[childrenName] && el[childrenName].length) {
                    arr.push(createSubMenuDom(el, str + i, language))
                } else {
                    arr.push(createMenuItem(el, str + i, language))
                }
            });
            return arr
        }
        // 创建el-sub-menu标签
        const createSubMenuDom = (dom: any, i:number | string, language: any):any => {
            const slots = {
                "title": () => {
                    const arr = []
                    arr.push(<i class={ `iconfont ${getMeta(dom, childrenMeta.icon)}` }></i>)
                    arr.push(<span>{ language(`sideBar.${getMeta(dom, childrenMeta.desc)}`) }</span>)
                    return arr
                }
            }
            return <el-sub-menu index={i} v-slots={ slots }>
                { create(dom[childrenName], (i + '-') as string, language) }
            </el-sub-menu>
        }

        // 创建el-menu-item标签
        const createMenuItem = (dom:any, i:number | string, language: any):any => {
            return <el-menu-item index={i}>
                <i class={`iconfont ${getMeta(dom, childrenMeta.icon)}`}></i>
                <span>{ language(`sideBar.${getMeta(dom, childrenMeta.desc)}`) }</span>
            </el-menu-item>
        }


        const getMeta = (s: any, v: any) =>  {
            const strs:Array<string> = v.split('.')
            return strs.reduce((sum, o) => {
                return sum[o]
            }, s)
        }

        
        return { create }
    },
    render(props:any) {
        const list = props.router
        const language = function(this: any, name:any) {
            return this.$t(name)
        }
        const handleSelected = (key: any) => {
            const paragraphs = key.split('-')
            console.log(paragraphs)
            const paths = paragraphs.reduce((sum: any, v: any, i: number) => {
                if (i < paragraphs.length - 1) return sum[v].children
                else return sum[v]
            }, list)
            this.$router.push({
                path: `${paths.path}`
            })
        }
        
        return <el-menu class={ 'sideBar' } default-active="0" onSelect={ handleSelected } >{ props.create(list, '', language.bind(this)) }</el-menu>
    }
})