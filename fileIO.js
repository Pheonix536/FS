const fs=require('fs');
const data="Hello!\nWelcome to Node.js file system module.";
fs.writeFile('output.txt',data,(err)=>{
    if(err) {
        console.log('Error writing to file:',err);
        return;   
    }
    console.log('Data successfully written to output.txt');
    fs.readFile('input.txt','utf8',(err,content)=> {
        if(err) {
            console.log('Error reading file:',err);
            return;
        }
        console.log("\nContents of input.txt:");
        console.log(content);
    });
});