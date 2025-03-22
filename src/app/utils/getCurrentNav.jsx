export const getCurrentNav = (route)=>{
    switch (route) {
        case '/':
            return 0
        case "/classes":
            return 1
        case '/admission_info':
            return 2
        case '/counselling':
            return 3
        case '/holiday_coaching':
            return 4
        case '/exam_preparation':
            return 5
        case '/library':
            return 6
        case '/sponsor':
            return 7
        default:
            return 0
    }
}