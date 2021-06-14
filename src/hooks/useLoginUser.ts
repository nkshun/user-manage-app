import { useContext } from 'react'

import { LoginUserContext, LoginUserContextType } from '../providers/LoginUserProvider'

export const userLoginUser = (): LoginUserContextType =>
    useContext(LoginUserContext);