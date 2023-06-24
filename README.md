# vue3-ts-template
 
# import 组件 vetur 波浪线提示
`禁用 vetur 启用 Volar`

# 待解决问题
```json
一、
src\views\v-model\ModelChild.vue
描述： 功能不影响 ts 有提示

(property) $parent: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null
类型“ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null”的参数不能赋给类型“ModelText”的参数。
不能将类型“null”分配给类型“ModelText”。ts(2345)
```

```json
二、
src\views\event-bus\GrandSon.vue
描述：功能不影响 ts 有提示

let car: unknown
对象的类型为 "unknown"。ts(2571)
```

# 潜在问题
data?.type 是否可用 是否有报错