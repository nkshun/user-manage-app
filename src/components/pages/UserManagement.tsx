import {memo, useEffect, VFC} from 'react'
import { Center, Spinner, Text, Wrap, WrapItem } from '@chakra-ui/react';

import {UserCard} from '../organisms/user/UserCard'
import {useAllUsers} from '../../hooks/useAllUsers'

export const UserManagement: VFC = memo(() => {
    const { getUsers, users , loading} = useAllUsers();

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
                            />
                        </WrapItem>
                    ))}
                </Wrap>
            )}
        </>
    )
})