import React from 'react';

class AddProduct extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            prodCount:0
        }
        this.removeItem=this.removeItem.bind(this);
        this.addItem=this.addItem.bind(this);
    }
    componentDidMount(){
        let count = 0;
        for(let i=0;i<this.props.items.length;i++){
                if(this.props.items[i]===this.props.id){
                    count+=1;
                }
            }
        this.setState({
            prodCount:count
        });
    }
    componentWillReceiveProps(nextProps){
        if(!nextProps.isInCart){
            this.setState({
                prodCount:0
            });
        }
    }
    removeItem(event){
        event.preventDefault();
        this.props.onclick(false);
        this.setState({
            prodCount:this.state.prodCount-1
        });
    }
    addItem(event){
        event.preventDefault();
        this.props.onclick(true);
        this.setState({
            prodCount:this.state.prodCount+1
        });
    }
    render(){
        if(!this.props.isInCart){
        return (
            <div>
                <button className="btn btn-primary" onClick={this.addItem}>
                    Add to cart
                </button>
            </div>
        );
    }
    else{
        return(
             <div>
                <button className="btn btn-danger" onClick={this.removeItem}>
                 -
                </button>
                <span>{this.state.prodCount} in Cart</span>
                <button className="btn btn-primary" onClick={this.addItem}>
                 +
                </button>
            </div>
        );
       
         }
    }
}
export default AddProduct;