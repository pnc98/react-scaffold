export interface MenuListDataModels {
  path?: string,
  key: string,
  pageName: string,
  open?: boolean,
  clickParentMethod?: () => void,//控制子菜单打开和收起事件
  children?: MenuListDataModels[]
};

//子菜单打开和收起状态管理
export interface ChildrenListOpenModel {
  first: boolean,
  second: boolean,
};
export const ChildrenListOpenDefaultState: ChildrenListOpenModel = {
  first: true,
  second: true
};