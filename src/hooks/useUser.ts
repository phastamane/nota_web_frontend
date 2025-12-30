import { useQuery } from "@tanstack/react-query";
import UserService from "../services/UserService";

function useUser(enabled: boolean) {
  
    return useQuery({
        queryKey:['user'],
        queryFn: () => UserService.fetchUser().then((res) => res.data),
        enabled,
        retry: false
    })

}



export default useUser
