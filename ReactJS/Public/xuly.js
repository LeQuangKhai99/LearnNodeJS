function getName(name){
    alert(name);
}
class KhaiLe extends React.Component{
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
        this.state = {age: 19};
        this.addAge = this.addAge.bind(this);
    }
    getData(){
        alert(this.props.ten);
    }

    getAge(){
        return {age: this.props.age};
    }

    addAge(){
        this.setState({
            age: this.state.age + 1
        });
    }
    render() {
        return(
            <div>
                <h1>Hello</h1>
                <h1>{this.props.ten}</h1>
                <div>Tuổi: {this.state.age}</div>
                <div>Tuổi props: {this.state.age}</div>
                <p>{this.props.children}</p>
                <Crush say={this.props.say}></Crush>
                <button onClick={this.getData.bind(this)}>Thong tin</button>
                <button onClick={() => {var  str = "Hello "+this.props.ten; getName(str)}}>Get Name</button>
                <button onClick={this.addAge}>Add</button>
            </div>
        );
    }
};

class Crush extends React.Component{
    render(){
        return(
            <h3>{this.props.say}</h3>
        );
    }
};

class InputTag extends React.Component{

};
ReactDOM.render(
<div className="mauvang">
    <KhaiLe ten={'Khai Le'} say={"I like she but she doesn't like me"}>Sad story</KhaiLe>
    <KhaiLe ten={'Hoai XG'} say={"He like me but i don't"}>Funny story</KhaiLe>
</div>,
document.getElementById("root"));

ReactDOM.render(
    <div>
        <p className={"mauvang"} tuoi={"19"}>the future</p>
        <p className={"mauvang"} tuoi={"20"}>fighting</p>
    </div>,
    document.getElementById("root2")
);
