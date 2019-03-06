import React from 'react'
import PageHeader from '../include/page_header'
export class Admin extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            blogs : [],
            slider: [],
            itemSlider:[],
            about:{
                title:this.props.ab.title,
                content: this.props.ab.content
            },
            persons:[]
          }
    }

    sendBlog () {
        this.props.callBlog(this.state.blogs);
        this.refs.header.value = null;
        this.refs.content.value = null;
        document.getElementById("cover").setAttribute("src", "") ;
    }

    imageUpload () {
      this.refs.inputFile.click();
    }

    fileChanges (e) {
       let files, fileReader;
       files = e.target.files;
       fileReader = new FileReader();
       fileReader.addEventListener("load", () => {
           this.setState({
               blogs : {
                   ...this.state.blogs,
                   cover: fileReader.result,
                   image:files[0]
               }
           })
       });
       fileReader.readAsDataURL(files[0]);
    }

    blogHeader () {
        this.setState({
            blogs: {
                ...this.state.blogs,
                header:this.refs.header.value
            }
        })
    }

    blogContent () {
        this.setState({
            blogs: {
                ...this.state.blogs,
                content:this.refs.content.value
            }
        })
    }

    handleClick () {
        this.sendBlog();
        this.props.finishBlog();
    }
    

    /* slider form sendded */
    handleSlider () {
        this.props.callSlider(this.state.slider);
        this.props.finishSlider();
        this.refs.s_header.value = null;
        this.refs.s_content.value = null;
        document.getElementById("s_img").setAttribute("src", "");
    }

    slider_img_change () {
        let fileReader, file;
        file = this.refs.s_image.files;
        fileReader = new FileReader ();
        fileReader.addEventListener("load", () => {
            this.setState({
                slider : {
                    ...this.state.slider,
                    cover : fileReader.result,
                    image:file[0]
                }
            })
        });
        fileReader.readAsDataURL(file[0])
    }

    slider_upload () {
        this.refs.s_image.click();
    }

    sliderContent () {
        this.setState({
            slider: {
                ...this.state.slider,
                content:this.refs.s_content.value
            }
        })
    }
    sliderHeader () {
        this.setState({
            slider: {
                ...this.state.slider,
                header:this.refs.s_header.value
            }
        })
    }


    /*  item slider form */
    handleItems () {
        this.props.callItemSlider(this.state.itemSlider);
        this.props.finishItemSlider();
        this.refs.slider_title.value = null;
        this.refs.slider_text.value = null;
        document.getElementById("itemSS").setAttribute("src", "");
    }

    itemChange () {
        let file, fileReader;
        file = this.refs.item_img.files;
        fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
            this.setState({
                itemSlider : {
                    ...this.state.itemSlider,
                    cover:fileReader.result,
                    image:file[0]
                }
            })
        });
        fileReader.readAsDataURL(file[0]);
    }

    item_title () {
        this.setState({
            itemSlider : {
                ...this.state.itemSlider,
                title:this.refs.slider_title.value
            }
        })
    }

    itemText () {
        this.setState({
            itemSlider : {
                ...this.state.itemSlider,
                slider_text:this.refs.slider_text.value
            }
        })
    }

    /*  About  form */
    sendAbout() {
       this.props.callSendAbout(this.state.about);
       this.props.finishAbout();
    }

    changeTitle () {
        this.setState({
            about : {
                ...this.state.about,
                title:this.refs.ab_title.value
            }
        })
    }

    changeContent (e) {
        this.setState({
            about : {
                ...this.state.about,
                content:this.refs.ab_content.value
            }
        });
    }

    /* persons form */
    handlePersons () {
        this.props.callPersons(this.state.persons);
        this.props.finishPersons();
        this.refs.person_name.value= null;
        this.refs.person_work.value= null;
        this.refs.person_follow.value= null;
        document.getElementById("per_image").setAttribute("src", "");
    }

    person_name () {
        this.setState({
            persons : {
                ...this.state.persons,
                name:this.refs.person_name.value
            }
        })
    }

    person_work () {
        this.setState({
            persons : {
                ...this.state.persons,
                work:this.refs.person_work.value
            }
        })
    }

    person_image () {
        let file, fileReader;
        file = this.refs.person_image.files;
        fileReader = new FileReader ();
        fileReader.addEventListener("load", () => {
            this.setState({
                persons: {
                    ...this.state.persons,
                    cover:fileReader.result,
                    image:file[0]
                }
            })
        });
        fileReader.readAsDataURL(file[0]);
    }

    person_follow () {
        this.setState({
            persons : {
                ...this.state.persons,
                follow:this.refs.person_follow.value
            }
        })
    }
    render () {
        return (
            <section className="pg-section ">
                <PageHeader />
                <div className="section-about">
                    <div className="container">
                        { /*  blog form  */ }
                        <div className="form-block">
                            <form>
                                <div className="form-header">
                                    <h3> Blog Sended Form </h3>
                                </div>
                                <div className="form-group">
                                    <label> Blog Header </label>
                                    <input type="text" ref="header" onChange={() => this.blogHeader()} placeholder="blog header" autoComplete="off" />
                                </div>
                                <div className="form-group ">
                                    <div className="blog-image-cover">
                                        <img src={this.state.blogs.cover} id="cover" title="" alt="" />
                                    </div>
                                    <input type="file" ref="inputFile" onChange={(value) => this.fileChanges(value)} />
                                    <button type="button" className="bl-image-bt" onClick={() => this.imageUpload()}> blog image </button>
                                </div>
                                <div className="form-group">
                                    <label> Blog Content </label>
                                    <textarea  ref="content" onChange={() => this.blogContent()} placeholder="blog header"  />
                                </div>
                                <div className="form-group txt-indent">
                                    <button type="button" onClick={() => this.handleClick() } className="send-form"> send blog form </button>
                                </div>
                            </form>
                        </div>

                        {/*  slider form */}
                        <div className="form-block">
                            <form>
                                <div className="form-header">
                                    <h3> Main Slider Sended Form </h3>
                                </div>
                                <div className="form-group">
                                    <label> Slider Header </label>
                                    <input type="text" ref="s_header" onChange={() => this.sliderHeader() } placeholder="slider header" autoComplete="off" />
                                </div>
                                <div className="form-group ">
                                    <div className="blog-image-cover">
                                        <img src={this.state.slider.cover} id="s_img" title="" alt="" />
                                    </div>
                                    <input type="file" ref="s_image" onChange={() => this.slider_img_change()}  />
                                    <button type="button" className="bl-image-bt" onClick={() => this.slider_upload()} > blog image </button>
                                </div>
                                <div className="form-group">
                                    <label> Blog Content </label>
                                    <input type="text"  ref="s_content" onChange={() => this.sliderContent() } placeholder="slider content"  />
                                </div>
                                <div className="form-group txt-indent">
                                    <button type="button"  className="send-form" onClick={(value) => this.handleSlider(value) } > send slider form </button>
                                </div>
                            </form>
                        </div>
                   
                        {/*  item slider form */}
                        <div className="form-block">
                            <form>
                                <div className="form-header">
                                    <h3> Item Slider Sended Form </h3>
                                </div>
                                <div className="form-group">
                                    <label> Item Slider Header </label>
                                    <input type="text" ref="slider_title" onChange={() => this.item_title()} placeholder="item slider header" autoComplete="off" />
                                </div>
                                <div className="form-group ">
                                    <div className="blog-image-cover">
                                        <img src={this.state.itemSlider.cover} id="itemSS" title="" alt="" />
                                    </div>
                                    <input type="file"  ref="item_img" onChange={(val) => this.itemChange(val)} />
                                    <button type="button" onClick={() => this.refs.item_img.click() } className="bl-image-bt" > item slider image </button>
                                </div>
                                <div className="form-group">
                                    <label> Blog Content </label>
                                    <input type="text" ref="slider_text" onChange={() => this.itemText()} placeholder="item slider content"  />
                                </div>
                                <div className="form-group txt-indent">
                                    <button type="button"  className="send-form" onClick={() => this.handleItems()} > send item slider form </button>
                                </div>
                            </form>
                        </div>

                         {/* About form */}
                         <div className="form-block">
                            <form>
                                <div className="form-header">
                                    <h3> About Sended Form </h3>
                                </div>
                                <div className="form-group">
                                    <label> About Header </label>
                                    <input type="text" ref="ab_title" value={this.state.about.title}  onChange={() => this.changeTitle()} placeholder="About  header" autoComplete="off" />
                                </div>
                                <div className="form-group">
                                    <label> About Content </label>
                                    <textarea ref="ab_content" value={this.state.about.content}  onChange={(val) => this.changeContent(val)} placeholder="About content"  />
                                </div>
                                <div className="form-group txt-indent">
                                    <button type="button" onClick={() => this.sendAbout()}  className="send-form"  > send about form </button>
                                </div>
                            </form>
                        </div>
                   
                        {/* Persons form */}
                          <div className="form-block">
                            <form>
                                <div className="form-header">
                                    <h3> Person Sended Form </h3>
                                </div>
                                <div className="form-group">
                                    <label> Person Name  </label>
                                    <input type="text" ref="person_name" onChange={() => this.person_name()} placeholder="Person name" autoComplete="off" />
                                </div>
                                <div className="form-group">
                                    <label> Person Work  </label>
                                    <input type="text" ref="person_work" onChange={() => this.person_work()} placeholder="Person work" autoComplete="off" />
                                </div>
                                <div className="form-group ">
                                    <div className="blog-image-cover">
                                        <img src={this.state.persons.cover} id="per_image" title="" alt="" />
                                    </div>
                                    <input type="file"  ref="person_image" onChange={(val) => this.person_image(val)} />
                                    <button type="button" onClick={() => this.refs.person_image.click() } className="bl-image-bt" > peron image </button>
                                </div>
                                <div className="form-group">
                                    <label> Person Follow link  </label>
                                    <input type="text" ref="person_follow" onChange={() => this.person_follow()} placeholder="Person Follow link" autoComplete="off" />
                                </div>
                                <div className="form-group txt-indent">
                                    <button type="button"  className="send-form" onClick={() => this.handlePersons()} > send persons form </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Admin