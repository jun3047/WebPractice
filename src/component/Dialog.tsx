import styled from '@emotion/styled'
import { notEqual } from 'assert';
import { useSelector } from 'react-redux';

const Box = styled.div`
  height: 42px;
  padding: 10px;
  background-color: white;
  box-shadow: 10px;
  font-size: 21px;
  text-align: center;
  border: solid 1px black;
`

var style: React.CSSProperties | undefined;

const Dialog : React.FunctionComponent = () => {

  const isShowDialog = useSelector((state: any) => state.isShowDialog);

  if(isShowDialog){
    style = {}
  }else{
    style = {display: "none"}
  }

  return<>
  <Box style={style}>BOX</Box>
  </>
}



export default Dialog;