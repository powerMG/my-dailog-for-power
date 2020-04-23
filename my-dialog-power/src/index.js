import myDialogPlugin from "./myDialogPlugin.vue";
const components = [myDialogPlugin]
/**
 * 绑定组件
 * @param Vue
 */
function bindComponents(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

/**
 * 为了使用 Vue.use() 使用插件
 * @param Vue
 */
function install(Vue) {
    bindComponents(Vue)
}
export default { install, myDialogPlugin }