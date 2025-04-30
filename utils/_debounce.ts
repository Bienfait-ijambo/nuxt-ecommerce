
export function _debounce<T>(cb:(args:any)=>T,delay:number){

    let timer:any

    return function(...args:any[]){
        clearTimeout(timer)
        timer=setTimeout(()=>cb(args),delay)
    }
}

