import Input from './input/input'

const component = [
  Input
];
const install = function (Vue) {
  component.forEach(item => {
    console.log(item);
    Vue.component(item.name, item);
  });
};
export default install;
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
