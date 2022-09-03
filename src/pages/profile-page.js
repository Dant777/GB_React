import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from '../store/counter';

export const ProfilePage = () => {
    const data = useSelector((state)=> state.counter);
    const dispatch = useDispatch();

    console.log("data", data);
    return (<div>
        
        profile page
        <div><h1>{data.count}</h1></div>
        <button onClick={()=> dispatch(increment())}>increment</button>
        <button onClick={()=> dispatch(decrement())}>decrement</button>
        </div>);
  };