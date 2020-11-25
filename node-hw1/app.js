const fs =require('fs');
const path =require('path');
const pathStud1800=path.join(process.cwd(),'students','1800');
const pathStud2000=path.join(process.cwd(),'students','2000');


fs.readdir(pathStud1800,(err,files)=>{
        files.forEach(file=>{
            fs.readFile(path.join(pathStud1800,file),(err,data)=>{
                    if (!data.toString().includes('female')) {
                        let newPath=path.join(pathStud2000,file);
                        fs.writeFile(newPath, data,err=>{});
                        fs.unlink(path.join(pathStud1800,file),err=>{});
                    }
            });
        });
});

fs.readdir(pathStud2000,(err,files)=>{
    files.forEach(file=>{
        fs.readFile(path.join(pathStud2000,file),(err,data)=>{
                if (data.toString().includes('female')) {
                    let newPath=path.join(pathStud1800,file);
                    fs.writeFile(newPath, data,err=>{});
                    fs.unlink(path.join(pathStud2000,file),err=>{});
                }
        });
    });
});