## 목차

- Ch.2 배열
  
  - [배열의 생성과 초기화](#배열의-생성과-초기화)
    - [생성](#생성)
    - [초기화](#초기화)
    - [개수 세기](#개수-세기)
    - [특정 원소에 접근](#특정-원소에-접근)
    - [응용](#응용)

  - [원소 추가와 삭제](#원소-추가와-삭제)
    - [원소 추가 하기](#원소-추가-하기)
      - [배열의 마지막](#배열의-마지막)
      - [배열의 앞](#배열의-앞)
    - [원소 삭제 하기](#원소-삭제-하기)
      - [배열의 뒷부분](#배열의-뒷부분)
      - [배열의 앞부분](#배열의-앞부분)
    - [특정 위치 원소 추가 하기](#특정-위치-원소-추가-하기)
    - [특정 위치 원소 삭제 하기](#특정-위치-원소-삭제-하기)
  - [2차원과 다차원](#2차원과-다차원)
  - [배열 메소드](#배열-메소드)
  - [여러 배열 합치기](#여러-배열-합치기)

<br />

## Ch.2 배열

배열은 가장 간단한 메모리 데이터 구조다.

거의 모든 프로그래밍 언어에서 배열은 기본으로 내장된 데이터 타입이다.

배열은 동일한 데이터 타입의 값들을 연속적으로 저장한 것이다.

물론 자바사크립트에서는 상이한 타입의 데이터도 한 배열에 넣을 수 있지만,

이 책에서는 그렇게 하지 않는 것을 베스트 프랙틱스로 한다.

(다른 언어는 대부분 이런 기능 자체가 아예 없다.)

<br />

### 배열의 생성과 초기화

자바스크립트 배열은 아주 쉽게 선언, 생성, 초기화할 수 있다.

<br />

> ### 생성

간단히 new 키워드({1})로 배열 인스턴스를 생성했다.

new 키워드에 인자를 주면 배열의 크기를 지정할 수 있다({2}).

처음부터 초기화할 원소를 생성자에 전달하는 방법도 있다({3}).

```js
var daysOfWeek = new Array(); // {1}
var daysOfWeek = new Array(7); // {2}
var daysOfWeek = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'); // {3}
```

<br />

하지만 new 대신 간단히 대괄호([])를 써서 배열을 선언하는 편이 좋다.

```js
var daysOfWeek = [];
```

<br />

> ### 초기화

물론 배열 원소를 초기화 하는 것도 가능하다.

```js
var daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
```

<br />

> ### 개수 세기

배열 원소의 개수가 궁금하다면 length 프로퍼티를 조회한다.

7개의 원소가 있으니 다음 코드의 실행 결과는 7이다.

```js
console.log(daysOfWeek.length); // => 7
```

<br />

> ### 특정 원소에 접근

대괄호 안에 숫자형 인덱스를 넣으면 배열에서 특정 원소에 접근하거나 값을 바꿔줄 수 있다.

가령, daysOfWeek 배열의 전체 원소를 출력하고 싶다면

루프문을 써서 다음과 같이 하나하나 출력한다.

```js
for (var i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfweek[i]);
}
```

<br />

> ### 응용
>> 피보나치 수열

또 다른 예로,

피보나치 수열의 처음 20개 숫자를 구하는 코드를 작성하려고 한다.

피보나치 수열은 1과 2로 시작하고 이후의 숫자는 앞의 두 숫자의 합이다.

```js
var fibonacci=[]; // {1}
fibonacci[1]=1; // {2}
fibonacci[2]=2; // {3}

for(var i=3; i < 20; i++) {
  fibonacci[i]=fibonacci[i-1]+fibonacci[i-2]; //// {4}
}

for(var i=3; i<fibonacci.length; i++) { // {5}
  console.log(fibonacci[i]); // {6}
}
```

<br />

<details>
<summary>피보나치 코드 설명</summary>
<div markdown="1">

<br />
  
{1} : 배열 선언

{2},{3} : 피보나치 수열의 처음 두 숫자 1, 2를 배열의 두/세번째 원소에 각각 할당한다.

(자바스크립트 배열의 인덱스는 항상 0부터 시작하고,

피보나치 수열에서 0번째는 존재하지 않으니 건너 뛰는 것)

{4} : 루프문 배열의 이전 원소 2개를 더하고 그 결과를 현재 원소에 세팅하는 일을 반복한다.

{6} : 완성된 수열을 콘솔에서 확인하기위해

{5} : 다시 처음부터 루프를 돌린다.
</details>  
<br />

### 원소 추가와 삭제

배열의 원소 추가/삭제는 조금 까다롭다.

<br />

0 ~ 9 까지 정수가 나열 된 numbers 배열을 예로 들어보자.

```js
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
```

<br />

> ### 원소 추가 하기

> #### 배열의 마지막

위 배열에서 새 원소(10)를 추가하려면, 가장 마지막 인덱스에 원하는 값을 할당한다.

```js
numbers[numbers.length] = 10;
```

<br />

push 메소드를 이용해 배열의 마지막 위치에 새 원소를 추가하는 방법도 있다.

추가할 원소를 인자에 원하는 만큼 넘겨주면 된다.

아래와 같이 push 메소드를 사용하게 되면

numbers 배열에는 0 ~ 13 까지의 숫자들이 담겨 있을 것 이다.

```js
numbers.push(11);
numbers.push(12, 13);
```

<br />

> #### 배열의 앞

배열의 마지막이 아니라 앞부분에 새 원소를 추가하려면,

기존에 들어 있던 원소를 전부 우측으로 한 칸씩 이동시켜 첫 번째 위치를 비워놔야 할 것이다.

아래 코드를 보자.

<br />

for 문으로 마지막 위치 + 1(길이) 부터 모든 원소를 순회하면서

이전 원소를 새로운 위치로 옮기고,

마지막에 새로운 값(-1)을 첫 번째 위치에 할당한다.

```js
for (var i=numbers.length; i>=0; i--){
  numbers[i] = numbers[i-1];
}
numbers[0] = -1;
```

<br />

다른 방법도 있다.

자바스크립트에는 Array.unshift라는 메소드가 있는데, 배열 앞부분에 삽일할 값(들)을 인자로 넘겨준다.

<br />

아래 코드에서 unshift 메소드는 -2를, 그리고 -3과 -4를 차례대로 numbers 배열 전단에 추가한다.

실행 결과, 배열에는 -4 ~ 13의 숫자가 들어간다.

```js
numbers.unshift(-2);
numbers.unshift(-4, -3);
```

<br />

> ### 원소 삭제 하기

> #### 배열의 뒷부분

배열 뒷부분의 값을 삭제하려면 pop 메소드를 사용하면 된다.

실행 결과 13이 빠지면서 배열에 포함된 숫자는 -4 ~ 12이고,

배열의 크기는 17이다.

```js
numbers.pop();
```

<br />

> #### 배열의 앞부분

배열 앞부분 값을 없애려면 다음 코드처럼 한다.

실행 결과 모든 원소를 한 칸씩 좌측으로 옮기게 되는데,

배열의 크기는 여전히 17로 남게된다.

배열에 잉여 원소(값은 undifined)가 발생했다는 뜻이다.

```js
for (var i=0; i<numbers.length; i++){
  numbers[i] = numbers[i+1];
}
```

<br />

루프내 코드가 마지막으로 실행될 때 i+1은 존재하지 않는 위치를 참조한다.

(일부 언어에서는 이런 경우 예외를 던지고 numbers.length - 1에서 루프를 중단함)

이말은 즉슨 배열의 원래 값들이 실제로 삭제 된 것이 아닌,

덮어씌워져 있다는 것 이다. 

(배열의 길이가 동일하고 잉여 원소 undifined가 만들어 졌기 때문)

<br />

따라서, 어떤 원소를 배열 앞부분부터 정말 지우고 싶다면 shift 메소드를 사용해야 한다.

실행 결과 배열의 길이는 16, 값은 -3 ~ 12가 되는 걸 알 수 있다.

```js
numbers.shift();
```

<br />

> ### 특정 위치 원소 추가 하기

<br />

특정 위치에 원소를 추가하고 싶다면,

splice 메소드를 사용하면 된다.

<br />

첫 번째 인자는 원소를 추가/삭제 하려는 위치(인덱스),

두 번째 인자는 식제할 원소의 개수다. (개수가 0이면 원소를 삭제하지 않겠다는 뜻)

세 번쨰 인자 이후로는 배열에 추가할 원소들을 나열하면 된다.

실행결과 -3, 111, 222, -2 ~ 12가 된다.

```js
numbers.splice(1, 0, 111, 222)
```

<br />

> ### 특정 위치 원소 삭제 하기

<br />

특정 위치에 원소를 삭제하는 방법도 위와 같다.

splice 메소드를 사용하면 된다.

어디서부터 삭제할지,

몇 개의 원소를 삭제할지(개수)를 인자로 넘겨주면 된다.

<br />

이 코드는 인덱스 5에서 시작되는 3개의 원소를 날린다.

즉, 삭제되는 원소는 numbers[0], numbers[1], numbers[2] 이다.

실행 결과 -3, 111, 222, -2, -1, 3 ~ 12가 된다.

```js
numbers.splice(5, 3);
```

<br />

> ### 2차원과 다차원

2일동안 측정한 온도가 있다고 해보자.

<br />

아래 코드를 보고 어떤 생각이 드는가?

이 코드는 별로 좋지 못한 코드이다.

코드를 더 나은 코드로 바꾸기 위해선 어떤 방법이 있을까?

```js
var averageTempDay1 = [72, 75, 79, 79, 81, 81];
var averageTempDay2 = [81, 79, 75, 75, 73, 72];
```

<br />

바로 행렬(2차원 배열)을 사용하는 방법이다.

2차원 배열을 사용하면 행에 날짜를, 열에 매 시간 측정 온도를 각각 저장할 수 있다.

```js
var averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 72];
```

<br />

자바스크립트는 1차원 배열만 지원할 뿐 행렬 기능은 따로 없다.

하지만 배열의 배열이라는 관점에서 본다면

행렬이나 다차원 배열을 구현하는데 문제가 없다.

위의 코드를 다음과 같이 바꿔쓸 수 있다.

```js
// 1일째
averageTemp[0] = []; // 값을 초기화
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;

// 2일째
averageTemp[1] = []; // 값을 초기화
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 72;
```

<br />

해당 코드를 표로 나타내 보면 아래와 같다.

행은 날짜를, 열은 그날의 매 시간을 나타내며, 저장된 값은 측정된 온도다.

|72|75|79|79|81|81|
|81|79|75|75|73|73|

<br />

행렬의 내용을 확인해보고 싶을 때 쓸 수 있는 콘솔 출력함수를 함들어두면 나중에 편리하다.

전체 행과 열을 순회하려고 for 루프를 중첩했다.

여기서 i는 행, j는 열을 각각 가리킨다.

```js
function printMatrix(myMatrix) {
  for (var i = 0; i < myMatrix.length; i++) {
    for (var j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}
```

<br />

averageTemp 행렬의 내용을 직접 확인해보자.

```js
printMatrix(averageTemp);
```

<br />

3차원 이상의 다차원 배열도 가능하다.

예를 들어, 3 X 3 행렬을 만들어 각 셀에

i(행) + j(열) + z(깊이) 값을 저장하는 코드를 작성해보자.

```js
var matrix3x3x3 = [];

for (var i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];
  for (var j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (var z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}
  ```

<br />

3차원 행렬의 내용은 다음과 같이 확인할 수 있다.

```js
for (var i = 0; i < matrix3x3x3.length; i++) {
  for (var j = 0; j < matrix3x3x3[i].length; j++) {
    for (var z = 0; z < matrix3x3x3[i][j].length; z++) {
      console.log(matrix3x3x3[i][j][z]);
    }
  }
}
```

<br />

> ### 배열 메소드

자바스크립트 배열은 여타 언어의 기본 배열보다 더 많은 기능을 갖고 있다.

덕분에 코딩 시 배열 중간에 원소를 추가/삭제하는 등의 함수를 구현하지 않아도 된다.

아래 표는 많이 쓰이는 배열 객체 메소드를 간단히 정리한 것이다.

<br />

|:메소드:|:설명:|
|---|---|
|concat| 다수의 배열을 합치고, 병합된 배열의 사본을 반환한다.|
|every| false가 반환되기 전까지 배열의 각 원소별로 함수를 호출한다.|
|filter| 지정된 함수의 결과 값을 true로 만드는 원소들로만 구성된 별도의 배열을 반환한다.|
|forEach| 배열의 각 원소별로 지정된 함수를 실행한다.|
|join| 배열 원소 전부를 하나의 문자열로 합친다.|
|indexOf| 특정 원소의 인덱스를 찾아 반환한다.|
|lastIndexOf| 검색 조건에 부합하는, 가장 마지막에 위치한 원소를 찾아 그 인덱스를 반환한다.|
|map| 배열의 각 원소별로 지정된 함수를 실행한 결과로 구성된 새로운 배열을 반환한다.|
|reverse| 배열의 원소 순서를 거꾸로 바꾼다.|
|slice| 지정된 인덱스부터 우너소를 잘라 새로운 배열을 반환한다.|
|some| 지정된 함수의 결과 값을 true로 만드는 원소 각각을 전달한다.|
|sort| 배열의 원소를 알파벳순으로, 또는 지정된 함수에 따른 순서로 정렬한다.|
|toString| 배열을 문자열로 바꾸어 반환한다.|
|valueOf| toString 메소드와 같다. 배열을 문자열로 반환한다.|

<br />

> ### 여러 배열 합치기

다수의 배열을 하나로 합쳐야 할 때가 있다.

각 배열을 루프로 반복해서 원소를 하나하나 결과 배열에 담는 것도 방법이겠지만,

concat 메소드가 다행히도 이 작업을 대신한다.

<br />

병합할 배열이나 객체/원소는 몇 개가 되었든 인자로 넘겨주기만 하면 넘긴 순서 그대로 합쳐진다.

아래 코드에서는 먼저 zero가 negativeNumbers에 병합되고,

그 다음 positiveNumbers가 병합된다.

결국 numbers 배열은 -3, -2, -1, 0, 1, 2, 3 이다.

```js
var zero = 0;
var positiveNumbers = [1, 2, 3];
var negativeNumbers = [-3, -2, -1];
var numbers = negativeNumbers.concat(zero, positiveNumbers);
```

<br />

> ### 반복자 함수

배열의 각 원소를 반복할 때 사용한다.

이미 앞에서 for 등으로 루프문을 만들어 사용한 바 있다.

자바스크립트 배열은 몇 가지 반복자 메소드가 내장되어 있다.

<br />

예를 들어, 1부터 15까지의 숫자가 나열된 배열과,

2의 배수 여부를 체크하는 함수가 있다고 하자.

```js
var isEven = function (x) {
  // x가 2의 배수이면 true를 반환한다.
  console.log(x);
  return (x % 2 == 0) ? true : false;
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
```

<br />

이 부분을

```js
return (x % 2 == 0) ? true : false;
```

<br />

아래와 같이 바꿔쓸 수 있다.

```js
return (x % 2 == 0);
```

<br />

먼저 every 메소드다.

이 메소드는 함수의 결과 값이 false가 될 때까지 배열의 모든 원소를 반복한다.


```js
numbers.every(isEven);
```

<br />

numbers 배열의 첫 원소는 1이고, 1은 2의 배수가 아니므로 isEven 함수는 false를 반환한다.

따라서 isEven 함수는 딱 한번만 실행되고 그대로 프로그램은 종료된다.

<br />

다음은 some 메소드다. every 메소드와 비슷하지만,

지정된 함수의 결과가 true일 때까지 배열의 각 원소를 반복한다.

```js
numbers.some(isEven);
```

<br />

 이 배열의 첫 번째 짝수는2(2번째 원소)이다.

 첫 번째 원소는 1이므로 false가 반환되고, 

 두 번째 원소 2는 짝수이므로 true가 반환될 것이다.

 따라서 두 번째 반복까지 마치고 프로그램은 종료된다.

<br />

조건에 상관없이 배열의 모든 원소를 반복하려면 forEach 함수를 쓴다.

내부에 함수 코드를 가지며 기능적으로는 for와 동일하다.

```js
numbers.forEach(function(x){
  console.log((x % 2 == 0));
})
```

<br />

자바스크립트에는 수행 결과를 새 배열 객체로 반환하는 메소드가 둘 있다.

먼저 map 메소드다.

<br />

```js
var mymap = numbers.map(isEven);
```

<br />


<br />



<br />



<br />
