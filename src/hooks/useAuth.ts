import { useCallback, useState} from 'react';
import axios from 'axios';
import {User} from '../types/api/user'
import { useHistory } from 'react-router';
import { useMessage } from './useMessage';
import { userLoginUser } from './useLoginUser'

export const useAuth = () => {
    const history = useHistory();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { showMessage } = useMessage();
    const { setLoginUser } = userLoginUser();

    const login = useCallback(
        (id: string) => {
            setLoading(true);
            setError(false);

            axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                if (res.data) {
                    setLoginUser(res.data);
                    showMessage({ title:'ログインしました。', status:'success' });
                    history.push('/home');
                } else {
                    showMessage({ title:'ユーザーが見つかりません。', status:'warning' });
                    setLoading(false);
                };
            })
            .catch(() => {
                showMessage({ title:'ログインできません', status:'error'});
                setLoading(false);
            })
    }, [history, showMessage, setLoading]);
    return { login, isLoading, error };
}