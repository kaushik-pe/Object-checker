## Features

- HasAllPropertyAs - Checks if both the objects have the same properties
- ObjCompare - Checks if two objects are equal i.e; copies of one another

## Installation

```bash    
    npm install Object_Checker
```
## How to use
  ```javascript
     /*Comparing Pre-defined Objects*/
     var prop = require('object_checker');
     var a = new String('1');
     var b = new String('2');
     var c=  new String('1') 
     console.log(prop.HasAllPropertyAs(a,b));//returns true
     console.log(prop.ObjCompare(a,b));//returns false
     console.log(prop.ObjCompare(a,c));//returns true
     /*Note: Pre-Defined Objects can be tested only if they are defined*/
     /*Comparing Pre-defined Objects*/
     var a ={
        name:"kaushik";
        roll_no:"1123";
     }
     var b ={
         name:"kaushik";
         roll_no:"1123";
     }
     var c ={
         name:"kaushik.p.e";
         roll_no:"1123";
     }
     console.log(prop.HasAllPropertyAs(a,b));//returns true
     console.log(prop.HasAllPropertyAs(a,c));//returns true
     console.log(prop.ObjCompare(a,b));//returns true
     console.log(prop.ObjCompare(a,c));//returns false
    ```
## Credits

- Kaushik Kumaran (https://www.facebook.com/kaushik.kumaran1)

## License 

(The MIT License)

Copyright (c) 2015 Soliton Technologies;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.