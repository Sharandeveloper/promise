const userleft = false
const userwatchingcatmeme = false


function watchtutrialcallback (callback, errorcallback) {
    if (userleft) {
        errorcallback ({
            name: 'userleft',
            message: ':('
        })
    }
else if (userwatchingcatmeme) {
    errorcallback({
        name: 'user watching cat meme',
        message: 'webdevlopment < cat'

    })
}else {
    callback('thumbs up and subscribe')
}


watchtutrialcallback ((message) => {
    console.log('success:' + message)

  },  (error) => {
    console.log (error.name + '' + error.message)

 

})
function watchtutrialpromise(callback, errorcallback) {

    return  new Promise((resolve, reject) => {})
    if (userleft) {
        errorcallback({
            name: 'user left',
            message: ':/'
        })
    }else if (userwatchingcatmeme) {
        reject({
            name: 'user watching cat meme',
            Message: 'web development < cat'

        })
    }else {
        callback ('thumbs up and subscribe')
    }
}

watchtutrialpromise().then((message) => {
    console.log ('success:' + message)

}).catch((error) => {
    console.log(error.name + '' + error.message)
})


}