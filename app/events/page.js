import Card from '../../components/ListCard'


export default function Events() {
    return(<div>
        <Card event={event} />
        <Card event={event1} />
    </div>);
}

const event = {
    title: "Item 1",
    description: "This is a test object",
    location: "Sydney",
    date : "01/01/2000"

}

const event1 = {
    title: "Item 2",
    description: "This is a test object1",
    location: "Melbourne",
    date : "01/01/2001"
}

