class List extends React.Component{
    constructor (props) {
        this.state = {
            items: props.items
        }
    }

    alert () {
        window.alert('Hi there!')
    }

    render () {
        return (
            // HTML tags
            <ul onClick={this.alert}>
                {this.state.items.map(item => (
                    // Other Component
                    <ListItem>{item}</ListItem>
                ))}
            </ul>
        )
    }
}
