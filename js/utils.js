function createScript(callback){
    let script = document.createElement("script")
    script.src = './opencv.js'
    script.setAttribute('async', '');
    document.body.appendChild(script)
    script.addEventListener('load', function(e){
        if(cv.getBuildInformation){
            callback()
        }else{
            cv['onRuntimeInitialized']=()=>{
                callback()
            }
        }
    })
}