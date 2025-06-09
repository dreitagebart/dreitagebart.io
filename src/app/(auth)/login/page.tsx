import { NoAuth } from '~/components/auth'
import { LoginView } from '~/views/login.view'

const Page = () => {
  return (
    <NoAuth>
      <LoginView />
    </NoAuth>
  )
}

export default Page
