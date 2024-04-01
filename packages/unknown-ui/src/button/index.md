# Button

<demo src="./demos/basic.vue"></demo>
<demo src="./demos/disabled.vue"></demo>
<demo src="./demos/size.vue"></demo>

# 按钮文档

## 属性

| 属性名   | 说明     | 类型                                                         | 默认值    |
| -------- | -------- | ------------------------------------------------------------ | --------- |
| type     | 按钮类型 | `default`\| `primary`\| `success`\| `warning`\| `error` | `default` |
| outline  | 按钮边框 | `boolean`                                                    | `false`   |
| disabled | 禁用按钮 | `boolean`                                                    | `false`   |
| size     | 按钮尺寸 | `small` \| `default` \| `large`                              | `default` |

## 事件

| 事件  | 说明     | 类型                     |
| ----- | -------- | ------------------------ |
| click | 点击事件 | `(event: Event) => void` |