//index:
//暴露出去
module.exports={
    'GET /':async (ctx,next)=>{
        ctx.render('index.html',{
            title:'Welcom'
        });
    }
};