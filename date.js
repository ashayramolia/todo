exports.getDate = () => {
    // Date Logic 
    var today = new Date()
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }
    return day = today.toLocaleDateString('en-US', options)
}

exports.getDay = () => {
    // Date Logic 
    var today = new Date()
    var options = {
        weekday: "long",
        day: "numeric"
    }
    return day = today.toLocaleDateString('en-US', options)
}

// console.log(module.exports)