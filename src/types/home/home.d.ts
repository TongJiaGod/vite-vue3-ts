export interface IMenu {
  name: string
  icon: string
  path: string
  children?: IMenu[] // 子菜单
}
