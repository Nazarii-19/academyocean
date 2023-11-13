import RouterEnum from '~/enums/RouterEnum.ts'
import MenuItem from '../types/MenuItemType.ts'

const menuList: MenuItem[] = [
  {
    title: 'Головна',
    link: RouterEnum.Home
  },
  {
    title: 'Результати проходження',
    link: RouterEnum.CourseResult
  }
]

export default menuList
