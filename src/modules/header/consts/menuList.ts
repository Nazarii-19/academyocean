import MenuItem from '../types/MenuItemType.ts'
import RouterEnum from '~/enums/RouterEnum.ts'

const menuList: MenuItem[] = [
  {
    title: 'Головна',
    link: RouterEnum.Home
  },
  {
    title: 'Авторизація',
    link: RouterEnum.Auth
  },
  {
    title: 'Курси',
    link: RouterEnum.Course
  }
]

export default menuList
