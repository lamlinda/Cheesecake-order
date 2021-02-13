//must use the command 'npm install jquery' in the hw3 folder, otherwise an error that
//jquery is not found will be give. Solution was found here: https://stackoverflow.com/questions/1801160/can-i-use-jquery-with-node-js

var fs = require('fs');
test('test selectEvent', () => {
 //Read the index.html file into a string
 var html = fs.readFileSync('public/index.html', 'utf8');
 expect(html).toEqual(expect.anything()); //any non-null value is okay

 //put the HTML into a testing DOM and do a sanity check
 document.body.innerHTML = html;
 const $ = require('jquery');
 expect($('h1').html()).toBe("Cheesecake Order Form");
});