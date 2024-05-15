import Items from "./Items"

class App extends React.Component{
Constructor(props){
    this.state = {
        items:[
            {
                id: 1,
                title: "стул серый",
                img: "Enisey.png",
                Category: "chairs",
                price: "49,99"

            },
        ]
    }
}

render(){
    return(
        <div class="wrapper">
            <header/>
     <Items items={this.state.items}/>
            <footer/>
        </div>
    )
   }
}
export default shop