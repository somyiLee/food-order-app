# Take Hom Quiz - Food order app

- 작업기간 : 23.09.15 ~ 23.09.17
- 배포링크 : https://foods-order-now.vercel.app/

<br/><br/>

## 🛠 사용한 기술스택

<img src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square"/> <img src="https://img.shields.io/badge/Svelte-FF3E00?style=flat-square&logo=svelte&logoColor=white"/> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white"/> <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white"/>

<br/><br/>

## 🤔 How did I learn Svelte?

- [Learn Svelte Dev](https://learn.svelte.dev/tutorial/welcome-to-svelte)와 [Svelte 공식 문서](https://kit.svelte.dev/)를 활용하여 기본 지식을 습득하였습니다.
- To do List를 만들며 폴더 구조, 기본 문법 등을 실습하였습니다. ( [repository 바로가기](https://github.com/somyiLee/svelte-practice/issues) )
- 이후 부가적인 지식은 공식 문서와 Youtube(코딩셀러)를 활용하여 프로젝트를 완성하였습니다.

<br/><br/>

## 🏢 설계 및 구현 설명

### 1. make mocking api server

#### [설계 목표]

src/routes/apis/[params]/+server.ts 파일을 활용하여 mocking api를 구현하고자 하였습니다.

#### [구현 방법]

**`src/routes/apis/[params]/+server.ts`**

- get 요청을 수행하는 함수를 제작하여 각 파라미터에 알맞는 데이터를 return 하도록 구현했습니다
- 각각의 mock data는 src/lib/datas에서 관리합니다.
- thunder client로 서버의 응답을 확인 할 수 있었습니다.

<br/>

### 2. fetch data

#### [설계 목표]

load 함수를 사용하여 데이터 불러오고자 하였으며, Client Side Rendering을 선택하였습니다. 그리고 그 이유는 다음과 같습니다.

- 단순 제품의 리스트를 불러오는 fetch 함수로, 사용자 개인 정보와 같이 민감한 데이터를 다루지 않는다고 생각하였습니다.
- categories와 product 페이지 간의 이동이 활발할 것이라고 예측하였고, 서버측의 부담을 감소하고자 CSR을 적용하였습니다.

#### [구현 방법]

**`src/routes/+page.ts`**

- Sevelte에서 제공하는 fetch 함수를 활용하여 api 요청을 보냅니다.
- 응답받은 data를 return 합니다.

**`src/routes/+page.svelte`**

- script 영역에서 `export let data;`를 통해 return 받은 data를 사용합니다.

<br/>

### 3. product filtering By category

#### [설계 목표]

사용자가 선택한 카테고리에 알맞은 제품 목록을 필터링 하여 제공하고자 하였습니다.

#### [구현 방법]

**`src/lib/utils/products.ts`**

- filterProductById : return 받은 제품의 전체 목록과 현재 페이지의 파라미터를 인자로 받습니다. 현재 파라미터와 동일한 키 값을 가진 제품 목록을 객체로 변환하여 반환합니다.
