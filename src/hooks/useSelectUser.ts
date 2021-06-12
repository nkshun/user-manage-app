import { useCallback, useState } from "react"
import { User } from "../types/api/user";

type Props = {
    id: number;
    users: Array<User>
}

export const useSelectUser = () => {
    const [selectedUser, setSelectedUser] = useState<User>();

    const onSelectUser = useCallback((props: Props) => {
        const {id, users} = props;
        const targetUser = users.find(user => user.id === id);
        if (!targetUser) {
            return;
        } else {
            setSelectedUser(targetUser); //NOTE:あるものしかクリックしないからほぼ間違いなくある 危険な書き方
        }
    }, []);

    return {onSelectUser, selectedUser}
}