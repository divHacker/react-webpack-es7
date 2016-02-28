var React = require('react')
var ReactDOM = require('react-dom')

var ItemName = React.createClass({
  render: function() {
    return (
      <h1>
        {this.props.name}
      </h1>
    )
  }
})

var ItemTel = React.createClass({
  render: function() {
    return (
      <h2>
        {this.props.tel}
      </h2>
    )
  }
})

var Item = React.createClass({
  render: function() {
    return (
      <div>
        <ItemName name={this.props.name}/>
        <ItemTel tel={this.props.tel}/>
        <hr/>
      </div>
    )
  }
})

var ListItem = React.createClass({
  render: function() {
    let list = this.props.list
    let listItem = list.map((item) => {
      if (item.name === 'nati')
        return (<Item name={item.name}/>)
      else
        return (<Item name={item.name} tel={item.tel}/>)
    })
    console.log(listItem)
    return (
      <div>
        {listItem}
      </div>
    )
  }
})

let list = [
  {
    name: 'nati',
    tel:'123'
  },
  {
    name: 'peter',
    tel:'456'
  },
  {
    name: 'cat',
    tel:'789'
  }
]
ReactDOM.render(
  <div>
    <ListItem list={list}/>
  </div>,
  document.getElementById('example')
)
