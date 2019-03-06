import blogs from './json/blog'
import slides from './json/slides'
import itemSlide from './json/itemslider'
import person from './json/person.json'
import about from './json/about'

export const blog = (state = blogs, action) => {
    switch (action.type) {
        case  "adding" :
            state = [
                ...state,
                state = {
                    header : action.header,
                    content: action.content,
                    image:action.image
                }
            ]
           
        break;
        case  "MINUS" :
            state = {
                ...state
            }
        break;
        default :
            state =  [...state]            
        break;
    }
    return state;
}

export const slider = (state = slides , action) => {
    switch (action.type) {
        case  "addslider" :
            state = [
                ...state,
                state = {
                    header : action.header,
                    content: action.content,
                    image:action.image,
                    cover:action.cover
                }
            ]
        break;
        case  "MINUS" :
            state = {
                ...state
            }
        break;
        default :
            state =  [...state]            
        break;
    }
    return state;
}


export const itemSlider = (state = itemSlide, action) => {
    switch (action.type) {
        case "addItemSlider" :
            state = [
                ...state,
                state = {
                    cover:action.cover,
                    title:action.title,
                    slider_text:action.slider_text
                }
            ]
        break;

        default :
            state = [...state]
        break;
    }
    return state;
}

export const persons = (state = person, action) => {
    switch (action.type) {
        case "addingPersons" :
            state = [
                ...state,
                state = {
                    name:action.name,
                    work:action.work,
                    follow:action.follow,
                    cover:action.cover,
                    image:action.image,
                }
            ]
        break;

        default :
            state = [...state]
        break;
    }
    return state;
}

export const aboutUs = (state = about, action) => {
    switch (action.type) {
        case "changeAbout" :
            state = {
                ...state,
                content: action.content,
                title:action.title
            }
        break;

        default :
            state  = {
                ...state
            }
        break;
    }
    return state;
}
