import styled from '@emotion/styled'
import { useDispatch } from 'react-redux';

const Atn = styled.button`

`

const Btn: React.FunctionComponent = () => {

    const dispatch = useDispatch();

    return <>
        <Atn onClick={() => {
            dispatch({ type: 'ChangeDialog' });
        }}>Change</Atn>
    </>
}


export default Btn;