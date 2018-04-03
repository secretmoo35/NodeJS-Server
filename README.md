#### Install project

1. npm install

#### Run project

1. node server || node server.js || npm start

* Use npm install -g nodemon
* Run "nodemon server" auto reload.

#### Create module

1. Copy folder "src/modules/template"

2. Change filename "src/modules/{{template}}" to a new filename.'

3. Change file "src/modules/{{template}}/models/model.js"


    var Model = "Template"; // change this to a new module


**Reference**

- **NodeJS:** https://nodejs.org/en/
- **Express:** https://expressjs.com/
- **MongoDB:** https://www.mongodb.com/

***REMARK** : This template is starter use the mongoDB express nodeJS no front-end template for server only.


---

**Log**
- **03/04/18** 
    - Change filename
    - glob require(models & route)
    - express-jwt