import Vue from "vue";
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

// (1)
const requireComponent = require.context(
    '.', false, /main-option-[\w-]+\.vue$/
)
//(2)
requireComponent.keys().forEach(fileName => {
    // (3)
    const componentConfig = requireComponent(fileName)
    const componentName = upperFirst(
        camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
    )

    // (4)
    Vue.component(componentName, componentConfig.default || componentConfig)
})