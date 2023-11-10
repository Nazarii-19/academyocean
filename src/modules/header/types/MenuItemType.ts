import { Title } from '~/types/GlobalType.ts'
import RouterEnum from '~/enums/RouterEnum.ts'

interface MenuItem {
  title: Title
  link: RouterEnum
}

export default MenuItem
