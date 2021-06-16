import {ChangeEvent, memo, useEffect, useState, VFC} from 'react'
import { Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, Button, ModalFooter} from '@chakra-ui/react'

import { User } from '../../../types/api/user';
import { PrimaryButton } from '../../atoms/button/PrimaryButton'

type Props = {
    user: User | undefined;
    isOpen: boolean;
    isAdmin: boolean | undefined;
    onClose: () => void;
}

export const UserDetailModal: VFC<Props> = memo((props) => {
    const { isOpen, onClose, user, isAdmin } = props;

    const [ name, setName ] = useState('');
    const [ username, setUserName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');

    useEffect(() => {
        setName(user?.name ?? '');
        setUserName(user?.username ?? '');
        setEmail(user?.email ?? '');
        setPhone(user?.phone ?? '');
    }, [user]); //NOTE: [user]を書かないと、初期値空になる

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }

    const onClickUpdate = () => console.log('success');

    return (
        <Modal
                isOpen={isOpen}
                onClose={onClose}
                autoFocus={false}
                motionPreset='slideInBottom'
            >
            <ModalOverlay />
            <ModalContent pb={2}>
                <ModalHeader>ユーザー詳細</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>名前</FormLabel>
                            <Input value={name} isReadOnly={!isAdmin} onChange={onChangeName}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>フルネーム</FormLabel>
                            <Input value={username} isReadOnly={!isAdmin} onChange={onChangeUserName}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>MAIL</FormLabel>
                            <Input value={email} isReadOnly={!isAdmin} onChange={onChangeEmail}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>TEL</FormLabel>
                            <Input value={phone} isReadOnly={!isAdmin} onChange={onChangePhone}/>
                        </FormControl>
                    </Stack>
                    {isAdmin && (
                        <ModalFooter>
                            <PrimaryButton onClick={onClickUpdate} >更新</PrimaryButton>
                        </ModalFooter>
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
})