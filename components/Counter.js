var Counter = React.createClass({
    
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    
    increment: function() {
        this.setState({
            counter: this.state.counter + 1 
        });
    },
    
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    
    getDefaultProps() {
       console.log('getDefaultProps');
    },
    componentWillMount() {
        console.log('componentWillMount');
    },
    componentDidMount() {
        console.log('componentDidMount');
    },
    componentWillUnmount() {
        console.log('componentWillUnmount');
    },
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    },
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    },
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    },
    
    render: function() {
        return (
            React.createElement('div', {className: 'counter'},
                React.createElement('h2', {className: 'counterHeader'}, 'COUNTER'),
                React.createElement('button', {onClick: this.increment, className: 'button plus'}, '+'),
                React.createElement('button', {onClick: this.decrement, className: 'button minus'}, '-'),
                React.createElement('div', {className: 'output'}, this.state.counter)
            )
        )
    }
});
