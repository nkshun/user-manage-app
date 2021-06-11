import {memo, VFC} from 'react'
import { Button, Drawer, DrawerBody, DrawerContent} from '@chakra-ui/react'

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onClickHome: () => void;
    onClickUserManagement: () => void;
    onClickSetring: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
    const {isOpen, onClose, onClickHome, onClickUserManagement, onClickSetring} = props;
    return (
        <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
            <DrawerContent>
                <DrawerBody p={0} bg='gray.100'>
                    <Button w='100%' onClick={onClickHome}>TOP</Button>
                    <Button w='100%' onClick={onClickUserManagement}>ユーザー一覧</Button>
                    <Button w='100%' onClick={onClickSetring}>設定</Button>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
})