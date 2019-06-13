import React from "react";
const lookup = {
  int: [
    { id: "1", text: "1" },
    { id: "2", text: "2" },
    { id: "3", text: "3" },
    { id: "4", text: "4" },
    { id: "5", text: "5" }
  ],
  abc: [
    { id: "a", text: "a" },
    { id: "b", text: "b" },
    { id: "c", text: "c" },
    { id: "d", text: "d" },
    { id: "e", text: "e" }
  ]
};

class MaterialApp extends React.Component {
  state = {
    dataValue: "int"
  };

  onChange = ({ target: { value } }) => {
    this.setState({ dataValue: value });
  };

  render() {
    const { dataValue } = this.state;
    const options = lookup[dataValue];
    return (
      <div>
        <select onChange={this.onChange}>
          <option value="int">Integers</option>
          <option value="abc">Alphabets</option>
        </select>
        <hr />
        <select>
          {options.map(o => (
            <option key={o.id} value={o.id}>
              {o.text}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default MaterialApp;
