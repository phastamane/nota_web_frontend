import { useAuthStore } from "../../store/useAuthStore"
function AccountPage() {
    const user = useAuthStore((s) => s.user)
  return (
    <div>
        <p>{`Hello ${user?.username}`}</p>
    </div>
  )
}

export default AccountPage