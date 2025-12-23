import { useQuery } from "@tanstack/react-query";
import UserService from "../services/UserService";

function useMe(enabled: boolean) {
  
    return useQuery({
        queryKey:['me'],
        queryFn: () => {UserService.fetchUser().then((res) => res.data)},
        enabled,
        retry: false
    })

}

export default useMe