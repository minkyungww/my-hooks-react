import React, { useEffect, useMemo, useRef, useState } from 'react'; // 리액트 관련 페이지는 동 문장을 모두 넣어야 함

// const App = () => {
  
//   // useState에는 [받을값, 입력값] (초기값)
//   const[count, setCount] = useState(10);
 
//   const changeCount = (num) =>{
//     setCount(prev => prev + num);
//   }

//   return( 
//   <div>
//     <div> {count}  </div>
//     <button onClick={() => changeCount(-1)}>감소</button> 
//     <button onClick={() => changeCount(1)}>증가</button>
// {/* 함수의 결과값인 데이터를 넣는 게 아니라 실행 준비를 넣어줘야함, 따라서 () =>형식으로 넣음 */}
//   </div>
//   );
// }

// const App = () => {

//   const[count, setCount] = useState(10);

//   const changeCount = (num) => {
//     setCount(prev => prev + num);
//   }

//   return (
//   <div>
//     <div> {count} </div>
//     <button onClick={ () => changeCount(-1)}>감소</button>
//     <button onClick={ () => changeCount(1)}>증가</button>
//   </div>
//   );



// }


// const App = () => {

//   const [count, setCount] = useState(0);

//   // useEffect는 값을 두개 받음
//   useEffect(() => {
//     console.log("화면 로딩 완료");
//   }, [count] );
//   // use시리즈는 코드 순서와 상관 없이 화면이 다 로딩된 다음 마지막에 실행됨. 따라서 아래 코드들이 먼저 실행 됨.
//   // 처음 실행될 때는 무조건 실행이 되고, 값이 변경될 때 실행 됨.

//   console.log("테스트1");
  
//   return (
//   <div> 
//     <div> {count}</div>
//     <button onClick={ () => setCount((prev) => prev +1)}>증가</button>
//   </div>
//   )
// }

// const App = () => {

//   const [count, setCount] = useState(0);

//   const randomNum = useMemo( ()=> Math.random(),[count]); //함수, 배열

  
//   return (
//   <div> 
//     <div>{randomNum}</div>
//     <div> {count}</div>
//     <button onClick={ () => setCount((prev) => prev +1)}>증가</button>
//   </div>
//   )
// }

// const App = () => {

//   const inputRef = useRef();
  
//   return (
//   <div>
//     <input ref={inputRef} />
//     <button onClick={() => {
//       alert(inputRef.current.value);
//       inputRef.current.value = "";
//       inputRef.current.focus();
//     }}>인풋 내용 체크</button>
//   </div>
 
//   );
// }



// function App() {
//   return (<div>    </div>
//   );
// }


const App = () =>{
  const [list, setList] = useState([0,0,0]);

  const changeList = (index) => {
    const tempList = [...list];
    tempList[index] = tempList[index]+1;
    setList(tempList);
  };

  return(
    <div>
      <div>{list[0]}</div>
      <div>{list[1]}</div>
      <div>{list[2]}</div>
      <button onClick={ () => changeList(0)}> 1번 변경</button>
      <button onClick={ () => changeList(1)}> 2번 변경</button>
      <button onClick={ () => changeList(2)}> 3번 변경</button>

    </div>
  );


  }

export default App;
