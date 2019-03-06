export function changeBlog (blogs) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type:"adding",
                header:blogs.header,
                content:blogs.content,
                image:blogs.cover
            })
        }, 3000)
    }
}

export function addPerson (person) {
    return {
        type:"addingPersons",
        name:person.name,
        work:person.work,
        follow:person.follow,
        cover:person.cover,
        image:person.image
        // new Promise ((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(person.name);
        //         resolve(person.work);
        //         resolve(person.follow);
        //         resolve(person.cover);
        //         resolve(person.image);
        //     }, 2000)
        // })
    }
}

export function changeAb(about) {
    return {
        type:"changeAbout",
        title:about.title,
        content:about.content
    }
}

export function changeSlider (slider) {
    return {
        type:"addslider",
        header:slider.header,
        content:slider.content,
        image:slider.image,
        cover:slider.cover
    }
}




