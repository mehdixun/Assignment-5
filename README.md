1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
1.ANS:
<!-- getElementById -->
*Only ID dia access kora jay.
*Single element select korar jonno.
<!-- getElementsByClassName -->
*Only class dia access kora jay.
*Same class er all element access kora jay.
<!-- querySelectorAll -->
*Onek gula element eksathe access kora jay.
*All matching element ke node list e return kore.


2.How do you create and insert a new element into the DOM?
2.ANS:
const heading = document.createElement('h1');
h1.innerText = 'This is heading'
document.body.appendChild(heading);


3.What is Event Bubbling and how does it work?
3.ANS:
Event bubbling holo ekta event er method jekhane event child element theke parent element projonto bubble hoy. Jemon ekta button jodi ekta div er vitore thake tokhon button e click korle button er eventListener age kaj korbe pore div er eventListener kaj korbe.

4.What is Event Delegation in JavaScript? Why is it useful?
4.ANS:
Event delegation holo emon ekta method jekhane parent element e listener attach kora hoy and child element er event ta handle kore. And eta useful karon multiple listener attach korar dorkar hoy na. 


5.What is the difference between preventDefault() and stopPropagation() methods?
5.ANS:
<!-- preventDefault() -->
*Page er relode bondho korar jono use kora hoy.
<!-- stopPropagation() -->
*Event bubbling bondho kore.
