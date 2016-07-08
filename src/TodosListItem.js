import React from 'react';

class TodosListItem extends React.Component {
  constructor(props){
    super(props);

    this.state={
      isEditing: false
    };
  }

  renderActionsSection() {
    if (this.state.isEditing) {
      return (
      <div>
        <button>Save</button>
        <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
      </div>
      );
    }
    return (
      <div>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button>Delete</button>
      </div>
    );
  }

  render() {
    return (
          <tr>
            <td>{this.props.task}</td>
            {this.renderActionsSection()}
          </tr>
    );
  }

  onEditClick() {
    this.setState({ isEditing: true});
  }

  onCancelClick() {
    this.setState({ isEditing: false });
  }
}

export default TodosListItem;
