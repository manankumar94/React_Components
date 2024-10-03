// it is a compoent  (functional one)

function Header(props){
    console.log(props);
    return(
        <div>
            <h3>Welcome to the Header Section</h3>
            <h3>We can't use multiple tags without use of parent div.</h3>
            <h4>Email passing through prop is {props.email}</h4>
            <h4>Mobile no passing through prop is {props.phone}</h4>
        </div>
    )
}
 export default Header;   // default export

 // export {Header};   // named export in case of multiple components

// any function of our component is not empty always use blank fragment..