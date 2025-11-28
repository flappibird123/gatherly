

export function validate(title, description, date, time) {
    const errors = [];
    if (!title.trim()) {
        errors.push("Title");
    } 
    if (!description.trim()) {
        errors.push("Description");
    }
    if (!date) {
        errors.push("Date");
    }
    if (!time) {
        errors.push("Time");
    }
    if(errors.length) {
        return errors.join(", ") + " cannot be empty!";
    }
    return "";
}