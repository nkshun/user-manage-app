import {memo, useCallback, useEffect, VFC} from 'react'
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';

import {UserCard} from '../organisms/user/UserCard'
import {useAllUsers} from '../../hooks/useAllUsers'
import {UserDetailModal} from '../organisms/user/userDetailModal'
import {useSelectUser} from '../../hooks/useSelectUser'

export const UserManagement: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { getUsers, users , loading} = useAllUsers();
    const { onSelectUser, selectedUser } = useSelectUser();

    const onClickUser = useCallback(
        (id: number) => {
            onSelectUser({id: id, users: users});
            onOpen();
        },
        [users, onSelectUser, onOpen]
    );

    useEffect(() => getUsers(), [getUsers])
    return (
        <>
            {loading ? (
                <Center h='100vh'>
                    <Spinner color='teal.200'/>
                </Center>
            ) : (
                <Wrap p={{ base: 4, md: 10 }} justify='space-around'>
                    {users.map(user => (
                        <WrapItem key={user.id}>
                            <UserCard
                                id={user.id}
                                imageUrl='https://source.unsplash.com/random'
                                userName={user.username}
                                fullName={user.name}
                                onClick={onClickUser}
                            />
                        </WrapItem>
                    ))}
                </Wrap>
            )}
            <UserDetailModal
                isOpen={isOpen}
                onClose={onClose}
                user={selectedUser}
            />
        </>
    )
})