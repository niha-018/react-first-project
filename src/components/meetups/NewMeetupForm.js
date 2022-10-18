import React, {useRef} from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const currentTitle = titleInputRef.current.value;
        const currentImage = imageInputRef.current.value;
        const currentDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: currentTitle,
            image: currentImage,
            description: currentDescription
        };
        console.log(meetupData);
        props.onAddMeetup(meetupData);

    }

    return <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title"> Title </label>
                    <input type="text" id="title" required ref={titleInputRef}/>
                </div>
                <div className={classes.control}> 
                    <label htmlFor="image"> Image </label>
                    <input type="url" id="image" required ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description"> Description </label>
                    <textarea  id="description" required ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Submit</button>
                </div>
            </form>
    </Card>;
}

export default NewMeetupForm;