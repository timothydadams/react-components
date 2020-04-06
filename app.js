// TODO
//var GroceryList = (props) => (
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    //'state' is just an object literal
    this.state = {
      lineThrough: false,
      isBold: false
    };
  }
  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({ lineThrough: !this.state.lineThrough });
  }

  onListItemHover() {
    this.setState({ isBold: !this.state.isBold });
  }

  //every class component must have a render() method
  render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.lineThrough ? 'line-through' : 'none',
      fontWeight: this.state.isBold ? 'bold' : 'normal'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.groceries}</li>
    );
  }
}

// Update our `TodoList` to use the new `TodoListItem` component
// This can still be a stateless function component!
var GroceryList = (props) => (
  <ul>
    {props.groceries.map(item =>
      <GroceryListItem groceries={item} />
    )}
  </ul>
);


var App = ()=> (
  <div>
    <h2>My Groceries</h2>
    <GroceryList groceries={['bananas', 'peanut butter', 'strawberry jelly', 'cheese', 'advocados']}/>
  </div>
);



ReactDOM.render(<App />, document.getElementById('app'));