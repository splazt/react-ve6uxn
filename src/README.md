Redux를 사용하기 위해서는 redux와 react-redux를 설치해야합니다.

- DEPENDENCIES
  redux, react-redux가 설치되어 있는 것을 확인하실 수 있습니다.

- index.js
  안내한 순서에 따라 index.js를 완성해주세요!

1. import { Provider } from 'react-redux';
   react-redux에서 Provider를 불러와야 합니다.
   - Provider는 store를 손쉽게 사용할 수 있게 하는 컴포넌트입니다.
     해당 컴포넌트를 불러온다음에, Store를 사용할 컴포넌트를 감싸준 후
     Provider 컴포넌트의 props로 store를 설정해주면 됩니다.
2. import { legacy_createStore as createStore } from 'redux';
   redux에서 createStore를 불러와야 합니다.
3. 전역 상태 저장소 store를 사용하기 위해서는 App 컴포넌트를
   Provider로 감싸준 후 props로 변수 store를 전달해주여야 합니다.
   주석을 해제해주세요.
4. 변수 store에 createStore 메서드를 통해 store를 만들어 줍니다.
   그리고, createStore에 인자로 Reducer 함수를 전달해주어야 합니다.
   (지금 단계에서는 임시의 함수 reducer를 전달해주겠습니다.)
5. 여기까지가 전역 변수 저장소를 설정하는 방법이였습니다.
   브라우저 창에 오류메세지가 나타나지 않는다면 잘 적용된겁니다.👏
