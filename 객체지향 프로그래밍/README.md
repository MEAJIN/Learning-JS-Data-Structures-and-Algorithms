## 목차

- Ch.1 자바스크립트 개요
  - 객체지향 프로그래밍

<br />

## Ch.1 자바스크립트 개요

<br />

> ### 객체지향 프로그래밍

자바스크립트 객체는 아주 간단한 키-값 쌍의 집합이다.

자바스크립트 객체를 생성하는 방법은 두 가지가 있다.

```js
// 첫 번째 방법
var obj = new object();

// 두 번째 방법
// 상대적으로 더 간단하다.
var obj = {};
```

<br />

객체는 생성과 동시에 값을 초기화 할 수 있다.

```js
obj = {
  name: {
    first: '간달프',
    last: '회색의'
  },
  address: '중간계'
};
```

<br />

객체지향 프로그래밍에서 객체는 클래스의 인스턴스이며, 클래스는 객체의 특성을 정의한다.

<details>
<summary>인스턴스란?</summary>
<div markdown="1">

<br />
  
|설명|
|--|
|클래스틑 통해 만들어진 객체|

</div>
</details>

<br />

도서를 나타내는 클래스를 생각해보자.

```js
// Book 클래스
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

// Book 클래스의 인스턴스
var book = new Book('제목', 123, 9781783554874);
```

<br />

book 객체의 프로퍼티를 조회하거나 고치는 방법은 다음과 같다.

```
console.log(book.title); // 도서 제목 출력
book.title = '자바스크립트 자료 구조와 알고리즘'; // 도서 제목 업데이트
console.log(book.title); // 업데이트된 도서 제목 출력
```

<br />

클래스는 함수를 가질 수 있다.

```js
Book.prototype.printTitle = function () {
  console.log(thistitle);
};
book.printTitle();
```

<details>
<summary>prototype?</summary>
<div markdown="1">

<br />
  
|설명|
|--|
|함수가 생성될 때 만들어지며, 단지 생성자(constructor) 프로퍼티 하나만 있는 객체를 가리킨다.
|prototype 프로퍼티가 가리키는 prototype 객체의 유일한 constructor 프로퍼티는 자신과 연결된 함수를 가리킨다.|
  
<br />

정리하자면

함수를 생성할 때,
  
1. 함수 자신과 연결된 prototype 객체를 동시에 생성
  
2. 이 둘은 각각 prototype과 constructor라는 프로퍼티로 서로를 참조한다.

</div>
</details>

<br />

클래스 내부에 직접 함수를 선언할 수도 있다.

```js
this.title = title;
this.pages = pages;
this.isbn = isbn;
this.printIsbn = function(){
  console.log(this.sibn);
 }
}
book.printIsbn();
```

<br />



