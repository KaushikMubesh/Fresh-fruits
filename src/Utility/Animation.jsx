export const Fadeup=(delay)=>{
    return{
        hidden:{
            opacity:0,
            y:100,

        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duraion:1,
                delay: delay
            }
        }
    }

}
export const Fadeleaf=(delay)=>{
    return{
        hidden:{
            opacity:0,
            x:100,

        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duraion:1,
                delay: delay
            }
        }
    }

}
export const Faderight=(delay)=>{
    return{
        hidden:{
            opacity:0,
            x: -100,
        },
        // x:100,
        visible:{
            // x:-100,
            opacity:1,
            x:0,
            transition:{
                duraion:1,
                delay: delay,
            }
        }
    }
}