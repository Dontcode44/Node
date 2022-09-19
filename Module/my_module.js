const myWebAddress = "faztweb.com"

const list = [0, 1, 2, 3, 4]

const dic_ = {
    Name: 'Ryan',
    lastName: 'Carlson'
}
/*Now, we can save all variables in only one, to use the
"exports" from module, to use in another file*/
const groups_ = {
    myWebAddress,
    list,
    dic_
}
/*This way is the most cute and organizated to exports*/
module.exports = groups_
